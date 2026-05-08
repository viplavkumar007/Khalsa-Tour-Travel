// src/data/siteContent.js
// Single source of truth for all website content

export const brand = {
  name: "Khalsa Tour & Travels",
  tagline: "Your Trusted Online Travel Partner",
  subtitle: "OTA – Online Travel Agency",
  logo: "/logo.png",
  heroBanner: "/hero-banner.jpg",
  description:
    "With over a decade of trusted travel experience, Khalsa Tour & Travels has been crafting unforgettable journeys for thousands of families across India. Based in Jammu, we combine local expertise with global reach.",
};

export const contact = {
  phone: "9797379494",
  phoneDisplay: "+91 97973 79494",
  email: "avtar@khalsatravelsonline.com",
  website: "www.khalsatravelsonline.com",
  address: "High Court Road, Opp. Doordarshan Lane, Old Janipur, Jammu – 180005",
  whatsapp: "919797379494",
  mapLink: "https://maps.google.com/?q=High+Court+Road+Janipur+Jammu+180005",
};

export const hero = {
  headline: "Your Dream Journey",
  headlineAccent: "Starts Here",
  subheadline:
    "From flights to full holidays — we plan every detail so you travel with confidence. Serving Jammu & beyond since 2010.",
  cta1: "Get a Free Quote",
  cta2: "Call Us Now",
  stats: [
    { value: "10,000+", label: "Happy Travellers" },
    { value: "500+", label: "Destinations" },
    { value: "14+", label: "Years Experience" },
    { value: "24/7", label: "Support" },
  ],
};

export const services = [
  {
    id: "flights",
    icon: "Plane",
    title: "Flight Bookings",
    description:
      "Domestic & international flights at the best fares. We compare across airlines to get you the lowest price, every time.",
    color: "from-blue-500 to-navy-700",
    accent: "#3b82f6",
  },
  {
    id: "holidays",
    icon: "Palmtree",
    title: "Holiday Packages",
    description:
      "Handcrafted holiday packages for couples, families & groups. Kashmir, Goa, Thailand, Dubai & beyond — fully customised.",
    color: "from-emerald-500 to-teal-700",
    accent: "#10b981",
  },
  {
    id: "hotels",
    icon: "Building2",
    title: "Hotel Bookings",
    description:
      "Best-rate guaranteed hotels from budget to luxury. Instant confirmation with 24/7 customer support.",
    color: "from-amber-500 to-orange-600",
    accent: "#f59e0b",
  },
  {
    id: "money",
    icon: "BadgeDollarSign",
    title: "Money Exchange",
    description:
      "Competitive forex rates for all major currencies. Quick, reliable, and fully compliant with RBI norms.",
    color: "from-gold-400 to-gold-600",
    accent: "#d97706",
  },
  {
    id: "railway",
    icon: "Train",
    title: "Railway Bookings",
    description:
      "IRCTC authorised tatkal & advance railway bookings. Never miss a train — we book seats in seconds.",
    color: "from-violet-500 to-purple-700",
    accent: "#8b5cf6",
  },
  {
    id: "bus",
    icon: "Bus",
    title: "Bus Bookings",
    description:
      "Book AC / non-AC sleeper & seater buses across India. Volvo, JKSRTC, private operators — all in one place.",
    color: "from-sky-500 to-blue-600",
    accent: "#0ea5e9",
  },
  {
    id: "cab",
    icon: "Car",
    title: "Cab Services",
    description:
      "Comfortable, safe cab transfers within Jammu & for outstation trips. Airport pickups, religious yatras & tours.",
    color: "from-rose-500 to-red-600",
    accent: "#f43f5e",
  },
];

export const about = {
  headline: "Trusted Since 2010",
  subheadline: "A Family-Run Travel House with a Heart",
  story:
    "Khalsa Tour & Travels was founded with one simple belief: every traveller deserves honest advice, fair prices, and a journey they'll never forget. Starting from a modest office in Janipur, Jammu, we've grown into one of the region's most trusted Online Travel Agencies — handling everything from local cab rides to international holiday packages.",
  story2:
    "We are IATA accredited, RBI-authorised for forex, and IRCTC registered. Our experienced team of travel consultants is available round the clock to support your journey.",
  highlights: [
    { icon: "Shield", label: "IATA Accredited" },
    { icon: "Award", label: "RBI Authorised Forex" },
    { icon: "Train", label: "IRCTC Registered" },
    { icon: "HeartHandshake", label: "14+ Years of Trust" },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Rajinder Singh",
    location: "Jammu",
    rating: 5,
    review:
      "Booked our family trip to Kashmir through Khalsa Travels. Everything was seamless — hotel, cab, sightseeing. The team was available on WhatsApp even at midnight! Highly recommended.",
    trip: "Kashmir Family Tour",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Jammu",
    rating: 5,
    review:
      "Got the best flight fare to Dubai compared to three other agencies. The forex rates were also very competitive. Will always book through Khalsa Travels.",
    trip: "Dubai Honeymoon",
  },
  {
    id: 3,
    name: "Amandeep Kaur",
    location: "Srinagar",
    rating: 5,
    review:
      "Tatkal railway booking done in under 2 minutes during peak season. I was amazed! The staff is extremely professional and helpful.",
    trip: "Railway Booking",
  },
  {
    id: 4,
    name: "Vikram Gupta",
    location: "Jammu",
    rating: 5,
    review:
      "Arranged Vaishno Devi yatra cab for my elderly parents. The driver was punctual, courteous, and the vehicle was clean and comfortable. Thank you Khalsa Travels!",
    trip: "Vaishno Devi Yatra",
  },
];

export const faqs = [
  {
    q: "How do I get the best flight fare?",
    a: "Contact us as early as possible — ideally 3–4 weeks before travel. We monitor fare trends and book at the optimal time. For urgent bookings, we offer tatkal options.",
  },
  {
    q: "Do you offer customised holiday packages?",
    a: "Absolutely! Every package we offer can be tailored to your budget, duration, and preferences. Just share your requirements via WhatsApp or our enquiry form.",
  },
  {
    q: "Is money exchange available for all currencies?",
    a: "We deal in all major currencies including USD, EUR, GBP, AED, SGD, AUD and more. We are RBI authorised and provide full documentation.",
  },
  {
    q: "What's your cancellation & refund policy?",
    a: "Cancellation policies vary by airline, hotel, and tour operator. We help you understand the terms before booking and process refunds as quickly as the provider allows.",
  },
  {
    q: "Can I book for a group or corporate travel?",
    a: "Yes! We have special group fares for families, school trips, pilgrimages, and corporate off-sites. Contact us for bulk pricing.",
  },
  {
    q: "How do I pay? Are online payments safe?",
    a: "We accept UPI, NEFT, RTGS, credit/debit cards, and cash at our Jammu office. All online payments are processed through RBI-compliant secure gateways.",
  },
];
