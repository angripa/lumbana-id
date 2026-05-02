# Lumbana Catering — React (Vite)

Landing page **React** yang responsive dan SEO-friendly untuk Lumbana Catering.

## Menjalankan

```bash
cd /Users/user/workspace/totasolution/lumbana
npm install
npm run dev
```

Buka URL yang ditampilkan (biasanya `http://localhost:5173`).

## Build production

```bash
npm run build
npm run preview
```

Output ada di folder `dist/`. Deploy `dist/` ke hosting statis (Netlify, Vercel, Cloudflare Pages, dll.).

## Struktur

- `index.html` — shell + meta SEO + JSON-LD
- `src/App.jsx` — konten halaman
- `src/components/Header.jsx` — navigasi + menu mobile (hamburger)
- `src/index.css` — gaya mobile-first
- `public/robots.txt`, `public/sitemap.xml` — SEO

## Sebelum go-live

1. Ganti `https://example.com` di `index.html` (JSON-LD `url`), `public/robots.txt`, dan `public/sitemap.xml`.
2. Tambahkan foto menu di `public/` dan tampilkan di halaman jika perlu.
