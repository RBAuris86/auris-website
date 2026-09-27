"use client";

import { motion } from "framer-motion";

type DefaultAtlasBackgroundProps = {
  accent: string;
};

const roadSegments = [
  { id: "road-1", left: "4%", top: "22%", width: 420, rotate: 8 },
  { id: "road-2", left: "28%", top: "16%", width: 510, rotate: 28 },
  { id: "road-3", left: "10%", top: "56%", width: 460, rotate: -14 },
  { id: "road-4", left: "52%", top: "62%", width: 390, rotate: 12 },
  { id: "road-5", left: "63%", top: "18%", width: 340, rotate: 72 },
  { id: "road-6", left: "34%", top: "44%", width: 520, rotate: -4 },
  { id: "road-7", left: "18%", top: "76%", width: 470, rotate: -22 },
];

const mapNodes = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 17) % 84)}%`,
  top: `${10 + ((index * 29) % 78)}%`,
  size: 3 + (index % 4),
  delay: (index % 7) * 0.35,
}));

const destinationPins = [
  { id: "A", left: "18%", top: "34%", delay: 0 },
  { id: "B", left: "42%", top: "22%", delay: 0.8 },
  { id: "C", left: "68%", top: "32%", delay: 1.6 },
  { id: "D", left: "76%", top: "64%", delay: 2.4 },
  { id: "E", left: "30%", top: "68%", delay: 3.2 },
];

const routePoints = [
  { left: "14%", top: "72%" },
  { left: "24%", top: "64%" },
  { left: "34%", top: "58%" },
  { left: "44%", top: "48%" },
  { left: "56%", top: "42%" },
  { left: "66%", top: "32%" },
  { left: "78%", top: "24%" },
];

export default function DefaultAtlasBackground({
  accent,
}: DefaultAtlasBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020817]">
      {/* Base Map Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[820px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background: `radial-gradient(circle, ${accent}38, rgba(34,211,238,.14) 38%, transparent 72%)`,
        }}
        animate={{
          scale: [0.95, 1.08, 0.95],
          opacity: [0.34, 0.62, 0.34],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving Blueprint Grid */}
      <motion.div
        className="absolute -inset-[140px]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(56,189,248,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(56,189,248,.08) 1px, transparent 1px)
          `,
          backgroundSize: "46px 46px",
          transform: "perspective(900px) rotateX(58deg) scale(1.25)",
          transformOrigin: "center center",
          maskImage:
            "radial-gradient(circle at center, black 0%, black 52%, transparent 88%)",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "46px 46px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Secondary Fine Grid */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.025) 1px, transparent 1px)
          `,
          backgroundSize: "18px 18px",
        }}
      />

      {/* Road Network */}
      {roadSegments.map((road, index) => (
        <div
          key={road.id}
          className="absolute h-[3px] origin-left"
          style={{
            left: road.left,
            top: road.top,
            width: road.width,
            rotate: `${road.rotate}deg`,
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,.25), rgba(255,255,255,.45), rgba(34,211,238,.2), transparent)",
            boxShadow: "0 0 12px rgba(56,189,248,.18)",
          }}
        >
          <motion.div
            className="absolute left-0 top-1/2 h-[5px] w-20 -translate-y-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.9), rgba(34,211,238,.95), transparent)",
              filter: "blur(.2px)",
            }}
            animate={{
              x: [0, road.width - 80],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.5 + (index % 3),
              delay: index * 0.55,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}

      {/* Glowing Map Nodes */}
      {mapNodes.map((node) => (
        <motion.div
          key={`map-node-${node.id}`}
          className="absolute rounded-full bg-cyan-300"
          style={{
            left: node.left,
            top: node.top,
            width: node.size,
            height: node.size,
            boxShadow: "0 0 10px rgba(34,211,238,.75)",
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.45, 0.8],
          }}
          transition={{
            duration: 2.8 + (node.id % 4),
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Destination Pins */}
      {destinationPins.map((pin) => (
        <motion.div
          key={`pin-${pin.id}`}
          className="absolute"
          style={{
            left: pin.left,
            top: pin.top,
          }}
          animate={{
            y: [0, -7, 0],
          }}
          transition={{
            duration: 3.4,
            delay: pin.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute left-1/2 top-full h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35"
            animate={{
              scale: [0.6, 2],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 2.8,
              delay: pin.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <div
            className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/50 bg-cyan-400/80 font-mono text-[10px] text-slate-950"
            style={{
              boxShadow:
                "0 0 16px rgba(34,211,238,.7), 0 0 34px rgba(56,189,248,.28)",
            }}
          >
            {pin.id}
          </div>

          <div
            className="absolute left-1/2 top-[30px] h-4 w-4 -translate-x-1/2 rotate-45 border-b border-r border-white/40 bg-cyan-400/80"
            style={{
              boxShadow: "5px 5px 12px rgba(34,211,238,.24)",
            }}
          />
        </motion.div>
      ))}

      {/* Main Navigation Route */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="atlas-route-gradient" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(34,211,238,.18)" />
            <stop offset="45%" stopColor="rgba(255,255,255,.92)" />
            <stop offset="100%" stopColor="rgba(59,130,246,.48)" />
          </linearGradient>

          <filter id="atlas-route-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M 120 590 C 230 540, 260 500, 350 470 C 470 430, 520 350, 650 300 C 770 250, 820 190, 900 140"
          fill="none"
          stroke="url(#atlas-route-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          filter="url(#atlas-route-glow)"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 1, 0.72],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          r="8"
          fill="white"
          filter="url(#atlas-route-glow)"
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            ease: "easeInOut",
          }}
          style={{
            offsetPath:
              "path('M 120 590 C 230 540, 260 500, 350 470 C 470 430, 520 350, 650 300 C 770 250, 820 190, 900 140')",
          }}
        />
      </svg>

      {/* Route Waypoints */}
      {routePoints.map((point, index) => (
        <motion.div
          key={`route-point-${index}`}
          className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200 bg-slate-950"
          style={{
            left: point.left,
            top: point.top,
            boxShadow: "0 0 12px rgba(34,211,238,.72)",
          }}
          animate={{
            scale: [0.75, 1.35, 0.75],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2.2,
            delay: index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* GPS Scan Pulse */}
      {[0, 1, 2].map((pulse) => (
        <motion.div
          key={`gps-pulse-${pulse}`}
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25"
          animate={{
            scale: [0.5, 3.8],
            opacity: [0.55, 0],
          }}
          transition={{
            duration: 5.5,
            delay: pulse * 1.7,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Central Location Beacon */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/40 bg-slate-950/65 backdrop-blur-sm"
        style={{
          boxShadow:
            "0 0 24px rgba(34,211,238,.4), inset 0 0 20px rgba(56,189,248,.12)",
        }}
        animate={{
          scale: [0.92, 1.08, 0.92],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute inset-3 rounded-full border border-white/50"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_16px_rgba(255,255,255,.95)]" />
      </motion.div>

      {/* Horizontal Scan Line */}
      <motion.div
        className="absolute left-[6%] right-[6%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,.7), rgba(255,255,255,.9), rgba(34,211,238,.7), transparent)",
          boxShadow: "0 0 14px rgba(34,211,238,.5)",
        }}
        animate={{
          top: ["8%", "92%", "8%"],
          opacity: [0, 0.65, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Atlas HUD */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[0.4em] text-cyan-300">
          AURIS ATLAS
        </div>
        <div className="mt-2 text-[9px] tracking-[0.25em] text-white/50">
          INTELLIGENT WAYFINDING NETWORK
        </div>
      </div>

      <div className="absolute right-10 top-10 text-right font-mono">
        <div className="text-[9px] tracking-[0.28em] text-cyan-300/70">
          SYSTEM STATUS
        </div>
        <motion.div
          className="mt-1 text-xs tracking-[0.18em] text-emerald-400"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          LIVE
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-10 font-mono">
        <div className="text-[9px] tracking-[0.26em] text-cyan-300/65">
          ACTIVE DESTINATIONS
        </div>
        <div className="mt-1 text-2xl text-white">128</div>
      </div>

      <div className="absolute bottom-10 right-10 text-right font-mono">
        <div className="text-[9px] tracking-[0.26em] text-cyan-300/65">
          ROUTE STATUS
        </div>
        <div className="mt-1 text-lg tracking-[0.12em] text-white">
          OPTIMIZED
        </div>
        <div className="mt-1 text-[8px] tracking-[0.2em] text-cyan-200/50">
          NO APP REQUIRED
        </div>
      </div>

      {/* Edge Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 40%, rgba(2,8,23,.2) 70%, rgba(2,8,23,.82) 100%)",
        }}
      />
    </div>
  );
}