"use client";

import { RootLayoutProps } from "@/types";
import {
  useMotionValue,
  motion,
  useMotionTemplate,
  useSpring
} from "framer-motion";
import { memo, useRef, useEffect, useCallback } from "react";
import dynamic from "next/dynamic";

const DarkVeil = dynamic(() => import("@/components/DarkVeil"), { ssr: false });

const HighlightBackground = ({ children }: RootLayoutProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 20, stiffness: 120 });
  const smoothY = useSpring(mouseY, { damping: 20, stiffness: 120 });

  const ref = useRef<HTMLDivElement>(null);

  const dotPattern = `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='24' height='24' fill='none'%3E%3Ccircle fill='%2338bdf8' opacity='0.12' id='pattern-circle' cx='12' cy='12' r='1.5'%3E%3C/circle%3E%3C/svg%3E")`;

  const handleContainerMouseMove = useCallback(({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) => {
    if (!currentTarget) return;
    const rect = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - rect.left);
    mouseY.set(clientY - rect.top);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!ref.current) return;
    const { width, height } = ref.current.getBoundingClientRect();
    mouseX.set(width / 2);
    mouseY.set(height / 2);
  }, [mouseX, mouseY]);

  return (
    <div
      className="relative w-full min-h-screen overflow-x-hidden bg-[#050814]"
      onMouseMove={handleContainerMouseMove}
      ref={ref}
    >
      {/* Deep Midnight Background & Ambient Radial Glows */}
      <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        {/* Subtle DarkVeil Shader Background */}
        <div className="absolute inset-0 opacity-[0.18] mix-blend-screen pointer-events-none">
          <DarkVeil
            speed={0.25}
            warpAmount={0.25}
            noiseIntensity={0.015}
            scanlineIntensity={0.12}
            scanlineFrequency={0.015}
            resolutionScale={0.75}
          />
        </div>

        {/* Top-right subtle cyan ambient glow */}
        <div className="absolute -top-32 -right-32 w-[35rem] h-[35rem] bg-cyan-500/10 rounded-full filter blur-[140px]" />
        
        {/* Mid-left indigo ambient glow */}
        <div className="absolute top-1/3 -left-32 w-[30rem] h-[30rem] bg-blue-600/10 rounded-full filter blur-[140px]" />
        
        {/* Bottom-right teal glow */}
        <div className="absolute -bottom-32 right-1/4 w-[35rem] h-[35rem] bg-teal-500/8 rounded-full filter blur-[160px]" />

        {/* Constellation Grid Dot Pattern */}
        <div
          className="pointer-events-none absolute inset-0 block opacity-50"
          style={{
            backgroundImage: dotPattern,
          }}
        />

        {/* Subtle geometric grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-10 hidden sm:block"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${smoothX}px ${smoothY}px,
              rgba(0, 242, 254, 0.07) 0%,
              rgba(14, 165, 233, 0.03) 35%,
              transparent 65%
            )
          `
        }}
      />
      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default memo(HighlightBackground);