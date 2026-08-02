import { type Metadata } from "next";
import { canonicalUrl, hostedUrl, profile } from "@/constants";

export const metadata: Metadata = {
    title: {
        default: `${profile.name} - Full-Stack Software Engineer`,
        template: `%s | ${profile.name} - Full-Stack Software Engineer`,
    },
    description: profile.summary,
    keywords: [
        "Hafiz Abdullah Amjad",
        "Abdullah Amjad",
        "AbdRicher",
        "Full-Stack Software Engineer",
        "Agentic AI Engineer",
        "LangGraph Developer",
        "Shopify App Developer",
        "Shopify Functions",
        "Next.js Developer",
        "NestJS Developer",
        "FastAPI Developer",
        "University of Management and Technology",
        "UMT BSCS",
        "Pakistan Software Engineer"
    ],
    authors: [
        {
            name: profile.name,
            url: profile.gitHub,
        }
    ],
    creator: `${profile.name} (${profile.gitHubUserName})`,
    publisher: profile.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    applicationName: `${profile.name} Portfolio`,
    generator: "Next.js",
    referrer: "origin-when-cross-origin",
    openGraph: {
        type: "website",
        locale: "en_US",
        url: hostedUrl,
        siteName: `${profile.name} Portfolio`,
        title: `${profile.name} | ${profile.title}`,
        description: profile.summary,
        images: [
            {
                url: "/assets/images/abdullah-portrait.jpg",
                width: 1200,
                height: 630,
                alt: `${profile.name} - Full-Stack Software Engineer`,
                type: "image/jpeg",
            }
        ],
        countryName: "Pakistan",
    },
    appleWebApp: {
        capable: true,
        title: `${profile.name} Portfolio`,
        statusBarStyle: "black-translucent",
    },
    twitter: {
        card: "summary_large_image",
        title: `${profile.name} | ${profile.title}`,
        description: profile.summary,
        images: ["/assets/images/abdullah-portrait.jpg"],
        creator: `@${profile.xUserName}`,
        site: `@${profile.xUserName}`,
    },
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
icons: {
        icon: "/assets/images/abdullah-portrait.jpg",
        apple: "/assets/images/abdullah-portrait.jpg",
        shortcut: ["/assets/images/abdullah-portrait.jpg"]
    },
    manifest: "/manifest.json",
    alternates: {
        canonical: canonicalUrl,
        languages: {
            "en-US": canonicalUrl,
        },
    },
    category: "technology",
    classification: "Portfolio Website",
    metadataBase: new URL(hostedUrl),
    assets: '/assets',
    other: {
        "theme-color": "#050814",
    },
};

export default metadata;