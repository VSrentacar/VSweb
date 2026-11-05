const nodemailer = require("nodemailer");

const ORDER = [
  "Request",
  "name",
  "email",
  "phone",
  "Vehicle",
  "Pickup location",
  "Pickup date",
  "Pickup time",
  "Return location",
  "Return date",
  "Return time",
  "Apartment",
  "Check-in",
  "Check-out",
  "Notes",
  "Language",
];

function text(value, max) {
  return String(value == null ? "" : value)
    .replace(/[\r\n]+/g, " ")
    .trim()
    .slice(0, max);
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

  const lines = [];
  ORDER.forEach((key) => {
    const value = text(body[key], 2000);
    if (!value) return;
    lines.push(key + ": " + value);
  });

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
      text: lines.join("\n"),
    });
    res.status(200).json({ ok: true });
  } catch (err) {
    res.status(502).json({ ok: false });
  }
};
