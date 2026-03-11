# Moinul Islam Shad — Portfolio

A professional portfolio built with **React + Vite**.

## 🚀 Deploy to Vercel (5 minutes)

### Step 1 — Install dependencies locally (optional, to test first)
```bash
npm install
npm run dev
```
Open http://localhost:5173 to preview.

### Step 2 — Push to GitHub
1. Go to https://github.com/new and create a new repo (e.g. `portfolio`)
2. In your terminal:
```bash
cd portfolio
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to https://vercel.com and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `portfolio` repo
4. Leave all settings as default (Vercel auto-detects Vite)
5. Click **"Deploy"**

✅ Your site will be live at `https://your-project.vercel.app` in ~1 minute!

---

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          ← global styles & design tokens
    ├── data.js            ← all your content (edit this!)
    └── components/
        ├── Navbar.jsx / .module.css
        ├── Hero.jsx / .module.css
        ├── About.jsx / .module.css
        ├── Skills.jsx / .module.css
        ├── Experience.jsx / .module.css
        ├── Projects.jsx / .module.css
        ├── Education.jsx / .module.css
        ├── Contact.jsx / .module.css
        └── Footer.jsx / .module.css
```

## ✏️ Customisation

All content is in **`src/data.js`** — edit your skills, experience, projects and contact info there without touching any component files.
