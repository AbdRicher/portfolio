import { Metadata } from 'next';
import SkillsSection from '@/components/home/SkillsSection';
import { canonicalUrl, profile } from '@/constants';

export const metadata: Metadata = {
  title: "Tech Stack & Skills",
  description: `Discover the technical skills and tools mastered by ${profile.name}: TypeScript, Python, FastAPI, Next.js, LangGraph, Shopify Polaris, PostgreSQL, and Docker.`,
  openGraph: {
    title: `Tech Stack | ${profile.name}`,
    description: "Technologies, frameworks, and tools used for building high-performance web systems and AI architectures",
    images: [
      {
        url: "/assets/images/abdullah-portrait.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name}'s Tech Stack`,
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tech Stack | ${profile.name}`,
    description: "Technologies, frameworks, and tools used for building high-performance web systems and AI architectures",
    images: ["/assets/images/abdullah-portrait.jpg"],
  },
  alternates: {
    canonical: `${canonicalUrl}/stack`,
  },
};

const Page = () => {
  return (
    <div className="w-full pt-6">
      <SkillsSection />
    </div>
  );
};

export default Page;