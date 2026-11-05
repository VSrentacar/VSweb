const nodemailer = require("nodemailer");

function text(value, max) {
  return String(value == null ? "" : value)
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
}

function esc(value) {
  return text(value, 2000)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label, value) {
  const clean = text(value, 2000);
  if (!clean) return "";
  return (
    '<tr><td style="padding:11px 16px;border-bottom:1px solid #efe8df;width:38%;font-size:12px;letter-spacing:.04em;text-transform:uppercase;color:#8a8178;">' +
    esc(label) +
    '</td><td style="padding:11px 16px;border-bottom:1px solid #efe8df;font-size:15px;color:#1c1917;font-weight:600;">' +
    esc(clean) +
    "</td></tr>"
  );
}

function block(title, rows, accent) {
  const body = rows.filter(Boolean).join("");
  if (!body) return "";
  return (
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px;background:#ffffff;border:1px solid #efe8df;border-radius:14px;overflow:hidden;">' +
    '<tr><td style="padding:10px 16px;background:' +
    accent +
    ';color:#ffffff;font-size:13px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;">' +
    esc(title) +
    "</td></tr>" +
    body +
    "</table>"
  );
}

function buildMail(body) {
  const apartment = text(body.Request, 40) === "Apartment";
  const accent = apartment ? "#e39b5a" : "#08B1C5";
  const ink = apartment ? "#8a5a2b" : "#086e7a";
  const wash = apartment ? "#fbf6ef" : "#f3fbfc";
  const kind = apartment ? "Apartment request" : "Vehicle request";
  const name = text(body.name, 200);
  const email = text(body.email, 200);
  const phone = text(body.phone, 80);

  const guest = block(
    "Guest",
    [row("Name", name), row("Phone", phone), row("Email", email), row("Language", body.Language)],
    accent
  );

  const details = apartment
    ? block(
        "Stay",
        [
          row("Apartment", body.Apartment),
          row("Check-in", body["Check-in"]),
          row("Check-out", body["Check-out"]),
        ],
        accent
      )
    : block(
        "Rental",
        [
          row("Vehicle", body.Vehicle),
          row("Pickup", [text(body["Pickup location"], 200), text(body["Pickup date"], 40), text(body["Pickup time"], 20)].filter(Boolean).join(" · ")),
          row("Return", [text(body["Return location"], 200), text(body["Return date"], 40), text(body["Return time"], 20)].filter(Boolean).join(" · ")),
        ],
        accent
      );

  const notes = text(body.Notes, 2000);
  const notesBlock =
    notes && notes !== "—"
      ? block("Notes", [row("Message", notes)], accent)
      : "";

  const html =
    '<div style="margin:0;padding:24px 12px;background:' +
    wash +
    ';font-family:Segoe UI,Helvetica,Arial,sans-serif;">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;">' +
    '<tr><td style="padding:18px 20px;background:' +
    accent +
    ';border-radius:16px 16px 0 0;">' +
    '<div style="font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.85);">VS Rent a Car</div>' +
    '<div style="margin-top:4px;font-size:22px;line-height:1.2;font-weight:700;color:#ffffff;">' +
    esc(kind) +
    "</div></td></tr>" +
    '<tr><td style="padding:16px;background:' +
    wash +
    ';border:1px solid #efe8df;border-top:0;border-radius:0 0 16px 16px;">' +
    guest +
    details +
    notesBlock +
    '<div style="padding:4px 2px 0;font-size:12px;color:' +
    ink +
    ';">Reply goes to the guest.</div>' +
    "</td></tr></table></div>";

  const plain = [
    kind,
    "",
    "Guest",
    "Name: " + name,
    "Phone: " + phone,
    "Email: " + email,
    "Language: " + text(body.Language, 20),
    "",
    apartment ? "Stay" : "Rental",
    apartment ? "Apartment: " + text(body.Apartment, 200) : "Vehicle: " + text(body.Vehicle, 200),
    apartment
      ? "Check-in: " + text(body["Check-in"], 40)
      : "Pickup: " + [text(body["Pickup location"], 200), text(body["Pickup date"], 40), text(body["Pickup time"], 20)].filter(Boolean).join(" · "),
    apartment
      ? "Check-out: " + text(body["Check-out"], 40)
      : "Return: " + [text(body["Return location"], 200), text(body["Return date"], 40), text(body["Return time"], 20)].filter(Boolean).join(" · "),
    notes && notes !== "—" ? "\nNotes: " + notes : "",
  ]
    .filter((line) => line !== "")
    .join("\n");

  return { html, text: plain };
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).json({ ok: false });
    return;
  }

  const body = req.body || {};
  if (text(body.sf_extra, 200)) {
    res.status(200).json({ ok: true });
    return;
  }

  const user = process.env.GMAIL_USER;
  const pass = String(process.env.GMAIL_APP_PASSWORD || "").replace(/\s/g, "");
  if (!user || !pass) {
    res.status(500).json({ ok: false });
    return;
  }

  const email = text(body.email, 200);
  const name = text(body.name, 200);
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    res.status(400).json({ ok: false });
    return;
  }

  const mail = buildMail(body);
  const subject = text(body.subject, 180) || "VS Rent a Car";

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });
    await transporter.sendMail({
      from: '"VS Rent a Car" <' + user + ">",
      to: user,
      replyTo: email,
      subject,
      text: mail.text,
      html: mail.html,
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ ok: false });
  }
};
