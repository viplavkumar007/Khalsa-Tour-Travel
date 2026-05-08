import React from 'react'
import { motion } from 'framer-motion'
import {
  Plane, Palmtree, Building2, BadgeDollarSign,
  Train, Bus, Car
} from 'lucide-react'
import { contact } from '../data/siteContent.js'

const iconMap = { Plane, Palmtree, Building2, BadgeDollarSign, Train, Bus, Car }

export default function ServiceCard({ service, index }) {
  const Icon = iconMap[service.icon] || Plane

  const waMsg = `Hi Khalsa Tour %26 Travels%2C I%27m interested in your *${encodeURIComponent(service.title)}* service. Please share details.`
  const waLink = `https://wa.me/${contact.whatsapp}?text=${waMsg}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative bg-white rounded-2xl overflow-hidden cursor-pointer"
      style={{
        boxShadow: '0 2px 20px rgba(6,21,48,0.08), 0 1px 4px rgba(6,21,48,0.04)',
        border: '1px solid rgba(26,56,102,0.07)',
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-1 w-full transition-all duration-300 group-hover:h-1.5"
        style={{ background: `linear-gradient(90deg, ${service.accent}, ${service.accent}aa)` }}
      />

      <div className="p-6">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${service.accent}20, ${service.accent}10)`,
            border: `1.5px solid ${service.accent}30`,
          }}
        >
          <Icon size={26} style={{ color: service.accent }} strokeWidth={1.8} />
        </div>

        {/* Text */}
        <h3 className="font-display font-bold text-navy-900 text-xl mb-2 group-hover:text-gold-700 transition-colors duration-200">
          {service.title}
        </h3>
        <p className="text-navy-600 text-sm leading-relaxed mb-5">
          {service.description}
        </p>

        {/* CTA */}
        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
          style={{ color: service.accent }}
          aria-label={`Enquire about ${service.title}`}
        >
          Enquire Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      {/* Hover glossy overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background: `linear-gradient(135deg, ${service.accent}06 0%, transparent 60%)`,
        }}
      />
    </motion.div>
  )
}
