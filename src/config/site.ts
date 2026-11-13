export const siteConfig = {
  name: "Jeremia Axelano · Co-Founder & CTO, platforms, Web3 and AI agents",
  description:
    "Jeremia Axelano, co-founder and CTO in Bali. A nightlife marketplace on web and mobile, six AI agents in daily use and 44 Web3 sites.",
  /** Canonical address of the hub, with the trailing slash. The apex (axelano.space) serves the same page and points here. */
  url: "https://link.axelano.space/",
  portfolio: "https://portfolio.axelano.space",
  guestlist: "https://guestlistticket.com",
  linkedin: "https://www.linkedin.com/in/jeremia-axelano/",
  github: "https://github.com/AxelanO7/",
  ogImage: "https://link.axelano.space/og-image.png?v=3",
  email: "jeremia123.jm@gmail.com",
  whatsapp: "https://wa.me/6282246034453",
  whatsappLabel: "+62 822 4603 4453",
  vcard: "/jeremia-axelano.vcf",
  keywords: ["Jeremia Axelano", "Co-Founder", "CTO", "Full-stack engineer", "AI agents", "Web3", "Guestlist Ticket"],
} as const;

/**
 * Numbers use a "+" floor, checked against production on 2026-11-12: 117,706 site visits (41,833 unique), 112 partner businesses,
 * 1,133 booking records in Oct 2026 (November runs at about 700 a month, so the label says "in a month", never "every month").
 * Visitors are site visits, never "unique visitors".
 */
export const stats = {
  tools: 98,
  agents: 6,
  web3: 44,
  visitors: "110,000+",
  bookings: "1,000+",
  partners: "110+",
} as const;
