import { Metadata } from 'next';
import ExperienceSection from '@/components/home/ExperienceSection';
import { canonicalUrl, profile } from '@/constants';

export const metadata: Metadata = {
    title: "Experience",
    description: `Professional career journey of ${profile.name} - Full-Stack Software Engineer at Integriti Global, BSCS from UMT (CGPA: 3.85).`,
    openGraph: {
        title: `Experience | ${profile.name}`,
        description: `Professional journey of ${profile.name} - ${profile.title}`,
        images: [
            {
                url: "/assets/images/abdullah-portrait.jpg",
                width: 1200,
                height: 630,
                alt: "Professional Experience Timeline",
                type: "image/jpeg",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Experience | ${profile.name}`,
        description: `Professional journey of ${profile.name} - ${profile.title}`,
        images: ["/assets/images/abdullah-portrait.jpg"],
    },
    alternates: {
        canonical: `${canonicalUrl}/experience`,
    },
};

const ExperiencePage = () => {
    return (
        <div className="w-full pt-6">
            <ExperienceSection />
        </div>
    );
};

export default ExperiencePage;