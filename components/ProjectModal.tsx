'use client';

import { Project } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#02050f]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl bg-[#090f24] border border-cyan-500/30 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(6,182,212,0.2)] z-10 max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-400 hover:text-white hover:border-cyan-400 flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Header */}
            <div className="pr-10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                <span>{project.associatedWith}</span>
                {project.date && <span>• {project.date}</span>}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
            </div>

            {/* Problem Callout Box */}
            {project.problem && (
              <div className="mt-6 p-4 rounded-xl bg-red-950/20 border border-red-500/30 text-slate-200">
                <span className="text-xs font-mono text-red-400 uppercase font-semibold block mb-1">
                  The Problem & Challenge
                </span>
                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  {project.problem}
                </p>
              </div>
            )}

            {/* Solutions List */}
            {project.solutions && project.solutions.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider font-semibold mb-3">
                  Architectural Solutions & Engineering
                </h4>
                <ul className="space-y-2.5">
                  {project.solutions.map((sol, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-slate-300">
                      <span className="text-cyan-400 mr-2.5 mt-1 font-bold">✓</span>
                      <span>{sol}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Badges */}
            <div className="mt-6 pt-6 border-t border-slate-800">
              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-3">
                Technologies & Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-[#050814] text-cyan-300 border border-cyan-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex items-center justify-end gap-4">
              {project.githubLink && (
                <Link
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  GitHub Repository
                </Link>
              )}
              {project.demoLink && (
                <Link
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all"
                >
                  Live Demo ↗
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
