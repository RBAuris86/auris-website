"use client";

import { motion } from "framer-motion";

import type { AuraPhase } from "./auraTypes";

type AuraPortalProps = {
  phase: AuraPhase;
};

const irisBlades = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  rotation: index * 45,
}));

const portalParticles = Array.from({ length: 36 }, (_, index) => ({
  id: index,
  angle: index * 10,
  distance: 95 + (index % 6) * 20,
  size: 2 + (index % 3),
  delay: (index % 12) * 0.06,
}));

export default function NexusPortal({
  phase,
}: AuraPortalProps) {
  const isVisible =
    phase === "opening" ||
    phase === "entering" ||
    phase === "tunnel";

  const isOpening = phase === "opening";

  const isEntering =
    phase === "entering" ||
    phase === "tunnel";

  return (
    <motion.div
      className="
        pointer-events-none
        absolute inset-0 z-[60]
        flex items-center justify-center
        overflow-hidden
      "
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? "visible" : "hidden",
      }}
      transition={{
        opacity: {
          duration: 0.25,
        },
        visibility: {
          duration: 0,
        },
      }}
      aria-hidden="true"
    >
      {/* Portal atmosphere */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[min(82vw,760px)]
          w-[min(82vw,760px)]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-[80px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.82) 0%, rgba(103,232,249,0.52) 18%, rgba(34,211,238,0.28) 38%, rgba(124,58,237,0.24) 58%, transparent 76%)",
        }}
        animate={{
          scale: isOpening
            ? [0.18, 1]
            : isEntering
              ? [1, 4.5]
              : 0.18,
          opacity: isOpening
            ? [0, 0.9]
            : isEntering
              ? [0.9, 0]
              : 0,
        }}
        transition={{
          duration: isEntering ? 1.15 : 0.85,
          ease: isEntering
            ? [0.76, 0, 0.82, 0]
            : [0.22, 1, 0.36, 1],
        }}
      />

      {/* Outer containment ring */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[min(72vw,620px)]
          w-[min(72vw,620px)]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border border-cyan-100/30
        "
        style={{
          boxShadow: `
            0 0 36px rgba(103,232,249,0.34),
            inset 0 0 34px rgba(34,211,238,0.16)
          `,
        }}
        animate={{
          rotate: isOpening ? [0, 18] : 18,
          scale: isOpening
            ? [0.72, 1]
            : isEntering
              ? [1, 5]
              : 0.72,
          opacity: isEntering ? [1, 0] : 1,
        }}
        transition={{
          duration: isEntering ? 1.1 : 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Segmented outer ring */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[min(64vw,550px)]
          w-[min(64vw,550px)]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
        "
        style={{
          background: `
            conic-gradient(
              from 0deg,
              rgba(103,232,249,0.55) 0deg 14deg,
              transparent 14deg 38deg,
              rgba(255,255,255,0.38) 38deg 55deg,
              transparent 55deg 88deg,
              rgba(139,92,246,0.48) 88deg 110deg,
              transparent 110deg 150deg,
              rgba(34,211,238,0.55) 150deg 172deg,
              transparent 172deg 218deg,
              rgba(255,255,255,0.34) 218deg 238deg,
              transparent 238deg 278deg,
              rgba(139,92,246,0.46) 278deg 300deg,
              transparent 300deg 338deg,
              rgba(103,232,249,0.5) 338deg 360deg
            )
          `,
          maskImage:
            "radial-gradient(circle, transparent 70%, black 71%)",
          WebkitMaskImage:
            "radial-gradient(circle, transparent 70%, black 71%)",
          filter:
            "drop-shadow(0 0 12px rgba(103,232,249,0.45))",
        }}
        animate={{
          rotate: isOpening ? [0, -45] : -45,
          scale: isOpening
            ? [0.65, 1]
            : isEntering
              ? [1, 5.5]
              : 0.65,
          opacity: isEntering ? [1, 0] : 1,
        }}
        transition={{
          duration: isEntering ? 1.05 : 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* Iris assembly */}
      <motion.div
        className="
          absolute left-1/2 top-1/2
          h-[min(54vw,460px)]
          w-[min(54vw,460px)]
          -translate-x-1/2
          -translate-y-1/2
          overflow-hidden
          rounded-full
          border border-cyan-100/30
          bg-slate-950/80
          backdrop-blur-xl
        "
        style={{
          boxShadow: `
            inset 0 0 70px rgba(34,211,238,0.18),
            0 0 55px rgba(103,232,249,0.32),
            0 0 120px rgba(124,58,237,0.2)
          `,
        }}
        animate={{
          scale: isOpening
            ? [0.25, 1]
            : isEntering
              ? [1, 7]
              : 0.25,
          opacity: isEntering ? [1, 0] : 1,
        }}
        transition={{
          duration: isEntering ? 1.2 : 0.85,
          ease: isEntering
            ? [0.76, 0, 0.82, 0]
            : [0.22, 1, 0.36, 1],
        }}
      >
        {/* Portal energy */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle,
                #ffffff 0%,
                #dffbff 8%,
                #67e8f9 20%,
                #22d3ee 34%,
                rgba(59,130,246,0.82) 48%,
                rgba(124,58,237,0.72) 62%,
                rgba(2,6,23,0.98) 80%
              )
            `,
          }}
        />

        {/* Iris blades */}
        {irisBlades.map((blade) => (
          <motion.div
            key={blade.id}
            className="
              absolute left-1/2 top-1/2
              h-[62%] w-[42%]
              origin-bottom
              rounded-[100%_12%_100%_12%]
              border border-cyan-100/20
              bg-slate-950/90
            "
            style={{
              transform: `
                translate(-50%, -100%)
                rotate(${blade.rotation}deg)
              `,
              background: `
                linear-gradient(
                  135deg,
                  rgba(15,23,42,0.98),
                  rgba(30,41,59,0.88) 50%,
                  rgba(8,145,178,0.26)
                )
              `,
              boxShadow:
                "inset 0 0 24px rgba(103,232,249,0.12)",
            }}
            animate={{
              rotate: isOpening
                ? blade.rotation + 58
                : blade.rotation,
              y: isOpening ? -34 : 0,
              scaleY: isOpening ? 0.72 : 1,
              opacity: isOpening ? [1, 0.74] : 1,
            }}
            transition={{
              duration: 0.9,
              delay: blade.id * 0.025,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        {/* Portal throat */}
        <motion.div
          className="
            absolute left-1/2 top-1/2
            h-[30%] w-[30%]
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
          "
          style={{
            background:
              "radial-gradient(circle, #ffffff 0%, #cffafe 16%, #67e8f9 34%, #22d3ee 52%, rgba(124,58,237,0.75) 70%, rgba(2,6,23,0.98) 100%)",
            boxShadow: `
              0 0 35px rgba(255,255,255,0.95),
              0 0 80px rgba(34,211,238,0.95),
              0 0 135px rgba(124,58,237,0.72)
            `,
          }}
          animate={{
            scale: isOpening
              ? [0.05, 1.1]
              : isEntering
                ? [1.1, 8]
                : 0.05,
            opacity: isEntering ? [1, 0] : 1,
          }}
          transition={{
            duration: isEntering ? 1.1 : 0.78,
            ease: isEntering
              ? [0.76, 0, 0.82, 0]
              : [0.22, 1, 0.36, 1],
          }}
        />

        {/* Energy spirals */}
        {Array.from({ length: 4 }).map((_, index) => (
          <motion.div
            key={`spiral-${index}`}
            className="
              absolute left-1/2 top-1/2
              rounded-full
              border border-cyan-100/20
            "
            style={{
              width: `${42 + index * 15}%`,
              height: `${42 + index * 15}%`,
              translateX: "-50%",
              translateY: "-50%",
              borderStyle:
                index % 2 === 0 ? "dashed" : "solid",
            }}
            animate={{
              rotate:
                index % 2 === 0 ? 360 : -360,
              scale: isOpening
                ? [0.8, 1.08, 0.8]
                : 1,
              opacity: isEntering
                ? [0.5, 0]
                : [0.18, 0.55, 0.18],
            }}
            transition={{
              rotate: {
                duration: 8 + index * 3,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 2.4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: isEntering
                  ? 0.8
                  : 2.4 + index * 0.4,
                repeat: isEntering ? 0 : Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}
      </motion.div>

      {/* Portal particles */}
      <div
        className="
          absolute left-1/2 top-1/2
          h-[min(72vw,620px)]
          w-[min(72vw,620px)]
          -translate-x-1/2
          -translate-y-1/2
        "
      >
        {portalParticles.map((particle) => (
          <motion.span
            key={particle.id}
            className="
              absolute left-1/2 top-1/2
              rounded-full
              bg-cyan-100
            "
            style={{
              width: particle.size,
              height: particle.size,
              boxShadow:
                "0 0 12px rgba(165,243,252,0.95)",
            }}
            initial={false}
            animate={{
              x: isOpening
                ? [
                    Math.cos(
                      (particle.angle * Math.PI) / 180,
                    ) * particle.distance,
                    0,
                  ]
                : 0,
              y: isOpening
                ? [
                    Math.sin(
                      (particle.angle * Math.PI) / 180,
                    ) * particle.distance,
                    0,
                  ]
                : 0,
              opacity: isOpening
                ? [0, 1, 0.2]
                : 0,
              scale: isEntering
                ? [1, 5]
                : [0.6, 1.4, 0.6],
            }}
            transition={{
              duration: isEntering ? 0.8 : 0.95,
              delay: particle.delay,
              ease: isEntering
                ? "easeIn"
                : [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      {/* Screen pull */}
      <motion.div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_center,transparent_0%,rgba(1,3,10,0.15)_38%,rgba(1,3,10,0.92)_100%)]
        "
        animate={{
          opacity: isEntering ? [0, 1] : 0,
          scale: isEntering ? [1, 1.45] : 1,
        }}
        transition={{
          duration: 1.05,
          ease: [0.76, 0, 0.82, 0],
        }}
      />

      {/* Final white transition */}
      <motion.div
        className="absolute inset-0 bg-white"
        animate={{
          opacity:
            phase === "tunnel"
              ? [0, 1]
              : 0,
        }}
        transition={{
          duration: 0.55,
          ease: "easeIn",
        }}
      />
    </motion.div>
  );
}