import { useState, useEffect, memo, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { GitHubStats, ProjectModelProps } from "@/types";
import { getRepositoryStats } from "@/lib/github/gitRepositoryStats";
import TechnologyIcon from "./Technologies";

const ProjectModal = ({ isOpen, project, setOpen }: ProjectModelProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        const fetchGitHubStats = async () => {
            // without this the api call will exceed the rate limit 
            if (project?.githubLink && project.showGitStats) {
                const stats = await getRepositoryStats(project.githubLink);
                if (stats) {
                    setGithubStats(stats);
                }
            }
        };

        fetchGitHubStats();
    }, [project]);

    const MemoizedTechnologies = useMemo(() => {
        if (!project || !project.technologies) return null;

        return project.technologies.map((techIndex, i) => <TechnologyIcon key={i} techIndex={techIndex} />);
    }, [project]);

    if (!isMounted || !project) {
        return null;
    }

    return (
        <Dialog open={isOpen} onOpenChange={setOpen} modal>
            <DialogContent className="sm:max-w-[1000px] max-h-[90vh] overflow-y-auto bg-[#090f24] border-cyan-500/30 text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-white">{project.title}</DialogTitle>
                    <DialogDescription>
                        <span className="text-slate-300">{project.description}</span>
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    {project.thumbnail && (
                        <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                            <Image
                                src={project.thumbnail}
                                alt={project.title}
                                loading="lazy"
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    {project.showGitStats && githubStats && project.githubLink && (
                        <div className="grid grid-cols-4 gap-3">
                            <Link href={`${project.githubLink}`}>
                                <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-3">
                                    <Image
                                        src={'/assets/icons/star.svg'}
                                        width={12}
                                        height={12}
                                        alt="Stars"
                                        className="w-3 h-3"
                                    />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Stars</p>
                                        <p className="text-sm font-medium">{githubStats.stars}</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`${project.githubLink}/forks`}>
                                <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-3">
                                    <Image
                                        src={'/assets/icons/fork.svg'}
                                        width={12}
                                        height={12}
                                        alt="Forks"
                                        className="w-3 h-3 text-blue-500"
                                    />
                                    <div>
                                        <p className="text-xs text-muted-foreground">Forks</p>
                                        <p className="text-sm font-medium">{githubStats.forks}</p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`${project.githubLink}/issues`}>
                                <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-3">
                                    <div className="flex gap-1">
                                        <Image
                                            src={'/assets/icons/dot.svg'}
                                            width={12}
                                            height={12}
                                            alt="Issues"
                                            className="w-3 h-3 text-red-500"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground">Issues</p>
                                        <p className="text-sm font-medium">
                                            <span className="text-red-500">{githubStats.openIssues}</span>
                                            <span className="text-muted-foreground mx-1">/</span>
                                            <span className="text-green-500">{githubStats.closedIssues}</span>
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            <Link href={`${project.githubLink}/pulls`}>
                                <div className="flex items-center gap-2 bg-secondary/50 rounded-lg p-3">
                                    <Image
                                        src={'/assets/icons/pr.svg'}
                                        width={12}
                                        height={12}
                                        alt="Pull Requests"
                                        className="w-3 h-3 text-green-500"
                                    />
                                    <div>
                                        <p className="text-xs text-muted-foreground">PRs</p>
                                        <p className="text-sm font-medium">{githubStats.pullRequests}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )}
                    {project.detailedDescription && (
                        <article>
                            <div className="space-y-2">
                                <h3 className="text-lg font-semibold text-white">Project Details</h3>
                                <p className="text-sm text-slate-300">{project.detailedDescription}</p>
                            </div>
                        </article>
                    )}
                    {MemoizedTechnologies && (
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white">Technologies Used</h3>
                            <div className="flex flex-wrap gap-2">
                                {MemoizedTechnologies}
                            </div>
                        </div>
                    )}
                    {project.achievements && project.achievements.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold text-white">Key Achievements And Features</h3>
                            <ul className="list-inside list-disc space-y-1 text-sm text-slate-300">
                                {project.achievements.map((achievement, index) => (
                                    <li key={index}>{achievement}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <Separator className="bg-slate-800" />
                    <div className="flex flex-wrap justify-between gap-2">
                        {project.link && (
                            <Button asChild className="flex-1 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold">
                                <Link href={project.link} prefetch={false} target="_blank" rel="noopener noreferrer">
                                    Visit Project
                                </Link>
                            </Button>
                        )}
                        {project.githubLink && (
                            <Button variant="outline" asChild className="flex-1 border-slate-700 hover:border-cyan-400">
                                <Link href={project.githubLink} prefetch={false} target="_blank" rel="noopener noreferrer">
                                    View on GitHub
                                </Link>
                            </Button>
                        )}
                        {project.demoLink && (
                            <Button variant="secondary" asChild className="flex-1 bg-slate-800 hover:bg-slate-700 text-white">
                                <Link href={project.demoLink} prefetch={false} target="_blank" rel="noopener noreferrer">
                                    {project.isLinkedin ? "View on LinkedIn" : "Watch Demo"}
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default memo(ProjectModal);