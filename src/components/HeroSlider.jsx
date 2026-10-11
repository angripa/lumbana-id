import { useCallback, useEffect, useRef, useState } from "react";
import { SLIDES } from "../data/platform.js";

const INTERVAL = 6000;

const reducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(() => !reducedMotion());
  const [hovered, setHovered] = useState(false);
  // Only request a photo once it is the current or next slide.
  const [loaded, setLoaded] = useState(() => new Set([0, 1]));
  const touchX = useRef(null);

  const go = useCallback((i) => {
    const n = (i + SLIDES.length) % SLIDES.length;
    setIndex(n);
    setLoaded((s) => new Set([...s, n, (n + 1) % SLIDES.length]));
  }, []);

  useEffect(() => {
    if (!playing || hovered) return;
    const t = setTimeout(() => go(index + 1), INTERVAL);
    return () => clearTimeout(t);
  }, [index, playing, hovered, go]);

  const slide = SLIDES[index];

  return (
    <section
      className="slider"
      aria-roledescription="carousel"
      aria-label="Foto Danau Toba dan budaya Batak"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="slider-frame">
        {SLIDES.map((s, i) => (
          <figure
            key={s.file}
            className={`slide${i === index ? " is-active" : ""}`}
            aria-roledescription="slide"
            aria-label={`${i + 1} dari ${SLIDES.length}: ${s.title}`}
            aria-hidden={i !== index}
          >
            {loaded.has(i) && (
              <img
                src={`/images/slider/${s.file}-1280.jpg`}
                srcSet={`/images/slider/${s.file}-720.jpg 720w, /images/slider/${s.file}-1280.jpg 1280w`}
                sizes="(max-width: 1000px) 100vw, 50vw"
                alt={s.alt}
                loading={i === 0 ? "eager" : "lazy"}
                fetchpriority={i === 0 ? "high" : undefined}
                decoding="async"
              />
            )}
          </figure>
        ))}
        <span className="slider-count" aria-hidden="true">
          {String(index + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
        </span>
      </div>

      <div className="slider-bar">
        <div className="slider-caption" aria-live={playing && !hovered ? "off" : "polite"}>
          <p className="slider-title">{slide.title}</p>
          <p className="slider-credit">
            Foto: <a href={slide.source} target="_blank" rel="noopener noreferrer">{slide.credit}</a>,{" "}
            <a href={slide.licenseUrl} target="_blank" rel="noopener noreferrer license">{slide.license}</a>
          </p>
        </div>
        <div className="slider-controls">
          <button type="button" className="slider-btn" onClick={() => go(index - 1)} aria-label="Foto sebelumnya">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button
            type="button"
            className="slider-btn"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Jeda slideshow" : "Putar slideshow"}
          >
            {playing ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" /><rect x="14" y="5" width="4" height="14" /></svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 4l13 8-13 8Z" /></svg>
            )}
          </button>
          <button type="button" className="slider-btn" onClick={() => go(index + 1)} aria-label="Foto berikutnya">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="square" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      <div className="slider-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.file}
            type="button"
            className="slider-dot"
            aria-label={`Lihat foto ${i + 1}: ${s.title}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
          >
            {i === index && playing && !hovered && <span key={index} className="slider-progress" />}
          </button>
        ))}
      </div>
    </section>
  );
}
