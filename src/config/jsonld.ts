import { siteConfig } from "./site";

/** Same @id as the portfolio's Person, so the two pages describe one entity. */
export const PERSON_ID = `${siteConfig.portfolio}/#person`;

const HOME = siteConfig.url;

/**
 * Structured data for the hub: one ProfilePage about the Person, plus the WebSite.
 * Only facts that are written on the page. No email or phone on purpose.
 */
export const profileJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${HOME}#profilepage`,
      url: HOME,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
      isPartOf: { "@id": `${HOME}#website` },
      about: { "@id": PERSON_ID },
      mainEntity: { "@id": PERSON_ID },
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: "Jeremia Axelano",
      jobTitle: "Co-Founder and Chief Technology Officer",
      url: siteConfig.portfolio,
      image: `${HOME}avatar.webp`,
      worksFor: { "@type": "Organization", name: "Guestlist Ticket", legalName: "PT New Directions Success", url: siteConfig.guestlist },
      sameAs: [siteConfig.linkedin, siteConfig.github, siteConfig.portfolio],
    },
    {
      "@type": "WebSite",
      "@id": `${HOME}#website`,
      url: HOME,
      name: "Jeremia Axelano",
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
    },
  ],
};
