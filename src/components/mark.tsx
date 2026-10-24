/**
 * Brand mark: a terminal prompt (chevron + cursor) on a cyan rounded tile, the same artwork as the portfolio
 * (scripts/brand/mark.mjs in that repo). Solid fills and no ids, so it can appear more than once.
 */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Jeremia Axelano">
      <rect width="64" height="64" rx="15" fill="#2dd4e8" />
      <g fill="none" stroke="#031018" strokeWidth="7.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 20.5L34 32L20 43.5" />
        <path d="M39 46H50" />
      </g>
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
