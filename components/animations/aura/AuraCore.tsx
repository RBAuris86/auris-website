"use client";

import { motion } from "framer-motion";

import AuraRings from "../aura/AuraRings";
import type { AuraPhase } from "./auraTypes";

type AuraCoreProps = {
  phase: AuraPhase;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onActivate: () => void;
};

const divisionSegments = [
  {
    name: "Terra",
    color: "#22c55e",
    rotation: 0,
  },
  {
    name: "Atlas",
    color: "#3b82f6",
    rotation: 60,
  },
  {
    name: "Medical",
    color: "#ef4444",
    rotation: 120,
  },
  {
    name: "Haven",
    color: "#c49a6c",
    rotation: 180,
  },
  {
    name: "Enterprise",
    color: "#ffffff",
    rotation: 240,
  },
  {
    name: "Orbit",
    color: "#8b5cf6",
    rotation: 300,
  },
];

export default function AuraCore({
  phase,
  isHovered,
  onHoverStart,
  onHoverEnd,
  onActivate,
}: AuraCoreProps) {
  const isInteractive =
    phase === "idle" || phase === "hovering";

  const isFrozen =
    phase === "freezing" ||
    phase === "compressing" ||
    phase === "opening" ||
    phase === "entering" ||
    phase === "tunnel" ||
    phase === "arrival";

  const isCompressing = phase === "compressing";
  const isOpening = phase === "opening";

  const isEntering =
    phase === "entering" ||
    phase === "tunnel" ||
    phase === "arrival";

  return (
    /*
      The normal div owns the centering transform.

      Framer Motion only scales the button inside it, so the clickable
      hitbox always stays directly over the visible AURA Core.
    */
    <div
      className="
        pointer-events-auto
        absolute left-1/2 top-1/2 z-[100]
        h-[min(72vw,620px)]
        w-[min(72vw,620px)]
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      <motion.button
        type="button"
        aria-label="Enter AURA AI"
        disabled={!isInteractive}
        onPointerEnter={onHoverStart}
        onPointerLeave={onHoverEnd}
        onFocus={onHoverStart}
        onBlur={onHoverEnd}
        onClick={onActivate}
        className="
          pointer-events-auto
          relative h-full w-full
          cursor-pointer
          rounded-full
          border-0
          bg-transparent
          p-0
          outline-none
          disabled:cursor-default
        "
        animate={{
          scale: isCompressing
            ? 0.56
            : isOpening
              ? 0.72
              : isEntering
                ? 8
                : isHovered
                  ? 1.085
                  : 1,

          opacity: isEntering ? 0 : 1,
        }}
        transition={{
          duration: isEntering ? 1.15 : 0.65,
          ease: isEntering
            ? [0.76, 0, 0.82, 0]
            : [0.22, 1, 0.36, 1],
        }}
      >
        <AuraRings
          phase={phase}
          isHovered={isHovered}
        />

        {/* Outer intelligence glow */}
        <motion.div
          className="pointer-events-none absolute inset-[20%] rounded-full blur-[48px]"
          style={{
            background:
              "radial-gradient(circle, rgba(34,211,238,0.58) 0%, rgba(59,130,246,0.26) 34%, rgba(139,92,246,0.22) 54%, transparent 76%)",
          }}
          animate={{
            opacity: isFrozen
              ? 0.32
              : isHovered
                ? [0.62, 1, 0.62]
                : [0.32, 0.68, 0.32],

            scale: isFrozen
              ? 0.82
              : isHovered
                ? [1, 1.18, 1]
                : [0.96, 1.06, 0.96],
          }}
          transition={{
            duration: isFrozen
              ? 0.3
              : isHovered
                ? 2.1
                : 5,

            repeat: isFrozen ? 0 : Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Division energy segments */}
        <div className="pointer-events-none absolute inset-[17%]">
          {divisionSegments.map((segment, index) => (
            <motion.div
              key={segment.name}
              className="
                absolute left-1/2 top-1/2
                h-[50%] w-[3px]
                origin-bottom
                rounded-full
              "
              style={{
                background: `linear-gradient(
                  to top,
                  transparent 0%,
                  ${segment.color}33 22%,
                  ${segment.color} 100%
                )`,

                boxShadow:
                  segment.color === "#ffffff"
                    ? "0 0 18px rgba(255,255,255,0.9)"
                    : `0 0 18px ${segment.color}`,

                transform: `
                  translate(-50%, -100%)
                  rotate(${segment.rotation}deg)
                `,
              }}
              animate={{
                opacity: isFrozen
                  ? 0.28
                  : isHovered
                    ? [0.48, 1, 0.48]
                    : [0.2, 0.62, 0.2],

                scaleY: isFrozen
                  ? 0.76
                  : isHovered
                    ? [0.9, 1.15, 0.9]
                    : [0.82, 1, 0.82],
              }}
              transition={{
                duration: isFrozen
                  ? 0.25
                  : 2.7 + index * 0.25,

                repeat: isFrozen ? 0 : Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.span
                className="
                  absolute left-1/2 top-0
                  h-3 w-3
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                "
                style={{
                  background: segment.color,

                  boxShadow:
                    segment.color === "#ffffff"
                      ? "0 0 16px rgba(255,255,255,1)"
                      : `0 0 16px ${segment.color}`,
                }}
                animate={{
                  scale: isFrozen
                    ? 0.7
                    : isHovered
                      ? [0.8, 1.6, 0.8]
                      : [0.7, 1.2, 0.7],

                  opacity: isFrozen
                    ? 0.4
                    : [0.45, 1, 0.45],
                }}
                transition={{
                  duration: isFrozen
                    ? 0.2
                    : 2.2 + index * 0.2,

                  repeat: isFrozen ? 0 : Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Segmented intelligence ring */}
        <motion.div
          className="pointer-events-none absolute inset-[23%] rounded-full border border-cyan-100/20"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg 18deg, rgba(103,232,249,0.34) 18deg 42deg, transparent 42deg 78deg, rgba(255,255,255,0.22) 78deg 104deg, transparent 104deg 142deg, rgba(139,92,246,0.3) 142deg 170deg, transparent 170deg 220deg, rgba(59,130,246,0.28) 220deg 250deg, transparent 250deg 302deg, rgba(103,232,249,0.32) 302deg 330deg, transparent 330deg 360deg)",

            maskImage:
              "radial-gradient(circle, transparent 60%, black 61%)",

            WebkitMaskImage:
              "radial-gradient(circle, transparent 60%, black 61%)",

            boxShadow:
              "0 0 40px rgba(34,211,238,0.12)",
          }}
          animate={{
            rotate: isFrozen ? 0 : 360,
            opacity: isOpening ? 0.2 : 0.8,
          }}
          transition={{
            rotate: {
              duration: isHovered ? 17 : 28,
              repeat: isFrozen ? 0 : Infinity,
              ease: "linear",
            },

            opacity: {
              duration: 0.35,
            },
          }}
        />

        {/* Main sphere */}
        <motion.div
          className="
            pointer-events-none
            absolute inset-[29%]
            overflow-hidden
            rounded-full
            border border-cyan-100/40
            backdrop-blur-xl
          "
          style={{
            background: `
              radial-gradient(
                circle at 34% 27%,
                rgba(255,255,255,0.96) 0%,
                rgba(165,243,252,0.68) 8%,
                rgba(34,211,238,0.38) 24%,
                rgba(49,46,129,0.58) 58%,
                rgba(2,6,23,0.98) 100%
              )
            `,

            boxShadow: `
              inset 0 0 56px rgba(103,232,249,0.34),
              inset -24px -30px 58px rgba(2,6,23,0.88),
              0 0 48px rgba(34,211,238,0.44),
              0 0 115px rgba(139,92,246,0.3)
            `,
          }}
          animate={{
            borderRadius: isHovered
              ? ["50%", "45%", "50%"]
              : ["50%", "48%", "50%"],

            scale: isCompressing
              ? 0.76
              : isOpening
                ? 0.84
                : isHovered
                  ? 1.065
                  : 1,
          }}
          transition={{
            borderRadius: {
              duration: 5,
              repeat: isFrozen ? 0 : Infinity,
              ease: "easeInOut",
            },

            scale: {
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
        >
          {/* Sphere texture */}
          <motion.div
            className="absolute inset-[-35%] opacity-45"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle at center,
                  rgba(255,255,255,0.9) 0 1px,
                  transparent 2px
                ),
                linear-gradient(
                  90deg,
                  transparent 48%,
                  rgba(103,232,249,0.12) 50%,
                  transparent 52%
                )
              `,

              backgroundSize: "22px 22px, 42px 42px",
            }}
            animate={{
              rotate: isFrozen ? 0 : 360,
            }}
            transition={{
              duration: 80,
              repeat: isFrozen ? 0 : Infinity,
              ease: "linear",
            }}
          />

          {/* Neural filaments */}
          <svg
            className="absolute inset-0 h-full w-full opacity-65"
            viewBox="0 0 300 300"
            aria-hidden="true"
          >
            <defs>
              <filter id="aura-core-glow">
                <feGaussianBlur
                  stdDeviation="3"
                  result="blur"
                />

                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {Array.from({ length: 9 }).map((_, index) => {
              const startY = 35 + index * 28;
              const endY = 265 - index * 22;

              return (
                <motion.path
                  key={index}
                  d={`M20 ${startY} C90 ${endY}, 210 ${startY}, 280 ${endY}`}
                  fill="none"
                  stroke={
                    index % 3 === 0
                      ? "#8b5cf6"
                      : index % 3 === 1
                        ? "#67e8f9"
                        : "#ffffff"
                  }
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeDasharray="8 12"
                  filter="url(#aura-core-glow)"
                  animate={{
                    strokeDashoffset: isFrozen
                      ? 0
                      : [0, -160],

                    opacity: isFrozen
                      ? 0.32
                      : [0.2, 0.9, 0.2],
                  }}
                  transition={{
                    strokeDashoffset: {
                      duration: 8 + index,
                      repeat: isFrozen ? 0 : Infinity,
                      ease: "linear",
                    },

                    opacity: {
                      duration: 3 + (index % 4),
                      repeat: isFrozen ? 0 : Infinity,
                      ease: "easeInOut",
                    },
                  }}
                />
              );
            })}
          </svg>

          {/* Inner intelligence */}
          <motion.div
            className="
              absolute left-1/2 top-1/2
              h-[38%] w-[38%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
            "
            style={{
              background:
                "radial-gradient(circle, #ffffff 0%, #a5f3fc 16%, #22d3ee 35%, rgba(124,58,237,0.78) 62%, transparent 76%)",

              boxShadow:
                "0 0 38px rgba(255,255,255,0.9), 0 0 86px rgba(34,211,238,0.88)",
            }}
            animate={{
              scale: isCompressing
                ? 0.55
                : isOpening
                  ? 1.8
                  : isHovered
                    ? [0.9, 1.24, 0.9]
                    : [0.88, 1.06, 0.88],

              opacity: isOpening
                ? 0
                : isFrozen
                  ? 0.85
                  : [0.7, 1, 0.7],
            }}
            transition={{
              duration: isFrozen
                ? 0.45
                : isHovered
                  ? 1.8
                  : 4,

              repeat: isFrozen ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />

          {/* AURA label */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            animate={{
              opacity:
                isOpening || isEntering
                  ? 0
                  : 1,

              scale: isHovered ? 1.04 : 1,
            }}
            transition={{
              duration: 0.35,
            }}
          >
            <span className="text-[clamp(0.55rem,1vw,0.8rem)] font-semibold tracking-[0.42em] text-cyan-100/65">
              AURIS
            </span>

            <span className="mt-1 text-[clamp(1.15rem,2.3vw,2.1rem)] font-semibold tracking-[0.22em] text-white">
              AURA
            </span>

            <span className="mt-2 text-[clamp(0.42rem,0.7vw,0.6rem)] tracking-[0.26em] text-cyan-100/55">
              ENTER THE INTELLIGENCE
            </span>
          </motion.div>
        </motion.div>

        {/* Built-in iris preview */}
        <motion.div
          className="
            pointer-events-none
            absolute inset-[29%]
            overflow-hidden
            rounded-full
          "
          initial={false}
          animate={{
            opacity:
              isOpening || isEntering
                ? 1
                : 0,

            scale: isOpening
              ? [0.15, 1]
              : isEntering
                ? 4
                : 0.15,
          }}
          transition={{
            duration: isEntering ? 1.1 : 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff_0%,#a5f3fc_14%,#22d3ee_34%,#7c3aed_58%,#020617_78%)]" />

          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              className="
                absolute left-1/2 top-1/2
                h-[62%] w-[34%]
                origin-bottom
                rounded-[100%_0_100%_0]
                border border-cyan-100/30
                bg-slate-950/80
                backdrop-blur-lg
              "
              style={{
                transform: `
                  translate(-50%, -100%)
                  rotate(${index * 60}deg)
                `,
              }}
              animate={{
                rotate: isOpening
                  ? index * 60 + 52
                  : index * 60,

                y: isOpening ? -24 : 0,

                opacity: isOpening
                  ? [1, 0.78]
                  : 1,
              }}
              transition={{
                duration: 0.85,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
            />
          ))}

          <motion.div
            className="
              absolute left-1/2 top-1/2
              h-[18%] w-[18%]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-white
            "
            style={{
              boxShadow:
                "0 0 45px white, 0 0 100px rgba(103,232,249,0.95)",
            }}
            animate={{
              scale: isOpening
                ? [0.2, 2.8]
                : 0.2,

              opacity: isOpening
                ? [0.6, 1]
                : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          />
        </motion.div>
      </motion.button>
    </div>
  );
}