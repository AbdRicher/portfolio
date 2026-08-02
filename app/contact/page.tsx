import { Metadata } from "next";
import ContactSection from "@/components/home/ContactSection";
import { canonicalUrl, profile } from "@/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${profile.name} - ${profile.title}. Open for full-stack engineering, agentic AI development, and Shopify consulting.`,
  openGraph: {
    title: `Contact | ${profile.name}`,
    description: "Let's connect! Reach out to discuss software engineering, agentic AI, or collaborations.",
    images: [
      {
        url: "/assets/images/abdullah-portrait.jpg",
        width: 1200,
        height: 630,
        alt: `Contact ${profile.name}`,
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact | ${profile.name}`,
    description: "Let's connect! Reach out to discuss web development, collaborations, or inquiries.",
    images: ["/assets/images/abdullah-portrait.jpg"],
  },
  alternates: {
    canonical: `${canonicalUrl}/contact`,
  },
};

const Page = () => {
  return (
    <div className="w-full pt-6">
      <ContactSection />
    </div>
  );
};

export default Page;
