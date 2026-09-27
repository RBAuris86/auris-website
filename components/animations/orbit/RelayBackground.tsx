"use client";

import { motion } from "framer-motion";
import DefaultOrbitBackground from "./DefaultOrbitBackground";

type RelayBackgroundProps = {
  accent: string;
};

const relayNodes = [
  { id: "R-01", left: "18%", top: "28%", delay: 0 },
  { id: "R-02", left: "38%", top: "18%", delay: 0.7 },
  { id: "R-03", left: "62%", top: "22%", delay: 1.4 },
  { id: "R-04", left: "80%", top: "34%", delay: 2.1 },
  { id: "R-05", left: "28%", top: "58%", delay: 2.8 },
  { id: "R-06", left: "52%", top: "48%", delay: 3.5 },
  { id: "R-07", left: "74%", top: "62%", delay: 4.2 },
];

const communicationLinks = [
  {
    id: "L-01",
    left: "18%",
    top: "28%",
    width: 250,
    rotate: -12,
    delay: 0,
  },
  {
    id: "L-02",
    left: "38%",
    top: "18%",
    width: 300,
    rotate: 4,
    delay: 0.6,
  },
  {
    id: "L-03",
    left: "52%",
    top: "48%",
    width: 280,
    rotate: 12,
    delay: 1.2,
  },
  {
    id: "L-04",
    left: "28%",
    top: "58%",
    width: 360,
    rotate: -8,
    delay: 1.8,
  },
  {
    id: "L-05",
    left: "62%",
    top: "22%",
    width: 260,
    rotate: 28,
    delay: 2.4,
  },
];

const signalBars = [0.48, 0.62, 0.78, 0.9, 1];

export default function RelayBackground({
  accent,
}: RelayBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <DefaultOrbitBackground accent={accent} />

      {/* Relay Network Glow */}
      <motion.div
        className="absolute left-1/2 top-[46%] h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.26), rgba(34,211,238,.1) 42%, transparent 72%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [0.96, 1.08, 0.96],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Communication Links */}
      {communicationLinks.map((link) => (
        <div
          key={link.id}
          className="absolute h-px origin-left"
          style={{
            left: link.left,
            top: link.top,
            width: link.width,
            rotate: `${link.rotate}deg`,
            background:
              "linear-gradient(90deg, rgba(34,211,238,.08), rgba(34,211,238,.8), rgba(168,85,247,.75), rgba(34,211,238,.08))",
            boxShadow: "0 0 12px rgba(34,211,238,.35)",
          }}
        >
          <motion.div
            className="absolute left-0 top-1/2 h-1.5 w-16 -translate-y-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.95), rgba(34,211,238,.9), transparent)",
              filter: "blur(.3px)",
            }}
            animate={{
              x: [0, link.width - 64],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.8,
              delay: link.delay,
              repeat: Infinity,
              repeatDelay: 1.2,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}

      {/* Relay Satellites */}
      {relayNodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: node.left,
            top: node.top,
          }}
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 4 + (index % 3),
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Signal Ring */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30"
            animate={{
              scale: [0.8, 2.4],
              opacity: [0.65, 0],
            }}
            transition={{
              duration: 3.4,
              delay: node.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Satellite */}
          <div className="relative h-6 w-16">
            <div
              className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-sm border border-white/50"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,.9), rgba(148,163,184,.4))",
                boxShadow:
                  "0 0 14px rgba(255,255,255,.35), 0 0 24px rgba(34,211,238,.25)",
              }}
            />

            <div
              className="absolute left-0 top-1/2 h-4 w-5 -translate-y-1/2 border border-cyan-300/45"
              style={{
                background:
                  "repeating-linear-gradient(90deg, rgba(34,211,238,.7) 0 2px, rgba(15,23,42,.85) 2px 5px)",
              }}
            />

            <div
              className="absolute right-0 top-1/2 h-4 w-5 -translate-y-1/2 border border-cyan-300/45"
              style={{
                background:
                  "repeating-linear-gradient(90deg, rgba(34,211,238,.7) 0 2px, rgba(15,23,42,.85) 2px 5px)",
              }}
            />

            <motion.div
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-300"
              style={{
                boxShadow: "0 0 10px rgba(232,121,249,.95)",
              }}
              animate={{
                opacity: [0.25, 1, 0.25],
              }}
              transition={{
                duration: 1.5,
                delay: node.delay,
                repeat: Infinity,
              }}
            />
          </div>

          <div className="mt-2 text-center font-mono text-[8px] tracking-[0.22em] text-cyan-200/65">
            {node.id}
          </div>
        </motion.div>
      ))}

      {/* Central Relay Hub */}
      <motion.div
        className="absolute left-1/2 top-[46%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-300/25"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-4 rounded-full border border-cyan-300/25" />

        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 bg-slate-950/50 backdrop-blur-sm">
          <motion.div
            className="absolute inset-2 rounded-full"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(34,211,238,.8), rgba(168,85,247,.8), rgba(34,211,238,.8))",
              filter: "blur(7px)",
            }}
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <div className="absolute inset-[14px] rounded-full bg-slate-950" />

          <motion.div
            className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            style={{
              boxShadow:
                "0 0 14px rgba(255,255,255,.95), 0 0 30px rgba(34,211,238,.8)",
            }}
            animate={{
              scale: [0.85, 1.3, 0.85],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>

      {/* Uplink Beam */}
      <motion.div
        className="absolute left-1/2 top-[46%] h-[420px] w-[120px] -translate-x-1/2 -translate-y-full origin-bottom"
        style={{
          clipPath: "polygon(48% 100%, 52% 100%, 100% 0, 0 0)",
          background:
            "linear-gradient(180deg, transparent, rgba(168,85,247,.05) 30%, rgba(34,211,238,.22))",
          filter: "blur(3px)",
        }}
        animate={{
          opacity: [0.15, 0.6, 0.15],
          scaleX: [0.8, 1.08, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Signal Strength */}
      <div className="absolute bottom-12 left-10">
        <div className="mb-2 font-mono text-[10px] tracking-[0.3em] text-cyan-300/70">
          SIGNAL STRENGTH
        </div>

        <div className="flex items-end gap-1">
          {signalBars.map((height, index) => (
            <motion.div
              key={`signal-${index}`}
              className="w-2 rounded-sm"
              style={{
                height: 8 + index * 6,
                background:
                  "linear-gradient(180deg, rgba(232,121,249,.95), rgba(34,211,238,.75))",
                boxShadow: "0 0 8px rgba(34,211,238,.35)",
                transformOrigin: "bottom",
              }}
              animate={{
                scaleY: [height, 1, height],
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2.2,
                delay: index * 0.16,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      {/* Relay HUD */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[0.36em] text-fuchsia-300">
          ORBIT RELAY
        </div>
        <div className="mt-2 text-[10px] tracking-[0.22em] text-white/55">
          GLOBAL COMMUNICATION CONSTELLATION
        </div>
      </div>

      <div className="absolute right-10 top-10 text-right font-mono text-[10px]">
        <div className="tracking-[0.28em] text-cyan-300">LINK STATUS</div>
        <motion.div
          className="mt-1 tracking-[0.2em] text-emerald-400"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ALL NODES CONNECTED
        </motion.div>
      </div>

      <div className="absolute bottom-12 right-10 text-right font-mono">
        <div className="text-[10px] tracking-[0.25em] text-cyan-300/70">
          DATA THROUGHPUT
        </div>
        <div className="mt-1 text-xl tracking-[0.12em] text-white">
          8.42 TB/s
        </div>
        <div className="mt-1 text-[9px] tracking-[0.2em] text-fuchsia-300/70">
          LATENCY 12 ms
        </div>
      </div>

      {/* Edge Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 42%, rgba(2,4,11,.18) 72%, rgba(2,4,11,.72) 100%)",
        }}
      />
    </div>
  );
}