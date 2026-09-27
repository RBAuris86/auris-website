"use client";

import { motion } from "framer-motion";

type StormBackgroundProps = {
  accent: string;
};

const rainDrops = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  delay: (index % 12) * 0.24,
  duration: 1.7 + (index % 6) * 0.18,
  height: 38 + (index % 5) * 14,
  opacity: 0.18 + (index % 5) * 0.08,
}));

const windStreaks = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  top: 10 + ((index * 43) % 76),
  width: 90 + (index % 5) * 34,
  delay: (index % 7) * 0.55,
  duration: 4.8 + (index % 5) * 0.65,
}));

const telemetryDots = Array.from({ length: 9 }, (_, index) => ({
  id: index,
  angle: index * 40,
  delay: index * 0.24,
}));

export default function StormBackground({
  accent,
}: StormBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      {/* Deep storm atmosphere */}
      <motion.div
        animate={{
          opacity: [0.42, 0.68, 0.42],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: "-15%",
          background: `
            radial-gradient(
              circle at 72% 30%,
              ${accent}36 0%,
              ${accent}18 18%,
              transparent 48%
            ),
            radial-gradient(
              circle at 28% 75%,
              rgba(25, 52, 45, 0.48) 0%,
              transparent 44%
            ),
            linear-gradient(
              145deg,
              rgba(2, 10, 14, 0.72),
              transparent 48%,
              rgba(4, 18, 20, 0.66)
            )
          `,
          filter: "blur(32px)",
        }}
      />

      {/* Main rotating supercell */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.08, 0.98, 1],
        }}
        transition={{
          rotate: {
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          position: "absolute",
          top: "-16%",
          right: "-8%",
          width: "min(820px, 78vw)",
          aspectRatio: "1",
          borderRadius: "50%",
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              ${accent}12 35deg,
              ${accent}35 82deg,
              transparent 132deg,
              ${accent}18 205deg,
              ${accent}3d 260deg,
              transparent 330deg
            )
          `,
          filter: "blur(9px)",
          opacity: 0.78,
        }}
      />

      {/* Secondary cloud band */}
      <motion.div
        animate={{
          rotate: -360,
          scale: [0.95, 1.04, 0.95],
          opacity: [0.34, 0.62, 0.34],
        }}
        transition={{
          rotate: {
            duration: 21,
            repeat: Infinity,
            ease: "linear",
          },
          scale: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
          opacity: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          position: "absolute",
          top: "2%",
          right: "5%",
          width: "min(610px, 61vw)",
          aspectRatio: "1",
          borderRadius: "50%",
          border: `1px solid ${accent}34`,
          background: `
            repeating-conic-gradient(
              from 30deg,
              transparent 0deg 22deg,
              ${accent}19 27deg 36deg,
              transparent 42deg 66deg
            )
          `,
          boxShadow: `
            0 0 80px ${accent}1f,
            inset 0 0 80px ${accent}18
          `,
          filter: "blur(3px)",
        }}
      />

      {/* Funnel */}
      <motion.div
        animate={{
          rotate: [-2, 3, -1, 2, -2],
          scaleX: [0.92, 1.07, 0.96, 1.04, 0.92],
          opacity: [0.4, 0.72, 0.52, 0.68, 0.4],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "24%",
          right: "19%",
          width: "min(230px, 22vw)",
          height: "58%",
          transformOrigin: "top center",
          clipPath: "polygon(4% 0%, 96% 0%, 66% 100%, 42% 100%)",
          background: `
            repeating-linear-gradient(
              165deg,
              rgba(255,255,255,0.03) 0px,
              ${accent}26 12px,
              transparent 26px,
              ${accent}15 41px
            ),
            linear-gradient(
              to bottom,
              ${accent}28,
              rgba(9, 25, 28, 0.64),
              ${accent}18
            )
          `,
          filter: "blur(5px)",
          boxShadow: `0 0 46px ${accent}26`,
        }}
      />

      {/* Radar sweep */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "11%",
          right: "8%",
          width: "min(520px, 52vw)",
          aspectRatio: "1",
          borderRadius: "50%",
          border: `1px solid ${accent}30`,
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg 310deg,
              ${accent}08 320deg,
              ${accent}50 350deg,
              transparent 360deg
            )
          `,
          boxShadow: `
            0 0 55px ${accent}16,
            inset 0 0 55px ${accent}10
          `,
          opacity: 0.72,
        }}
      />

      {/* Radar rings */}
      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          animate={{
            scale: [0.7, 1.08],
            opacity: [0.42, 0],
          }}
          transition={{
            duration: 4.6,
            repeat: Infinity,
            delay: ring * 1.45,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            top: "16%",
            right: "13%",
            width: "min(420px, 42vw)",
            aspectRatio: "1",
            borderRadius: "50%",
            border: `1px solid ${accent}45`,
          }}
        />
      ))}

      {/* Telemetry orbit */}
      <div
        style={{
          position: "absolute",
          top: "17%",
          right: "14%",
          width: "min(400px, 40vw)",
          aspectRatio: "1",
          borderRadius: "50%",
        }}
      >
        {telemetryDots.map((dot) => (
          <motion.div
            key={dot.id}
            animate={{
              opacity: [0.18, 1, 0.18],
              scale: [0.75, 1.55, 0.75],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: accent,
              boxShadow: `0 0 12px ${accent}`,
              transform: `
                rotate(${dot.angle}deg)
                translateX(min(185px, 18vw))
              `,
              transformOrigin: "0 0",
            }}
          />
        ))}
      </div>

      {/* Wind streaks */}
      {windStreaks.map((streak) => (
        <motion.div
          key={streak.id}
          initial={{
            x: "-35vw",
            opacity: 0,
          }}
          animate={{
            x: "135vw",
            opacity: [0, 0.58, 0.35, 0],
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
            borderRadius: 999,
            background: `linear-gradient(
              to right,
              transparent,
              ${accent}90,
              transparent
            )`,
            boxShadow: `0 0 10px ${accent}50`,
            transform: "rotate(-8deg)",
          }}
        />
      ))}

      {/* Rain */}
      {rainDrops.map((drop) => (
        <motion.div
          key={drop.id}
          initial={{
            top: "-15%",
            left: `${drop.left}%`,
            opacity: 0,
          }}
          animate={{
            top: "115%",
            left: `${Math.min(drop.left + 13, 108)}%`,
            opacity: [0, drop.opacity, drop.opacity, 0],
          }}
          transition={{
            duration: drop.duration,
            repeat: Infinity,
            delay: drop.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: 1,
            height: drop.height,
            borderRadius: 999,
            background: `linear-gradient(
              to bottom,
              transparent,
              ${accent}aa
            )`,
            filter: "blur(0.3px)",
            transform: "rotate(-18deg)",
          }}
        />
      ))}

      {/* Lightning flash */}
      <motion.div
        animate={{
          opacity: [0, 0, 0.72, 0.08, 0.46, 0, 0],
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          times: [0, 0.61, 0.64, 0.67, 0.7, 0.74, 1],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              circle at 73% 19%,
              rgba(220, 255, 248, 0.34),
              ${accent}16 20%,
              transparent 48%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Lightning bolt */}
      <motion.div
        animate={{
          opacity: [0, 0, 1, 0.08, 0.72, 0, 0],
        }}
        transition={{
          duration: 6.8,
          repeat: Infinity,
          times: [0, 0.61, 0.64, 0.67, 0.7, 0.74, 1],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "12%",
          right: "24%",
          width: 5,
          height: "35%",
          background: "rgba(235, 255, 252, 0.92)",
          clipPath:
            "polygon(38% 0, 100% 0, 63% 42%, 100% 42%, 16% 100%, 37% 56%, 0 56%)",
          filter: "drop-shadow(0 0 9px white)",
          transform: "rotate(9deg)",
        }}
      />

      {/* Ground glow beneath funnel */}
      <motion.div
        animate={{
          scale: [0.82, 1.15, 0.9, 1.08, 0.82],
          opacity: [0.12, 0.4, 0.18, 0.34, 0.12],
        }}
        transition={{
          duration: 5.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          right: "13%",
          bottom: "-10%",
          width: "min(470px, 48vw)",
          height: "23%",
          borderRadius: "50%",
          background: accent,
          filter: "blur(110px)",
        }}
      />

      {/* Subtle telemetry grid */}
      <motion.div
        animate={{
          opacity: [0.05, 0.13, 0.05],
          backgroundPosition: ["0px 0px", "42px 42px"],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${accent}18 1px, transparent 1px),
            linear-gradient(90deg, ${accent}18 1px, transparent 1px)
          `,
          backgroundSize: "42px 42px",
          maskImage:
            "linear-gradient(to bottom, transparent 5%, black 50%, transparent 100%)",
        }}
      />
    </div>
  );
}