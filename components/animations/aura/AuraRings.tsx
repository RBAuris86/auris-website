"use client";

import { motion } from "framer-motion";

import type { AuraPhase } from "./auraTypes";

type AuraRingsProps = {
  phase: AuraPhase;
  isHovered: boolean;
};

const rings = [
  {
    inset: "0%",
    duration: 44,
    direction: 360,
    style: "solid",
    color: "rgba(103,232,249,0.32)",
    width: 1,
  },
  {
    inset: "7%",
    duration: 36,
    direction: -360,
    style: "dashed",
    color: "rgba(255,255,255,0.2)",
    width: 1,
  },
  {
    inset: "14%",
    duration: 29,
    direction: 360,
    style: "solid",
    color: "rgba(139,92,246,0.28)",
    width: 1,
  },
  {
    inset: "22%",
    duration: 23,
    direction: -360,
    style: "dashed",
    color: "rgba(59,130,246,0.3)",
    width: 1,
  },
  {
    inset: "31%",
    duration: 17,
    direction: 360,
    style: "solid",
    color: "rgba(103,232,249,0.38)",
    width: 1,
  },
];

const orbitMarkers = Array.from(
  { length: 8 },
  (_, index) => ({
    id: index,
    rotation: index * 45,
  }),
);

export default function AuraRings({
  phase,
  isHovered,
}: AuraRingsProps) {
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
    <motion.div
      className="pointer-events-none absolute inset-0"
      aria-hidden="true"
      animate={{
        scale: isCompressing
          ? 0.68
          : isOpening
            ? 1.16
            : isEntering
              ? 4.8
              : isHovered
                ? 1.055
                : 1,

        opacity: isEntering ? 0 : 1,
      }}
      transition={{
        duration: isEntering ? 1.1 : 0.6,

        ease: isEntering
          ? [0.76, 0, 0.82, 0]
          : [0.22, 1, 0.36, 1],
      }}
    >
      {rings.map((ring, ringIndex) => (
        <motion.div
          key={ringIndex}
          className="absolute rounded-full border"
          style={{
            inset: ring.inset,
            borderColor: ring.color,
            borderStyle: ring.style,
            borderWidth: ring.width,

            boxShadow:
              ringIndex === 0
                ? `
                  0 0 34px rgba(34,211,238,0.14),
                  inset 0 0 28px rgba(34,211,238,0.06)
                `
                : undefined,
          }}
          animate={{
            rotate: isFrozen
              ? 0
              : ring.direction,

            opacity: isFrozen
              ? 0.42
              : isHovered
                ? [0.48, 0.95, 0.48]
                : [0.25, 0.62, 0.25],
          }}
          transition={{
            rotate: {
              duration: isHovered
                ? ring.duration * 0.65
                : ring.duration,

              repeat: isFrozen
                ? 0
                : Infinity,

              ease: "linear",
            },

            opacity: {
              duration: isFrozen
                ? 0.22
                : 3.2 +
                  ringIndex * 0.6,

              repeat: isFrozen
                ? 0
                : Infinity,

              ease: "easeInOut",
            },
          }}
        >
          {orbitMarkers.map((marker) => {
            const radius =
              292 -
              ringIndex * 42;

            return (
              <motion.span
                key={marker.id}
                className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full"
                style={{
                  background:
                    marker.id % 3 === 0
                      ? "#ffffff"
                      : "#a5f3fc",

                  boxShadow:
                    marker.id % 3 === 0
                      ? "0 0 12px rgba(255,255,255,0.95)"
                      : "0 0 10px rgba(103,232,249,0.9)",

                  transform: `
                    translate(-50%, -50%)
                    rotate(${marker.rotation}deg)
                    translateY(-${radius}px)
                  `,
                }}
                animate={{
                  scale: isFrozen
                    ? 0.75
                    : isHovered
                      ? [
                          0.7,
                          1.75,
                          0.7,
                        ]
                      : [
                          0.7,
                          1.2,
                          0.7,
                        ],

                  opacity: isFrozen
                    ? 0.35
                    : [
                        0.35,
                        1,
                        0.35,
                      ],
                }}
                transition={{
                  duration: isFrozen
                    ? 0.2
                    : 2.2 +
                      ((marker.id +
                        ringIndex) %
                        4) *
                        0.35,

                  delay:
                    ringIndex * 0.12 +
                    marker.id * 0.08,

                  repeat: isFrozen
                    ? 0
                    : Infinity,

                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>
      ))}

      {/* AURA segmented intelligence ring */}
      <motion.div
        className="absolute inset-[11%] rounded-full"
        style={{
          background: `
            conic-gradient(
              from 0deg,
              rgba(103,232,249,0.55) 0deg 12deg,
              transparent 12deg 36deg,
              rgba(255,255,255,0.3) 36deg 51deg,
              transparent 51deg 82deg,
              rgba(139,92,246,0.45) 82deg 104deg,
              transparent 104deg 142deg,
              rgba(59,130,246,0.45) 142deg 164deg,
              transparent 164deg 206deg,
              rgba(103,232,249,0.5) 206deg 228deg,
              transparent 228deg 268deg,
              rgba(255,255,255,0.28) 268deg 286deg,
              transparent 286deg 326deg,
              rgba(139,92,246,0.4) 326deg 346deg,
              transparent 346deg 360deg
            )
          `,

          maskImage:
            "radial-gradient(circle, transparent 76%, black 77%)",

          WebkitMaskImage:
            "radial-gradient(circle, transparent 76%, black 77%)",

          filter:
            "drop-shadow(0 0 9px rgba(103,232,249,0.4))",
        }}
        animate={{
          rotate: isFrozen
            ? 0
            : -360,

          opacity: isOpening
            ? 0.2
            : isHovered
              ? [0.5, 1, 0.5]
              : [0.28, 0.64, 0.28],
        }}
        transition={{
          rotate: {
            duration: isHovered
              ? 13
              : 23,

            repeat: isFrozen
              ? 0
              : Infinity,

            ease: "linear",
          },

          opacity: {
            duration: isFrozen
              ? 0.25
              : 3.4,

            repeat: isFrozen
              ? 0
              : Infinity,

            ease: "easeInOut",
          },
        }}
      />

      {/* Inner AURA energy ring */}
      <motion.div
        className="absolute inset-[36%] rounded-full border border-cyan-100/30"
        style={{
          boxShadow: `
            0 0 24px rgba(103,232,249,0.2),
            inset 0 0 18px rgba(103,232,249,0.1)
          `,
        }}
        animate={{
          scale: isOpening
            ? [0.6, 2.8]
            : isFrozen
              ? 0.8
              : isHovered
                ? [
                    0.88,
                    1.16,
                    0.88,
                  ]
                : [
                    0.92,
                    1.06,
                    0.92,
                  ],

          opacity: isOpening
            ? [0.9, 0]
            : isFrozen
              ? 0.4
              : [
                  0.35,
                  0.9,
                  0.35,
                ],
        }}
        transition={{
          duration: isOpening
            ? 0.85
            : isFrozen
              ? 0.25
              : 3,

          repeat:
            isOpening ||
            isFrozen
              ? 0
              : Infinity,

          ease: "easeInOut",
        }}
      />

      {/* AURA scan sweep */}
      {!isFrozen && (
        <motion.div
          className="absolute inset-[4%] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg 315deg, rgba(165,243,252,0.28) 338deg, transparent 360deg)",

            maskImage:
              "radial-gradient(circle, transparent 84%, black 85%)",

            WebkitMaskImage:
              "radial-gradient(circle, transparent 84%, black 85%)",
          }}
          animate={{
            rotate: 360,

            opacity: isHovered
              ? [
                  0.3,
                  0.9,
                  0.3,
                ]
              : [
                  0.15,
                  0.42,
                  0.15,
                ],
          }}
          transition={{
            rotate: {
              duration: isHovered
                ? 5.5
                : 10,

              repeat: Infinity,

              ease: "linear",
            },

            opacity: {
              duration: 2.4,

              repeat: Infinity,

              ease: "easeInOut",
            },
          }}
        />
      )}
    </motion.div>
  );
}