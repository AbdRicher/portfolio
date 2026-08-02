import { hostedUrl } from "@/constants";
import { projects } from "@/constants/projects";

export const projectsPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${hostedUrl}/projects#projectspage`,
  url: `${hostedUrl}/projects`,
  name: "Projects & Architecture Portfolio",
  description: "Portfolio of full-stack web platforms, Agentic AI tutors, enterprise CRMs, and Shopify applications.",
  mainEntity: {
    "@type": "ItemList",
    "@id": `${hostedUrl}/projects#projectslist`,
    name: "Software Projects",
    numberOfItems: projects.length,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        "@id": `${hostedUrl}/projects#project-${index}`,
        name: project.title,
        description: project.description,
        url: project.githubLink || hostedUrl,
        applicationCategory: "WebApplication",
        programmingLanguage: project.techStack || [],
        codeRepository: project.githubLink,
        screenshot: `${hostedUrl}${project.thumbnail}`,
        featureList: project.achievements || []
      }
    }))
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: hostedUrl
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${hostedUrl}/projects`
      }
    ]
  }
};