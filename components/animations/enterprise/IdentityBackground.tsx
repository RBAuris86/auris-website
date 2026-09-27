"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock, Shield, Unlock } from "lucide-react";
import DefaultEnterpriseBackground from "./DefaultEnterpriseBackground";

export default function IdentityBackground() {
  const [locked, setLocked] = useState(true);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setLocked((current) => !current);
    }, 2200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <DefaultEnterpriseBackground />

      {/* Identity shield graphic */}
      <motion.div
        className="absolute right-[4%] top-[6%] z-20 flex h-[520px] w-[520px] items-center justify-center"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Background glow */}
        <motion.div
          className="absolute h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[80px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Rotating ring */}
        <motion.div
          className="absolute h-[470px] w-[470px] rounded-full border border-dashed border-cyan-300/30"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Shield */}
        <motion.div
          className="relative z-10"
          animate={{
            scale: locked ? 1 : 1.06,
          }}
          transition={{
            duration: 0.4,
          }}
        >
          <Shield
            size={380}
            strokeWidth={1.4}
            className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]"
          />
        </motion.div>

        {/* Lock */}
        <div className="absolute z-20 flex h-28 w-28 items-center justify-center rounded-full border border-cyan-300/40 bg-[#050914]/90 shadow-[0_0_35px_rgba(34,211,238,0.55)]">
          <AnimatePresence mode="wait">
            {locked ? (
              <motion.div
                key="locked"
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  rotate: -12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.6,
                  rotate: 12,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <Lock
                  size={64}
                  strokeWidth={1.8}
                  className="text-white"
                />
              </motion.div>
            ) : (
              <motion.div
                key="unlocked"
                initial={{
                  opacity: 0,
                  scale: 0.6,
                  rotate: 12,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.6,
                  rotate: -12,
                }}
                transition={{
                  duration: 0.35,
                }}
              >
                <Unlock
                  size={64}
                  strokeWidth={1.8}
                  className="text-cyan-300"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}