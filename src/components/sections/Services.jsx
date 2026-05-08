import React from 'react'
import { motion } from 'framer-motion'
import { services } from '../../data/siteContent.js'
import ServiceCard from '../ServiceCard.jsx'

export default function Services() {
  return (
    <div className="py-20 md:py-28 bg-[#f8f6f0] relative overflow-hidden">
      {/* Background dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">
            <span className="w-8 h-px bg-gold-500 inline-block" />
            What We Offer
            <span className="w-8 h-px bg-gold-500 inline-block" />
          </span>
          <h2 className="section-title mb-4">
            Complete Travel Solutions
          </h2>
          <p className="text-navy-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From a single flight ticket to a fully curated holiday package — we handle every aspect of your travel with expertise and care.
          </p>
          <div className="gold-divider mt-6" />
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
