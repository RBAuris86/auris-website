"use client";

import { motion } from "framer-motion";
import DefaultEnterpriseBackground from "./DefaultEnterpriseBackground";

export default function ProjectsBackground() {
  return (
    <>
      <DefaultEnterpriseBackground />

      {/* Floating project boards */}
      {[
        { top: "14%", right: "10%", delay: 0 },
        { top: "34%", right: "18%", delay: 1 },
        { top: "58%", right: "8%", delay: 2 },
      ].map((board, i) => (
        <motion.div
          key={i}
          className="absolute z-10 rounded-2xl border border-cyan-400/20 bg-slate-900/40 backdrop-blur-md"
          style={{
            width: 210,
            height: 135,
            top: board.top,
            right: board.right,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: board.delay,
          }}
        >
          <div className="p-4">
            <div className="mb-3 h-3 w-28 rounded bg-cyan-400/50" />

            {[0, 1, 2].map((task) => (
              <div
                key={task}
                className="mb-2 flex items-center gap-2"
              >
                <motion.div
                  className="h-3 w-3 rounded-full bg-cyan-400"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.4, 1, 0.4],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: task * 0.35,
                  }}
                />

                <div
                  className="h-2 rounded bg-slate-600"
                  style={{
                    width: `${70 - task * 12}%`,
                  }}
                />
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Timeline */}
      <div className="absolute left-[10%] top-[82%] w-[72%]">
        <div className="relative h-1 rounded-full bg-slate-700">
          <motion.div
            className="absolute left-0 top-0 h-1 rounded-full bg-cyan-400"
            animate={{
              width: ["15%", "85%", "15%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />

          {[0, 25, 50, 75, 100].map((p, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 h-4 w-4 rounded-full border-2 border-cyan-400 bg-slate-900"
              style={{
                left: `${p}%`,
                transform: "translate(-50%, -50%)",
              }}
              animate={{
                boxShadow: [
                  "0 0 0px #22d3ee",
                  "0 0 18px #22d3ee",
                  "0 0 0px #22d3ee",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Connecting workflow lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M1100 180 C900 220 850 380 950 520"
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
      </svg>
    </>
  );
}