# 🌏 Khalsa Tour & Travels – Website

A modern, production-ready single-page React website for **Khalsa Tour & Travels**, Jammu.

---

## 🚀 Quick Start (Local)

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Steps

```bash
# 1. Navigate to the project folder
cd khalsa-travels

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser at http://localhost:5173
```

---

## 🏗️ Build for Production

```bash
npm run build
```

This generates a `dist/` folder ready for deployment.

---

## ☁️ Deploy to Vercel (Recommended – Free)

1. Go to [vercel.com](https://vercel.com) and sign up/log in
2. Click **"Add New Project"**
3. Import your GitHub repo **OR** drag-and-drop the project folder
4. Vercel auto-detects Vite — just click **Deploy**
5. Your site is live in ~1 minute! 🎉

> **OR** use Vercel CLI:
> ```bash
> npm i -g vercel
> vercel
> ```

---

## 🌐 Deploy to Netlify

1. Go to [netlify.com](https://netlify.com)
2. Drag-and-drop the **`dist/`** folder after running `npm run build`
3. Site is live instantly!

> **OR** connect your GitHub repo and set:
> - Build command: `npm run build`
> - Publish directory: `dist`

---

## 📁 Project Structure

```
khalsa-travels/
├── public/
│   ├── logo.png              ← Khalsa Travels logo (PNG, transparent)
│   └── hero-banner.jpg       ← Hero section background image
├── src/
│   ├── data/
│   │   └── siteContent.js    ← ALL website content (edit this to update text)
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── CTAStrip.jsx
│   │   ├── Footer.jsx
│   │   ├── Toast.jsx
│   │   └── sections/
│   │       ├── Hero.jsx
│   │       ├── Services.jsx
│   │       ├── About.jsx
│   │       ├── Testimonials.jsx
│   │       ├── FAQ.jsx
│   │       └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── postcss.config.js
```

---

## ✏️ Editing Content

All website text, services, FAQs, testimonials, and contact info are in:

```
src/data/siteContent.js
```

Edit that one file to update anything on the site — no need to touch components.

---

## 🎨 Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI Framework |
| Vite 5 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion 11 | Animations & transitions |
| Lucide React | Icons |

---

## 📞 Contact Form

The enquiry form sends pre-filled messages to:
- **WhatsApp**: Opens `wa.me` with structured message
- **Email**: Opens default mail client with pre-filled subject & body

No backend needed!

---

## 📱 Features

- ✅ Fully responsive (mobile-first)
- ✅ Sticky navbar with active section highlight
- ✅ Mobile hamburger drawer menu
- ✅ Hero with full-page banner image
- ✅ Animated service cards (7 services)
- ✅ About section with trust badges
- ✅ Testimonials (grid + mobile carousel)
- ✅ Gold pulsing CTA strip
- ✅ FAQ accordion with smooth animation
- ✅ Contact form → WhatsApp + Email redirect
- ✅ Toast notifications
- ✅ All sections pre-loaded (no lazy-load delays)
- ✅ Navy + Gold colour theme matching logo
- ✅ Accessible (ARIA labels, keyboard nav)
- ✅ Respects `prefers-reduced-motion`
