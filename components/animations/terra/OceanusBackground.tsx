"use client";

import { motion } from "framer-motion";

type OceanusBackgroundProps = {
  accent: string;
};

const particles = Array.from({ length: 42 }, (_, index) => ({
  id: index,
  left: (index * 31) % 100,
  top: 18 + ((index * 23) % 76),
  size: 2 + (index % 4),
  delay: (index % 14) * 0.4,
  duration: 8 + (index % 8),
  drift: 12 + (index % 6) * 5,
}));

const telemetryNodes = [
  { left: 16, top: 36, delay: 0 },
  { left: 32, top: 57, delay: 0.7 },
  { left: 48, top: 43, delay: 1.4 },
  { left: 67, top: 62, delay: 2.1 },
  { left: 82, top: 39, delay: 2.8 },
];

const lightRays = Array.from({ length: 6 }, (_, index) => ({
  id: index,
  left: 4 + index * 18,
  width: 90 + (index % 3) * 35,
  delay: index * 0.8,
  duration: 8 + index * 0.7,
}));

export default function OceanusBackground({
  accent,
}: OceanusBackgroundProps) {
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
            rgba(5, 36, 74, 0.38) 0%,
            rgba(3, 29, 62, 0.7) 38%,
            rgba(1, 14, 36, 0.94) 100%
          )
        `,
      }}
    >
      {/* Deep ocean glow */}
      <motion.div
        animate={{
          opacity: [0.28, 0.5, 0.34, 0.46, 0.28],
          scale: [1, 1.08, 1.03, 1.1, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "18%",
          right: "18%",
          bottom: "-28%",
          height: "62%",
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse,
              ${accent}77 0%,
              rgba(37, 174, 220, 0.2) 34%,
              transparent 72%
            )
          `,
          filter: "blur(70px)",
        }}
      />

      {/* Ocean surface */}
      <motion.div
        animate={{
          x: ["-4%", "4%", "-2%", "5%", "-4%"],
          scaleY: [0.92, 1.12, 0.98, 1.08, 0.92],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "-4%",
          left: "-8%",
          width: "116%",
          height: "18%",
          borderRadius: "0 0 50% 50%",
          background: `
            linear-gradient(
              to bottom,
              rgba(124, 226, 255, 0.28),
              ${accent}33 42%,
              rgba(0, 76, 145, 0.16) 72%,
              transparent
            )
          `,
          filter: "blur(8px)",
          boxShadow: `
            0 12px 42px rgba(64, 205, 255, 0.22),
            0 28px 80px ${accent}22
          `,
        }}
      />

      {/* Secondary wave layer */}
      <motion.div
        animate={{
          x: ["5%", "-6%", "3%", "-4%", "5%"],
          opacity: [0.22, 0.38, 0.27, 0.34, 0.22],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "8%",
          left: "-10%",
          width: "120%",
          height: "9%",
          borderRadius: "50%",
          borderTop: `1px solid ${accent}55`,
          background: `
            radial-gradient(
              ellipse,
              rgba(110, 218, 255, 0.14),
              transparent 68%
            )
          `,
          filter: "blur(4px)",
        }}
      />

      {/* Underwater light rays */}
      {lightRays.map((ray) => (
        <motion.div
          key={ray.id}
          animate={{
            x: [-16, 18, -8, 12, -16],
            rotate: [-8, -4, -10, -5, -8],
            opacity: [0.05, 0.15, 0.08, 0.13, 0.05],
          }}
          transition={{
            duration: ray.duration,
            repeat: Infinity,
            delay: ray.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            top: "-12%",
            left: `${ray.left}%`,
            width: ray.width,
            height: "92%",
            transformOrigin: "top center",
            clipPath: "polygon(34% 0%, 66% 0%, 100% 100%, 0% 100%)",
            background: `
              linear-gradient(
                to bottom,
                rgba(167, 236, 255, 0.26),
                ${accent}18 48%,
                transparent 96%
              )
            `,
            filter: "blur(18px)",
          }}
        />
      ))}

      {/* Sonar grid */}
      <motion.div
        animate={{
          opacity: [0.025, 0.08, 0.025],
          backgroundPosition: ["0px 0px", "64px 64px"],
        }}
        transition={{
          duration: 14,
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
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, transparent 8%, black 42%, black 76%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 8%, black 42%, black 76%, transparent)",
        }}
      />

      {/* Main sonar origin */}
      <motion.div
        animate={{
          scale: [0.9, 1.08, 0.96, 1.04, 0.9],
          opacity: [0.55, 1, 0.7, 0.92, 0.55],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "58%",
          width: 12,
          height: 12,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "#b8f3ff",
          boxShadow: `
            0 0 12px #b8f3ff,
            0 0 28px ${accent},
            0 0 54px ${accent}88
          `,
        }}
      />

      {/* Expanding sonar rings */}
      {[0, 1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          initial={{
            scale: 0.15,
            opacity: 0,
          }}
          animate={{
            scale: [0.15, 1.9],
            opacity: [0, 0.58, 0.24, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            delay: ring * 1.35,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "58%",
            width: 220,
            height: 220,
            marginLeft: -110,
            marginTop: -110,
            borderRadius: "50%",
            border: `1px solid ${accent}aa`,
            boxShadow: `
              inset 0 0 18px ${accent}22,
              0 0 20px ${accent}22
            `,
          }}
        />
      ))}

      {/* Sonar sweep */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "58%",
          width: 240,
          height: 240,
          marginLeft: -120,
          marginTop: -120,
          borderRadius: "50%",
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 315deg,
              ${accent}08 328deg,
              ${accent}44 348deg,
              transparent 360deg
            )
          `,
          filter: "blur(1px)",
        }}
      />

      {/* Telemetry connections */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
        }}
      >
        <motion.path
          d="M 16 36 L 32 57 L 48 43 L 67 62 L 82 39"
          fill="none"
          stroke={accent}
          strokeWidth="0.16"
          strokeDasharray="1.4 1.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 0.4, 0.18],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Telemetry sensor nodes */}
      {telemetryNodes.map((node, index) => (
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
              scale: [0.8, 1.25, 0.92, 1.12, 0.8],
              opacity: [0.5, 1, 0.7, 0.9, 0.5],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#b8f3ff",
              border: `1px solid ${accent}`,
              boxShadow: `
                0 0 8px #b8f3ff,
                0 0 18px ${accent}
              `,
            }}
          />

          <motion.div
            animate={{
              scale: [0.5, 2.7],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 3,
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

      {/* Floating ocean particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            opacity: 0,
          }}
          animate={{
            y: [30, -110],
            x: [
              0,
              particle.drift,
              -particle.drift * 0.35,
              particle.drift * 0.5,
            ],
            opacity: [0, 0.6, 0.38, 0],
            scale: [0.45, 1.05, 0.76, 0.3],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: particle.size,
            height: particle.size,
            borderRadius: "50%",
            background: "rgba(176, 238, 255, 0.8)",
            boxShadow: `0 0 8px ${accent}aa`,
          }}
        />
      ))}

      {/* Autonomous underwater drone */}
      <motion.div
        initial={{
          x: "-24vw",
          opacity: 0,
        }}
        animate={{
          x: "124vw",
          y: [0, -16, 8, -9, 0],
          opacity: [0, 0.22, 0.3, 0.24, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatDelay: 10,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "68%",
          left: 0,
          width: 92,
          height: 25,
          borderRadius: "50% 56% 46% 50%",
          background: `
            linear-gradient(
              to bottom,
              rgba(123, 213, 239, 0.26),
              rgba(1, 17, 36, 0.68)
            )
          `,
          border: `1px solid ${accent}33`,
          boxShadow: `0 0 18px ${accent}18`,
          filter: "blur(0.4px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: -17,
            top: 7,
            width: 22,
            height: 11,
            clipPath: "polygon(100% 0%, 100% 100%, 0% 50%)",
            background: "rgba(35, 100, 130, 0.34)",
          }}
        />

        <motion.div
          animate={{
            opacity: [0.25, 1, 0.4, 1, 0.25],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            right: 12,
            top: 8,
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#b8f3ff",
            boxShadow: `0 0 10px ${accent}`,
          }}
        />
      </motion.div>

      {/* Deep-sea shadow */}
      <motion.div
        initial={{
          x: "120vw",
          opacity: 0,
        }}
        animate={{
          x: "-40vw",
          y: [0, 14, -7, 10, 0],
          opacity: [0, 0.08, 0.13, 0.08, 0],
        }}
        transition={{
          duration: 34,
          repeat: Infinity,
          repeatDelay: 18,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "76%",
          left: 0,
          width: 260,
          height: 52,
          borderRadius: "50%",
          background: "rgba(0, 3, 12, 0.72)",
          filter: "blur(14px)",
        }}
      />

      {/* Vertical environmental scan */}
      <motion.div
        animate={{
          y: ["-14%", "114%"],
          opacity: [0, 0.28, 0.12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: "3%",
          right: "3%",
          height: "13%",
          background: `
            linear-gradient(
              to bottom,
              transparent,
              ${accent}0f,
              ${accent}66,
              transparent
            )
          `,
          filter: "blur(6px)",
          boxShadow: `0 0 24px ${accent}22`,
        }}
      />

      {/* Water shimmer distortion */}
      <motion.div
        animate={{
          x: [-10, 12, -5, 8, -10],
          scaleX: [0.99, 1.025, 0.985, 1.018, 0.99],
          opacity: [0.025, 0.085, 0.04, 0.07, 0.025],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `
            repeating-linear-gradient(
              0deg,
              transparent 0px,
              rgba(124, 224, 255, 0.08) 3px,
              transparent 7px,
              ${accent}0d 12px,
              transparent 18px
            )
          `,
          filter: "blur(4px)",
        }}
      />
    </div>
  );
}