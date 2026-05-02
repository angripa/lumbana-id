import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout.jsx";
import { WA } from "../data/constants.js";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Halaman Tidak Ditemukan | Lumbana Catering";
  }, []);

  return (
    <Layout>
      <section className="not-found">
        <div className="not-found-pattern" aria-hidden="true" />
        <div className="container not-found-inner">
          <p className="not-found-code" aria-hidden="true">404</p>
          <h1>Halaman Tidak Ditemukan</h1>
          <p className="not-found-desc">
            Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.
            Kembali ke beranda untuk menemukan apa yang Anda butuhkan.
          </p>
          <div className="cta-group not-found-cta">
            <Link className="btn btn-accent btn-lg" to="/">
              Kembali ke Beranda
            </Link>
            <a className="btn btn-outline-white btn-lg" href={WA} target="_blank" rel="noopener noreferrer">
              Hubungi Kami
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
