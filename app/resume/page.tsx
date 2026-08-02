import PdfViewer from '@/components/ui/pdfViewer';
import { canonicalUrl, profile } from '@/constants';
import { Metadata } from 'next';
import { memo } from 'react';

export const metadata: Metadata = {
  title: "Resume",
  description: `View the professional resume of ${profile.name} - ${profile.title}, specializing in scalable web systems, Agentic AI, and Shopify apps.`,
  openGraph: {
    title: `Resume | ${profile.name}`,
    description: `Professional resume of ${profile.name} - ${profile.title}`,
    images: [
      {
        url: "/assets/images/abdullah-portrait.jpg",
        width: 1200,
        height: 630,
        alt: `${profile.name}'s Resume`,
        type: "image/jpeg",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Resume | ${profile.name}`,
    description: `Professional resume of ${profile.name} - ${profile.title}`,
    images: ["/assets/images/abdullah-portrait.jpg"],
  },
  alternates: {
    canonical: `${canonicalUrl}/resume`,
  },
};

const Page = () => {
  return (
    <div className="w-full min-h-screen py-12 px-4">
      <PdfViewer />
    </div>
  );
};

export default memo(Page);