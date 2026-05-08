import React from 'react'
import { Phone, Mail, MapPin, Globe } from 'lucide-react'
import { brand, contact, services } from '../data/siteContent.js'

export default function Footer() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-navy-950 text-white">
      {/* Gold top border */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg, transparent, #f59e0b, #fbbf24, #d97706, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <img src={brand.logo} alt="Khalsa Tour & Travels" className="h-14 w-auto" loading="lazy" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5">
              Your trusted Online Travel Partner (OTA) in Jammu. Flights, holidays, hotels, forex & more — all under one roof since 2010.
            </p>
            <div className="flex gap-3">
              <a
                href={`https://wa.me/${contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-green-500/20 flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#25d366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-gold-500/20 flex items-center justify-center transition-colors"
                aria-label="Phone"
              >
                <Phone size={14} className="text-gold-400" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-blue-500/20 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail size={14} className="text-blue-400" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-gold-300 text-base mb-5">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.id}>
                  <a
                    href={`https://wa.me/${contact.whatsapp}?text=Hi%2C%20I%27m%20interested%20in%20${encodeURIComponent(s.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 text-sm hover:text-gold-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-bold text-gold-300 text-base mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Services', id: 'services' },
                { label: 'About Us', id: 'about' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contact', id: 'contact' },
              ].map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => handleScroll(l.id)}
                    className="text-white/60 text-sm hover:text-gold-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-gold-500 rounded-full flex-shrink-0" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-gold-300 text-base mb-5">Contact Us</h4>
            <div className="space-y-4">
              <a href={`tel:${contact.phone}`} className="flex items-start gap-3 group">
                <Phone size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm group-hover:text-white transition-colors">{contact.phoneDisplay}</span>
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-start gap-3 group">
                <Mail size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm break-all group-hover:text-white transition-colors">{contact.email}</span>
              </a>
              <a href={`https://${contact.website}`} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <Globe size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm group-hover:text-white transition-colors">{contact.website}</span>
              </a>
              <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                <MapPin size={14} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed group-hover:text-white transition-colors">{contact.address}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Khalsa Tour & Travels. All rights reserved.</p>
          <p>Made with ❤️ for travellers from Jammu</p>
        </div>
      </div>
    </footer>
  )
}
