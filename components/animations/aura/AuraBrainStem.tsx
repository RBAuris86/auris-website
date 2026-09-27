"use client";

import { motion } from "framer-motion";

import type { AuraPhase } from "./auraTypes";

type AuraBrainStemProps = {
  phase: AuraPhase;
};

const divisionChannels = [
  {
    name: "TERRA",
    color: "#22c55e",
    subtitle: "Environmental Intelligence",
    rotation: -52,
  },
  {
    name: "ATLAS",
    color: "#3b82f6",
    subtitle: "Navigation & Spatial Systems",
    rotation: -32,
  },
  {
    name: "MEDICAL",
    color: "#ef4444",
    subtitle: "Clinical Intelligence",
    rotation: -12,
  },
  {
    name: "HAVEN",
    color: "#c49a6c",
    subtitle: "AI & Robotics",
    rotation: 12,
  },
  {
    name: "ENTERPRISE",
    color: "#ffffff",
    subtitle: "Digital Infrastructure",
    rotation: 32,
  },
  {
    name: "ORBIT",
    color: "#8b5cf6",
    subtitle: "Space & Orbital Systems",
    rotation: 52,
  },
];

const neuralFibers = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  rotation: (index * 360) / 28,
  width: 1 + (index % 3),
  length: 44 + (index % 5) * 7,
  delay: (index % 10) * 0.08,
}));

const dataFragments = [
  "ATMOSPHERIC DATA",
  "LIVE TELEMETRY",
  "INDOOR NAVIGATION",
  "SPATIAL INTELLIGENCE",
  "CLINICAL RECORDS",
  "PATIENT WORKFLOWS",
  "ROBOTIC ASSISTANCE",
  "INDEPENDENT LIVING",
  "CLOUD SYSTEMS",
  "DIGITAL EXPERIENCES",
  "ORBITAL TELEMETRY",
  "EARTH OBSERVATION",
];

export default function AuraBrainStem({
  phase,
}: AuraBrainStemProps) {
  const isActive =
    phase === "tunnel" || phase === "arrival";

  const isArriving = phase === "arrival";

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[70] overflow-hidden bg-[#01030a]"
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
      {/* Deep neural tunnel */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at center,
              rgba(255,255,255,0.96) 0%,
              rgba(165,243,252,0.72) 3%,
              rgba(34,211,238,0.2) 11%,
              rgba(30,41,59,0.76) 34%,
              rgba(2,6,23,0.98) 76%
            )
          `,
        }}
        animate={{
          scale: isArriving ? 1.8 : [1, 1.12, 1],
          opacity: isArriving ? 0.15 : 1,
        }}
        transition={{
          duration: isArriving ? 1.1 : 4,
          repeat: isArriving ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Tunnel depth rings */}
      {Array.from({ length: 14 }).map((_, index) => (
        <motion.div
          key={`depth-ring-${index}`}
          className="absolute left-1/2 top-1/2 rounded-full border border-cyan-100/10"
          style={{
            width: 110 + index * 92,
            height: 110 + index * 92,
            translateX: "-50%",
            translateY: "-50%",
            boxShadow:
              index % 3 === 0
                ? "0 0 22px rgba(103,232,249,0.1)"
                : undefined,
          }}
          animate={{
            scale: isArriving
              ? 5
              : [0.15, 1.45],
            opacity: isArriving
              ? 0
              : [0, 0.34, 0],
          }}
          transition={{
            duration: isArriving
              ? 0.9
              : 2.7 + (index % 4) * 0.35,
            delay: index * 0.13,
            repeat: isArriving ? 0 : Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Neural fibers */}
      <div className="absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2">
        {neuralFibers.map((fiber) => (
          <motion.div
            key={fiber.id}
            className="absolute left-1/2 top-1/2 origin-bottom"
            style={{
              width: fiber.width,
              height: `${fiber.length}%`,
              background:
                fiber.id % 5 === 0
                  ? "linear-gradient(to top, transparent, rgba(255,255,255,0.8))"
                  : "linear-gradient(to top, transparent, rgba(103,232,249,0.5))",
              boxShadow:
                fiber.id % 5 === 0
                  ? "0 0 12px rgba(255,255,255,0.55)"
                  : "0 0 10px rgba(34,211,238,0.45)",
              transform: `
                translate(-50%, -100%)
                rotate(${fiber.rotation}deg)
              `,
            }}
            animate={{
              scaleY: isArriving
                ? 5
                : [0.25, 1.15],
              opacity: isArriving
                ? 0
                : [0, 0.65, 0],
            }}
            transition={{
              duration: isArriving
                ? 0.95
                : 1.8 + (fiber.id % 6) * 0.22,
              delay: fiber.delay,
              repeat: isArriving ? 0 : Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Division channels */}
      <div className="absolute inset-0">
        {divisionChannels.map((channel, index) => (
          <motion.div
            key={channel.name}
            className="absolute left-1/2 top-1/2 h-[125%] w-[5px] origin-bottom"
            style={{
              background: `linear-gradient(
                to top,
                transparent 2%,
                ${channel.color}22 18%,
                ${channel.color} 72%,
                #ffffff 100%
              )`,
              boxShadow:
                channel.color === "#ffffff"
                  ? "0 0 26px rgba(255,255,255,0.9)"
                  : `0 0 26px ${channel.color}`,
              transform: `
                translate(-50%, -100%)
                rotate(${channel.rotation}deg)
              `,
            }}
            animate={{
              scaleY: isArriving
                ? 4
                : [0.65, 1.12, 0.65],
              opacity: isArriving
                ? 0
                : [0.28, 0.95, 0.28],
            }}
            transition={{
              duration: isArriving
                ? 0.9
                : 2.4 + index * 0.22,
              delay: index * 0.08,
              repeat: isArriving ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            {Array.from({ length: 7 }).map((_, packetIndex) => (
              <motion.span
                key={packetIndex}
                className="absolute left-1/2 h-3 w-3 -translate-x-1/2 rounded-full"
                style={{
                  bottom: `${packetIndex * 14}%`,
                  background: channel.color,
                  boxShadow:
                    channel.color === "#ffffff"
                      ? "0 0 18px rgba(255,255,255,1)"
                      : `0 0 18px ${channel.color}`,
                }}
                animate={{
                  y: isArriving
                    ? -700
                    : [280, -760],
                  opacity: isArriving
                    ? 0
                    : [0, 1, 0],
                  scale: isArriving
                    ? 4
                    : [0.5, 1.8, 0.5],
                }}
                transition={{
                  duration: isArriving
                    ? 0.7
                    : 2.2 + (packetIndex % 3) * 0.3,
                  delay:
                    index * 0.16 +
                    packetIndex * 0.28,
                  repeat: isArriving ? 0 : Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      {/* Division memories */}
      {divisionChannels.map((channel, index) => {
        const isLeft = index < 3;

        return (
          <motion.div
            key={`memory-${channel.name}`}
            className="absolute top-1/2 rounded-2xl border px-5 py-4 backdrop-blur-md"
            style={{
              left: isLeft ? `${7 + index * 12}%` : undefined,
              right: !isLeft
                ? `${7 + (5 - index) * 12}%`
                : undefined,
              borderColor: `${channel.color}44`,
              background: "rgba(2,6,23,0.72)",
              boxShadow:
                channel.color === "#ffffff"
                  ? "0 0 30px rgba(255,255,255,0.1)"
                  : `0 0 30px ${channel.color}18`,
            }}
            animate={{
              x: isArriving
                ? isLeft
                  ? -500
                  : 500
                : isLeft
                  ? [40, -60]
                  : [-40, 60],
              y: [
                -260 + index * 98,
                -320 + index * 98,
              ],
              scale: isArriving
                ? 2
                : [0.72, 1.08],
              opacity: isArriving
                ? 0
                : [0, 0.9, 0],
              filter: isArriving
                ? "blur(14px)"
                : [
                    "blur(8px)",
                    "blur(0px)",
                    "blur(8px)",
                  ],
            }}
            transition={{
              duration: isArriving
                ? 0.8
                : 4.2 + index * 0.35,
              delay: index * 0.34,
              repeat: isArriving ? 0 : Infinity,
              ease: "easeInOut",
            }}
          >
            <div
              className="text-[9px] font-black tracking-[0.32em]"
              style={{
                color: channel.color,
              }}
            >
              {channel.name}
            </div>

            <div className="mt-2 text-[8px] tracking-[0.12em] text-slate-200/65">
              {channel.subtitle}
            </div>
          </motion.div>
        );
      })}

      {/* Flying data fragments */}
      {dataFragments.map((fragment, index) => (
        <motion.div
          key={fragment}
          className="absolute left-1/2 top-1/2 whitespace-nowrap font-mono text-[8px] tracking-[0.26em]"
          style={{
            color:
              divisionChannels[
                index % divisionChannels.length
              ].color,
          }}
          animate={{
            x: isArriving
              ? (index % 2 === 0 ? -1 : 1) * 900
              : [
                  (index % 2 === 0 ? -1 : 1) *
                    (190 + (index % 4) * 70),
                  (index % 2 === 0 ? -1 : 1) *
                    (640 + (index % 4) * 90),
                ],
            y: isArriving
              ? (index % 3 - 1) * 700
              : [
                  (index % 5 - 2) * 80,
                  (index % 5 - 2) * 210,
                ],
            scale: isArriving
              ? 4
              : [0.4, 1.7],
            opacity: isArriving
              ? 0
              : [0, 0.72, 0],
            filter: [
              "blur(8px)",
              "blur(0px)",
              "blur(8px)",
            ],
          }}
          transition={{
            duration: isArriving
              ? 0.75
              : 3 + (index % 5) * 0.35,
            delay: index * 0.18,
            repeat: isArriving ? 0 : Infinity,
            ease: "linear",
          }}
        >
          {fragment}
        </motion.div>
      ))}

      {/* Central destination */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
        style={{
          boxShadow: `
            0 0 50px rgba(255,255,255,1),
            0 0 130px rgba(103,232,249,0.95),
            0 0 240px rgba(139,92,246,0.7)
          `,
        }}
        animate={{
          scale: isArriving
            ? [1, 35]
            : [0.7, 1.25, 0.7],
          opacity: isArriving
            ? [1, 1]
            : [0.72, 1, 0.72],
        }}
        transition={{
          duration: isArriving ? 1.05 : 2.8,
          repeat: isArriving ? 0 : Infinity,
          ease: isArriving
            ? [0.76, 0, 0.82, 0]
            : "easeInOut",
        }}
      />

      {/* Speed streaks */}
      {Array.from({ length: 52 }).map((_, index) => {
        const angle = (index * 360) / 52;
        const distance = 250 + (index % 8) * 38;

        return (
          <motion.span
            key={`speed-${index}`}
            className="absolute left-1/2 top-1/2 h-[2px] origin-left rounded-full bg-cyan-100"
            style={{
              width: 30 + (index % 5) * 16,
              rotate: angle,
              boxShadow:
                index % 6 === 0
                  ? "0 0 12px rgba(255,255,255,0.9)"
                  : "0 0 8px rgba(103,232,249,0.65)",
            }}
            animate={{
              x: isArriving
                ? [0, distance * 3]
                : [0, distance],
              scaleX: isArriving
                ? [0.4, 4]
                : [0.2, 1.8],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: isArriving
                ? 0.6
                : 1.5 + (index % 4) * 0.2,
              delay: (index % 13) * 0.07,
              repeat: isArriving ? 0 : Infinity,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Arrival flash */}
      <motion.div
        className="absolute inset-0 bg-white"
        animate={{
          opacity: isArriving
            ? [0, 1]
            : 0,
        }}
        transition={{
          duration: 1,
          ease: "easeIn",
        }}
      />
    </motion.div>
  );
}