# Gargi Joshi — Developer Portfolio

Welcome to my portfolio! This is a modern, single-page interactive site designed to highlight my work as a Full-Stack & AI Engineer and IT student at PICT Pune. It is built to feel fast, premium, and visually alive.

---

## ✨ Features

- **Interactive Hero & Terminal Indicator**: A sleek, dark-themed introduction featuring terminal commands, monospace headers, and fast scroll-navigation triggers.
- **Project Showcases**: Balanced grids displaying active software developments, tags, live URLs, and git repositories.
- **Academic & Engineering Timeline**: A visual progression of my engineering milestones, experience, and academic highlights.
- **Art Gallery (Painting & Digital Art)**: A curated space featuring traditional canvas works and digital art pieces (such as my anime drawing of Deku and childhood drawings).
  - Hover-based scaling and smooth zoom movements.
  - Interactive **Lightbox Modal Overlay** powered by Framer Motion. Clicking an artwork zooms it into a full-screen blurred backdrop modal.
  - Integrated document-level body scroll-locking during image preview mode.
- **Interactive Contact Form**: A customized, responsive grid section on desktop (60% Form, 40% Links column) and vertical stacked layout on mobile:
  - Form fields (`Name`, `Email`, `Message`) styled to match the site's dark aesthetic (`#3a1418`) with custom borders, input focus rings, and monospace labels.
  - Native client-side **Web3Forms API** form submission integration.
  - Spam prevention via a hidden honeypot (`botcheck`) input field.
  - Button state transitions (`sending...`) and monospace inline success (`✓ got it — I'll reply soon.`) and error handlers.
- **Persistent Interactive Cat Widget**: A fun terminal-inspired cat companion that toggles awake/sleep behaviors, persisting states via `localStorage`.

---

## 🛠️ Tech Stack

- **Core**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Vanilla CSS custom variables
- **Animations**: Framer Motion (transitions, hover micro-interactions, modal scale animations)
- **Icons**: Lucide React
- **Form Handler**: Web3Forms client API

---

## 💻 Local Setup & Development

### 1. Prerequisites
Ensure you have **Node.js** installed on your system.

### 2. Clone and Install
```bash
git clone https://github.com/gargijoshi9/myportfolio.git
cd myportfolio
npm install
```

### 3. Run Development Server
Start the local server with hot module replacement (HMR):
```bash
npm run dev
```

### 4. Build Production Bundle
Build and optimize assets for deployment:
```bash
npm run build
```
This compiles the code and assets into the `/dist` directory.
