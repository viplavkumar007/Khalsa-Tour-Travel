import React from 'react'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, ChevronDown, Star } from 'lucide-react'
import { brand, hero, contact } from '../../data/siteContent.js'

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
}

export default function Hero() {
  const handleScroll = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={brand.heroBanner}
          alt="Khalsa Tour & Travels - Your Trusted Travel Partner"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Multi-layer overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-800/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-transparent to-navy-950/30" />
      </div>

      {/* Decorative grid */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="w-full h-full bg-grid-pattern" />
      </div>

      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-1 z-10"
        style={{ background: 'linear-gradient(90deg, transparent, #f59e0b, #fbbf24, #d97706, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={item} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-gold-300 bg-white/10 backdrop-blur-sm border border-gold-400/30">
                <Star size={12} fill="currentColor" />
                Trusted Since 2010 · Jammu's #1 OTA
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={item} className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-3">
              {hero.headline}
              <br />
              <span className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #fcd34d, #f59e0b, #fbbf24)' }}>
                {hero.headlineAccent}
              </span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={item} className="text-white/75 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
              {hero.subheadline}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={item} className="flex flex-wrap gap-4 mb-12">
              <button
                onClick={() => handleScroll('contact')}
                className="btn-gold text-base px-7 py-3.5 rounded-full"
              >
                {hero.cta1}
              </button>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Phone size={18} />
                {hero.cta2}
              </a>
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Tour%20%26%20Travels%2C%20I%27d%20like%20to%20enquire%20about%20your%20travel%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-7 py-3.5 rounded-full"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
                WhatsApp
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              variants={item}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {hero.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center sm:text-left px-4 py-3 rounded-xl bg-white/8 backdrop-blur-sm border border-white/10"
                >
                  <p className="font-display text-2xl md:text-3xl font-bold text-gold-300">{stat.value}</p>
                  <p className="text-white/60 text-xs font-medium mt-0.5">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll('services')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-gold-300 transition-colors cursor-pointer"
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
        <ChevronDown size={20} />
      </motion.button>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(90deg, transparent, #f59e0b40, #fbbf2460, #d9770640, transparent)' }} />
    </div>
  )
}
