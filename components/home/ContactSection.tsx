'use client';

import { motion } from 'framer-motion';
import { profile } from '@/constants';
import SocialLinks from '../SocialLinks';
import Link from 'next/link';

const ContactSection = () => {
  return (
    <section id="contact" className="w-full py-24 px-4 sm:px-6 lg:px-12 relative overflow-hidden">
      {/* Background ambient cyan glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center space-x-3 mb-6"
        >
          <span className="font-mono text-xl sm:text-2xl text-cyan-400 font-bold">
            06.
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
        </motion.div>

        {/* Big Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-200 tracking-tight mb-6"
        >
          Let&apos;s Build Something Extraordinary
        </motion.h3>

        {/* Message Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Whether you have an idea to discuss, a role to fill, or just want to talk AI &amp; full-stack engineering — my inbox is always open.
        </motion.p>

        {/* Say Hello Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <Link
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center px-8 py-4 rounded-2xl font-semibold text-base sm:text-lg text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_30px_rgba(6,182,212,0.5)] hover:shadow-[0_0_45px_rgba(6,182,212,0.8)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Say Hello ✉️
          </Link>
        </motion.div>

        {/* Social Links Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mb-6"
        >
          <SocialLinks />
        </motion.div>

        {/* Location Monospace Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="font-mono text-xs text-slate-400"
        >
          {"// based in Lahore, Pakistan · open to worldwide remote opportunities"}
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
