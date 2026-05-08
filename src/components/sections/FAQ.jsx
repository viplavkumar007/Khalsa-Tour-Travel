import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/siteContent.js'

function FAQItem({ faq, isOpen, onToggle, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
        isOpen
          ? 'border-gold-300 shadow-[0_4px_24px_rgba(217,119,6,0.12)]'
          : 'border-navy-100 hover:border-navy-200'
      } bg-white`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors duration-200 ${isOpen ? 'text-gold-700' : 'text-navy-900'}`}>
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            isOpen ? 'bg-gold-100 text-gold-700' : 'bg-navy-50 text-navy-500'
          }`}
        >
          <ChevronDown size={16} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="px-6 pb-5 text-navy-600 text-sm leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <div className="py-20 md:py-28 bg-[#f8f6f0] relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <span className="section-label mb-3 block">
            <span className="w-8 h-px bg-gold-500 inline-block" />
            Common Questions
            <span className="w-8 h-px bg-gold-400 inline-block" />
          </span>
          <h2 className="section-title mb-4">Frequently Asked Questions</h2>
          <p className="text-navy-600">
            Can't find what you're looking for?{' '}
            <a
              href={`https://wa.me/919797379494?text=Hi%2C%20I%20have%20a%20question%20about%20your%20travel%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-700 font-semibold underline underline-offset-2 hover:text-gold-600"
            >
              Ask us on WhatsApp
            </a>
          </p>
          <div className="gold-divider mt-6" />
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
