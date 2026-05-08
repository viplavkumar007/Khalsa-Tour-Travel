import React, { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'
import { brand, contact, navLinks } from '../data/siteContent.js'

function scrollToSection(href) {
  const id = href.replace('#', '')
  const element = document.getElementById(id)
  if (!element) return
  const top = element.getBoundingClientRect().top + window.scrollY - 92
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkTone = scrolled
    ? 'rounded-full px-4 py-2 text-navy-800 hover:bg-gold-50 hover:text-gold-700'
    : 'rounded-full px-4 py-2 text-white bg-white/18 hover:bg-white/26 hover:text-gold-200 shadow-[0_8px_24px_rgba(0,0,0,0.18)] backdrop-blur-sm'

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled ? 'border-b border-navy-100 bg-white text-navy-800' : 'bg-transparent text-white'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className={`flex flex-wrap items-center gap-x-5 gap-y-1 ${scrolled ? 'text-navy-600' : 'text-white/75'}`}>
            <a href={`tel:${contact.phone}`} className="hover:text-gold-300">{contact.phoneDisplay}</a>
            <a href={`mailto:${contact.email}`} className="hover:text-gold-300">{contact.email}</a>
          </div>
          <p className={`hidden md:block ${scrolled ? 'text-navy-500' : 'text-white/65'}`}>{brand.subtitle}</p>
        </div>
      </div>

      <nav
        className={`border-b transition-all duration-300 ${
          scrolled
            ? 'border-navy-100 bg-white shadow-[0_18px_45px_rgba(6,21,48,0.08)]'
            : 'border-transparent bg-transparent shadow-none backdrop-blur-0'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 sm:px-4 lg:px-6">
          <button
            type="button"
            onClick={() => scrollToSection('#home')}
            className={`flex items-center gap-3 rounded-[24px] px-3 py-2 text-left transition-all duration-300 ${
              scrolled ? 'bg-navy-50/90' : 'bg-white/18 shadow-[0_10px_26px_rgba(0,0,0,0.18)] backdrop-blur-sm'
            }`}
          >
            <div className={`flex h-20 w-20 items-center justify-center overflow-hidden rounded-full ${scrolled ? 'bg-white' : 'bg-white/92'}`}>
              <img src={brand.logo} alt={brand.name} className="h-full w-full rounded-full object-cover" />
            </div>
            <div className="pr-1">
              <p className={`font-display text-xl font-bold leading-tight ${scrolled ? 'text-navy-950' : 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]'}`}>{brand.shortName}</p>
              <p className={`text-sm ${scrolled ? 'text-navy-500' : 'text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,0.35)]'}`}>Jammu based tours and transport</p>
            </div>
          </button>

          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-semibold transition-all duration-300 ${linkTone}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${contact.phone}`}
              className={`px-5 py-2.5 text-sm ${scrolled ? 'btn-navy' : 'inline-flex items-center justify-center gap-2 rounded-full border border-white/50 bg-white/18 font-semibold text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] backdrop-blur-md transition-all duration-300 hover:bg-white/26'}`}
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Travels%2C%20I%20need%20a%20tour%20quote.`}
              target="_blank"
              rel="noreferrer"
              className={`px-5 py-2.5 text-sm ${scrolled ? 'btn-gold' : 'inline-flex items-center justify-center gap-2 rounded-full bg-gold-gradient font-semibold text-navy-950 shadow-[0_12px_30px_rgba(217,119,6,0.35)] transition-all duration-300 hover:-translate-y-0.5'}`}
            >
              Get Quote
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className={`rounded-xl p-2 lg:hidden ${scrolled ? 'text-navy-900' : 'text-white'}`}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-navy-100 bg-white lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => {
                    scrollToSection(link.href)
                    setOpen(false)
                  }}
                  className="border-b border-navy-100 py-3 text-left text-sm font-semibold text-navy-800 last:border-b-0"
                >
                  {link.label}
                </button>
              ))}
              <a href={`tel:${contact.phone}`} className="btn-navy mt-4 justify-center text-sm">
                <Phone size={16} />
                {contact.phoneDisplay}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
