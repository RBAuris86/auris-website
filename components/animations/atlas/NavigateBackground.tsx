"use client";

import { motion } from "framer-motion";
import DefaultAtlasBackground from "./DefaultAtlasBackground";
import NavigatePhoneDemo from "./NavigatePhoneDemo";

type NavigateBackgroundProps = {
  accent: string;
};

const routeSteps = [
  { id: "start", left: "18%", top: "72%", label: "START" },
  { id: "turn-1", left: "32%", top: "60%", label: "TURN LEFT" },
  { id: "turn-2", left: "48%", top: "49%", label: "CONTINUE" },
  { id: "turn-3", left: "64%", top: "36%", label: "TURN RIGHT" },
  { id: "destination", left: "80%", top: "23%", label: "DESTINATION" },
];

const directionArrows = [
  { id: 1, left: "25%", top: "65%", rotate: -35, delay: 0 },
  { id: 2, left: "39%", top: "55%", rotate: -28, delay: 0.4 },
  { id: 3, left: "54%", top: "44%", rotate: -24, delay: 0.8 },
  { id: 4, left: "69%", top: "32%", rotate: -20, delay: 1.2 },
];

const compassTicks = Array.from({ length: 24 }, (_, index) => ({
  id: index,
  rotate: index * 15,
  height: index % 6 === 0 ? 10 : 5,
  opacity: index % 6 === 0 ? 0.8 : 0.35,
}));

export default function NavigateBackground({
  accent,
}: NavigateBackgroundProps) {
  return (
    <div 
    className="pointer-events-none absolute inset-0 overflow-hidden">
      <DefaultAtlasBackground accent={accent} />

      {/* Navigation Focus Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-760px w-760px -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,.18), rgba(34,211,238,.08) 42%, transparent 72%)",
        }}
        animate={{
          opacity: [0.24, 0.5, 0.24],
          scale: [0.96, 1.06, 0.96],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dedicated Navigation Route */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="atlas-navigate-route" x1="0" x2="1">
            <stop offset="0%" stopColor="rgba(34,211,238,.35)" />
            <stop offset="45%" stopColor="rgba(255,255,255,.98)" />
            <stop offset="100%" stopColor="rgba(59,130,246,.7)" />
          </linearGradient>

          <filter id="atlas-navigate-glow">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M 150 585 C 235 555, 280 505, 355 470 C 460 420, 520 360, 625 310 C 735 255, 800 205, 870 145"
          fill="none"
          stroke="rgba(34,211,238,.12)"
          strokeWidth="14"
          strokeLinecap="round"
        />

        <motion.path
          d="M 150 585 C 235 555, 280 505, 355 470 C 460 420, 520 360, 625 310 C 735 255, 800 205, 870 145"
          fill="none"
          stroke="url(#atlas-navigate-route)"
          strokeWidth="6"
          strokeLinecap="round"
          filter="url(#atlas-navigate-glow)"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 1, 0.85],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
        />

        <motion.circle
          r="11"
          fill="white"
          filter="url(#atlas-navigate-glow)"
          style={{
            offsetPath:
              "path('M 150 585 C 235 555, 280 505, 355 470 C 460 420, 520 360, 625 310 C 735 255, 800 205, 870 145')",
          }}
          animate={{
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 5.8,
            repeat: Infinity,
            repeatDelay: 1.2,
            ease: "easeInOut",
          }}
        />
      </svg>

      {/* Route Steps */}
      {routeSteps.map((step, index) => (
        <motion.div
          key={step.id}
          className="absolute"
          style={{
            left: step.left,
            top: step.top,
          }}
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: [0.35, 1, 0.55],
            scale: [0.9, 1.12, 0.9],
          }}
          transition={{
            duration: 2.8,
            delay: index * 0.45,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-100 bg-slate-950"
            style={{
              boxShadow:
                "0 0 12px rgba(34,211,238,.9), 0 0 26px rgba(14,165,233,.35)",
            }}
          />

          <div className="absolute left-3 top-2 whitespace-nowrap rounded-md border border-cyan-300/20 bg-slate-950/65 px-2 py-1 font-mono text-[8px] tracking-[0.18em] text-cyan-200/70 backdrop-blur-sm">
            {step.label}
          </div>
        </motion.div>
      ))}

      {/* Route Direction Arrows */}
      {directionArrows.map((arrow) => (
        <motion.div
          key={arrow.id}
          className="absolute"
          style={{
            left: arrow.left,
            top: arrow.top,
            rotate: `${arrow.rotate}deg`,
          }}
          animate={{
            opacity: [0.15, 1, 0.15],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            delay: arrow.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="h-0 w-0 border-y-[6px] border-l-12px border-y-transparent border-l-cyan-200"
            style={{
              filter: "drop-shadow(0 0 8px rgba(34,211,238,.8))",
            }}
          />
        </motion.div>
      ))}

      {/* Starting Position Beacon */}
      <motion.div
        className="absolute left-[18%] top-[72%] h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30"
        animate={{
          scale: [0.65, 1.8],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 3.2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      <motion.div
        className="absolute left-[18%] top-[72%] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-blue-500"
        style={{
          boxShadow:
            "0 0 20px rgba(59,130,246,.9), 0 0 40px rgba(34,211,238,.42)",
        }}
        animate={{
          scale: [0.9, 1.14, 0.9],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Destination Pin */}
      <motion.div
        className="absolute left-[80%] top-[23%] -translate-x-1/2 -translate-y-full"
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="relative flex h-12 w-12 items-center justify-center rounded-full border border-white/55 bg-blue-500"
          style={{
            boxShadow:
              "0 0 20px rgba(59,130,246,.85), 0 0 40px rgba(34,211,238,.4)",
          }}
        >
          <div className="h-4 w-4 rounded-full bg-white" />
        </div>

        <div className="absolute left-1/2 top-40px h-5 w-5 -translate-x-1/2 rotate-45 border-b border-r border-white/40 bg-blue-500" />

        <motion.div
          className="absolute left-1/2 top-full h-16 w-16 -translate-x-1/2 rounded-full border border-cyan-300/35"
          animate={{
            scale: [0.5, 2],
            opacity: [0.7, 0],
          }}
          transition={{
            duration: 2.6,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Turn Instruction Panel */}
      <motion.div
        className="absolute left-10 top-[28%] w-64 rounded-2xl border border-cyan-300/20 bg-slate-950/60 p-5 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 18px 60px rgba(2,8,23,.35), inset 0 0 28px rgba(34,211,238,.05)",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-4">
          <motion.div
            className="flex h-14 w-14 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-400/10"
            animate={{
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative h-7 w-7">
              <div className="absolute left-1/2 top-0 h-7 w-1 -translate-x-1/2 rounded-full bg-cyan-200" />
              <div className="absolute left-3px top-1px h-1 w-4 rotate-[-35deg] rounded-full bg-cyan-200" />
            </div>
          </motion.div>

          <div>
            <div className="text-[9px] tracking-[0.28em] text-cyan-300/65">
              NEXT TURN
            </div>
            <div className="mt-1 text-xl tracking-[0.08em] text-white">
              120 ft
            </div>
            <div className="mt-1 text-[10px] tracking-[0.16em] text-cyan-100/70">
              TURN LEFT
            </div>
          </div>
        </div>

        <div className="mt-5 h-px bg-linear-to-r from-transparent via-cyan-300/25 to-transparent" />

        <div className="mt-4 flex justify-between text-[9px] tracking-[0.18em]">
          <span className="text-white/45">DESTINATION</span>
          <span className="text-cyan-200">NORTH WING</span>
        </div>
      </motion.div>

      {/* ETA Panel */}
      <motion.div
        className="absolute bottom-12 left-1/2 w-330px -translate-x-1/2 rounded-2xl border border-cyan-300/20 bg-slate-950/65 px-6 py-4 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 16px 50px rgba(2,8,23,.4), inset 0 0 24px rgba(34,211,238,.04)",
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 3.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-[8px] tracking-[0.22em] text-cyan-300/60">
              ARRIVAL
            </div>
            <div className="mt-1 text-lg text-white">2:14 PM</div>
          </div>

          <div className="border-x border-cyan-300/15">
            <div className="text-[8px] tracking-[0.22em] text-cyan-300/60">
              TIME
            </div>
            <div className="mt-1 text-lg text-white">4 min</div>
          </div>

          <div>
            <div className="text-[8px] tracking-[0.22em] text-cyan-300/60">
              DISTANCE
            </div>
            <div className="mt-1 text-lg text-white">0.2 mi</div>
          </div>
        </div>
      </motion.div>

      {/* Compass */}
      <motion.div
        className="absolute right-10 top-[26%] h-36 w-36 rounded-full border border-cyan-300/20 bg-slate-950/40 backdrop-blur-sm"
        animate={{
          rotate: [0, 2, -2, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {compassTicks.map((tick) => (
          <div
            key={tick.id}
            className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2"
            style={{
              rotate: `${tick.rotate}deg`,
            }}
          >
            <div
              className="mx-auto bg-cyan-200"
              style={{
                width: 1,
                height: tick.height,
                opacity: tick.opacity,
              }}
            />
          </div>
        ))}

        <div className="absolute left-1/2 top-2 -translate-x-1/2 font-mono text-[10px] text-cyan-200">
          N
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-white/35">
          S
        </div>

        <div className="absolute left-2 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/35">
          W
        </div>

        <div className="absolute right-2 top-1/2 -translate-y-1/2 font-mono text-[9px] text-white/35">
          E
        </div>

        <motion.div
          className="absolute left-1/2 top-1/2 h-12 w-2 -translate-x-1/2 -translate-y-full origin-bottom"
          style={{
            clipPath: "polygon(50% 0, 100% 100%, 50% 82%, 0 100%)",
            background:
              "linear-gradient(180deg, rgba(255,255,255,.98), rgba(34,211,238,.85))",
            filter: "drop-shadow(0 0 8px rgba(34,211,238,.8))",
          }}
          animate={{
            rotate: [-12, 6, -12],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-cyan-400" />
      </motion.div>

      {/* Navigation HUD */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[0.4em] text-cyan-300">
          ATLAS NAVIGATE
        </div>
        <div className="mt-2 text-[9px] tracking-[0.24em] text-white/50">
          TURN-BY-TURN WAYFINDING
        </div>
      </div>

      <div className="absolute right-10 top-10 text-right font-mono">
        <div className="text-[9px] tracking-[0.28em] text-cyan-300/65">
          ROUTE STATUS
        </div>
        <motion.div
          className="mt-1 text-xs tracking-[0.2em] text-emerald-400"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          GUIDANCE ACTIVE
        </motion.div>
      </div>

      {/* Recalculating Indicator */}
      <motion.div
        className="absolute right-10 bottom-12 rounded-lg border border-cyan-300/15 bg-slate-950/55 px-4 py-3 font-mono backdrop-blur-sm"
        animate={{
          opacity: [0.35, 1, 0.35],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        <div className="text-[8px] tracking-[0.24em] text-cyan-300/60">
          ROUTE ENGINE
        </div>
        <div className="mt-1 text-[10px] tracking-[0.18em] text-white">
          OPTIMAL PATH
        </div>
      </motion.div>

      <div className="absolute right-32 top-16 z-30">
  <div className="w-520px scale-125 origin-top-right">
    <NavigatePhoneDemo />
  </div>
</div>

      {/* Edge Fade */}
      <div
        className="absolute inset-0 z-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, transparent 44%, rgba(2,8,23,.16) 72%, rgba(2,8,23,.7) 100%)",
        }}
      />

      {/* Edge Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 44%, rgba(2,8,23,.16) 72%, rgba(2,8,23,.7) 100%)",
        }}
      />
    </div>
    
  );
}