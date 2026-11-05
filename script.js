/* ============================================================
   Very Special Rent a Car — interactions & i18n
   ============================================================ */

/* Update these when the real contacts and domain arrive */
const SITE = {
  brand: "Very Special Rent a Car",
  shortName: "VS Rent a Car",
  phone: "+38975622558",
  phoneDisplay: "+389 75 622 558",
  email: "info.vsrentacar@gmail.com",
  city: "Skopje",
  country: "MK",
  countryName: "North Macedonia",
};

// Replace with your real Google Maps API key
const GOOGLE_MAPS_API_KEY = "";

const LOCATIONS = {
  airport: { lat: 41.961389, lng: 21.621389, zoom: 14 },
  center: { lat: 41.9965, lng: 21.4314, zoom: 13, radiusM: 2500 },
};

const FLEET = {
  captur: {
    name: "Renault Captur",
    image: "assets/Renault Captur.png",
    price: 39,
    seats: 5,
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "Petrol", fuel: "Petrol", gear: "Automatic", luggage: "Weekend bags in the boot", body: "Compact crossover" },
      mk: { engine: "Бензин", fuel: "Бензин", gear: "Автоматски", luggage: "Доволен за викенд", body: "Компактен кросовер" },
      al: { engine: "Benzinë", fuel: "Benzinë", gear: "Automatike", luggage: "Mjafton për fundjavë", body: "Crossover i vogël" },
    },
    for: {
      en: "City driving, airport runs, couples and small families, weekend trips around North Macedonia. Easy to park, comfortable on the highway.",
      mk: "За град, аеродром, пар и мало семејство. Лесно се паркира, удобен е и на автопат. Добар за викенд низ Македонија.",
      al: "Për qytet, aeroport, çift dhe familje të vogël. Parkohet lehtë, është e rehatshme edhe në autostradë. E mirë për fundjavë nëpër Maqedoninë e Veriut.",
    },
    why: {
      en: "You get crossover height without a large footprint — a modern cabin and a boot that works after a flight. It is easy in the city and calm on longer roads.",
      mk: "Повисок е како кросовер, ама не е гломазен. Модерен ентериер и багажник што е доволен по лет. Во Скопје се вози лесно, на пат е мирен.",
      al: "Është më e lartë si crossover, por jo e madhe. Kabinë e rehatshme dhe bagazh që mjafton pas fluturimit. Në Shkup parkohet lehtë, në rrugë është e qetë.",
    },
  },
  c3: {
    name: "Citroën C3",
    image: "assets/citroen C3.png",
    price: 29,
    seats: 5,
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "Petrol", fuel: "Petrol", gear: "Manual", luggage: "Compact hatch boot", body: "City hatchback" },
      mk: { engine: "Бензин", fuel: "Бензин", gear: "Рачен", luggage: "Мал багажник", body: "Градски хечбек" },
      al: { engine: "Benzinë", fuel: "Benzinë", gear: "Manuale", luggage: "Bagazh i vogël", body: "Hatchback qyteti" },
    },
    for: {
      en: "Solo travellers, couples, tight city streets, short stays and anyone who wants the lightest, simplest car in the fleet.",
      mk: "За еден или двајца, тесни улици, краток престој — најмалото и најпросто возило во паркот.",
      al: "Për një ose dy persona, rrugë të ngushta, qëndrim të shkurtër — makina më e vogël dhe më e thjeshtë te ne.",
    },
    why: {
      en: "It is small, light and easy to park. If your days are cafés, the Old Bazaar and short hops across Skopje, the C3 is the simple choice.",
      mk: "Мал е и лесно се паркира. Ако сте по кафеани, по Чаршија и по кратки релации низ Скопје, C3 е најпростиот избор.",
      al: "Është e vogël dhe parkohet lehtë. Nëse jeni nëpër kafe, në Çarshi dhe në distanca të shkurtra në Shkup, C3 është zgjedhja më e thjeshtë.",
    },
  },
  aircross: {
    name: "Citroën C3 Aircross",
    image: "assets/citroen c3 aircross.png",
    price: 42,
    seats: 5,
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "Petrol", fuel: "Petrol", gear: "Automatic", luggage: "Larger boot than the C3", body: "Compact SUV" },
      mk: { engine: "Бензин", fuel: "Бензин", gear: "Автоматски", luggage: "Поголем од C3", body: "Компактен SUV" },
      al: { engine: "Benzinë", fuel: "Benzinë", gear: "Automatike", luggage: "Më i madh se te C3", body: "SUV i vogël" },
    },
    for: {
      en: "Families, mixed city and countryside, travellers with more luggage, and anyone who wants a higher seating position than the C3.",
      mk: "За семејство, град и надвор од град, повеќе багаж, или ако сакате повисоко седење од C3.",
      al: "Për familje, qytet dhe jashtë qytetit, më shumë bagazh, ose nëse doni ulëse më të larta se te C3.",
    },
    why: {
      en: "It sits above the C3 in space without becoming a large SUV. More boot, a raised view, still easy to place in Skopje.",
      mk: "Има повеќе простор од C3, без да биде голем SUV. Поголем багажник, повисок поглед — и пак лесен за Скопје.",
      al: "Ka më shumë hapësirë se C3, pa qenë SUV i madh. Bagazh më i madh, pamje më e lartë — dhe prapë e lehtë për Shkupin.",
    },
  },
  passat: {
    name: "Volkswagen Passat",
    image: "assets/passat2.png",
    price: 49,
    seats: 5,
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "Petrol or diesel", fuel: "Petrol or diesel", gear: "Confirmed at booking", luggage: "Large sedan boot", body: "Executive sedan" },
      mk: { engine: "Бензин или дизел", fuel: "Бензин или дизел", gear: "Ќе ви кажеме при потврда", luggage: "Голем багажник", body: "Лимузина" },
      al: { engine: "Benzinë ose naftë", fuel: "Benzinë ose naftë", gear: "Jua themi me konfirmimin", luggage: "Bagazh i madh", body: "Sedan" },
    },
    for: {
      en: "Business travel, long highway days, airport transfers, and anyone who wants a sedan rather than an SUV.",
      mk: "За работа, долг автопат, трансфер од аеродром, или ако сакате класична лимузина наместо SUV.",
      al: "Për punë, autostradë, transfere nga aeroporti, ose nëse doni sedan, jo SUV.",
    },
    why: {
      en: "The Passat is a classic European business sedan: composed on the motorway, a large boot, and a formal silhouette when you arrive.",
      mk: "Класична европска лимузина: мирна на автопат, голем багажник, сериозен изглед кога ќе стигнете.",
      al: "Sedan klasik evropian: i qetë në autostradë, bagazh i madh, duket serioz kur mbërrini.",
    },
  },
  passat_auto: {
    name: "Volkswagen Passat Automatic",
    image: "assets/passat-auto.png",
    price: 49,
    seats: 5,
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "Petrol or diesel", fuel: "Petrol or diesel", gear: "Automatic", luggage: "Large sedan boot", body: "Executive sedan" },
      mk: { engine: "Бензин или дизел", fuel: "Бензин или дизел", gear: "Автоматски", luggage: "Голем багажник", body: "Лимузина" },
      al: { engine: "Benzinë ose naftë", fuel: "Benzinë ose naftë", gear: "Automatike", luggage: "Bagazh i madh", body: "Sedan" },
    },
    for: {
      en: "Business travel, long highway days, airport transfers, and anyone who wants an automatic sedan rather than an SUV.",
      mk: "За работа, долг автопат, трансфер од аеродром, или ако сакате класична лимузина со автоматски менувач наместо SUV.",
      al: "Për punë, autostradë, transfere nga aeroporti, ose nëse doni sedan automatik, jo SUV.",
    },
    why: {
      en: "The same Passat in a lighter colour, with an automatic gearbox — composed on the motorway, a large boot, easier in city traffic.",
      mk: "Истиот Passat, малку посветла боја, со автоматски менувач — мирен на автопат, голем багажник, полесен во град.",
      al: "I njëjti Passat, ngjyrë pak më e çelët, me kambio automatike — i qetë në autostradë, bagazh i madh, më i lehtë në qytet.",
    },
  },
  xc60: {
    name: "Volvo XC60",
    image: "assets/Volvo_xc60.png",
    price: 69,
    seats: 5,
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "Petrol or diesel", fuel: "Petrol or diesel", gear: "Automatic", luggage: "SUV boot", body: "Premium SUV" },
      mk: { engine: "Бензин или дизел", fuel: "Бензин или дизел", gear: "Автоматски", luggage: "Багажник како SUV", body: "Премиум SUV" },
      al: { engine: "Benzinë ose naftë", fuel: "Benzinë ose naftë", gear: "Automatike", luggage: "Bagazh SUV", body: "SUV premium" },
    },
    for: {
      en: "Families who want a premium SUV, longer journeys, and a quiet, comfortable cabin.",
      mk: "За семејство што сака поудобен SUV и подолго патување.",
      al: "Për familje që duan SUV më të rehatshëm dhe rrugë më të gjata.",
    },
    why: {
      en: "Volvo is known for safety and a quiet cabin. The XC60 is the car you choose when the journey should feel as considered as the arrival.",
      mk: "Volvo е познат по безбедност и тишина во кабината. XC60 е за кога сакате патувањето да биде удобно до крај.",
      al: "Volvo njihet për siguri dhe kabinë të qetë. XC60 është kur doni që e gjithë rruga të jetë e rehatshme.",
    },
  },
  vito: {
    name: "Mercedes-Benz Vito 7+1 / 8+1",
    image: "assets/Mercedes_Vito.png",
    price: 89,
    seats: "8 / 9",
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "Diesel", fuel: "Diesel", gear: "Automatic", luggage: "Behind the last row", body: "People carrier 7+1 or 8+1" },
      mk: { engine: "Дизел", fuel: "Дизел", gear: "Автоматски", luggage: "Зад последниот ред", body: "Комбе 7+1 или 8+1" },
      al: { engine: "Naftë", fuel: "Naftë", gear: "Automatike", luggage: "Pas rreshtit të fundit", body: "Furgon 7+1 ose 8+1" },
    },
    for: {
      en: "Mercedes people carrier. Groups of up to eight or nine people, depending on the 7+1 or 8+1 layout. Family travel, team trips, hotel and airport transfers. Write the passenger count in the notes.",
      mk: "Mercedes комбе. За група до осум или девет души, во распоред 7+1 или 8+1. Семејство, екипа, хотел и аеродром. Напишете колку патници во забелешките.",
      al: "Furgon Mercedes. Për grup deri në tetë ose nëntë persona, në planin 7+1 ose 8+1. Familje, ekip, hotel dhe aeroport. Shkruani sa pasagjerë te shënimet.",
    },
    why: {
      en: "The Vito can be 7+1 (eight seats: driver plus seven) or 8+1 (nine seats: driver plus eight). Tell us how many people when you book so we set the right layout.",
      mk: "Vito може да биде 7+1 (осум седишта: возач и седум) или 8+1 (девет седишта: возач и осум). Кажете колку души при резервација за да го подготвиме распоредот.",
      al: "Vito mund të jetë 7+1 (tetë ulëse: shofer dhe shtatë) ose 8+1 (nëntë ulëse: shofer dhe tetë). Na tregoni sa persona me rezervimin që ta përgatitim planin.",
    },
  },
  viano: {
    name: "Mercedes-Benz Viano 8+1",
    image: "assets/Mercedes_Viano_8_1.png",
    price: 109,
    seats: 9,
    doors: 5,
    ac: true,
    specs: {
      en: { engine: "V6 petrol", fuel: "Petrol", gear: "Automatic", luggage: "Behind the last row; more with seats folded", body: "Executive van 8+1" },
      mk: { engine: "V6 бензин", fuel: "Бензин", gear: "Автоматски", luggage: "Зад последниот ред; повеќе ако се преклопат седиштата", body: "Комбе 8+1" },
      al: { engine: "V6 benzinë", fuel: "Benzinë", gear: "Automatike", luggage: "Pas rreshtit të fundit; më shumë nëse palosen ulëset", body: "Furgon 8+1" },
    },
    for: {
      en: "Groups of up to nine people (driver plus eight passengers), VIP transfers, corporate travel, weddings and large families.",
      mk: "За група до девет души (возач и осум патници), ВИП трансфер, фирма, свадба, големо семејство.",
      al: "Për grup deri në nëntë persona (shofer dhe tetë pasagjerë), transfere VIP, firmë, dasmë, familje të madhe.",
    },
    why: {
      en: "8+1 means nine seats in total. This Viano carries a V6 badge and is the larger Mercedes people-mover in the fleet.",
      mk: "8+1 значи девет седишта вкупно. Овој Viano е со V6 и е поголемото Mercedes комбе во паркот.",
      al: "8+1 do të thotë nëntë ulëse gjithsej. Ky Viano ka motor V6 dhe është furgoni më i madh Mercedes te ne.",
    },
  },
};


const I18N = {
  en: {
    skip: "Skip to booking",
    nav_home: "Home",
    nav_why: "Why us",
    nav_fleet: "Fleet",
    nav_how: "How it works",
    nav_locations: "Locations",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_apt: "Need an apartment?",
    apt_doc_title: "Apartment | VS Rent a Car Skopje",
    apt_meta_desc:
      "Rental apartment at Orce Nikolov 206, Skopje, from VS Rent a Car. Photos coming soon — call +389 75 622 558.",
    apt_cta_kicker: "Also with us",
    apt_cta_title: "Need a place to stay?",
    apt_cta_text:
      "Besides cars and vans, we rent an apartment at Orce Nikolov 206, Skopje. Open the page and get in touch.",
    apt_cta_btn: "View the apartment",
    apt_eyebrow: "Stay in Skopje",
    apt_title: "Apartment for rent",
    apt_addr: "Orce Nikolov 206, Skopje",
    apt_map: "Open on the map",
    apt_lead:
      "The apartment is at Orce Nikolov 206, Skopje. The frames below are for the photos. Until then, call or write.",
    apt_photos: "Photos",
    apt_photo: "Photo",
    apt_photo_soon: "Photo coming soon",
    apt_contact: "Ask about the apartment",
    apt_form_title: "Reserve the apartment",
    apt_form_sub: "Send a request with your dates. We confirm by phone or email.",
    apt_checkin: "Check-in date",
    apt_checkout: "Check-out date",
    apt_ph_notes: "Number of guests, anything we should know…",
    apt_btn_book: "Send apartment request",
    err_apt_dates: "Check-out must be after check-in.",
    nav_privacy: "Privacy Policy",
    nav_terms: "Terms of Use",
    nav_cookies: "Cookie Policy",
    nav_copyright: "Copyright & IP",
    nav_rental: "Rental Conditions",
    footer_legal: "Legal",
    footer_ownership:
      "This website, the Very Special brand, logo, photographs, texts, design and software are the exclusive intellectual property of Very Special Rent a Car. Unauthorised copying, scraping or commercial use is prohibited.",
    lang_group: "Language",
    menu_open: "Open menu",
    menu_close: "Close menu",
    menu_label: "Menu",
    modal_close: "Close",
    page_title: "VS Rent a Car Skopje | Very Special Rent a Car — Airport & city centre",
    faq_doc_title: "FAQ | VS Rent a Car Skopje — age 24, deposit, Airport Skopje pickup",
    meta_desc:
      "Rent a car in Skopje at VS Rent a Car (Very Special Rent a Car). Pickup at Airport Skopje or anywhere in the city centre. C3, Captur, Passat, XC60 and Mercedes vans from €29/day. Call +389 75 622 558.",
    meta_keywords:
      "VS Rent a Car, VS Rentacar, Very Special Rent a Car, rent a car Skopje, car rental Skopje Airport, Airport Skopje, изнајмување автомобили Скопје, qira makinash Shkup, Mercedes Vito Skopje",
    faq_meta_desc:
      "FAQ for VS Rent a Car (Very Special Rent a Car) in Skopje: documents, age, deposit, insurance, airport pickup and cancellation.",
    hero_eyebrow: "VS Rent a Car · Skopje",
    hero_title: "Drive something\nvery special.",
    hero_lead:
      "VS Rent a Car — Very Special Rent a Car in Skopje. Pickup at Skopje Airport or anywhere in the city centre. A curated European fleet, confirmed personally.",
    hero_cta: "Reserve now",
    form_title: "Reserve your vehicle",
    form_subtitle:
      "Send a request — we confirm availability within minutes during business hours.",
    label_pickup: "Pickup location",
    label_dropoff: "Drop-off location",
    label_pickup_date: "Pickup date",
    label_pickup_time: "Pickup time",
    label_return_date: "Return date",
    label_return_time: "Return time",
    label_name: "Full name",
    label_phone: "Phone number",
    label_email: "Email",
    label_notes: "Optional notes",
    opt_select: "Select location",
    loc_airport: "Airport Skopje",
    loc_center: "Centre of Skopje",
    ph_name: "Your full name",
    ph_phone: "+389 70 123 456",
    ph_email: "you@email.com",
    ph_notes: "Child seat, extra driver, flight number…",
    btn_book: "Book Your Vehicle",
    btn_sending: "Sending…",
    form_hint: "No payment now. We confirm the booking by phone or email.",
    success_title: "Thank you",
    success_text:
      "Thank you for filling in the form. We will contact you as soon as we can.",
    btn_ok: "OK",
    btn_another: "Send another request",
    how_eyebrow: "Simple process",
    how_title: "How it works",
    how_sub: "Three clear steps from request to keys in hand.",
    how_1_title: "Fill the form",
    how_1_text:
      "Choose locations, dates and send your request. Prefer a specific model? Order it from the fleet below.",
    how_2_title: "We confirm with you",
    how_2_text:
      "A specialist contacts you to confirm the vehicle, price, documents and pickup time.",
    how_3_title: "Pick up your car",
    how_3_text:
      "Collect the keys at Skopje Airport (near the city) or in the centre of Skopje — inspected, clean and ready to drive.",
    why_eyebrow: "The difference you feel",
    why_title_1: "Why",
    why_lead:
      "Ordinary rentals hand you a number. We hand you a name, a clean key, and someone who is actually waiting — at Skopje Airport or anywhere in the centre of the city.",
    why_1_t: "Meet & Greet",
    why_1_p:
      "We confirm in person. No anonymous counter, no disappearing chat — a real handover at the airport or in the heart of Skopje.",
    why_2_t: "A fleet with a pulse.",
    why_2_p:
      "From city cars to Mercedes vans — chosen to look sharp on black asphalt and feel right in your hands. Tight. European. Intentional.",
    why_3_t: "Two locations in Skopje.",
    why_3_p:
      "Land at the airport beside the city, or start from the whole city centre. Same standard. Same people. Same promise: it has to feel very special.",
    why_slot: "Your photo will live here",
    fleet_eyebrow: "Our collection",
    fleet_title: "The fleet",
    fleet_sub:
      "From city hatchbacks to executive SUVs and Mercedes people carriers.",
    filters_label: "Filter fleet",
    filter_all: "All",
    filter_cars: "Cars",
    filter_vans: "Vans",
    price_from: "From",
    price_day: "/ day",
    btn_order: "Order this vehicle",
    btn_details: "View details",
    spec_seats: "Seats",
    spec_doors: "Doors",
    spec_engine: "Engine",
    spec_fuel: "Fuel",
    spec_gear: "Gearbox",
    spec_luggage: "Luggage",
    spec_body: "Body",
    spec_ac: "Climate",
    spec_ac_yes: "Air conditioning",
    detail_for: "This car is right for",
    detail_why: "Why this car",
    detail_back: "Back to fleet",
    detail_book: "Book this car",
    detail_note: "Seats and body style are for this model. Exact engine, fuel and gearbox of the car you receive are confirmed when we accept your request.",
    car_captur:
      "Compact crossover with presence — ideal for the city and weekend trips.",
    car_c3: "Agile hatchback for effortless urban driving and easy parking.",
    car_aircross:
      "Raised compact SUV with extra space for families and longer journeys.",
    car_passat:
      "Executive sedan for business travel, airport runs and highway comfort.",
    car_passat_auto:
      "Same Passat, lighter colour — calm on the highway, easy in the city.",
    car_xc60:
      "Premium SUV with Volvo safety and a quiet cabin.",
    car_vito:
      "People carrier in 7+1 or 8+1 — groups of up to eight or nine. Say how many passengers when you book.",
    car_viano:
      "Executive van for VIP transfers, corporate travel and larger groups.",
    loc_eyebrow: "Skopje",
    loc_title: "Our locations",
    loc_sub:
      "Two locations: Skopje Airport, near the city, and the centre of Skopje — the whole city-centre area.",
    addr_airport: "Skopje International Airport (SKP), near Skopje — Petrovec",
    addr_center: "The whole city-centre area of Skopje — pickup arranged in the centre",
    map_label: "Map of pickup locations",
    btn_directions: "Get directions",
    faq_eyebrow: "Good to know",
    faq_title: "Frequently asked questions",
    faq_lead:
      "Documents, insurance and the road — in line with North Macedonia law, plus how booking with us works.",
    faq_cta: "Still need a car? Send a request",
    faq_1_q: "Which documents do I need to rent a car?",
    faq_1_a:
      "Under the Law on Road Traffic Safety you may drive here only with a valid Macedonian licence, a recognised foreign licence or an International Driving Permit, for the right category (usually B). The main driver must be at least 24 — we do not rent to anyone under 24. At pickup we need originals: licence, passport or national ID, and a card in the main driver’s name. Photos on a phone are not enough. Visitors should bring a passport. If the licence is not in Latin or Cyrillic letters, bring an IDP with the original.",
    faq_2_q: "Is a security deposit required?",
    faq_2_a:
      "Yes. A refundable deposit is authorised or held on a card at pickup. The amount depends on the vehicle (a van is usually higher than a city car). We release the hold after the car is returned in the agreed condition, with the correct fuel and no new damage. Your bank then posts the release; that often takes a few working days, not the same hour.",
    faq_3_q: "What insurance is included?",
    faq_3_a:
      "By the Law on Compulsory Traffic Insurance, every vehicle on Macedonian roads must have third-party liability (AO). That cover is on the car. Collision / kasko cover with an excess is part of the rental contract — it does not replace AO. Super CDW and other extras are added only when we confirm, not automatically on the website. Walk around the car with us and mark existing damage on the handover sheet. Traffic and parking fines are the driver’s responsibility.",
    faq_4_q: "What is the minimum driver age?",
    faq_4_a:
      "We rent from 24, including with a foreign licence. Extra drivers must be 24 or over as well. We do not rent to drivers under 24 and there is no young-driver surcharge from 24. A “novice driver” (first two years of the licence) must drive with 0.00 alcohol and has extra limits, including at night — tell us if that is you so we can check the car.",
    faq_5_q: "How does the fuel policy work?",
    faq_5_a:
      "We use a full-to-full policy. You collect the car with a full tank and return it full to the same standard. If it comes back with less fuel, we charge the missing fuel plus a refuelling service fee. There is no prepaid fuel pack on the website. Keep a receipt from the last fill if you can; it helps if anything is unclear at return.",
    faq_6_q: "Do you offer airport pickup?",
    faq_6_a:
      "Yes. One location is Skopje International Airport (Airport Skopje) in Petrovec, just outside the city. Put your flight number in the notes so we can meet you after landing. The other location is the centre of Skopje — the whole city-centre area, not one street or square. For the centre we agree an exact point with you after confirmation (hotel, address or landmark). Pickup and return are arranged with our team, not from a self-service key box.",
    faq_7_q: "What is your cancellation policy?",
    faq_7_a:
      "Sending the form is a request, not a paid booking. You can cancel free of charge until we confirm. After confirmation, cancellations made at least 48 hours before the agreed pickup time are usually free. Later cancellations, no-shows or a no-contact arrival may be charged. We write the exact terms in the confirmation message so you have them in one place.",
    faq_8_q: "Can I add a child seat or extra driver?",
    faq_8_a:
      "Yes, if a seat is free for your dates. Macedonian law: a child under 12 must not sit in the front; a child under 5 in the back must be in a proper child seat; a child under 2 may sit in the front only in a rear-facing seat with the airbag off. Seat belts are compulsory for everyone. Extra drivers must be named on the contract, hold a valid licence of the right category and be at least 24 — we do not add a driver under 24. Fees are confirmed before pickup.",
    faq_9_q: "What if my flight is delayed?",
    faq_9_a:
      "Put the flight number in the notes when you send the request. For airport pickups we watch delays when we can and shift the meeting time. Still call or message us if you already know you will be late, if the flight is diverted, or if you cannot find us in the arrivals area. If we cannot wait, we will agree a new time rather than leaving you without a car.",
    faq_10_q: "Can I take the car outside North Macedonia?",
    faq_10_a:
      "Only with our written OK before pickup. Without it you can be uninsured. For driving abroad the car needs valid international third-party proof (Green Card) for those countries — we arrange that at confirmation if we allow the trip. Tell us the countries in the request. Keep the registration papers in the car; police and border officers can ask for them.",
    faq_11_q: "How do I pay?",
    faq_11_a:
      "The website does not take payment. We confirm the daily rate and extras with you first. You pay as agreed at pickup — typically card or cash, in denars or another currency we accept. There is no young-driver surcharge from 24; we do not rent under 24. A refundable deposit is authorised on a card in the main driver’s name. Fleet prices are starting “from” rates per day in euros as a guide; season, length of hire and extras can change the total.",
    faq_12_q: "How do I request a van instead of a car?",
    faq_12_a:
      "On the homepage fleet, use the Cars / Vans switch and choose Mercedes-Benz Vito (7+1 or 8+1 — eight or nine seats including the driver) or Viano 8+1 (nine seats including the driver). Tap Order or open the details page, then send the booking form. Write how many passengers and how much luggage you have in the notes so we can confirm the right van is free.",
    faq_13_q: "Can I rent with a foreign driving licence?",
    faq_13_a:
      "Yes, if it is valid for the category of the car and you are at least 24. We rent with a foreign licence from 24, same as with a Macedonian licence — we do not rent under 24 and there is no young-driver surcharge from 24. Under the Law on Road Traffic Safety, a visitor on a temporary stay may drive on a foreign licence (reciprocity). If the licence is not in Latin or Cyrillic, bring an International Driving Permit with the original. Bring a passport. After six months of residence here the law expects a Macedonian licence — that does not apply to a normal tourist rental.",
    faq_14_q: "When is the deposit returned?",
    faq_14_a:
      "After return we check fuel, cleanliness and damage against the handover notes. If everything matches the agreement, we release the card hold. The money then shows on your statement according to your bank — often several working days, not instantly, and not as a second “refund” from us if it was only a pre-authorisation. If something is missing or damaged, we explain any deduction before we close the file.",
    faq_15_q: "Where do we meet in the city centre?",
    faq_15_a:
      "“Centre of Skopje” means the whole city-centre area, not a single street, square or office you have to find alone. After we confirm, we agree an exact meeting point with you — for example a hotel, a home address or a landmark that both sides can reach. We do the same for return. If your plans change that day, call us so we can move the point rather than waiting in the wrong place.",
    faq_16_q: "Can I change dates or the car after I send a request?",
    faq_16_a:
      "Yes, while the request is still open: call or email the new dates or vehicle. After we have confirmed, changes still depend on whether that car is free. If the price changes, we tell you before we lock the new plan. The form is not a guaranteed reservation until we accept it by phone or email.",
    faq_17_q: "What traffic rules should I follow?",
    faq_17_a:
      "You drive on the right. Seat belts are compulsory in every seat that has one. Use dipped headlights by day and by night. The general alcohol limit is 0.50 g/kg; novice drivers (first two years of the licence) must be 0.00. From 15 November to 15 March winter equipment is mandatory — winter tyres with at least 4 mm tread, or summer tyres plus snow chains. We prepare the car for that season. Speed limits are as signed (often 50 km/h in town). Radar detectors are illegal. Motorway tolls are paid at the booth. Fines are the driver’s to pay.",
    faq_18_q: "What should I do if there is an accident?",
    faq_18_a:
      "Stay at the scene. For small material damage between two cars, if nobody is hurt and both sides agree, fill in the European accident report (the form from the National Insurance Bureau of North Macedonia). Call the police on 112 if anyone is injured, damage is large, a driver is drunk, or a foreign-registered vehicle is involved — the law requires a report in those cases. Call us as soon as you can. Do not drink alcohol until the check is done. Without a proper report, insurance may not pay and you can remain liable for the excess.",
    faq_cat_docs: "Documents & drivers",
    faq_cat_money: "Deposit, insurance & fuel",
    faq_cat_pickup: "Locations & pickup",
    faq_cat_booking: "Booking & changes",
    footer_tag:
      "VS Rent a Car (Very Special Rent a Car) — cars and vans in Skopje. Pickup at the airport or in the city centre.",
    footer_contact: "Contact",
    footer_links: "Quick links",
    footer_rights: "All rights reserved.",
    to_top: "Back to top",
    privacy_title: "Privacy Policy",
    privacy_p1:
      "Very Special Rent a Car (“we”, “us”) is the controller of personal data collected through this website and during the rental process. We process data in line with the EU General Data Protection Regulation (GDPR) and the applicable laws of North Macedonia.",
    privacy_p2:
      "We collect the information you submit in the booking form: name, phone number, email address, pickup and return details, optional notes and the vehicle requested. If you rent with us, we may also process driving-licence data, identity documents and payment or deposit details as required to perform the contract and meet legal obligations.",
    privacy_p3:
      "Purposes: to respond to rental requests, conclude and administer the rental agreement, provide roadside support, prevent fraud, comply with traffic and tax law, and improve our service. Legal bases include performance of a contract, legitimate interests in operating a secure rental business, and legal obligation.",
    privacy_p4:
      "We do not sell your data. We share it only with insurers, payment processors, IT providers and public authorities when necessary. Data is stored only as long as needed for the rental, legal retention (including accounting) and the defence of claims, then deleted or anonymised.",
    privacy_p5:
      "You have the right to access, rectify, erase, restrict or object to processing, and to data portability, subject to legal limits. You may lodge a complaint with the Personal Data Protection Agency of North Macedonia. Contact us at info.vsrentacar@gmail.com to exercise your rights.",
    privacy_p6:
      "This website may use essential storage (for example language preference) and embedded maps provided by Google. Map usage is subject to Google’s own privacy terms.",
    privacy_full: "Read the full Privacy Policy",
    err_required: "This field is required.",
    err_email: "Please enter a valid email address.",
    err_phone: "Please enter a valid phone number.",
    err_dates: "Return must be after pickup.",
    date_pick: "Choose a date",
    err_send: "The request could not be sent. Please call or email us.",
    notes_vehicle: "Requested vehicle: ",
    consent_title: "Cookies, cache and your data",
    consent_text:
      "We use essential cookies and browser cache (for example your language) so the site works. If you send a booking request, we process your name, phone, email and rental details to reply and, if you hire, to run the contract. Maps on this site may set cookies. We do not sell your data.",
    consent_accept: "I understand",
    consent_privacy: "Privacy Policy",
    consent_cookies: "Cookie Policy",
  },
  mk: {
    skip: "Оди на резервација",
    nav_home: "Почетна",
    nav_why: "Зошто ние",
    nav_fleet: "Возен парк",
    nav_how: "Како функционира",
    nav_locations: "Локации",
    nav_faq: "ЧПП",
    nav_contact: "Контакт",
    nav_apt: "Или ви треба стан?",
    apt_doc_title: "Стан | VS Rent a Car Скопје",
    apt_meta_desc:
      "Стан под наем на ул. Орце Николов бр. 206, Скопје, од VS Rent a Car. Сликите доаѓаат наскоро — јавете се на +389 75 622 558.",
    apt_cta_kicker: "И ова го имаме",
    apt_cta_title: "Ви треба стан?",
    apt_cta_text:
      "Покрај автомобили и комбиња, изнајмуваме стан на ул. Орце Николов бр. 206, Скопје. Отворете ја страницата и јавете се.",
    apt_cta_btn: "Кон станот",
    apt_eyebrow: "Престој во Скопје",
    apt_title: "Стан под наем",
    apt_addr: "ул. Орце Николов бр. 206, Скопје",
    apt_map: "Отвори на мапа",
    apt_lead:
      "Станот е на ул. Орце Николов бр. 206, Скопје. Рамките подолу се за сликите. Дотогаш јавете се или пишете.",
    apt_photos: "Слики",
    apt_photo: "Слика",
    apt_photo_soon: "Сликата ќе дојде тука",
    apt_contact: "Прашајте за станот",
    apt_form_title: "Резервирајте го станот",
    apt_form_sub: "Испратете барање со датуми. Потврдуваме по телефон или е-пошта.",
    apt_checkin: "Датум на пријавување",
    apt_checkout: "Датум на одјавување",
    apt_ph_notes: "Број на гости, нешто што треба да знаеме…",
    apt_btn_book: "Испрати барање за стан",
    err_apt_dates: "Одјавувањето мора да биде по пријавувањето.",
    nav_privacy: "Политика за приватност",
    nav_terms: "Услови за користење",
    nav_cookies: "Политика за колачиња",
    nav_copyright: "Авторски права",
    nav_rental: "Услови за изнајмување",
    footer_legal: "Правни документи",
    footer_ownership:
      "Оваа веб-страница, брендот Very Special, логото, фотографиите, текстовите, дизајнот и софтверот се исклучива интелектуална сопственост на Very Special Rent a Car. Неовластено копирање, собирање податоци или комерцијална употреба е забрането.",
    lang_group: "Јазик",
    menu_open: "Отвори мени",
    menu_close: "Затвори мени",
    menu_label: "Мени",
    modal_close: "Затвори",
    page_title: "VS Rent a Car Скопје | Very Special Rent a Car — аеродром и центар",
    faq_doc_title: "ЧПП | VS Rent a Car Скопје — возраст 24, депозит, Аеродром Скопје",
    meta_desc:
      "Изнајмете автомобил во Скопје кај VS Rent a Car (Very Special Rent a Car). Преземање на Аеродром Скопје или во центар. C3, Captur, Passat, XC60 и Mercedes комбиња од 29 €/ден. Тел. +389 75 622 558.",
    meta_keywords:
      "VS Rent a Car, VS Rentacar, Very Special Rent a Car, изнајмување автомобили Скопје, rent a car Skopje, Аеродром Скопје, комбе Скопје",
    faq_meta_desc:
      "ЧПП за VS Rent a Car во Скопје: документи, возраст 24, депозит, осигурување АО, преземање на Аеродром Скопје и во центар, откажување.",
    hero_eyebrow: "VS Rent a Car · Скопје",
    hero_title: "Возете нешто\nнавистина посебно.",
    hero_lead:
      "VS Rent a Car — Very Special Rent a Car во Скопје. Преземање на Аеродром Скопје или каде било во центар. Европски автомобили, потврда лично.",
    hero_cta: "Резервирај сега",
    form_title: "Резервирајте возило",
    form_subtitle:
      "Испратете барање. Во работно време враќаме за неколку минути.",
    label_pickup: "Локација на преземање",
    label_dropoff: "Локација на враќање",
    label_pickup_date: "Датум на преземање",
    label_pickup_time: "Време на преземање",
    label_return_date: "Датум на враќање",
    label_return_time: "Време на враќање",
    label_name: "Име и презиме",
    label_phone: "Телефонски број",
    label_email: "Е-пошта",
    label_notes: "Забелешки (по избор)",
    opt_select: "Изберете локација",
    loc_airport: "Аеродром Скопје",
    loc_center: "Центар на Скопје",
    ph_name: "Вашето име и презиме",
    ph_phone: "+389 70 123 456",
    ph_email: "vie@email.com",
    ph_notes: "Детско седиште, дополнителен возач, број на лет…",
    btn_book: "Резервирајте возило",
    btn_sending: "Се испраќа…",
    form_hint: "Без плаќање сега. Резервацијата ја потврдуваме по телефон или е-пошта.",
    success_title: "Ви благодариме",
    success_text:
      "Ви благодариме што го пополнивте формуларот. Ќе ве контактираме што е можно поскоро.",
    btn_ok: "Во ред",
    btn_another: "Испратете ново барање",
    how_eyebrow: "Едноставен процес",
    how_title: "Како функционира",
    how_sub: "Три јасни чекори од барање до клучеви во рака.",
    how_1_title: "Пополнете го формуларот",
    how_1_text:
      "Изберете локации и датуми и испратете барање. Сакате конкретен модел? Нарачајте го од возниот парк подолу.",
    how_2_title: "Ве повикуваме за потврда",
    how_2_text:
      "Ќе ве контактираме за возилото, цената, документите и терминот.",
    how_3_title: "Преземете го возилото",
    how_3_text:
      "Земете ги клучевите на Аеродром Скопје или во центар — прегледано, чисто и подготвено за возење.",
    why_eyebrow: "Разликата што се чувствува",
    why_title_1: "Зошто",
    why_lead:
      "Кај другите добивате број. Кај нас — име, чист автомобил и човек што навистина ве чека. На Аеродром Скопје или во центар.",
    why_1_t: "Meet & Greet",
    why_1_p:
      "Потврдуваме лично. Нема анонимен шалтер и пораки што се губат — предавање на аеродром или во центар на Скопје.",
    why_2_t: "Одбран парк.",
    why_2_p:
      "Од градски автомобили до Mercedes комбиња. Избрани да изгледаат убаво и да се возат добро. Европски модели, без случаен избор.",
    why_3_t: "Две локации во Скопје.",
    why_3_p:
      "Од аеродром, веднаш до градот, или од целиот центар. Ист стандард, исти луѓе. Треба да се осети very special.",
    why_slot: "Тука ќе стои вашата фотографија",
    fleet_eyebrow: "Нашата колекција",
    fleet_title: "Возен парк",
    fleet_sub:
      "Од градски хечбекови до SUV и Mercedes комбиња.",
    filters_label: "Филтрирај возен парк",
    filter_all: "Сите",
    filter_cars: "Автомобили",
    filter_vans: "Комбиња",
    price_from: "Од",
    price_day: "/ ден",
    btn_order: "Нарачајте го ова возило",
    btn_details: "Детали",
    spec_seats: "Седишта",
    spec_doors: "Врати",
    spec_engine: "Мотор",
    spec_fuel: "Гориво",
    spec_gear: "Менувач",
    spec_luggage: "Багаж",
    spec_body: "Тип",
    spec_ac: "Клима",
    spec_ac_yes: "Клима",
    detail_for: "За кого е",
    detail_why: "Зошто ова возило",
    detail_back: "Назад кон паркот",
    detail_book: "Резервирајте го",
    detail_note: "Бројот на седишта и типот се за овој модел. Точниот мотор, гориво и менувач ви ги кажуваме кога ќе го прифатиме барањето.",
    car_captur:
      "Компактен кросовер — згоден за град и за викенд надвор.",
    car_c3: "Мал хечбек, лесен за паркирање и за градско возење.",
    car_aircross:
      "Повисок од C3, со повеќе багаж — за семејство и подолги патишта.",
    car_passat:
      "Лимузина за работа, аеродром и автопат.",
    car_passat_auto:
      "Истиот Passat, посветла боја — мирен на автопат, лесен во град.",
    car_xc60:
      "Премиум SUV од Volvo, со тивка кабина.",
    car_vito:
      "Комбе 7+1 или 8+1 — до осум или девет души. Кажете колку патници при резервација.",
    car_viano:
      "Поголемо Mercedes комбе за ВИП трансфер и групи до девет.",
    loc_eyebrow: "Скопје",
    loc_title: "Нашите локации",
    loc_sub: "Две локации: Аеродром Скопје, близу градот, и центарот на Скопје — целата централна зона.",
    addr_airport: "Меѓународен аеродром Скопје (SKP), близу Скопје — Петровец",
    addr_center: "Целата централна зона на Скопје — преземање во центарот на градот",
    map_label: "Карта на локации за преземање",
    btn_directions: "Како да стигнете",
    faq_eyebrow: "Корисно е да се знае",
    faq_title: "Често поставувани прашања",
    faq_lead:
      "Документи, осигурување и сообраќај — според законите на Северна Македонија, плус како работи резервацијата кај нас.",
    faq_cta: "Сè уште ви треба возило? Испратете барање",
    faq_1_q: "Кои документи се потребни за изнајмување?",
    faq_1_a:
      "Според Законот за безбедност на сообраќајот на патиштата, тука се вози само со важечка македонска дозвола, признаена странска дозвола или меѓународна возачка дозвола, за соодветната категорија (обично Б). Главниот возач мора да има најмалку 24 години — под 24 не изнајмуваме. При преземање бараме оригинали: дозвола, пасош или лична карта и картичка на главниот возач. Слика на телефон не чини. Гостите носат пасош. Ако дозволата не е на латиница или кирилица, донесете и меѓународна возачка дозвола.",
    faq_2_q: "Дали се бара депозит?",
    faq_2_a:
      "Да. Повратен депозит се овластува или задржува на картичка при преземање. Износот зависи од возилото (комбе обично е повисок од градски автомобил). Го ослободуваме задржувањето откако автомобилот ќе се врати во договорена состојба, со правилно гориво и без нова штета. Потоа банката го книжи ослободувањето — често неколку работни дена, не истиот час.",
    faq_3_q: "Какво осигурување е вклучено?",
    faq_3_a:
      "Според Законот за задолжително осигурување во сообраќајот, секое возило на пат мора да има автомобилска одговорност (АО). Тоа покритие е на возилото. Каско со франшиза е дел од договорот за изнајмување — не ја заменува АО. Супер каско и други додатоци се додаваат само при потврда, не автоматски на сајтот. Заедно го прегледуваме возилото и ги запишуваме постојните траги. Казни од сообраќај и паркинг ги плаќа возачот.",
    faq_4_q: "Која е минималната возраст на возачот?",
    faq_4_a:
      "Кај нас се изнајмува од 24 години, и со странска дозвола. И дополнителните возачи мора да имаат најмалку 24. Под 24 години не изнајмуваме, а од 24 нема доплата за млад возач. Возач-почетник (првите две години од дозволата) вози со 0,00 алкохол и има дополнителни ограничувања, вклучувајќи ноќе — кажете ни ако сте во тој период за да провериме возило.",
    faq_5_q: "Како функционира политиката за гориво?",
    faq_5_a:
      "Работиме по принцип полн-до-полн резервоар. Го земате возилото полно и го враќате полно. Ако се врати со помалку гориво, наплаќаме недостасувачко гориво плус услуга за точење. На сајтот нема однапред платен пакет гориво. Зачувајте сметка од последното точење ако можете — помага ако нешто е нејасно при враќање.",
    faq_6_q: "Дали нудите преземање на аеродром?",
    faq_6_a:
      "Да. Една локација е Меѓународниот аеродром Скопје (Аеродром Скопје) во Петровец, близу градот. Ставете го бројот на летот во забелешките за да ве пречекаме по слетување. Другата локација е центарот на Скопје — целата централна зона, не една улица или плоштад. За центарот по потврда договараме точно место (хотел, адреса или ориентир). Преземањето и враќањето се со нашиот тим, не од автомат за клучеви.",
    faq_7_q: "Каква е политиката за откажување?",
    faq_7_a:
      "Формата е барање, не платена резервација. Може да откажете бесплатно додека не потврдиме. По потврда, откажувања најмалку 48 часа пред договореното преземање обично се бесплатни. Подоцнежни откажувања, недоаѓање или доаѓање без контакт може да се наплатат. Точните услови ги пишуваме во пораката за потврда.",
    faq_8_q: "Може ли да додадам детско седиште или дополнителен возач?",
    faq_8_a:
      "Да, ако има слободно седиште за вашите датуми. Според законот: дете под 12 години не седи напред; дете под 5 години назад мора да е во детско седиште; дете до 2 години напред само во седиште свртено наназад, со исклучено воздушно перниче. Појасот е задолжителен за сите. Дополнителните возачи се запишуваат во договорот, имаат важечка дозвола за категоријата и најмалку 24 години — под 24 не додаваме возач. Надоместоците се кажуваат пред преземање.",
    faq_9_q: "Што ако ми е доцнет летот?",
    faq_9_a:
      "Ставете го бројот на летот во забелешките. За аеродром ги следиме доцнењата кога можеме и го поместуваме времето. Сепак јавете или пишете ако веќе знаете дека ќе доцните, ако летот е пренасочен или ако не нè најдете. Ако не можеме да чекаме, ќе договориме ново време наместо да ве оставиме без возило.",
    faq_10_q: "Може ли да го однесам возилото надвор од Северна Македонија?",
    faq_10_a:
      "Само со писмено одобрение пред преземање. Без тоа може да останете без покритие. За странство возилото треба да има важечка зелена карта за тие земји — ја средуваме при потврда ако го дозволиме патувањето. Кажете ги земјите во барањето. Сообраќајната дозвола останува во возилото; полиција и граница може да ја побараат.",
    faq_11_q: "Како плаќам?",
    faq_11_a:
      "Сајтот не наплаќа. Прво ја потврдуваме дневната цена и додатоците. Плаќате како што е договорено при преземање — обично картичка или готовина, во денари или друга валута што ја прифаќаме. Од 24 години нема доплата за млад возач; под 24 не изнајмуваме. Повратниот депозит се овластува на картичка на главниот возач. Цените на паркот се почетни „од“ на ден во евра како ориентација; сезона, должина и додатоци можат да го сменат вкупниот износ.",
    faq_12_q: "Како да нарачам комбе наместо автомобил?",
    faq_12_a:
      "На почетната страница, на прекинувачот Автомобили / Комбиња изберете Mercedes-Benz Vito (7+1 или 8+1 — осум или девет седишта со возачот) или Viano 8+1 (девет седишта со возачот). Притиснете Нарачај или отворете детали, па испратете ја формата. Напишете колку патници и колку багаж имате за да потврдиме дека вистинското комбе е слободно.",
    faq_13_q: "Може ли да изнајмам со странска возачка дозвола?",
    faq_13_a:
      "Да, ако е важечка за категоријата на возилото и ако имате најмалку 24 години. Со странска дозвола изнајмуваме од 24, исто како со македонска — под 24 не изнајмуваме и од 24 нема доплата за млад возач. Според законот, странец на привремен престој може да вози со странска дозвола, под услов на реципроцитет. Ако не е на латиница или кирилица, донесете и меѓународна возачка дозвола со оригиналот. Носете пасош. По шест месеци престој тука законот бара македонска дозвола — тоа не важи за обичен туристички наем.",
    faq_14_q: "Кога се враќа депозитот?",
    faq_14_a:
      "По враќање проверуваме гориво, чистота и штета според записникот. Ако сè се совпаѓа, го ослободуваме задржувањето на картичката. Парите се појавуваат на изводот според банката — често неколку работни дена, не веднаш, и не како втор „поврат“ од нас ако било само овластување. Ако нешто недостасува или е оштетено, објаснуваме секој одбиток пред да го затвориме предметот.",
    faq_15_q: "Каде се среќаваме во центарот?",
    faq_15_a:
      "„Центар на Скопје“ значи целата централна градска зона, не една улица, плоштад или канцеларија што треба сами да ја најдете. По потврда договараме точно место — хотел, домашна адреса или ориентир што обете страни можат да го стигнат. Истото важи и за враќање. Ако плановите се сменат истиот ден, јавете се за да го преместиме местото.",
    faq_16_q: "Може ли да ги сменам датумите или возилото по испратено барање?",
    faq_16_a:
      "Да, додека барањето е отворено: јавете се или пишете ги новите датуми или возило. Откако сме потврдиле, промените зависат од тоа дали возилото е слободно. Ако цената се смени, кажуваме пред да го заклучиме новиот план. Формата не е загарантирана резервација додека не ја прифатиме по телефон или е-пошта.",
    faq_17_q: "Кои сообраќајни правила важат?",
    faq_17_a:
      "Се вози по десна страна. Појасот е задолжителен на секое седиште каде што го има. Кратки светла се користат и дење. Општиот лимит за алкохол е 0,50 g/kg; возач-почетник (првите две години) мора да е 0,00. Од 15 ноември до 15 март е задолжителна зимска опрема — зимски гуми со најмалку 4 мм шара, или летни гуми плус синџири. Возилото го подготвуваме за сезоната. Ограничувањата на брзина се како на знакот (често 50 км/ч во населено). Радар-детектори се забранети. Патарина се плаќа на рампа. Казните ги плаќа возачот.",
    faq_18_q: "Што да правам ако има незгода?",
    faq_18_a:
      "Останете на местото. За мала материјална штета меѓу две возила, ако нема повредени и обете страни се согласни, пополнете Европски извештај за сообраќајна незгода (образец од Националното биро за осигурување). Јавете на полиција 112 ако има повредени, голема штета, пијан возач или возило со странски таблици — тогаш законот бара увид. Јавете ни и нам што поскоро. Не пијте алкохол додека не се направи проверката. Без правилен записник осигурувањето може да не плати, а вие да останете одговорни за франшизата.",
    faq_cat_docs: "Документи и возачи",
    faq_cat_money: "Депозит, осигурување и гориво",
    faq_cat_pickup: "Локации и преземање",
    faq_cat_booking: "Резервација и промени",
    footer_tag:
      "VS Rent a Car (Very Special Rent a Car) — автомобили и комбиња во Скопје. Преземање на аеродром или во центар.",
    footer_contact: "Контакт",
    footer_links: "Брзи врски",
    footer_rights: "Сите права се задржани.",
    to_top: "На почеток",
    privacy_title: "Политика за приватност",
    privacy_p1:
      "Very Special Rent a Car („ние“) е контролор на личните податоци собрани преку оваа веб-страница и во текот на процесот на изнајмување. Податоците ги обработуваме согласно Општата регулатива за заштита на податоци (GDPR) и важечките закони на Република Северна Македонија.",
    privacy_p2:
      "Ги собираме информациите што ги внесувате во формуларот за резервација: име, телефон, е-пошта, детали за преземање и враќање, забелешки и бараното возило. Ако изнајмите кај нас, може да обработуваме и податоци од возачка дозвола, идентификациски документи и податоци за плаќање или депозит, колку што е потребно за договорот и законските обврски.",
    privacy_p3:
      "Цели: одговор на барања за изнајмување, склучување и администрирање на договорот, патна помош, спречување на измами, почитување на сообраќајни и даночни прописи и подобрување на услугата. Правните основи вклучуваат извршување на договор, легитимен интерес за безбедно работење и законска обврска.",
    privacy_p4:
      "Не ги продаваме вашите податоци. Ги споделуваме само со осигурители, обработувачи на плаќања, ИТ даватели и јавни органи кога е потребно. Се чуваат само колку што е потребно за изнајмувањето, законското архивирање (вклучувајќи сметководство) и заштита од побарувања, потоа се бришат или анонимизираат.",
    privacy_p5:
      "Имате право на пристап, исправка, бришење, ограничување или приговор на обработката, како и преносливост на податоците, во законски граници. Може да поднесете претставка до Агенцијата за заштита на личните податоци на Република Северна Македонија. Контактирајте нè на info.vsrentacar@gmail.com за да ги остварите правата.",
    privacy_p6:
      "Оваа страница може да користи неопходно складирање (на пример, јазична поставка) и вградени карти од Google. Користењето на картата е предмет на политиката за приватност на Google.",
    privacy_full: "Прочитајте ја целосната Политика за приватност",
    err_required: "Ова поле е задолжително.",
    err_email: "Внесете важечка е-пошта.",
    err_phone: "Внесете важечки телефонски број.",
    err_dates: "Враќањето мора да биде по преземањето.",
    date_pick: "Изберете датум",
    err_send: "Барањето не може да се испрати. Јавете се или пишете ни.",
    notes_vehicle: "Барано возило: ",
    consent_title: "Колачиња, кеш и ваши податоци",
    consent_text:
      "Користиме неопходни колачиња и кеш во прелистувачот (на пример јазикот) за страницата да работи. Ако испратите барање за резервација, ги обработуваме името, телефонот, е-поштата и деталите за наемот за да одговориме и, ако изнајмите, за договорот. Картите на страницата може да постават колачиња. Не ги продаваме вашите податоци.",
    consent_accept: "Разбирам",
    consent_privacy: "Политика за приватност",
    consent_cookies: "Политика за колачиња",
  },
  al: {
    skip: "Shko te rezervimi",
    nav_home: "Ballina",
    nav_why: "Pse ne",
    nav_fleet: "Flota",
    nav_how: "Si funksionon",
    nav_locations: "Lokacionet",
    nav_faq: "Pyetjet e shpeshta",
    nav_contact: "Kontakt",
    nav_apt: "A ju duhet një banesë?",
    apt_doc_title: "Banesë | VS Rent a Car Shkup",
    apt_meta_desc:
      "Banesë me qira në Orce Nikolov 206, Shkup, nga VS Rent a Car. Fotot vijnë së shpejti — telefononi +389 75 622 558.",
    apt_cta_kicker: "Edhe këtë e kemi",
    apt_cta_title: "Ju duhet një banesë?",
    apt_cta_text:
      "Përveç makinave dhe furgonëve, japim me qira një banesë në Orce Nikolov 206, Shkup. Hapeni faqen dhe na shkruani.",
    apt_cta_btn: "Te banesa",
    apt_eyebrow: "Qëndrim në Shkup",
    apt_title: "Banesë me qira",
    apt_addr: "Orce Nikolov 206, Shkup",
    apt_map: "Hape në hartë",
    apt_lead:
      "Banesa është në Orce Nikolov 206, Shkup. Kornizat më poshtë janë për foto. Deri atëherë telefononi ose shkruani.",
    apt_photos: "Foto",
    apt_photo: "Foto",
    apt_photo_soon: "Fotoja do të jetë këtu",
    apt_contact: "Pyetni për banesën",
    apt_form_title: "Rezervoni banesën",
    apt_form_sub: "Dërgoni kërkesën me datat. Konfirmojmë me telefon ose email.",
    apt_checkin: "Data e hyrjes",
    apt_checkout: "Data e daljes",
    apt_ph_notes: "Numri i mysafirëve, diçka që duhet të dimë…",
    apt_btn_book: "Dërgo kërkesën për banesën",
    err_apt_dates: "Dalja duhet të jetë pas hyrjes.",
    nav_privacy: "Politika e privatësisë",
    nav_terms: "Kushtet e përdorimit",
    nav_cookies: "Politika e cookie-ve",
    nav_copyright: "Të drejtat e autorit",
    nav_rental: "Kushtet e qirasë",
    footer_legal: "Dokumentet ligjore",
    footer_ownership:
      "Kjo faqe, marka Very Special, logoja, fotografitë, tekstet, dizajni dhe softueri janë pronë ekskluzive intelektuale e Very Special Rent a Car. Kopjimi, grumbullimi i të dhënave ose përdorimi komercial i paautorizuar janë të ndaluara.",
    lang_group: "Gjuha",
    menu_open: "Hap menunë",
    menu_close: "Mbyll menunë",
    menu_label: "Menu",
    modal_close: "Mbyll",
    page_title: "VS Rent a Car Shkup | Very Special Rent a Car — aeroport dhe qendër",
    faq_doc_title: "Pyetjet e shpeshta | VS Rent a Car Shkup — mosha 24, depozitë, aeroport",
    meta_desc:
      "Merrni makinë me qira në Shkup te VS Rent a Car (Very Special Rent a Car). Marrje në Aeroportin e Shkupit ose në qendër. C3, Captur, Passat, XC60 dhe furgonë Mercedes nga 29 €/ditë. Tel. +389 75 622 558.",
    meta_keywords:
      "VS Rent a Car, VS Rentacar, Very Special Rent a Car, qira makinash Shkup, rent a car Skopje, Aeroporti i Shkupit, furgon Shkup",
    faq_meta_desc:
      "Pyetje të shpeshta për VS Rent a Car në Shkup: dokumente, mosha 24, depozitë, sigurim AO, marrje në aeroport dhe në qendër, anulim.",
    hero_eyebrow: "VS Rent a Car · Shkup",
    hero_title: "Ngisni diçka\nvërtet të veçantë.",
    hero_lead:
      "VS Rent a Car — Very Special Rent a Car në Shkup. Marrje në Aeroportin e Shkupit ose kudo në qendër. Flotë evropiane, e konfirmuar personalisht.",
    hero_cta: "Rezervo tani",
    form_title: "Rezervoni automjetin",
    form_subtitle:
      "Dërgoni kërkesën. Gjatë orarit të punës kthehemi brenda pak minutash.",
    label_pickup: "Vendi i marrjes",
    label_dropoff: "Vendi i kthimit",
    label_pickup_date: "Data e marrjes",
    label_pickup_time: "Ora e marrjes",
    label_return_date: "Data e kthimit",
    label_return_time: "Ora e kthimit",
    label_name: "Emri i plotë",
    label_phone: "Numri i telefonit",
    label_email: "Email",
    label_notes: "Shënime (opsionale)",
    opt_select: "Zgjidhni lokacionin",
    loc_airport: "Aeroporti i Shkupit",
    loc_center: "Qendra e Shkupit",
    ph_name: "Emri juaj i plotë",
    ph_phone: "+389 70 123 456",
    ph_email: "ju@email.com",
    ph_notes: "Ulëse fëmijësh, shofer shtesë, numri i fluturimit…",
    btn_book: "Rezervo automjetin",
    btn_sending: "Po dërgohet…",
    form_hint: "Nuk paguani tani. Rezervimin e konfirmojmë me telefon ose email.",
    success_title: "Faleminderit",
    success_text:
      "Faleminderit që e plotësuat formularin. Do t’ju kontaktojmë sa më shpejt që të mundemi.",
    btn_ok: "Në rregull",
    btn_another: "Dërgo një kërkesë tjetër",
    how_eyebrow: "Proces i thjeshtë",
    how_title: "Si funksionon",
    how_sub: "Tre hapa të qartë nga kërkesa deri te çelësat në dorë.",
    how_1_title: "Plotësoni formularin",
    how_1_text:
      "Zgjidhni lokacionet, datat dhe dërgoni kërkesën. Preferoni një model të caktuar? Porositni nga flota më poshtë.",
    how_2_title: "Ju kontaktojmë për konfirmim",
    how_2_text:
      "Një specialist ju kontakton për të konfirmuar automjetin, çmimin, dokumentet dhe orën e marrjes.",
    how_3_title: "Merrni makinën",
    how_3_text:
      "Merrni çelësat në Aeroportin e Shkupit (pranë qytetit) ose në qendër të Shkupit — e kontrolluar, e pastër dhe gati për rrugë.",
    why_eyebrow: "Dallimi ndihet",
    why_title_1: "Pse",
    why_lead:
      "Te të tjerët merrni një numër. Te ne — emër, çelës të pastër dhe dikë që po ju pret. Në aeroport ose në qendër të Shkupit.",
    why_1_t: "Meet & Greet",
    why_1_p:
      "Konfirmojmë vetë. Pa sportel anonim dhe pa mesazhe që humbin — dorëzim në aeroport ose në qendër të Shkupit.",
    why_2_t: "Flotë e zgjedhur.",
    why_2_p:
      "Nga makinat e qytetit te furgonët Mercedes. Të zgjedhura të duken mirë dhe të jenë të rehatshme në rrugë. Modele evropiane, jo rastësisht.",
    why_3_t: "Dy lokacione në Shkup.",
    why_3_p:
      "Nga aeroporti, pranë qytetit, ose nga e gjithë qendra. I njëjti standard, të njëjtët njerëz. Duhet të ndihet very special.",
    why_slot: "Këtu do të jetë fotografia juaj",
    fleet_eyebrow: "Koleksioni ynë",
    fleet_title: "Flota",
    fleet_sub:
      "Nga hatchback-et e qytetit te SUV dhe furgonët Mercedes.",
    filters_label: "Filtro flotën",
    filter_all: "Të gjitha",
    filter_cars: "Vetura",
    filter_vans: "Furgonë",
    price_from: "Nga",
    price_day: "/ ditë",
    btn_order: "Porosit këtë automjet",
    btn_details: "Detajet",
    spec_seats: "Ulëse",
    spec_doors: "Dyer",
    spec_engine: "Motori",
    spec_fuel: "Karburant",
    spec_gear: "Kambio",
    spec_luggage: "Bagazh",
    spec_body: "Tipi",
    spec_ac: "Klima",
    spec_ac_yes: "Klima",
    detail_for: "Për kë është",
    detail_why: "Pse kjo",
    detail_back: "Kthehu te flota",
    detail_book: "Rezervoje",
    detail_note: "Numri i ulëseve dhe tipi janë për këtë model. Motorin, karburantin dhe kambion e saktë jua themi kur e pranojmë kërkesën.",
    car_captur:
      "Crossover i vogël — i përshtatshëm për qytet dhe për fundjavë.",
    car_c3: "Hatchback i vogël, lehtë parkohet, i mirë për qytet.",
    car_aircross:
      "Më i lartë se C3, me më shumë bagazh — për familje dhe rrugë të gjata.",
    car_passat:
      "Sedan për punë, aeroport dhe autostradë.",
    car_passat_auto:
      "I njëjti Passat, ngjyrë më e çelët — i qetë në autostradë, i lehtë në qytet.",
    car_xc60:
      "SUV premium Volvo, me kabinë të qetë.",
    car_vito:
      "Furgon 7+1 ose 8+1 — deri në tetë ose nëntë persona. Na thoni sa pasagjerë me rezervimin.",
    car_viano:
      "Furgoni më i madh Mercedes, për transfere VIP dhe grupe deri në nëntë.",
    loc_eyebrow: "Shkupi",
    loc_title: "Lokacionet tona",
    loc_sub: "Dy lokacione: Aeroporti i Shkupit, pranë qytetit, dhe qendra e Shkupit — e gjithë zona qendrore.",
    addr_airport: "Aeroporti Ndërkombëtar i Shkupit (SKP), pranë Shkupit — Petrovec",
    addr_center: "E gjithë zona qendrore e Shkupit — marrja organizohet në qendër",
    map_label: "Harta e vendeve të marrjes",
    btn_directions: "Merr udhëzimet",
    faq_eyebrow: "Vlen të dini",
    faq_title: "Pyetjet e shpeshta",
    faq_lead:
      "Dokumente, sigurim dhe rrugë — sipas ligjeve të Maqedonisë së Veriut, plus si funksionon rezervimi te ne.",
    faq_cta: "Ende ju duhet makinë? Dërgoni një kërkesë",
    faq_1_q: "Cilat dokumente më duhen për të marrë me qira një makinë?",
    faq_1_a:
      "Sipas Ligjit për sigurinë e qarkullimit rrugor, këtu mund të ngisni vetëm me patentë maqedonase të vlefshme, patentë të huaj të njohur ose leje ndërkombëtare, për kategorinë e duhur (zakonisht B). Shoferi kryesor duhet të jetë të paktën 24 vjeç — nën 24 nuk japim me qira. Në marrje duhen origjinalet: patentë, pasaportë ose letërnjoftim, dhe kartë në emër të shoferit kryesor. Foto në telefon nuk mjaftojnë. Vizitorët sjellin pasaportë. Nëse patenta nuk është me shkronja latine ose cirilike, sjellni edhe lejen ndërkombëtare me origjinalin.",
    faq_2_q: "A kërkohet depozitë?",
    faq_2_a:
      "Po. Një depozitë e kthyeshme autorizohet ose mbahet në kartë në momentin e marrjes. Shuma varet nga automjeti (një furgon zakonisht është më i lartë se një makinë qyteti). E heqim bllokimin pasi makina kthehet në gjendjen e rënë dakord, me karburantin e duhur dhe pa dëme të reja. Pastaj banka e liron shumën; shpesh disa ditë pune, jo të njëjtën orë.",
    faq_3_q: "Çfarë sigurimi përfshihet?",
    faq_3_a:
      "Sipas Ligjit për sigurimin e detyrueshëm në qarkullim, çdo mjet në rrugë duhet të ketë përgjegjësi ndaj palëve të treta (AO). Ai mbulim është mbi makinën. Kasko me franshizë është pjesë e kontratës së qirasë — nuk e zëvendëson AO. Super kasko dhe shtesa të tjera shtohen vetëm në konfirmim, jo automatikisht në faqe. Shikojmë makinën së bashku dhe shënojmë dëmet ekzistuese. Gjobat e qarkullimit dhe parkimit i paguan shoferi.",
    faq_4_q: "Cila është mosha minimale e shoferit?",
    faq_4_a:
      "Te ne qira jepet nga 24 vjeç, edhe me patentë të huaj. Edhe shoferët shtesë duhet të jenë të paktën 24. Nën 24 vjeç nuk japim me qira dhe nga 24 nuk ka tarifë shtesë për shofer të ri. Shoferi fillestar (dy vitet e para të patentës) duhet të ketë 0,00 alkool dhe ka kufizime shtesë, edhe natën — na e thoni nëse jeni në atë periudhë që ta kontrollojmë makinën.",
    faq_5_q: "Si funksionon politika e karburantit?",
    faq_5_a:
      "Aplikojmë politikën plotë-në-plotë. E merrni makinën me rezervuar të mbushur dhe e ktheni të mbushur në të njëjtin standard. Nëse kthehet me më pak karburant, faturojmë karburantin që mungon plus tarifën e shërbimit të furnizimit. Në faqe nuk ka paketë karburanti të paguar paraprakisht. Ruani faturën e mbushjes së fundit nëse mundeni; ndihmon nëse diçka është e paqartë në kthim.",
    faq_6_q: "A ofroni marrje në aeroport?",
    faq_6_a:
      "Po. Një lokacion është Aeroporti Ndërkombëtar i Shkupit (Aeroporti i Shkupit) në Petrovec, pranë qytetit. Shkruani numrin e fluturimit te shënimet që t’ju presim pas uljes. Lokacioni tjetër është qendra e Shkupit — e gjithë zona qendrore, jo një rrugë ose shesh. Për qendrën, pas konfirmimit caktojmë pikën e saktë me ju (hotel, adresë ose orientim). Marrja dhe kthimi bëhen me ekipin tonë, jo nga një kuti çelësash pa personel.",
    faq_7_q: "Cila është politika e anulimit?",
    faq_7_a:
      "Dërgimi i formularit është kërkesë, jo rezervim i paguar. Mund ta anuloni pa pagesë derisa të konfirmojmë. Pas konfirmimit, anulimet të paktën 48 orë para orës së rënë dakord zakonisht janë pa pagesë. Anulimet e vonuara, mungesa ose arritja pa kontakt mund të tarifohen. Kushtet e sakta i shkruajmë në mesazhin e konfirmimit.",
    faq_8_q: "A mund të shtoj ulëse fëmijësh ose shofer shtesë?",
    faq_8_a:
      "Po, nëse ka ulëse të lirë për datat tuaja. Sipas ligjit: fëmija nën 12 vjeç nuk ulet përpara; fëmija nën 5 vjeç prapa duhet të jetë në ulëse fëmijësh; fëmija deri në 2 vjeç përpara vetëm në ulëse të kthyer mbrapa, me jastëkun e ajrit të fikur. Rripi është i detyrueshëm për të gjithë. Shoferët shtesë shkruhen në kontratë, kanë patentë të vlefshme për kategorinë dhe janë të paktën 24 vjeç — nën 24 nuk shtojmë shofer. Tarifat jua themi para marrjes.",
    faq_9_q: "Po nëse fluturimi vonohet?",
    faq_9_a:
      "Shkruani numrin e fluturimit te shënimet kur dërgoni kërkesën. Për marrje në aeroport i ndjekim vonesat kur mundemi dhe e zhvendosim orën e takimit. Gjithsesi na telefononi ose na shkruani nëse e dini që do të vonoheni, nëse fluturimi ridrejtohet, ose nëse nuk na gjeni te mbërritjet. Nëse nuk mund të presim, caktojmë një orë të re në vend që t’ju lëmë pa makinë.",
    faq_10_q: "A mund ta nxjerr makinën jashtë Maqedonisë së Veriut?",
    faq_10_a:
      "Vetëm me miratim me shkrim para marrjes. Pa atë mund të mbeteni pa mbulim. Për jashtë vendit makina duhet të ketë kartë të gjelbër të vlefshme për ato shtete — e sistemojmë në konfirmim nëse e lejojmë udhëtimin. Na tregoni vendet në kërkesë. Leja e qarkullimit mbetet në makinë; policia dhe kufiri mund ta kërkojnë.",
    faq_11_q: "Si paguaj?",
    faq_11_a:
      "Faqja nuk merr pagesë. Së pari konfirmojmë tarifën ditore dhe shtesat me ju. Paguani siç biem dakord në marrje — zakonisht kartë ose para, në denarë ose në një valutë tjetër që pranojmë. Nga 24 vjeç nuk ka tarifë shtesë për shofer të ri; nën 24 nuk japim me qira. Depozita e kthyeshme autorizohet në kartë në emër të shoferit kryesor. Çmimet e flotës janë “nga” në ditë në euro si orientim; sezoni, kohëzgjatja dhe shtesat mund ta ndryshojnë totalin.",
    faq_12_q: "Si kërkoj furgon në vend të makine?",
    faq_12_a:
      "Në flotën e faqes kryesore, përdorni ndërprerësin Vetura / Furgonë dhe zgjidhni Mercedes-Benz Vito (7+1 ose 8+1 — tetë ose nëntë ulëse përfshirë shoferin) ose Viano 8+1 (nëntë ulëse përfshirë shoferin). Shtypni Porosit ose hapni detajet, pastaj dërgoni formularin. Shkruani sa pasagjerë dhe sa bagazh keni te shënimet që të konfirmojmë se furgoni i duhur është i lirë.",
    faq_13_q: "A mund të marr me qira me patentë të huaj?",
    faq_13_a:
      "Po, nëse është e vlefshme për kategorinë e makinës dhe nëse jeni të paktën 24 vjeç. Me patentë të huaj qira jepet nga 24, njësoj si me patentë maqedonase — nën 24 nuk japim me qira dhe nga 24 nuk ka tarifë shtesë për shofer të ri. Sipas ligjit, vizitori me qëndrim të përkohshëm mund të ngisë me patentë të huaj, me kusht reciprociteti. Nëse nuk është me shkronja latine ose cirilike, sjellni edhe lejen ndërkombëtare me origjinalin. Sillni pasaportë. Pas gjashtë muajsh qëndrimi këtu ligji kërkon patentë maqedonase — kjo nuk vlen për një qira turistike të zakonshme.",
    faq_14_q: "Kur kthehet depozita?",
    faq_14_a:
      "Pas kthimit kontrollojmë karburantin, pastërtinë dhe dëmet sipas shënimeve të dorëzimit. Nëse gjithçka përputhet me marrëveshjen, e heqim bllokimin e kartës. Paratë shfaqen pastaj në pasqyrë sipas bankës suaj — shpesh disa ditë pune, jo menjëherë, dhe jo si një “kthim” i dytë nga ne nëse ishte vetëm një para-autorizim. Nëse diçka mungon ose është dëmtuar, shpjegojmë çdo zbritje para se ta mbyllim dosjen.",
    faq_15_q: "Ku takohemi në qendër të qytetit?",
    faq_15_a:
      "“Qendra e Shkupit” do të thotë e gjithë zona qendrore, jo një rrugë, shesh ose zyrë që duhet ta gjeni vetë. Pas konfirmimit caktojmë pikën e saktë me ju — për shembull hotel, adresë shtëpie ose orientim që të dyja palët mund ta arrijnë. E njëjta vlen për kthimin. Nëse planet ndryshojnë atë ditë, na telefononi që ta zhvendosim pikën në vend që të presim në vendin e gabuar.",
    faq_16_q: "A mund t’i ndryshoj datat ose makinën pas kërkesës?",
    faq_16_a:
      "Po, sa kohë kërkesa është e hapur: na telefononi ose na shkruani datat ose automjetin e ri. Pasi kemi konfirmuar, ndryshimet varen nga ajo nëse ajo makinë është e lirë. Nëse ndryshon çmimi, jua themi para se ta mbyllim planin e ri. Formulari nuk është rezervim i garantuar derisa ta pranojmë me telefon ose email.",
    faq_17_q: "Cilat rregulla të qarkullimit duhet t’i ndjek?",
    faq_17_a:
      "Qarkullimi është djathtas. Rripi është i detyrueshëm në çdo ulëse ku ka rrip. Dritat e shkurtra përdoren ditën dhe natën. Kufiri i përgjithshëm i alkoolit është 0,50 g/kg; shoferi fillestar (dy vitet e para) duhet të jetë 0,00. Nga 15 nëntori deri më 15 mars pajisja dimërore është e detyrueshme — goma dimërore me të paktën 4 mm, ose goma vere plus zinxhirë. Makinën e përgatitim për sezonin. Kufijtë e shpejtësisë janë si në shenjë (shpesh 50 km/h në qytet). Detektorët e radarit janë të ndaluar. Dogana e autostradës paguhet te stacioni. Gjobat i paguan shoferi.",
    faq_18_q: "Çfarë të bëj nëse ndodh aksident?",
    faq_18_a:
      "Qëndroni në vend. Për dëm të vogël material mes dy makinave, nëse nuk ka të lënduar dhe të dyja palët bien dakord, plotësoni Raportin evropian të aksidentit (formularin e Byrosë Kombëtare të Sigurimeve të Maqedonisë së Veriut). Telefononi policinë 112 nëse ka të lënduar, dëm të madh, shofer të dehur ose mjet me targa të huaja — atëherë ligji kërkon procesverbal. Na telefononi edhe ne sa më shpejt. Mos pini alkool derisa të bëhet kontrolli. Pa raport të rregullt sigurimi mund të mos paguajë dhe ju mund të mbeteni përgjegjës për franshizën.",
    faq_cat_docs: "Dokumente dhe shoferë",
    faq_cat_money: "Depozitë, sigurim dhe karburant",
    faq_cat_pickup: "Vendndodhje dhe marrje",
    faq_cat_booking: "Rezervim dhe ndryshime",
    footer_tag:
      "VS Rent a Car (Very Special Rent a Car) — makina dhe furgonë në Shkup. Marrje në aeroport ose në qendër.",
    footer_contact: "Kontakt",
    footer_links: "Lidhje të shpejta",
    footer_rights: "Të gjitha të drejtat e rezervuara.",
    to_top: "Kthehu lart",
    privacy_title: "Politika e privatësisë",
    privacy_p1:
      "Very Special Rent a Car (“ne”) është kontrollues i të dhënave personale të mbledhura përmes kësaj faqeje dhe gjatë procesit të qirasë. I përpunojmë të dhënat në përputhje me Rregulloren e Përgjithshme për Mbrojtjen e të Dhënave (GDPR) dhe ligjet në fuqi të Maqedonisë së Veriut.",
    privacy_p2:
      "Mbledhim informacionin që dërgoni në formularin e rezervimit: emër, telefon, email, detaje të marrjes dhe kthimit, shënime opsionale dhe automjetin e kërkuar. Nëse merrni me qira te ne, mund të përpunojmë edhe të dhëna të patentës, dokumente identiteti dhe të dhëna pagese ose depozite, sa herë që kërkohet për kontratën dhe detyrimet ligjore.",
    privacy_p3:
      "Qëllimet: t’u përgjigjemi kërkesave për qira, të lidhim dhe administrojmë kontratën, të ofrojmë ndihmë rrugore, të parandalojmë mashtrimin, të respektojmë ligjin e qarkullimit dhe tatimeve, dhe të përmirësojmë shërbimin. Bazat ligjore përfshijnë përmbushjen e kontratës, interesin legjitim për një biznes të sigurt qiraje dhe detyrimin ligjor.",
    privacy_p4:
      "Nuk i shesim të dhënat tuaja. I ndajmë vetëm me sigurues, procesorë pagesash, ofrues IT dhe autoritete publike kur është e nevojshme. Ruhen vetëm sa kohë duhet për qiranë, ruajtjen ligjore (përfshirë kontabilitetin) dhe mbrojtjen nga pretendimet, pastaj fshihen ose anonimizohen.",
    privacy_p5:
      "Keni të drejtë aksesi, ndreqjeje, fshirjeje, kufizimi ose kundërshtimi të përpunimit, si dhe të portueshmërisë së të dhënave, brenda kufijve ligjorë. Mund të paraqisni ankesë te Agjencia për Mbrojtjen e të Dhënave Personale të Maqedonisë së Veriut. Na shkruani në info.vsrentacar@gmail.com për t’i ushtruar të drejtat.",
    privacy_p6:
      "Kjo faqe mund të përdorë ruajtje thelbësore (për shembull preferencën e gjuhës) dhe harta të integruara nga Google. Përdorimi i hartës i nënshtrohet kushteve të privatësisë së Google.",
    privacy_full: "Lexoni Politikën e plotë të privatësisë",
    err_required: "Kjo fushë është e detyrueshme.",
    err_email: "Shkruani një adresë email të vlefshme.",
    err_phone: "Shkruani një numër telefoni të vlefshëm.",
    err_dates: "Kthimi duhet të jetë pas marrjes.",
    date_pick: "Zgjidhni datën",
    err_send: "Kërkesa nuk u dërgua. Na telefononi ose na shkruani.",
    notes_vehicle: "Automjeti i kërkuar: ",
    consent_title: "Cookies, cache dhe të dhënat tuaja",
    consent_text:
      "Përdorim cookies thelbësore dhe cache të shfletuesit (për shembull gjuhën) që faqja të funksionojë. Nëse dërgoni një kërkesë rezervimi, përpunojmë emrin, telefonin, email-in dhe detajet e qirasë për t’ju përgjigjur dhe, nëse merrni me qira, për kontratën. Hartat në faqe mund të vendosin cookies. Nuk i shesim të dhënat tuaja.",
    consent_accept: "E kuptoj",
    consent_privacy: "Politika e privatësisë",
    consent_cookies: "Politika e cookie-ve",
  },
};

const LANG_HTML = { en: "en", mk: "mk", al: "sq" };
const STORAGE_KEY = "vs-lang-default-mk";
const DEFAULT_LANG = "mk";

try {
  localStorage.removeItem("vs-lang");
} catch (_) {}

const savedLang = (() => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch (_) {
    return null;
  }
})();

let currentLang = savedLang && I18N[savedLang] ? savedLang : DEFAULT_LANG;
if (!I18N[currentLang]) currentLang = DEFAULT_LANG;

let mapInstance = null;
let mapMarkers = {};
let activeLocation = "airport";

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = LANG_HTML[lang] || "mk";
  const pageFile = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (pageFile === "faq.html") document.title = t("faq_doc_title");
  else if (pageFile === "apartment.html") document.title = t("apt_doc_title");
  else if (pageFile === "index.html" || pageFile === "") document.title = t("page_title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (I18N[lang][key] != null) el.textContent = I18N[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (I18N[lang][key] != null) el.setAttribute("placeholder", I18N[lang][key]);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (I18N[lang][key] != null) el.setAttribute("aria-label", I18N[lang][key]);
  });

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });
  document.querySelectorAll(".lang-switch").forEach(syncLangToggle);
  closeLangDropdowns();

  if (typeof updateMapMeta === "function" && document.getElementById("map-address")) {
    updateMapMeta(activeLocation);
  }
  if (typeof iframe !== "undefined" && iframe && !mapInstance && mapsStarted) {
    iframe.src = iframeSrc(activeLocation, currentLang);
  }

  document.querySelectorAll("[data-legal-lang]").forEach((el) => {
    el.hidden = el.getAttribute("data-legal-lang") !== lang;
  });

  try {
    const url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    history.replaceState({}, "", url);
  } catch (_) {}

  if (document.getElementById("car-page")) renderCarPage();
  fillCardExtras();
  syncCustomSelects();
  if (typeof paintNiceDates === "function") paintNiceDates();
  applySeoBasics();
}

function applyContacts() {
  document.querySelectorAll("[data-contact='phone']").forEach((el) => {
    if (el.tagName === "A") el.setAttribute("href", "tel:" + SITE.phone);
    el.textContent = SITE.phoneDisplay;
  });
  document.querySelectorAll("[data-contact='email']").forEach((el) => {
    if (el.tagName === "A") el.setAttribute("href", "mailto:" + SITE.email);
    el.textContent = SITE.email;
  });
}

function siteBase() {
  const path = location.pathname.replace(/[^/]*$/, "");
  return location.origin + path;
}

function upsertJsonLd(id, data) {
  let s = document.getElementById(id);
  if (!s) {
    s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = id;
    document.head.appendChild(s);
  }
  s.textContent = JSON.stringify(data);
}

function toAbs(src) {
  if (!src || typeof src !== "string") return src;
  if (/^(https?:|mailto:|tel:|#|\/\/)/i.test(src)) return src;
  return siteBase() + src.replace(/^\.\//, "");
}

function absolutizeJsonLdValue(node) {
  if (Array.isArray(node)) return node.map(absolutizeJsonLdValue);
  if (!node || typeof node !== "object") return node;
  const out = {};
  Object.keys(node).forEach((key) => {
    const val = node[key];
    if (typeof val === "string" && (key === "url" || key === "image" || key === "logo" || key === "item" || key === "contentUrl" || key === "primaryImageOfPage" || key === "hasMap")) {
      out[key] = toAbs(val);
    } else if (key === "@id" && typeof val === "string" && val.startsWith("#")) {
      out[key] = siteBase() + val;
    } else {
      out[key] = absolutizeJsonLdValue(val);
    }
  });
  return out;
}

function absolutizeAllJsonLd() {
  document.querySelectorAll('script[type="application/ld+json"]').forEach((s) => {
    try {
      s.textContent = JSON.stringify(absolutizeJsonLdValue(JSON.parse(s.textContent)));
    } catch (_) {}
  });
}

function gearSchema(gear) {
  const g = String(gear || "").toLowerCase();
  if (g.includes("auto") || g.includes("автомат") || g.includes("automat")) return "AutomaticTransmission";
  if (g.includes("manual") || g.includes("рачен") || g.includes("manuale")) return "ManualTransmission";
  return undefined;
}

function upsertCarSchema(car, id, url) {
  const base = siteBase();
  const img = car.image ? toAbs(car.image) : toAbs("assets/logo.png");
  const sp = (car.specs && (car.specs[currentLang] || car.specs.en)) || {};
  const trans = gearSchema(sp.gear);
  upsertJsonLd("car-schema", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Car", "Product"],
        "@id": url + "#vehicle",
        name: car.name,
        image: img,
        brand: { "@type": "Brand", name: String(car.name).split(" ")[0] },
        vehicleSeatingCapacity: car.seats,
        numberOfDoors: car.doors,
        fuelType: sp.fuel || undefined,
        vehicleTransmission: trans,
        airConditioning: car.ac ? "Yes" : undefined,
        description: (car.for && (car.for[currentLang] || car.for.en)) || car.name,
        url: url,
        offers: {
          "@type": "Offer",
          priceCurrency: "EUR",
          price: String(car.price),
          priceSpecification: { "@type": "UnitPriceSpecification", price: String(car.price), priceCurrency: "EUR", unitText: "DAY" },
          availability: "https://schema.org/InStock",
          url: url,
          seller: { "@type": "AutoRental", name: SITE.brand, url: base + "index.html" },
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE.shortName, item: base + "index.html" },
          { "@type": "ListItem", position: 2, name: t("nav_fleet"), item: base + "index.html#fleet" },
          { "@type": "ListItem", position: 3, name: car.name, item: url },
        ],
      },
    ],
  });
}

function upsertApartmentSchema() {
  const base = siteBase();
  const url = base + "apartment.html";
  upsertJsonLd("apt-schema", {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Apartment",
        "@id": url + "#apartment",
        name: t("apt_title"),
        description: t("apt_meta_desc"),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Orce Nikolov 206",
          addressLocality: "Skopje",
          addressCountry: "MK",
        },
        url: url,
        landlord: { "@type": "Organization", name: SITE.brand, url: base + "index.html", telephone: SITE.phone, email: SITE.email },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: SITE.shortName, item: base + "index.html" },
          { "@type": "ListItem", position: 2, name: t("nav_apt"), item: url },
        ],
      },
    ],
  });
}

function ensureHreflang(pagePath) {
  const base = siteBase();
  [
    ["mk", "mk"],
    ["en", "en"],
    ["sq", "al"],
    ["x-default", ""],
  ].forEach(([hl, q]) => {
    let el = document.querySelector(`link[rel="alternate"][hreflang="${hl}"]`);
    if (!el) {
      el = document.createElement("link");
      el.rel = "alternate";
      el.setAttribute("hreflang", hl);
      document.head.appendChild(el);
    }
    el.href = q ? base + pagePath + (pagePath.includes("?") ? "&" : "?") + "lang=" + q : base + pagePath;
  });
}

function upsertMeta(attr, key, value) {
  if (!value) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function upsertLink(rel, href, extra) {
  if (!href) return;
  let el = document.querySelector(`link[rel="${rel}"]${extra ? extra : ""}`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function applySeoBasics() {
  const base = siteBase();
  const file = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  const params = new URLSearchParams(location.search);
  const carId = params.get("id");
  let pagePath = file || "index.html";
  if (file === "car.html" && carId && FLEET[carId]) {
    pagePath = "car.html?id=" + encodeURIComponent(carId);
  }
  const canonicalHref = base + pagePath;

  upsertLink("canonical", canonicalHref.split("#")[0]);
  upsertLink("manifest", base + "site.webmanifest");
  upsertLink("sitemap", base + "sitemap.xml");

  if (!document.querySelector('link[href*="llms.txt"]')) {
    const l = document.createElement("link");
    l.rel = "alternate";
    l.type = "text/plain";
    l.title = "LLM instructions";
    l.href = base + "llms.txt";
    document.head.appendChild(l);
  }
  if (!document.querySelector('link[href*="llms-full.txt"]')) {
    const full = document.createElement("link");
    full.rel = "alternate";
    full.type = "text/plain";
    full.title = "LLM full facts";
    full.href = base + "llms-full.txt";
    document.head.appendChild(full);
  }

  ensureHreflang(pagePath);

  const OG_LOCALE = { en: "en_GB", mk: "mk_MK", al: "sq_AL" };

  if (file === "index.html" || file === "") {
    upsertMeta("name", "description", t("meta_desc"));
    upsertMeta("name", "keywords", t("meta_keywords"));
  }
  if (file === "faq.html") upsertMeta("name", "description", t("faq_meta_desc"));
  if (file === "apartment.html") upsertMeta("name", "description", t("apt_meta_desc"));

  upsertMeta("property", "og:url", canonicalHref);
  upsertMeta("property", "og:title", document.title);
  upsertMeta("property", "og:site_name", SITE.shortName);
  upsertMeta("property", "og:type", file === "car.html" ? "product" : "website");
  upsertMeta("property", "og:locale", OG_LOCALE[currentLang] || "mk_MK");
  upsertMeta("property", "og:locale:alternate", "en_GB");
  upsertMeta("name", "twitter:title", document.title);
  upsertMeta("name", "twitter:card", "summary_large_image");
  upsertMeta("name", "author", SITE.brand);
  upsertMeta("name", "publisher", SITE.brand);
  upsertMeta("name", "geo.region", "MK-SK");
  upsertMeta("name", "geo.placename", "Skopje");
  upsertMeta("name", "geo.position", "41.99587;21.43145");
  upsertMeta("name", "ICBM", "41.99587, 21.43145");
  upsertMeta("name", "robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");

  const desc =
    document.querySelector('meta[name="description"]') &&
    document.querySelector('meta[name="description"]').getAttribute("content");
  if (desc) {
    upsertMeta("property", "og:description", desc);
    upsertMeta("name", "twitter:description", desc);
  }

  let ogImage = base + "assets/logo.png";
  if (file === "car.html" && carId && FLEET[carId]) {
    const car = FLEET[carId];
    const sp = (car.specs && (car.specs[currentLang] || car.specs.en)) || {};
    const carDesc = `${car.name} for rent at VS Rent a Car (Very Special Rent a Car), ${SITE.city}, ${SITE.countryName}. ${sp.body || ""} ${sp.gear || ""} ${sp.engine || ""}. From €${car.price}/day. Pickup at Airport Skopje or the city centre. Call ${SITE.phoneDisplay}.`.replace(/\s+/g, " ").trim();
    document.title = `${car.name} | ${SITE.shortName} ${SITE.city}`;
    upsertMeta("name", "description", carDesc);
    upsertMeta("property", "og:description", carDesc);
    upsertMeta("name", "twitter:description", carDesc);
    upsertMeta("property", "og:title", document.title);
    upsertMeta("name", "twitter:title", document.title);
    if (car.image) ogImage = toAbs(car.image);
    upsertCarSchema(car, carId, canonicalHref);
  }
  if (file === "apartment.html") {
    upsertApartmentSchema();
    ogImage = base + "assets/logo.png";
  }

  upsertMeta("property", "og:image", ogImage);
  upsertMeta("property", "og:image:alt", SITE.brand + " — " + SITE.city);
  upsertMeta("name", "twitter:image", ogImage);
  upsertMeta("name", "twitter:image:alt", SITE.shortName + " logo");

  absolutizeAllJsonLd();
}

/* ---------- Header / menu ---------- */
const header = document.getElementById("header");
const menu = document.getElementById("mobile-menu");
const menuToggle = document.querySelector(".menu-toggle");
let lastFocused = null;

function openMenu() {
  if (!menu || !menuToggle) return;
  lastFocused = document.activeElement;
  menu.hidden = false;
  requestAnimationFrame(() => menu.classList.add("is-open"));
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.classList.add("is-locked");
  const closeBtn = menu.querySelector(".menu-close");
  if (closeBtn) closeBtn.focus();
}

function canUnlockBody() {
  const consent = document.getElementById("consent-modal");
  const thanks = document.getElementById("thanks-modal");
  const privacy = document.getElementById("privacy-modal");
  if (consent && !consent.hidden) return false;
  if (thanks && !thanks.hidden) return false;
  if (privacy && !privacy.hidden) return false;
  if (menu && !menu.hidden && menu.classList.contains("is-open")) return false;
  return true;
}

function closeMenu() {
  if (!menu || !menuToggle) return;
  menu.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  if (canUnlockBody()) document.body.classList.remove("is-locked");
  setTimeout(() => {
    menu.hidden = true;
  }, 400);
  if (lastFocused) lastFocused.focus();
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") === "true";
    open ? closeMenu() : openMenu();
  });
}

if (menu) {
  menu.querySelectorAll("[data-close-menu]").forEach((el) => {
    el.addEventListener("click", closeMenu);
  });
  menu.querySelectorAll(".nav-mobile a, .nav-link-btn").forEach((el) => {
    el.addEventListener("click", closeMenu);
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (menu && !menu.hidden) closeMenu();
    closeLangDropdowns();
    closePrivacy();
    closeThanks();
  }
});

window.addEventListener(
  "scroll",
  () => {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    updateToTop();
    updateSectionNav();
    requestSideLines();
  },
  { passive: true }
);

const toTopBtn = document.getElementById("to-top");

function updateToTop() {
  if (!toTopBtn) return;
  const scrolled = window.scrollY + window.innerHeight;
  const total = document.documentElement.scrollHeight;
  const nearBottom = total - scrolled < 720;
  toTopBtn.classList.toggle("is-visible", nearBottom);
}

if (toTopBtn) {
  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let sideLineFrame = 0;

function updateSideLines() {
  if (reduceMotion.matches) {
    document.documentElement.style.setProperty("--line-x", "12vw");
    return;
  }
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, window.scrollY / (max * 0.7)) : 0;
  const ease = 1 - Math.pow(1 - p, 1.45);
  const open = window.innerWidth < 720 ? 3 : 3.5;
  const tight = window.innerWidth < 720 ? 38 : 46;
  document.documentElement.style.setProperty("--line-x", open + ease * (tight - open) + "vw");
}

function requestSideLines() {
  if (sideLineFrame) return;
  sideLineFrame = requestAnimationFrame(() => {
    sideLineFrame = 0;
    updateSideLines();
  });
}

updateSideLines();
window.addEventListener("resize", requestSideLines, { passive: true });

function pageFile() {
  const name = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  return name || "index.html";
}

function linkTarget(a) {
  const href = a.getAttribute("href") || "";
  try {
    const u = new URL(href, location.href);
    const file = (u.pathname.split("/").pop() || "index.html").toLowerCase() || "index.html";
    const hash = (u.hash || "").replace("#", "");
    return { file, hash };
  } catch (_) {
    return { file: "", hash: href.replace(/^#/, "") };
  }
}

function setCurrentNav(isMatch) {
  document.querySelectorAll(".nav-desktop a, .nav-mobile a").forEach((a) => {
    const on = isMatch(a);
    a.classList.toggle("is-current", on);
    if (on) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
}

const HOME_SECTIONS = ["home", "how", "why", "fleet", "locations", "contact"];
let sectionNavEnabled = false;

function updateSectionNav() {
  if (!sectionNavEnabled) return;
  const headerH = header ? header.offsetHeight : 80;
  const probe = window.scrollY + headerH + 28;
  let current = "home";
  HOME_SECTIONS.forEach((id) => {
    const el = document.getElementById(id);
    if (el && el.offsetTop <= probe) current = id;
  });
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
    current = "contact";
  }
  setCurrentNav((a) => {
    const { file, hash } = linkTarget(a);
    if (file === "faq.html" || file === "car.html") return false;
    return (hash || "home") === current;
  });
}

function initNavHighlight() {
  const file = pageFile();
  if (file === "faq.html") {
    setCurrentNav((a) => linkTarget(a).file === "faq.html");
    return;
  }
  if (file === "car.html") {
    setCurrentNav((a) => linkTarget(a).hash === "fleet");
    return;
  }
  if (file !== "index.html") return;
  sectionNavEnabled = true;
  updateSectionNav();
}

initNavHighlight();
window.addEventListener("hashchange", updateSectionNav);

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    applyLanguage(btn.dataset.lang);
    closeLangDropdowns();
  });
});

function closeLangDropdowns() {
  document.querySelectorAll(".lang-switch.is-open").forEach((box) => {
    box.classList.remove("is-open");
    const toggle = box.querySelector(".lang-switch__toggle");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
  });
}

function syncLangToggle(box) {
  const toggle = box.querySelector(".lang-switch__toggle");
  const active = box.querySelector(".lang-btn.is-active") || box.querySelector(".lang-btn");
  if (!toggle || !active) return;
  toggle.innerHTML = active.innerHTML;
}

function initLangDropdowns() {
  document.querySelectorAll(".lang-switch").forEach((box) => {
    if (box.querySelector(".lang-switch__toggle")) return;
    const menu = document.createElement("div");
    menu.className = "lang-switch__menu";
    box.querySelectorAll(".lang-btn").forEach((btn) => menu.appendChild(btn));
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "lang-switch__toggle";
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-haspopup", "true");
    toggle.setAttribute("aria-label", "Language");
    box.prepend(toggle);
    box.appendChild(menu);
    syncLangToggle(box);
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !box.classList.contains("is-open");
      closeLangDropdowns();
      if (willOpen) {
        box.classList.add("is-open");
        toggle.setAttribute("aria-expanded", "true");
      }
    });
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".lang-switch")) closeLangDropdowns();
});

const FLAG_SRC = {
  en: "assets/flags/en.svg",
  mk: "assets/flags/mk.svg",
  al: "assets/flags/al.svg",
};

function injectFlags() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const lang = btn.dataset.lang;
    let flag = btn.querySelector(".flag");
    if (!flag) {
      flag = document.createElement("span");
      flag.className = "flag";
      flag.setAttribute("aria-hidden", "true");
      btn.insertBefore(flag, btn.firstChild);
    }
    const src = FLAG_SRC[lang];
    if (src) flag.innerHTML = `<img src="${src}" alt="" width="22" height="15">`;
  });
}

/* ---------- Reveal ---------- */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-in");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ---------- Fleet filter ---------- */
const cards = [...document.querySelectorAll(".car-card")];

function applyFleetFilter(filter) {
  cards.forEach((card) => {
    const show = card.dataset.category === filter;
    if (!show) {
      card.classList.add("is-hidden");
      card.classList.remove("is-hiding");
    } else {
      card.classList.remove("is-hidden", "is-hiding");
    }
  });
}

const filterSlide = document.getElementById("filter-slide");

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => {
      b.classList.remove("is-active");
      b.setAttribute("aria-selected", "false");
    });
    btn.classList.add("is-active");
    btn.setAttribute("aria-selected", "true");
    if (filterSlide) filterSlide.classList.toggle("is-vans", btn.dataset.filter === "van");
    applyFleetFilter(btn.dataset.filter);
  });
});

if (cards.length) applyFleetFilter("car");

function fillCardExtras() {
  document.querySelectorAll(".car-card[data-car-id]").forEach((card) => {
    const id = card.dataset.carId;
    const car = FLEET[id];
    if (!car) return;
    const lang = currentLang || "en";
    const sp = (car.specs && (car.specs[lang] || car.specs.en)) || {};
    let extra = card.querySelector(".car-card__extra");
    if (!extra) {
      extra = document.createElement("div");
      extra.className = "car-card__extra";
      const body = card.querySelector(".car-card__body");
      if (body) body.appendChild(extra);
    }
    extra.innerHTML =
      `<p class="car-card__facts">${t("spec_seats")}: ${car.seats} · ${sp.engine || ""}</p>` +
      `<a class="btn btn--ghost btn--sm details-link" href="car.html?id=${encodeURIComponent(id)}&lang=${lang}">${t("btn_details")}</a>`;
  });
}

/* ---------- Order this car ---------- */
const bookingCard = document.querySelector(".booking-card");
const vehicleInput = document.getElementById("vehicle");
const notesInput = document.getElementById("notes");
const NOTES_MAX = 500;
const notesCount = document.getElementById("notes-count");

function clampNotes() {
  if (!notesInput) return;
  if (notesInput.value.length > NOTES_MAX) {
    notesInput.value = notesInput.value.slice(0, NOTES_MAX);
  }
  if (notesCount) notesCount.textContent = `${notesInput.value.length} / ${NOTES_MAX}`;
}

if (notesInput) {
  notesInput.setAttribute("maxlength", String(NOTES_MAX));
  notesInput.addEventListener("input", clampNotes);
  clampNotes();
}

function scrollToForm() {
  const target = document.getElementById("reservation");
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  if (bookingCard) {
    bookingCard.classList.add("is-highlight");
    setTimeout(() => bookingCard.classList.remove("is-highlight"), 1800);
  }
}

document.querySelectorAll(".order-btn").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const card = btn.closest(".car-card");
    const name = card.dataset.vehicle;
    if (vehicleInput) vehicleInput.value = name;
    if (notesInput) {
      const prefix = t("notes_vehicle");
      const lines = notesInput.value.split("\n").filter((line) => {
        return !/^(Requested vehicle:|Барано возило:|Automjeti i kërkuar:)/.test(line.trim());
      });
      notesInput.value = [prefix + name, ...lines].filter(Boolean).join("\n");
      clampNotes();
    }
    scrollToForm();
  });
});

document.querySelectorAll(".car-card[data-car-id]").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", (e) => {
    if (e.target.closest(".order-btn")) return;
    const id = card.dataset.carId;
    const lang = currentLang || "en";
    location.href = `car.html?id=${encodeURIComponent(id)}&lang=${lang}`;
  });
});

/* ---------- Form ---------- */
const form = document.getElementById("booking-form");

function closeAllCustomSelects(except) {
  document.querySelectorAll(".nice-select.is-open").forEach((wrap) => {
    if (wrap === except) return;
    wrap.classList.remove("is-open");
    const btn = wrap.querySelector(".nice-select__btn");
    const list = wrap.querySelector(".nice-select__list");
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (list) list.hidden = true;
  });
}

function paintCustomSelect(wrap) {
  const select = wrap.querySelector("select");
  const list = wrap.querySelector(".nice-select__list");
  const valueEl = wrap.querySelector(".nice-select__value");
  if (!select || !list || !valueEl) return;
  list.innerHTML = "";
  [...select.options].forEach((opt) => {
    const li = document.createElement("li");
    li.className = "nice-select__option";
    li.setAttribute("role", "option");
    li.dataset.value = opt.value;
    li.textContent = opt.textContent;
    if (opt.selected) {
      li.classList.add("is-selected");
      li.setAttribute("aria-selected", "true");
    }
    if (!opt.value) li.classList.add("is-placeholder");
    list.appendChild(li);
  });
  const selected = select.options[select.selectedIndex];
  valueEl.textContent = selected ? selected.textContent : "";
  valueEl.classList.toggle("is-placeholder", !select.value);
}

function syncCustomSelects() {
  document.querySelectorAll(".nice-select").forEach(paintCustomSelect);
}

function initCustomSelects() {
  document.querySelectorAll(".field select").forEach((select) => {
    if (select.closest(".nice-select")) return;
    const wrap = document.createElement("div");
    wrap.className = "nice-select";
    select.parentNode.insertBefore(wrap, select);
    wrap.appendChild(select);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nice-select__btn";
    btn.setAttribute("aria-haspopup", "listbox");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = '<span class="nice-select__value"></span><span class="nice-select__caret" aria-hidden="true"></span>';

    const list = document.createElement("ul");
    list.className = "nice-select__list";
    list.setAttribute("role", "listbox");
    list.hidden = true;

    wrap.appendChild(btn);
    wrap.appendChild(list);
    paintCustomSelect(wrap);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const open = wrap.classList.contains("is-open");
      closeAllCustomSelects();
      if (!open) {
        wrap.classList.add("is-open");
        btn.setAttribute("aria-expanded", "true");
        list.hidden = false;
      }
    });

    list.addEventListener("click", (e) => {
      const opt = e.target.closest(".nice-select__option");
      if (!opt) return;
      select.value = opt.dataset.value;
      select.dispatchEvent(new Event("change", { bubbles: true }));
      paintCustomSelect(wrap);
      closeAllCustomSelects();
      btn.focus();
    });
  });
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".nice-select")) closeAllCustomSelects();
  if (!e.target.closest(".date-nice")) closeNiceDates();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllCustomSelects();
    closeNiceDates();
  }
});

initCustomSelects();

const pickupDate = document.getElementById("pickupDate");
const returnDate = document.getElementById("returnDate");
const pickupTime = document.getElementById("pickupTime");
const returnTime = document.getElementById("returnTime");

function todayISO() {
  const d = new Date();
  const z = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${z(d.getMonth() + 1)}-${z(d.getDate())}`;
}

function addDaysISO(iso, days) {
  const parts = String(iso || "").split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => !n)) return todayISO();
  const dt = new Date(parts[0], parts[1] - 1, parts[2]);
  dt.setDate(dt.getDate() + days);
  const z = (n) => String(n).padStart(2, "0");
  return `${dt.getFullYear()}-${z(dt.getMonth() + 1)}-${z(dt.getDate())}`;
}

const DATE_UI = {
  en: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], days: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] },
  mk: { months: ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"], days: ["пон", "вто", "сре", "чет", "пет", "саб", "нед"] },
  al: { months: ["janar", "shkurt", "mars", "prill", "maj", "qershor", "korrik", "gusht", "shtator", "tetor", "nëntor", "dhjetor"], days: ["Hë", "Ma", "Më", "En", "Pr", "Sh", "Di"] },
};

function dateUi() {
  return DATE_UI[currentLang] || DATE_UI.en;
}

function padDate(n) {
  return String(n).padStart(2, "0");
}

function formatNiceDate(iso) {
  const parts = String(iso || "").split("-");
  if (parts.length !== 3) return "";
  return `${parts[2]}.${parts[1]}.${parts[0]}`;
}

function closeNiceDates(except) {
  document.querySelectorAll(".date-nice.is-open").forEach((wrap) => {
    if (wrap === except) return;
    wrap.classList.remove("is-open");
    const cal = wrap.querySelector(".date-cal");
    const btn = wrap.querySelector(".date-nice__btn");
    if (cal) cal.hidden = true;
    if (btn) btn.setAttribute("aria-expanded", "false");
  });
}

function paintNiceDate(input) {
  if (!input) return;
  const wrap = input.closest(".date-nice");
  if (!wrap) return;
  const valueEl = wrap.querySelector(".date-nice__value");
  if (!valueEl) return;
  if (input.value) {
    valueEl.textContent = formatNiceDate(input.value);
    valueEl.classList.remove("is-placeholder");
  } else {
    valueEl.textContent = t("date_pick");
    valueEl.classList.add("is-placeholder");
  }
}

function paintNiceDates() {
  document.querySelectorAll(".date-nice input[type='date']").forEach((input) => {
    paintNiceDate(input);
    const wrap = input.closest(".date-nice");
    if (wrap && wrap.classList.contains("is-open")) renderDateCal(wrap);
  });
}

function renderDateCal(wrap) {
  const input = wrap.querySelector("input[type='date']");
  const cal = wrap.querySelector(".date-cal");
  if (!input || !cal) return;
  const ui = dateUi();
  const view = wrap.dataset.view || (input.value || todayISO()).slice(0, 7);
  wrap.dataset.view = view;
  const [vy, vm] = view.split("-").map(Number);
  const first = new Date(vy, vm - 1, 1);
  let pad = first.getDay();
  pad = pad === 0 ? 6 : pad - 1;
  const daysInMonth = new Date(vy, vm, 0).getDate();
  const min = input.min || "";
  const today = todayISO();

  cal.innerHTML =
    `<div class="date-cal__head">` +
      `<button type="button" class="date-cal__nav" data-dir="-1" aria-label="‹">‹</button>` +
      `<p class="date-cal__month">${ui.months[vm - 1]} ${vy}</p>` +
      `<button type="button" class="date-cal__nav" data-dir="1" aria-label="›">›</button>` +
    `</div>` +
    `<div class="date-cal__dows">${ui.days.map((d) => `<span>${d}</span>`).join("")}</div>` +
    `<div class="date-cal__grid"></div>`;

  const grid = cal.querySelector(".date-cal__grid");
  for (let i = 0; i < pad; i += 1) {
    const gap = document.createElement("span");
    gap.className = "date-cal__gap";
    grid.appendChild(gap);
  }
  for (let day = 1; day <= daysInMonth; day += 1) {
    const iso = `${vy}-${padDate(vm)}-${padDate(day)}`;
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "date-cal__day";
    cell.textContent = String(day);
    if (min && iso < min) cell.disabled = true;
    if (iso === input.value) cell.classList.add("is-selected");
    if (iso === today) cell.classList.add("is-today");
    cell.addEventListener("click", () => {
      input.value = iso;
      input.dispatchEvent(new Event("change", { bubbles: true }));
      paintNiceDate(input);
      closeNiceDates();
    });
    grid.appendChild(cell);
  }

  cal.querySelectorAll(".date-cal__nav").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const dir = Number(btn.dataset.dir);
      const next = new Date(vy, vm - 1 + dir, 1);
      wrap.dataset.view = `${next.getFullYear()}-${padDate(next.getMonth() + 1)}`;
      renderDateCal(wrap);
    });
  });
}

function initNiceDates() {
  document.querySelectorAll("input[type='date']").forEach((input) => {
    if (input.closest(".date-nice")) return;
    const wrap = document.createElement("div");
    wrap.className = "date-nice";
    input.parentNode.insertBefore(wrap, input);
    wrap.appendChild(input);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "date-nice__btn";
    btn.setAttribute("aria-haspopup", "dialog");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML =
      `<span class="date-nice__value is-placeholder">${t("date_pick")}</span>` +
      `<span class="date-nice__icon" aria-hidden="true">` +
        `<svg viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" stroke-width="1.8"/><path d="M3 10h18M8 3v4M16 3v4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>` +
      `</span>`;

    const cal = document.createElement("div");
    cal.className = "date-cal";
    cal.hidden = true;

    wrap.appendChild(btn);
    wrap.appendChild(cal);
    paintNiceDate(input);

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const open = wrap.classList.contains("is-open");
      closeNiceDates();
      if (open) return;
      wrap.dataset.view = (input.value || todayISO()).slice(0, 7);
      renderDateCal(wrap);
      wrap.classList.add("is-open");
      cal.hidden = false;
      btn.setAttribute("aria-expanded", "true");
    });
  });
}

function syncReturnDateMin() {
  if (!pickupDate || !returnDate) return;
  const pickup = pickupDate.value || todayISO();
  returnDate.min = pickup;
  returnDate.removeAttribute("max");
  if (!returnDate.value || returnDate.value < pickup) {
    returnDate.value = addDaysISO(pickup, 1);
  }
  paintNiceDate(returnDate);
}

if (pickupDate && returnDate) {
  pickupDate.min = todayISO();
  returnDate.min = todayISO();
  returnDate.removeAttribute("max");
  pickupDate.addEventListener("change", syncReturnDateMin);
}

function setError(id, message) {
  const input = document.getElementById(id);
  if (!input) return;
  const field = input.closest(".field");
  if (!field) return;
  field.classList.toggle("is-invalid", Boolean(message));
  const err = document.querySelector(`[data-error-for="${id}"]`);
  if (err) err.textContent = message || "";
}

function isEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}

function isPhone(v) {
  return /^[+0-9][0-9\s().-]{6,}$/.test(v.trim());
}

function locLabel(value) {
  if (value === "airport") return t("loc_airport");
  if (value === "center") return t("loc_center");
  return value || "—";
}

const FORM_ENDPOINT = "/api/book";

function cleanMailFields(mailBody) {
  const out = {};
  Object.keys(mailBody || {}).forEach((key) => {
    const val = mailBody[key];
    if (val == null || key === "_gotcha" || key === "sf_extra") return;
    out[key] = String(val);
  });
  if (!out.name) out.name = "Guest";
  if (!out.email) out.email = SITE.email;
  return out;
}

async function sendBooking(mailBody) {
  const fields = cleanMailFields(mailBody);
  const payload = { sf_extra: "", subject: fields._subject || "VS Rent a Car" };
  Object.keys(fields).forEach((key) => {
    if (key.charAt(0) === "_") return;
    payload[key] = fields[key];
  });
  const response = await fetch(FORM_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok || result.ok === false) throw new Error(result.message || "send failed");
}

function showSendError(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.hidden = false;
  el.textContent = t("err_send");
}

function wireFormSubmitAction(formEl) {
  if (!formEl) return;
  formEl.setAttribute("action", FORM_ENDPOINT);
  formEl.setAttribute("method", "POST");
  formEl.setAttribute("accept-charset", "UTF-8");
}

if (form) {
wireFormSubmitAction(form);
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const sendError = document.getElementById("form-send-error");
  if (sendError) {
    sendError.hidden = true;
    sendError.textContent = "";
  }
  const data = Object.fromEntries(new FormData(form).entries());
  let ok = true;

  ["pickupLocation", "dropoffLocation", "pickupDate", "pickupTime", "returnDate", "returnTime", "fullName"].forEach(
    (id) => {
      if (!data[id] || !String(data[id]).trim()) {
        setError(id, t("err_required"));
        ok = false;
      } else setError(id, "");
    }
  );

  if (data.email && !isEmail(data.email)) {
    setError("email", t("err_email"));
    ok = false;
  } else if (!data.email) {
    setError("email", t("err_required"));
    ok = false;
  } else setError("email", "");

  if (data.phone && !isPhone(data.phone)) {
    setError("phone", t("err_phone"));
    ok = false;
  } else if (!data.phone) {
    setError("phone", t("err_required"));
    ok = false;
  } else setError("phone", "");

  if (data.pickupDate && data.returnDate) {
    const start = new Date(`${data.pickupDate}T${data.pickupTime || "00:00"}`);
    const end = new Date(`${data.returnDate}T${data.returnTime || "00:00"}`);
    if (end <= start) {
      setError("returnDate", t("err_dates"));
      ok = false;
    }
  }

  if (!ok) {
    const first = form.querySelector(".is-invalid .nice-select__btn, .is-invalid input, .is-invalid select");
    if (first) first.focus();
    return;
  }

  const submitBtn = document.getElementById("submit-btn");
  const submitLabel = submitBtn && submitBtn.querySelector("[data-i18n='btn_book']");
  if (submitBtn) submitBtn.disabled = true;
  if (submitLabel) submitLabel.textContent = t("btn_sending");

  try {
    await sendBooking({
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      Request: "Vehicle rental",
      Vehicle: data.vehicle || "Not chosen yet",
      "Pickup location": locLabel(data.pickupLocation),
      "Pickup date": data.pickupDate,
      "Pickup time": data.pickupTime,
      "Return location": locLabel(data.dropoffLocation),
      "Return date": data.returnDate,
      "Return time": data.returnTime,
      Notes: data.notes || "—",
      Language: currentLang,
      _subject: `Vehicle rental — ${data.fullName}`,
      _replyto: data.email,
    });
  } catch (_) {
    if (submitBtn) submitBtn.disabled = false;
    if (submitLabel) submitLabel.textContent = t("btn_book");
    showSendError("form-send-error");
    return;
  }

  if (submitBtn) submitBtn.disabled = false;
  if (submitLabel) submitLabel.textContent = t("btn_book");
  form.reset();
  if (vehicleInput) vehicleInput.value = "";
  if (pickupDate) pickupDate.min = todayISO();
  if (returnDate) returnDate.min = todayISO();
  paintNiceDates();
  form.querySelectorAll(".field.is-invalid").forEach((field) => field.classList.remove("is-invalid"));
  form.querySelectorAll(".field-error").forEach((err) => {
    err.textContent = "";
  });
  syncCustomSelects();
  clampNotes();
  openThanks();
});
}

const aptForm = document.getElementById("apt-form");
const aptCheckIn = document.getElementById("apt-checkin");
const aptCheckOut = document.getElementById("apt-checkout");
const aptNotes = document.getElementById("apt-notes");
const aptNotesCount = document.getElementById("apt-notes-count");

function clampAptNotes() {
  if (!aptNotes) return;
  if (aptNotes.value.length > NOTES_MAX) aptNotes.value = aptNotes.value.slice(0, NOTES_MAX);
  if (aptNotesCount) aptNotesCount.textContent = `${aptNotes.value.length} / ${NOTES_MAX}`;
}

if (aptNotes) {
  aptNotes.setAttribute("maxlength", String(NOTES_MAX));
  aptNotes.addEventListener("input", clampAptNotes);
  clampAptNotes();
}

function syncAptCheckoutMin() {
  if (!aptCheckIn || !aptCheckOut) return;
  const start = aptCheckIn.value || todayISO();
  aptCheckOut.min = start;
  if (!aptCheckOut.value || aptCheckOut.value < start) {
    aptCheckOut.value = addDaysISO(start, 1);
  }
  paintNiceDate(aptCheckOut);
}

if (aptCheckIn && aptCheckOut) {
  aptCheckIn.min = todayISO();
  aptCheckOut.min = todayISO();
  aptCheckIn.addEventListener("change", syncAptCheckoutMin);
}

initNiceDates();

if (aptForm) {
  wireFormSubmitAction(aptForm);
  aptForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const sendError = document.getElementById("apt-form-send-error");
    if (sendError) {
      sendError.hidden = true;
      sendError.textContent = "";
    }
    const data = Object.fromEntries(new FormData(aptForm).entries());
    let ok = true;

    ["checkIn", "checkOut", "fullName"].forEach((id) => {
      const elId = id === "checkIn" ? "apt-checkin" : id === "checkOut" ? "apt-checkout" : "apt-name";
      if (!data[id] || !String(data[id]).trim()) {
        setError(elId, t("err_required"));
        ok = false;
      } else setError(elId, "");
    });

    if (data.email && !isEmail(data.email)) {
      setError("apt-email", t("err_email"));
      ok = false;
    } else if (!data.email) {
      setError("apt-email", t("err_required"));
      ok = false;
    } else setError("apt-email", "");

    if (data.phone && !isPhone(data.phone)) {
      setError("apt-phone", t("err_phone"));
      ok = false;
    } else if (!data.phone) {
      setError("apt-phone", t("err_required"));
      ok = false;
    } else setError("apt-phone", "");

    if (data.checkIn && data.checkOut && data.checkOut <= data.checkIn) {
      setError("apt-checkout", t("err_apt_dates"));
      ok = false;
    }

    if (!ok) {
      const first = aptForm.querySelector(".is-invalid input");
      if (first) first.focus();
      return;
    }

    const submitBtn = document.getElementById("apt-submit-btn");
    const submitLabel = submitBtn && submitBtn.querySelector("[data-i18n='apt_btn_book']");
    if (submitBtn) submitBtn.disabled = true;
    if (submitLabel) submitLabel.textContent = t("btn_sending");

    try {
      await sendBooking({
        name: data.fullName,
        email: data.email,
        phone: data.phone,
        Request: "Apartment",
        Apartment: "Orce Nikolov 206, Skopje",
        "Check-in": data.checkIn,
        "Check-out": data.checkOut,
        Notes: data.notes || "—",
        Language: currentLang,
        _subject: `Apartment — ${data.fullName}`,
        _replyto: data.email,
      });
    } catch (_) {
      if (submitBtn) submitBtn.disabled = false;
      if (submitLabel) submitLabel.textContent = t("apt_btn_book");
      showSendError("apt-form-send-error");
      return;
    }

    if (submitBtn) submitBtn.disabled = false;
    if (submitLabel) submitLabel.textContent = t("apt_btn_book");
    aptForm.reset();
    if (aptCheckIn) aptCheckIn.min = todayISO();
    if (aptCheckOut) aptCheckOut.min = todayISO();
    paintNiceDates();
    aptForm.querySelectorAll(".field.is-invalid").forEach((field) => field.classList.remove("is-invalid"));
    aptForm.querySelectorAll(".field-error").forEach((err) => {
      err.textContent = "";
    });
    clampAptNotes();
    openThanks();
  });
}

/* ---------- FAQ ---------- */
document.querySelectorAll(".acc-panel").forEach((panel) => {
  if (panel.querySelector(".acc-panel__inner")) return;
  const inner = document.createElement("div");
  inner.className = "acc-panel__inner";
  while (panel.firstChild) inner.appendChild(panel.firstChild);
  panel.appendChild(inner);
});

document.querySelectorAll(".acc-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".acc-item");
    const open = item.classList.contains("is-open");

    document.querySelectorAll(".acc-item").forEach((other) => {
      if (other !== item) {
        other.classList.remove("is-open");
        const otherBtn = other.querySelector(".acc-btn");
        if (otherBtn) otherBtn.setAttribute("aria-expanded", "false");
      }
    });

    item.classList.toggle("is-open", !open);
    btn.setAttribute("aria-expanded", String(!open));
  });
});

const faqCats = document.querySelectorAll(".faq-cat");
const faqGroups = document.querySelectorAll(".faq-group");

function showFaqGroup(id) {
  if (!faqGroups.length) return;
  const exists = [...faqGroups].some((g) => g.id === id);
  const activeId = exists ? id : faqGroups[0].id;
  faqGroups.forEach((g) => {
    g.hidden = g.id !== activeId;
  });
  faqCats.forEach((a) => {
    const on = a.getAttribute("href") === "#" + activeId;
    a.classList.toggle("is-active", on);
    if (on) a.setAttribute("aria-current", "true");
    else a.removeAttribute("aria-current");
  });
}

if (faqCats.length && faqGroups.length) {
  faqCats.forEach((a) => {
    a.addEventListener("click", (e) => {
      e.preventDefault();
      const id = (a.getAttribute("href") || "").replace("#", "");
      showFaqGroup(id);
      try {
        history.replaceState(null, "", "#" + id);
      } catch (_) {}
    });
  });
  showFaqGroup((location.hash || "#faq-docs").replace("#", ""));
}

/* ---------- Thank-you modal ---------- */
const thanksModal = document.getElementById("thanks-modal");
let thanksReturnFocus = null;

function openThanks() {
  if (!thanksModal) return;
  thanksReturnFocus = document.activeElement;
  thanksModal.hidden = false;
  document.body.classList.add("is-locked");
  const okBtn = document.getElementById("thanks-ok") || thanksModal.querySelector(".modal__close");
  if (okBtn) okBtn.focus();
}

function closeThanks() {
  if (!thanksModal || thanksModal.hidden) return;
  thanksModal.hidden = true;
  if (canUnlockBody()) document.body.classList.remove("is-locked");
  const submitBtn = document.getElementById("submit-btn");
  const back = submitBtn || thanksReturnFocus;
  if (back && typeof back.focus === "function") back.focus();
  thanksReturnFocus = null;
}

document.querySelectorAll("[data-close-thanks]").forEach((el) => {
  el.addEventListener("click", closeThanks);
});

(function showThanksAfterFormSubmitReturn() {
  const params = new URLSearchParams(window.location.search);
  if (params.get("booked") !== "1") return;
  params.delete("booked");
  const qs = params.toString();
  const clean = window.location.pathname + (qs ? "?" + qs : "") + window.location.hash;
  history.replaceState({}, "", clean);
  openThanks();
})();

/* ---------- Privacy modal ---------- */
const privacyModal = document.getElementById("privacy-modal");

function openPrivacy() {
  if (!privacyModal) return;
  privacyModal.hidden = false;
  document.body.classList.add("is-locked");
  const closeBtn = privacyModal.querySelector(".modal__close");
  if (closeBtn) closeBtn.focus();
}

function closePrivacy() {
  if (!privacyModal || privacyModal.hidden) return;
  privacyModal.hidden = true;
  if (canUnlockBody()) document.body.classList.remove("is-locked");
}

document.querySelectorAll("[data-open-privacy]").forEach((el) => {
  el.addEventListener("click", openPrivacy);
});
document.querySelectorAll("[data-close-privacy]").forEach((el) => {
  el.addEventListener("click", closePrivacy);
});

const CONSENT_KEY = "vs-consent";

function hasConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY) === "1";
  } catch (_) {
    return false;
  }
}

function initConsentBanner() {
  if (hasConsent()) {
    loadMaps();
    return;
  }
  if (document.getElementById("consent-modal")) {
    openConsent();
    return;
  }
  const wrap = document.createElement("div");
  wrap.className = "modal modal--consent";
  wrap.id = "consent-modal";
  wrap.hidden = true;
  wrap.innerHTML =
    '<div class="modal__backdrop"></div>' +
    '<div class="modal__dialog" role="dialog" aria-modal="true" aria-labelledby="consent-title" aria-describedby="consent-text">' +
    '<h2 id="consent-title" data-i18n="consent_title">Колачиња, кеш и ваши податоци</h2>' +
    '<p id="consent-text" data-i18n="consent_text">Користиме неопходни колачиња и кеш во прелистувачот (на пример јазикот) за страницата да работи. Ако испратите барање за резервација, ги обработуваме името, телефонот, е-поштата и деталите за наемот за да одговориме и, ако изнајмите, за договорот. Картите на страницата може да постават колачиња. Не ги продаваме вашите податоци.</p>' +
    '<p class="consent-links">' +
    '<a href="privacy.html" data-i18n="consent_privacy">Политика за приватност</a>' +
    '<a href="cookies.html" data-i18n="consent_cookies">Политика за колачиња</a>' +
    "</p>" +
    '<button type="button" class="btn btn--primary btn--full" id="consent-accept" data-i18n="consent_accept">Разбирам</button>' +
    "</div>";
  document.body.appendChild(wrap);
  const accept = document.getElementById("consent-accept");
  if (accept) accept.addEventListener("click", acceptConsent);
  applyLanguage(currentLang);
  openConsent();
}

function openConsent() {
  const el = document.getElementById("consent-modal");
  if (!el) return;
  el.hidden = false;
  document.body.classList.add("is-locked");
  const btn = document.getElementById("consent-accept");
  if (btn) btn.focus();
}

function acceptConsent() {
  try {
    localStorage.setItem(CONSENT_KEY, "1");
  } catch (_) {}
  const el = document.getElementById("consent-modal");
  if (el) el.hidden = true;
  if (canUnlockBody()) document.body.classList.remove("is-locked");
  loadMaps();
}

/* ---------- Maps ---------- */
const iframe = document.getElementById("map-iframe");
const mapEl = document.getElementById("map");
const mapAddress = document.getElementById("map-address");
const directionsLink = document.getElementById("directions-link");
const pickupSelect = document.getElementById("pickupLocation");

const DARK_MAP_STYLES = [
  { elementType: "geometry", stylers: [{ color: "#0b0e10" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0b0e10" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#8aa0a6" }] },
  { featureType: "poi", stylers: [{ visibility: "off" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#1a2224" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#0b0e10" }] },
  { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#243033" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#061016" }] },
  { featureType: "transit", stylers: [{ visibility: "off" }] },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#08b1c5" }, { lightness: -40 }],
  },
];

function iframeSrc(key, lang) {
  const loc = LOCATIONS[key];
  const hl = LANG_HTML[lang] || "mk";
  return `https://maps.google.com/maps?q=${loc.lat},${loc.lng}&hl=${hl}&z=${loc.zoom}&output=embed`;
}

function updateMapMeta(key) {
  if (!mapAddress || !directionsLink) return;
  const loc = LOCATIONS[key];
  mapAddress.textContent = t(key === "center" ? "addr_center" : "addr_airport");
  if (key === "center") {
    directionsLink.href = "https://www.google.com/maps/dir/?api=1&destination=Skopje+city+centre";
  } else {
    directionsLink.href = `https://www.google.com/maps/dir/?api=1&destination=${loc.lat},${loc.lng}`;
  }
}

function setActiveLocation(key, fromForm) {
  if (!LOCATIONS[key]) return;
  activeLocation = key;

  document.querySelectorAll(".location-tab").forEach((tab) => {
    const on = tab.dataset.loc === key;
    tab.classList.toggle("is-active", on);
    tab.setAttribute("aria-selected", String(on));
  });

  updateMapMeta(key);

  if (mapInstance && window.google) {
    const loc = LOCATIONS[key];
    mapInstance.panTo(loc);
    mapInstance.setZoom(loc.zoom);
    if (mapMarkers[key]) {
      mapMarkers[key].setAnimation(window.google.maps.Animation.BOUNCE);
      setTimeout(() => mapMarkers[key].setAnimation(null), 1400);
    }
  } else {
    if (iframe) iframe.src = iframeSrc(key, currentLang);
  }

  if (!fromForm && pickupSelect && !pickupSelect.value) {
    pickupSelect.value = key;
  }
}

function initGoogleMap() {
  if (!window.google || !window.google.maps || !mapEl) return;

  mapEl.classList.add("is-live");
  mapInstance = new google.maps.Map(mapEl, {
    center: LOCATIONS.airport,
    zoom: 12,
    styles: DARK_MAP_STYLES,
    disableDefaultUI: true,
    zoomControl: true,
    gestureHandling: "cooperative",
    backgroundColor: "#0b0e10",
  });

  const pin = {
    path: "M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7z",
    fillColor: "#08B1C5",
    fillOpacity: 1,
    strokeColor: "#001418",
    strokeWeight: 1.5,
    scale: 1.8,
    anchor: new google.maps.Point(12, 22),
  };

  Object.entries(LOCATIONS).forEach(([key, loc]) => {
    if (key === "center" && loc.radiusM) {
      const area = new google.maps.Circle({
        map: mapInstance,
        center: loc,
        radius: loc.radiusM,
        strokeColor: "#08B1C5",
        strokeOpacity: 0.9,
        strokeWeight: 2,
        fillColor: "#08B1C5",
        fillOpacity: 0.12,
      });
      area.addListener("click", () => setActiveLocation("center"));
    }
    const marker = new google.maps.Marker({
      position: loc,
      map: mapInstance,
      icon: pin,
      title: t(key === "center" ? "loc_center" : "loc_airport"),
    });
    marker.addListener("click", () => setActiveLocation(key));
    mapMarkers[key] = marker;
  });

  const bounds = new google.maps.LatLngBounds();
  Object.values(LOCATIONS).forEach((loc) => bounds.extend(loc));
  mapInstance.fitBounds(bounds, 64);
}

window.initGoogleMap = initGoogleMap;

let mapsStarted = false;

function loadMaps() {
  if (mapsStarted || !iframe) return;
  mapsStarted = true;
  iframe.src = iframeSrc("airport", currentLang);
  if (!GOOGLE_MAPS_API_KEY) return;
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initGoogleMap`;
  script.async = true;
  script.defer = true;
  document.head.appendChild(script);
}

document.querySelectorAll(".location-tab").forEach((tab) => {
  tab.addEventListener("click", () => setActiveLocation(tab.dataset.loc));
});

if (pickupSelect) {
  pickupSelect.addEventListener("change", () => {
    if (pickupSelect.value) setActiveLocation(pickupSelect.value, true);
  });
}

/* ---------- Year ---------- */
const yearNow = String(new Date().getFullYear());
document.querySelectorAll("#year, .js-year").forEach((el) => {
  el.textContent = yearNow;
});

/* ---------- Init ---------- */
try {
  const qLang = new URLSearchParams(location.search).get("lang");
  if (savedLang && qLang && I18N[qLang]) currentLang = qLang;
} catch (_) {}

applyContacts();
applySeoBasics();
injectFlags();
initLangDropdowns();
applyLanguage(currentLang);
initConsentBanner();
updateToTop();

(function applyBookQuery() {
  if (!vehicleInput) return;
  const id = new URLSearchParams(location.search).get("book");
  const car = id && FLEET[id];
  if (!car) return;
  vehicleInput.value = car.name;
  if (notesInput) {
    notesInput.value = t("notes_vehicle") + car.name;
    clampNotes();
  }
  setTimeout(scrollToForm, 250);
})();

function renderCarPage() {
  const root = document.getElementById("car-page");
  if (!root) return;
  const id = new URLSearchParams(location.search).get("id");
  const car = FLEET[id];
  const lang = currentLang || "en";
  if (!car) {
    root.innerHTML = `<div class="container car-missing"><p>${t("detail_back")}</p><a class="btn btn--primary" href="index.html#fleet">${t("detail_back")}</a></div>`;
    return;
  }
  const sp = (car.specs && (car.specs[lang] || car.specs.en)) || {};
  document.title = `${car.name} | VS Rent a Car`;
  upsertCarSchema(car, id, siteBase() + "car.html?id=" + encodeURIComponent(id));
  root.innerHTML = `
    <div class="container car-detail">
      <a class="car-detail__back" href="index.html#fleet">${t("detail_back")}</a>
      <div class="car-detail__grid">
        <div class="car-detail__visual">
          <img src="${car.image}" alt="${car.name}" width="960" height="640" />
        </div>
        <div class="car-detail__info">
          <p class="eyebrow">${sp.body || ""}</p>
          <h1>${car.name}</h1>
          <p class="price"><span>${t("price_from")}</span> €${car.price} <span>${t("price_day")}</span></p>
          <div class="spec-grid">
            <div><span>${t("spec_seats")}</span><strong>${car.seats}</strong></div>
            <div><span>${t("spec_doors")}</span><strong>${car.doors}</strong></div>
            <div><span>${t("spec_engine")}</span><strong>${sp.engine || ""}</strong></div>
            <div><span>${t("spec_fuel")}</span><strong>${sp.fuel || ""}</strong></div>
            <div><span>${t("spec_gear")}</span><strong>${sp.gear || ""}</strong></div>
            <div><span>${t("spec_luggage")}</span><strong>${sp.luggage || ""}</strong></div>
            <div><span>${t("spec_body")}</span><strong>${sp.body || ""}</strong></div>
            <div><span>${t("spec_ac")}</span><strong>${car.ac ? t("spec_ac_yes") : ""}</strong></div>
          </div>
          <a class="btn btn--primary" href="index.html?book=${encodeURIComponent(id)}&lang=${lang}#reservation">${t("detail_book")}</a>
          <p class="form-hint" style="margin-top:14px">${t("detail_note")}</p>
        </div>
      </div>
      <div class="car-detail__stories">
        <article>
          <h2>${t("detail_for")}</h2>
          <p>${(car.for && (car.for[lang] || car.for.en)) || ""}</p>
        </article>
        <article>
          <h2>${t("detail_why")}</h2>
          <p>${(car.why && (car.why[lang] || car.why.en)) || ""}</p>
        </article>
      </div>
    </div>`;
}

if (document.getElementById("car-page")) renderCarPage();

const whyPhoto = document.getElementById("why-photo");
const whySlot = document.getElementById("why-slot");
const whyFrame = document.querySelector(".why__frame");
if (whyPhoto && whySlot) {
  const candidates = ["assets/whyus.png"];
  let tryIndex = 0;
  const showPhoto = () => {
    whyPhoto.hidden = false;
    whySlot.hidden = true;
    if (whyFrame) whyFrame.classList.add("has-photo");
  };
  const showSlot = () => {
    whyPhoto.hidden = true;
    whySlot.hidden = false;
    if (whyFrame) whyFrame.classList.remove("has-photo");
  };
  whyPhoto.addEventListener("load", showPhoto);
  whyPhoto.addEventListener("error", () => {
    tryIndex += 1;
    if (tryIndex < candidates.length) whyPhoto.src = candidates[tryIndex];
    else showSlot();
  });
  if (whyPhoto.complete && whyPhoto.naturalWidth) showPhoto();
}

/* ---------- Hero car follows cursor ---------- */
const heroVisual = document.querySelector(".hero__visual");
const heroCar = document.querySelector(".hero__car");
if (heroVisual && heroCar && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  heroVisual.addEventListener("mousemove", (e) => {
    const r = heroVisual.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    heroCar.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 8}deg) translate3d(${x * 18}px, ${y * 12}px, 0)`;
  });
  heroVisual.addEventListener("mouseleave", () => {
    heroCar.style.transform = "rotateY(0deg) rotateX(0deg) translate3d(0,0,0)";
  });
}
