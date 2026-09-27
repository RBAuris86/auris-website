"use client";

import { motion } from "framer-motion";

export default function NexusStars() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep Space */}
      <div className="absolute inset-0 bg-[#01030a]" />

      {/* Large Nebula */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.12) 0%, rgba(124,58,237,.10) 35%, rgba(59,130,246,.08) 55%, transparent 75%)",
        }}
        animate={{
          scale: [1, 1.08, 1],
          opacity: [.45,.7,.45],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary Nebula */}
      <motion.div
        className="absolute right-[-10%] top-[8%] h-[700px] w-[700px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,.14) 0%, transparent 70%)",
        }}
        animate={{
          x:[0,-40,0],
          y:[0,25,0],
          opacity:[.2,.45,.2],
        }}
        transition={{
          duration:24,
          repeat:Infinity,
          ease:"easeInOut",
        }}
      />

      {/* Third Nebula */}
      <motion.div
        className="absolute left-[-10%] bottom-[-8%] h-[850px] w-[850px] rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,197,94,.08) 0%, transparent 72%)",
        }}
        animate={{
          x:[0,30,0],
          y:[0,-25,0],
          opacity:[.15,.35,.15],
        }}
        transition={{
          duration:28,
          repeat:Infinity,
          ease:"easeInOut",
        }}
      />

      {/* Tiny Stars */}
      {Array.from({ length: 260 }).map((_, i) => {
        const size = (i % 4) + 1;

        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: size,
              height: size,
              left: `${(i * 37) % 100}%`,
              top: `${(i * 53) % 100}%`,
              opacity: .15 + ((i % 6) * .1),
            }}
            animate={{
              opacity:[
                .2 + ((i%5)*.08),
                1,
                .2 + ((i%5)*.08),
              ],
              scale:[1,1.8,1],
            }}
            transition={{
              duration:3+(i%6),
              delay:(i%12)*.35,
              repeat:Infinity,
              ease:"easeInOut",
            }}
          />
        );
      })}

      {/* Bright Stars */}
      {Array.from({ length: 36 }).map((_, i) => (
        <motion.div
          key={`bright-${i}`}
          className="absolute"
          style={{
            left: `${(i * 29) % 100}%`,
            top: `${(i * 61) % 100}%`,
          }}
          animate={{
            scale:[1,2.4,1],
            opacity:[.35,1,.35],
          }}
          transition={{
            duration:5+(i%5),
            delay:i*.22,
            repeat:Infinity,
            ease:"easeInOut",
          }}
        >
          <div className="absolute h-5 w-[1px] -translate-x-1/2 -translate-y-1/2 bg-white/60" />
          <div className="absolute h-[1px] w-5 -translate-x-1/2 -translate-y-1/2 bg-white/60" />

          <div className="h-2 w-2 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,.9)]" />
        </motion.div>
      ))}

      {/* Cosmic Dust */}
      {Array.from({ length: 120 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full bg-cyan-200/40"
          style={{
            width:2,
            height:2,
            left:`${(i*19)%100}%`,
            top:`${(i*43)%100}%`,
          }}
          animate={{
            y:[0,-80,0],
            x:[0,(i%2===0?15:-15),0],
            opacity:[0,.4,0],
          }}
          transition={{
            duration:12+(i%8),
            delay:(i%10)*.6,
            repeat:Infinity,
            ease:"easeInOut",
          }}
        />
      ))}

      {/* Edge vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(1,3,10,.45)_75%,rgba(1,3,10,.95)_100%)]" />
    </div>
  );
}