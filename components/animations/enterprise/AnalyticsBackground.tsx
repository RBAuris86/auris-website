"use client";

import { motion } from "framer-motion";
import DefaultEnterpriseBackground from "./DefaultEnterpriseBackground";

export default function AnalyticsBackground() {
  return (
    <>
      <DefaultEnterpriseBackground />

      {/* Floating analytics cards */}
      {[
        { top: "14%", right: "12%", delay: 0 },
        { top: "36%", right: "22%", delay: 1.2 },
        { top: "60%", right: "10%", delay: 2.4 },
      ].map((card, i) => (
        <motion.div
          key={i}
          className="absolute z-10 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md"
          style={{
            top: card.top,
            right: card.right,
            width: 180,
            height: 110,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.55, 0.9, 0.55],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: card.delay,
          }}
        >
          <div className="p-4 space-y-3">
            <div className="h-2 w-20 rounded bg-cyan-400/50" />

            <div className="flex items-end gap-2 h-10">
              {[30, 55, 20, 70, 45].map((h, index) => (
                <motion.div
                  key={index}
                  className="w-3 rounded bg-cyan-400"
                  animate={{
                    height: [h, h + 18, h],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.25,
                  }}
                  style={{
                    height: h,
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Live graph lines */}
      <svg
        className="absolute inset-0 z-0 h-full w-full opacity-20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 500 C300 200 700 700 1400 320"
          fill="none"
          stroke="#22d3ee"
          strokeWidth="3"
          strokeDasharray="12 12"
          animate={{
            strokeDashoffset: [0, -120],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M0 620 C400 350 900 780 1600 250"
          fill="none"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeDasharray="8 14"
          animate={{
            strokeDashoffset: [0, -100],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Glowing data points */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: `${(i * 17) % 100}%`,
            top: `${(i * 29) % 100}%`,
            width: 5,
            height: 5,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: i * 0.12,
          }}
        />
      ))}
    </>
  );
}