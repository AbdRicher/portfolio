'use client';

import { motion } from 'framer-motion';
import { timelineData } from '@/constants/timeline';
import { fadeInUp, staggerChildren } from '@/style';

const ExperienceSection = () => {
  return (
    <section id="experience" className="w-full py-20 px-4 sm:px-6 lg:px-12 relative">
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
            04.
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Work Experience
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow max-w-xs ml-4" />
        </motion.div>

        {/* Timeline List */}
        <motion.div
          className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-8 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-sky-400/40 before:to-transparent"
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {timelineData.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeInUp}
              className="relative pl-10 sm:pl-16 group"
            >
              {/* Glowing Timeline Marker Dot */}
              <div className="absolute left-2.5 sm:left-8 top-5 -translate-x-1/2 w-4 h-4 rounded-full bg-[#050814] border-2 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 absolute inset-0 m-auto" />
              </div>

              {/* Content Card */}
              <div className="p-6 sm:p-7 rounded-2xl bg-[#0b1329]/80 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#0e1936]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)]">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm font-semibold text-cyan-400 font-mono mt-0.5">
                      <span>{item.company}</span>
                      {item.location && (
                        <>
                          <span className="text-slate-500">·</span>
                          <span className="text-slate-400 font-normal">{item.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <span className="inline-flex items-center self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono bg-[#070d1e] text-cyan-300 border border-cyan-500/30">
                    {item.duration.start} – {item.duration.end}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Bullet Highlights */}
                {item.highlights && item.highlights.length > 0 && (
                  <ul className="space-y-2">
                    {item.highlights.map((high, hIdx) => (
                      <li key={hIdx} className="flex items-start text-xs sm:text-sm text-slate-300">
                        <span className="text-cyan-400 mr-2 font-bold flex-shrink-0">▹</span>
                        <span>{high}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
