import { Tech, TechCategory } from "@/types";

const badgeBase = "https://img.shields.io/badge";
export const baseUrlTech = "/assets/tech";

export const skills: Tech[] = [
    { name: "TypeScript", url: `${badgeBase}/TypeScript-%23007ACC.svg?style=flat&logo=typescript&logoColor=white` },
    { name: "JavaScript", url: `${badgeBase}/JavaScript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E` },
    { name: "Python", url: `${badgeBase}/Python-3776AB?style=flat&logo=python&logoColor=white` },
    { name: "SQL", url: `${badgeBase}/SQL-025E8C?style=flat&logo=postgresql&logoColor=white` },
    { name: "Liquid", url: `${badgeBase}/Liquid-7AB55C?style=flat&logo=shopify&logoColor=white` },
    { name: "React.js", url: `${badgeBase}/React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB` },
    { name: "Next.js", url: `${badgeBase}/Next.js-black?style=flat&logo=next.js&logoColor=white` },
    { name: "Tailwind CSS", url: `${badgeBase}/Tailwind%20CSS-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white` },
    { name: "Shopify Polaris", url: `${badgeBase}/Shopify%20Polaris-008060?style=flat&logo=shopify&logoColor=white` },
    { name: "Node.js", url: `${badgeBase}/Node.js-6DA55F?style=flat&logo=node.js&logoColor=white` },
    { name: "Express.js", url: `${badgeBase}/Express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB` },
    { name: "NestJS", url: `${badgeBase}/NestJS-%23E0234E.svg?style=flat&logo=nestjs&logoColor=%2361DAFB` },
    { name: "FastAPI", url: `${badgeBase}/FastAPI-009688?style=flat&logo=fastapi&logoColor=white` },
    { name: "GraphQL", url: `${badgeBase}/GraphQL-E10098?style=flat&logo=graphql&logoColor=white` },
    { name: "PostgreSQL", url: `${badgeBase}/PostgreSQL-%23316192.svg?style=flat&logo=postgresql&logoColor=white` },
    { name: "MongoDB", url: `${badgeBase}/MongoDB-%234ea94b.svg?style=flat&logo=mongodb&logoColor=white` },
    { name: "pgvector", url: `${badgeBase}/pgvector-336791?style=flat&logo=postgresql&logoColor=white` },
    { name: "Sequelize ORM", url: `${badgeBase}/Sequelize-52B0E7?style=flat&logo=sequelize&logoColor=white` },
    { name: "Agentic AI Development", url: `${badgeBase}/Agentic%20AI-00f2fe?style=flat&logo=openai&logoColor=black` },
    { name: "LangGraph", url: `${badgeBase}/LangGraph-2D3748?style=flat&logo=chainlink&logoColor=white` },
    { name: "RAG Architecture", url: `${badgeBase}/RAG%20Architecture-4285F4?style=flat&logo=google&logoColor=white` },
    { name: "PyTorch", url: `${badgeBase}/PyTorch-EE4C2C?style=flat&logo=pytorch&logoColor=white` },
    { name: "Shopify Functions", url: `${badgeBase}/Shopify%20Functions-95BF47?style=flat&logo=shopify&logoColor=black` },
    { name: "Docker", url: `${badgeBase}/Docker-2496ED?style=flat&logo=docker&logoColor=white` },
    { name: "Render", url: `${badgeBase}/Render-46E3B7?style=flat&logo=render&logoColor=black` },
    { name: "Vercel", url: `${badgeBase}/Vercel-000000?style=flat&logo=vercel&logoColor=white` },
    { name: "DigitalOcean", url: `${badgeBase}/DigitalOcean-0080FF?style=flat&logo=digitalocean&logoColor=white` },
    { name: "Git", url: `${badgeBase}/Git-F05032?style=flat&logo=git&logoColor=white` }
];

export const userSkills = {
  languages: ["TypeScript", "JavaScript", "Python", "SQL", "Liquid"],
  frontend: ["React.js", "Next.js", "Tailwind CSS", "Shopify Polaris", "Responsive Web Design"],
  backend: ["Node.js", "Express.js", "NestJS", "FastAPI", "REST APIs", "GraphQL"],
  databases: ["PostgreSQL", "MongoDB", "pgvector", "Sequelize ORM"],
  aiAndMl: [
    "Agentic AI Development",
    "LangGraph",
    "RAG Architecture",
    "Machine Learning",
    "Deep Learning",
    "PyTorch",
    "Random Forest"
  ],
  shopifyDev: [
    "Shopify App Development",
    "Shopify Functions",
    "Liquid Theme Engineering",
    "Theme App Extensions",
    "Shopify App Proxies",
    "GraphQL Admin & Storefront APIs"
  ],
  devopsAndTools: ["Docker", "Nginx", "PM2", "Linux", "Render", "Vercel", "DigitalOcean", "Git"]
};

export const professionalSkills = [
  "System Architecture",
  "Agentic Workflows",
  "Problem Solving",
  "Rapid Prototyping",
  "Collaboration",
  "Clean Code",
  "Agile & Scrum",
  "Continuous Learning"
];

export const techCategories: TechCategory[] = [
    {
        id: 'languages',
        name: 'Languages & Core',
        description: 'Core programming and scripting languages for scalable engineering',
        icon: '💻',
        color: 'from-cyan-500 to-blue-500',
        technologies: [
            { name: "TypeScript", url: `${baseUrlTech}/typescript.svg` },
            { name: "JavaScript", url: `${baseUrlTech}/javascript.svg` },
            { name: "Python", url: `${baseUrlTech}/python.svg` },
            { name: "SQL", url: `${baseUrlTech}/postgresql.svg` },
            { name: "Liquid", url: `${baseUrlTech}/shopify.svg` }
        ]
    },
    {
        id: 'ai-ml',
        name: 'AI, ML & Agentic Systems',
        description: 'Multi-agent orchestration, RAG architectures, and predictive modeling',
        icon: '🧠',
        color: 'from-teal-400 to-cyan-500',
        technologies: [
            { name: "Agentic AI Development", url: `${baseUrlTech}/openai.svg` },
            { name: "LangGraph", url: `${baseUrlTech}/google-ai.svg` },
            { name: "RAG Architecture", url: `${baseUrlTech}/openai.svg` },
            { name: "Machine Learning", url: `${baseUrlTech}/python.svg` },
            { name: "Deep Learning", url: `${baseUrlTech}/tensorflow.svg` },
            { name: "PyTorch", url: `${baseUrlTech}/python.svg` },
            { name: "Random Forest", url: `${baseUrlTech}/python.svg` }
        ]
    },
    {
        id: 'shopify-dev',
        name: 'Shopify App & Theme Engineering',
        description: 'Full-lifecycle Shopify apps, custom Functions, and storefront integrations',
        icon: '🛍️',
        color: 'from-emerald-400 to-teal-500',
        technologies: [
            { name: "Shopify App Development", url: `${baseUrlTech}/shopify.svg` },
            { name: "Shopify Functions", url: `${baseUrlTech}/shopify.svg` },
            { name: "Liquid Theme Engineering", url: `${baseUrlTech}/shopify.svg` },
            { name: "Theme App Extensions", url: `${baseUrlTech}/shopify.svg` },
            { name: "Shopify App Proxies", url: `${baseUrlTech}/shopify.svg` },
            { name: "GraphQL Admin & Storefront APIs", url: `${baseUrlTech}/graphql.svg` }
        ]
    },
    {
        id: 'backend',
        name: 'Backend & Distributed APIs',
        description: 'High-throughput microservices, REST APIs, and GraphQL endpoints',
        icon: '⚙️',
        color: 'from-blue-500 to-indigo-500',
        technologies: [
            { name: "Node.js", url: `${baseUrlTech}/nodejs.svg` },
            { name: "Express.js", url: `${baseUrlTech}/express.svg` },
            { name: "NestJS", url: `${baseUrlTech}/nestjs.svg` },
            { name: "FastAPI", url: `${baseUrlTech}/fastapi.svg` },
            { name: "REST APIs", url: `${baseUrlTech}/axios.svg` },
            { name: "GraphQL", url: `${baseUrlTech}/graphql.svg` }
        ]
    },
    {
        id: 'frontend',
        name: 'Frontend & UI Frameworks',
        description: 'Modern, reactive, and pixel-perfect user interface design',
        icon: '🎨',
        color: 'from-sky-400 to-cyan-500',
        technologies: [
            { name: "React.js", url: `${baseUrlTech}/react.svg` },
            { name: "Next.js", url: `${baseUrlTech}/nextjs.svg` },
            { name: "Tailwind CSS", url: `${baseUrlTech}/tailwind.svg` },
            { name: "Shopify Polaris", url: `${baseUrlTech}/shopify.svg` },
            { name: "Responsive Web Design", url: `${baseUrlTech}/figma-icon.svg` }
        ]
    },
    {
        id: 'database',
        name: 'Databases & Vector Storage',
        description: 'Relational data modeling, vector embeddings, and ORM caching',
        icon: '🗄️',
        color: 'from-cyan-600 to-blue-600',
        technologies: [
            { name: "PostgreSQL", url: `${baseUrlTech}/postgresql.svg` },
            { name: "MongoDB", url: `${baseUrlTech}/mongodb.svg` },
            { name: "pgvector", url: `${baseUrlTech}/postgresql.svg` },
            { name: "Sequelize ORM", url: `${baseUrlTech}/postgresql.svg` }
        ]
    },
    {
        id: 'devops',
        name: 'DevOps, Cloud & Infrastructure',
        description: 'Containerization, cloud VM management, and automated deployments',
        icon: '🚀',
        color: 'from-indigo-500 to-cyan-500',
        technologies: [
            { name: "Docker", url: `${baseUrlTech}/docker.svg` },
            { name: "Nginx", url: `${baseUrlTech}/nginx.svg` },
            { name: "PM2", url: `${baseUrlTech}/pm2.png` },
            { name: "Linux", url: `${baseUrlTech}/linux.svg` },
            { name: "Render", url: `${baseUrlTech}/render.svg` },
            { name: "Vercel", url: `${baseUrlTech}/vercel.svg` },
            { name: "DigitalOcean", url: `${baseUrlTech}/aws.svg` },
            { name: "Git", url: `${baseUrlTech}/git.svg` }
        ]
    }
];

export const technologies = techCategories.flatMap(category => category.technologies);