import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { articles } from "../data/articles.js";
import { WA } from "../data/constants.js";

const CATEGORY_COLORS = {
  "Menu & Masakan": { bg: "#fff2e8", color: "#6e1828" },
  "Tradisi Adat":   { bg: "#fdf0f8", color: "#7a1060" },
  "Tips & Panduan": { bg: "#eef6ff", color: "#1a5a96" },
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function ArticlesPage() {
  useEffect(() => {
    document.title = "Artikel | Lumbana Catering — Tips Adat Batak & Panduan Catering";

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <Layout>
      {/* HERO */}
      <section className="articles-hero">
        <div className="articles-hero-pattern" aria-hidden="true" />
        <div className="container articles-hero-inner">
          <p className="eyebrow">Artikel & Panduan</p>
          <h1>Tips, Tradisi, dan Inspirasi Acara Batak</h1>
          <p className="articles-hero-desc">
            Temukan panduan lengkap seputar adat Batak Toba, menu khas, dan tips merencanakan acara yang berkesan bersama keluarga.
          </p>
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="section">
        <div className="container">
          <div className="articles-grid">
            {articles.map((article, i) => {
              const cat = CATEGORY_COLORS[article.category] ?? { bg: "#f5f5f5", color: "#444" };
              return (
                <article key={article.slug} className="article-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                  <div className="article-card-body">
                    <span className="article-cat" style={{ background: cat.bg, color: cat.color }}>
                      {article.category}
                    </span>
                    <h2 className="article-card-title">
                      <Link to={`/artikel/${article.slug}`}>{article.title}</Link>
                    </h2>
                    <p className="article-card-excerpt">{article.excerpt}</p>
                  </div>
                  <div className="article-card-footer">
                    <span className="article-meta">{formatDate(article.date)} · {article.readTime}</span>
                    <Link to={`/artikel/${article.slug}`} className="article-read-more">
                      Baca selengkapnya →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-pattern" aria-hidden="true" />
        <div className="container cta-banner-inner reveal">
          <h2>Butuh Catering untuk Acara Anda?</h2>
          <p>Konsultasikan kebutuhan menu dan dapatkan estimasi harga langsung via WhatsApp.</p>
          <div className="cta-group">
            <a className="btn btn-accent btn-lg" href={WA} target="_blank" rel="noopener noreferrer">
              Pesan via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
