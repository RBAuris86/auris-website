"use client";

import { motion } from "framer-motion";

type DefaultTerraBackgroundProps = {
  accent: string;
};

const contourRings = Array.from({ length: 5 }, (_, index) => ({
  id: index,
  inset: 8 + index * 7,
  delay: index * 0.7,
}));

const sensorPoints = Array.from({ length: 14 }, (_, index) => ({
  id: index,
  left: 7 + ((index * 29) % 86),
  top: 10 + ((index * 41) % 76),
  delay: index * 0.2,
}));

const dataParticles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: (index * 47) % 100,
  delay: (index % 8) * 0.55,
  duration: 8 + (index % 6),
  size: 2 + (index % 3),
}));

export default function DefaultTerraBackground({
  accent,
}: DefaultTerraBackgroundProps) {
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
      {/* Environmental atmosphere */}
      <motion.div
        animate={{
          opacity: [0.24, 0.42, 0.24],
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          inset: "-12%",
          background: `
            radial-gradient(
              circle at 72% 28%,
              ${accent}2e 0%,
              ${accent}14 24%,
              transparent 52%
            ),
            radial-gradient(
              circle at 24% 74%,
              ${accent}20 0%,
              transparent 46%
            ),
            linear-gradient(
              145deg,
              rgba(5, 18, 15, 0.42),
              transparent 48%,
              rgba(5, 26, 21, 0.34)
            )
          `,
          filter: "blur(34px)",
        }}
      />

      {/* Lower terrain glow */}
      <motion.div
        animate={{
          scaleX: [0.94, 1.08, 0.97, 1.04, 0.94],
          opacity: [0.14, 0.3, 0.18, 0.26, 0.14],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "-8%",
          right: "-8%",
          bottom: "-24%",
          height: "52%",
          borderRadius: "50%",
          background: accent,
          filter: "blur(135px)",
        }}
      />

      {/* Terrain contour map */}
      <motion.div
        animate={{
          rotate: [0, 2, -1, 1, 0],
          scale: [0.97, 1.03, 0.99, 1.02, 0.97],
          opacity: [0.18, 0.36, 0.22, 0.32, 0.18],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "10%",
          right: "4%",
          width: "min(650px, 64vw)",
          aspectRatio: "1",
          borderRadius: "46% 54% 58% 42% / 44% 38% 62% 56%",
        }}
      >
        {contourRings.map((ring) => (
          <motion.div
            key={ring.id}
            animate={{
              scale: [0.96, 1.04, 0.98, 1.02, 0.96],
              opacity: [0.26, 0.62, 0.32, 0.54, 0.26],
            }}
            transition={{
              duration: 6.5 + ring.id,
              repeat: Infinity,
              delay: ring.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: `${ring.inset}%`,
              borderRadius:
                ring.id % 2 === 0
                  ? "43% 57% 48% 52% / 56% 39% 61% 44%"
                  : "58% 42% 61% 39% / 41% 54% 46% 59%",
              border: `1px solid ${accent}55`,
              boxShadow: `0 0 18px ${accent}12`,
            }}
          />
        ))}
      </motion.div>

      {/* Environmental monitoring grid */}
      <motion.div
        animate={{
          opacity: [0.035, 0.11, 0.035],
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
            linear-gradient(${accent}18 1px, transparent 1px),
            linear-gradient(90deg, ${accent}18 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent 3%, black 42%, transparent 100%)",
        }}
      />

      {/* Sensor network */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.18,
        }}
      >
        {sensorPoints.slice(0, -1).map((sensor, index) => {
          const nextSensor = sensorPoints[index + 1];

          return (
            <motion.line
              key={sensor.id}
              x1={sensor.left}
              y1={sensor.top}
              x2={nextSensor.left}
              y2={nextSensor.top}
              stroke={accent}
              strokeWidth="0.12"
              vectorEffect="non-scaling-stroke"
              animate={{
                opacity: [0.12, 0.58, 0.12],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                delay: sensor.delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Sensor nodes */}
      {sensorPoints.map((sensor) => (
        <div
          key={sensor.id}
          style={{
            position: "absolute",
            left: `${sensor.left}%`,
            top: `${sensor.top}%`,
            width: 8,
            height: 8,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            animate={{
              scale: [0.8, 1.7, 0.8],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: sensor.delay,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: accent,
              boxShadow: `
                0 0 10px ${accent},
                0 0 22px ${accent}88
              `,
            }}
          />

          <motion.div
            animate={{
              scale: [0.4, 2.4],
              opacity: [0.6, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: sensor.delay,
              ease: "easeOut",
            }}
            style={{
              position: "absolute",
              inset: -4,
              borderRadius: "50%",
              border: `1px solid ${accent}99`,
            }}
          />
        </div>
      ))}

      {/* Vertical environmental scan */}
      <motion.div
        animate={{
          y: ["-20%", "120%"],
          opacity: [0, 0.38, 0.2, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 1.5,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: "4%",
          right: "4%",
          height: "18%",
          background: `linear-gradient(
            to bottom,
            transparent,
            ${accent}22,
            ${accent}70,
            transparent
          )`,
          filter: "blur(6px)",
          boxShadow: `0 0 28px ${accent}24`,
        }}
      />

      {/* Horizontal telemetry sweep */}
      <motion.div
        animate={{
          x: ["-35%", "135%"],
          opacity: [0, 0.42, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          delay: 1.2,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "34%",
          left: 0,
          width: "34%",
          height: 2,
          background: `linear-gradient(
            to right,
            transparent,
            ${accent},
            transparent
          )`,
          boxShadow: `0 0 16px ${accent}`,
        }}
      />

      {/* Floating environmental data */}
      {dataParticles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{
            left: `${particle.left}%`,
            bottom: "-8%",
            opacity: 0,
          }}
          animate={{
            bottom: "108%",
            x: [0, 24, -18, 35],
            opacity: [0, 0.54, 0.28, 0],
            scale: [0.6, 1.2, 0.9, 0.5],
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
            borderRadius: "50%",
            background: accent,
            boxShadow: `0 0 10px ${accent}`,
          }}
        />
      ))}

      {/* Central Terra pulse */}
      <motion.div
        animate={{
          scale: [0.6, 1.5],
          opacity: [0.42, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          width: 220,
          height: 220,
          marginLeft: -110,
          marginTop: -110,
          borderRadius: "50%",
          border: `1px solid ${accent}80`,
        }}
      />

      <motion.div
        animate={{
          scale: [0.82, 1.18, 0.82],
          opacity: [0.24, 0.65, 0.24],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "48%",
          left: "50%",
          width: 12,
          height: 12,
          marginLeft: -6,
          marginTop: -6,
          borderRadius: "50%",
          background: accent,
          boxShadow: `
            0 0 14px ${accent},
            0 0 34px ${accent}
          `,
        }}
      />
    </div>
  );
}