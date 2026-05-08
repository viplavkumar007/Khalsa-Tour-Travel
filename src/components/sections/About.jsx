import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Award, Train, HeartHandshake } from 'lucide-react'
import { about, brand } from '../../data/siteContent.js'

const iconMap = { Shield, Award, Train, HeartHandshake }

export default function About() {
  return (
    <div className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle navy bg shape */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'linear-gradient(135deg, transparent 40%, rgba(6,21,48,0.03) 100%)' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left – Logo / visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col items-center"
          >
            {/* Decorative rings */}
            <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto">
              <div
                className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(251,191,36,0.12), rgba(6,21,48,0.06))', border: '1.5px solid rgba(251,191,36,0.25)' }}
              />
              <div
                className="absolute inset-6 rounded-full"
                style={{ background: 'linear-gradient(135deg, rgba(14,36,72,0.06), rgba(251,191,36,0.08))', border: '1px dashed rgba(251,191,36,0.3)' }}
              />
              <div className="absolute inset-12 rounded-full bg-navy-50 flex items-center justify-center shadow-inner">
                <img
                  src={brand.logo}
                  alt="Khalsa Tour & Travels"
                  className="w-36 h-36 object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Highlight badges */}
            <div className="grid grid-cols-2 gap-4 mt-8 w-full max-w-sm">
              {about.highlights.map((h, i) => {
                const Icon = iconMap[h.icon] || Shield
                return (
                  <motion.div
                    key={h.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-navy-50 rounded-xl border border-navy-100"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gold-100 flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-gold-700" />
                    </div>
                    <span className="text-navy-800 text-xs font-semibold leading-tight">{h.label}</span>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right – Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="section-label mb-3 block">
              <span className="w-8 h-px bg-gold-500 inline-block" />
              Our Story
            </span>
            <h2 className="section-title mb-2">{about.headline}</h2>
            <p className="font-display italic text-gold-700 text-xl mb-6">{about.subheadline}</p>

            <p className="text-navy-600 text-base leading-relaxed mb-4">{about.story}</p>
            <p className="text-navy-600 text-base leading-relaxed mb-8">{about.story2}</p>

            {/* Quick facts */}
            <div className="grid grid-cols-3 gap-4 mb-8 p-5 rounded-2xl bg-navy-950 text-white">
              {[
                { v: '14+', l: 'Years' },
                { v: '10K+', l: 'Clients' },
                { v: '500+', l: 'Destinations' },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="font-display text-2xl font-bold text-gold-300">{s.v}</p>
                  <p className="text-white/60 text-xs mt-0.5">{s.l}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                const el = document.getElementById('contact')
                if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
              }}
              className="btn-gold text-sm px-6 py-3 rounded-full"
            >
              Get in Touch With Us
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
