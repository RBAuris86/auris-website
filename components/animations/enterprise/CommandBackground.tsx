"use client";

import { motion } from "framer-motion";
import DefaultEnterpriseBackground from "./DefaultEnterpriseBackground";

export default function CommandBackground() {
  return (
    <>
      <DefaultEnterpriseBackground />

      {/* Central Command Core */}
      <motion.div
        className="absolute left-1/2 top-1/2 z-20 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-cyan-400/40 bg-cyan-400/10 backdrop-blur-md"
        animate={{
          scale: [1, 1.06, 1],
          boxShadow: [
            "0 0 20px rgba(34,211,238,.25)",
            "0 0 70px rgba(34,211,238,.55)",
            "0 0 20px rgba(34,211,238,.25)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* Orbiting Command Modules */}
      {[
        { x: -260, y: -150, delay: 0 },
        { x: 260, y: -150, delay: 0.5 },
        { x: -260, y: 150, delay: 1 },
        { x: 260, y: 150, delay: 1.5 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-20 w-20 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md"
          style={{
            marginLeft: node.x,
            marginTop: node.y,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: node.delay,
          }}
        >
          <div className="flex h-full items-center justify-center">
            <motion.div
              className="h-5 w-5 rounded-full bg-cyan-400"
              animate={{
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* Network Connections */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        preserveAspectRatio="none"
      >
        {[
          ["50%", "50%", "30%", "30%"],
          ["50%", "50%", "70%", "30%"],
          ["50%", "50%", "30%", "70%"],
          ["50%", "50%", "70%", "70%"],
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke="#22d3ee"
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{
              strokeDashoffset: [0, -60],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.4,
            }}
          />
        ))}
      </svg>

      {/* Data Streams */}
{Array.from({ length: 30 }).map((_, i) => {
  const left = 8 + ((i * 17) % 84);
  const top = 8 + ((i * 29) % 84);
  const duration = 2 + (i % 4);
  const delay = (i % 8) * 0.4;

  return (
    <motion.div
      key={i}
      className="absolute h-2 w-2 rounded-full bg-cyan-300"
      style={{
        left: `${left}%`,
        top: `${top}%`,
      }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0.5, 1.5, 0.5],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
      }}
    />
  );
})}

      {/* Command Scan Ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/20"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee]" />
      </motion.div>
    </>
  );
}