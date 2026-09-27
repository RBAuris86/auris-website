"use client";

import { motion } from "framer-motion";

type WildfireBackgroundProps = {
  accent: string;
};

const embers = Array.from({ length: 52 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  bottom: 2 + ((index * 19) % 24),
  size: 2 + (index % 5),
  delay: (index % 16) * 0.22,
  duration: 5 + (index % 8) * 0.65,
  drift: 80 + (index % 7) * 24,
}));

const flameColumns = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: 1 + index * 5.6,
  width: 34 + (index % 5) * 10,
  height: 90 + (index % 7) * 28,
  delay: index * 0.16,
  duration: 2.5 + (index % 5) * 0.28,
}));

const smokeLayers = [
  {
    top: "8%",
    width: "62%",
    height: "34%",
    duration: 22,
    delay: 0,
    opacity: 0.36,
  },
  {
    top: "22%",
    width: "74%",
    height: "42%",
    duration: 28,
    delay: 4,
    opacity: 0.28,
  },
  {
    top: "38%",
    width: "68%",
    height: "36%",
    duration: 25,
    delay: 8,
    opacity: 0.22,
  },
];

const treePositions = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: index * 6.1 - 3,
  height: 80 + (index % 6) * 22,
}));

export default function WildfireBackground({
  accent,
}: WildfireBackgroundProps) {
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
      {/* Burning horizon */}
      <motion.div
        animate={{
          opacity: [0.4, 0.72, 0.48, 0.66, 0.4],
          scale: [1, 1.04, 1.01, 1.06, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: "-10%",
          background: `
            radial-gradient(
              ellipse at 52% 92%,
              rgba(255, 226, 112, 0.7) 0%,
              ${accent}aa 16%,
              rgba(220, 58, 10, 0.5) 32%,
              transparent 62%
            ),
            radial-gradient(
              circle at 18% 72%,
              rgba(255, 126, 34, 0.22),
              transparent 40%
            ),
            linear-gradient(
              to bottom,
              rgba(10, 11, 10, 0.2),
              rgba(30, 11, 4, 0.6)
            )
          `,
          filter: "blur(28px)",
        }}
      />

      {/* Advancing fire glow */}
      <motion.div
        animate={{
          x: ["-8%", "6%", "-3%", "8%", "-8%"],
          scaleX: [0.92, 1.08, 0.97, 1.12, 0.92],
          opacity: [0.3, 0.68, 0.42, 0.62, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "-8%",
          right: "-8%",
          bottom: "-20%",
          height: "42%",
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse,
              rgba(255, 244, 170, 0.95),
              ${accent}dd 22%,
              rgba(225, 54, 8, 0.65) 48%,
              transparent 75%
            )
          `,
          filter: "blur(70px)",
          mixBlendMode: "screen",
        }}
      />

      {/* Tree silhouettes */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "8%",
          height: "28%",
          opacity: 0.72,
        }}
      >
        {treePositions.map((tree) => (
          <div
            key={tree.id}
            style={{
              position: "absolute",
              left: `${tree.left}%`,
              bottom: 0,
              width: 44,
              height: tree.height,
              transform: `scaleX(${0.8 + (tree.id % 4) * 0.08})`,
              transformOrigin: "bottom center",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: "50%",
                bottom: 0,
                width: 5,
                height: "48%",
                transform: "translateX(-50%)",
                background: "rgba(5, 7, 5, 0.95)",
              }}
            />

            {[0, 1, 2, 3].map((tier) => (
              <div
                key={tier}
                style={{
                  position: "absolute",
                  left: "50%",
                  bottom: `${22 + tier * 16}%`,
                  width: `${100 - tier * 15}%`,
                  height: `${34 - tier * 3}%`,
                  transform: "translateX(-50%)",
                  clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
                  background: "rgba(6, 9, 7, 0.96)",
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Fireline flames */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "-3%",
          height: "34%",
        }}
      >
        {flameColumns.map((flame) => (
          <motion.div
            key={flame.id}
            animate={{
              height: [
                flame.height * 0.72,
                flame.height * 1.18,
                flame.height * 0.88,
                flame.height * 1.08,
                flame.height * 0.72,
              ],
              x: [0, 9, -6, 12, 0],
              rotate: [-3, 8, -5, 6, -3],
              opacity: [0.56, 0.94, 0.7, 0.9, 0.56],
            }}
            transition={{
              duration: flame.duration,
              repeat: Infinity,
              delay: flame.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              left: `${flame.left}%`,
              bottom: 0,
              width: flame.width,
              height: flame.height,
              transformOrigin: "bottom center",
              clipPath:
                "polygon(50% 0%, 68% 32%, 91% 100%, 10% 100%, 31% 38%)",
              background: `
                linear-gradient(
                  to top,
                  rgba(255, 245, 164, 0.98) 0%,
                  ${accent} 28%,
                  rgba(229, 60, 9, 0.92) 63%,
                  rgba(122, 20, 5, 0.1) 100%
                )
              `,
              filter: "blur(1px)",
              boxShadow: `
                0 0 14px ${accent},
                0 0 34px ${accent}88
              `,
              mixBlendMode: "screen",
            }}
          />
        ))}
      </div>

      {/* Smoke layers */}
      {smokeLayers.map((layer, index) => (
        <motion.div
          key={index}
          initial={{
            x: "-65%",
            opacity: 0,
          }}
          animate={{
            x: "125%",
            opacity: [
              0,
              layer.opacity,
              layer.opacity * 0.8,
              layer.opacity,
              0,
            ],
            scale: [0.84, 1.08, 1.18],
          }}
          transition={{
            duration: layer.duration,
            repeat: Infinity,
            delay: layer.delay,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: layer.top,
            left: 0,
            width: layer.width,
            height: layer.height,
            borderRadius: "48%",
            background: `
              radial-gradient(
                ellipse,
                rgba(74, 67, 60, 0.74),
                rgba(47, 43, 39, 0.52) 42%,
                rgba(26, 25, 23, 0.18) 68%,
                transparent 80%
              )
            `,
            filter: "blur(40px)",
          }}
        />
      ))}

      {/* Wind-driven embers */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{
            left: `${ember.left}%`,
            bottom: `${ember.bottom}%`,
            x: -80,
            opacity: 0,
            scale: 0.4,
          }}
          animate={{
            x: ["-8vw", `${ember.drift}vw`],
            y: [0, -45, -95, -150],
            opacity: [0, 0.95, 0.72, 0.3, 0],
            scale: [0.4, 1.2, 0.84, 0.5],
            rotate: [0, 120, 260, 420],
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
            background: "rgba(255, 235, 144, 0.98)",
            boxShadow: `
              0 0 8px rgba(255, 237, 156, 0.95),
              0 0 18px ${accent}
            `,
          }}
        />
      ))}

      {/* Wind gust streaks */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={index}
          initial={{
            x: "-35vw",
            opacity: 0,
          }}
          animate={{
            x: "135vw",
            opacity: [0, 0.4, 0.22, 0],
          }}
          transition={{
            duration: 4.8 + (index % 5) * 0.7,
            repeat: Infinity,
            delay: index * 0.52,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${14 + ((index * 37) % 70)}%`,
            left: 0,
            width: 80 + (index % 5) * 38,
            height: 1,
            background: `linear-gradient(
              to right,
              transparent,
              ${accent}88,
              transparent
            )`,
            boxShadow: `0 0 8px ${accent}55`,
            transform: "rotate(-7deg)",
          }}
        />
      ))}

      {/* Heat shimmer */}
      <motion.div
        animate={{
          x: [-10, 12, -6, 9, -10],
          scaleX: [0.98, 1.035, 0.99, 1.02, 0.98],
          opacity: [0.04, 0.13, 0.07, 0.11, 0.04],
        }}
        transition={{
          duration: 3.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "2%",
          height: "52%",
          background: `
            repeating-linear-gradient(
              90deg,
              transparent 0px,
              rgba(255, 181, 82, 0.1) 4px,
              transparent 10px,
              ${accent}18 16px,
              transparent 22px
            )
          `,
          filter: "blur(6px)",
          maskImage:
            "linear-gradient(to top, black, rgba(0,0,0,0.72), transparent)",
        }}
      />

      {/* Flare-up illumination */}
      <motion.div
        animate={{
          opacity: [0, 0, 0.54, 0.12, 0.42, 0, 0],
        }}
        transition={{
          duration: 8.5,
          repeat: Infinity,
          times: [0, 0.6, 0.64, 0.68, 0.72, 0.78, 1],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              ellipse at 62% 82%,
              rgba(255, 241, 164, 0.5),
              ${accent}28 25%,
              transparent 56%
            )
          `,
          mixBlendMode: "screen",
        }}
      />

      {/* Satellite fire scan */}
      <motion.div
        animate={{
          y: ["-20%", "120%"],
          opacity: [0, 0.34, 0.16, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: "4%",
          right: "4%",
          height: "16%",
          background: `linear-gradient(
            to bottom,
            transparent,
            ${accent}12,
            ${accent}55,
            transparent
          )`,
          filter: "blur(7px)",
          boxShadow: `0 0 24px ${accent}22`,
        }}
      />

      {/* Technical monitoring grid */}
      <motion.div
        animate={{
          opacity: [0.02, 0.07, 0.02],
          backgroundPosition: ["0px 0px", "52px 52px"],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${accent}13 1px, transparent 1px),
            linear-gradient(90deg, ${accent}13 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage:
            "linear-gradient(to bottom, transparent 5%, black 46%, transparent)",
        }}
      />
    </div>
  );
}