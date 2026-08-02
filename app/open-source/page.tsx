import { Metadata } from "next";
import OpenSource from "../../components/OpenSource";
import { canonicalUrl, profile } from "@/constants";
import { openSourcePageSchema, contributionsSchema } from './schema';
import SchemaScripts from "@/components/SchemaScripts";

export const metadata: Metadata = {
    title: "Open Source",
    description: `Check out open source contributions by ${profile.name}.`,
    openGraph: {
        title: `Open Source Contributions | ${profile.name}`,
        description: "Open source journey and contributions to the developer community",
        images: [
            {
                url: "/assets/images/abdullah-portrait.jpg",
                width: 1200,
                height: 630,
                alt: "Open Source Contributions",
                type: "image/jpeg",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `Open Source Contributions | ${profile.name}`,
        description: "Open source journey and contributions to the developer community",
        images: ["/assets/images/abdullah-portrait.jpg"],
    },
    alternates: {
        canonical: `${canonicalUrl}/open-source`,
    },
};

const OpenSourcePage = () => {
    return (
        <>
            <SchemaScripts schemas={[openSourcePageSchema, contributionsSchema]} />
            <OpenSource />
        </>
    );
};

export default OpenSourcePage;