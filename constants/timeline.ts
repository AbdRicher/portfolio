import type { TimelineEntry, EducationEntry } from "@/types";

export const timelineData: TimelineEntry[] = [
    {
        id: "integriti-fullstack",
        title: "Full-Stack Software Engineer",
        company: "Integriti",
        location: "Lahore, Pakistan",
        type: "fulltime",
        duration: {
            start: "Aug 2025",
            end: "Present",
        },
        description:
            "Delivering production web applications, custom Shopify apps, and enterprise CRMs end to end. Built and deployed 5 custom Shopify apps, 2 enterprise CRMs, and high-performance REST APIs across Render, Fly.io, Heroku, and self-hosted Linux VMs.",
        highlights: [
            "Built and shipped 5 custom Shopify apps from scratch with Node.js, React (Polaris), and Liquid, owning the full lifecycle from architecture to deployment across Render, Fly.io, Heroku, and self-hosted VMs.",
            "Developed 2 enterprise CRMs using Node.js, TypeScript, and Nest.js to automate complex business workflows; both are in active production use by clients.",
            "Engineered 4 responsive Next.js websites, converting static designs into pixel-perfect, interactive pages with smooth animations.",
            "Designed high-performance REST APIs and backend services with Node.js and Python (FastAPI) to solve heavy business-logic problems."
        ]
    },
    {
        id: "ips-internship",
        title: "Software Engineering Intern",
        company: "IPS Technologies",
        location: "Lahore, Pakistan",
        type: "internship",
        duration: {
            start: "May 2025",
            end: "Aug 2025",
        },
        description:
            "Built reusable UI components and backend RESTful APIs using the MERN stack while working directly alongside senior engineering teams.",
        highlights: [
            "Built reusable UI components and backend APIs using the MERN stack.",
            "Collaborated with senior engineers on clean architecture patterns, state management, and optimized database queries."
        ]
    }
];

export const educationData: EducationEntry[] = [
    {
        id: "umt-bscs",
        degree: "BS in Computer Science",
        institution: "University of Management and Technology",
        location: "Lahore, Pakistan",
        duration: {
            start: "2022",
            end: "2026",
        },
        grade: "CGPA: 3.84",
        fypTitle: "LUMINA – a culturally-aware, multi-agent AI tutoring ecosystem for first-semester university students",
        description:
            "Graduated with high honors (CGPA: 3.84 / 4.00). Specialized in Distributed Systems, Artificial Intelligence, and Modern Software Architecture.",
        highlights: [
            "Graduated with high honors (CGPA: 3.84 / 4.00, FYP grading in progress)",
            "Final Year Project: LUMINA – Culturally-aware multi-agent AI tutoring ecosystem built with LangGraph, pgvector, PyTorch, and Next.js",
            "Core Focus: Distributed Systems, Machine Learning, Deep Learning, and Full-Stack Web Architecture"
        ]
    },
    {
        id: "pgc-fsc",
        degree: "FSc Pre-Engineering",
        institution: "Punjab Group of Colleges (PGC)",
        location: "Gujranwala, Pakistan",
        duration: {
            start: "2020",
            end: "2022",
        },
        grade: "BISE-GRW",
        description:
            "Pre-Engineering curriculum focused on Advanced Mathematics, Physics, and Analytical Chemistry, developing strong analytical thinking.",
        highlights: [
            "Board of Intermediate & Secondary Education, Gujranwala (BISE-GRW)",
            "Strong foundation in Mathematics, Physics, and Algorithmic problem-solving"
        ]
    },
    {
        id: "bise-matric",
        degree: "Matriculation (Science)",
        institution: "BISE-GRW",
        location: "Gujranwala, Pakistan",
        duration: {
            start: "2018",
            end: "2020",
        },
        grade: "BISE-GRW",
        description:
            "Secondary School Certificate with distinction in Science and Computer Studies.",
        highlights: [
            "Board of Intermediate & Secondary Education, Gujranwala",
            "Concentration in Computer Science, Physics, and Mathematics"
        ]
    }
];
