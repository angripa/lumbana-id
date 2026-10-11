import { useId, useMemo, useState } from "react";
import Layout, { WaIcon } from "../components/Layout.jsx";
import { PageHero } from "../components/Ui.jsx";
import { ADAT_EVENTS, ADAT_SERVICES, GUEST_OPTIONS } from "../data/platform.js";
import { waLink } from "../data/constants.js";
import { usePageMeta, useReveal } from "../hooks.js";

const DEFAULT_SERVICES = { catering: true, ulos: true, gondang: true, parhata: true };

export default function AcaraPage() {
  usePageMeta(
    "Paket Pesta Adat Batak Lengkap | Lumbana Acara Adat",
    "Susun paket pesta adat Batak: catering adat, ulos, gondang, raja parhata, tenda, dan dokumentasi. Satu tim untuk pesta unjuk, saur matua, dan mangongkal holi."
  );
  useReveal();

  const [event, setEvent] = useState("unjuk");
  const [guests, setGuests] = useState("500");
  const [services, setServices] = useState(DEFAULT_SERVICES);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const dateId = useId();
  const placeId = useId();

  const eventName = ADAT_EVENTS.find((e) => e.id === event)?.name;
  const guestLabel = GUEST_OPTIONS.find((g) => g.id === guests)?.label;
  const picked = ADAT_SERVICES.filter((s) => services[s.id]);

  const message = useMemo(() => [
    "Halo Lumbana, saya mau susun paket pesta adat:",
    `Acara: ${eventName}`,
    `Jumlah tamu: ${guestLabel}`,
    `Layanan: ${picked.length ? picked.map((s) => s.name).join(", ") : "-"}`,
    `Tanggal: ${date || "belum pasti"}`,
    `Lokasi: ${place || "belum pasti"}`,
  ].join("\n"), [eventName, guestLabel, picked, date, place]);

  const toggle = (id) => setServices((s) => ({ ...s, [id]: !s[id] }));

  return (
    <Layout>
      <PageHero
        eyebrow="Lumbana Acara Adat"
        title={<>Susun<br />pesta adat</>}
        intro="Tiga langkah. Pilih acara, jumlah tamu, dan layanan. Rundown dan estimasi biaya kami kirim lewat WhatsApp."
      />

      <section className="section">
        <div className="container builder">
          <div className="builder-steps">
            <fieldset className="step-block reveal">
              <legend className="step-legend"><span>01</span> Jenis acara</legend>
              <div className="choice-grid">
                {ADAT_EVENTS.map((e) => (
                  <button key={e.id} type="button" className="choice" aria-pressed={event === e.id} onClick={() => setEvent(e.id)}>
                    <strong>{e.name}</strong>
                    <span>{e.desc}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="step-block reveal">
              <legend className="step-legend"><span>02</span> Jumlah tamu</legend>
              <div className="pill-row">
                {GUEST_OPTIONS.map((g) => (
                  <button key={g.id} type="button" className="pill" aria-pressed={guests === g.id} onClick={() => setGuests(g.id)}>
                    {g.label}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="step-block reveal">
              <legend className="step-legend"><span>03</span> Layanan</legend>
              <div className="choice-grid choice-grid--wide">
                {ADAT_SERVICES.map((s) => (
                  <button key={s.id} type="button" className="choice choice--check" aria-pressed={!!services[s.id]} onClick={() => toggle(s.id)}>
                    <span className="check" aria-hidden="true" />
                    <span>
                      <strong>{s.name}</strong>
                      <span>{s.desc}</span>
                    </span>
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset className="step-block reveal">
              <legend className="step-legend"><span>04</span> Detail (opsional)</legend>
              <div className="field-row">
                <div className="field">
                  <label htmlFor={dateId}>Tanggal acara</label>
                  <input id={dateId} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="field">
                  <label htmlFor={placeId}>Lokasi</label>
                  <input id={placeId} type="text" placeholder="Gedung atau kota" value={place} onChange={(e) => setPlace(e.target.value)} />
                </div>
              </div>
            </fieldset>
          </div>

          <aside className="summary" aria-label="Ringkasan paket" aria-live="polite">
            <div className="summary-head">
              <p className="eyebrow">Paket Anda</p>
              <p className="summary-title">{eventName}</p>
              <p className="summary-meta">{guestLabel} tamu · {picked.length} layanan</p>
            </div>
            <ul className="summary-list">
              {picked.map((s) => <li key={s.id}>{s.name}</li>)}
              {!picked.length && <li className="muted">Belum ada layanan dipilih.</li>}
            </ul>
            <p className="summary-note">Belum ada kewajiban bayar. Kami hubungi untuk diskusi adat dan anggaran.</p>
            <a className="btn btn-red btn-block btn-lg" href={waLink(message)} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Kirim ke WhatsApp
            </a>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
