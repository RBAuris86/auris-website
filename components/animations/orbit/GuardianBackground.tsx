"use client";

import { motion } from "framer-motion";
import DefaultOrbitBackground from "./DefaultOrbitBackground";

type GuardianBackgroundProps = {
  accent: string;
};

const trackedObjects = [
  { id: "SAT-102", left: "22%", top: "26%" },
  { id: "OBJ-447", left: "67%", top: "24%" },
  { id: "SAT-311", left: "78%", top: "55%" },
  { id: "DEB-019", left: "54%", top: "68%" },
  { id: "SAT-087", left: "28%", top: "58%" },
  { id: "OBJ-902", left: "44%", top: "34%" },
];

export default function GuardianBackground({
  accent,
}: GuardianBackgroundProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      <DefaultOrbitBackground accent={accent} />

      {/* Guardian Shield */}
      {[0, 1, 2, 3].map((ring) => (
        <motion.div
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border"
          style={{
            width: 420 + ring * 120,
            height: 420 + ring * 120,
            marginLeft: -(420 + ring * 120) / 2,
            marginTop: -(420 + ring * 120) / 2,
            borderColor: "rgba(34,211,238,.18)",
            boxShadow: "0 0 24px rgba(34,211,238,.15)",
          }}
          animate={{
            rotate: ring % 2 === 0 ? 360 : -360,
            scale: [1, 1.02, 1],
          }}
          transition={{
            rotate: {
              duration: 90 + ring * 25,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5,
              repeat: Infinity,
            },
          }}
        />
      ))}

      {/* Shield Pulse */}
      {[0, 1, 2].map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/20"
          style={{
            width: 320,
            height: 320,
            marginLeft: -160,
            marginTop: -160,
          }}
          animate={{
            scale: [1, 3],
            opacity: [0.45, 0],
          }}
          transition={{
            duration: 5,
            delay: pulse * 1.6,
            repeat: Infinity,
          }}
        />
      ))}

      {/* Tracked Objects */}
      {trackedObjects.map((object, index) => (
        <motion.div
          key={object.id}
          className="absolute"
          style={{
            left: object.left,
            top: object.top,
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
          }}
        >
          <motion.div
            className="h-4 w-4 rounded-full bg-cyan-300"
            style={{
              boxShadow: "0 0 16px rgba(34,211,238,.8)",
            }}
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/20"
            style={{
              width: 18,
              height: 18,
              marginLeft: -9,
              marginTop: -9,
            }}
            animate={{
              scale: [1, 3],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: index * .4,
            }}
          />

          <div className="mt-2 font-mono text-[8px] tracking-[.2em] text-cyan-300/70">
            {object.id}
          </div>
        </motion.div>
      ))}

      {/* Orbital Shield Beam */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, transparent, rgba(34,211,238,.12), transparent)",
          filter: "blur(4px)",
        }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Threat Grid */}
      {Array.from({ length: 18 }, (_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-cyan-300/10"
          style={{
            width: 180,
            left: `${10 + (i * 5) % 80}%`,
            top: `${18 + (i * 4) % 70}%`,
            rotate: `${(i % 6) * 12}deg`,
          }}
          animate={{
            opacity: [0.05, 0.35, 0.05],
          }}
          transition={{
            duration: 2 + (i % 3),
            repeat: Infinity,
          }}
        />
      ))}

      {/* HUD */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[.4em] text-cyan-300">
          ORBIT GUARDIAN
        </div>

        <div className="mt-2 text-[10px] tracking-[.25em] text-white/60">
          SPACE AWARENESS
        </div>
      </div>

      <div className="absolute right-10 top-10 text-right font-mono">
        <div className="text-xs tracking-[.3em] text-cyan-300">
          SHIELD
        </div>

        <motion.div
          className="mt-2 text-green-400"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          ACTIVE
        </motion.div>
      </div>

      <div className="absolute left-10 bottom-10 font-mono">
        <div className="text-[10px] tracking-[.25em] text-cyan-300">
          TRACKED OBJECTS
        </div>

        <div className="text-3xl text-white">
          142
        </div>
      </div>

      <div className="absolute right-10 bottom-10 text-right font-mono">
        <div className="text-[10px] tracking-[.25em] text-cyan-300">
          COLLISION RISK
        </div>

        <div className="text-3xl text-green-400">
          LOW
        </div>

        <div className="mt-2 text-[9px] text-cyan-300/70">
          ALL SATELLITES SAFE
        </div>
      </div>

    </div>
  );
}