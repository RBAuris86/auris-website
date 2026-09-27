"use client";

import { motion } from "framer-motion";

import type { AuraPhase } from "./auraTypes";

type AuraStreamsProps = {
  phase: AuraPhase;
  isHovered: boolean;
};

const divisionStreams = [
  {
    name: "Terra",
    color: "#22c55e",
    angle: 215,
  },
  {
    name: "Atlas",
    color: "#3b82f6",
    angle: 255,
  },
  {
    name: "Medical",
    color: "#ef4444",
    angle: 300,
  },
  {
    name: "Haven",
    color: "#c49a6c",
    angle: 25,
  },
  {
    name: "Enterprise",
    color: "#ffffff",
    angle: 90,
  },
  {
    name: "Orbit",
    color: "#8b5cf6",
    angle: 145,
  },
];

export default function AuraStreams({
  phase,
  isHovered,
}: AuraStreamsProps) {
  const isSequenceActive =
    phase !== "idle" && phase !== "hovering";

  const isEntering =
    phase === "entering" ||
    phase === "tunnel" ||
    phase === "arrival";

  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 z-10 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2"
      aria-hidden="true"
      animate={{
        scale: isEntering ? 2.8 : 1,
        opacity: isEntering ? 0 : 1,
      }}
      transition={{
        duration: 1.1,
        ease: "easeIn",
      }}
    >
      {divisionStreams.map((stream, streamIndex) => (
        <motion.div
          key={stream.name}
          className="absolute left-1/2 top-1/2 h-[47%] w-[3px] origin-bottom"
          style={{
            transform: `
              translate(-50%, -100%)
              rotate(${stream.angle}deg)
            `,
            background: `linear-gradient(
              to top,
              transparent 0%,
              ${stream.color}18 14%,
              ${stream.color}66 48%,
              ${stream.color} 82%,
              #ffffff 100%
            )`,
            boxShadow:
              stream.color === "#ffffff"
                ? "0 0 28px rgba(255,255,255,0.85)"
                : `0 0 26px ${stream.color}`,
          }}
          animate={{
            opacity: isSequenceActive
              ? 0.2
              : isHovered
                ? [0.45, 1, 0.45]
                : [0.18, 0.62, 0.18],
            scaleY: isSequenceActive
              ? 0.7
              : isHovered
                ? [0.88, 1.18, 0.88]
                : [0.8, 1, 0.8],
          }}
          transition={{
            duration: isSequenceActive
              ? 0.3
              : 3.1 + streamIndex * 0.3,
            repeat: isSequenceActive ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Stream packets */}
          {Array.from({ length: 7 }).map((_, packetIndex) => (
            <motion.span
              key={packetIndex}
              className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
              style={{
                bottom: `${packetIndex * 14}%`,
                background: stream.color,
                boxShadow:
                  stream.color === "#ffffff"
                    ? "0 0 15px rgba(255,255,255,1)"
                    : `0 0 15px ${stream.color}`,
              }}
              animate={
                isSequenceActive
                  ? {
                      y: 0,
                      opacity: 0.2,
                      scale: 0.7,
                    }
                  : {
                      y: [140, -330],
                      opacity: [0, 1, 0],
                      scale: isHovered
                        ? [0.5, 1.8, 0.5]
                        : [0.45, 1.25, 0.45],
                    }
              }
              transition={{
                duration: isHovered ? 1.65 : 3,
                delay:
                  streamIndex * 0.16 +
                  packetIndex * 0.34,
                repeat: isSequenceActive ? 0 : Infinity,
                ease: "linear",
              }}
            />
          ))}

          {/* Stream division label */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[170%] whitespace-nowrap rounded-full border px-3 py-1.5 backdrop-blur-md"
            style={{
              borderColor: `${stream.color}44`,
              background: "rgba(2,6,23,0.72)",
              boxShadow:
                stream.color === "#ffffff"
                  ? "0 0 20px rgba(255,255,255,0.12)"
                  : `0 0 20px ${stream.color}18`,
            }}
            animate={{
              opacity: isSequenceActive
                ? 0
                : isHovered
                  ? [0.55, 1, 0.55]
                  : [0.25, 0.58, 0.25],
              scale: isHovered
                ? [0.92, 1.08, 0.92]
                : [0.94, 1, 0.94],
            }}
            transition={{
              duration: 3 + streamIndex * 0.25,
              repeat: isSequenceActive ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <span
              className="text-[8px] font-black tracking-[0.26em]"
              style={{
                color: stream.color,
              }}
            >
              {stream.name.toUpperCase()}
            </span>
          </motion.div>

          {/* Energy bloom near Nexus */}
          <motion.span
            className="absolute bottom-0 left-1/2 h-12 w-12 -translate-x-1/2 translate-y-1/2 rounded-full blur-xl"
            style={{
              background: stream.color,
            }}
            animate={{
              opacity: isSequenceActive
                ? 0.12
                : isHovered
                  ? [0.22, 0.62, 0.22]
                  : [0.1, 0.3, 0.1],
              scale: isHovered
                ? [0.7, 1.4, 0.7]
                : [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 2.5 + streamIndex * 0.25,
              repeat: isSequenceActive ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Central conversion ring */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100/15"
        style={{
          boxShadow:
            "0 0 38px rgba(34,211,238,0.2), inset 0 0 28px rgba(103,232,249,0.08)",
        }}
        animate={{
          rotate: isSequenceActive ? 0 : 360,
          scale: isHovered
            ? [0.92, 1.12, 0.92]
            : [0.96, 1.04, 0.96],
          opacity: isSequenceActive
            ? 0.22
            : [0.3, 0.72, 0.3],
        }}
        transition={{
          rotate: {
            duration: isHovered ? 11 : 19,
            repeat: isSequenceActive ? 0 : Infinity,
            ease: "linear",
          },
          scale: {
            duration: 3,
            repeat: isSequenceActive ? 0 : Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 3,
            repeat: isSequenceActive ? 0 : Infinity,
            ease: "easeInOut",
          },
        }}
      />

      {/* White processed-intelligence pulse */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[22px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,255,255,0.95), rgba(103,232,249,0.5) 35%, transparent 72%)",
        }}
        animate={{
          scale: isSequenceActive
            ? 0.65
            : isHovered
              ? [0.75, 1.5, 0.75]
              : [0.78, 1.18, 0.78],
          opacity: isSequenceActive
            ? 0.25
            : isHovered
              ? [0.4, 0.95, 0.4]
              : [0.22, 0.58, 0.22],
        }}
        transition={{
          duration: isHovered ? 1.8 : 3.8,
          repeat: isSequenceActive ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
}