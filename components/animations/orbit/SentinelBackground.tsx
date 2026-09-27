"use client";

import { motion } from "framer-motion";
import DefaultOrbitBackground from "./DefaultOrbitBackground";

type SentinelBackgroundProps = {
  accent: string;
};

export default function SentinelBackground({
  accent,
}: SentinelBackgroundProps) {
  const satellites = Array.from({ length: 5 }, (_, i) => ({
    id: i,
    size: 220 + i * 55,
    duration: 28 + i * 8,
    delay: i * 0.8,
  }));

  return (
    <>
      <DefaultOrbitBackground accent={accent} />

      {/* Surveillance Rings */}
      {satellites.map((sat) => (
        <motion.div
          key={sat.id}
          className="absolute left-1/2 top-1/2"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: sat.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <motion.div
            className="relative border border-cyan-400/20 rounded-full"
            style={{
              width: sat.size,
              height: sat.size,
              marginLeft: -sat.size / 2,
              marginTop: -sat.size / 2,
            }}
          >
            {/* Satellite */}
            <div className="absolute left-1/2 -top-2 -translate-x-1/2">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <div className="h-3 w-3 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(34,211,238,.8)]" />
                <div className="absolute -left-4 top-1 h-1 w-3 bg-cyan-300/60" />
                <div className="absolute right-[-12px] top-1 h-1 w-3 bg-cyan-300/60" />
              </motion.div>
            </div>

            {/* Radar Pulse */}
            <motion.div
              className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/30"
              style={{
                width: 12,
                height: 12,
                marginLeft: -6,
                marginTop: -6,
              }}
              animate={{
                scale: [1, 10],
                opacity: [0.6, 0],
              }}
              transition={{
                duration: 4,
                delay: sat.delay,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </motion.div>
      ))}

      {/* Orbit Scan */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,.12) 18deg, transparent 36deg)",
          mixBlendMode: "screen",
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Status HUD */}
      <div className="absolute top-10 left-10 font-mono text-cyan-300 text-xs tracking-[0.35em]">
        ORBIT SENTINEL
      </div>

      <div className="absolute top-10 right-10 text-right font-mono text-xs">
        <div className="text-cyan-300">STATUS</div>
        <div className="text-green-400">SURVEILLANCE ACTIVE</div>
      </div>

      <div className="absolute bottom-10 left-10 font-mono text-xs">
        <div className="text-cyan-300">ACTIVE SATELLITES</div>
        <div className="text-white text-xl">05</div>
      </div>

      <div className="absolute bottom-10 right-10 text-right font-mono text-xs">
        <div className="text-cyan-300">GLOBAL SCAN</div>
        <div className="text-white text-xl">100%</div>
      </div>
    </>
  );
}