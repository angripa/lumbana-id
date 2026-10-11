import Layout, { WaIcon } from "../components/Layout.jsx";
import { SectionHead, PageHero, CtaBand } from "../components/Ui.jsx";
import { WA, TEL, PHONE, waLink } from "../data/constants.js";
import { usePageMeta, useReveal } from "../hooks.js";

const SERVICES = [
  { title: "Acara Adat Batak", text: "Spesialis menu untuk Marhusip, Martonggo Raja, dan Maria Raja dengan cita rasa yang autentik.", tags: ["Marhusip", "Martonggo Raja", "Maria Raja"] },
  { title: "Pesta Pernikahan", text: "Sajian istimewa untuk hari paling berkesan. Dari resepsi sederhana hingga pesta adat besar.", tags: ["Resepsi", "Adat", "Modern"] },
  { title: "Acara Keluarga", text: "Ulang tahun, syukuran, reuni keluarga. Cita rasa yang mempererat kebersamaan.", tags: ["Ulang Tahun", "Syukuran", "Reuni"] },
  { title: "Acara Kedukaan", text: "Layanan penuh empati untuk Sidi, Duka Cita, dan kebutuhan mendadak keluarga.", tags: ["Sidi", "Duka Cita", "Mendadak"] },
  { title: "Masakan Nasional", text: "Selain menu Batak, kami sediakan masakan nusantara favorit untuk semua selera.", tags: ["Rendang", "Ayam Bakar", "Soto"] },
  { title: "Acara Kantor", text: "Solusi catering untuk gathering, training, dan event korporat di Jakarta Timur.", tags: ["Gathering", "Meeting", "Arisan"] },
];

const MENU = [
  { name: "Arsik", desc: "Ikan mas berbumbu lengkuas dan andaliman. Hidangan wajib upacara adat Batak Toba.", badge: "Wajib Adat" },
  { name: "Saksang", desc: "Masakan daging pilihan dengan bumbu rempah khas dan andaliman yang kaya rasa.", badge: "Favorit" },
  { name: "Ayam Napinadar", desc: "Ayam panggang dengan saus bumbu spesial khas Batak yang menggugah selera.", badge: "Spesial" },
  { name: "Dengke Naniarsik", desc: "Ikan masak kuah kuning aromatik dengan rempah pilihan khas Tanah Batak." },
  { name: "Daun Singkong Tumbuk", desc: "Sayuran khas yang dimasak dengan santan dan bumbu Batak pilihan." },
  { name: "Menu Nusantara", desc: "Rendang, Ayam Bakar, Soto Betawi, dan masakan nasional favorit keluarga.", badge: "Tersedia" },
];

const FEATURES = [
  { title: "Bumbu autentik", text: "Resep turun-temurun dengan rempah pilihan dari Tanah Batak." },
  { title: "Porsi fleksibel", text: "Dari 50 hingga ribuan porsi, menyesuaikan skala acara Anda." },
  { title: "Paket adat", text: "Pilihan paket menyesuaikan kebutuhan adat dan anggaran keluarga." },
  { title: "Tepat waktu", text: "Pengiriman on-time ke Jakarta Timur dan area sekitarnya." },
  { title: "Konsultasi gratis", text: "Diskusi menu dan estimasi biaya langsung via WhatsApp." },
  { title: "Higienis & segar", text: "Dimasak fresh setiap hari dengan standar kebersihan terjaga." },
];

const STEPS = [
  { title: "Hubungi via WhatsApp", text: "Ceritakan kebutuhan acara, jumlah tamu, dan tanggal pelaksanaan." },
  { title: "Diskusi menu & paket", text: "Kami bantu susun menu terbaik sesuai selera, adat, dan anggaran." },
  { title: "Konfirmasi & DP", text: "Proses pembayaran aman dan transparan. Pesanan terkonfirmasi setelah DP." },
  { title: "Terima di hari H", text: "Makanan diantarkan tepat waktu, panas, dan siap saji untuk tamu Anda." },
];

const TESTIMONIALS = [
  { name: "Martogi Siahaan", role: "Pernikahan Adat Batak", text: "Arsik dan Saksangnya benar-benar autentik! Semua tamu memuji cita rasanya. Lumbana jadi pilihan utama kami untuk setiap acara keluarga besar." },
  { name: "Rotua Nababan", role: "Acara Syukuran", text: "Responsif dan profesional. Kami pesan mendadak 2 hari sebelum acara dan semua berjalan sangat lancar. Sangat direkomendasikan!" },
  { name: "Parulian Hutapea", role: "Acara Adat Marhusip", text: "Sudah 3 kali memakai Lumbana untuk acara adat keluarga. Konsisten enak, porsi pas, selalu tepat waktu. Tidak akan pindah ke catering lain!" },
];

const FAQS = [
  { q: "Apakah bisa pesan untuk acara mendadak?", a: "Bisa, selama slot produksi masih tersedia. Hubungi WhatsApp kami untuk pengecekan cepat. Kami usahakan membantu kebutuhan mendadak Anda semaksimal mungkin." },
  { q: "Berapa minimal pesanan?", a: "Minimal pesanan mulai dari 50 porsi. Untuk acara skala kecil, silakan konsultasikan terlebih dahulu agar kami dapat menyesuaikan kebutuhan Anda." },
  { q: "Apakah hanya melayani masakan Batak?", a: "Tidak. Kami juga melayani masakan nasional seperti rendang, ayam bakar, soto, dan berbagai menu nusantara lainnya sesuai kebutuhan acara." },
  { q: "Area layanan catering di mana saja?", a: "Fokus layanan kami di Jakarta Timur dan sekitarnya. Untuk lokasi di luar area tersebut, silakan konsultasi terlebih dahulu untuk ketersediaan." },
  { q: "Apakah ada survei lokasi sebelum hari H?", a: "Untuk acara besar kami bisa melakukan survei lokasi. Diskusikan detail ini saat konsultasi menu agar semua kebutuhan teknis dapat kami persiapkan." },
];

export default function KulinerPage() {
  usePageMeta(
    "Catering Khas Batak Toba Jakarta Timur | Lumbana Kuliner",
    "Catering khas Batak Toba untuk Marhusip, Martonggo Raja, Maria Raja, pesta adat, pernikahan, sidi, duka cita, dan acara keluarga di Jakarta Timur."
  );
  useReveal();

  return (
    <Layout>
      <PageHero
        eyebrow="Lumbana Kuliner · Jakarta Timur"
        title={<>Catering<br />Batak Toba</>}
        intro="Cita rasa autentik Batak Toba untuk acara adat, pernikahan, keluarga, dan lebih dari 500 momen istimewa lainnya."
      >
        <div className="btn-row">
          <a className="btn btn-ink btn-lg" href={waLink("Halo Lumbana, saya mau pesan catering.")} target="_blank" rel="noopener noreferrer"><WaIcon /> Pesan via WhatsApp</a>
          <a className="btn btn-outline-light btn-lg" href={TEL}>{PHONE}</a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionHead title="Siap melayani berbagai acara" intro="Dari upacara adat Batak yang sakral hingga pesta keluarga yang meriah." />
          <div className="cells cells-3">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="cell reveal">
                <span className="cell-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="cell-title">{s.title}</h3>
                <p>{s.text}</p>
                <div className="tags">{s.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="section section--stone">
        <div className="container">
          <SectionHead eyebrow="Menu andalan" title="Cita rasa khas yang tak terlupakan" intro="Resep turun-temurun dan rempah pilihan dari Tanah Batak Toba." />
          <div className="cells cells-3">
            {MENU.map((m) => (
              <article key={m.name} className="cell cell--paper reveal">
                {m.badge && <span className="badge">{m.badge}</span>}
                <h3 className="cell-title">{m.name}</h3>
                <p>{m.desc}</p>
              </article>
            ))}
          </div>
          <div className="center-row reveal">
            <a className="btn btn-red btn-lg" href={waLink("Halo Lumbana, saya mau tanya menu lengkap dan harga paket catering.")} target="_blank" rel="noopener noreferrer">Tanya menu lengkap</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Kenapa Lumbana" />
          <div className="feature-list">
            {FEATURES.map((f) => (
              <div key={f.title} className="feature reveal">
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--ink">
        <div className="container">
          <h2 className="display band-title reveal">Cara pesan</h2>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <li key={s.title} className="step reveal">
                <span className="cell-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead title="Kata keluarga" />
          <div className="card-grid">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name} className="quote reveal">
                <blockquote>“{t.text}”</blockquote>
                <figcaption><strong>{t.name}</strong><span>{t.role}</span></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="section section--stone">
        <div className="container narrow">
          <SectionHead title="Pertanyaan umum" />
          <div className="faq">
            {FAQS.map((f) => (
              <details key={f.q} className="faq-item">
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Siap pesan untuk acara Anda?" text="Konsultasi menu gratis dan estimasi harga langsung via WhatsApp." href={WA} label="Pesan via WhatsApp" />
    </Layout>
  );
}
