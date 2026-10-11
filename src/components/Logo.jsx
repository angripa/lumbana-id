// Bindu matoga: the eight-point gorga star, a Batak symbol of protection.
export function BinduMark({ size = 40, tone = "light" }) {
  const inner = tone === "dark" ? "#fafaf7" : "#111111";
  const core = tone === "dark" ? "#111111" : "#fafaf7";
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true" className="bindu-mark">
      <rect x="21" y="21" width="58" height="58" fill="#d22b1f" />
      <rect x="21" y="21" width="58" height="58" fill="#d22b1f" transform="rotate(45 50 50)" />
      <path d="M50 28L72 50L50 72L28 50Z" fill={inner} />
      <rect x="41" y="41" width="18" height="18" fill={core} />
      <path d="M50 45L55 50L50 55L45 50Z" fill="#d22b1f" />
    </svg>
  );
}

export default function Logo({ tone = "light", size = 40 }) {
  return (
    <span className={`logo logo--${tone}`}>
      <BinduMark size={size} tone={tone} />
      <span className="logo-word">LUMBANA</span>
    </span>
  );
}
