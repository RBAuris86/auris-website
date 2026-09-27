"use client";

import { motion } from "framer-motion";
import DefaultAtlasBackground from "./DefaultAtlasBackground";

type DirectoryBackgroundProps = {
  accent: string;
};

const categories = [
  "SHOPPING",
  "DINING",
  "ENTERTAINMENT",
  "SERVICES",
  "PARKING",
  "AMENITIES",
];

const locations = [
  {
    id: "nike",
    name: "Nike",
    category: "SHOPPING",
    detail: "Athletic Apparel",
    unit: "SUITE 214",
    left: "18%",
    top: "28%",
    delay: 0,
  },
  {
    id: "food-court",
    name: "Food Court",
    category: "DINING",
    detail: "12 Restaurants",
    unit: "LEVEL 2",
    left: "42%",
    top: "20%",
    delay: 0.5,
  },
  {
    id: "cinema",
    name: "Cinema",
    category: "ENTERTAINMENT",
    detail: "14 Screens",
    unit: "NORTH WING",
    left: "68%",
    top: "28%",
    delay: 1,
  },
  {
    id: "guest-services",
    name: "Guest Services",
    category: "SERVICES",
    detail: "Visitor Assistance",
    unit: "CENTER COURT",
    left: "76%",
    top: "58%",
    delay: 1.5,
  },
  {
    id: "parking",
    name: "Parking A",
    category: "PARKING",
    detail: "Entrance Access",
    unit: "EAST GARAGE",
    left: "54%",
    top: "70%",
    delay: 2,
  },
  {
    id: "restrooms",
    name: "Restrooms",
    category: "AMENITIES",
    detail: "Accessible Facilities",
    unit: "LEVEL 1",
    left: "25%",
    top: "65%",
    delay: 2.5,
  },
];

const mapPins = [
  { id: 1, left: "23%", top: "42%", delay: 0 },
  { id: 2, left: "36%", top: "54%", delay: 0.4 },
  { id: 3, left: "51%", top: "38%", delay: 0.8 },
  { id: 4, left: "64%", top: "49%", delay: 1.2 },
  { id: 5, left: "72%", top: "36%", delay: 1.6 },
];

const connectionLines = [
  {
    id: 1,
    left: "24%",
    top: "36%",
    width: 210,
    rotate: 18,
    delay: 0,
  },
  {
    id: 2,
    left: "46%",
    top: "29%",
    width: 180,
    rotate: 10,
    delay: 0.7,
  },
  {
    id: 3,
    left: "58%",
    top: "57%",
    width: 170,
    rotate: -18,
    delay: 1.4,
  },
  {
    id: 4,
    left: "31%",
    top: "61%",
    width: 190,
    rotate: -8,
    delay: 2.1,
  },
];

const activityDots = Array.from({ length: 20 }, (_, index) => ({
  id: index,
  left: `${12 + ((index * 19) % 76)}%`,
  top: `${18 + ((index * 31) % 64)}%`,
  delay: (index % 8) * 0.35,
  duration: 3.5 + (index % 5) * 0.5,
}));

export default function DirectoryBackground({
  accent,
}: DirectoryBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <DefaultAtlasBackground accent={accent} />

      {/* Directory Focus Glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[780px] w-[780px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.18), rgba(59,130,246,.08) 46%, transparent 74%)",
        }}
        animate={{
          opacity: [0.22, 0.48, 0.22],
          scale: [0.95, 1.08, 0.95],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Activity Dots */}
      {activityDots.map((dot) => (
        <motion.div
          key={`directory-activity-${dot.id}`}
          className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200"
          style={{
            left: dot.left,
            top: dot.top,
            boxShadow: "0 0 9px rgba(34,211,238,.75)",
          }}
          animate={{
            x: [0, 16, -8, 0],
            y: [0, -10, 12, 0],
            opacity: [0.18, 0.9, 0.4, 0.18],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Category Filter Bar */}
      <motion.div
        className="absolute left-1/2 top-9 flex -translate-x-1/2 gap-2 rounded-2xl border border-cyan-300/15 bg-slate-950/65 p-2 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 18px 50px rgba(2,8,23,.4), inset 0 0 24px rgba(34,211,238,.04)",
        }}
        animate={{
          y: [0, -3, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {categories.map((category, index) => (
          <motion.div
            key={category}
            className="rounded-lg border px-3 py-2 text-[8px] tracking-[0.18em]"
            animate={{
              color: [
                "rgba(255,255,255,.42)",
                "rgba(165,243,252,1)",
                "rgba(255,255,255,.42)",
              ],
              borderColor: [
                "rgba(34,211,238,.08)",
                "rgba(34,211,238,.45)",
                "rgba(34,211,238,.08)",
              ],
              backgroundColor: [
                "rgba(15,23,42,.2)",
                "rgba(34,211,238,.12)",
                "rgba(15,23,42,.2)",
              ],
            }}
            transition={{
              duration: 6,
              delay: index * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {category}
          </motion.div>
        ))}
      </motion.div>

      {/* Search Panel */}
      <motion.div
        className="absolute left-10 top-[18%] w-[310px] rounded-2xl border border-cyan-300/20 bg-slate-950/68 p-5 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 20px 60px rgba(2,8,23,.42), inset 0 0 26px rgba(34,211,238,.05)",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-[9px] tracking-[0.3em] text-cyan-300/65">
          SEARCH DIRECTORY
        </div>

        <div className="mt-4 flex items-center gap-3 rounded-xl border border-cyan-300/20 bg-slate-900/65 px-4 py-3">
          <motion.div
            className="h-3.5 w-3.5 rounded-full border border-cyan-200/70"
            animate={{
              scale: [0.9, 1.1, 0.9],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <div className="relative flex h-5 items-center text-sm text-white">
            <motion.span
              animate={{
                opacity: [1, 1, 1, 0, 0, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                times: [0, 0.55, 0.7, 0.76, 0.9, 1],
              }}
            >
              Nike
            </motion.span>

            <motion.span
              className="ml-0.5 h-4 w-px bg-cyan-200"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 0.9,
                repeat: Infinity,
              }}
            />
          </div>
        </div>

        <motion.div
          className="mt-4 rounded-xl border border-cyan-300/25 bg-cyan-400/8 p-4"
          animate={{
            borderColor: [
              "rgba(34,211,238,.2)",
              "rgba(34,211,238,.65)",
              "rgba(34,211,238,.2)",
            ],
            boxShadow: [
              "0 0 0 rgba(34,211,238,0)",
              "0 0 26px rgba(34,211,238,.18)",
              "0 0 0 rgba(34,211,238,0)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm tracking-[0.08em] text-white">NIKE</div>
              <div className="mt-1 text-[8px] tracking-[0.2em] text-cyan-200/60">
                ATHLETIC APPAREL
              </div>
            </div>

            <div className="rounded-lg border border-cyan-300/20 px-2 py-1 text-[8px] tracking-[0.14em] text-cyan-200">
              SUITE 214
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-cyan-300/10 pt-3">
            <span className="text-[8px] tracking-[0.18em] text-white/40">
              WALK TIME
            </span>
            <span className="text-[10px] tracking-[0.16em] text-white">
              3 MIN
            </span>
          </div>
        </motion.div>

        <div className="mt-4 flex justify-between text-[8px] tracking-[0.2em]">
          <span className="text-white/35">RESULTS FOUND</span>
          <span className="text-cyan-200">01</span>
        </div>
      </motion.div>

      {/* Directory Cards */}
      {locations.map((location, index) => (
        <motion.div
          key={location.id}
          className="absolute w-44 rounded-xl border border-cyan-300/15 bg-slate-950/62 p-3 font-mono backdrop-blur-md"
          style={{
            left: location.left,
            top: location.top,
            boxShadow:
              "0 14px 40px rgba(2,8,23,.36), inset 0 0 18px rgba(34,211,238,.035)",
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.55, 1, 0.55],
            borderColor:
              location.id === "nike"
                ? [
                    "rgba(34,211,238,.2)",
                    "rgba(34,211,238,.7)",
                    "rgba(34,211,238,.2)",
                  ]
                : [
                    "rgba(34,211,238,.1)",
                    "rgba(34,211,238,.28)",
                    "rgba(34,211,238,.1)",
                  ],
          }}
          transition={{
            duration: 4 + (index % 3),
            delay: location.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-xs tracking-[0.08em] text-white">
                {location.name}
              </div>

              <div className="mt-1 text-[7px] tracking-[0.18em] text-cyan-300/55">
                {location.category}
              </div>
            </div>

            <motion.div
              className="relative h-5 w-5 rounded-full border border-cyan-200/45 bg-cyan-400/10"
              animate={{
                scale: [0.9, 1.2, 0.9],
              }}
              transition={{
                duration: 2.4,
                delay: location.delay,
                repeat: Infinity,
              }}
            >
              <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_8px_rgba(34,211,238,.9)]" />
            </motion.div>
          </div>

          <div className="mt-3 h-px bg-gradient-to-r from-cyan-300/25 to-transparent" />

          <div className="mt-3 flex items-end justify-between">
            <div>
              <div className="text-[7px] tracking-[0.16em] text-white/35">
                {location.detail}
              </div>
              <div className="mt-1 text-[8px] tracking-[0.14em] text-cyan-100/75">
                {location.unit}
              </div>
            </div>

            <motion.div
              className="text-sm text-cyan-200"
              animate={{
                x: [0, 4, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                delay: location.delay,
                repeat: Infinity,
              }}
            >
              →
            </motion.div>
          </div>
        </motion.div>
      ))}

      {/* Card Connection Lines */}
      {connectionLines.map((line) => (
        <div
          key={`directory-line-${line.id}`}
          className="absolute h-px origin-left"
          style={{
            left: line.left,
            top: line.top,
            width: line.width,
            rotate: `${line.rotate}deg`,
            background:
              "linear-gradient(90deg, rgba(34,211,238,.05), rgba(34,211,238,.55), rgba(255,255,255,.72), transparent)",
          }}
        >
          <motion.div
            className="absolute left-0 top-1/2 h-1.5 w-10 -translate-y-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.95), rgba(34,211,238,.8), transparent)",
              boxShadow: "0 0 12px rgba(34,211,238,.8)",
            }}
            animate={{
              x: [0, line.width - 40],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.6,
              delay: line.delay,
              repeat: Infinity,
              repeatDelay: 1.1,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}

      {/* Destination Map Pins */}
      {mapPins.map((pin) => (
        <motion.div
          key={`directory-pin-${pin.id}`}
          className="absolute"
          style={{
            left: pin.left,
            top: pin.top,
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3,
            delay: pin.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30"
            animate={{
              scale: [0.45, 1.8],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 2.8,
              delay: pin.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <div
            className="relative h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-cyan-400"
            style={{
              boxShadow:
                "0 0 12px rgba(34,211,238,.9), 0 0 26px rgba(59,130,246,.4)",
            }}
          >
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </div>
        </motion.div>
      ))}

      {/* Featured Destination Panel */}
      <motion.div
        className="absolute bottom-12 left-10 w-60 rounded-2xl border border-cyan-300/18 bg-slate-950/65 p-4 font-mono backdrop-blur-md"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-[8px] tracking-[0.24em] text-cyan-300/55">
          FEATURED DESTINATION
        </div>

        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="text-lg tracking-[0.08em] text-white">NIKE</div>
            <div className="mt-1 text-[8px] tracking-[0.18em] text-white/40">
              SHOPPING · SUITE 214
            </div>
          </div>

          <motion.div
            className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/25 bg-cyan-400/10 text-cyan-200"
            animate={{
              scale: [0.9, 1.12, 0.9],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            ↗
          </motion.div>
        </div>
      </motion.div>

      {/* Directory Metrics */}
      <motion.div
        className="absolute bottom-12 right-10 w-60 rounded-2xl border border-cyan-300/18 bg-slate-950/65 p-4 font-mono backdrop-blur-md"
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-[8px] tracking-[0.2em] text-cyan-300/55">
              LOCATIONS
            </div>
            <div className="mt-1 text-2xl text-white">324</div>
          </div>

          <div className="border-l border-cyan-300/15 pl-4">
            <div className="text-[8px] tracking-[0.2em] text-cyan-300/55">
              CATEGORIES
            </div>
            <div className="mt-1 text-2xl text-white">18</div>
          </div>
        </div>

        <div className="mt-4 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

        <div className="mt-3 flex justify-between text-[8px] tracking-[0.18em]">
          <span className="text-white/35">DIRECTORY STATUS</span>
          <motion.span
            className="text-emerald-400"
            animate={{
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            LIVE
          </motion.span>
        </div>
      </motion.div>

      {/* HUD Labels */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[0.4em] text-cyan-300">
          ATLAS DIRECTORY
        </div>
        <div className="mt-2 text-[9px] tracking-[0.24em] text-white/50">
          INTELLIGENT DESTINATION DISCOVERY
        </div>
      </div>

      <div className="absolute right-10 top-[17%] text-right font-mono">
        <div className="text-[8px] tracking-[0.24em] text-cyan-300/55">
          SEARCH INDEX
        </div>
        <div className="mt-1 text-xs tracking-[0.16em] text-white">
          SYNCHRONIZED
        </div>

        <motion.div
          className="mt-2 ml-auto h-1 w-32 overflow-hidden rounded-full bg-white/5"
        >
          <motion.div
            className="h-full rounded-full bg-cyan-300"
            animate={{
              width: ["15%", "100%", "15%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>

      {/* Edge Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 43%, rgba(2,8,23,.14) 72%, rgba(2,8,23,.72) 100%)",
        }}
      />
    </div>
  );
}