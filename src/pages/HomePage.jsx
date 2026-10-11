import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import { SectionHead, CtaBand } from "../components/Ui.jsx";
import { PILLARS, TRIPS, ADAT_SERVICES, STATS } from "../data/platform.js";
import { articles } from "../data/articles.js";
import { usePageMeta, useReveal } from "../hooks.js";

const TICKER = ["Horas", "Kuliner", "Wisata", "Acara Adat", "Pasar", "Mauliate"];

export default function HomePage() {
  usePageMeta(
    "Lumbana.id | Platform Budaya Batak: Kuliner, Wisata, Acara Adat",
    "Lumbana.id: catering khas Batak Toba, paket wisata Danau Toba, paket pesta adat lengkap, dan produk asli Tano Batak. Satu tim yang paham adat."
  );
  useReveal();

  const latest = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3);

  return (
    <Layout>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="display hero-title">
              Batak itu<br /><span className="hl">lebih</span><br />dari rasa.
            </h1>
            <div className="hero-foot">
              <p>Catering adat, perjalanan ke Danau Toba, paket pesta adat lengkap, dan produk asli Tano Batak. Satu tim yang paham adat.</p>
              <div className="btn-row">
                <Link className="btn btn-red btn-lg" to="/acara-adat">Mulai rencanakan</Link>
                <a className="btn btn-outline btn-lg" href="#layanan">Lihat layanan</a>
              </div>
            </div>
          </div>
          <HeroSlider />
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...TICKER, ...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>{t}<i>◆</i></span>
          ))}
        </div>
      </div>

      {/* PILLARS */}
      <section id="layanan" className="section">
        <div className="container">
          <SectionHead title="Empat layanan" intro="Berawal dari dapur catering Batak di Jakarta Timur. Sekarang kami menemani keluarga Batak untuk makan, pulang, berpesta, dan merawat adat." />
          <div className="cells cells-4">
            {PILLARS.map((p, i) => (
              <Link key={p.to} to={p.to} className={`cell cell-link reveal${i === 0 ? " cell--red" : ""}`}>
                <span className="cell-num">{p.num}</span>
                <h3 className="cell-title">{p.title}</h3>
                <p>{p.text}</p>
                <span className="cell-cta">{p.cta}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ADAT BAND */}
      <section className="band band--red">
        <div className="container band-inner">
          <div className="reveal">
            <p className="eyebrow">Paket pesta adat</p>
            <h2 className="display band-title">Satu tim.<br />Satu tagihan.<br />Satu WA.</h2>
            <Link className="btn btn-ink btn-lg" to="/acara-adat">Susun paket saya</Link>
          </div>
          <ul className="cells cells-2 cells--on-red reveal">
            {ADAT_SERVICES.slice(0, 6).map((s) => (
              <li key={s.id} className="cell cell-sm">
                <strong>{s.name}</strong>
                <span>{s.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WISATA */}
      <section className="section">
        <div className="container">
          <SectionHead
            title="Pulang ke Toba"
            action={<Link className="link-caps" to="/wisata">Semua trip</Link>}
          />
          <div className="card-grid">
            {TRIPS.map((t, i) => (
              <Link key={t.slug} to={`/wisata#${t.slug}`} className="card reveal">
                <div className={`media media--${["ink", "red", "stone"][i % 3]}`}>
                  <span className="media-tag">{t.duration}</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{t.title}</h3>
                  <p>{t.route}</p>
                  <span className="cell-cta">Lihat itinerary</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container cells cells-4 cells--on-ink">
          {STATS.map((s) => (
            <div key={s.label} className="cell stat">
              <span className="stat-num">{s.num}</span>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CERITA */}
      <section className="section">
        <div className="container">
          <SectionHead
            title="Belajar adat sebelum hari H"
            action={<Link className="link-caps" to="/artikel">Semua cerita</Link>}
          />
          <div className="story-grid">
            {latest.map((a) => (
              <Link key={a.slug} to={`/artikel/${a.slug}`} className="story reveal">
                <span className="eyebrow">{a.category}</span>
                <h3>{a.title}</h3>
                <p>{a.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Horas! Ada yang bisa kami bantu?" text="Konsultasi gratis untuk catering, perjalanan, atau pesta adat keluarga Anda." />
    </Layout>
  );
}
