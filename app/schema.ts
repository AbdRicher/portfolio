import { hostedUrl, navLinks, profile } from "@/constants";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${hostedUrl}#person`,
  name: profile.name,
  alternateName: "AbdRicher",
  jobTitle: profile.title,
  headline: "Full-Stack Software Engineer & Agentic AI Specialist",
  description: profile.summary,
  image: `${hostedUrl}/assets/images/abdullah-portrait.jpg`,
  url: hostedUrl,
  nationality: "Pakistani",
  sameAs: [
    profile.gitHub,
    profile.linkedin
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "University of Management and Technology"
  }
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${hostedUrl}#website`,
  url: hostedUrl,
  name: `${profile.name} | Portfolio`,
  description: profile.summary,
  author: { "@id": `${hostedUrl}#person` },
  publisher: { "@id": `${hostedUrl}#person` },
  inLanguage: "en-US",
  copyrightYear: 2026,
  datePublished: "2026-01-01",
  dateModified: new Date().toISOString()
};

export const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: navLinks.map((el) => el.label),
  url: navLinks.map((el) => `${hostedUrl}${el.href}`)
};