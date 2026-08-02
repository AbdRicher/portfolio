'use client';

import { motion } from 'framer-motion';
import { profile } from '@/constants';
import Image from 'next/image';
import { fadeInUp, staggerChildren } from '@/style';

const AboutSection = () => {
  return (
    <section id="about" className="w-full py-20 px-4 sm:px-6 lg:px-12 relative">
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
            01.
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <div className="h-[1px] bg-slate-800 flex-grow max-w-xs ml-4" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Cyber Developer Portrait */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
              {/* Outer Cyan Glow Ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600 opacity-60 group-hover:opacity-100 blur-md transition duration-500" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/80 bg-[#070d1e] shadow-[0_0_30px_rgba(6,182,212,0.35)]">
                <Image
                  src="/assets/images/abdullah-portrait.jpg"
                  alt="Hafiz Abdullah Amjad"
                  fill
                  priority
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>

              {/* Decorative Floating Tech Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-2 -right-2 px-3.5 py-1.5 rounded-full bg-[#0b1329]/95 border border-cyan-400/60 shadow-lg shadow-cyan-500/20 text-xs font-mono text-cyan-300 flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>AI & Full-Stack</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Narrative Bio */}
          <motion.div
            className="lg:col-span-7 space-y-4 sm:space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed"
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeInUp}>
              Hello world! This is <span className="text-white font-semibold">Hafiz Abdullah Amjad</span>, a Full-Stack Software Engineer with 1+ year of professional experience delivering production web applications, custom Shopify apps, and enterprise CRMs end to end.
            </motion.p>

            <motion.p variants={fadeInUp}>
              With a strong academic foundation (<span className="text-cyan-300 font-medium">BS in Computer Science from University of Management and Technology, Lahore with 3.84 CGPA</span>) and industry experience at <span className="text-cyan-300 font-medium">Integriti</span>, I specialize in architecting end-to-end solutions — from multi-tenant CRMs with real-time WebSockets and bulk GraphQL sync engines to intelligent multi-agent LangGraph tutoring systems.
            </motion.p>

            <motion.p variants={fadeInUp}>
              I thrive on engineering resilient backend architectures, solving complex business workflows, and deploying scalable modern web applications across Linux, Docker, and cloud platforms.
            </motion.p>
          </motion.div>
        </div>

        {/* 4 Stat Metric Badges */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {profile.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-[#0b1329]/80 border border-cyan-500/20 hover:border-cyan-400/50 hover:bg-[#0e1936]/90 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_25px_rgba(6,182,212,0.15)] flex flex-col items-center text-center group"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.6)] font-mono">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-semibold text-slate-100 mt-1">
                {stat.label}
              </span>
              <span className="text-xs text-slate-400 mt-1">
                {stat.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
