"use client";

import { motion } from "framer-motion";
import DefaultOrbitBackground from "./DefaultOrbitBackground";

type VisionBackgroundProps = {
  accent: string;
};

const targets = [
  { id: 1, left: "22%", top: "34%", label: "CITY-001" },
  { id: 2, left: "48%", top: "44%", label: "PORT-214" },
  { id: 3, left: "72%", top: "28%", label: "GRID-812" },
  { id: 4, left: "63%", top: "62%", label: "SITE-045" },
  { id: 5, left: "32%", top: "66%", label: "ZONE-119" },
];

export default function VisionBackground({
  accent,
}: VisionBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <DefaultOrbitBackground accent={accent} />

      {/* Camera Scan Beam */}
      <motion.div
        className="absolute left-1/2 top-0"
        style={{
          width: 280,
          height: "100%",
          marginLeft: -140,
          clipPath: "polygon(45% 0%,55% 0%,100% 100%,0% 100%)",
          background:
            "linear-gradient(180deg, rgba(34,211,238,.18), rgba(34,211,238,.02))",
          filter: "blur(2px)",
        }}
        animate={{
          x: [-240, 240, -240],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* AI Targets */}
      {targets.map((target, i) => (
        <motion.div
          key={target.id}
          className="absolute"
          style={{
            left: target.left,
            top: target.top,
          }}
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2 + i,
            repeat: Infinity,
          }}
        >
          <div className="h-12 w-12 border border-cyan-300/60 rounded-sm relative">

            <motion.div
              className="absolute inset-0 border border-cyan-300"
              animate={{
                scale: [1, 1.5],
                opacity: [0.8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * .5,
              }}
            />

            <div className="absolute -left-1 -top-1 h-2 w-2 bg-cyan-300" />
            <div className="absolute right-[-4px] -top-1 h-2 w-2 bg-cyan-300" />
            <div className="absolute -left-1 bottom-[-4px] h-2 w-2 bg-cyan-300" />
            <div className="absolute right-[-4px] bottom-[-4px] h-2 w-2 bg-cyan-300" />
          </div>

          <div className="mt-2 font-mono text-[9px] tracking-[0.25em] text-cyan-300/70">
            {target.label}
          </div>
        </motion.div>
      ))}

      {/* Scan Lines */}
      {Array.from({ length: 18 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-cyan-300/10"
          style={{
            top: `${i * 5.5}%`,
          }}
          animate={{
            opacity: [0.05, 0.3, 0.05],
          }}
          transition={{
            duration: 3,
            delay: i * .15,
            repeat: Infinity,
          }}
        />
      ))}

      {/* HUD */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[.4em] text-cyan-300">
          ORBIT VISION
        </div>

        <div className="mt-2 text-[10px] text-white/60 tracking-[.25em]">
          EARTH OBSERVATION
        </div>
      </div>

      <div className="absolute right-10 top-10 text-right font-mono">
        <div className="text-xs tracking-[.3em] text-cyan-300">
          AI ANALYSIS
        </div>

        <motion.div
          className="mt-2 text-green-400 text-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          LIVE
        </motion.div>
      </div>

      <div className="absolute left-10 bottom-10 font-mono">
        <div className="text-[10px] tracking-[.3em] text-cyan-300">
          OBJECTS DETECTED
        </div>

        <div className="text-3xl text-white">127</div>
      </div>

      <div className="absolute right-10 bottom-10 text-right font-mono">
        <div className="text-[10px] tracking-[.3em] text-cyan-300">
          RESOLUTION
        </div>

        <div className="text-3xl text-white">0.3m</div>

        <div className="text-[10px] text-cyan-300/70 mt-2">
          AI TRACKING ENABLED
        </div>
      </div>

      {/* Lens Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.10), transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [.25, .45, .25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />
    </div>
  );
}