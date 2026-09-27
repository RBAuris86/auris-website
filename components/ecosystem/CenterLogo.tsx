"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import AuraRings from "@/components/animations/aura/AuraRings";
import type { AuraPhase } from "@/components/animations/aura/auraTypes";

type CenterLogoProps = {
  active: boolean;
  accent: string;
  phase: AuraPhase;
  isHovered: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
  onActivate: () => void;
};

export default function CenterLogo({
  active,
  accent,
  phase,
  isHovered,
  onHoverStart,
  onHoverEnd,
  onActivate,
}: CenterLogoProps) {
  /*
    Before activation:
    The AURIS / AURA sphere begins the ecosystem experience.

    After activation:
    AURA becomes the persistent intelligence center.
    We will wire the active AURA center to /aura after
    the cinematic conversion is complete.
  */
  const isInteractive =
    !active &&
    (phase === "idle" || phase === "hovering");

  const isFrozen =
    phase === "freezing" ||
    phase === "compressing" ||
    phase === "opening" ||
    phase === "entering" ||
    phase === "tunnel" ||
    phase === "arrival";

  const isCompressing =
    phase === "compressing";

  const isOpening =
    phase === "opening";

  const isEntering =
    phase === "entering" ||
    phase === "tunnel" ||
    phase === "arrival";

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        width: 280,
        height: 280,
        transform: "translate(-50%, -50%)",
        zIndex: 20,
        pointerEvents: "auto",
      }}
    >
      <motion.button
        type="button"
        aria-label={
          active
            ? "AURA — AURIS Intelligence"
            : "Enter the AURIS Ecosystem"
        }
        disabled={!isInteractive}
        onPointerEnter={onHoverStart}
        onPointerLeave={onHoverEnd}
        onFocus={onHoverStart}
        onBlur={onHoverEnd}
        onClick={onActivate}
        className="relative h-full w-full rounded-full border-0 bg-transparent p-0 outline-none"
        style={{
          cursor: isInteractive
            ? "pointer"
            : "default",

          pointerEvents: isInteractive
            ? "auto"
            : "none",
        }}
        animate={{
          scale: isCompressing
            ? 0.5
            : isOpening
              ? 0.7
              : isEntering
                ? 7
                : isHovered
                  ? 1.12
                  : active
                    ? 1.04
                    : 1,

          rotate:
            active && !isFrozen
              ? 8
              : 0,

          opacity:
            isEntering
              ? 0
              : 1,

          filter: isHovered
            ? `drop-shadow(0 0 55px ${accent})`
            : `drop-shadow(0 0 28px ${accent})`,
        }}
        transition={{
          duration: isEntering
            ? 1.15
            : 0.55,

          ease: isEntering
            ? [0.76, 0, 0.82, 0]
            : [0.22, 1, 0.36, 1],
        }}
      >
        <AuraRings
          phase={phase}
          isHovered={isHovered}
        />

        {/* AURA atmospheric intelligence field */}
        <motion.div
          className="pointer-events-none absolute inset-[14%] rounded-full blur-[38px]"
          style={{
            background: `
              radial-gradient(
                circle,
                rgba(255,255,255,0.72) 0%,
                rgba(103,232,249,0.46) 22%,
                rgba(34,211,238,0.26) 44%,
                rgba(124,58,237,0.22) 62%,
                transparent 76%
              )
            `,
          }}
          animate={{
            scale: isFrozen
              ? 0.72
              : isHovered
                ? [0.92, 1.28, 0.92]
                : [0.96, 1.08, 0.96],

            opacity: isFrozen
              ? 0.3
              : isHovered
                ? [0.48, 1, 0.48]
                : [0.26, 0.58, 0.26],
          }}
          transition={{
            duration: isFrozen
              ? 0.25
              : isHovered
                ? 1.8
                : 4,

            repeat: isFrozen
              ? 0
              : Infinity,

            ease: "easeInOut",
          }}
        />

        {/* Main AURA sphere */}
        <motion.div
          className="pointer-events-none absolute inset-[23%] overflow-hidden rounded-full border border-cyan-100/45 backdrop-blur-xl"
          style={{
            background: `
              radial-gradient(
                circle at 34% 27%,
                rgba(255,255,255,0.98) 0%,
                rgba(165,243,252,0.7) 9%,
                rgba(34,211,238,0.4) 28%,
                rgba(49,46,129,0.6) 62%,
                rgba(2,6,23,0.98) 100%
              )
            `,

            boxShadow: `
              inset 0 0 52px rgba(103,232,249,0.34),
              inset -20px -24px 46px rgba(2,6,23,0.88),
              0 0 46px rgba(34,211,238,0.52),
              0 0 110px rgba(124,58,237,0.32)
            `,
          }}
          animate={{
            scale: isCompressing
              ? 0.7
              : isOpening
                ? 0.82
                : isHovered
                  ? 1.09
                  : 1,

            borderRadius: isFrozen
              ? "50%"
              : isHovered
                ? ["50%", "44%", "50%"]
                : ["50%", "48%", "50%"],
          }}
          transition={{
            scale: {
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            },

            borderRadius: {
              duration: 4,
              repeat: isFrozen
                ? 0
                : Infinity,
              ease: "easeInOut",
            },
          }}
        >
          {/* Internal AURA neural/network texture */}
          <motion.div
            className="absolute inset-[-30%] opacity-40"
            style={{
              backgroundImage: `
                radial-gradient(
                  circle,
                  rgba(255,255,255,0.9) 0 1px,
                  transparent 2px
                ),

                linear-gradient(
                  90deg,
                  transparent 48%,
                  rgba(103,232,249,0.14) 50%,
                  transparent 52%
                )
              `,

              backgroundSize:
                "19px 19px, 38px 38px",
            }}
            animate={{
              rotate: isFrozen
                ? 0
                : 360,
            }}
            transition={{
              duration: 70,

              repeat: isFrozen
                ? 0
                : Infinity,

              ease: "linear",
            }}
          />

          {/* AURA intelligence core */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background:
                "radial-gradient(circle, white 0%, #cffafe 18%, #22d3ee 42%, rgba(124,58,237,0.68) 68%, transparent 78%)",

              boxShadow:
                "0 0 34px white, 0 0 78px rgba(34,211,238,0.9)",
            }}
            animate={{
              scale: isCompressing
                ? 0.45
                : isOpening
                  ? 2
                  : isHovered
                    ? [0.86, 1.28, 0.86]
                    : [0.9, 1.08, 0.9],

              opacity: isOpening
                ? 0
                : isFrozen
                  ? 0.84
                  : [0.7, 1, 0.7],
            }}
            transition={{
              duration: isFrozen
                ? 0.4
                : isHovered
                  ? 1.7
                  : 3.6,

              repeat: isFrozen
                ? 0
                : Infinity,

              ease: "easeInOut",
            }}
          />

          {/* AURIS logo + AURA identity */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center"
            animate={{
              opacity:
                isOpening ||
                isEntering
                  ? 0
                  : 1,

              scale: isHovered
                ? 1.05
                : 1,
            }}
            transition={{
              duration: 0.3,
            }}
          >
            <Image
              src="/images/auris-logo.png"
              alt="AURIS"
              width={70}
              height={70}
              priority
              style={{
                filter:
                  "drop-shadow(0 0 14px rgba(56,189,248,0.95))",
              }}
            />

            <div
              style={{
                marginTop: 3,
                color: "#ffffff",
                fontSize: 18,
                fontWeight: 900,
                letterSpacing: 3,
                lineHeight: 1,
              }}
            >
              AURA
            </div>

            <div
              style={{
                marginTop: 6,
                color: "#67e8f9",
                fontSize: 8,
                fontWeight: 800,
                letterSpacing: 1.8,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {isHovered
                ? "ENTER"
                : active
                  ? "AURIS INTELLIGENCE"
                  : "APPROACH"}
            </div>
          </motion.div>
        </motion.div>

        {/* AURA iris transition */}
        <motion.div
          className="pointer-events-none absolute inset-[23%] overflow-hidden rounded-full"
          initial={false}
          animate={{
            opacity:
              isOpening ||
              isEntering
                ? 1
                : 0,

            scale: isOpening
              ? [0.15, 1]
              : isEntering
                ? 4
                : 0.15,
          }}
          transition={{
            duration: isEntering
              ? 1.1
              : 0.85,

            ease:
              [0.22, 1, 0.36, 1],
          }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff_0%,#a5f3fc_14%,#22d3ee_34%,#7c3aed_58%,#020617_78%)]" />

          {Array.from({
            length: 8,
          }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute left-1/2 top-1/2 h-[64%] w-[38%] origin-bottom rounded-[100%_10%_100%_10%] border border-cyan-100/25 bg-slate-950/90"
              style={{
                transform: `
                  translate(-50%, -100%)
                  rotate(${index * 45}deg)
                `,
              }}
              animate={{
                rotate: isOpening
                  ? index * 45 + 58
                  : index * 45,

                y: isOpening
                  ? -26
                  : 0,

                scaleY: isOpening
                  ? 0.7
                  : 1,
              }}
              transition={{
                duration: 0.85,

                delay:
                  index * 0.025,

                ease:
                  [0.22, 1, 0.36, 1],
              }}
            />
          ))}

          <motion.div
            className="absolute left-1/2 top-1/2 h-[20%] w-[20%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            style={{
              boxShadow:
                "0 0 45px white, 0 0 100px rgba(103,232,249,0.95)",
            }}
            animate={{
              scale: isOpening
                ? [0.2, 3]
                : 0.2,

              opacity: isOpening
                ? [0.65, 1]
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