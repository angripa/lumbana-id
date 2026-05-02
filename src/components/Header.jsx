import { useCallback, useEffect, useId, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HASH_LINKS = [
  { href: "#layanan", label: "Layanan" },
  { href: "#menu", label: "Menu" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontak", label: "Kontak" },
];

export default function Header({ waHref, tel, phone }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const close = useCallback(() => setOpen(false), []);

  const hashHref = (hash) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") close(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, close]);

  return (
    <header className="site-header">
      <div className="container nav">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-name">Lumbana</span>
          <span className="brand-subtitle">Catering Khas Batak Toba</span>
        </Link>

        <nav id={panelId} className={`nav-panel${open ? " nav-panel--open" : ""}`} aria-label="Navigasi utama">
          <ul className="menu">
            {HASH_LINKS.map((l) => (
              <li key={l.href}>
                <a href={hashHref(l.href)} onClick={close}>{l.label}</a>
              </li>
            ))}
            <li>
              <Link to="/artikel" onClick={close}>Artikel</Link>
            </li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={tel} className="nav-phone">📞 {phone}</a>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="nav-wa-btn">
            💬 Pesan Sekarang
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Tutup menu" : "Buka menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="nav-toggle-bar" aria-hidden="true" />
            <span className="nav-toggle-bar" aria-hidden="true" />
            <span className="nav-toggle-bar" aria-hidden="true" />
          </button>
        </div>

        {open && (
          <button type="button" className="nav-backdrop" aria-label="Tutup menu" onClick={close} />
        )}
      </div>
    </header>
  );
}
