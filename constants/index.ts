import { ThingsIDo } from "@/types";
import { baseUrlTech } from "./techData";

export const profile = {
  name: "Hafiz Abdullah Amjad",
  title: "Full-Stack Software Engineer",
  location: "Lahore, Pakistan",
  phone: "+92 313 6491507",
  education: "BS in Computer Science, University of Management and Technology, Lahore (CGPA: 3.84)",
  summary: `Full Stack Software Engineer with 1+ year of professional experience delivering production web applications, custom Shopify apps, and enterprise CRMs end to end. Proficiency in JavaScript/TypeScript and Python, from Next.js frontends and scalable Node.js / FastAPI backends to self-hosted Linux and Docker deployments. Graduated with a BS in Computer Science (3.84 CGPA) with a final-year project in agentic AI systems.`,
  bio: `Hello world! This is Hafiz Abdullah Amjad, a Full-Stack Software Engineer with 1+ year of hands-on professional experience delivering production web applications, custom Shopify apps, and enterprise CRMs end to end. With a strong academic foundation (BS in Computer Science from University of Management and Technology, Lahore with 3.84 CGPA) and industry experience at Integriti, I specialize in architecting end-to-end solutions — from multi-tenant CRMs and Shopify GraphQL sync engines to intelligent multi-agent LangGraph tutoring systems. I thrive on engineering resilient backend architectures, solving complex business workflows, and deploying scalable modern web applications.`,
  gitHub: "https://github.com/AbdRicher",
  gitHubUserName: "AbdRicher",
  linkedin: "https://www.linkedin.com/in/abdullah-amjad-3209b0285/",
  email: "Abdullah.Work123456@gmail.com",
  xUserName: "AbdullahAmjad",
  languages: [
    { name: "English", level: "Professional Working Proficiency" },
    { name: "Urdu", level: "Native Proficiency" }
  ],
  stats: [
    { value: "3.84", label: "BSCS UMT (CGPA)", desc: "High Honors Academic Record" },
    { value: "1+ Yr", label: "Industry Experience", desc: "Production Web & Enterprise CRMs" },
    { value: "5+", label: "Shopify Custom Apps", desc: "Functions, Proxies & Extensions" },
    { value: "Multi-Agent", label: "AI & RAG Systems", desc: "LangGraph & Vector Pipelines" }
  ]
};

export const hostedUrl = "https://abdullah-amjad.space";
export const canonicalUrl = "https://abdullah-amjad.space";

export const TYPEWRITER_WORDS = [
  { text: ">" },
  { text: "Full-Stack" },
  { text: "Software" },
  { text: "Engineer" },
  { text: "&" },
  { text: "AI" },
  { text: "Architect" }
];

export const socialMediaLinks = [
  {
    title: 'LinkedIn',
    icon: '/assets/social/linkedin.svg',
    href: 'https://www.linkedin.com/in/abdullah-amjad-3209b0285/',
    smLabel: 'LN',
  },
  {
    title: 'GitHub',
    icon: '/assets/social/github.svg',
    href: 'https://github.com/AbdRicher',
    smLabel: 'GH',
  },
  {
    title: 'Email',
    icon: '/assets/social/email.svg',
    href: 'mailto:Abdullah.Work123456@gmail.com',
    smLabel: 'EM',
  }
];

export const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export interface OpenSourceOrg {
  name: string;
  url: string;
  logo: string;
}

export const openSourceOrganizations: OpenSourceOrg[] = [];

export const thingsIDo: ThingsIDo[] = [
  {
    name: "Full-Stack Web & Enterprise CRMs",
    image: "/assets/images/fullstack.svg",
    tech: [
      { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
      { name: "Next.js", url: `${baseUrlTech}/nextjs.svg` },
      { name: "React.js", url: `${baseUrlTech}/react.svg` },
      { name: "Node.js", url: `${baseUrlTech}/nodejs.svg` },
      { name: "NestJS", url: `${baseUrlTech}/nestjs.svg` },
      { name: "Tailwind CSS", url: `${baseUrlTech}/tailwind.svg` },
      { name: "PostgreSQL", url: `${baseUrlTech}/postgresql.svg` }
    ],
    capabilities: [
      { text: 'Architecting multi-tenant CRMs with RBAC, JWT auth, and live WebSocket streams', icon: '💻' },
      { text: 'Building high-throughput backend services and REST/GraphQL APIs with Node.js & NestJS', icon: '⚙️' },
      { text: 'Engineering responsive, pixel-perfect UI with Tailwind CSS, Next.js, and Framer Motion', icon: '🎨' }
    ]
  },
  {
    name: "Agentic AI & Machine Learning",
    image: "/assets/images/statics.svg",
    tech: [
      { name: "Python", url: `${baseUrlTech}/python.svg` },
      { name: "FastAPI", url: `${baseUrlTech}/fastapi.svg` },
      { name: "LangGraph", url: `${baseUrlTech}/google-ai.svg` },
      { name: "PyTorch", url: `${baseUrlTech}/python.svg` },
      { name: "pgvector", url: `${baseUrlTech}/postgresql.svg` }
    ],
    capabilities: [
      { text: 'Building multi-agent coordination architectures with LangGraph and central orchestrators', icon: '🤖' },
      { text: 'Developing personalized RAG pipelines with Google Gemini Embeddings and PostgreSQL pgvector', icon: '🧠' },
      { text: 'Training predictive ML (Random Forest) and deep learning LSTM models for mastery tracking', icon: '⚡' }
    ]
  },
  {
    name: "Shopify Ecosystem & Automation Engines",
    image: "/assets/images/devops.svg",
    tech: [
      { name: "Shopify Functions", url: `${baseUrlTech}/shopify.svg` },
      { name: "Liquid", url: `${baseUrlTech}/shopify.svg` },
      { name: "GraphQL", url: `${baseUrlTech}/graphql.svg` },
      { name: "Shopify Polaris", url: `${baseUrlTech}/shopify.svg` },
      { name: "Render", url: `${baseUrlTech}/render.svg` },
      { name: "Docker", url: `${baseUrlTech}/docker.svg` }
    ],
    capabilities: [
      { text: 'Developing custom Shopify Apps, Polaris merchant dashboards, and Theme App Extensions', icon: '🛍️' },
      { text: 'Engineering high-throughput bulk sync engines processing 10,000+ items via GraphQL', icon: '🔄' },
      { text: 'Building custom checkout discount logic via Shopify Functions and Cart Transform APIs', icon: '🚀' }
    ]
  }
];

export const AUDIO_SRC = "/assets/keyboardpress.mp3";
export const KEY_PRESS_DURATION = 150;
