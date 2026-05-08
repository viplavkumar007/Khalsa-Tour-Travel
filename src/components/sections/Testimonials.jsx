import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../data/siteContent.js'

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent((c) => (c + 1) % testimonials.length)

  return (
    <div className="py-20 md:py-28 bg-navy-950 relative overflow-hidden">
      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)', transform: 'translate(-30%, -30%)' }} />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #3b82f6, transparent 70%)', transform: 'translate(30%, 30%)' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <span className="section-label text-gold-300 mb-3 block">
            <span className="w-8 h-px bg-gold-400 inline-block" />
            What Clients Say
            <span className="w-8 h-px bg-gold-400 inline-block" />
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Thousands of Travellers
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Desktop: grid of 4 */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-gold-400/30 transition-all duration-300"
            >
              <Quote size={28} className="text-gold-400 mb-4 opacity-70" />
              <p className="text-white/80 text-sm leading-relaxed mb-5">"{t.review}"</p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={13} className="text-gold-400" fill="#fbbf24" />
                ))}
              </div>
              <p className="text-white font-semibold text-sm">{t.name}</p>
              <p className="text-white/50 text-xs">{t.location}</p>
              <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-gold-400/15 text-gold-300 text-xs font-medium">
                {t.trip}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.35 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
              >
                <Quote size={28} className="text-gold-400 mb-4 opacity-70" />
                <p className="text-white/80 text-base leading-relaxed mb-5">
                  "{testimonials[current].review}"
                </p>
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <Star key={i} size={13} className="text-gold-400" fill="#fbbf24" />
                  ))}
                </div>
                <p className="text-white font-semibold">{testimonials[current].name}</p>
                <p className="text-white/50 text-sm">{testimonials[current].location}</p>
                <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-gold-400/15 text-gold-300 text-xs font-medium">
                  {testimonials[current].trip}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-gold-300 hover:border-gold-400/40 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-gold-400' : 'w-2 bg-white/30'}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 rounded-full border border-white/20 text-white/70 hover:text-gold-300 hover:border-gold-400/40 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Google Rating badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/8 border border-white/15 backdrop-blur-sm">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#fbbf24" className="text-gold-400" />)}
            </div>
            <span className="text-white/80 text-sm font-medium">4.9/5 Average Rating · 10,000+ Happy Travellers</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
