"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, QrCode, UserPlus } from "lucide-react";

type Props = {
  email: string;
  /** Static vCard in /public (same name, title, organisation, links, email and phone as on the page). */
  vcf: string;
  /** Static QR code SVG in /public (encodes the hub URL). */
  qr: string;
  qrAlt: string;
};

/** Copy the email, save the contact card, show a QR code of this page. Quiet text actions under the two contact buttons. */
export function ContactExtras({ email, vcf, qr, qrAlt }: Props) {
  const [copy, setCopy] = useState<"idle" | "ok" | "fail">("idle");
  const [qrOpen, setQrOpen] = useState(false);
  const timer = useRef(0);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  async function copyEmail() {
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      // no Clipboard API (old Safari, insecure context): select a hidden field and use the legacy command
      try {
        const t = document.createElement("textarea");
        t.value = email;
        t.setAttribute("readonly", "");
        t.style.cssText = "position:fixed;top:0;left:0;opacity:0";
        document.body.appendChild(t);
        t.select();
        t.setSelectionRange(0, email.length);
        ok = document.execCommand("copy");
        document.body.removeChild(t);
      } catch {
        ok = false;
      }
    }
    setCopy(ok ? "ok" : "fail");
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopy("idle"), 2400);
  }

  return (
    <div className="mt-2">
      <div className="-ml-2 flex flex-wrap items-center">
        <button type="button" onClick={copyEmail} className="btn-quiet">
          {copy === "ok" ? <Check className="h-4 w-4 text-mint" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
          <span className="sr-only">Copy email address</span>
          <span aria-hidden="true" className={copy === "ok" ? "text-mint" : undefined}>
            {copy === "ok" ? "Copied" : copy === "fail" ? "Copy failed" : "Copy email"}
          </span>
        </button>
        <a href={vcf} type="text/vcard" aria-label="Save contact (vCard file)" className="btn-quiet">
          <UserPlus className="h-4 w-4" aria-hidden="true" />
          Save contact
        </a>
        <button type="button" onClick={() => setQrOpen((o) => !o)} aria-expanded={qrOpen} aria-controls="qr-panel" className="btn-quiet">
          <QrCode className="h-4 w-4" aria-hidden="true" />
          {qrOpen ? "Hide QR" : "QR code"}
        </button>
      </div>
      {/* one polite announcement per copy, no toast */}
      <p role="status" className="sr-only">
        {copy === "ok" ? "Email address copied" : copy === "fail" ? "Could not copy. Select the address in the email button instead." : ""}
      </p>
      {qrOpen && (
        <div id="qr-panel" className="mt-2 flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-deep/60 p-3">
          {/* only requested when opened */}
          <div className="shrink-0 rounded-xl bg-white p-2.5">
            <img src={qr} width={116} height={116} alt={qrAlt} className="block h-[116px] w-[116px]" decoding="async" />
          </div>
          <p className="text-sm text-mist">Scan with a phone camera to open this page.</p>
        </div>
      )}
    </div>
  );
}
