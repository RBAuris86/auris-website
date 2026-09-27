"use client";

import { motion } from "framer-motion";
import DefaultOrbitBackground from "./DefaultOrbitBackground";

type WeatherBackgroundProps = {
  accent: string;
};

const cloudBands = [
  {
    id: "cloud-1",
    top: "20%",
    left: "-18%",
    width: 520,
    height: 130,
    duration: 28,
    opacity: 0.18,
  },
  {
    id: "cloud-2",
    top: "34%",
    left: "-28%",
    width: 680,
    height: 160,
    duration: 36,
    opacity: 0.14,
  },
  {
    id: "cloud-3",
    top: "52%",
    left: "-22%",
    width: 590,
    height: 145,
    duration: 32,
    opacity: 0.16,
  },
];

const pressureNodes = [
  { id: "P-01", left: "20%", top: "32%", value: "1008" },
  { id: "P-02", left: "42%", top: "24%", value: "1002" },
  { id: "P-03", left: "68%", top: "30%", value: "998" },
  { id: "P-04", left: "76%", top: "58%", value: "1005" },
  { id: "P-05", left: "34%", top: "64%", value: "1011" },
];

const rainBands = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  left: `${12 + ((index * 17) % 78)}%`,
  top: `${20 + ((index * 13) % 50)}%`,
  delay: (index % 8) * 0.22,
  duration: 1.4 + (index % 5) * 0.18,
}));

export default function WeatherBackground({
  accent,
}: WeatherBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <DefaultOrbitBackground accent={accent} />

      {/* Atmospheric Glow */}
      <motion.div
        className="absolute left-1/2 top-[48%] h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,.25), rgba(14,165,233,.10) 38%, rgba(99,102,241,.08) 58%, transparent 74%)",
        }}
        animate={{
          scale: [0.96, 1.08, 0.96],
          opacity: [0.3, 0.58, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Moving Cloud Bands */}
      {cloudBands.map((cloud, index) => (
        <motion.div
          key={cloud.id}
          className="absolute rounded-full blur-[34px]"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: cloud.width,
            height: cloud.height,
            opacity: cloud.opacity,
            background:
              "radial-gradient(ellipse at center, rgba(255,255,255,.8), rgba(186,230,253,.35) 45%, transparent 72%)",
          }}
          animate={{
            x: ["0vw", "145vw"],
            y: [0, index % 2 === 0 ? -16 : 14, 0],
          }}
          transition={{
            x: {
              duration: cloud.duration,
              repeat: Infinity,
              ease: "linear",
            },
            y: {
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}

      {/* Hurricane System */}
      <motion.div
        className="absolute left-[58%] top-[46%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[0, 1, 2, 3, 4].map((ring) => (
          <motion.div
            key={`storm-ring-${ring}`}
            className="absolute left-1/2 top-1/2 rounded-full border"
            style={{
              width: 90 + ring * 52,
              height: 90 + ring * 52,
              marginLeft: -(90 + ring * 52) / 2,
              marginTop: -(90 + ring * 52) / 2,
              borderColor:
                ring % 2 === 0
                  ? "rgba(125,211,252,.35)"
                  : "rgba(165,180,252,.24)",
              borderTopColor: "transparent",
              borderLeftColor:
                ring % 2 === 0
                  ? "rgba(255,255,255,.16)"
                  : "transparent",
              boxShadow:
                ring === 2
                  ? "0 0 24px rgba(56,189,248,.18)"
                  : undefined,
            }}
            animate={{
              scale: [0.96, 1.04, 0.96],
            }}
            transition={{
              duration: 4 + ring,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/50 bg-slate-950/70"
          style={{
            boxShadow:
              "0 0 22px rgba(125,211,252,.55), inset 0 0 18px rgba(56,189,248,.15)",
          }}
          animate={{
            scale: [0.9, 1.12, 0.9],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_rgba(255,255,255,.95)]" />
      </motion.div>

      {/* Hurricane Tracking Rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={`tracking-ring-${ring}`}
          className="absolute left-[58%] top-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/20"
          style={{
            width: 380 + ring * 95,
            height: 380 + ring * 95,
          }}
          animate={{
            scale: [0.92, 1.08],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 4.5,
            delay: ring * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Radar Sweep */}
      <motion.div
        className="absolute left-[58%] top-[46%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent 0deg, rgba(34,211,238,.18) 18deg, rgba(56,189,248,.05) 34deg, transparent 48deg)",
          maskImage:
            "radial-gradient(circle, transparent 0 10%, black 11% 100%)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Rain Bands */}
      {rainBands.map((drop) => (
        <motion.div
          key={`rain-${drop.id}`}
          className="absolute h-8 w-px rotate-[16deg]"
          style={{
            left: drop.left,
            top: drop.top,
            background:
              "linear-gradient(180deg, transparent, rgba(125,211,252,.8), transparent)",
          }}
          animate={{
            y: [0, 110],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: drop.duration,
            delay: drop.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Pressure Nodes */}
      {pressureNodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute"
          style={{
            left: node.left,
            top: node.top,
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3.5 + index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25"
            animate={{
              scale: [0.8, 1.8],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 3,
              delay: index * 0.55,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <div className="relative rounded-md border border-cyan-300/25 bg-slate-950/55 px-3 py-2 font-mono backdrop-blur-sm">
            <div className="text-[8px] tracking-[0.22em] text-cyan-300/65">
              {node.id}
            </div>
            <div className="mt-1 text-xs tracking-[0.1em] text-white">
              {node.value}
            </div>
            <div className="text-[7px] tracking-[0.2em] text-cyan-200/45">
              hPa
            </div>
          </div>
        </motion.div>
      ))}

      {/* Lightning Flashes */}
      <motion.div
        className="absolute left-[70%] top-[34%] h-40 w-20"
        animate={{
          opacity: [0, 0, 1, 0.15, 0, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          times: [0, 0.7, 0.74, 0.78, 0.84, 1],
        }}
      >
        <div
          className="h-full w-full"
          style={{
            clipPath:
              "polygon(48% 0, 70% 0, 56% 38%, 80% 38%, 30% 100%, 42% 56%, 20% 56%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.95), rgba(125,211,252,.82), transparent)",
            filter: "drop-shadow(0 0 10px rgba(125,211,252,.95))",
          }}
        />
      </motion.div>

      {/* Atmospheric Scan Lines */}
      {Array.from({ length: 14 }, (_, index) => (
        <motion.div
          key={`atmos-line-${index}`}
          className="absolute left-[8%] right-[8%] h-px"
          style={{
            top: `${16 + index * 5.2}%`,
            background:
              "linear-gradient(90deg, transparent, rgba(56,189,248,.12), transparent)",
          }}
          animate={{
            opacity: [0.04, 0.26, 0.04],
            x: [-16, 16, -16],
          }}
          transition={{
            duration: 4 + (index % 4),
            delay: index * 0.14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Temperature Gradient Strip */}
      <div className="absolute bottom-12 left-10">
        <div className="mb-2 font-mono text-[9px] tracking-[0.28em] text-cyan-300/70">
          TEMPERATURE BAND
        </div>

        <div
          className="h-2 w-52 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #2563eb, #22d3ee, #facc15, #f97316, #ef4444)",
            boxShadow: "0 0 10px rgba(56,189,248,.24)",
          }}
        />

        <div className="mt-2 flex w-52 justify-between font-mono text-[8px] text-white/45">
          <span>-40°</span>
          <span>0°</span>
          <span>40°</span>
        </div>
      </div>

      {/* Main HUD */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[0.38em] text-cyan-300">
          ORBIT WEATHER
        </div>
        <div className="mt-2 text-[10px] tracking-[0.23em] text-white/55">
          METEOROLOGICAL SATELLITE NETWORK
        </div>
      </div>

      <div className="absolute right-10 top-10 text-right font-mono text-[10px]">
        <div className="tracking-[0.28em] text-cyan-300">
          STORM ANALYSIS
        </div>
        <motion.div
          className="mt-1 tracking-[0.2em] text-amber-300"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ACTIVE SYSTEM DETECTED
        </motion.div>
      </div>

      {/* Weather Metrics */}
      <div className="absolute bottom-12 right-10 grid grid-cols-3 gap-7 text-right font-mono">
        <div>
          <div className="text-[9px] tracking-[0.22em] text-cyan-300/65">
            PRESSURE
          </div>
          <div className="mt-1 text-xl text-white">998</div>
          <div className="text-[8px] text-white/40">hPa</div>
        </div>

        <div>
          <div className="text-[9px] tracking-[0.22em] text-cyan-300/65">
            WIND
          </div>
          <div className="mt-1 text-xl text-white">84</div>
          <div className="text-[8px] text-white/40">mph</div>
        </div>

        <div>
          <div className="text-[9px] tracking-[0.22em] text-cyan-300/65">
            PRECIP
          </div>
          <div className="mt-1 text-xl text-white">73%</div>
          <div className="text-[8px] text-white/40">coverage</div>
        </div>
      </div>

      {/* Edge Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 42%, rgba(2,4,11,.14) 72%, rgba(2,4,11,.68) 100%)",
        }}
      />
    </div>
  );
}