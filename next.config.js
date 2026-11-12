const nextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
        ],
      },
      {
        // fonts are versioned by file name (-v1): safe to cache for a year
        source: "/fonts/:file*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        // contact card: iOS opens "Add contact" for text/vcard served inline; other browsers download it. Not for search results.
        source: "/jeremia-axelano.vcf",
        headers: [
          { key: "Content-Type", value: "text/vcard; charset=utf-8" },
          { key: "Content-Disposition", value: 'inline; filename="Jeremia-Axelano.vcf"' },
          { key: "X-Robots-Tag", value: "noindex" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
