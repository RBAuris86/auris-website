"use client";

import { motion } from "framer-motion";

export default function DefaultEnterpriseBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Main background */}
      <div className="absolute inset-0 bg-[#050914]" />

      {/* Soft center glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(37, 99, 235, 0.18), transparent 55%)",
        }}
      />

      {/* Secondary cyan glow */}
      <motion.div
        className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left blue glow */}
      <motion.div
        className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[150px]"
        animate={{
          scale: [1.05, 1, 1.05],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Subtle enterprise grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.45) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Slow horizontal light sweep */}
      <motion.div
        className="absolute top-0 h-full w-[280px] bg-gradient-to-r from-transparent via-cyan-300/[0.04] to-transparent blur-2xl"
        initial={{ x: "-40vw" }}
        animate={{ x: "140vw" }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatDelay: 5,
          ease: "linear",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#050914] to-transparent" />
    </div>
  );
}