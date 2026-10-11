import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { PageHero, CtaBand } from "../components/Ui.jsx";
import { articles } from "../data/articles.js";
import { usePageMeta, useReveal } from "../hooks.js";

export function formatDate(iso) {
  return new Date(iso).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export function ArticleCard({ article, as: Title = "h2" }) {
  return (
    <article className="article-card reveal">
      <span className="badge">{article.category}</span>
      <Title className="article-card-title">
        <Link to={`/artikel/${article.slug}`}>{article.title}</Link>
      </Title>
      <p>{article.excerpt}</p>
      <p className="article-meta">{formatDate(article.date)} · {article.readTime}</p>
    </article>
  );
}

export default function ArticlesPage() {
  usePageMeta(
    "Cerita | Lumbana.id: Adat Batak, Kuliner, dan Panduan Acara",
    "Panduan adat Batak Toba, menu khas, dan tips merencanakan acara keluarga dari tim Lumbana."
  );
  useReveal();

  return (
    <Layout>
      <PageHero
        tone="ink"
        eyebrow="Cerita"
        title={<>Belajar adat<br />sebelum hari H</>}
        intro="Panduan seputar adat Batak Toba, menu khas, dan tips merencanakan acara bersama keluarga."
      />

      <section className="section">
        <div className="container">
          <div className="article-grid">
            {articles.map((a) => <ArticleCard key={a.slug} article={a} />)}
          </div>
        </div>
      </section>

      <CtaBand title="Butuh bantuan untuk acara Anda?" text="Konsultasi gratis untuk catering dan paket pesta adat." />
    </Layout>
  );
}
