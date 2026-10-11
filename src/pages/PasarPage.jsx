import Layout, { WaIcon } from "../components/Layout.jsx";
import { PageHero, SectionHead } from "../components/Ui.jsx";
import { MARKET_CATEGORIES } from "../data/platform.js";
import { waLink } from "../data/constants.js";
import { usePageMeta, useReveal } from "../hooks.js";

export default function PasarPage() {
  usePageMeta(
    "Pasar Lumbana | Ulos, Andaliman, Kopi dari Tano Batak",
    "Pasar Lumbana: ulos tenun, andaliman, kopi Lintong, dan oleh-oleh Toba langsung dari penenun dan petani Tano Batak."
  );
  useReveal();

  return (
    <Layout>
      <PageHero
        tone="ink"
        eyebrow="Pasar Lumbana · Segera dibuka"
        title={<>Langsung dari<br />Tano Batak</>}
        intro="Toko online kami sedang disiapkan. Sementara itu, pesan ulos atau bumbu Batak lewat WhatsApp."
      >
        <div className="btn-row">
          <a className="btn btn-red btn-lg" href={waLink("Halo Lumbana, saya mau pesan dari Pasar Lumbana: ...")} target="_blank" rel="noopener noreferrer">
            <WaIcon /> Pesan via WhatsApp
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead title="Yang akan ada di pasar" />
          <div className="cells cells-4">
            {MARKET_CATEGORIES.map((c, i) => (
              <article key={c.title} className={`cell reveal${i === 0 ? " cell--red" : ""}`}>
                <span className="cell-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="cell-title">{c.title}</h3>
                <p>{c.text}</p>
                <a className="cell-cta" href={waLink(`Halo Lumbana, saya mau tanya ${c.title.toLowerCase()}.`)} target="_blank" rel="noopener noreferrer">Tanya stok</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
