"use client";

import { motion } from "framer-motion";

type SeismicBackgroundProps = {
  accent: string;
};

const sensors = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: 8 + ((i * 29) % 84),
  top: 12 + ((i * 37) % 72),
}));

const rings = Array.from({ length: 4 }, (_, i) => ({
  id: i,
  delay: i * 1.1,
}));

export default function SeismicBackground({
  accent,
}: SeismicBackgroundProps) {
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
      {/* Earth glow */}
      <motion.div
        animate={{
          scale: [1, 1.06, 1],
          opacity: [0.18, 0.34, 0.18],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "-10%",
          right: "-10%",
          bottom: "-25%",
          height: "55%",
          background: accent,
          borderRadius: "50%",
          filter: "blur(130px)",
        }}
      />

      {/* Scientific Grid */}
      <motion.div
        animate={{
          backgroundPosition: [
            "0px 0px",
            "80px 80px",
          ],
          opacity: [0.04, 0.12, 0.04],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${accent}22 1px, transparent 1px),
            linear-gradient(90deg, ${accent}22 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Fault Line */}
      <motion.div
        animate={{
          opacity: [0.35, 0.85, 0.35],
          scaleY: [1, 1.04, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        style={{
          position: "absolute",
          top: "8%",
          left: "48%",
          width: 5,
          height: "88%",
          background: `
            repeating-linear-gradient(
              to bottom,
              ${accent},
              ${accent} 16px,
              transparent 16px,
              transparent 28px
            )
          `,
          boxShadow: `
            0 0 18px ${accent},
            0 0 40px ${accent}55
          `,
        }}
      />

      {/* Epicenter Rings */}
      {rings.map((ring) => (
        <motion.div
          key={ring.id}
          animate={{
            scale: [0.15, 1.6],
            opacity: [0.85, 0],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            delay: ring.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 300,
            height: 300,
            marginLeft: -150,
            marginTop: -150,
            borderRadius: "50%",
            border: `2px solid ${accent}`,
          }}
        />
      ))}

      {/* Seismic Wave */}
      <motion.svg
        viewBox="0 0 1200 180"
        animate={{
          x: [0, -160],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "18%",
          width: "140%",
          height: 180,
          opacity: 0.75,
          filter: `drop-shadow(0 0 12px ${accent})`,
        }}
      >
        <path
          d="
            M0 90
            L80 90
            L120 82
            L150 108
            L180 34
            L210 145
            L240 62
            L280 90
            L360 90
            L420 70
            L470 120
            L520 48
            L560 136
            L610 72
            L660 90
            L1200 90
          "
          fill="none"
          stroke={accent}
          strokeWidth="4"
        />
      </motion.svg>

      {/* Sensor Nodes */}
      {sensors.map((sensor) => (
        <motion.div
          key={sensor.id}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            delay: sensor.id * 0.22,
          }}
          style={{
            position: "absolute",
            left: `${sensor.left}%`,
            top: `${sensor.top}%`,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: accent,
            boxShadow: `
              0 0 12px ${accent},
              0 0 28px ${accent}
            `,
          }}
        />
      ))}

      {/* Sensor Connections */}
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.15,
        }}
      >
        {sensors.slice(0, sensors.length - 1).map((sensor, index) => (
          <line
            key={index}
            x1={`${sensor.left}%`}
            y1={`${sensor.top}%`}
            x2={`${sensors[index + 1].left}%`}
            y2={`${sensors[index + 1].top}%`}
            stroke={accent}
            strokeWidth="1"
          />
        ))}
      </svg>

      {/* Scanner */}
      <motion.div
        animate={{
          x: ["-30%", "130%"],
          opacity: [0, 0.45, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "28%",
          left: 0,
          width: "35%",
          height: 2,
          background: `
            linear-gradient(
              to right,
              transparent,
              ${accent},
              transparent
            )
          `,
          boxShadow: `0 0 18px ${accent}`,
        }}
      />
    </div>
  );
}