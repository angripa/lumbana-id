const DIAMONDS = [0, 18, 36, 54, 72];

export default function Logo() {
  return (
    <span className="logo-wrap" aria-label="Lumbana Catering">
      <span className="logo-name">
        LUMBANA<span className="logo-tld">.id</span>
      </span>
      <svg
        className="logo-gorga"
        viewBox="0 0 88 8"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        {DIAMONDS.map((x) => (
          <path
            key={x}
            d={`M${x + 9},0 L${x + 18},4 L${x + 9},8 L${x},4 Z`}
            fill="#f0c348"
            opacity="0.55"
          />
        ))}
      </svg>
      <span className="logo-sub">Catering Khas Batak Toba</span>
    </span>
  );
}
