/**
 * Monogram mark: a heavy JA on a cyan plate with two cut corners, and a coral "live" dot in the top-right cut.
 * Solid fills and no ids, safe to render more than once. Same artwork as the portfolio site (scripts/brand/mark.mjs in that repo).
 */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Jeremia Axelano monogram">
      <polygon points="3.2,3.2 46.67,3.2 60.8,17.33 60.8,60.8 17.33,60.8 3.2,46.67" fill="#2dd4e8" stroke="#2dd4e8" strokeWidth="6.4" strokeLinejoin="round" />
      <g transform="translate(32 32.8) scale(0.8) translate(-27.1 -32.55)" fill="none" stroke="#031018" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15.5 10.5V39.6C15.5 48.6 12 52.2 6.2 52" />
        <path d="M22 54.6L35 10.5L48 54.6" />
        <path d="M30.83 40.5H39.17" strokeWidth="6.8" />
      </g>
      <circle cx="60.2" cy="3.8" r="3.1" fill="#ff7b5c" />
    </svg>
  );
}

/** Brand mark from the shared sprite (Simple Icons, CC0). */
export function Brand({ id, className = "h-6 w-6" }: { id: "github" | "linkedin" | "whatsapp" | "gmail"; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <use href={`/logos/sprite.svg#${id}`} />
    </svg>
  );
}
