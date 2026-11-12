import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

const OG_ALT = "Jeremia Axelano, Co-Founder and CTO. Platforms, Web3 and AI agents, built end to end.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: Array.from(siteConfig.keywords),
  authors: [{ name: "Jeremia Axelano", url: siteConfig.portfolio }],
  // the apex (axelano.space) serves the same page: the canonical stays on link.
  alternates: { canonical: siteConfig.url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: "Jeremia Axelano",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, type: "image/png", alt: OG_ALT }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, alt: OG_ALT }],
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#050f16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

/** Fonts used above the fold, fetched in parallel with the CSS instead of after it. */
const PRELOAD_FONTS = ["outfit-800-v1", "inter-400-v1", "outfit-600-v1", "inter-600-v1", "jetbrains-mono-400-v1"];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {PRELOAD_FONTS.map((f) => (
          <link key={f} rel="preload" href={`/fonts/${f}.woff2`} as="font" type="font/woff2" crossOrigin="anonymous" />
        ))}
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
