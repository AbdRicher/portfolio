'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SocialLinks from '../SocialLinks';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const NeuralPolyhedronCanvas = dynamic(
  () => import('@/components/3D/NeuralPolyhedronCanvas'),
  { ssr: false }
);

const ROLES = [
  "Full-Stack Software Engineer",
  "Agentic AI & RAG Architect",
  "Shopify Ecosystem Engineer",
  "Distributed Backend Developer"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          // Pause before deleting
          setTypingSpeed(2200);
          setIsDeleting(true);
        } else {
          setTypingSpeed(80);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center w-full px-4 sm:px-6 lg:px-12 py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-8 lg:gap-4 items-center">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start z-20 space-y-5 sm:space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Cyan Subtitle Monospace */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <span className="font-mono text-sm sm:text-base text-cyan-400 font-medium tracking-wide">
              Hi, my name is
            </span>
          </motion.div>

          {/* Main Name Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            Hafiz{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.4)]">
              Abdullah
            </span>{" "}
            Amjad
          </motion.h1>

          {/* Typewriter Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center font-mono text-xl sm:text-2xl lg:text-3xl text-cyan-300 font-semibold min-h-[2.5rem]"
          >
            <span className="text-cyan-400 mr-2">&gt;</span>
            <span className="text-slate-100">{displayText}</span>
            <span className="inline-block w-2.5 h-6 sm:h-8 bg-cyan-400 ml-1 animate-pulse" />
          </motion.div>

          {/* Short Bio / Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed"
          >
            Passionate about building scalable web systems, agentic AI solutions, and high-performance Shopify apps.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              View Projects
            </Link>

            <Link
              href="/resume"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium text-sm sm:text-base text-white bg-[#0b1329]/80 border border-cyan-500/40 hover:border-cyan-400 hover:bg-cyan-500/10 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Resume
            </Link>
          </motion.div>

          {/* Social Links Icons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="pt-3"
          >
            <SocialLinks />
          </motion.div>
        </motion.div>

        {/* Right 3D Wireframe Mesh Canvas */}
        <motion.div
          className="lg:col-span-5 h-[340px] sm:h-[450px] lg:h-[550px] relative flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[280px] sm:w-[380px] h-[280px] sm:h-[380px] rounded-full bg-cyan-500/10 filter blur-[80px] pointer-events-none" />
          </div>
          <NeuralPolyhedronCanvas className="w-full h-full" />
        </motion.div>
      </div>

      {/* Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="mx-auto mt-8 sm:mt-12 flex flex-col items-center cursor-pointer"
      >
        <Link href="#about" aria-label="Scroll to About section">
          <div className="w-6 h-10 rounded-full border-2 border-cyan-400/50 flex justify-center items-start p-1.5 hover:border-cyan-400 transition-colors shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            <motion.div
              animate={{
                y: [0, 14, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="w-1.5 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(6,182,212,0.8)]"
            />
          </div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
