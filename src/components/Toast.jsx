import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        role="alert"
        aria-live="polite"
        initial={{ opacity: 0, y: 60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ type: 'spring', damping: 22, stiffness: 300 }}
        className={`fixed bottom-6 right-4 sm:right-6 z-[100] flex items-center gap-3 px-5 py-4 rounded-2xl shadow-2xl max-w-sm ${
          type === 'success'
            ? 'bg-white border border-green-200 text-navy-900'
            : 'bg-white border border-red-200 text-navy-900'
        }`}
        style={{ boxShadow: '0 16px 48px rgba(0,0,0,0.18)' }}
      >
        {type === 'success' ? (
          <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
        ) : (
          <AlertCircle size={20} className="text-red-500 flex-shrink-0" />
        )}
        <p className="text-sm font-medium flex-1">{message}</p>
        <button
          onClick={onClose}
          className="text-navy-400 hover:text-navy-700 transition-colors"
          aria-label="Dismiss notification"
        >
          <X size={16} />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
