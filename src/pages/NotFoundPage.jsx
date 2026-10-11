import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { WA } from "../data/constants.js";
import { usePageMeta } from "../hooks.js";

export default function NotFoundPage() {
  usePageMeta("Halaman Tidak Ditemukan | Lumbana.id");

  return (
    <Layout>
      <section className="page-hero page-hero--ink not-found">
        <div className="container">
          <p className="display not-found-code" aria-hidden="true">404</p>
          <h1 className="display">Halaman tidak ditemukan</h1>
          <p className="page-hero-intro">Halaman yang Anda cari tidak ada atau sudah dipindahkan.</p>
          <div className="btn-row">
            <Link className="btn btn-red btn-lg" to="/">Kembali ke beranda</Link>
            <a className="btn btn-outline-light btn-lg" href={WA} target="_blank" rel="noopener noreferrer">Hubungi kami</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
