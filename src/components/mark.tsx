/** Monogram mark. Solid fills, safe to render more than once. */
export function Mark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" role="img" aria-label="Jeremia Axelano monogram">
      <rect x="1" y="1" width="62" height="62" rx="16" fill="#0a1c28" />
      <rect x="1.5" y="1.5" width="61" height="61" rx="15.5" fill="none" stroke="#fff" strokeOpacity=".12" />
      <g fill="none" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23.5 17V37.5Q23.5 47.5 14.5 45.8" stroke="#2dd4e8" />
        <path d="M29 48.5L40.2 17L51.4 48.5M32.9 38H47.5" stroke="#e9c27d" />
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
