import { useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { getArticleBySlug, articles } from "../data/articles.js";
import { WA } from "../data/constants.js";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

function ContentBlock({ block }) {
  if (block.type === "h2") return <h2>{block.text}</h2>;
  if (block.type === "list") return (
    <ul>
      {block.items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
  return <p>{block.text}</p>;
}

export default function ArticlePage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  useEffect(() => {
    if (article) {
      document.title = `${article.title} | Lumbana Catering`;
    }
  }, [article]);

  if (!article) return <Navigate to="/artikel" replace />;

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 2);

  return (
    <Layout>
      <div className="article-page">
        {/* HEADER */}
        <div className="article-page-header">
          <div className="article-page-pattern" aria-hidden="true" />
          <div className="container article-page-header-inner">
            <Link to="/artikel" className="article-back">← Kembali ke Artikel</Link>
            <span className="article-cat-pill">{article.category}</span>
            <h1>{article.title}</h1>
            <p className="article-page-meta">{formatDate(article.date)} · {article.readTime} baca</p>
          </div>
        </div>

        {/* BODY */}
        <div className="container article-body-wrap">
          <article className="article-body">
            {article.content.map((block, i) => (
              <ContentBlock key={i} block={block} />
            ))}
          </article>

          {/* SIDEBAR CTA */}
          <aside className="article-sidebar">
            <div className="article-sidebar-card">
              <p className="article-sidebar-label">Butuh Catering Adat Batak?</p>
              <p>Konsultasikan kebutuhan menu Anda langsung dengan tim Lumbana Catering — gratis, tanpa komitmen.</p>
              <a className="btn btn-accent" href={WA} target="_blank" rel="noopener noreferrer" style={{ width: "100%", marginTop: "0.75rem" }}>
                Chat WhatsApp
              </a>
            </div>
          </aside>
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <section className="section section-warm">
            <div className="container">
              <h2 className="related-title">Artikel Terkait</h2>
              <div className="related-grid">
                {related.map((a) => (
                  <article key={a.slug} className="article-card">
                    <div className="article-card-body">
                      <span className="article-cat" style={{ background: "#fff2e8", color: "#6e1828" }}>
                        {a.category}
                      </span>
                      <h3 className="article-card-title">
                        <Link to={`/artikel/${a.slug}`}>{a.title}</Link>
                      </h3>
                      <p className="article-card-excerpt">{a.excerpt}</p>
                    </div>
                    <div className="article-card-footer">
                      <span className="article-meta">{formatDate(a.date)} · {a.readTime}</span>
                      <Link to={`/artikel/${a.slug}`} className="article-read-more">Baca →</Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </Layout>
  );
}
