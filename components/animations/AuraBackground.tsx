"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

import AuraArrival from "@/components/animations/aura/AuraArrival";
import AuraBrainStem from "@/components/animations/aura/AuraBrainStem";
import AuraPortal from "@/components/animations/aura/AuraPortal";
import type { AuraPhase } from "@/components/animations/aura/auraTypes";

/*
  These visual components still use their original internal
  filenames. They are animation layers only and can be renamed
  later without affecting the AURA architecture.
*/
import NexusCore from "@/components/animations/aura/AuraCore";
import NexusNeural from "@/components/animations/aura/AuraNeural";
import NexusParticles from "@/components/animations/aura/AuraParticles";
import NexusStars from "@/components/animations/aura/AuraStars";
import NexusStreams from "@/components/animations/aura/AuraStreams";

type AuraBackgroundProps = {
  onEntryComplete?: () => void;
};

export default function AuraBackground({
  onEntryComplete,
}: AuraBackgroundProps) {
  const [phase, setPhase] =
    useState<AuraPhase>("idle");

  const [isHovered, setIsHovered] =
    useState(false);

  const sequenceStartedRef =
    useRef(false);

  const timersRef = useRef<
    ReturnType<typeof setTimeout>[]
  >([]);

  const clearSequenceTimers =
    useCallback(() => {
      timersRef.current.forEach(
        (timer) => {
          clearTimeout(timer);
        },
      );

      timersRef.current = [];
    }, []);

  useEffect(() => {
    return () => {
      clearSequenceTimers();
    };
  }, [clearSequenceTimers]);

  const schedulePhase = useCallback(
    (
      nextPhase: AuraPhase,
      delay: number,
    ) => {
      const timer = setTimeout(() => {
        setPhase(nextPhase);
      }, delay);

      timersRef.current.push(timer);
    },
    [],
  );

  const handleHoverStart =
    useCallback(() => {
      if (sequenceStartedRef.current) {
        return;
      }

      setIsHovered(true);
      setPhase("hovering");
    }, []);

  const handleHoverEnd =
    useCallback(() => {
      if (sequenceStartedRef.current) {
        return;
      }

      setIsHovered(false);
      setPhase("idle");
    }, []);

  const handleActivate =
    useCallback(() => {
      if (sequenceStartedRef.current) {
        return;
      }

      sequenceStartedRef.current = true;

      setIsHovered(false);

      clearSequenceTimers();

      setPhase("freezing");

      schedulePhase(
        "compressing",
        450,
      );

      schedulePhase(
        "opening",
        1150,
      );

      schedulePhase(
        "entering",
        2150,
      );

      schedulePhase(
        "tunnel",
        3350,
      );

      schedulePhase(
        "arrival",
        8200,
      );

      const completionTimer =
        setTimeout(() => {
          onEntryComplete?.();
        }, 9400);

      timersRef.current.push(
        completionTimer,
      );
    }, [
      clearSequenceTimers,
      onEntryComplete,
      schedulePhase,
    ]);

  const isSequenceActive =
    phase !== "idle" &&
    phase !== "hovering";

  const isEntering =
    phase === "entering" ||
    phase === "tunnel" ||
    phase === "arrival";

  return (
    <motion.section
      className="relative isolate min-h-screen overflow-hidden bg-[#01030a]"
      animate={{
        scale: isEntering
          ? 1.08
          : 1,
      }}
      transition={{
        duration: 1.2,
        ease: [
          0.76,
          0,
          0.82,
          0,
        ],
      }}
    >
      {/* Base */}
      <div className="pointer-events-none absolute inset-0 bg-[#01030a]" />

      {/* Central AURA atmosphere */}
      <motion.div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2 z-[1]
          h-[1050px] w-[1050px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full blur-[170px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(124,58,237,0.14) 42%, transparent 74%)",
        }}
        animate={{
          scale: isHovered
            ? [1, 1.18, 1]
            : isSequenceActive
              ? 0.75
              : [
                  0.96,
                  1.05,
                  0.96,
                ],

          opacity: isHovered
            ? [
                0.45,
                0.95,
                0.45,
              ]
            : isSequenceActive
              ? 0.28
              : [
                  0.25,
                  0.55,
                  0.25,
                ],
        }}
        transition={{
          duration:
            isSequenceActive
              ? 0.45
              : 6,

          repeat:
            isSequenceActive
              ? 0
              : Infinity,

          ease: "easeInOut",
        }}
      />

      {/* Environmental layers */}
      <NexusStars />

      <NexusNeural
        hovered={isHovered}
        phase={phase}
      />

      <NexusParticles
        phase={phase}
      />

      <NexusStreams
        phase={phase}
        isHovered={isHovered}
      />

      {/* Interactive AURA core */}
      <NexusCore
        phase={phase}
        isHovered={isHovered}
        onHoverStart={
          handleHoverStart
        }
        onHoverEnd={
          handleHoverEnd
        }
        onActivate={
          handleActivate
        }
      />

      {/* Cinematic AURA layers */}
      <div
        className="pointer-events-none absolute inset-0 z-[60]"
        aria-hidden="true"
      >
        <AuraPortal
          phase={phase}
        />

        <AuraBrainStem
          phase={phase}
        />

        <AuraArrival
          phase={phase}
        />
      </div>

      {/* Entry flash */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-[90] bg-white"
        initial={false}
        animate={{
          opacity:
            phase === "entering"
              ? [
                  0,
                  0.95,
                  0,
                ]
              : 0,
        }}
        transition={{
          duration: 1.1,

          times: [
            0,
            0.55,
            1,
          ],

          ease: "easeInOut",
        }}
      />

      {/* Main vignette */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-40"
        style={{
          background:
            "radial-gradient(circle at center, transparent 24%, rgba(1,3,10,0.38) 66%, rgba(1,3,10,0.96) 100%)",
        }}
        animate={{
          opacity: isEntering
            ? 0
            : 1,

          scale: isEntering
            ? 1.15
            : 1,
        }}
        transition={{
          duration: 1,
        }}
      />

      {/* Center glow */}
      <motion.div
        className="
          pointer-events-none
          absolute left-1/2 top-1/2 z-20
          h-[500px] w-[500px]
          -translate-x-1/2 -translate-y-1/2
          rounded-full blur-[90px]
        "
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%)",
        }}
        animate={{
          scale: isHovered
            ? [1, 1.2, 1]
            : [
                0.95,
                1.05,
                0.95,
              ],

          opacity:
            isSequenceActive
              ? 0.2
              : isHovered
                ? [
                    0.35,
                    0.8,
                    0.35,
                  ]
                : [
                    0.15,
                    0.35,
                    0.15,
                  ],
        }}
        transition={{
          duration: 5,

          repeat:
            isSequenceActive
              ? 0
              : Infinity,

          ease: "easeInOut",
        }}
      />

      {/* Outer scan ring */}
      {!isSequenceActive && (
        <motion.div
          className="
            pointer-events-none
            absolute left-1/2 top-1/2 z-10
            h-[620px] w-[620px]
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            border border-cyan-400/10
          "
          animate={{
            rotate: 360,

            scale: isHovered
              ? [1, 1.05, 1]
              : 1,
          }}
          transition={{
            rotate: {
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            },

            scale: {
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      )}

      {/* Instruction */}
      <motion.div
        className="
          pointer-events-none
          absolute inset-x-0 bottom-12 z-50
          flex justify-center
        "
        animate={{
          opacity:
            isSequenceActive
              ? 0
              : 1,

          y: isSequenceActive
            ? 20
            : 0,
        }}
        transition={{
          duration: 0.35,
        }}
      >
        <div className="rounded-full border border-cyan-300/10 bg-slate-950/40 px-6 py-3 backdrop-blur-xl">
          <motion.span
            className="text-[10px] font-semibold tracking-[0.42em] text-cyan-100/70"
            animate={{
              opacity: isHovered
                ? [
                    0.5,
                    1,
                    0.5,
                  ]
                : [
                    0.3,
                    0.65,
                    0.3,
                  ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {isHovered
              ? "AURA READY"
              : "APPROACH THE CORE"}
          </motion.span>
        </div>
      </motion.div>

      {/* Film grain */}
      <div
        className="
          pointer-events-none
          absolute inset-0 z-[95]
          opacity-[0.025]
          mix-blend-soft-light
        "
        style={{
          backgroundImage: `
            radial-gradient(
              circle at 25% 25%,
              white 1px,
              transparent 1px
            ),

            radial-gradient(
              circle at 75% 75%,
              white 1px,
              transparent 1px
            )
          `,

          backgroundSize:
            "6px 6px",
        }}
      />
    </motion.section>
  );
}