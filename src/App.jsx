import React, { useState } from 'react'
import {
  ArrowRight,
  Building2,
  CreditCard,
  CalendarDays,
  CarFront,
  CheckCircle2,
  Clock3,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Quote,
  ScanLine,
  ShieldCheck,
  Star,
  Users,
} from 'lucide-react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'
import {
  brand,
  bankDetails,
  cabFleet,
  contact,
  destinations,
  faqs,
  gallery,
  offers,
  packages,
  profileDetails,
  serviceHighlights,
  testimonials,
} from './data/siteContent.js'

const serviceIcons = [CalendarDays, MessageCircle, MapPin, Users]
const quickLinks = [
  { label: 'Packages', href: '#packages' },
  { label: 'Cabs', href: '#cabs' },
  { label: 'Activities', href: '#activities' },
]
const enquiryServices = [
  'Tour Package',
  'Leh-Ladakh Package',
  'Kashmir Holiday Package',
  'Vaishno Devi Yatra',
  'Honeymoon Tour',
  'Family Holiday',
  'Cab Service',
  'Airport / Station Transfer',
  'Local Sightseeing Cab',
  'Hotel Booking Assistance',
  'Flight Booking',
  'Train Booking',
  'Group Tour',
  'Corporate Tour',
  'Custom Travel Plan',
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
          <div className="absolute inset-0 bg-[#071a3b]" />
          <img
            src={brand.heroBanner}
            alt="Khalsa Tour and Travels hero banner"
            className="absolute inset-0 h-full w-full object-contain object-top md:object-cover md:object-center"
            style={{
              filter: 'saturate(1.08) contrast(1.01) brightness(1.03)',
              transform: 'scale(1)',
            }}
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,21,48,0.08)_0%,rgba(6,21,48,0.02)_34%,rgba(6,21,48,0.16)_100%)] md:bg-[linear-gradient(114deg,rgba(4,16,40,0.46)_0%,rgba(14,36,72,0.16)_46%,rgba(6,21,48,0.38)_100%)]" />
          <div className="noise-overlay absolute inset-0 opacity-12 md:opacity-38" />
          <div className="hero-gloss absolute inset-0 opacity-22 md:opacity-55" />
          <div className="hero-lens absolute inset-0 opacity-0 md:opacity-5" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.06),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_28%)] md:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.12),transparent_20%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_28%)]" />
          <div className="absolute inset-x-0 top-0 h-[70px] bg-gradient-to-b from-white/5 via-white/[0.02] to-transparent md:h-[120px] md:from-white/8 md:via-white/3" />
          <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-[#061530]/18 via-[#061530]/4 to-transparent md:h-[150px] md:from-[#061530]/26 md:via-[#061530]/6" />

          <div className="relative mx-auto max-w-7xl px-4 pb-4 pt-16 sm:px-6 sm:pb-10 lg:px-8 lg:pb-14 lg:pt-24">
            <div className="h-[210px] sm:h-[340px] lg:h-[430px]" />
          </div>
        </section>

        <section className="relative z-10 px-4 pt-8 sm:px-6 sm:pt-10 lg:px-8 lg:pt-12">
          <div className="enquiry-shell mx-auto max-w-7xl p-6 sm:p-8">
            <div className="relative z-10 mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="section-label">Fast Enquiry</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">Plan your trip with a premium quick quote</h2>
              </div>
              <p className="max-w-xl text-sm leading-6 text-navy-600">
                Share your dates and service preference. We will help with tours, stays, transport, and custom planning.
              </p>
            </div>
            <form
              className="relative z-10 grid gap-4 lg:grid-cols-[1fr_1fr_1fr_1fr_0.95fr]"
              onSubmit={(event) => onDemoSubmit(event, 'Thanks. Your tour enquiry is ready for follow-up.')}
            >
              <label className="block">
                <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-navy-700">Name</span>
                <input className="input-field enquiry-input h-14 rounded-2xl border px-5" type="text" placeholder="Your Name" required />
              </label>
              <label className="block">
                <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-navy-700">Mobile</span>
                <input className="input-field enquiry-input h-14 rounded-2xl border px-5" type="tel" placeholder="WhatsApp Number" required />
              </label>
              <label className="block">
                <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-navy-700">Service</span>
                <select className="input-field enquiry-input h-14 rounded-2xl border px-5 appearance-none" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {enquiryServices.map((service) => (
                    <option key={service}>{service}</option>
                  ))}
                </select>
              </label>
              <label className="block">
                <span className="mb-3 block text-sm font-bold uppercase tracking-[0.16em] text-navy-700">Date</span>
                <input className="input-field enquiry-input h-14 rounded-2xl border px-5" type="date" aria-label="Travel date" />
              </label>
              <div className="flex items-end">
                <button
                  type="submit"
                  className="enquiry-submit inline-flex h-14 w-full items-center justify-center rounded-2xl px-6 text-sm font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:-translate-y-0.5"
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
                className="min-w-[145px] rounded-[4px] bg-[#f97316] px-6 py-3 text-center text-base font-bold uppercase tracking-[0.08em] text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e96812] sm:min-w-[180px] sm:px-10 sm:py-4 sm:text-xl"
              >
                {item.label}
              </button>
            ))}
          </div>
        </section>

        <section id="activities" className="px-4 pt-14 sm:px-6 lg:px-8">
          <div className="activities-shell mx-auto max-w-7xl p-5 sm:p-6">
            <div className="relative z-10 mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="section-label">Travel Help</p>
                <h2 className="mt-3 font-display text-3xl font-semibold text-navy-950 sm:text-4xl">Bright little service blocks that make planning feel easy</h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-navy-600">
                Quick support for stays, tickets, sightseeing, and group movement, presented in a more lively and joyful style.
              </p>
            </div>
            <div className="relative z-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {serviceHighlights.map((item, index) => {
              const Icon = serviceIcons[index % serviceIcons.length]
              return (
                  <article key={item.title} className="activity-card p-5 transition-all duration-300">
                  <div className="activity-icon flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1a3866_0%,#2a4f84_50%,#f59e0b_160%)] text-[#ffe8a3]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-navy-950">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy-600">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={getServiceWhatsappLink(item.title)}
                      target="_blank"
                      rel="noreferrer"
                      className="activity-action inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#34d399,#25d366_55%,#128c7e)] px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:saturate-125"
                    >
                      WhatsApp
                    </a>
                    <a
                      href={getServiceMailLink(item.title)}
                      className="activity-action-alt inline-flex items-center justify-center rounded-full border border-white/90 bg-white/92 px-4 py-2 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fff7ea]"
                    >
                      Email
                    </a>
                  </div>
                </article>
              )
            })}
            </div>
          </div>
        </section>

        <section id="packages" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="inline-flex max-w-full items-center rounded-full border border-gold-200 bg-gold-50 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-gold-700 shadow-[0_10px_24px_rgba(245,158,11,0.16)] sm:text-xs sm:tracking-[0.2em]">
              Special: Srinagar, Jammu & Amritsar Packages with Jammu to Jammu Transportation
            </p>
          </div>
          <SectionHeading
            label="Tour Packages"
            title="Srinagar, Jammu & Amritsar packages with smooth Jammu to Jammu travel planning"
            description="Special: Srinagar, Jammu & Amritsar Packages with Jammu to Jammu Transportation."
            center
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {packages.map((item) => (
                <article key={item.title} className="package-card transition-all duration-300">
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
                  <h3 className="mt-5 font-display text-2xl font-bold sm:text-3xl">{item.title}</h3>
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

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            label="About Us"
            title={`${profileDetails.name} and the experience behind Khalsa Tour n Travels`}
            description="Profile details extracted from the provided PDF and organized into a cleaner, website-friendly company profile section."
          />

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[26px] border border-navy-100 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Full Name</p>
                  <p className="mt-3 text-2xl font-bold text-navy-950">{profileDetails.name}</p>
                </div>
                <div className="rounded-[26px] border border-navy-100 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Date of Birth</p>
                  <p className="mt-3 text-2xl font-bold text-navy-950">{profileDetails.dateOfBirth}</p>
                </div>
                <div className="rounded-[26px] border border-navy-100 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Nationality</p>
                  <p className="mt-3 text-2xl font-bold text-navy-950">{profileDetails.nationality}</p>
                </div>
                <div className="rounded-[26px] border border-navy-100 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Email</p>
                  <p className="mt-3 text-base font-semibold text-navy-950 break-all">{profileDetails.email}</p>
                </div>
              </div>

              <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Profile Summary</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-navy-700">
                  {profileDetails.summary.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Education</p>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-navy-700">
                    {profileDetails.education.map((item) => (
                      <p key={item}>{item}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Strengths</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {profileDetails.strengths.map((item) => (
                      <span key={item} className="rounded-full bg-gold-50 px-4 py-2 text-sm font-semibold text-gold-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 self-start">
              <div className="rounded-[32px] bg-[linear-gradient(145deg,#061530_0%,#1a3866_60%,#234775_100%)] p-6 text-white shadow-navy">
                <p className="section-label text-gold-300">Profile PDF</p>
                <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">Original profile preview</h3>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Open the original PDF profile for the complete formatted version of the extracted details.
                </p>
                <div className="mt-6 overflow-hidden rounded-[24px] border border-white/10 bg-white">
                  <object data={profileDetails.profilePdf} type="application/pdf" className="h-[320px] w-full sm:h-[420px]">
                    <div className="flex h-[320px] flex-col items-center justify-center gap-3 bg-white px-6 text-center text-navy-900 sm:h-[420px]">
                      <Monitor size={28} className="text-gold-600" />
                      <p className="font-semibold">PDF preview is not available in this browser.</p>
                      <a href={profileDetails.profilePdf} target="_blank" rel="noreferrer" className="btn-gold text-sm">
                        Open Profile PDF
                      </a>
                    </div>
                  </object>
                </div>
                <a href={profileDetails.profilePdf} target="_blank" rel="noreferrer" className="btn-gold mt-6 text-sm">
                  Open Full Profile
                </a>
              </div>

              <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Languages</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {profileDetails.languages.map((item) => (
                    <span key={item} className="rounded-full bg-navy-50 px-4 py-2 text-sm font-semibold text-navy-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Computer Skills</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-navy-700">
                  {profileDetails.computerSkills.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Achievements</p>
                <div className="mt-4 space-y-3 text-sm leading-7 text-navy-700">
                  {profileDetails.achievements.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>

              <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Address</p>
                <p className="mt-4 text-sm leading-7 text-navy-700">{profileDetails.address}</p>
              </div>

              <div className="rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Interests & Hobbies</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {profileDetails.hobbies.map((item) => (
                    <span key={item} className="rounded-full bg-[#fff7ea] px-4 py-2 text-sm font-semibold text-gold-800">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 rounded-[30px] border border-navy-100 bg-white p-6 shadow-card">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-700">Work Experience</p>
            <div className="mt-5 grid gap-5 xl:grid-cols-2">
              {profileDetails.experience.map((item) => (
                <article key={`${item.role}-${item.company}`} className="rounded-[24px] border border-navy-100 bg-[#fbfaf6] p-5">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-navy-950">{item.role}</h3>
                      <p className="text-sm font-semibold text-gold-700">{item.company}</p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-navy-700">
                      {item.duration}
                    </span>
                  </div>
                  <div className="mt-4 space-y-2 text-sm leading-7 text-navy-700">
                    {item.points.map((point) => (
                      <p key={point}>{point}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
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

        <section id="bank-details" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[34px] border border-navy-100 bg-white shadow-[0_24px_60px_rgba(6,21,48,0.08)]">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative overflow-hidden bg-[linear-gradient(145deg,#061530_0%,#1a3866_58%,#2a4f84_100%)] p-7 text-white sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.08),transparent_26%)]" />
                <div className="relative">
                  <p className="section-label text-gold-300">Bank Details</p>
                  <h2 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">Pay by bank transfer or scan the UPI QR</h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-white/76">
                    Use the official Khalsa Tour n Travels account below for advance payments, package confirmations, and booking settlements.
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                      <Building2 size={20} className="text-gold-300" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/60">Account Name</p>
                      <p className="mt-2 text-lg font-semibold">{bankDetails.accountName}</p>
                    </div>
                    <div className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                      <Landmark size={20} className="text-gold-300" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/60">Bank</p>
                      <p className="mt-2 text-lg font-semibold">{bankDetails.bankName}</p>
                    </div>
                    <div className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                      <CreditCard size={20} className="text-gold-300" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/60">Account Number</p>
                      <p className="mt-2 text-lg font-semibold break-all">{bankDetails.accountNumber}</p>
                    </div>
                    <div className="rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                      <ScanLine size={20} className="text-gold-300" />
                      <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-white/60">IFSC Code</p>
                      <p className="mt-2 text-lg font-semibold">{bankDetails.ifsc}</p>
                    </div>
                  </div>

                  <div className="mt-4 rounded-[24px] border border-white/12 bg-white/10 p-5 backdrop-blur-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/60">Branch</p>
                    <p className="mt-2 text-base font-semibold leading-7">{bankDetails.branch}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[linear-gradient(180deg,#fffdf8_0%,#fff7ea_100%)] p-7 sm:p-10">
                <div className="mx-auto max-w-md text-center">
                  <p className="inline-flex items-center rounded-full border border-gold-200 bg-gold-50 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-gold-700">
                    UPI Payment
                  </p>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy-950 sm:text-3xl">Scan and pay instantly</h3>
                  <p className="mt-3 text-sm leading-7 text-navy-600">
                    {bankDetails.upiLabel}: <span className="font-bold text-navy-900">{bankDetails.upiNumber}</span>
                  </p>

                  <div className="mt-6 overflow-hidden rounded-[28px] border border-gold-100 bg-white p-4 shadow-[0_20px_40px_rgba(6,21,48,0.08)]">
                    <img
                      src={bankDetails.qrImage}
                      alt="Khalsa Tour n Travels UPI QR code"
                      className="w-full rounded-[20px] object-cover"
                      loading="lazy"
                    />
                  </div>

                  <p className="mt-5 text-sm leading-7 text-navy-600">
                    After payment, share the screenshot on WhatsApp so your booking can be confirmed quickly.
                  </p>
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Tour%20%26%20Travels%2C%20I%20have%20made%20a%20payment%20and%20want%20to%20share%20the%20receipt.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp mt-6"
                  >
                    Share Payment Screenshot
                  </a>
                </div>
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
              <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl">Start your next journey with a real conversation</h2>
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
