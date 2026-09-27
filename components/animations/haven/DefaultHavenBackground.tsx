"use client";

import { motion } from "framer-motion";

type DefaultHavenBackgroundProps = {
  accent?: string;
};

const neuralNodes = [
  { left: "12%", top: "24%", size: 8 },
  { left: "24%", top: "14%", size: 6 },
  { left: "34%", top: "32%", size: 10 },
  { left: "18%", top: "52%", size: 7 },
  { left: "30%", top: "72%", size: 9 },
  { left: "48%", top: "18%", size: 7 },
  { left: "52%", top: "44%", size: 11 },
  { left: "48%", top: "76%", size: 6 },
  { left: "68%", top: "24%", size: 9 },
  { left: "76%", top: "42%", size: 7 },
  { left: "66%", top: "68%", size: 10 },
  { left: "86%", top: "62%", size: 6 },
  { left: "88%", top: "20%", size: 8 },
];

const connectionPaths = [
  "M144 190 C240 120 310 160 410 260",
  "M290 110 C410 160 520 190 620 350",
  "M210 420 C340 350 420 320 620 350",
  "M360 580 C470 500 560 430 620 350",
  "M620 350 C740 190 820 180 900 190",
  "M620 350 C760 340 840 320 930 340",
  "M620 350 C720 490 810 540 900 560",
  "M900 190 C980 260 1030 340 1050 500",
  "M930 340 C980 420 1010 470 1050 500",
];

const careNodes = [
  {
    label: "FAMILY",
    sublabel: "Connected",
    left: "50%",
    top: "10%",
    transform: "translateX(-50%)",
  },
  {
    label: "CAREGIVER",
    sublabel: "Available",
    left: "12%",
    top: "48%",
    transform: "translateY(-50%)",
  },
  {
    label: "EMERGENCY",
    sublabel: "Ready",
    right: "12%",
    top: "48%",
    transform: "translateY(-50%)",
  },
  {
    label: "RESIDENT",
    sublabel: "Protected",
    left: "50%",
    bottom: "10%",
    transform: "translateX(-50%)",
  },
];

export default function DefaultHavenBackground({
  accent = "#2dd4bf",
}: DefaultHavenBackgroundProps) {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#020817]"
      aria-hidden="true"
    >
      {/* Base atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#020617_0%,#061426_45%,#020617_100%)]" />

      <motion.div
        className="absolute left-1/2 top-[46%] h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{
          background: `radial-gradient(circle, ${accent}38 0%, rgba(59,130,246,0.12) 38%, transparent 72%)`,
        }}
        animate={{
          opacity: [0.45, 0.75, 0.45],
          scale: [0.96, 1.04, 0.96],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Smart home blueprint grid */}
      <motion.div
        className="absolute inset-[-100px] opacity-[0.09]"
        style={{
          backgroundImage: `
            linear-gradient(${accent}30 1px, transparent 1px),
            linear-gradient(90deg, ${accent}30 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at center, black 15%, transparent 78%)",
        }}
        animate={{
          x: [0, 64],
          y: [0, 64],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Smart home floor plan */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <g
          fill="none"
          stroke={accent}
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <motion.path
            d="M90 130 H390 V300 H510 V120 H790 V300 H1110 V660 H820 V520 H610 V690 H330 V540 H90 Z"
            strokeDasharray="12 14"
            animate={{ strokeDashoffset: [0, -220] }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <path d="M390 130 V300" />
          <path d="M790 120 V300" />
          <path d="M90 420 H330" />
          <path d="M820 420 H1110" />
          <path d="M510 300 H790" />
          <path d="M610 520 H820" />

          <rect x="145" y="185" width="130" height="92" rx="8" />
          <rect x="905" y="185" width="130" height="92" rx="8" />
          <rect x="145" y="480" width="120" height="92" rx="8" />
          <rect x="920" y="470" width="105" height="105" rx="8" />
        </g>
      </svg>

      {/* Neural network paths */}
      <svg
        className="absolute inset-0 h-full w-full opacity-60"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="haven-path-glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="haven-network-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.25" />
            <stop offset="50%" stopColor={accent} stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.25" />
          </linearGradient>
        </defs>

        {connectionPaths.map((path, index) => (
          <g key={path}>
            <path
              d={path}
              fill="none"
              stroke={accent}
              strokeWidth="5"
              opacity="0.07"
              filter="url(#haven-path-glow)"
            />

            <motion.path
              d={path}
              fill="none"
              stroke="url(#haven-network-gradient)"
              strokeWidth="1.5"
              strokeDasharray="8 14"
              animate={{
                strokeDashoffset: [0, -180],
                opacity: [0.25, 0.75, 0.25],
              }}
              transition={{
                strokeDashoffset: {
                  duration: 12 + index,
                  repeat: Infinity,
                  ease: "linear",
                },
                opacity: {
                  duration: 4 + (index % 3),
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            />
          </g>
        ))}
      </svg>

      {/* Neural nodes */}
      {neuralNodes.map((node, index) => (
        <motion.div
          key={`${node.left}-${node.top}`}
          className="absolute rounded-full"
          style={{
            left: node.left,
            top: node.top,
            width: node.size,
            height: node.size,
            background: index % 4 === 0 ? "#fbbf24" : accent,
            boxShadow:
              index % 4 === 0
                ? "0 0 18px rgba(251,191,36,0.65)"
                : `0 0 18px ${accent}`,
          }}
          animate={{
            scale: [0.8, 1.45, 0.8],
            opacity: [0.3, 0.95, 0.3],
          }}
          transition={{
            duration: 3.5 + (index % 4),
            delay: index * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Haven core rings */}
      <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="absolute inset-0 rounded-full border"
          style={{ borderColor: `${accent}22` }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-10 rounded-full border border-dashed"
          style={{ borderColor: `${accent}30` }}
          animate={{ rotate: -360 }}
          transition={{
            duration: 38,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute inset-[82px] rounded-full border"
          style={{
            borderColor: `${accent}40`,
            boxShadow: `0 0 70px ${accent}22`,
          }}
          animate={{
            scale: [0.96, 1.05, 0.96],
            opacity: [0.4, 0.85, 0.4],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Abstract AI face */}
        <motion.div
          className="absolute inset-[112px] overflow-hidden rounded-[42%] border backdrop-blur-md"
          style={{
            borderColor: `${accent}55`,
            background: `radial-gradient(circle at 50% 42%, ${accent}25, rgba(15,23,42,0.82) 70%)`,
            boxShadow: `inset 0 0 36px ${accent}20, 0 0 55px ${accent}30`,
          }}
          animate={{
            y: [0, -4, 0],
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="absolute left-[25%] top-[36%] h-2.5 w-8 rounded-full bg-cyan-200/90 shadow-[0_0_14px_rgba(165,243,252,0.85)]" />

          <div className="absolute right-[25%] top-[36%] h-2.5 w-8 rounded-full bg-cyan-200/90 shadow-[0_0_14px_rgba(165,243,252,0.85)]" />

          <motion.div
            className="absolute left-1/2 top-[58%] h-[2px] w-12 -translate-x-1/2 rounded-full"
            style={{
              background: accent,
              boxShadow: `0 0 10px ${accent}`,
            }}
            animate={{
              width: [42, 56, 42],
              opacity: [0.45, 0.9, 0.45],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {Array.from({ length: 22 }).map((_, index) => (
            <motion.span
              key={index}
              className="absolute h-1 w-1 rounded-full"
              style={{
                left: `${14 + ((index * 17) % 72)}%`,
                top: `${12 + ((index * 23) % 72)}%`,
                background: index % 5 === 0 ? "#fbbf24" : accent,
              }}
              animate={{
                opacity: [0.12, 0.85, 0.12],
                scale: [0.7, 1.4, 0.7],
              }}
              transition={{
                duration: 2.8 + (index % 4),
                delay: index * 0.12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Protection pulse */}
        <motion.div
          className="absolute inset-[112px] rounded-full border"
          style={{ borderColor: `${accent}55` }}
          animate={{
            scale: [0.85, 1.75],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </div>

      {/* Care connection labels */}
      {careNodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="absolute min-w-[122px] rounded-2xl border px-4 py-3 text-center backdrop-blur-lg"
          style={{
            left: node.left,
            right: node.right,
            top: node.top,
            bottom: node.bottom,
            transform: node.transform,
            borderColor: `${accent}35`,
            background: "rgba(7,18,36,0.66)",
            boxShadow: `0 0 28px ${accent}12`,
          }}
          animate={{
            y: [0, index % 2 === 0 ? -7 : 7, 0],
            opacity: [0.65, 1, 0.65],
          }}
          transition={{
            duration: 6 + index,
            delay: index * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="text-[10px] font-semibold tracking-[0.28em]"
            style={{ color: accent }}
          >
            {node.label}
          </div>

          <div className="mt-1 text-[9px] tracking-[0.14em] text-slate-300/70">
            {node.sublabel}
          </div>
        </motion.div>
      ))}

      {/* Biometric line */}
      <svg
        className="absolute bottom-[15%] left-0 h-[110px] w-full opacity-25"
        viewBox="0 0 1600 110"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0 60 H280 L320 60 L345 44 L372 78 L405 20 L445 94 L482 60 H720 L752 60 L780 42 L810 80 L845 18 L885 94 L920 60 H1160 L1190 60 L1220 45 L1250 77 L1285 22 L1320 92 L1360 60 H1600"
          fill="none"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="16 20"
          animate={{
            strokeDashoffset: [0, -420],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </svg>

      {/* Robotics servo diagrams */}
      <motion.div
        className="absolute bottom-[11%] left-[8%] h-28 w-28 rounded-full border border-cyan-300/10"
        animate={{ rotate: 360 }}
        transition={{
          duration: 42,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-4 rounded-full border border-dashed border-cyan-300/15" />
        <div
          className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: accent,
            boxShadow: `0 0 18px ${accent}`,
          }}
        />
      </motion.div>

      <motion.div
        className="absolute right-[7%] top-[14%] h-36 w-36 rounded-full border border-amber-300/10"
        animate={{ rotate: -360 }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-5 rounded-full border border-dashed border-amber-200/15" />
        <div className="absolute left-1/2 top-0 h-5 w-[2px] -translate-x-1/2 bg-amber-200/20" />
        <div className="absolute bottom-0 left-1/2 h-5 w-[2px] -translate-x-1/2 bg-amber-200/20" />
      </motion.div>

      {/* Deterministic ambient particles */}
      {Array.from({ length: 42 }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${(index * 19) % 100}%`,
            top: `${(index * 31) % 100}%`,
            width: index % 7 === 0 ? 3 : 2,
            height: index % 7 === 0 ? 3 : 2,
            background: index % 8 === 0 ? "#fbbf24" : accent,
            boxShadow:
              index % 8 === 0
                ? "0 0 10px rgba(251,191,36,0.75)"
                : `0 0 10px ${accent}`,
          }}
          animate={{
            y: [0, -26 - (index % 5) * 7, 0],
            x: [0, index % 2 === 0 ? 9 : -9, 0],
            opacity: [0.08, 0.65, 0.08],
          }}
          transition={{
            duration: 9 + (index % 7),
            delay: (index % 9) * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Edge lighting */}
      <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-cyan-400/[0.04] to-transparent" />

      <div className="absolute inset-x-0 bottom-0 h-[42%] bg-gradient-to-t from-blue-950/45 to-transparent" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(2,6,23,0.55)_74%,rgba(2,6,23,0.94)_100%)]" />
    </div>
  );
}