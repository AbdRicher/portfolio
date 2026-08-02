'use client';

import { motion } from 'framer-motion';
import { educationData } from '@/constants/timeline';
import { fadeInUp, staggerChildren } from '@/style';

const EducationSection = () => {
  return (
    <section id="education" className="w-full py-20 px-4 sm:px-6 lg:px-12 relative">
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
            05.
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Education & Academic Journey
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow max-w-xs ml-4" />
        </motion.div>

        {/* Education Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {educationData.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className={`p-6 sm:p-7 rounded-2xl bg-[#0b1329]/80 border ${
                idx === 0 ? 'border-cyan-500/40 shadow-[0_0_25px_rgba(6,182,212,0.12)]' : 'border-slate-800'
              } hover:border-cyan-400/50 hover:bg-[#0e1936]/90 transition-all duration-300 flex flex-col justify-between group`}
            >
              <div>
                {/* Degree Header & Badge */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-xl shadow-[0_0_12px_rgba(6,182,212,0.25)]">
                    🎓
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-[#070d1e] text-cyan-300 border border-cyan-500/30">
                    {item.duration.start} – {item.duration.end}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {item.degree}
                </h3>
                <div className="text-sm font-semibold text-cyan-400 font-mono mb-2">
                  {item.institution}
                </div>

                {/* Score / Grade Tag */}
                {item.grade && (
                  <div className="inline-block px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-cyan-950/50 text-cyan-300 border border-cyan-500/40 mb-3">
                    {item.grade}
                  </div>
                )}

                {/* FYP Callout for BSCS */}
                {item.fypTitle && (
                  <div className="p-3 rounded-xl bg-cyan-950/30 border border-cyan-500/25 mb-4 text-xs text-slate-300">
                    <span className="font-mono text-cyan-400 font-bold uppercase block mb-1">
                      Final Year Project:
                    </span>
                    <p className="text-slate-300 leading-relaxed font-mono text-[11px]">
                      {item.fypTitle}
                    </p>
                  </div>
                )}

                {/* Description */}
                {item.description && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {item.description}
                  </p>
                )}

                {/* Bullet Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-1.5 mb-2">
                    {item.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs text-slate-300">
                        <span className="text-cyan-400 mr-2 font-bold flex-shrink-0">▹</span>
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {item.location && (
                <div className="pt-3 border-t border-slate-800/80 mt-4 text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                  <span>📍</span>
                  <span>{item.location}</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
