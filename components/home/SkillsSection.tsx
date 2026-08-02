'use client';

import { motion } from 'framer-motion';
import { userSkills, professionalSkills } from '@/constants/techData';
import { fadeInUp, staggerChildren } from '@/style';

interface SkillCategoryDisplay {
  id: string;
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategoryDisplay[] = [
  {
    id: "aiAndMl",
    title: "AI, ML & Agentic Systems",
    icon: "🧠",
    skills: userSkills.aiAndMl,
  },
  {
    id: "shopifyDev",
    title: "Shopify Ecosystem & Custom Apps",
    icon: "🛍️",
    skills: userSkills.shopifyDev,
  },
  {
    id: "languages",
    title: "Programming & Languages",
    icon: "💻",
    skills: userSkills.languages,
  },
  {
    id: "backend",
    title: "Backend & Distributed APIs",
    icon: "⚙️",
    skills: userSkills.backend,
  },
  {
    id: "frontend",
    title: "Frontend & UI Engineering",
    icon: "🎨",
    skills: userSkills.frontend,
  },
  {
    id: "databases",
    title: "Databases & Vector Storage",
    icon: "🗄️",
    skills: userSkills.databases,
  },
  {
    id: "devopsAndTools",
    title: "DevOps, Cloud & Tools",
    icon: "🚀",
    skills: userSkills.devopsAndTools,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="w-full py-20 px-4 sm:px-6 lg:px-12 relative">
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
            02.
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Skills
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow max-w-xs ml-4" />
        </motion.div>

        {/* Skill Cards Grid (Matching Reference PDF Glass Card Layout) */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.id}
              variants={fadeInUp}
              className="p-6 rounded-2xl bg-[#0b1329]/80 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#0e1936]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] flex flex-col justify-between group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-xl shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                    {cat.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-[#070d1e] text-slate-300 border border-slate-700/60 hover:border-cyan-400/70 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(6,182,212,0.25)] transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Professional Skills Pills Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-slate-800/80 text-center"
        >
          <h4 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6">
            Professional Strengths & Core Competencies
          </h4>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {professionalSkills.map((pSkill, pIdx) => (
              <span
                key={pIdx}
                className="px-4 py-1.5 rounded-full text-xs font-medium bg-[#0b1329]/90 border border-cyan-500/30 text-cyan-200 hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-200"
              >
                {pSkill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
