import { useCallback, useEffect, useId, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";
import { WA } from "../data/constants.js";

const LINKS = [
  { to: "/kuliner", label: "Kuliner" },
  { to: "/wisata", label: "Wisata" },
  { to: "/acara-adat", label: "Acara Adat" },
  { to: "/pasar", label: "Pasar" },
  { to: "/artikel", label: "Cerita" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const close = useCallback(() => setOpen(false), []);

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
        <Link to="/" className="brand" onClick={close} aria-label="Lumbana beranda">
          <Logo />
        </Link>

        <nav id={panelId} className={`nav-panel${open ? " nav-panel--open" : ""}`} aria-label="Navigasi utama">
          <ul className="menu">
            {LINKS.map((l) => (
              <li key={l.to}>
                <NavLink to={l.to} onClick={close}>{l.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-actions">
          <a href={WA} target="_blank" rel="noopener noreferrer" className="btn btn-ink nav-wa">
            Chat WhatsApp
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
