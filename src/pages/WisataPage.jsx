import Layout, { WaIcon } from "../components/Layout.jsx";
import { PageHero, CtaBand } from "../components/Ui.jsx";
import { TRIPS, TRIP_INCLUDES, TRIP_EXCLUDES } from "../data/platform.js";
import { waLink } from "../data/constants.js";
import { usePageMeta, useReveal } from "../hooks.js";

const ADDONS = [
  { title: "Makan malam adat", text: "Arsik, saksang, dan dengke di rumah warga." },
  { title: "Foto keluarga pakai ulos", text: "Fotografer dan sewa ulos." },
  { title: "Kunjungi huta marga", text: "Kami cari tugu dan kampung asal marga Anda." },
];

export default function WisataPage() {
  usePageMeta(
    "Paket Wisata Danau Toba & Samosir | Lumbana Wisata",
    "Paket wisata Danau Toba, Samosir, dan trip pulang kampung (bona pasogit) untuk keluarga Batak perantau, dipandu orang Batak."
  );
  useReveal();

  return (
    <Layout>
      <PageHero
        tone="ink"
        eyebrow="Lumbana Wisata"
        title={<>Pulang<br />ke Toba</>}
        intro="Paket Danau Toba, tur budaya, dan trip pulang kampung untuk keluarga perantau. Dipandu orang Batak yang bisa cerita sejarah marga di tiap huta."
      >
        <nav className="jump-links" aria-label="Pilih paket">
          {TRIPS.map((t) => <a key={t.slug} href={`#${t.slug}`}>{t.title}</a>)}
        </nav>
      </PageHero>

      {TRIPS.map((t, i) => (
        <section key={t.slug} id={t.slug} className={`section trip${i % 2 ? " section--stone" : ""}`}>
          <div className="container trip-inner">
            <div className="trip-main">
              <div className="trip-head reveal">
                <h2 className="display trip-title">{t.title}</h2>
                <dl className="facts">
                  <div><dt>Durasi</dt><dd>{t.duration}</dd></div>
                  <div><dt>Rute</dt><dd>{t.route}</dd></div>
                </dl>
              </div>
              <p className="lead reveal">{t.summary}</p>
              <ol className="itinerary">
                {t.days.map((d, n) => (
                  <li key={d.title} className="reveal">
                    <span className="itinerary-num">{t.duration === "Custom" ? String(n + 1).padStart(2, "0") : `H${n + 1}`}</span>
                    <div>
                      <h3>{d.title}</h3>
                      <p>{d.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <aside className="booking reveal" aria-label={`Tanya paket ${t.title}`}>
              <div className="booking-head">
                <span className="eyebrow">{t.duration}</span>
                <p className="booking-title">{t.title}</p>
              </div>
              <div className="booking-body">
                <p>Harga tergantung jumlah peserta dan tanggal. Kami kirim penawaran lewat WhatsApp.</p>
                <a
                  className="btn btn-ink btn-block"
                  href={waLink(`Halo Lumbana, saya mau tanya paket wisata ${t.title}. Rencana berangkat: ... Jumlah peserta: ...`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <WaIcon /> Tanya jadwal &amp; harga
                </a>
              </div>
            </aside>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container">
          <div className="cells cells-2">
            <div className="cell reveal">
              <h2 className="cell-title">Umumnya termasuk</h2>
              <ul className="bullets">{TRIP_INCLUDES.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className="cell cell--stone reveal">
              <h2 className="cell-title">Tidak termasuk</h2>
              <ul className="bullets">{TRIP_EXCLUDES.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--ink">
        <div className="container">
          <h2 className="display band-title reveal">Tambah ke trip</h2>
          <div className="cells cells-3 cells--on-ink">
            {ADDONS.map((a) => (
              <div key={a.title} className="cell reveal">
                <h3 className="cell-title">{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Rombongan keluarga atau gereja?"
        text="Kami susun trip khusus sesuai jumlah peserta, anggaran, dan tujuan."
        href={waLink("Halo Lumbana, saya mau susun trip rombongan ke Toba.")}
        label="Susun trip rombongan"
      />
    </Layout>
  );
}
