<div align="center">

# 💎 MR LUXE | Rohit Roy

### Premium Black & Gold Portfolio — Luxury Jewellery Packaging Brand

![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-181717?style=for-the-badge&logo=github)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-C9A44D?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-black?style=for-the-badge)

</div>

---

## ✨ Overview

**MR LUXE** is the official single-page portfolio and brand website for **Rohit Roy**, founder of MR LUXE — a premium jewellery packaging brand. The site is designed to feel like an expensive, modern luxury portfolio, drawing visual inspiration from brands like Apple, Rolex, Louis Vuitton, and Rolls-Royce, expressed through a **black & gold** design language.

Built as a static site with no build step, no dependencies, and no backend — deployable directly on **GitHub Pages**.

---

## 🚀 Features

- 🖤 **Premium Black & Gold theme** — consistent luxury visual identity across every section
- 📱 **Fully responsive** — tuned for 320px through 1400px+ (phones, tablets, laptops, desktops)
- 🍔 **Custom mobile navigation** — lightweight dropdown menu with smooth open/close animation
- 🔠 **Typography system** — Poppins for body/UI, Cormorant Garamond for luxury display headings
- 🖼️ **CSS Grid gallery** — equal-ratio images via `aspect-ratio` + `object-fit`, no stretching or misalignment
- 🧭 **Single-page navigation** — `#home`, `#about`, `#gallery`, `#journey`, `#contact`
- ⚙️ **CSS custom properties** — one design-token source of truth (colors, spacing, radii, shadows)
- 🔍 **SEO-ready** — `robots.txt`, `sitemap.xml`, meta description, and a branded `404.html`
- ⚡ **Zero dependencies** — pure HTML, CSS, and vanilla JavaScript; no frameworks, no build tools
- ♿ **Accessible** — visible focus states, keyboard-dismissible mobile menu, adequate contrast

---

## 📁 Folder Structure

```
mr-luxe/
├── index.html              # Main single-page site (all sections)
├── 404.html                # Custom branded error page
├── robots.txt               # Search engine crawl rules
├── sitemap.xml               # XML sitemap for search engines
├── README.md                 # Project documentation (this file)
│
└── assets/
    ├── css/
    │   ├── style.css          # Full design system + layout + responsive rules
    │   └── responsive.css     # Reserved (all breakpoints currently live in style.css)
    │
    ├── js/
    │   └── main.js             # Mobile menu logic (toggleMenu, outside-click/Escape close)
    │
    ├── img/
    │   ├── hero.jpg
    │   ├── about.jpg
    │   └── gallery-*.jpg
    │
    └── icons/
        └── favicon.png
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic page structure |
| **CSS3** (Custom Properties, Grid, Flexbox) | Design system, layout, responsiveness |
| **Vanilla JavaScript** | Mobile navigation behavior |
| **Google Fonts** | Poppins + Cormorant Garamond |
| **GitHub Pages** | Static hosting & deployment |

No frameworks, no package manager, no build step required.

---

## 💻 Installation (Run Locally)

Since this is a static site, no installation or build tools are required.

```bash
# 1. Clone the repository
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 2. Move into the project folder
cd YOUR-REPO-NAME

# 3. Open index.html directly in your browser
#    — or serve it locally for the best experience:
python3 -m http.server 8000
# then visit http://localhost:8000
```

---

## 🌐 GitHub Pages Deployment Guide

1. Push this repository to GitHub (public repo, or a private repo on a paid plan).
2. Go to your repository → **Settings** → **Pages**.
3. Under **Build and deployment** → **Source**, select **Deploy from a branch**.
4. Choose the branch (usually `main`) and the folder `/ (root)`, then **Save**.
5. GitHub will publish your site at:
   ```
   https://YOUR-USERNAME.github.io/YOUR-REPO-NAME/
   ```
6. Once live, update the placeholder URLs in **`robots.txt`** and **`sitemap.xml`** with this real URL.
7. *(Optional)* Add a custom domain later via **Settings → Pages → Custom domain** — a `CNAME` file will be generated automatically.

> ⏱️ It can take a minute or two for GitHub Pages to build and publish after your first push.

---

## 🔍 SEO Features

- ✅ `robots.txt` — allows all search engines, points to `sitemap.xml`
- ✅ `sitemap.xml` — single-page-site-correct sitemap (one canonical entry, not one per anchor)
- ✅ Descriptive `<title>` and `<meta name="description">` tags
- ✅ Custom `404.html` with `noindex` meta tag so error pages aren't indexed
- ✅ Semantic HTML structure for better crawlability
- ✅ Fast-loading, dependency-free static assets

> ⚠️ **Note:** `robots.txt` and `sitemap.xml` currently contain a clearly marked `TODO-ADD-YOUR-SITE-URL` placeholder instead of a real domain, since no GitHub Pages URL or custom domain exists yet. Replace it with your live URL once deployed — leaving a placeholder in is safer than shipping a guessed, possibly wrong URL to search engines.

---

## 📞 Contact

**MR LUXE**
Founder: **Rohit Roy**

- 💬 WhatsApp: [+91 7029714746](https://wa.me/917029714746)
- 📧 Email: [gamermanoj7@email.com](mailto:gamermanoj7@email.com)

---

## 📄 License

This project is licensed under the **MIT License** — you are free to use, modify, and distribute it with attribution.

```
MIT License

Copyright (c) 2026 Rohit Roy / MR LUXE

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

Made with 🖤 and 🥇 by **Rohit Roy**

</div>
