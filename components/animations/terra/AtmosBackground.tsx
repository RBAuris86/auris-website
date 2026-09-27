"use client";

import { motion } from "framer-motion";

type AtmosBackgroundProps = {
  accent: string;
};

const airborneParticles = Array.from({ length: 46 }, (_, index) => ({
  id: index,
  left: (index * 37) % 100,
  top: 12 + ((index * 29) % 76),
  size: 2 + (index % 5),
  delay: (index % 15) * 0.42,
  duration: 8 + (index % 8) * 0.8,
  drift: 18 + (index % 7) * 8,
  type: index % 4,
}));

const sensorNodes = [
  { left: 13, top: 59, delay: 0 },
  { left: 27, top: 38, delay: 0.6 },
  { left: 42, top: 65, delay: 1.2 },
  { left: 62, top: 34, delay: 1.8 },
  { left: 77, top: 57, delay: 2.4 },
  { left: 89, top: 42, delay: 3 },
];

const pollutionClouds = [
  {
    left: "10%",
    top: "27%",
    width: 250,
    height: 120,
    delay: 0,
    color: "rgba(113, 121, 132, 0.26)",
  },
  {
    left: "66%",
    top: "38%",
    width: 300,
    height: 135,
    delay: 4,
    color: "rgba(119, 104, 151, 0.2)",
  },
  {
    left: "28%",
    top: "68%",
    width: 280,
    height: 115,
    delay: 8,
    color: "rgba(116, 145, 119, 0.18)",
  },
];

const dataPackets = Array.from({ length: 16 }, (_, index) => ({
  id: index,
  left: 45 + (index % 4) * 3.5,
  delay: index * 0.34,
  duration: 3.2 + (index % 5) * 0.35,
}));

export default function AtmosBackground({
  accent,
}: AtmosBackgroundProps) {
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
            rgba(4, 24, 34, 0.9) 0%,
            rgba(7, 42, 49, 0.76) 45%,
            rgba(10, 57, 54, 0.52) 100%
          )
        `,
      }}
    >
      {/* Environmental ground glow */}
      <motion.div
        animate={{
          opacity: [0.24, 0.48, 0.31, 0.42, 0.24],
          scale: [1, 1.08, 1.03, 1.1, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "14%",
          right: "14%",
          bottom: "-30%",
          height: "66%",
          borderRadius: "50%",
          background: `
            radial-gradient(
              ellipse,
              ${accent}5c 0%,
              rgba(56, 218, 163, 0.2) 38%,
              transparent 74%
            )
          `,
          filter: "blur(78px)",
        }}
      />

      {/* Distant terrain silhouette */}
      <motion.div
        animate={{
          x: [-8, 8, -4, 6, -8],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: "-6%",
          right: "-6%",
          bottom: 0,
          height: "32%",
          clipPath:
            "polygon(0% 100%, 0% 63%, 9% 54%, 18% 67%, 29% 45%, 41% 61%, 53% 41%, 66% 58%, 78% 47%, 90% 63%, 100% 52%, 100% 100%)",
          background: `
            linear-gradient(
              to bottom,
              rgba(26, 83, 71, 0.28),
              rgba(2, 19, 22, 0.92)
            )
          `,
          opacity: 0.78,
        }}
      />

      {/* Pollution clouds */}
      {pollutionClouds.map((cloud, index) => (
        <motion.div
          key={index}
          animate={{
            x: [-24, 36, -12, 28, -24],
            y: [0, -12, 7, -8, 0],
            scale: [0.9, 1.08, 0.98, 1.12, 0.9],
            opacity: [0.08, 0.28, 0.16, 0.24, 0.08],
          }}
          transition={{
            duration: 16 + index * 3,
            repeat: Infinity,
            delay: cloud.delay,
            ease: "easeInOut",
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
                ${cloud.color},
                rgba(67, 77, 76, 0.1) 52%,
                transparent 78%
              )
            `,
            filter: "blur(34px)",
          }}
        />
      ))}

      {/* Hexagonal environmental grid */}
      <motion.div
        animate={{
          opacity: [0.025, 0.075, 0.025],
          backgroundPosition: ["0px 0px", "72px 42px"],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(30deg, ${accent}12 12%, transparent 12.5%, transparent 87%, ${accent}12 87.5%, ${accent}12),
            linear-gradient(150deg, ${accent}12 12%, transparent 12.5%, transparent 87%, ${accent}12 87.5%, ${accent}12),
            linear-gradient(30deg, ${accent}12 12%, transparent 12.5%, transparent 87%, ${accent}12 87.5%, ${accent}12),
            linear-gradient(150deg, ${accent}12 12%, transparent 12.5%, transparent 87%, ${accent}12 87.5%, ${accent}12)
          `,
          backgroundSize: "72px 42px",
          backgroundPosition: "0 0, 0 0, 36px 21px, 36px 21px",
          maskImage:
            "linear-gradient(to bottom, transparent 6%, black 42%, black 82%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 6%, black 42%, black 82%, transparent)",
        }}
      />

      {/* Monitoring tower */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          bottom: "8%",
          width: 150,
          height: "68%",
          transform: "translateX(-50%)",
        }}
      >
        {/* Tower foundation */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            width: 108,
            height: 25,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: "rgba(1, 16, 19, 0.92)",
            border: `1px solid ${accent}38`,
            boxShadow: `
              0 0 24px ${accent}20,
              inset 0 0 18px rgba(81, 255, 198, 0.08)
            `,
          }}
        />

        {/* Tower lattice */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            bottom: 17,
            width: 72,
            height: "76%",
            transform: "translateX(-50%)",
            clipPath:
              "polygon(38% 0%, 62% 0%, 100% 100%, 0% 100%)",
            background: `
              repeating-linear-gradient(
                45deg,
                transparent 0px,
                transparent 12px,
                ${accent}28 13px,
                ${accent}28 15px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent 0px,
                transparent 12px,
                ${accent}20 13px,
                ${accent}20 15px
              ),
              linear-gradient(
                to right,
                rgba(5, 30, 34, 0.94),
                rgba(22, 78, 73, 0.72),
                rgba(5, 30, 34, 0.94)
              )
            `,
            borderLeft: `2px solid ${accent}48`,
            borderRight: `2px solid ${accent}48`,
            boxShadow: `0 0 24px ${accent}18`,
          }}
        />

        {/* Tower service platform */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "20%",
            width: 102,
            height: 12,
            transform: "translateX(-50%)",
            borderRadius: 5,
            background: "rgba(8, 37, 40, 0.94)",
            border: `1px solid ${accent}55`,
            boxShadow: `0 0 12px ${accent}22`,
          }}
        />

        {/* Drone deployment bay */}
        <motion.div
          animate={{
            boxShadow: [
              `0 0 12px ${accent}22`,
              `0 0 26px ${accent}88`,
              `0 0 14px ${accent}35`,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "10%",
            width: 76,
            height: 34,
            transform: "translateX(-50%)",
            borderRadius: 8,
            background: `
              linear-gradient(
                to bottom,
                rgba(19, 75, 72, 0.96),
                rgba(4, 30, 34, 0.98)
              )
            `,
            border: `1px solid ${accent}88`,
          }}
        >
          <motion.div
            animate={{
              opacity: [0.35, 1, 0.45, 1, 0.35],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
            }}
            style={{
              position: "absolute",
              left: 10,
              right: 10,
              bottom: 7,
              height: 2,
              background: `linear-gradient(
                to right,
                transparent,
                ${accent},
                transparent
              )`,
              boxShadow: `0 0 8px ${accent}`,
            }}
          />
        </motion.div>

        {/* Tower mast */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: 0,
            width: 6,
            height: "14%",
            transform: "translateX(-50%)",
            background: `linear-gradient(
              to right,
              rgba(8, 28, 31, 0.95),
              ${accent}55,
              rgba(8, 28, 31, 0.95)
            )`,
          }}
        />

        {/* Rotating sensor head */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "-1%",
            width: 46,
            height: 8,
            transform: "translateX(-50%)",
            transformOrigin: "center center",
            borderRadius: 8,
            background: `linear-gradient(
              to right,
              ${accent}22,
              ${accent},
              ${accent}22
            )`,
            boxShadow: `0 0 14px ${accent}88`,
          }}
        />

        {/* Beacon */}
        <motion.div
          animate={{
            opacity: [0.35, 1, 0.35],
            scale: [0.85, 1.25, 0.85],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "-3%",
            width: 9,
            height: 9,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: "#c9fff0",
            boxShadow: `
              0 0 10px #c9fff0,
              0 0 24px ${accent}
            `,
          }}
        />
      </div>

      {/* Tower sensor rings */}
      {[0, 1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          initial={{
            scale: 0.2,
            opacity: 0,
          }}
          animate={{
            scale: [0.2, 2.4],
            opacity: [0, 0.48, 0.18, 0],
          }}
          transition={{
            duration: 5.6,
            repeat: Infinity,
            delay: ring * 1.3,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "34%",
            width: 210,
            height: 105,
            marginLeft: -105,
            marginTop: -52,
            borderRadius: "50%",
            border: `1px solid ${accent}88`,
            boxShadow: `0 0 18px ${accent}18`,
          }}
        />
      ))}

      {/* Rotating tower radar */}
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          left: "50%",
          top: "34%",
          width: 280,
          height: 280,
          marginLeft: -140,
          marginTop: -140,
          borderRadius: "50%",
          background: `
            conic-gradient(
              from 0deg,
              transparent 0deg,
              transparent 320deg,
              ${accent}08 334deg,
              ${accent}35 350deg,
              transparent 360deg
            )
          `,
          opacity: 0.68,
        }}
      />

      {/* Drone flight path */}
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
          d="M 50 30 C 62 18, 82 25, 85 43 C 88 61, 69 72, 51 63 C 31 74, 14 59, 18 40 C 22 23, 39 20, 50 30"
          fill="none"
          stroke={accent}
          strokeWidth="0.18"
          strokeDasharray="1.5 1.8"
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.42, 0.2, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            times: [0, 0.2, 0.82, 1],
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Autonomous environmental drone */}
      <motion.div
        animate={{
          offsetDistance: [
            "0%",
            "4%",
            "18%",
            "42%",
            "68%",
            "88%",
            "96%",
            "100%",
          ],
          opacity: [0, 1, 1, 1, 1, 1, 0.8, 0],
          scale: [0.55, 0.9, 1, 1, 1, 0.9, 0.65, 0.45],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          times: [0, 0.08, 0.2, 0.42, 0.67, 0.84, 0.94, 1],
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 70,
          height: 32,
          offsetPath:
            'path("M 50 30 C 62 18, 82 25, 85 43 C 88 61, 69 72, 51 63 C 31 74, 14 59, 18 40 C 22 23, 39 20, 50 30")',
          offsetRotate: "0deg",
          transform: "translate(-50%, -50%)",
        }}
      >
        {/* Drone body */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 28,
            height: 12,
            transform: "translate(-50%, -50%)",
            borderRadius: "45% 45% 55% 55%",
            background: `
              linear-gradient(
                to bottom,
                rgba(173, 255, 231, 0.92),
                rgba(20, 80, 75, 0.96)
              )
            `,
            border: `1px solid ${accent}`,
            boxShadow: `0 0 14px ${accent}88`,
          }}
        />

        {/* Drone arms */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            width: 62,
            height: 2,
            transform: "translate(-50%, -50%)",
            background: `${accent}aa`,
          }}
        />

        {/* Rotors */}
        {[6, 52].map((left, index) => (
          <motion.div
            key={index}
            animate={{
              rotate: [0, 360],
              opacity: [0.45, 0.9, 0.45],
            }}
            transition={{
              rotate: {
                duration: 0.34,
                repeat: Infinity,
                ease: "linear",
              },
              opacity: {
                duration: 1.2,
                repeat: Infinity,
              },
            }}
            style={{
              position: "absolute",
              left,
              top: 3,
              width: 15,
              height: 15,
              borderRadius: "50%",
              border: `1px solid ${accent}aa`,
              boxShadow: `0 0 10px ${accent}55`,
            }}
          />
        ))}

        {/* Sampling light */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.4, 1, 0.3],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          style={{
            position: "absolute",
            left: "50%",
            bottom: 0,
            width: 6,
            height: 6,
            transform: "translateX(-50%)",
            borderRadius: "50%",
            background: "#d5fff6",
            boxShadow: `0 0 12px ${accent}`,
          }}
        />

        {/* Drone sampling beam */}
        <motion.div
          animate={{
            opacity: [0, 0.25, 0.08, 0.28, 0],
            scaleY: [0.3, 1, 0.75, 1.1, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            left: "50%",
            top: "72%",
            width: 52,
            height: 130,
            transform: "translateX(-50%)",
            transformOrigin: "top center",
            clipPath: "polygon(44% 0%, 56% 0%, 100% 100%, 0% 100%)",
            background: `linear-gradient(
              to bottom,
              ${accent}42,
              transparent
            )`,
            filter: "blur(6px)",
          }}
        />
      </motion.div>

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
          d="M 13 59 L 27 38 L 42 65 L 50 34 L 62 34 L 77 57 L 89 42"
          fill="none"
          stroke={accent}
          strokeWidth="0.15"
          strokeDasharray="1.4 1.5"
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 0.4, 0.17],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Environmental sensor nodes */}
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
              scale: [0.8, 1.22, 0.9, 1.08, 0.8],
              opacity: [0.48, 1, 0.65, 0.9, 0.48],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              delay: node.delay,
              ease: "easeInOut",
            }}
            style={{
              width: 9,
              height: 9,
              borderRadius: "50%",
              background: "#d5fff6",
              border: `1px solid ${accent}`,
              boxShadow: `
                0 0 9px #d5fff6,
                0 0 20px ${accent}
              `,
            }}
          />

          <motion.div
            animate={{
              scale: [0.45, 2.8],
              opacity: [0.55, 0],
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

      {/* Tower data upload packets */}
      {dataPackets.map((packet) => (
        <motion.div
          key={packet.id}
          initial={{
            left: `${packet.left}%`,
            bottom: "20%",
            opacity: 0,
          }}
          animate={{
            y: [0, -250, -470],
            x: [0, (packet.id % 2 === 0 ? 1 : -1) * 18, 0],
            opacity: [0, 1, 0.65, 0],
            scale: [0.45, 1, 0.7, 0.3],
          }}
          transition={{
            duration: packet.duration,
            repeat: Infinity,
            delay: packet.delay,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: 4,
            height: 10,
            borderRadius: 4,
            background: `linear-gradient(
              to top,
              transparent,
              ${accent}
            )`,
            boxShadow: `0 0 9px ${accent}`,
          }}
        />
      ))}

      {/* Airborne pollutant particles */}
      {airborneParticles.map((particle) => {
        const particleColors = [
          "rgba(178, 189, 193, 0.72)",
          "rgba(157, 139, 181, 0.66)",
          "rgba(126, 169, 139, 0.66)",
          "rgba(182, 171, 124, 0.62)",
        ];

        return (
          <motion.div
            key={particle.id}
            initial={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              opacity: 0,
            }}
            animate={{
              y: [24, -90],
              x: [
                0,
                particle.drift,
                -particle.drift * 0.35,
                particle.drift * 0.55,
              ],
              opacity: [0, 0.62, 0.34, 0],
              scale: [0.45, 1.05, 0.74, 0.3],
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
              background: particleColors[particle.type],
              boxShadow: `0 0 7px ${particleColors[particle.type]}`,
            }}
          />
        );
      })}

      {/* Environmental scan beam */}
      <motion.div
        animate={{
          x: ["-35%", "135%"],
          opacity: [0, 0.3, 0.12, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: "-10%",
          left: 0,
          width: "22%",
          height: "125%",
          transform: "rotate(12deg)",
          background: `
            linear-gradient(
              to right,
              transparent,
              ${accent}16,
              rgba(164, 255, 226, 0.36),
              ${accent}12,
              transparent
            )
          `,
          filter: "blur(8px)",
        }}
      />

      {/* Atmos status HUD */}
      <motion.div
        animate={{
          opacity: [0.12, 0.5, 0.2, 0.45, 0.12],
          y: [0, -4, 0, -2, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          right: "7%",
          top: "14%",
          width: 150,
          padding: "12px 14px",
          borderRadius: 10,
          background: "rgba(3, 27, 31, 0.34)",
          border: `1px solid ${accent}38`,
          boxShadow: `
            0 0 24px ${accent}12,
            inset 0 0 16px rgba(109, 255, 207, 0.04)
          `,
          backdropFilter: "blur(4px)",
          fontFamily: "monospace",
          fontSize: 9,
          lineHeight: 1.7,
          letterSpacing: "0.08em",
          color: "rgba(213, 255, 246, 0.72)",
        }}
      >
        <div>AQI&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;32</div>
        <div>PM2.5&nbsp;&nbsp;&nbsp;LOW</div>
        <div>CO₂&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NORMAL</div>
        <div>NO₂&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;NORMAL</div>
        <div>DRONE&nbsp;&nbsp;&nbsp;ACTIVE</div>
      </motion.div>

      {/* Detection alert flash */}
      <motion.div
        animate={{
          opacity: [0, 0, 0.28, 0.08, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          times: [0, 0.08, 0.13, 0.2, 1],
          ease: "linear",
        }}
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(
              ellipse at 50% 34%,
              rgba(157, 255, 224, 0.32),
              ${accent}14 34%,
              transparent 68%
            )
          `,
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}