# Lumbana.id — React (Vite)

Situs **React** untuk Lumbana.id, platform budaya Batak: Kuliner (catering), Wisata, Acara Adat, dan Pasar.

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
- `src/App.jsx` — daftar route: `/`, `/kuliner`, `/wisata`, `/acara-adat`, `/pasar`, `/artikel`
- `src/pages/` — satu file per halaman
- `src/data/platform.js` — data layanan, paket wisata, pilihan paket adat
- `src/data/constants.js` — nomor WhatsApp, telepon, alamat, `waLink()`
- `src/components/Logo.jsx` — logo bindu matoga
- `src/index.css` — design system (hitam `#111111`, merah `#D22B1F`, putih `#FAFAF7`, font Archivo)
- `public/robots.txt`, `public/sitemap.xml` — SEO

## Sebelum go-live

1. Ganti `https://example.com` di `index.html` (JSON-LD `url`), `public/robots.txt`, dan `public/sitemap.xml`.
2. Tambahkan foto menu di `public/` dan tampilkan di halaman jika perlu.
