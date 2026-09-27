"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const screens = ["search", "results", "route", "arrived"] as const;

type Screen = (typeof screens)[number];

const particles = Array.from({ length: 12 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 29) % 84)}%`,
  top: `${10 + ((index * 37) % 78)}%`,
  delay: index * 0.18,
}));

export default function NavigatePhoneDemo() {
  const [screenIndex, setScreenIndex] = useState(0);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setScreenIndex((current) => (current + 1) % screens.length);
    }, 3000);

    return () => window.clearTimeout(timer);
  }, [screenIndex]);

  const screen: Screen = screens[screenIndex];

  return (
    <div className="relative flex min-h-[560px] w-full items-center justify-center overflow-hidden">
      {/* Ambient glow */}
      <motion.div
        className="absolute h-[430px] w-[430px] rounded-full bg-cyan-400/15 blur-[100px]"
        animate={{
          scale: [0.85, 1.08, 0.85],
          opacity: [0.35, 0.7, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Blueprint grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,.16) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.16) 1px, transparent 1px)
          `,
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(circle at center, black 20%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 20%, transparent 72%)",
        }}
      />

      {/* Deterministic particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute h-1 w-1 rounded-full bg-cyan-300"
          style={{
            left: particle.left,
            top: particle.top,
            boxShadow: "0 0 10px rgba(34,211,238,.9)",
          }}
          animate={{
            y: [0, -15, 5, 0],
            opacity: [0.15, 0.8, 0.25, 0.15],
          }}
          transition={{
            duration: 3.5 + (particle.id % 4),
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scanning rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute rounded-full border border-cyan-300/10"
          style={{
            width: 340 + ring * 85,
            height: 340 + ring * 85,
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
            opacity: [0.12, 0.3, 0.12],
          }}
          transition={{
            rotate: {
              duration: 22 + ring * 7,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 4 + ring,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,.9)]" />
        </motion.div>
      ))}

      {/* Floating phone */}
      <motion.div
        className="relative z-10 h-[520px] w-[260px] rounded-[42px] border border-white/20 bg-slate-950 p-2"
        style={{
          boxShadow:
            "0 35px 90px rgba(0,0,0,.75), 0 0 45px rgba(34,211,238,.2)",
        }}
        initial={{
          opacity: 0,
          y: 80,
          scale: 0.82,
          rotateX: 12,
        }}
        animate={{
          opacity: 1,
          y: [0, -9, 0],
          scale: 1,
          rotateY: [-2, 2, -2],
          rotateX: [1, -1, 1],
        }}
        transition={{
          opacity: { duration: 0.8 },
          scale: { duration: 0.8 },
          y: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateY: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotateX: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {/* Phone buttons */}
        <div className="absolute -left-[4px] top-24 h-12 w-[3px] rounded-l bg-slate-700" />
        <div className="absolute -right-[4px] top-32 h-20 w-[3px] rounded-r bg-slate-700" />

        {/* Screen */}
        <div className="relative h-full overflow-hidden rounded-[35px] bg-[#030916]">
          {/* Dynamic island */}
          <div className="absolute left-1/2 top-3 z-50 h-6 w-20 -translate-x-1/2 rounded-full bg-black" />

          {/* Status bar */}
          <div className="absolute left-0 right-0 top-0 z-40 flex h-10 items-center justify-between px-5 pt-1 font-mono text-[8px] text-white/65">
            <span>9:41</span>
            <span>● 5G ▰</span>
          </div>

          {/* Atlas header */}
          <div className="absolute left-0 right-0 top-10 z-30 flex items-center justify-between px-5 py-3">
            <div>
              <div className="font-mono text-[7px] tracking-[0.28em] text-cyan-300/60">
                AURIS
              </div>

              <div className="text-base font-semibold tracking-[0.12em] text-white">
                ATLAS
              </div>
            </div>

            <motion.div
              className="h-8 w-8 rounded-full border border-cyan-300/30 bg-cyan-400/10"
              animate={{
                boxShadow: [
                  "0 0 8px rgba(34,211,238,.15)",
                  "0 0 20px rgba(34,211,238,.5)",
                  "0 0 8px rgba(34,211,238,.15)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </div>

          <AnimatePresence mode="wait">
            {screen === "search" && (
              <motion.div
                key="search"
                className="absolute inset-0 px-5 pt-28"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
              >
                <div className="text-[10px] text-white/45">
                  Where would you like to go?
                </div>

                <div className="mt-4 flex h-13 items-center rounded-2xl border border-cyan-300/30 bg-white/[0.04] px-4 py-4">
                  <span className="text-cyan-200">⌕</span>

                  <div className="ml-3 flex items-center text-sm text-white">
                    Nike
                    <motion.span
                      className="ml-1 h-4 w-px bg-cyan-300"
                      animate={{ opacity: [0, 1, 0] }}
                      transition={{ duration: 0.75, repeat: Infinity }}
                    />
                  </div>
                </div>

                <div className="mt-7 font-mono text-[7px] tracking-[0.2em] text-white/30">
                  POPULAR CATEGORIES
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {["SHOPPING", "DINING", "SERVICES", "PARKING"].map(
                    (category, index) => (
                      <motion.div
                        key={category}
                        className="rounded-xl border border-white/10 bg-white/[0.025] p-3 text-center font-mono text-[7px] tracking-[0.1em] text-white/55"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {category}
                      </motion.div>
                    ),
                  )}
                </div>
              </motion.div>
            )}

            {screen === "results" && (
              <motion.div
                key="results"
                className="absolute inset-0 px-5 pt-28"
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
              >
                <div className="font-mono text-[7px] tracking-[0.2em] text-white/30">
                  SEARCH RESULTS
                </div>

                <motion.div
                  className="mt-4 rounded-2xl border border-cyan-300/45 bg-cyan-400/10 p-4"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-sm font-medium text-white">
                    Nike Factory Store
                  </div>

                  <div className="mt-1 text-[9px] text-white/40">
                    Footwear & Apparel
                  </div>

                  <div className="mt-4 flex justify-between font-mono text-[7px] tracking-[0.12em] text-cyan-200/70">
                    <span>LEVEL 1</span>
                    <span>4 MIN WALK</span>
                  </div>
                </motion.div>

                <motion.div
                  className="mt-5 flex items-center justify-center rounded-2xl bg-cyan-300 py-4 font-mono text-[8px] font-bold tracking-[0.18em] text-slate-950"
                  animate={{
                    boxShadow: [
                      "0 0 12px rgba(34,211,238,.2)",
                      "0 0 28px rgba(34,211,238,.55)",
                      "0 0 12px rgba(34,211,238,.2)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  START ROUTE
                </motion.div>
              </motion.div>
            )}

            {screen === "route" && (
              <motion.div
                key="route"
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
              >
                {/* Map grid */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                      linear-gradient(rgba(34,211,238,.08) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(34,211,238,.08) 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Building shapes */}
                <div className="absolute left-[8%] top-[25%] h-[18%] w-[32%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]" />
                <div className="absolute right-[8%] top-[22%] h-[22%] w-[30%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]" />
                <div className="absolute bottom-[20%] left-[8%] h-[20%] w-[29%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]" />
                <div className="absolute bottom-[18%] right-[8%] h-[21%] w-[34%] rounded-xl border border-cyan-300/15 bg-cyan-400/[0.035]" />

                {/* Route */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 260 520"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M55 430 L55 350 L95 350 L95 270 L145 270 L145 190 L205 190 L205 120"
                    fill="none"
                    stroke="rgba(34,211,238,.16)"
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <motion.path
                    d="M55 430 L55 350 L95 350 L95 270 L145 270 L145 190 L205 190 L205 120"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, ease: "easeInOut" }}
                    style={{
                      filter: "drop-shadow(0 0 7px rgba(34,211,238,.9))",
                    }}
                  />

                  <motion.circle
                    r="7"
                    fill="#ffffff"
                    animate={{
                      cx: [55, 55, 95, 95, 145, 145, 205, 205],
                      cy: [430, 350, 350, 270, 270, 190, 190, 120],
                    }}
                    transition={{
                      duration: 2.7,
                      ease: "easeInOut",
                    }}
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(34,211,238,1))",
                    }}
                  />
                </svg>

                {/* Direction card */}
                <motion.div
                  className="absolute left-4 right-4 top-16 rounded-2xl border border-cyan-300/20 bg-slate-950/90 p-4 backdrop-blur-xl"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="font-mono text-[7px] tracking-[0.2em] text-cyan-300/60">
                    NEXT DIRECTION
                  </div>

                  <div className="mt-2 text-sm text-white">
                    Continue straight
                  </div>

                  <div className="mt-1 text-[9px] text-white/35">180 feet</div>
                </motion.div>

                {/* ETA */}
                <div className="absolute bottom-6 left-4 right-4 rounded-2xl border border-cyan-300/20 bg-slate-950/90 p-4 backdrop-blur-xl">
                  <div className="text-lg font-semibold text-white">4 min</div>
                  <div className="mt-1 font-mono text-[7px] tracking-[0.12em] text-white/35">
                    0.2 MI · LEVEL 1
                  </div>
                </div>
              </motion.div>
            )}

            {screen === "arrived" && (
              <motion.div
                key="arrived"
                className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
                initial={{ opacity: 0, scale: 0.86 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.08 }}
              >
                <motion.div
                  className="flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 text-4xl text-cyan-200"
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 170,
                    damping: 13,
                  }}
                  style={{
                    boxShadow: "0 0 35px rgba(34,211,238,.35)",
                  }}
                >
                  ✓
                </motion.div>

                <div className="mt-7 font-mono text-[8px] tracking-[0.25em] text-cyan-300">
                  DESTINATION REACHED
                </div>

                <div className="mt-4 text-xl font-semibold text-white">
                  Nike Factory Store
                </div>

                <div className="mt-2 text-[10px] text-white/40">
                  Level 1
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Screen reflection */}
          <motion.div
            className="absolute -bottom-[20%] -top-[20%] w-16 rotate-[18deg] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent"
            animate={{ left: ["-35%", "125%"] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatDelay: 6,
              ease: "easeInOut",
            }}
          />

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 z-50 h-1 w-20 -translate-x-1/2 rounded-full bg-white/60" />
        </div>
      </motion.div>

      {/* Phone shadow */}
      <motion.div
        className="absolute bottom-3 h-12 w-64 rounded-full bg-cyan-400/15 blur-2xl"
        animate={{
          scaleX: [0.8, 1.12, 0.8],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}