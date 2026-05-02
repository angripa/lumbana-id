export default function Logo() {
  return (
    <span className="logo-wrap" aria-label="Lumbana Catering">
      <svg className="logo-mark" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <defs>
          <linearGradient id="lmk" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#9e2a3f" />
            <stop offset="100%" stopColor="#3e0c18" />
          </linearGradient>
        </defs>

        {/* Outer diamond */}
        <path d="M32 1 L63 32 L32 63 L1 32 Z" fill="url(#lmk)" />

        {/* Gold outer border */}
        <path d="M32 6 L58 32 L32 58 L6 32 Z" fill="none" stroke="#f0c348" strokeWidth="1.4" />

        {/* Inner diamond (recessed depth layer) */}
        <path d="M32 13 L51 32 L32 51 L13 32 Z" fill="#6e1828" />

        {/* Gorga corner accents — small gold diamonds at each tip */}
        <path d="M32 1 L35.5 4.5 L32 8 L28.5 4.5 Z" fill="#f0c348" />
        <path d="M63 32 L59.5 35.5 L56 32 L59.5 28.5 Z" fill="#f0c348" />
        <path d="M32 63 L35.5 59.5 L32 56 L28.5 59.5 Z" fill="#f0c348" />
        <path d="M1 32 L4.5 28.5 L8 32 L4.5 35.5 Z" fill="#f0c348" />

        {/* Central Gorga 4-pointed star */}
        <path d="M32 18 L36 28 L46 32 L36 36 L32 46 L28 36 L18 32 L28 28 Z" fill="#f0c348" />

        {/* Dark center diamond (eye of the star) */}
        <path d="M32 28 L36 32 L32 36 L28 32 Z" fill="#3e0c18" />

        {/* Tiny gold dot at very center */}
        <circle cx="32" cy="32" r="1.8" fill="#f0c348" />
      </svg>

      <span className="logo-text">
        <span className="logo-name">
          LUMBANA<span className="logo-tld">.id</span>
        </span>
        <span className="logo-sub">Catering Khas Batak Toba</span>
      </span>
    </span>
  );
}
