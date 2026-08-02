import { Metadata } from 'next';
import ProjectsSection from '@/components/home/ProjectsSection';
import { canonicalUrl, profile } from '@/constants';
import { projectsPageSchema } from './schema';
import SchemaScripts from '@/components/SchemaScripts';

export const metadata: Metadata = {
  title: "Projects",
  description: `Explore production projects engineered by ${profile.name}: Agentic AI Tutor (Lumina), Shopify Bulk Sync Engines, Multi-Tenant CRMs, and Custom Apps.`,
  openGraph: {
    title: `Projects | ${profile.name}`,
    description: "Portfolio of production web systems, Agentic AI, and Shopify apps",
    images: [
      {
        url: "/assets/images/abdullah-portrait.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name}'s Featured Projects`,
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Projects | ${profile.name}`,
    description: "Portfolio of production web systems, Agentic AI, and Shopify apps",
    images: ["/assets/images/abdullah-portrait.jpg"],
  },
  alternates: {
    canonical: `${canonicalUrl}/projects`,
  },
};

const Page = () => {
  return (
    <>
      <SchemaScripts schemas={[projectsPageSchema]} />
      <div className="w-full pt-6">
        <ProjectsSection />
      </div>
    </>
  );
};

export default Page;