"use client";

import { motion } from "framer-motion";

import type { AuraPhase } from "./auraTypes";

type NexusArrivalProps = {
  phase: AuraPhase;
};

const divisions = [
  {
    name: "TERRA",
    color: "#22c55e",
    subtitle: "Environmental Intelligence",
    x: "-31%",
    y: "-25%",
  },
  {
    name: "ATLAS",
    color: "#3b82f6",
    subtitle: "Navigation & Spatial Systems",
    x: "0%",
    y: "-34%",
  },
  {
    name: "MEDICAL",
    color: "#ef4444",
    subtitle: "Healthcare Intelligence",
    x: "31%",
    y: "-25%",
  },
  {
    name: "HAVEN",
    color: "#c49a6c",
    subtitle: "AI, Robotics & Assisted Living",
    x: "-31%",
    y: "25%",
  },
  {
    name: "ENTERPRISE",
    color: "#ffffff",
    subtitle: "Digital Business Solutions",
    x: "0%",
    y: "34%",
  },
  {
    name: "ORBIT",
    color: "#8b5cf6",
    subtitle: "Space & Orbital Systems",
    x: "31%",
    y: "25%",
  },
];

const interfaceLines = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  angle: index * 20,
  delay: index * 0.035,
}));

const interfaceNodes = Array.from({ length: 30 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 29) % 84)}%`,
  top: `${8 + ((index * 43) % 84)}%`,
  size: 2 + (index % 4),
  delay: (index % 10) * 0.09,
}));

export default function AuraArrival({
  phase,
}: NexusArrivalProps) {
  const isActive = phase === "arrival";

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[80] overflow-hidden bg-[#01030a]"
      initial={false}
      animate={{
        opacity: isActive ? 1 : 0,
        visibility: isActive ? "visible" : "hidden",
      }}
      transition={{
        opacity: {
          duration: 0.35,
        },
        visibility: {
          duration: 0,
        },
      }}
      aria-hidden="true"
    >
      {/* Arrival light */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[1500px] w-[1500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(103,232,249,0.24) 13%, rgba(59,130,246,0.16) 30%, rgba(124,58,237,0.1) 48%, transparent 72%)",
        }}
        animate={{
          scale: isActive ? [0.12, 1.05] : 0.12,
          opacity: isActive ? [1, 0.58] : 0,
        }}
        transition={{
          duration: 1.35,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Interface grid assembling */}
      <motion.div
        className="absolute inset-[-100px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(103,232,249,0.1) 1px, transparent 1px),
            linear-gradient(
              90deg,
              rgba(103,232,249,0.1) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "62px 62px",
          maskImage:
            "radial-gradient(circle at center, black 8%, transparent 82%)",
        }}
        animate={{
          opacity: isActive ? [0, 0.16] : 0,
          scale: isActive ? [1.8, 1] : 1.8,
          rotate: isActive ? [4, 0] : 4,
        }}
        transition={{
          duration: 1.4,
          delay: 0.18,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Interface radial lines */}
      <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2">
        {interfaceLines.map((line) => (
          <motion.div
            key={line.id}
            className="absolute left-1/2 top-1/2 h-[48%] w-px origin-bottom"
            style={{
              background:
                line.id % 3 === 0
                  ? "linear-gradient(to top, transparent, rgba(255,255,255,0.4))"
                  : "linear-gradient(to top, transparent, rgba(103,232,249,0.28))",
              transform: `
                translate(-50%, -100%)
                rotate(${line.angle}deg)
              `,
            }}
            animate={{
              scaleY: isActive ? [0, 1] : 0,
              opacity: isActive ? [0, 0.65] : 0,
            }}
            transition={{
              duration: 0.75,
              delay: 0.3 + line.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      {/* Main interface rings */}
      {[0, 1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: 290 + ring * 145,
            height: 290 + ring * 145,
            translateX: "-50%",
            translateY: "-50%",
            borderColor:
              ring % 2 === 0
                ? "rgba(103,232,249,0.2)"
                : "rgba(139,92,246,0.16)",
            borderStyle: ring % 2 === 0 ? "solid" : "dashed",
            boxShadow:
              ring === 0
                ? "0 0 46px rgba(34,211,238,0.16)"
                : undefined,
          }}
          animate={{
            scale: isActive ? [0.12, 1] : 0.12,
            opacity: isActive ? [0, 0.78] : 0,
            rotate:
              ring % 2 === 0
                ? [ring * 22, ring * 22 + 42]
                : [-ring * 22, -ring * 22 - 42],
          }}
          transition={{
            scale: {
              duration: 1.1,
              delay: 0.12 + ring * 0.11,
              ease: [0.22, 1, 0.36, 1],
            },
            opacity: {
              duration: 0.8,
              delay: 0.12 + ring * 0.11,
            },
            rotate: {
              duration: 18 + ring * 7,
              delay: 1.1,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        />
      ))}

      {/* Central Aura intelligence */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/35 backdrop-blur-xl"
        style={{
          background:
            "radial-gradient(circle at 35% 28%, rgba(255,255,255,0.95), rgba(103,232,249,0.54) 10%, rgba(34,211,238,0.28) 34%, rgba(49,46,129,0.6) 67%, rgba(2,6,23,0.98) 100%)",
          boxShadow: `
            inset 0 0 60px rgba(103,232,249,0.3),
            0 0 60px rgba(34,211,238,0.5),
            0 0 150px rgba(124,58,237,0.32)
          `,
        }}
        animate={{
          scale: isActive ? [0, 1.08, 1] : 0,
          opacity: isActive ? [0, 1, 1] : 0,
        }}
        transition={{
          duration: 1.05,
          delay: 0.55,
          times: [0, 0.72, 1],
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <motion.div
          className="absolute inset-[18%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, white 0%, #cffafe 18%, #22d3ee 42%, rgba(124,58,237,0.55) 68%, transparent 76%)",
            boxShadow:
              "0 0 34px white, 0 0 82px rgba(34,211,238,0.92)",
          }}
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 3.5,
            delay: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center"
          animate={{
            opacity: isActive ? [0, 1] : 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.2,
          }}
        >
          <span className="text-[9px] font-semibold tracking-[0.5em] text-cyan-100/65">
            AURIS
          </span>

          <span className="mt-1 text-2xl font-semibold tracking-[0.28em] text-white">
            AURA
          </span>

          <span className="mt-2 text-[7px] tracking-[0.25em] text-cyan-100/50">
            INTELLIGENCE ONLINE
          </span>
        </motion.div>
      </motion.div>

      {/* Division interface modules */}
      {divisions.map((division, index) => (
        <motion.div
          key={division.name}
          className="absolute left-1/2 top-1/2 min-w-[190px] rounded-2xl border px-5 py-4 backdrop-blur-xl"
          style={{
            borderColor: `${division.color}44`,
            background: "rgba(2,6,23,0.68)",
            boxShadow:
              division.color === "#ffffff"
                ? "0 0 34px rgba(255,255,255,0.1)"
                : `0 0 34px ${division.color}18`,
          }}
          animate={{
            x: isActive
              ? [
                  "calc(-50% + 0px)",
                  `calc(-50% + ${division.x})`,
                ]
              : "calc(-50% + 0px)",
            y: isActive
              ? [
                  "calc(-50% + 0px)",
                  `calc(-50% + ${division.y})`,
                ]
              : "calc(-50% + 0px)",
            scale: isActive ? [0.2, 1] : 0.2,
            opacity: isActive ? [0, 1] : 0,
            filter: isActive
              ? ["blur(14px)", "blur(0px)"]
              : "blur(14px)",
          }}
          transition={{
            duration: 1.05,
            delay: 0.85 + index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="flex items-center gap-3">
            <motion.span
              className="h-3 w-3 rounded-full"
              style={{
                background: division.color,
                boxShadow:
                  division.color === "#ffffff"
                    ? "0 0 14px white"
                    : `0 0 14px ${division.color}`,
              }}
              animate={{
                scale: [0.8, 1.35, 0.8],
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 2.5 + index * 0.18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div>
              <div
                className="text-[9px] font-black tracking-[0.3em]"
                style={{
                  color: division.color,
                }}
              >
                {division.name}
              </div>

              <div className="mt-1 text-[7px] tracking-[0.08em] text-slate-300/55">
                {division.subtitle}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Interface particles */}
      {interfaceNodes.map((node) => (
        <motion.span
          key={node.id}
          className="absolute rounded-full bg-cyan-100"
          style={{
            left: node.left,
            top: node.top,
            width: node.size,
            height: node.size,
            boxShadow:
              node.id % 6 === 0
                ? "0 0 12px white"
                : "0 0 10px rgba(103,232,249,0.75)",
          }}
          animate={{
            scale: isActive
              ? [0, 1.6, 0.85]
              : 0,
            opacity: isActive
              ? [0, 0.9, 0.35]
              : 0,
          }}
          transition={{
            duration: 1.2,
            delay: 0.65 + node.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ))}

      {/* System text */}
      <motion.div
        className="absolute inset-x-0 bottom-12 flex justify-center"
        animate={{
          opacity: isActive ? [0, 1] : 0,
          y: isActive ? [20, 0] : 20,
        }}
        transition={{
          duration: 0.8,
          delay: 1.65,
        }}
      >
        <div className="rounded-full border border-cyan-100/10 bg-slate-950/45 px-6 py-3 text-[9px] font-medium tracking-[0.38em] text-cyan-100/65 backdrop-blur-xl">
          AURIS ECOSYSTEM SYNCHRONIZED
        </div>
      </motion.div>

      {/* Arrival vignette */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 28%, rgba(1,3,10,0.35) 70%, rgba(1,3,10,0.94) 100%)",
        }}
        animate={{
          opacity: isActive ? [0, 1] : 0,
        }}
        transition={{
          duration: 1.2,
        }}
      />
    </motion.div>
  );
}