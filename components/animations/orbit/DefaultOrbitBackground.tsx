"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";

type DefaultOrbitBackgroundProps = {
  accent: string;
};

export default function DefaultOrbitBackground({
}: DefaultOrbitBackgroundProps) {
  const stars = useMemo(
  () =>
    Array.from({ length: 220 }, (_, i) => ({
      id: i,
      x: (i * 37) % 100,
      y: (i * 61) % 100,
      size: 1 + (i % 3),
      delay: (i % 7) * 0.5,
      duration: 3 + (i % 5),
      opacity: 0.3 + (i % 6) * 0.1,
    })),
  []
);

  const rings = [
    { size: 700, duration: 90, rotate: 360 },
    { size: 900, duration: 120, rotate: -360 },
    { size: 1100, duration: 150, rotate: 360 },
    { size: 1350, duration: 180, rotate: -360 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Deep Space */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, #0b1235 0%, #050817 40%, #02040b 100%)",
        }}
      />

      {/* Nebula Left */}
      <motion.div
        className="absolute -left-64 top-20 h-[700px] w-[700px] rounded-full blur-[160px]"
        style={{
          background:
            "radial-gradient(circle, rgba(108,92,231,.30), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Nebula Right */}
      <motion.div
        className="absolute -right-64 bottom-0 h-[650px] w-[650px] rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,.25), transparent 70%)",
        }}
        animate={{
          scale: [1.05, 1.25, 1.05],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
          }}
          animate={{
            opacity: [
              star.opacity * 0.25,
              star.opacity,
              star.opacity * 0.25,
            ],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Orbit Rings */}
      {rings.map((ring, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-[78%] border border-cyan-400/15 rounded-full"
          style={{
            width: ring.size,
            height: ring.size,
            marginLeft: -ring.size / 2,
            marginTop: -ring.size / 2,
          }}
          animate={{
            rotate: ring.rotate,
          }}
          transition={{
            duration: ring.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Earth Glow */}
      <motion.div
        className="absolute left-1/2 bottom-[-420px] h-[900px] w-[900px] rounded-full blur-[120px]"
        style={{
          marginLeft: -450,
          background:
            "radial-gradient(circle, rgba(59,130,246,.30), transparent 70%)",
        }}
        animate={{
          opacity: [0.35, 0.7, 0.35],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
      />

      {/* Earth */}
      <motion.div
        className="absolute left-1/2 bottom-[-360px] h-[760px] w-[760px] rounded-full overflow-hidden"
        style={{
          marginLeft: -380,
          background:
            "radial-gradient(circle at 30% 30%, #4fc3f7 0%, #1565c0 40%, #0b2447 70%, #04101d 100%)",
          boxShadow:
            "0 0 120px rgba(59,130,246,.35), inset 0 0 100px rgba(255,255,255,.08)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 300,
          repeat: Infinity,
          ease: "linear",
        }}
      >

        <motion.div
          className="absolute inset-0"
          style={{
            background:
              "repeating-linear-gradient(90deg, transparent 0 60px, rgba(255,255,255,.04) 61px 65px)",
          }}
          animate={{
            x: [0, -240],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
        />

      </motion.div>

    </div>
  );
}

      {/* Satellites */}
      {[0, 72, 144, 216, 288].map((angle, index) => (
        <motion.div
          key={index}
          className="absolute left-1/2 top-[78%]"
          animate={{
            rotate: [angle, angle + 360],
          }}
          transition={{
            duration: 70 + index * 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: 900,
            height: 900,
            marginLeft: -450,
            marginTop: -450,
            transformOrigin: "50% 50%",
          }}
        >
          <div
            className="absolute left-1/2 top-0"
            style={{
              marginLeft: -12,
              marginTop: -12,
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="relative"
            >
              {/* Solar Panels */}
              <div className="absolute left-[-18px] top-[6px] h-[4px] w-[16px] rounded bg-cyan-300/70" />
              <div className="absolute right-[-18px] top-[6px] h-[4px] w-[16px] rounded bg-cyan-300/70" />

              {/* Satellite Body */}
              <div className="h-3 w-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,.9)]" />

              {/* Status LED */}
              <motion.div
                className="absolute left-[4px] top-[14px] h-1.5 w-1.5 rounded-full bg-cyan-300"
                animate={{
                  opacity: [0.2, 1, 0.2],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              />

              {/* Radar Pulse */}
              <motion.div
                className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/40"
                style={{
                  width: 12,
                  height: 12,
                  marginLeft: -6,
                  marginTop: -6,
                }}
                animate={{
                  scale: [1, 6],
                  opacity: [0.6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.8,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Telemetry Particles */}
      {Array.from({ length: 40 }).map((_, i) => (
        <motion.div
          key={`telemetry-${i}`}
          className="absolute h-1 w-1 rounded-full bg-cyan-300"
          style={{
            left: "50%",
            top: "78%",
          }}
          animate={{
            rotate: [i * 9, i * 9 + 360],
          }}
          transition={{
            duration: 45 + (i % 10) * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <div
            style={{
              width: 420 + (i % 4) * 70,
              height: 1,
            }}
          />
        </motion.div>
      ))}

      {/* Global Radar Sweep */}
      <motion.div
        className="absolute left-1/2 top-[78%] rounded-full border border-cyan-400/20"
        style={{
          width: 900,
          height: 900,
          marginLeft: -450,
          marginTop: -450,
        }}
        animate={{
          scale: [1, 1.4],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      />

      {/* Shooting Star */}
      <motion.div
        className="absolute h-[2px] w-40 rounded-full"
        style={{
          top: "18%",
          left: "-15%",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,.9), rgba(255,255,255,0))",
        }}
        animate={{
          x: ["0vw", "130vw"],
          y: ["0vh", "22vh"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          repeatDelay: 14,
          ease: "easeOut",
        }}
      />

            {/* Aurora Behind Earth */}
      <motion.div
        className="absolute left-1/2 bottom-[-180px]"
        style={{
          width: 900,
          height: 500,
          marginLeft: -450,
          background:
            "radial-gradient(circle at center, rgba(34,211,238,.18), transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hex Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,211,238,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,211,238,.15) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
          maskImage:
            "radial-gradient(circle at center, black 45%, transparent 95%)",
        }}
      />

      {/* Telemetry Lines */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`line-${i}`}
          className="absolute bg-cyan-300/20"
          style={{
            height: 1,
            width: 160 + (i % 4) * 80,
            left: `${10 + (i * 7) % 80}%`,
            top: `${15 + (i * 6) % 65}%`,
            rotate: `${-25 + (i % 6) * 10}deg`,
          }}
          animate={{
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: 3 + (i % 4),
            repeat: Infinity,
          }}
        />
      ))}

      {/* Data Nodes */}
      {Array.from({ length: 18 }).map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute rounded-full bg-cyan-300"
          style={{
            width: 4,
            height: 4,
            left: `${8 + (i * 5) % 84}%`,
            top: `${12 + (i * 4) % 70}%`,
            boxShadow: "0 0 10px rgba(34,211,238,.7)",
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2 + (i % 3),
            repeat: Infinity,
          }}
        />
      ))}

      {/* Top Left HUD */}
      <motion.div
        className="absolute left-8 top-8 text-cyan-300/70 text-xs font-mono tracking-[0.3em]"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      >
        <div>AURIS ORBIT</div>
        <div className="mt-2 text-white/80">SATELLITE NETWORK</div>
      </motion.div>

      {/* Top Right HUD */}
      <motion.div
        className="absolute right-8 top-8 text-right text-xs font-mono"
        animate={{
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <div className="text-cyan-300">STATUS</div>
        <div className="text-emerald-400">ONLINE</div>
      </motion.div>

      {/* Bottom Left HUD */}
      <motion.div
        className="absolute left-8 bottom-8 text-xs font-mono"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
      >
        <div className="text-cyan-300">SATELLITES</div>
        <div className="text-white text-lg">05</div>
      </motion.div>

      {/* Bottom Right HUD */}
      <motion.div
        className="absolute right-8 bottom-8 text-right text-xs font-mono"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <div className="text-cyan-300">GLOBAL COVERAGE</div>
        <div className="text-white text-lg">100%</div>
      </motion.div>