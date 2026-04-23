# Munkh-Erdene Erdenetogtokh — Portfolio

A modern, minimal, and professional personal portfolio for a Machine Learning & Data Science Engineering student.

## ✨ Features

- **Dark / Light mode toggle** with smooth transitions
- **Sticky navbar** with scroll-progress bar and active-section highlighting
- **Typewriter hero tagline** cycling through impactful phrases
- **Animated floating orbs** + grid background in the hero
- **Scroll-triggered reveals** using IntersectionObserver
- **Animated skill progress bars** that fill on scroll into view
- **Hover-lift project cards** with tech tags, GitHub links
- **Fully responsive** — mobile-first layout throughout
- **Smooth scrolling** navigation between all sections

## 🗂 File Structure

```
portfolio/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── hooks/
    │   └── useInView.js
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Education.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Install & Run

```bash
# 1. Navigate into the project folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open **http://localhost:5173** in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## 🎨 Customisation Checklist

| What to change | Where |
|---|---|
| Name & title | `Hero.jsx` |
| Taglines (typewriter) | `Hero.jsx` → `TAGLINES` array |
| Bio text | `About.jsx` |
| Skills & percentages | `Skills.jsx` → `SKILL_CATEGORIES` |
| Projects | `Projects.jsx` → `PROJECTS` array |
| GitHub / demo links | `Projects.jsx` → `href` fields |
| Education details | `Education.jsx` |
| Contact info | `Contact.jsx` → `CONTACTS` array |
| Color accent | `tailwind.config.js` + `index.css` |

## 🛠 Tech Stack

- **React 18** — UI framework
- **Vite** — Lightning-fast dev server & bundler
- **Tailwind CSS 3** — Utility-first styling
- **CSS custom animations** — Orbs, shimmer, typewriter, skill bars
- **IntersectionObserver** — Native scroll-triggered animations (no library needed)

## 📄 Sections

1. **Hero** — Animated name, typewriter tagline, CTA buttons, floating orbs
2. **About** — Bio, interests, stat cards, motivational quote
3. **Skills** — Animated bar charts across 3 categories + extra tag cloud
4. **Projects** — 3 animated cards: Seismic Inversion, Food Summit, Check-check
5. **Education** — China University of Petroleum BSc details
6. **Contact** — Email, phone, LinkedIn, GitHub + availability card

---

Built with ❤️ using React + Tailwind CSS
