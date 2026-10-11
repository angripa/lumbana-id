import { WA } from "../data/constants.js";
import { WaIcon } from "./Layout.jsx";

export function SectionHead({ eyebrow, title, intro, action, as: Tag = "h2" }) {
  return (
    <div className="section-head reveal">
      <div>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <Tag className="h-section">{title}</Tag>
      </div>
      {intro && <p className="section-intro">{intro}</p>}
      {action}
    </div>
  );
}

export function PageHero({ eyebrow, title, intro, tone = "red", children }) {
  return (
    <section className={`page-hero page-hero--${tone}`}>
      <div className="container page-hero-inner">
        <div>
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="display">{title}</h1>
        </div>
        {intro && <p className="page-hero-intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function CtaBand({ title, text, href = WA, label = "Chat WhatsApp" }) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner reveal">
        <div>
          <h2 className="display">{title}</h2>
          {text && <p>{text}</p>}
        </div>
        <a className="btn btn-red btn-lg" href={href} target="_blank" rel="noopener noreferrer">
          <WaIcon /> {label}
        </a>
      </div>
    </section>
  );
}
