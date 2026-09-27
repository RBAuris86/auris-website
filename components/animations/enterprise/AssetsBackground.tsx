"use client";

import { motion } from "framer-motion";
import DefaultEnterpriseBackground from "./DefaultEnterpriseBackground";

export default function AssetsBackground() {
  return (
    <>
      <DefaultEnterpriseBackground />

      {/* Floating server racks */}
      {[0, 1, 2].map((rack) => (
        <motion.div
          key={rack}
          className="absolute rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md"
          style={{
            width: 90,
            height: 250,
            right: `${10 + rack * 8}%`,
            top: `${18 + rack * 6}%`,
          }}
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 5 + rack,
            repeat: Infinity,
          }}
        >
          <div className="flex h-full flex-col justify-evenly p-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="h-4 rounded bg-slate-700"
                animate={{
                  opacity: [0.45, 1, 0.45],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.15,
                }}
              >
                <div className="ml-2 mt-1 h-2 w-2 rounded-full bg-cyan-400" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Connected asset nodes */}
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M220 220 L520 320 L760 220 L1100 380"
          stroke="#38bdf8"
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [0, -80],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {[220, 520, 760, 1100].map((x, i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={i % 2 === 0 ? 220 : i === 1 ? 320 : 380}
            r="8"
            fill="#67e8f9"
            animate={{
              r: [8, 12, 8],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </svg>

      {/* Floating inventory cubes */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute border border-cyan-300/30 bg-cyan-400/10"
          style={{
            width: 18,
            height: 18,
            left: `${(i * 13) % 100}%`,
            top: `${(i * 17) % 100}%`,
            transform: "rotate(45deg)",
          }}
          animate={{
            y: [0, -12, 0],
            rotate: [45, 225, 405],
            opacity: [0.3, 0.9, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}
    </>
  );
}