import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import Logo from "./Logo.jsx";
import { WA, TEL, PHONE, ADDRESS } from "../data/constants.js";

export const WaIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.555 4.1 1.524 5.823L.057 23.743a.5.5 0 00.614.614l5.92-1.467A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.963 0-3.802-.533-5.38-1.461l-.386-.228-3.99.987.998-3.884-.249-.4A10 10 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);

export default function Layout({ children }) {
  return (
    <>
      <a className="skip-link" href="#konten-utama">Lewati ke konten utama</a>
      <Header />
      <main id="konten-utama">{children}</main>

      <footer id="kontak" className="site-footer">
        <div className="tri-band" aria-hidden="true" />
        <div className="container footer-inner">
          <div className="footer-brand">
            <Logo tone="dark" size={56} />
            <p>Platform budaya Batak: kuliner, wisata, acara adat, dan produk asli Tano Batak.</p>
          </div>
          <div className="footer-cols">
            <div>
              <h2>Layanan</h2>
              <ul>
                <li><Link to="/kuliner">Kuliner</Link></li>
                <li><Link to="/wisata">Wisata</Link></li>
                <li><Link to="/acara-adat">Acara Adat</Link></li>
                <li><Link to="/pasar">Pasar</Link></li>
                <li><Link to="/artikel">Cerita</Link></li>
              </ul>
            </div>
            <div>
              <h2>Kontak</h2>
              <ul>
                <li><a href={TEL}>{PHONE}</a></li>
                <li><a href={WA} target="_blank" rel="noopener noreferrer">Chat WhatsApp</a></li>
                <li>{ADDRESS}</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Lumbana.id · Mauliate godang!</p>
        </div>
      </footer>

      <a
        className="floating-wa"
        href={WA}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Lumbana"
      >
        <WaIcon />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
