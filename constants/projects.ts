import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "lumina-ai-tutor",
    title: "Lumina (Agentic AI Tutor)",
    date: "Oct 2025 – Jun 2026",
    associatedWith: "University of Management and Technology",
    description: "Culturally-aware, multi-agent AI tutoring ecosystem providing pace-adaptive academic and reasoning support.",
    detailedDescription: "Pakistani freshmen face English-medium lectures and rigid teaching methods. Lumina delivers a multi-agent AI architecture managed by a central coordinator using Next.js, Express.js, and FastAPI. It integrates predictive ML, deep learning skill mastery tracking, and LangGraph reasoning routing.",
    problem: "Pakistani freshmen face English-medium lectures and rigid teaching methods. Existing AI chatbots fail to offer culturally-aware, pace-adaptive support, leading to low confidence.",
    solutions: [
      "Built a multi-agent AI architecture managed by a central coordinator using Next.js, Express.js, and FastAPI.",
      "Trained a Random Forest model on student onboarding data to identify at-risk students automatically.",
      "Tracked student skill mastery using Bayesian Knowledge Tracing (BKT) and an LSTM Deep Learning model.",
      "Used Bloom's Taxonomy to guide students step-by-step from simple concepts to complex problem-solving.",
      "Built a RAG pipeline using Google Gemini Embeddings and PostgreSQL (pgvector) for personalized memory.",
      "Used LangGraph to route queries between quick chat models and deep reasoning models.",
      "Deployed the frontend on Vercel and the backend on a DigitalOcean VM."
    ],
    techStack: ["Python", "FastAPI", "Next.js", "Express.js", "LangGraph", "PostgreSQL", "PyTorch", "Vercel", "DigitalOcean"],
    technologies: [0, 1, 11, 12, 17, 19, 26, 44],
    githubLink: "https://github.com/AbdRicher",
    thumbnail: "/assets/images/projects/ai.jpg",
    achievements: [
      "Multi-agent orchestration with central coordinator and LangGraph routing",
      "Real-time BKT & LSTM skill mastery tracking with Bloom's Taxonomy scaffolding",
      "Personalized memory RAG pipeline powered by pgvector embeddings"
    ],
    iconType: "ai",
    showGitStats: false
  },
  {
    id: "jewelry-dealer-sync-engine",
    title: "Jewelry Dealer Automation & Bulk Shopify Sync Engine",
    date: "Dec 2025 – Mar 2026",
    associatedWith: "Integriti Global",
    description: "High-throughput automation engine syncing 10,000+ products across dealer APIs, FTP servers, and Shopify GraphQL.",
    detailedDescription: "Engineered automated background cron pipelines to ingest and transform irregular supplier product catalogs into normalized Shopify schemas, processing bulk updates seamlessly without rate-limit bottlenecks.",
    problem: "Manual product creation across dealer APIs and FTP servers was too slow, leading to errors across 10,000+ items.",
    solutions: [
      "Created background cron jobs on Render to fetch product updates automatically from dealer APIs and FTP servers.",
      "Wrote custom data transformations to convert raw supplier data into clean Shopify schemas.",
      "Used Shopify GraphQL Admin API to bulk update 10,000+ products without hitting API rate limits.",
      "Built a React admin dashboard for staff to control sync schedules and inspect system logs.",
      "Split backend workloads into 4 microservices on Render to process heavy workloads smoothly."
    ],
    techStack: ["Node.js", "React.js", "GraphQL", "Render", "Shopify API"],
    technologies: [18, 3, 20, 44],
    githubLink: "https://github.com/AbdRicher",
    thumbnail: "/assets/images/projects/crm.jpg",
    achievements: [
      "Zero-downtime bulk sync of 10,000+ catalog items via GraphQL mutations",
      "4-microservice decoupled architecture on Render with automated cron jobs",
      "Intuitive operational dashboard with live ingestion telemetry"
    ],
    iconType: "sync",
    showGitStats: false
  },
  {
    id: "bookify-shopify-app",
    title: "Bookify – Shopify Appointment & Booking Application",
    date: "Integriti Global",
    associatedWith: "Integriti Global",
    description: "Full-featured Shopify merchant app enabling time-based service bookings, dynamic calendar slots, and checkout integration.",
    detailedDescription: "Provides Shopify store owners with custom staff scheduling, real-time booking slot computation with buffer times, storefront Theme App Extensions, and Cart Transform API integration.",
    problem: "Shopify merchants could not easily sell or manage time-based services (like consultations or fittings) inside Shopify Admin.",
    solutions: [
      "Created a React and Shopify Polaris admin dashboard to set office hours, manage staff, and track bookings.",
      "Wrote Node.js backend logic to generate real-time booking slots with dynamic time gaps.",
      "Built Theme App Extensions so merchants can add booking widgets directly to product pages.",
      "Used Shopify App Proxies and Cart Transform APIs to attach selected booking slots to customer carts.",
      "Managed all booking schedules, customer profiles, and time slots with PostgreSQL and Sequelize ORM."
    ],
    techStack: ["Node.js", "Express.js", "React.js", "PostgreSQL", "Sequelize ORM", "Shopify Polaris"],
    technologies: [18, 19, 3, 14, 20],
    githubLink: "https://github.com/AbdRicher",
    thumbnail: "/assets/images/projects/shopify.jpg",
    achievements: [
      "Seamless Polaris UI embedded directly inside Shopify merchant admin",
      "Theme App Extension allowing 1-click booking widget installation on product templates",
      "Dynamic slot generation with conflict prevention and cart line-item synchronization"
    ],
    iconType: "booking",
    showGitStats: false
  },
  {
    id: "client-portal-crm",
    title: "Client Portal & Ticket Management CRM",
    date: "Integriti Global",
    associatedWith: "Integriti Global",
    description: "Multi-tenant client ticketing and deliverable approval portal with SLA routing and real-time WebSockets.",
    detailedDescription: "Scalable enterprise CRM enabling enterprise clients to submit requests, monitor phase progress, review deliverables, and communicate in real time with automated SLA prioritization.",
    problem: "External business clients lacked a direct portal to submit requests, track projects, or sign off on deliverables.",
    solutions: [
      "Architected a multi-tenant client portal with JWT authentication for full data privacy.",
      "Built SLA-based routing in NestJS to categorize and assign support tickets based on client tiers.",
      "Added WebSocket event listeners to deliver live status updates and real-time chat on support tickets.",
      "Designed deliverable approval workflows so clients can review and sign off on project phases.",
      "Indexed PostgreSQL tables and optimized SQL queries to handle heavy backend loads."
    ],
    techStack: ["NestJS", "Next.js", "PostgreSQL", "WebSockets", "JWT"],
    technologies: [2, 1, 14, 15, 34],
    githubLink: "https://github.com/AbdRicher",
    thumbnail: "/assets/images/projects/crm2.jpg",
    achievements: [
      "End-to-end multi-tenant isolation with JWT-secured endpoints",
      "Sub-second live ticket status broadcast via NestJS WebSockets",
      "Automated SLA tier enforcement and deliverable digital sign-off pipeline"
    ],
    iconType: "portal",
    showGitStats: false
  },
  {
    id: "internal-operations-crm",
    title: "Internal Operations & Lead Workflow CRM",
    date: "Integriti Global",
    associatedWith: "Integriti Global",
    description: "Enterprise sales pipeline and automated lead assignment platform with RBAC security and stage-gated validation.",
    detailedDescription: "Internal operations CRM that unifies fragmented sales tools into an automated lead lifecycle management system with intelligent rep assignment, automated stagnation alerts, and executive analytics.",
    problem: "Sales teams were tracking leads across separate tools, causing delayed follow-ups and unassigned priority leads.",
    solutions: [
      "Built Role-Based Access Control (RBAC) in NestJS so staff members only view data for their specific role.",
      "Created an automated lead routing system that assigns incoming leads based on sales rep availability and deal size.",
      "Implemented stage-gating validation to stop sales reps from skipping mandatory steps.",
      "Set up Node.js background cron jobs to send alerts when leads stay uncontacted too long.",
      "Built a Next.js analytics dashboard with optimized SQL queries to track live sales pipelines."
    ],
    techStack: ["TypeScript", "Node.js", "NestJS", "Next.js", "PostgreSQL"],
    technologies: [0, 18, 2, 1, 14],
    githubLink: "https://github.com/AbdRicher",
    thumbnail: "/assets/images/projects/crm.jpg",
    achievements: [
      "Granular RBAC permission hierarchy guarding sensitive enterprise client leads",
      "Dynamic lead scoring and rep capacity-balanced automated assignment",
      "Real-time pipeline progression monitoring and SLA stagnation alerts"
    ],
    iconType: "crm",
    showGitStats: false
  },
  {
    id: "lammles-enterprise-app",
    title: "Lammles Enterprise Custom App",
    date: "Integriti Global",
    associatedWith: "Integriti Global",
    description: "Custom enterprise Shopify app featuring real-time multi-store pickup availability and dynamic checkout discount functions.",
    detailedDescription: "Engineered an enterprise Shopify extension enabling real-time store inventory checks and tag-based discount price logic via Shopify Functions (WebAssembly) running at checkout speed.",
    problem: "Customers needed real-time store pickup information, and the client needed custom dynamic checkout discounts.",
    solutions: [
      "Built a Theme App Extension and used Shopify GraphQL API to fetch real-time store pickup availability.",
      "Created storefront display logic to present tag-based discount prices directly on product pages.",
      "Engineered custom checkout discount logic using Shopify Functions.",
      "Deployed and configured the full enterprise app smoothly on Render."
    ],
    techStack: ["Liquid", "Node.js", "Shopify Functions", "GraphQL", "Render"],
    technologies: [49, 18, 44],
    githubLink: "https://github.com/AbdRicher",
    thumbnail: "/assets/images/projects/shopify.jpg",
    achievements: [
      "Sub-millisecond dynamic discount computation powered by Shopify Functions",
      "Real-time multi-location pickup availability locator on product pages",
      "Zero-downtime microservice deployment on Render"
    ],
    iconType: "shopify",
    showGitStats: false
  },
  {
    id: "integriti-official-website",
    title: "Integriti.io Official Company Website",
    date: "Integriti Global",
    associatedWith: "Integriti Global",
    description: "High-performance enterprise agency website with ultra-fast page speed, fluid interactions, and conversion-focused SEO.",
    detailedDescription: "Designed and engineered the official website for Integriti Global, translating business branding into high-performance, accessible, and responsive digital experiences.",
    problem: "Needed a modern, fast company website to showcase services clearly to enterprise clients.",
    solutions: [
      "Built clean, fast web pages across both frontend and backend systems.",
      "Optimized mobile responsiveness and overall page load speed.",
      "Fixed technical bugs and improved client acquisition presentation."
    ],
    techStack: ["JavaScript", "Full-Stack Development", "Responsive Design", "SEO"],
    technologies: [0, 1, 20, 68],
    githubLink: "https://github.com/AbdRicher",
    demoLink: "https://www.integriti.io/",
    thumbnail: "/assets/images/projects/frontend.jpg",
    achievements: [
      "95+ Google Lighthouse scores across Performance, Accessibility, and SEO",
      "Fluid responsive layout tested across hundreds of screen resolutions",
      "Modern cyber-tech visual aesthetic driving increased enterprise client inquiries"
    ],
    iconType: "web",
    showGitStats: false
  }
];
