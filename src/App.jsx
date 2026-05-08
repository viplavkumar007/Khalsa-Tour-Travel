import React, { useState } from 'react'
import {
  ArrowRight,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import {
  brand,
  cabFleet,
  contact,
  destinations,
  faqs,
  gallery,
  offers,
  packages,
  serviceHighlights,
  testimonials,
} from './data/siteContent.js'

const serviceIcons = [CalendarDays, MessageCircle, MapPin, Users]
const quickLinks = [
  { label: 'Packages', href: '#packages' },
  { label: 'Cabs', href: '#cabs' },
  { label: 'Activities', href: '#activities' },
]

function scrollToSection(href) {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (!element) return
  const top = element.getBoundingClientRect().top + window.scrollY - 92
  window.scrollTo({ top, behavior: 'smooth' })
}

function SectionHeading({ label, title, description, center = false }) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="section-label justify-center">{label}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-navy-600">{description}</p>}
    </div>
  )
}

function ScenicCard({ title, caption, position = 'center', compact = false, image = brand.heroBanner }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[28px] ${compact ? 'min-h-[250px]' : 'min-h-[320px]'} border border-white/40`}
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(6,21,48,0.18) 0%, rgba(6,21,48,0.7) 100%), url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: position,
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.24),transparent_32%)]" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <h3 className="font-display text-2xl font-bold">{title}</h3>
        <p className="mt-2 max-w-sm text-sm leading-6 text-white/82">{caption}</p>
      </div>
    </div>
  )
}

function getServiceWhatsappLink(serviceTitle) {
  const message = `Hi Khalsa Tour & Travels, I am interested in your ${serviceTitle} service. Please share details.`
  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`
}

function getServiceMailLink(serviceTitle) {
  const subject = `Enquiry for ${serviceTitle}`
  const body = `Hi Khalsa Tour & Travels,%0D%0A%0D%0AI am interested in your ${serviceTitle} service. Please share details.%0D%0A`
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${body}`
}

export default function App() {
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    window.setTimeout(() => setToast(null), 4000)
  }

  const onDemoSubmit = (event, message) => {
    event.preventDefault()
    showToast(message)
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-[#f8f6f0] text-navy-900">
      <Navbar />

      <main>
        <section id="home" className="relative isolate overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(110deg, rgba(6,21,48,0.5) 0%, rgba(14,36,72,0.32) 48%, rgba(6,21,48,0.42) 100%), url(${brand.heroBanner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="noise-overlay absolute inset-0 opacity-60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_28%)]" />

          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pb-14 lg:pt-24">
            <div className="h-[320px] sm:h-[380px] lg:h-[430px]" />
          </div>
        </section>

        <section className="relative z-10 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
          <div className="mx-auto max-w-7xl rounded-[8px] bg-white p-6 shadow-[0_18px_40px_rgba(6,21,48,0.16)] sm:p-8">
            <form
              className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_0.95fr]"
              onSubmit={(event) => onDemoSubmit(event, 'Thanks. Your tour enquiry is ready for follow-up.')}
            >
              <label className="block">
                <span className="mb-3 block text-lg font-semibold text-navy-950">Name</span>
                <input className="input-field h-14 rounded-md" type="text" placeholder="Your Name" required />
              </label>
              <label className="block">
                <span className="mb-3 block text-lg font-semibold text-navy-950">Mobile</span>
                <input className="input-field h-14 rounded-md" type="tel" placeholder="WhatsApp Number" required />
              </label>
              <label className="block">
                <span className="mb-3 block text-lg font-semibold text-navy-950">Service</span>
                <select className="input-field h-14 rounded-md appearance-none" defaultValue="">
                  <option value="" disabled>Tour Package</option>
                  <option>Tour Package</option>
                  <option>Cab Service</option>
                  <option>Self Drive Car</option>
                  <option>Bike Rental</option>
                </select>
              </label>
              <label className="block">
                <span className="mb-3 block text-lg font-semibold text-navy-950">Date</span>
                <input className="input-field h-14 rounded-md" type="date" aria-label="Travel date" />
              </label>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="inline-flex h-14 w-full items-center justify-center rounded-md bg-[#d96f06] px-6 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#bd6106]"
                >
                  Enquire Now
                </button>
              </div>
            </form>
          </div>

          <div className="mx-auto mt-8 flex max-w-5xl flex-wrap justify-center gap-6">
            {quickLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="min-w-[180px] rounded-[4px] bg-[#f97316] px-10 py-4 text-center text-xl font-bold uppercase tracking-[0.08em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e96812]"
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        <section id="activities" className="px-4 pt-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 rounded-[28px] bg-white p-5 shadow-card sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length]
              return (
                <article key={item.title} className="rounded-3xl border border-navy-100 bg-[#fbfaf6] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(6,21,48,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold-300">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy-600">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={getServiceWhatsappLink(item.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#25d366] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#1faa52]"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={getServiceMailLink(item.title)}
                      className="inline-flex items-center justify-center rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-900 transition-colors hover:bg-navy-50"
                    >
                      Email
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            label="Tour Packages"
            title="Handpicked travel plans built around how people actually explore Kashmir"
            description="We borrowed the strong package-led flow from the reference site, but shaped it around your business, your destinations, and your visual identity."
            center
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {packages.map((item) => (
              <article key={item.title} className="card-base overflow-hidden rounded-[30px]">
                <div
                  className="relative min-h-[220px] p-6 text-white"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(6,21,48,0.15) 0%, rgba(6,21,48,0.78) 100%), url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="inline-flex rounded-full bg-gold-400 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-navy-950">
                    {item.badge}
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-bold">{item.title}</h3>
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 text-sm text-white/85">
                    <Clock3 size={15} />
                    {item.duration}
                  </p>
                </div>
                <div className="p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">{item.price}</p>
                  <p className="mt-3 text-base leading-7 text-navy-600">{item.summary}</p>
                  <div className="mt-5 space-y-3">
                    {item.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 text-sm text-navy-700">
                        <CheckCircle2 size={18} className="text-gold-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Travels%2C%20please%20share%20details%20for%20${encodeURIComponent(item.title)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-gold text-sm"
                    >
                      Enquire Package
                    </a>
                    <a href={`tel:${contact.phone}`} className="btn-navy text-sm">Call for Pricing</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="cabs" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Cab Fleet"
              title="Private vehicles for transfers, sightseeing days, yatras, and group departures"
              description="The reference site leans heavily on transport listings, so this section gives your cab offering the same importance in a more polished layout."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {cabFleet.map((car) => (
                <article key={car.name} className="card-base overflow-hidden rounded-[28px]">
                  <div className="flex h-[220px] items-center justify-center bg-white p-6">
                    <img src={car.image} alt={car.name} className="h-full w-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-navy-gradient text-gold-300 shadow-navy">
                      <CarFront size={24} />
                    </div>
                    <div className="mt-5 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-2xl font-bold text-navy-950">{car.name}</h3>
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-600">{car.type}</p>
                      </div>
                      <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-bold text-gold-700">{car.capacity}</span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-navy-600">{car.useCase}</p>
                    <div className="mt-5 space-y-3">
                      {car.points.map((point) => (
                        <div key={point} className="flex items-center gap-3 text-sm text-navy-700">
                          <CheckCircle2 size={17} className="text-gold-500" />
                          <span>{point}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Travels%2C%20I%20want%20to%20book%20${encodeURIComponent(car.name)}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy-900"
                    >
                      Check Availability
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="destinations" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              label="Destinations"
              title="The scenic stops travellers ask for most"
              description="A destination-led gallery keeps the page visually rich while staying within your current asset set and color system."
            />
            <div className="grid gap-4 sm:grid-cols-2">
              {destinations.map((item) => (
                <ScenicCard key={item.name} title={item.name} caption={item.caption} position={item.position} image={item.image} compact />
              ))}
            </div>
          </div>
        </section>

        <section id="offers" className="relative overflow-hidden bg-navy-950 py-20 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_28%)]" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Special Offers"
              title="Seasonal value adds that help you convert faster"
              description="These promo cards mirror the offer-driven mid-page rhythm of the reference design without cloning it."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {offers.map((offer) => (
                <article key={offer.title} className="rounded-[28px] border border-white/15 bg-white/12 p-6 backdrop-blur-md">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gold-400 text-navy-950">
                    <Star size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold">{offer.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/90">{offer.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            label="Travel Gallery"
            title="Visual storytelling blocks to keep the page lively from top to bottom"
            description="Instead of copying external media, these branded scenic panels reuse your existing imagery with stronger presentation."
            center
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {gallery.map((item) => (
              <ScenicCard key={item.title} title={item.title} caption={brand.tagline} position={item.position} image={item.image} />
            ))}
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <div>
              <SectionHeading
                label="Why Choose Us"
                title="Travel planning that feels hands-on, responsive, and locally informed"
                description="This gives your homepage the trust-building density that the reference site uses effectively."
              />
              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  'Custom itineraries for couples, families, yatris, and groups',
                  'Cab coordination with practical route planning',
                  'Quick WhatsApp support before and during the journey',
                  'Flexible help for tickets, hotels, and local sightseeing',
                ].map((point) => (
                  <div key={point} className="rounded-3xl border border-navy-100 bg-[#fbfaf6] p-5 text-sm leading-7 text-navy-700">
                    <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gold-100 text-gold-700">
                      <ShieldCheck size={18} />
                    </div>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] bg-[#f7f2e7] p-6">
              <p className="section-label">Testimonials</p>
              <div className="mt-6 space-y-5">
                {testimonials.map((item) => (
                  <article key={item.name} className="rounded-[28px] bg-white p-6 shadow-card">
                    <Quote size={20} className="text-gold-500" />
                    <p className="mt-4 text-sm leading-7 text-navy-700">{item.review}</p>
                    <div className="mt-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-bold text-navy-950">{item.name}</p>
                        <p className="text-sm text-navy-500">{item.location}</p>
                      </div>
                      <div className="flex gap-1 text-gold-500">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={`${item.name}-${index}`} size={15} fill="currentColor" />
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
            <div>
              <SectionHeading
                label="FAQ"
                title="Questions travellers usually ask before booking"
                description="A clean accordion-style information area helps your site feel complete and service-ready."
              />
              <div className="mt-8 space-y-4">
                {faqs.map((item) => (
                  <article key={item.q} className="rounded-[24px] border border-navy-100 bg-white p-6 shadow-card">
                    <h3 className="text-lg font-bold text-navy-950">{item.q}</h3>
                    <p className="mt-3 text-sm leading-7 text-navy-600">{item.a}</p>
                  </article>
                ))}
              </div>
            </div>

            <div id="contact" className="rounded-[34px] bg-navy-gradient p-7 text-white shadow-navy">
              <p className="section-label text-gold-300">Contact Us</p>
              <h2 className="mt-4 font-display text-4xl font-bold">Start your next journey with a real conversation</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">
                Tell us where you want to go and how you want to travel. We can help with packages, transport, or a full tour plan.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a href={`tel:${contact.phone}`} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <Phone size={20} className="text-gold-300" />
                  <p className="mt-3 text-sm text-white/65">Phone</p>
                  <p className="mt-1 font-semibold">{contact.phoneDisplay}</p>
                </a>
                <a href={`mailto:${contact.email}`} className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm">
                  <Mail size={20} className="text-gold-300" />
                  <p className="mt-3 text-sm text-white/65">Email</p>
                  <p className="mt-1 font-semibold break-all">{contact.email}</p>
                </a>
                <a href={contact.mapLink} target="_blank" rel="noreferrer" className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-sm sm:col-span-2">
                  <MapPin size={20} className="text-gold-300" />
                  <p className="mt-3 text-sm text-white/65">Office address</p>
                  <p className="mt-1 font-semibold">{contact.address}</p>
                </a>
              </div>

              <form className="mt-8 space-y-4 rounded-[30px] bg-white p-6 text-navy-900" onSubmit={(event) => onDemoSubmit(event, 'Your message has been captured for follow-up.')}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className="input-field" type="text" placeholder="Your name" required />
                  <input className="input-field" type="tel" placeholder="Mobile number" required />
                </div>
                <input className="input-field" type="text" placeholder="Tour or cab requirement" />
                <textarea className="input-field min-h-[130px]" placeholder="Share pickup point, dates, destination, or package preference" />
                <button type="submit" className="btn-gold w-full justify-center">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
