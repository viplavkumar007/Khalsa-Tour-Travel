import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronRight } from 'lucide-react'
import { brand, contact } from '../data/siteContent.js'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section detection
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el) {
          const top = el.getBoundingClientRect().top
          if (top <= 100) {
            setActiveSection(sections[i])
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href) => {
    setMobileOpen(false)
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_2px_24px_rgba(6,21,48,0.12)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home') }}
              className="flex items-center gap-3 flex-shrink-0"
              aria-label="Khalsa Tour & Travels - Home"
            >
              <img
                src={brand.logo}
                alt="Khalsa Tour & Travels Logo"
                className="h-10 md:h-12 w-auto object-contain"
                loading="eager"
              />
              <div className="hidden sm:block">
                <p className="text-navy-900 font-display font-bold text-base md:text-lg leading-tight">
                  Khalsa Tour & Travels
                </p>
                <p className="text-gold-600 text-xs font-semibold tracking-wide">
                  Trusted Online Travel Partner
                </p>
              </div>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '')
                const isActive = activeSection === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                    className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'text-gold-700'
                        : scrolled
                        ? 'text-navy-700 hover:text-gold-600'
                        : 'text-white/90 hover:text-gold-300'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-500 rounded-full"
                      />
                    )}
                  </a>
                )
              })}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:${contact.phone}`}
                className={`hidden md:flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                  scrolled
                    ? 'btn-gold text-navy-950'
                    : 'bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm'
                }`}
                aria-label="Call Khalsa Tour and Travels"
              >
                <Phone size={15} />
                <span>{contact.phoneDisplay}</span>
              </a>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-all duration-200 ${
                  scrolled ? 'text-navy-900 hover:bg-navy-50' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle navigation menu"
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-950/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 260 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-sm bg-white z-50 lg:hidden flex flex-col shadow-2xl"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between p-5 border-b border-navy-100">
                <div className="flex items-center gap-3">
                  <img src={brand.logo} alt="Logo" className="h-10 w-auto" />
                  <div>
                    <p className="font-display font-bold text-navy-900 text-sm leading-tight">Khalsa Tour & Travels</p>
                    <p className="text-gold-600 text-xs">Jammu</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-navy-700 hover:bg-navy-50"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link, i) => {
                  const id = link.href.replace('#', '')
                  const isActive = activeSection === id
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      className={`flex items-center justify-between px-6 py-4 text-base font-semibold transition-all duration-200 ${
                        isActive
                          ? 'text-gold-700 bg-gold-50 border-r-4 border-gold-500'
                          : 'text-navy-800 hover:text-gold-600 hover:bg-gold-50'
                      }`}
                    >
                      {link.label}
                      <ChevronRight size={16} className={isActive ? 'text-gold-500' : 'text-navy-300'} />
                    </motion.a>
                  )
                })}
              </nav>

              {/* Drawer footer */}
              <div className="p-5 border-t border-navy-100 space-y-3">
                <a
                  href={`tel:${contact.phone}`}
                  className="btn-gold w-full text-sm py-3 rounded-xl flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Phone size={16} /> Call Now: {contact.phoneDisplay}
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Tour%20%26%20Travels%2C%20I%20need%20travel%20assistance.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full text-sm py-3 rounded-xl flex items-center justify-center gap-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
