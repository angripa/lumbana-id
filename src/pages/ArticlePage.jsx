import { Link, useParams, Navigate } from "react-router-dom";
import Layout, { WaIcon } from "../components/Layout.jsx";
import { getArticleBySlug, articles } from "../data/articles.js";
import { WA } from "../data/constants.js";
import { usePageMeta, useReveal } from "../hooks.js";
import { ArticleCard, formatDate } from "./ArticlesPage.jsx";

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

  usePageMeta(article ? `${article.title} | Lumbana.id` : "Cerita | Lumbana.id", article?.excerpt);
  useReveal([slug]);

  if (!article) return <Navigate to="/artikel" replace />;

  const related = articles.filter((a) => a.slug !== slug && a.category === article.category).slice(0, 3);

  return (
    <Layout>
      <section className="page-hero page-hero--ink">
        <div className="container article-hero">
          <Link to="/artikel" className="link-caps">Kembali ke Cerita</Link>
          <span className="badge badge--red">{article.category}</span>
          <h1 className="article-title">{article.title}</h1>
          <p className="article-meta">{formatDate(article.date)} · {article.readTime} baca</p>
        </div>
      </section>

      <div className="container article-layout">
        <article className="prose">
          {article.content.map((block, i) => <ContentBlock key={i} block={block} />)}
        </article>

        <aside className="article-aside">
          <div className="aside-card">
            <p className="eyebrow">Butuh bantuan acara adat?</p>
            <p>Konsultasikan catering dan paket pesta adat langsung dengan tim Lumbana. Gratis, tanpa komitmen.</p>
            <a className="btn btn-red btn-block" href={WA} target="_blank" rel="noopener noreferrer"><WaIcon /> Chat WhatsApp</a>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="section section--stone">
          <div className="container">
            <h2 className="h-section related-title">Cerita terkait</h2>
            <div className="article-grid">
              {related.map((a) => <ArticleCard key={a.slug} article={a} as="h3" />)}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
