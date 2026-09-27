"use client";

import { motion } from "framer-motion";
import DefaultEnterpriseBackground from "./DefaultEnterpriseBackground";

export default function ServiceDeskBackground() {
  return (
    <>
      <DefaultEnterpriseBackground />

      {/* Floating support tickets */}
      {[
        { top: "15%", right: "10%", delay: 0 },
        { top: "36%", right: "18%", delay: 1 },
        { top: "60%", right: "12%", delay: 2 },
      ].map((ticket, i) => (
        <motion.div
          key={i}
          className="absolute z-10 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md"
          style={{
            width: 220,
            height: 125,
            top: ticket.top,
            right: ticket.right,
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            delay: ticket.delay,
          }}
        >
          <div className="p-4">

            <div className="mb-3 flex items-center justify-between">
              <div className="h-3 w-24 rounded bg-cyan-400/50" />

              <motion.div
                className="h-3 w-3 rounded-full bg-emerald-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </div>

            {[0,1,2].map((row)=>(
              <div
                key={row}
                className="mb-2 h-2 rounded bg-slate-600"
                style={{
                  width:`${80-row*12}%`,
                }}
              />
            ))}

          </div>
        </motion.div>
      ))}

      {/* Incoming request pulses */}
      {Array.from({ length: 14 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-3 w-3 rounded-full bg-cyan-300"
          style={{
            left: `${5 + i * 6}%`,
            top: `${25 + (i % 3) * 18}%`,
          }}
          animate={{
            x: [0, 220, 440],
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.35,
            ease: "linear",
          }}
        />
      ))}

      {/* Ticket queue */}
      <svg
        className="absolute inset-0 h-full w-full opacity-25"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M100 240 L420 240 L700 360 L1080 360"
          stroke="#22d3ee"
          strokeWidth="2"
          fill="none"
          strokeDasharray="10 10"
          animate={{
            strokeDashoffset: [0, -80],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.path
          d="M100 520 L500 520 L820 460 L1180 460"
          stroke="#60a5fa"
          strokeWidth="2"
          fill="none"
          strokeDasharray="12 12"
          animate={{
            strokeDashoffset: [0, -90],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Chat notification bubbles */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border border-cyan-300/40 bg-cyan-400/10"
          style={{
            width: 20,
            height: 20,
            left: `${15 + i * 7}%`,
            bottom: `${8 + (i % 2) * 8}%`,
          }}
          animate={{
            y: [0, -12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.25,
          }}
        />
      ))}
    </>
  );
}