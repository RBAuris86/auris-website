"use client";

import { motion } from "framer-motion";

type VolcanoBackgroundProps = {
  accent: string;
};

const embers = Array.from({ length: 34 }, (_, index) => ({
  id: index,
  left: 5 + ((index * 37) % 90),
  size: 3 + (index % 5) * 2,
  delay: (index % 12) * 0.32,
  duration: 5 + (index % 7) * 0.7,
  drift: -55 + (index % 9) * 14,
}));

const ashParticles = Array.from({ length: 26 }, (_, index) => ({
  id: index,
  left: (index * 47) % 100,
  size: 2 + (index % 4),
  delay: (index % 10) * 0.5,
  duration: 10 + (index % 8),
}));

const lavaBubbles = Array.from({ length: 8 }, (_, index) => ({
  id: index,
  left: 10 + ((index * 31) % 80),
  size: 18 + (index % 4) * 9,
  delay: index * 0.65,
}));

export default function VolcanoBackground({
  accent,
}: VolcanoBackgroundProps) {
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
      {/* Dark volcanic atmosphere */}
      <motion.div
        animate={{
          opacity: [0.55, 0.82, 0.55],
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: "-12%",
          background: `
            radial-gradient(
              circle at 74% 88%,
              ${accent}4d 0%,
              ${accent}20 24%,
              transparent 52%
            ),
            radial-gradient(
              circle at 28% 70%,
              rgba(190, 48, 12, 0.22),
              transparent 45%
            ),
            linear-gradient(
              to bottom,
              rgba(8, 5, 4, 0.38),
              rgba(18, 6, 3, 0.72)
            )
          `,
          filter: "blur(24px)",
        }}
      />

      {/* Main magma glow */}
      <motion.div
        animate={{
          scale: [0.9, 1.14, 0.96, 1.08, 0.9],
          opacity: [0.34, 0.72, 0.44, 0.64, 0.34],
        }}
        transition={{
          duration: 6.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "8%",
          right: "8%",
          bottom: "-18%",
          height: "42%",
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse,
              rgba(255, 228, 115, 0.92) 0%,
              ${accent}cc 18%,
              rgba(235, 72, 12, 0.66) 43%,
              transparent 72%
            )
          `,
          filter: "blur(72px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Lava river */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0px 0px",
            "140px 220px",
          ],
          opacity: [0.48, 0.84, 0.56, 0.76, 0.48],
        }}
        transition={{
          backgroundPosition: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          opacity: {
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        style={{
          position: "absolute",
          right: "11%",
          bottom: "-6%",
          width: "32%",
          height: "72%",
          transform: "rotate(13deg)",
          transformOrigin: "bottom center",
          clipPath:
            "polygon(44% 0%, 62% 0%, 70% 22%, 59% 44%, 77% 69%, 61% 100%, 24% 100%, 42% 72%, 31% 48%, 48% 24%)",
          background: `
            repeating-linear-gradient(
              170deg,
              rgba(255, 245, 160, 0.92) 0px,
              ${accent} 12px,
              rgba(230, 54, 8, 0.94) 28px,
              ${accent} 43px,
              rgba(255, 222, 105, 0.88) 58px
            )
          `,
          filter: "blur(3px)",
          boxShadow: `
            0 0 24px ${accent},
            0 0 60px ${accent}99
          `,
          opacity: 0.78,
        }}
      />

      {/* Lava glow around river */}
      <motion.div
        animate={{
          scaleX: [0.92, 1.13, 0.96, 1.08, 0.92],
          opacity: [0.12, 0.36, 0.18, 0.31, 0.12],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          right: "5%",
          bottom: "-8%",
          width: "46%",
          height: "76%",
          background: accent,
          clipPath:
            "polygon(42% 0%, 67% 0%, 72% 28%, 60% 52%, 78% 76%, 64% 100%, 18% 100%, 38% 70%, 26% 44%, 44% 22%)",
          filter: "blur(58px)",
          opacity: 0.25,
        }}
      />

      {/* Lava bubbles */}
      {lavaBubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          animate={{
            y: [10, -18, 6],
            scale: [0.72, 1.18, 0.84],
            opacity: [0.18, 0.82, 0.2],
          }}
          transition={{
            duration: 3.6 + (bubble.id % 4) * 0.6,
            repeat: Infinity,
            delay: bubble.delay,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: `${bubble.left}%`,
            bottom: `${2 + (bubble.id % 3) * 6}%`,
            width: bubble.size,
            height: bubble.size,
            borderRadius: "50%",
            border: `2px solid ${accent}`,
            background: `
              radial-gradient(
                circle at 38% 35%,
                rgba(255, 245, 178, 0.95),
                ${accent} 42%,
                rgba(145, 27, 4, 0.8) 100%
              )
            `,
            boxShadow: `
              0 0 14px ${accent},
              0 0 28px ${accent}88
            `,
          }}
        />
      ))}

      {/* Rising embers */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{
            left: `${ember.left}%`,
            bottom: "-8%",
            x: 0,
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            bottom: "108%",
            x: [0, ember.drift, ember.drift * -0.35, ember.drift * 0.7],
            opacity: [0, 0.95, 0.7, 0.25, 0],
            scale: [0.4, 1.25, 0.9, 0.55],
          }}
          transition={{
            duration: ember.duration,
            repeat: Infinity,
            delay: ember.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: ember.size,
            height: ember.size,
            borderRadius: "50%",
            background: "rgba(255, 229, 126, 0.95)",
            boxShadow: `
              0 0 8px rgba(255, 236, 153, 0.95),
              0 0 18px ${accent}
            `,
          }}
        />
      ))}

      {/* Volcanic ash */}
      {ashParticles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            left: `${particle.left}%`,
            bottom: "-10%",
            opacity: 0,
          }}
          animate={{
            bottom: "112%",
            x: [0, 35, -24, 52],
            opacity: [0, 0.3, 0.24, 0],
            rotate: [0, 90, 220, 360],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            width: particle.size,
            height: particle.size,
            borderRadius: "45%",
            background: "rgba(92, 77, 70, 0.72)",
            filter: "blur(0.5px)",
          }}
        />
      ))}

      {/* Smoke plume one */}
      <motion.div
        animate={{
          y: [20, -45, -15, -70],
          x: [0, 35, -18, 42],
          scale: [0.85, 1.24, 1.05, 1.42],
          opacity: [0.1, 0.34, 0.24, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          right: "10%",
          bottom: "27%",
          width: "34%",
          height: "38%",
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse,
              rgba(67, 57, 52, 0.72),
              rgba(36, 30, 28, 0.42) 48%,
              transparent 74%
            )
          `,
          filter: "blur(38px)",
        }}
      />

      {/* Smoke plume two */}
      <motion.div
        animate={{
          y: [35, -30, -72],
          x: [0, -42, 15],
          scale: [0.72, 1.16, 1.48],
          opacity: [0.08, 0.3, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          delay: 3,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          right: "24%",
          bottom: "33%",
          width: "28%",
          height: "31%",
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse,
              rgba(80, 67, 61, 0.62),
              rgba(35, 29, 26, 0.34) 52%,
              transparent 76%
            )
          `,
          filter: "blur(34px)",
        }}
      />

      {/* Heat shimmer */}
      <motion.div
        animate={{
          x: [-8, 10, -5, 8, -8],
          scaleX: [0.98, 1.03, 0.99, 1.02, 0.98],
          opacity: [0.05, 0.15, 0.07, 0.13, 0.05],
        }}
        transition={{
          duration: 3.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "4%",
          right: "4%",
          bottom: "2%",
          height: "52%",
          background: `
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              ${accent}20 3px,
              transparent 7px,
              rgba(255, 196, 100, 0.08) 12px,
              transparent 18px
            )
          `,
          filter: "blur(7px)",
          maskImage:
            "linear-gradient(to top, black, rgba(0,0,0,0.65), transparent)",
        }}
      />

      {/* Occasional eruption flash */}
      <motion.div
        animate={{
          opacity: [0, 0, 0.7, 0.14, 0.48, 0, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          times: [0, 0.66, 0.69, 0.72, 0.75, 0.8, 1],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              circle at 76% 68%,
              rgba(255, 242, 165, 0.44),
              ${accent}25 21%,
              transparent 52%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Subtle technical grid */}
      <motion.div
        animate={{
          opacity: [0.025, 0.08, 0.025],
          backgroundPosition: ["0px 0px", "48px 48px"],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${accent}14 1px, transparent 1px),
            linear-gradient(90deg, ${accent}14 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 48%, transparent)",
        }}
      />
    </div>
  );
}