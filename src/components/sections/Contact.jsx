import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Loader2 } from 'lucide-react'
import { contact } from '../../data/siteContent.js'

const serviceOptions = [
  'Flight Booking', 'Holiday Package', 'Hotel Booking',
  'Money Exchange', 'Railway Booking', 'Bus Booking', 'Cab Service', 'Other',
]

export default function Contact({ showToast }) {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', message: '', date: '',
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit mobile number'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.service) e.service = 'Please select a service'
    if (!form.message.trim()) e.message = 'Tell us more about your requirements'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: '' }))
  }

  const buildWhatsAppMsg = () => {
    let msg = `Hi Khalsa Tour & Travels! 🙏\n\n`
    msg += `*Name:* ${form.name}\n`
    msg += `*Phone:* ${form.phone}\n`
    if (form.email) msg += `*Email:* ${form.email}\n`
    msg += `*Service Required:* ${form.service}\n`
    if (form.date) msg += `*Travel Date:* ${form.date}\n`
    msg += `*Message:* ${form.message}\n\n`
    msg += `Please get back to me at the earliest. Thank you!`
    return encodeURIComponent(msg)
  }

  const buildEmailBody = () => {
    let body = `Hi Team Khalsa Tour & Travels,\n\n`
    body += `I am ${form.name} and I'd like to enquire about your services.\n\n`
    body += `Phone: ${form.phone}\n`
    if (form.email) body += `Email: ${form.email}\n`
    body += `Service Required: ${form.service}\n`
    if (form.date) body += `Travel Date: ${form.date}\n`
    body += `\nMessage:\n${form.message}\n\n`
    body += `Looking forward to your response.\n\nBest regards,\n${form.name}`
    return encodeURIComponent(body)
  }

  const handleSubmit = async (action) => {
    const e = validate()
    if (Object.keys(e).length > 0) {
      setErrors(e)
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 600))
    setLoading(false)

    if (action === 'whatsapp') {
      const url = `https://wa.me/${contact.whatsapp}?text=${buildWhatsAppMsg()}`
      window.open(url, '_blank')
      showToast('Opening WhatsApp with your enquiry! 🎉', 'success')
    } else {
      const subject = encodeURIComponent(`Travel Enquiry – ${form.service} | ${form.name}`)
      const url = `mailto:${contact.email}?subject=${subject}&body=${buildEmailBody()}`
      window.location.href = url
      showToast('Opening your email client! 📧', 'success')
    }

    setForm({ name: '', phone: '', email: '', service: '', message: '', date: '' })
    setErrors({})
  }

  return (
    <div className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-14"
        >
          <span className="section-label mb-3 block">
            <span className="w-8 h-px bg-gold-500 inline-block" />
            Get in Touch
            <span className="w-8 h-px bg-gold-500 inline-block" />
          </span>
          <h2 className="section-title mb-4">Plan Your Next Journey</h2>
          <p className="text-navy-600 max-w-xl mx-auto">
            Fill in your details and we'll reach out within the hour. Or contact us directly via WhatsApp for instant responses.
          </p>
          <div className="gold-divider mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-navy-950 rounded-2xl p-7 text-white">
              <h3 className="font-display text-xl font-bold mb-6 text-gold-300">Contact Details</h3>

              <div className="space-y-5">
                <a href={`tel:${contact.phone}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                    <Phone size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Phone / WhatsApp</p>
                    <p className="text-white font-semibold group-hover:text-gold-300 transition-colors">{contact.phoneDisplay}</p>
                  </div>
                </a>

                <a href={`mailto:${contact.email}`} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                    <Mail size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Email</p>
                    <p className="text-white font-semibold break-all group-hover:text-gold-300 transition-colors">{contact.email}</p>
                  </div>
                </a>

                <a href={contact.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-gold-500/30 transition-colors">
                    <MapPin size={16} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs mb-0.5">Address</p>
                    <p className="text-white/85 text-sm leading-relaxed group-hover:text-white transition-colors">{contact.address}</p>
                  </div>
                </a>
              </div>

              {/* WhatsApp quick button */}
              <a
                href={`https://wa.me/${contact.whatsapp}?text=Hi%20Khalsa%20Tour%20%26%20Travels%2C%20I%27d%20like%20travel%20assistance!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp w-full mt-7 py-3 rounded-xl text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Business hours */}
            <div className="bg-navy-50 rounded-2xl p-6 border border-navy-100">
              <h4 className="font-display font-bold text-navy-900 mb-4">Business Hours</h4>
              <div className="space-y-2 text-sm">
                {[
                  { d: 'Monday – Saturday', h: '9:00 AM – 7:00 PM' },
                  { d: 'Sunday', h: '10:00 AM – 4:00 PM' },
                  { d: 'WhatsApp Support', h: '24 / 7' },
                ].map((r) => (
                  <div key={r.d} className="flex justify-between items-center py-1.5 border-b border-navy-100 last:border-0">
                    <span className="text-navy-600">{r.d}</span>
                    <span className="text-navy-900 font-semibold">{r.h}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-2xl p-7 md:p-9 border border-navy-100 shadow-[0_4px_32px_rgba(6,21,48,0.08)]">
              <h3 className="font-display text-2xl font-bold text-navy-900 mb-2">Send an Enquiry</h3>
              <p className="text-navy-500 text-sm mb-7">We'll get back to you within 1 hour during business hours.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="sm:col-span-2 md:col-span-1">
                  <label className="block text-xs font-bold text-navy-700 mb-1.5 tracking-wide uppercase">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="input-field"
                    autoComplete="name"
                  />
                  {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-bold text-navy-700 mb-1.5 tracking-wide uppercase">
                    Mobile Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="input-field"
                    maxLength={10}
                    autoComplete="tel"
                  />
                  {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold text-navy-700 mb-1.5 tracking-wide uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="input-field"
                    autoComplete="email"
                  />
                  {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email}</p>}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-bold text-navy-700 mb-1.5 tracking-wide uppercase">
                    Service Required <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="input-field appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="mt-1 text-red-500 text-xs">{errors.service}</p>}
                </div>

                {/* Travel date */}
                <div>
                  <label className="block text-xs font-bold text-navy-700 mb-1.5 tracking-wide uppercase">
                    Travel Date (Optional)
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    className="input-field"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-navy-700 mb-1.5 tracking-wide uppercase">
                    Your Requirements <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us about your travel plans, destination, number of travellers, budget, etc."
                    className="input-field resize-none"
                  />
                  {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message}</p>}
                </div>
              </div>

              {/* Submit buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <button
                  type="button"
                  onClick={() => handleSubmit('whatsapp')}
                  disabled={loading}
                  className="btn-whatsapp flex-1 py-3.5 rounded-xl text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.49"/></svg>
                  )}
                  Send via WhatsApp
                </button>

                <button
                  type="button"
                  onClick={() => handleSubmit('email')}
                  disabled={loading}
                  className="btn-navy flex-1 py-3.5 rounded-xl text-sm font-bold disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
                  Send via Email
                </button>
              </div>

              <p className="text-navy-400 text-xs text-center mt-4">
                🔒 Your information is private and will never be shared with third parties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
