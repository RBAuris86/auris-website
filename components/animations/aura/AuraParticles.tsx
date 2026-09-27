"use client";

import { motion } from "framer-motion";

import type { AuraPhase } from "./auraTypes";

type AuraParticlesProps = {
  phase: AuraPhase;
};

type AuraParticle = {
  id: number;
  left: number;
  top: number;
  size: number;
  driftX: number;
  driftY: number;
  duration: number;
  delay: number;
  color: string;
};

const particleColors = [
  "#67e8f9",
  "#ffffff",
  "#22c55e",
  "#3b82f6",
  "#ef4444",
  "#c49a6c",
  "#8b5cf6",
];

const particles: AuraParticle[] = Array.from(
  { length: 96 },
  (_, index) => ({
    id: index,

    left: (index * 37 + 9) % 100,
    top: (index * 53 + 13) % 100,

    size:
      index % 14 === 0
        ? 5
        : index % 7 === 0
          ? 4
          : 2 + (index % 2),

    driftX:
      index % 2 === 0
        ? 18 + (index % 6) * 6
        : -(18 + (index % 6) * 6),

    driftY: 32 + (index % 8) * 9,

    duration: 8 + (index % 9),

    delay: (index % 15) * 0.32,

    color:
      index % 5 === 0
        ? particleColors[
            (Math.floor(index / 5) + 1) %
              particleColors.length
          ]
        : "#67e8f9",
  }),
);

const knowledgeFragments = [
  {
    id: "terra-data",
    text: "ENVIRONMENTAL DATA",
    color: "#22c55e",
    left: "9%",
    top: "23%",
    delay: 0.2,
  },
  {
    id: "atlas-data",
    text: "SPATIAL INTELLIGENCE",
    color: "#3b82f6",
    left: "76%",
    top: "18%",
    delay: 1.1,
  },
  {
    id: "medical-data",
    text: "CLINICAL SYSTEMS",
    color: "#ef4444",
    left: "81%",
    top: "67%",
    delay: 2,
  },
  {
    id: "haven-data",
    text: "ROBOTIC ASSISTANCE",
    color: "#c49a6c",
    left: "12%",
    top: "72%",
    delay: 2.9,
  },
  {
    id: "enterprise-data",
    text: "DIGITAL INFRASTRUCTURE",
    color: "#ffffff",
    left: "40%",
    top: "83%",
    delay: 3.8,
  },
  {
    id: "orbit-data",
    text: "ORBITAL TELEMETRY",
    color: "#8b5cf6",
    left: "42%",
    top: "9%",
    delay: 4.7,
  },
];

export default function AuraParticles({
  phase,
}: AuraParticlesProps) {
  const isFrozen =
    phase === "freezing" ||
    phase === "compressing" ||
    phase === "opening";

  const isEntering =
    phase === "entering" ||
    phase === "tunnel" ||
    phase === "arrival";

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
      aria-hidden="true"
      animate={{
        opacity: isEntering ? 0 : 1,
        scale: isEntering ? 2.8 : 1,
      }}
      transition={{
        duration: 1.1,
        ease: "easeIn",
      }}
    >
      {/* Ambient intelligence particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color,
            boxShadow:
              particle.color === "#ffffff"
                ? "0 0 14px rgba(255,255,255,0.95)"
                : `0 0 13px ${particle.color}`,
          }}
          initial={false}
          animate={
            isFrozen
              ? {
                  x: 0,
                  y: 0,
                  scale: 0.82,
                  opacity: 0.34,
                }
              : isEntering
                ? {
                    x: particle.driftX * 14,
                    y: particle.driftY * 12,
                    scale: 5,
                    opacity: 0,
                  }
                : {
                    x: [
                      0,
                      particle.driftX,
                      particle.driftX * 0.35,
                      0,
                    ],
                    y: [
                      0,
                      -particle.driftY,
                      -particle.driftY * 0.45,
                      0,
                    ],
                    scale: [
                      0.65,
                      particle.size >= 4 ? 1.65 : 1.25,
                      0.85,
                      0.65,
                    ],
                    opacity: [
                      0.08,
                      particle.size >= 4 ? 0.95 : 0.62,
                      0.3,
                      0.08,
                    ],
                  }
          }
          transition={
            isFrozen
              ? {
                  duration: 0.2,
                  ease: "easeOut",
                }
              : isEntering
                ? {
                    duration: 1.05,
                    delay: (particle.id % 10) * 0.015,
                    ease: [0.76, 0, 0.82, 0],
                  }
                : {
                    duration: particle.duration,
                    delay: particle.delay,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
          }
        />
      ))}

      {/* Larger intelligence clusters */}
      {Array.from({ length: 14 }).map((_, index) => {
        const left = 7 + ((index * 31) % 86);
        const top = 8 + ((index * 47) % 84);
        const color =
          particleColors[index % particleColors.length];

        return (
          <motion.div
            key={`cluster-${index}`}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={
              isFrozen
                ? {
                    opacity: 0.22,
                    scale: 0.8,
                  }
                : isEntering
                  ? {
                      opacity: 0,
                      scale: 6,
                    }
                  : {
                      opacity: [0.08, 0.6, 0.08],
                      scale: [0.72, 1.3, 0.72],
                      rotate: index % 2 === 0 ? 360 : -360,
                    }
            }
            transition={{
              opacity: {
                duration: isFrozen
                  ? 0.2
                  : isEntering
                    ? 0.9
                    : 5 + (index % 5),
                repeat:
                  isFrozen || isEntering
                    ? 0
                    : Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: isFrozen
                  ? 0.2
                  : isEntering
                    ? 0.9
                    : 5 + (index % 5),
                repeat:
                  isFrozen || isEntering
                    ? 0
                    : Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 28 + index * 2,
                repeat:
                  isFrozen || isEntering
                    ? 0
                    : Infinity,
                ease: "linear",
              },
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border"
              style={{
                borderColor: `${color}28`,
                boxShadow: `0 0 24px ${color}18`,
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed"
              style={{
                borderColor: `${color}55`,
              }}
            />

            <div
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background: color,
                boxShadow:
                  color === "#ffffff"
                    ? "0 0 14px white"
                    : `0 0 14px ${color}`,
              }}
            />
          </motion.div>
        );
      })}

      {/* Floating knowledge fragments */}
      {!isEntering &&
        knowledgeFragments.map((fragment, index) => (
          <motion.div
            key={fragment.id}
            className="absolute whitespace-nowrap font-mono text-[7px] font-semibold tracking-[0.3em]"
            style={{
              left: fragment.left,
              top: fragment.top,
              color: fragment.color,
              textShadow:
                fragment.color === "#ffffff"
                  ? "0 0 12px rgba(255,255,255,0.7)"
                  : `0 0 12px ${fragment.color}`,
            }}
            animate={
              isFrozen
                ? {
                    opacity: 0.16,
                    x: 0,
                    y: 0,
                  }
                : {
                    opacity: [0, 0.52, 0],
                    x: [
                      index % 2 === 0 ? -16 : 16,
                      0,
                      index % 2 === 0 ? 16 : -16,
                    ],
                    y: [12, -10, -28],
                    filter: [
                      "blur(5px)",
                      "blur(0px)",
                      "blur(5px)",
                    ],
                  }
            }
            transition={{
              duration: isFrozen
                ? 0.2
                : 8 + index * 0.8,
              delay: fragment.delay,
              repeat: isFrozen ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            {fragment.text}
          </motion.div>
        ))}

      {/* Central particle orbit */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        animate={{
          rotate: isFrozen ? 0 : 360,
          opacity: isEntering ? 0 : 1,
          scale: isEntering ? 3.5 : 1,
        }}
        transition={{
          rotate: {
            duration: 55,
            repeat: isFrozen ? 0 : Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 0.8,
          },
          scale: {
            duration: 1,
            ease: "easeIn",
          },
        }}
      >
        {particleColors.slice(1).map((color, index) => (
          <motion.span
            key={color}
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
            style={{
              background: color,
              boxShadow:
                color === "#ffffff"
                  ? "0 0 16px white"
                  : `0 0 16px ${color}`,
              transform: `
                translate(-50%, -50%)
                rotate(${index * 60}deg)
                translateY(-270px)
              `,
            }}
            animate={{
              scale: isFrozen
                ? 0.72
                : [0.7, 1.5, 0.7],
              opacity: isFrozen
                ? 0.3
                : [0.3, 1, 0.3],
            }}
            transition={{
              duration: isFrozen
                ? 0.2
                : 2.7 + index * 0.3,
              delay: index * 0.16,
              repeat: isFrozen ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Soft particle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_32%,rgba(1,3,10,0.1)_68%,rgba(1,3,10,0.48)_100%)]" />
    </motion.div>
  );
}