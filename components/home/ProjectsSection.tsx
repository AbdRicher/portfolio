'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/constants/projects';
import { Project } from '@/types';
import ProjectModal from '../ProjectModal';
import { fadeInUp, staggerChildren } from '@/style';

const getProjectIcon = (type?: string) => {
  switch (type) {
    case 'ai':
      return '🧠';
    case 'sync':
      return '🔄';
    case 'booking':
      return '📅';
    case 'portal':
      return '🛡️';
    case 'crm':
      return '📊';
    case 'shopify':
      return '🛍️';
    case 'web':
      return '🌐';
    default:
      return '⚡';
  }
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="w-full py-20 px-4 sm:px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-12"
        >
          <span className="font-mono text-xl sm:text-2xl text-cyan-400 font-bold">
            03.
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Projects & Architecture
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow max-w-xs ml-4" />
        </motion.div>

        {/* Projects Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id || project.title}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#0b1329]/80 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#0e1936]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(6,182,212,0.18)] flex flex-col justify-between group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div>
                {/* Top Row: Icon + External Link Arrow */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-2xl shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                    {getProjectIcon(project.iconType)}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                    className="text-slate-400 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-xl font-mono"
                    aria-label="Inspect project details"
                  >
                    ↗
                  </button>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {project.title}
                </h3>

                {/* Org & Date Badge */}
                <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-mono text-cyan-400/90">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#060b18] border border-cyan-500/30">
                    {project.associatedWith}
                  </span>
                  {project.date && project.date !== project.associatedWith && (
                    <span className="text-slate-400">
                      {project.date}
                    </span>
                  )}
                </div>

                {/* Problem Statement Box - Fixed truncation glitch */}
                {project.problem && (
                  <div className="p-3.5 rounded-xl bg-red-950/20 border border-red-500/30 text-xs text-slate-300 mb-4 shadow-sm">
                    <span className="font-mono text-red-400 font-semibold uppercase block mb-1 text-[11px] tracking-wider">
                      Problem:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                )}

                {/* Key Solutions Snippet */}
                {project.solutions && project.solutions.length > 0 && (
                  <div className="space-y-1.5 mb-4">
                    {project.solutions.slice(0, 2).map((sol, sIdx) => (
                      <p key={sIdx} className="text-xs text-slate-300 flex items-start">
                        <span className="text-cyan-400 mr-1.5 font-bold flex-shrink-0">✓</span>
                        <span>{sol}</span>
                      </p>
                    ))}
                    {project.solutions.length > 2 && (
                      <span className="text-xs text-cyan-400/80 font-mono italic block pt-1">
                        +{project.solutions.length - 2} more solutions in details modal...
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom: Tech Stack Pills */}
              <div className="pt-4 border-t border-slate-800/80 mt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack?.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#070d1e] text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {(project.techStack?.length || 0) > 4 && (
                    <span className="px-2 py-1 rounded text-[11px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/30">
                      +{(project.techStack?.length || 0) - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Interactive Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default ProjectsSection;
