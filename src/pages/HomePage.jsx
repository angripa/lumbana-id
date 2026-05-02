import { useEffect, useState } from "react";
import Layout from "../components/Layout.jsx";
import { WA, TEL, PHONE } from "../data/constants.js";

const STATS = [
  { num: "500+", label: "Acara Dilayani" },
  { num: "10+", label: "Tahun Pengalaman" },
  { num: "1000+", label: "Keluarga Puas" },
  { num: "20+", label: "Varian Menu" },
];

const SERVICES = [
  {
    icon: "🏛️",
    title: "Acara Adat Batak",
    text: "Spesialis menu untuk Marhusip, Martonggo Raja, dan Maria Raja dengan cita rasa yang autentik.",
    tags: ["Marhusip", "Martonggo Raja", "Maria Raja"],
  },
  {
    icon: "💍",
    title: "Pesta Pernikahan",
    text: "Sajian istimewa untuk hari paling berkesan. Dari resepsi sederhana hingga pesta adat besar.",
    tags: ["Resepsi", "Adat", "Modern"],
  },
  {
    icon: "🎂",
    title: "Acara Keluarga",
    text: "Ulang tahun, syukuran, reuni keluarga — cita rasa yang mempererat kebersamaan.",
    tags: ["Ulang Tahun", "Syukuran", "Reuni"],
  },
  {
    icon: "🕯️",
    title: "Acara Kedukaan",
    text: "Layanan penuh empati untuk Sidi, Duka Cita, dan kebutuhan mendadak keluarga.",
    tags: ["Sidi", "Duka Cita", "Mendadak"],
  },
  {
    icon: "🍽️",
    title: "Masakan Nasional",
    text: "Selain menu Batak, kami sediakan masakan nusantara favorit untuk semua selera.",
    tags: ["Rendang", "Ayam Bakar", "Soto"],
  },
  {
    icon: "🏢",
    title: "Acara Kantor",
    text: "Solusi catering untuk gathering, training, dan event korporat di Jakarta Timur.",
    tags: ["Gathering", "Meeting", "Arisan"],
  },
];

const MENU = [
  { name: "Arsik", desc: "Ikan mas berbumbu lengkuas dan andaliman — hidangan wajib upacara adat Batak Toba.", badge: "Wajib Adat", bg: "#fff8ee" },
  { name: "Saksang", desc: "Masakan daging pilihan dengan bumbu rempah khas dan andaliman yang kaya rasa.", badge: "Favorit", bg: "#fff2e8" },
  { name: "Ayam Napinadar", desc: "Ayam panggang dengan saus bumbu spesial khas Batak yang menggugah selera.", badge: "Spesial", bg: "#fff8ee" },
  { name: "Dengke Naniarsik", desc: "Ikan masak kuah kuning aromatik dengan rempah pilihan khas Tanah Batak.", badge: "", bg: "#fff2e8" },
  { name: "Daun Singkong Tumbuk", desc: "Sayuran khas yang dimasak dengan santan dan bumbu Batak pilihan.", badge: "", bg: "#fff8ee" },
  { name: "Menu Nusantara", desc: "Rendang, Ayam Bakar, Soto Betawi, dan masakan nasional favorit keluarga.", badge: "Tersedia", bg: "#fff2e8" },
];

const FEATURES = [
  { icon: "🌶️", title: "Bumbu Autentik", text: "Resep turun-temurun dengan rempah pilihan dari Tanah Batak." },
  { icon: "📦", title: "Porsi Fleksibel", text: "Dari 50 hingga ribuan porsi, menyesuaikan skala acara Anda." },
  { icon: "📋", title: "Paket Adat", text: "Pilihan paket menyesuaikan kebutuhan adat dan anggaran keluarga." },
  { icon: "🚚", title: "Tepat Waktu", text: "Pengiriman on-time ke Jakarta Timur dan area sekitarnya." },
  { icon: "💬", title: "Konsultasi Gratis", text: "Diskusi menu dan estimasi biaya langsung via WhatsApp." },
  { icon: "✨", title: "Higienis & Segar", text: "Dimasak fresh setiap hari dengan standar kebersihan terjaga." },
];

const STEPS = [
  { num: "01", title: "Hubungi via WhatsApp", text: "Ceritakan kebutuhan acara, jumlah tamu, dan tanggal pelaksanaan." },
  { num: "02", title: "Diskusi Menu & Paket", text: "Kami bantu susun menu terbaik sesuai selera, adat, dan anggaran." },
  { num: "03", title: "Konfirmasi & DP", text: "Proses pembayaran aman dan transparan. Pesanan terkonfirmasi setelah DP." },
  { num: "04", title: "Terima di Hari H", text: "Makanan diantarkan tepat waktu, panas, dan siap saji untuk tamu Anda." },
];

const TESTIMONIALS = [
  { name: "Martogi Siahaan", role: "Pernikahan Adat Batak", text: "Arsik dan Saksangnya benar-benar autentik! Semua tamu memuji cita rasanya. Lumbana jadi pilihan utama kami untuk setiap acara keluarga besar.", rating: 5 },
  { name: "Rotua Nababan", role: "Acara Syukuran", text: "Responsif dan profesional. Kami pesan mendadak 2 hari sebelum acara dan semua berjalan sangat lancar. Sangat direkomendasikan!", rating: 5 },
  { name: "Parulian Hutapea", role: "Acara Adat Marhusip", text: "Sudah 3 kali memakai Lumbana untuk acara adat keluarga. Konsisten enak, porsi pas, selalu tepat waktu. Tidak akan pindah ke catering lain!", rating: 5 },
];

const FAQS = [
  { q: "Apakah bisa pesan untuk acara mendadak?", a: "Bisa, selama slot produksi masih tersedia. Hubungi WhatsApp kami untuk pengecekan cepat. Kami usahakan membantu kebutuhan mendadak Anda semaksimal mungkin." },
  { q: "Berapa minimal pesanan?", a: "Minimal pesanan mulai dari 50 porsi. Untuk acara skala kecil, silakan konsultasikan terlebih dahulu agar kami dapat menyesuaikan kebutuhan Anda." },
  { q: "Apakah hanya melayani masakan Batak?", a: "Tidak. Kami juga melayani masakan nasional seperti rendang, ayam bakar, soto, dan berbagai menu nusantara lainnya sesuai kebutuhan acara." },
  { q: "Area layanan Lumbana Catering di mana saja?", a: "Fokus layanan kami di Jakarta Timur dan sekitarnya. Untuk lokasi di luar area tersebut, silakan konsultasi terlebih dahulu untuk ketersediaan." },
  { q: "Apakah ada survei lokasi sebelum hari H?", a: "Untuk acara besar kami bisa melakukan survei lokasi. Diskusikan detail ini saat konsultasi menu agar semua kebutuhan teknis dapat kami persiapkan." },
];

const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.555 4.1 1.524 5.823L.057 23.743a.5.5 0 00.614.614l5.92-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.963 0-3.802-.533-5.38-1.461l-.386-.228-3.99.987.998-3.884-.249-.4A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

function Stars({ count = 5 }) {
  return <div className="stars" aria-label={`Rating ${count} dari 5`}>{"★".repeat(count)}</div>;
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item${open ? " faq-item--open" : ""}`}>
      <button className="faq-btn" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <span className="faq-icon" aria-hidden="true">{open ? "−" : "+"}</span>
      </button>
      <div className="faq-body"><p>{a}</p></div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    document.title = "Lumbana Catering | Catering Khas Batak Toba Jakarta Timur";

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
      <section id="home" className="hero">
        <div className="hero-pattern" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Vendor Catering Khas Batak Toba · Jakarta Timur</p>
            <h1>Cita Rasa Masakan Batak untuk Momen Paling Berarti</h1>
            <p className="hero-desc">
              Lumbana Catering hadir dengan cita rasa autentik Batak Toba untuk acara adat, pernikahan,
              keluarga, dan lebih dari 500 momen istimewa lainnya.
            </p>
            <div className="cta-group">
              <a className="btn btn-accent" href={WA} target="_blank" rel="noopener noreferrer">
                <WaIcon /> Pesan via WhatsApp
              </a>
              <a className="btn btn-outline-white" href={TEL}>📞 {PHONE}</a>
            </div>
          </div>
          <aside className="hero-card" aria-label="Layanan Lumbana Catering">
            <p className="hero-card-label">Kami Melayani</p>
            <ul className="hero-card-list">
              {["Marhusip","Martonggo Raja","Maria Raja","Pesta Pernikahan","Ulang Tahun & Syukuran","Sidi & Duka Cita","Arisan & Gathering"].map((item) => (
                <li key={item}><span className="hero-card-dot" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-strip" aria-label="Pencapaian Lumbana Catering">
        <div className="container stats-grid">
          {STATS.map((s) => (
            <div key={s.label} className="stat-item">
              <span className="stat-num">{s.num}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="layanan" className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Layanan Kami</span>
            <h2>Siap Melayani Berbagai Acara</h2>
            <p className="section-intro">Dari upacara adat Batak yang sakral hingga pesta keluarga yang meriah — semua kami layani dengan sepenuh hati.</p>
          </div>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <article key={s.title} className="service-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="service-icon" aria-hidden="true">{s.icon}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                <div className="service-tags">{s.tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="section section-warm">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Menu Andalan</span>
            <h2>Cita Rasa Khas yang Tak Terlupakan</h2>
            <p className="section-intro">Masakan kami dibuat dengan resep turun-temurun dan rempah pilihan dari Tanah Batak Toba.</p>
          </div>
          <div className="menu-grid">
            {MENU.map((item, i) => (
              <article key={item.name} className="menu-card reveal" style={{ background: item.bg, transitionDelay: `${i * 0.07}s` }}>
                {item.badge && <span className="menu-badge">{item.badge}</span>}
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>
          <div className="menu-cta reveal">
            <p>Ingin tahu menu lengkap dan harga paket?</p>
            <a className="btn btn-primary" href={WA} target="_blank" rel="noopener noreferrer">Tanya Menu Lengkap</a>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Mengapa Lumbana?</span>
            <h2>Keunggulan yang Membedakan Kami</h2>
          </div>
          <div className="features-grid">
            {FEATURES.map((f, i) => (
              <div key={f.title} className="feature-item reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="feature-icon" aria-hidden="true">{f.icon}</span>
                <div><h3>{f.title}</h3><p>{f.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW TO ORDER */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-head section-head--light reveal">
            <span className="section-tag section-tag--light">Cara Pemesanan</span>
            <h2>Mudah, Cepat, Terpercaya</h2>
            <p className="section-intro section-intro--light">Pesan catering Lumbana cukup dari WhatsApp. Tidak perlu ribet.</p>
          </div>
          <div className="steps-grid">
            {STEPS.map((step, i) => (
              <div key={step.num} className="step-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="step-num">{step.num}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
          <div className="steps-cta reveal">
            <a className="btn btn-accent btn-lg" href={WA} target="_blank" rel="noopener noreferrer">
              <WaIcon /> Mulai Konsultasi Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Testimoni</span>
            <h2>Kepuasan Keluarga adalah Prioritas Kami</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t, i) => (
              <article key={t.name} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <Stars count={t.rating} />
                <blockquote>"{t.text}"</blockquote>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section section-warm">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">FAQ</span>
            <h2>Pertanyaan yang Sering Ditanyakan</h2>
          </div>
          <div className="faq-wrap">
            <div className="faq-list">
              {FAQS.map((item) => <FAQItem key={item.q} q={item.q} a={item.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-pattern" aria-hidden="true" />
        <div className="container cta-banner-inner reveal">
          <h2>Siap Memesan untuk Acara Anda?</h2>
          <p>Hubungi kami sekarang untuk konsultasi menu gratis dan mendapatkan estimasi harga terbaik.</p>
          <div className="cta-group">
            <a className="btn btn-accent btn-lg" href={WA} target="_blank" rel="noopener noreferrer"><WaIcon /> Pesan via WhatsApp</a>
            <a className="btn btn-outline-white btn-lg" href={TEL}>📞 Telepon Kami</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
