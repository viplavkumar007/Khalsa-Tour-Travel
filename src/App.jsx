import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/sections/Hero.jsx'
import Services from './components/sections/Services.jsx'
import About from './components/sections/About.jsx'
import Testimonials from './components/sections/Testimonials.jsx'
import FAQ from './components/sections/FAQ.jsx'
import Contact from './components/sections/Contact.jsx'
import CTAStrip from './components/CTAStrip.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 4000)
  }

  return (
    <div className="min-h-screen bg-[#f8f6f0]">
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="services"><Services /></section>
        <section id="about"><About /></section>
        <section id="testimonials"><Testimonials /></section>
        <CTAStrip showToast={showToast} />
        <section id="faq"><FAQ /></section>
        <section id="contact"><Contact showToast={showToast} /></section>
      </main>
      <Footer />
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
