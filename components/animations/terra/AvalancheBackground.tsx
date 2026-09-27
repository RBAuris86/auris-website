"use client";

import { motion } from "framer-motion";

type AvalancheBackgroundProps = {
  accent: string;
};

const snowflakes = Array.from({ length: 58 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  top: -8 - ((index * 19) % 30),
  size: 2 + (index % 5),
  delay: (index % 18) * 0.35,
  duration: 8 + (index % 9) * 0.8,
  drift: 30 + (index % 7) * 14,
  opacity: 0.3 + (index % 5) * 0.1,
}));

const windStreaks = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  top: 12 + ((index * 31) % 72),
  width: 80 + (index % 6) * 34,
  delay: index * 0.58,
  duration: 4.5 + (index % 5) * 0.65,
}));

const sensorNodes = [
  { left: 19, top: 52, delay: 0 },
  { left: 34, top: 43, delay: 0.7 },
  { left: 51, top: 56, delay: 1.4 },
  { left: 68, top: 40, delay: 2.1 },
  { left: 83, top: 54, delay: 2.8 },
];

const powderClouds = [
  {
    left: "40%",
    top: "42%",
    width: 260,
    height: 120,
    delay: 0,
  },
  {
    left: "48%",
    top: "50%",
    width: 330,
    height: 150,
    delay: 0.4,
  },
  {
    left: "54%",
    top: "60%",
    width: 430,
    height: 190,
    delay: 0.8,
  },
  {
    left: "38%",
    top: "68%",
    width: 540,
    height: 220,
    delay: 1.15,
  },
];

export default function AvalancheBackground({
  accent,
}: AvalancheBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
        background: `
          linear-gradient(
            to bottom,
            rgba(7, 23, 42, 0.9) 0%,
            rgba(18, 51, 78, 0.78) 42%,
            rgba(87, 137, 171, 0.38) 100%
          )
        `,
      }}
    >
      {/* Cold atmospheric glow */}
      <motion.div
        animate={{
          opacity: [0.24, 0.48, 0.3, 0.42, 0.24],
          scale: [1, 1.08, 1.03, 1.1, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "12%",
          right: "12%",
          bottom: "-24%",
          height: "60%",
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse,
              rgba(207, 239, 255, 0.48) 0%,
              ${accent}38 38%,
              transparent 74%
            )
          `,
          filter: "blur(74px)",
        }}
      />

      {/* Distant mountain range */}
      <motion.div
        animate={{
          x: [-12, 12, -6, 8, -12],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "-8%",
          right: "-8%",
          bottom: "27%",
          height: "52%",
          clipPath:
            "polygon(0% 100%, 0% 78%, 10% 57%, 18% 70%, 30% 34%, 42% 65%, 55% 25%, 67% 58%, 80% 31%, 91% 62%, 100% 43%, 100% 100%)",
          background: `
            linear-gradient(
              to bottom,
              rgba(180, 220, 241, 0.16),
              rgba(41, 78, 108, 0.42)
            )
          `,
          filter: "blur(1.5px)",
          opacity: 0.55,
        }}
      />

      {/* Main snow mountain */}
      <motion.div
        animate={{
          x: [-5, 5, -2, 4, -5],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "-4%",
          right: "-4%",
          bottom: "-2%",
          height: "78%",
          clipPath:
            "polygon(0% 100%, 0% 82%, 9% 72%, 18% 58%, 28% 48%, 39% 18%, 47% 36%, 55% 22%, 63% 46%, 72% 39%, 82% 61%, 91% 52%, 100% 69%, 100% 100%)",
          background: `
            linear-gradient(
              145deg,
              rgba(240, 250, 255, 0.98) 0%,
              rgba(198, 228, 244, 0.94) 27%,
              rgba(128, 178, 208, 0.82) 58%,
              rgba(39, 78, 108, 0.84) 100%
            )
          `,
          boxShadow: `
            inset 0 28px 80px rgba(255, 255, 255, 0.18),
            0 -20px 80px rgba(171, 224, 255, 0.1)
          `,
        }}
      />

      {/* Mountain shadow face */}
      <div
        style={{
          position: "absolute",
          left: "37%",
          top: "26%",
          width: "31%",
          height: "60%",
          clipPath:
            "polygon(4% 0%, 42% 28%, 100% 100%, 20% 76%, 0% 38%)",
          background: `
            linear-gradient(
              135deg,
              rgba(37, 72, 98, 0.72),
              rgba(116, 166, 195, 0.24)
            )
          `,
          filter: "blur(0.5px)",
        }}
      />

      {/* Snow cap highlights */}
      <motion.div
        animate={{
          opacity: [0.45, 0.72, 0.52, 0.68, 0.45],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "28%",
          top: "14%",
          width: "42%",
          height: "34%",
          clipPath:
            "polygon(0% 100%, 27% 49%, 41% 0%, 56% 36%, 72% 8%, 100% 100%, 68% 74%, 45% 52%, 24% 84%)",
          background: `
            linear-gradient(
              to bottom,
              rgba(255, 255, 255, 0.78),
              rgba(210, 238, 252, 0.18)
            )
          `,
          filter: "blur(1px)",
        }}
      />

      {/* Fracture warning glow */}
      <motion.div
        animate={{
          opacity: [0.1, 0.16, 0.2, 0.95, 0.35, 0.12, 0.1],
          filter: [
            "drop-shadow(0 0 2px rgba(207,239,255,0.15))",
            "drop-shadow(0 0 4px rgba(207,239,255,0.25))",
            "drop-shadow(0 0 6px rgba(207,239,255,0.35))",
            `drop-shadow(0 0 16px ${accent})`,
            `drop-shadow(0 0 8px ${accent})`,
            "drop-shadow(0 0 3px rgba(207,239,255,0.2))",
            "drop-shadow(0 0 2px rgba(207,239,255,0.15))",
          ],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          times: [0, 0.5, 0.59, 0.64, 0.7, 0.78, 1],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          left: "36%",
          top: "31%",
          width: "30%",
          height: "25%",
        }}
      >
        <svg
          viewBox="0 0 300 120"
          preserveAspectRatio="none"
          style={{
            width: "100%",
            height: "100%",
            overflow: "visible",
          }}
        >
          <motion.path
            d="M 8 25 L 72 31 L 118 24 L 151 43 L 190 37 L 222 59 L 278 67"
            fill="none"
            stroke="rgba(220, 246, 255, 0.95)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: [0, 0, 1, 1, 0.15, 0],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              times: [0, 0.53, 0.64, 0.74, 0.86, 1],
              ease: "easeInOut",
            }}
          />
        </svg>
      </motion.div>

      {/* Sliding snow slab */}
      <motion.div
        animate={{
          x: [0, 0, 0, 16, 75, 180, 360],
          y: [0, 0, 0, 10, 58, 135, 260],
          rotate: [0, 0, 0, 1, 3, 7, 11],
          opacity: [0, 0, 0.18, 0.85, 0.78, 0.46, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          times: [0, 0.56, 0.61, 0.66, 0.74, 0.84, 1],
          ease: "easeIn",
        }}
        style={{
          position: "absolute",
          left: "38%",
          top: "36%",
          width: "26%",
          height: "19%",
          clipPath:
            "polygon(0% 4%, 76% 0%, 100% 57%, 62% 100%, 11% 76%)",
          background: `
            linear-gradient(
              145deg,
              rgba(248, 253, 255, 0.96),
              rgba(180, 218, 238, 0.82)
            )
          `,
          boxShadow: `
            0 12px 28px rgba(7, 28, 45, 0.24),
            0 0 24px rgba(206, 241, 255, 0.22)
          `,
        }}
      />

      {/* Avalanche powder cloud */}
      {powderClouds.map((cloud, index) => (
        <motion.div
          key={index}
          initial={{
            scale: 0.15,
            opacity: 0,
            x: -90,
            y: -80,
          }}
          animate={{
            scale: [0.15, 0.15, 0.35, 0.9, 1.45, 1.85],
            opacity: [0, 0, 0.15, 0.82, 0.48, 0],
            x: [-90, -90, -30, 75, 230, 440],
            y: [-80, -80, -20, 60, 155, 280],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            delay: cloud.delay,
            times: [0, 0.52, 0.61, 0.7, 0.84, 1],
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: cloud.left,
            top: cloud.top,
            width: cloud.width,
            height: cloud.height,
            borderRadius: "50%",
            background: `
              radial-gradient(
                ellipse,
                rgba(248, 253, 255, 0.94) 0%,
                rgba(217, 239, 250, 0.72) 35%,
                rgba(165, 207, 230, 0.28) 66%,
                transparent 80%
              )
            `,
            filter: "blur(18px)",
            mixBlendMode: "screen",
          }}
        />
      ))}

      {/* Loose snow spray */}
      {Array.from({ length: 34 }).map((_, index) => (
        <motion.div
          key={index}
          animate={{
            x: [0, 0, 30 + (index % 7) * 28, 180 + (index % 9) * 36],
            y: [0, 0, 20 + (index % 6) * 16, 180 + (index % 8) * 30],
            opacity: [0, 0, 0.9, 0.52, 0],
            scale: [0.3, 0.3, 1, 0.76, 0.25],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            delay: (index % 12) * 0.08,
            times: [0, 0.58, 0.67, 0.82, 1],
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: `${38 + ((index * 17) % 23)}%`,
            top: `${36 + ((index * 11) % 18)}%`,
            width: 3 + (index % 5),
            height: 3 + (index % 5),
            borderRadius: "50%",
            background: "rgba(240, 251, 255, 0.95)",
            boxShadow: `
              0 0 8px rgba(215, 243, 255, 0.8)
            `,
          }}
        />
      ))}

      {/* Telemetry connection network */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <motion.path
          d="M 19 52 L 34 43 L 51 56 L 68 40 L 83 54"
          fill="none"
          stroke={accent}
          strokeWidth="0.16"
          strokeDasharray="1.5 1.5"
          animate={{
            opacity: [0.12, 0.42, 0.18, 0.36, 0.12],
            pathLength: [0, 1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Hazard monitoring nodes */}
      {sensorNodes.map((node, index) => (
        <div
          key={index}
          style={{
            position: "absolute",
            left: `${node.left}%`,
            top: `${node.top}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            animate={{
              scale: [0.8, 1.18, 0.9, 1.1, 0.8],
              opacity: [0.48, 1, 0.62, 0.9, 0.48],
              backgroundColor: [
                "#d7f4ff",
                "#d7f4ff",
                "#d7f4ff",
                "#ffb454",
                "#d7f4ff",
              ],
              boxShadow: [
                `0 0 9px ${accent}`,
                `0 0 18px ${accent}`,
                `0 0 10px ${accent}`,
                "0 0 24px rgba(255, 158, 55, 0.95)",
                `0 0 9px ${accent}`,
              ],
            }}
            transition={{
              duration: 11,
              repeat: Infinity,
              delay: node.delay * 0.08,
              times: [0, 0.5, 0.61, 0.69, 1],
              ease: "easeInOut",
            }}
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              border: `1px solid ${accent}`,
            }}
          />

          <motion.div
            animate={{
              scale: [0.4, 2.8],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              inset: -5,
              borderRadius: "50%",
              border: `1px solid ${accent}88`,
            }}
          />
        </div>
      ))}

      {/* Terrain scan */}
      <motion.div
        animate={{
          x: ["-35%", "125%"],
          opacity: [0, 0.28, 0.14, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "-12%",
          left: 0,
          width: "24%",
          height: "130%",
          transform: "rotate(18deg)",
          background: `
            linear-gradient(
              to right,
              transparent,
              ${accent}16,
              rgba(211, 244, 255, 0.48),
              ${accent}12,
              transparent
            )
          `,
          filter: "blur(8px)",
          boxShadow: `0 0 26px ${accent}20`,
        }}
      />

      {/* Wind-driven snow streaks */}
      {windStreaks.map((streak) => (
        <motion.div
          key={streak.id}
          initial={{
            x: "-35vw",
            opacity: 0,
          }}
          animate={{
            x: "135vw",
            opacity: [0, 0.34, 0.18, 0],
          }}
          transition={{
            duration: streak.duration,
            repeat: Infinity,
            delay: streak.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${streak.top}%`,
            left: 0,
            width: streak.width,
            height: 1,
            transform: "rotate(-9deg)",
            background: `
              linear-gradient(
                to right,
                transparent,
                rgba(221, 246, 255, 0.8),
                transparent
              )
            `,
            filter: "blur(0.4px)",
            boxShadow: `0 0 7px rgba(200, 236, 255, 0.38)`,
          }}
        />
      ))}

      {/* Continuous snowfall */}
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          initial={{
            left: `${flake.left}%`,
            top: `${flake.top}%`,
            opacity: 0,
          }}
          animate={{
            y: ["-12vh", "118vh"],
            x: [
              0,
              flake.drift,
              -flake.drift * 0.25,
              flake.drift * 0.65,
            ],
            rotate: [0, 120, 260, 420],
            opacity: [
              0,
              flake.opacity,
              flake.opacity * 0.8,
              flake.opacity,
              0,
            ],
          }}
          transition={{
            duration: flake.duration,
            repeat: Infinity,
            delay: flake.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: flake.size,
            height: flake.size,
            borderRadius: "50%",
            background: "rgba(239, 250, 255, 0.92)",
            boxShadow: `
              0 0 6px rgba(211, 241, 255, 0.65)
            `,
          }}
        />
      ))}

      {/* Avalanche event flash */}
      <motion.div
        animate={{
          opacity: [0, 0, 0.46, 0.16, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          times: [0, 0.6, 0.65, 0.72, 1],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              ellipse at 54% 51%,
              rgba(238, 251, 255, 0.52),
              ${accent}20 35%,
              transparent 68%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Technical grid */}
      <motion.div
        animate={{
          opacity: [0.02, 0.065, 0.02],
          backgroundPosition: ["0px 0px", "56px 56px"],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${accent}12 1px, transparent 1px),
            linear-gradient(90deg, ${accent}12 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent 5%, black 42%, black 78%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 5%, black 42%, black 78%, transparent)",
        }}
      />
    </div>
  );
}