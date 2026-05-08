import React from 'react'
import { Mail, MapPin, Phone } from 'lucide-react'
import { brand, contact, navLinks, packageCategories } from '../data/siteContent.js'

function jump(href) {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (!element) return
  const top = element.getBoundingClientRect().top + window.scrollY - 92
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      <div className="h-1 bg-gold-gradient" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.9fr_0.9fr_1fr] lg:px-8">
        <div>
          <img src={brand.logo} alt={brand.name} className="h-14 w-14 rounded-full bg-white object-cover p-1" />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">{brand.description}</p>
          <a
            href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Travels%2C%20I%20need%20help%20planning%20my%20trip.`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold mt-6 text-sm"
          >
            WhatsApp Enquiry
          </a>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-gold-300">Quick Links</h3>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => jump(link.href)}
                className="block transition-colors hover:text-gold-300"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-gold-300">Popular Tours</h3>
          <div className="mt-5 space-y-3 text-sm text-white/70">
            {packageCategories.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold text-gold-300">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-white/70">
            <a href={`tel:${contact.phone}`} className="flex items-start gap-3 hover:text-gold-300">
              <Phone size={16} className="mt-0.5 text-gold-400" />
              <span>{contact.phoneDisplay}</span>
            </a>
            <a href={`mailto:${contact.email}`} className="flex items-start gap-3 hover:text-gold-300">
              <Mail size={16} className="mt-0.5 text-gold-400" />
              <span>{contact.email}</span>
            </a>
            <a href={contact.mapLink} target="_blank" rel="noreferrer" className="flex items-start gap-3 hover:text-gold-300">
              <MapPin size={16} className="mt-0.5 text-gold-400" />
              <span>{contact.address}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/45 sm:px-6 lg:px-8">
        <p>{new Date().getFullYear()} {brand.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
