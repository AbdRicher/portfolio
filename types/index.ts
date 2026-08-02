import { MouseEvent, ReactNode } from "react";

export interface Project {
    id?: string;
    title: string;
    description: string;
    detailedDescription?: string;
    problem?: string;
    solutions?: string[];
    associatedWith?: string;
    date?: string;
    techStack?: string[];
    technologies?: number[];
    link?: string;
    githubLink?: string;
    thumbnail?: string;
    demoLink?: string;
    achievements?: string[];
    isLinkedin?: boolean;
    showGitStats?: boolean;
    iconType?: "ai" | "sync" | "booking" | "portal" | "crm" | "shopify" | "web" | "code";
}

export interface Tech {
    name: string;
    url?: string;
    category?: string;
}

export interface TechCategory {
    id: string;
    name: string;
    description: string;
    icon: string;
    color: string;
    technologies: Tech[];
}

export type Experience = {
    id: string;
    company: string;
    role: string;
    type: 'fulltime' | 'contract' | 'freelance' | 'internship' | 'education';
    duration: {
        start: string;
        end: string | 'Present';
    };
    location: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    achievements: string[];
    logo?: string;
};

export interface RootLayoutProps {
    children: ReactNode;
}

export type ProjectModelProps = {
    project: Project | null;
    isOpen: boolean;
    setOpen: (open: boolean) => void;
};

export type GitHubStats = {
    stars: number;
    forks: number;
    openIssues: number;
    closedIssues: number;
    pullRequests: number;
};

export interface GitHubError {
    message: string;
    documentation_url?: string;
}

export type ThingsIDo = {
    name: string;
    image: string;
    tech: Tech[];
    capabilities: {
        text: string;
        icon: string;
    }[];
};

export type TimelineEntry = {
    id: string;
    title: string;
    company: string;
    location?: string;
    duration: {
        start: string;
        end: string | 'Present';
    };
    description: string;
    type: 'fulltime' | 'contract' | 'freelance' | 'internship' | 'education';
    highlights?: string[];
};

export type EducationEntry = {
    id: string;
    degree: string;
    institution: string;
    location?: string;
    duration: {
        start: string;
        end: string;
    };
    grade?: string;
    fypTitle?: string;
    description?: string;
    highlights?: string[];
};

export type ChartDataType = {
    status: string;
    count: number;
    fill: string;
}[];

export type ProjectButtonProps = {
    href: string;
    icon: string;
    text: string;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    children: ReactNode;
    handleMouseMove: (event: MouseEvent<HTMLElement>) => void;
};
