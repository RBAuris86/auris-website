"use client";

import { motion } from "framer-motion";
import DefaultAtlasBackground from "./DefaultAtlasBackground";

type InsightsBackgroundProps = {
  accent: string;
};

const visitors = Array.from({ length: 32 }, (_, index) => ({
  id: index,
  left: `${12 + ((index * 23) % 76)}%`,
  top: `${16 + ((index * 31) % 68)}%`,
  x: 18 + (index % 5) * 8,
  y: 12 + (index % 4) * 7,
  delay: (index % 10) * 0.32,
  duration: 5 + (index % 6) * 0.7,
}));

const heatZones = [
  {
    id: "north-wing",
    left: "27%",
    top: "30%",
    size: 180,
    delay: 0,
  },
  {
    id: "center-court",
    left: "52%",
    top: "48%",
    size: 240,
    delay: 2,
  },
  {
    id: "food-court",
    left: "72%",
    top: "31%",
    size: 190,
    delay: 4,
  },
  {
    id: "east-entry",
    left: "70%",
    top: "67%",
    size: 150,
    delay: 6,
  },
  {
    id: "west-entry",
    left: "26%",
    top: "68%",
    size: 135,
    delay: 8,
  },
];

const flowPaths = [
  {
    id: 1,
    left: "18%",
    top: "38%",
    width: 260,
    rotate: 12,
    delay: 0,
  },
  {
    id: 2,
    left: "42%",
    top: "35%",
    width: 290,
    rotate: -10,
    delay: 0.9,
  },
  {
    id: 3,
    left: "24%",
    top: "62%",
    width: 330,
    rotate: -4,
    delay: 1.8,
  },
  {
    id: 4,
    left: "51%",
    top: "58%",
    width: 260,
    rotate: 18,
    delay: 2.7,
  },
  {
    id: 5,
    left: "38%",
    top: "46%",
    width: 220,
    rotate: 40,
    delay: 3.6,
  },
];

const qrStations = [
  {
    id: "qr-1",
    left: "20%",
    top: "52%",
    delay: 0,
    label: "ENTRY A",
  },
  {
    id: "qr-2",
    left: "44%",
    top: "26%",
    delay: 1.2,
    label: "KIOSK 04",
  },
  {
    id: "qr-3",
    left: "65%",
    top: "42%",
    delay: 2.4,
    label: "LEVEL 2",
  },
  {
    id: "qr-4",
    left: "79%",
    top: "62%",
    delay: 3.6,
    label: "PARKING B",
  },
];

const destinationBars = [
  {
    name: "NIKE",
    value: 92,
    visits: "2,841",
  },
  {
    name: "FOOD COURT",
    value: 78,
    visits: "2,104",
  },
  {
    name: "CINEMA",
    value: 63,
    visits: "1,756",
  },
  {
    name: "GUEST SERVICES",
    value: 47,
    visits: "1,209",
  },
  {
    name: "PARKING A",
    value: 36,
    visits: "964",
  },
];

const statusSystems = [
  {
    name: "DIRECTORY",
    status: "ONLINE",
    delay: 0,
  },
  {
    name: "NAVIGATION",
    status: "ONLINE",
    delay: 0.4,
  },
  {
    name: "QR NETWORK",
    status: "ONLINE",
    delay: 0.8,
  },
  {
    name: "KIOSKS",
    status: "ONLINE",
    delay: 1.2,
  },
  {
    name: "ANALYTICS",
    status: "ACTIVE",
    delay: 1.6,
  },
];

const chartPoints = [
  [0, 72],
  [55, 68],
  [110, 51],
  [165, 58],
  [220, 33],
  [275, 42],
  [330, 18],
  [385, 30],
  [440, 12],
  [495, 24],
];

const hourlyBars = [44, 58, 49, 72, 64, 88, 76, 94, 82, 68, 53, 41];

const dataParticles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${8 + ((index * 29) % 84)}%`,
  top: `${12 + ((index * 17) % 76)}%`,
  delay: (index % 7) * 0.45,
  duration: 4 + (index % 5) * 0.75,
}));

export default function InsightsBackground({
  accent,
}: InsightsBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <DefaultAtlasBackground accent={accent} />

      {/* Analytics Atmosphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[170px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,.17), rgba(37,99,235,.08) 42%, transparent 73%)",
        }}
        animate={{
          opacity: [0.24, 0.52, 0.24],
          scale: [0.94, 1.08, 0.94],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Data Particles */}
      {dataParticles.map((particle) => (
        <motion.div
          key={`data-particle-${particle.id}`}
          className="absolute h-1 w-1 rounded-full bg-cyan-200"
          style={{
            left: particle.left,
            top: particle.top,
            boxShadow: "0 0 9px rgba(34,211,238,.85)",
          }}
          animate={{
            y: [0, -24, 8, 0],
            x: [0, 10, -7, 0],
            opacity: [0.12, 0.85, 0.32, 0.12],
            scale: [0.7, 1.4, 0.9, 0.7],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Heat Map Zones */}
      {heatZones.map((zone) => (
        <motion.div
          key={zone.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: zone.left,
            top: zone.top,
            width: zone.size,
            height: zone.size,
            background:
              "radial-gradient(circle, rgba(34,211,238,.34) 0%, rgba(59,130,246,.2) 25%, rgba(14,165,233,.08) 52%, transparent 74%)",
            filter: "blur(8px)",
          }}
          animate={{
            scale: [0.65, 1.2, 0.76, 1.05, 0.65],
            opacity: [0.16, 0.68, 0.3, 0.52, 0.16],
          }}
          transition={{
            duration: 10,
            delay: zone.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Hotspot Cores */}
      {heatZones.map((zone, index) => (
        <motion.div
          key={`hotspot-core-${zone.id}`}
          className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50 bg-cyan-300/30"
          style={{
            left: zone.left,
            top: zone.top,
            boxShadow:
              "0 0 18px rgba(34,211,238,.95), 0 0 45px rgba(37,99,235,.55)",
          }}
          animate={{
            scale: [0.8, 1.45, 0.8],
            opacity: [0.42, 1, 0.42],
          }}
          transition={{
            duration: 3.2,
            delay: index * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/30"
            animate={{
              scale: [0.45, 2.2],
              opacity: [0.75, 0],
            }}
            transition={{
              duration: 3.5,
              delay: index * 0.7,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </motion.div>
      ))}

      {/* Visitor Flow Paths */}
      {flowPaths.map((path) => (
        <div
          key={`flow-path-${path.id}`}
          className="absolute h-px origin-left"
          style={{
            left: path.left,
            top: path.top,
            width: path.width,
            rotate: `${path.rotate}deg`,
            background:
              "linear-gradient(90deg, transparent, rgba(34,211,238,.16), rgba(255,255,255,.3), rgba(34,211,238,.16), transparent)",
          }}
        >
          <motion.div
            className="absolute left-0 top-1/2 h-1.5 w-14 -translate-y-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,.96), rgba(34,211,238,.88), transparent)",
              boxShadow: "0 0 14px rgba(34,211,238,.85)",
            }}
            animate={{
              x: [0, path.width - 56],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.6,
              delay: path.delay,
              repeat: Infinity,
              repeatDelay: 1.1,
              ease: "easeInOut",
            }}
          />
        </div>
      ))}

      {/* Moving Visitors */}
      {visitors.map((visitor) => (
        <motion.div
          key={`visitor-${visitor.id}`}
          className="absolute"
          style={{
            left: visitor.left,
            top: visitor.top,
          }}
          animate={{
            x: [0, visitor.x, -visitor.x * 0.45, 0],
            y: [0, -visitor.y, visitor.y * 0.6, 0],
          }}
          transition={{
            duration: visitor.duration,
            delay: visitor.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="h-1.5 w-1.5 rounded-full bg-white"
            style={{
              boxShadow:
                "0 0 8px rgba(255,255,255,.95), 0 0 14px rgba(34,211,238,.65)",
            }}
            animate={{
              opacity: [0.25, 1, 0.45, 0.25],
              scale: [0.75, 1.25, 0.85, 0.75],
            }}
            transition={{
              duration: 2.4,
              delay: visitor.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute left-1/2 top-1/2 h-px w-8 -translate-y-1/2 origin-left"
            style={{
              background:
                "linear-gradient(90deg, rgba(34,211,238,.5), transparent)",
            }}
            animate={{
              opacity: [0, 0.55, 0],
              scaleX: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2.2,
              delay: visitor.delay,
              repeat: Infinity,
            }}
          />
        </motion.div>
      ))}

      {/* QR Stations */}
      {qrStations.map((station) => (
        <motion.div
          key={station.id}
          className="absolute"
          style={{
            left: station.left,
            top: station.top,
          }}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 3.8,
            delay: station.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/30"
            animate={{
              scale: [0.45, 2],
              opacity: [0.7, 0],
            }}
            transition={{
              duration: 3.2,
              delay: station.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          <div
            className="relative grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 grid-cols-3 gap-[2px] rounded-md border border-cyan-200/55 bg-slate-950/80 p-1 backdrop-blur-sm"
            style={{
              boxShadow:
                "0 0 15px rgba(34,211,238,.75), inset 0 0 10px rgba(34,211,238,.12)",
            }}
          >
            {Array.from({ length: 9 }, (_, index) => (
              <motion.div
                key={`${station.id}-pixel-${index}`}
                className="rounded-[1px] bg-cyan-200"
                animate={{
                  opacity:
                    index % 2 === 0
                      ? [0.3, 1, 0.3]
                      : [0.8, 0.25, 0.8],
                }}
                transition={{
                  duration: 1.8,
                  delay: station.delay + index * 0.08,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          <div className="absolute left-3 top-3 whitespace-nowrap rounded border border-cyan-300/15 bg-slate-950/70 px-2 py-1 font-mono text-[7px] tracking-[0.16em] text-cyan-100/55 backdrop-blur-sm">
            {station.label}
          </div>

          <motion.div
            className="absolute left-1/2 top-1/2 h-px w-48 origin-left"
            style={{
              background:
                "linear-gradient(90deg, rgba(34,211,238,.8), rgba(255,255,255,.55), transparent)",
              boxShadow: "0 0 10px rgba(34,211,238,.5)",
            }}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.85, 0],
            }}
            transition={{
              duration: 3,
              delay: station.delay,
              repeat: Infinity,
              repeatDelay: 1.4,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}

      {/* Main Analytics Graph */}
      <motion.div
        className="absolute left-10 top-[18%] w-[390px] rounded-2xl border border-cyan-300/20 bg-slate-950/68 p-5 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 24px 70px rgba(2,8,23,.5), inset 0 0 30px rgba(34,211,238,.045)",
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[9px] tracking-[0.28em] text-cyan-300/65">
              VISITOR ACTIVITY
            </div>
            <div className="mt-2 text-3xl tracking-[0.04em] text-white">
              12,487
            </div>
            <div className="mt-1 text-[8px] tracking-[0.18em] text-emerald-400">
              +18.4% TODAY
            </div>
          </div>

          <motion.div
            className="rounded-lg border border-cyan-300/20 bg-cyan-400/8 px-3 py-2 text-[8px] tracking-[0.18em] text-cyan-100"
            animate={{
              borderColor: [
                "rgba(34,211,238,.16)",
                "rgba(34,211,238,.55)",
                "rgba(34,211,238,.16)",
              ],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
            }}
          >
            LIVE
          </motion.div>
        </div>

        <div className="relative mt-5 h-36 overflow-hidden rounded-xl border border-cyan-300/10 bg-slate-900/40">
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34,211,238,.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34,211,238,.1) 1px, transparent 1px)
              `,
              backgroundSize: "44px 28px",
            }}
          />

          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 500 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="insights-chart-line" x1="0" x2="1">
                <stop offset="0%" stopColor="rgba(34,211,238,.25)" />
                <stop offset="55%" stopColor="rgba(255,255,255,.95)" />
                <stop offset="100%" stopColor="rgba(59,130,246,.8)" />
              </linearGradient>

              <linearGradient id="insights-chart-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(34,211,238,.25)" />
                <stop offset="100%" stopColor="rgba(34,211,238,0)" />
              </linearGradient>

              <filter id="insights-chart-glow">
                <feGaussianBlur stdDeviation="2.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <motion.path
              d={`M ${chartPoints
                .map(([x, y]) => `${x} ${y}`)
                .join(" L ")}`}
              fill="none"
              stroke="url(#insights-chart-line)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#insights-chart-glow)"
              initial={{
                pathLength: 0,
                opacity: 0,
              }}
              animate={{
                pathLength: [0, 1, 1],
                opacity: [0, 1, 0.85],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "easeInOut",
              }}
            />

            <motion.path
              d={`M 0 100 L ${chartPoints
                .map(([x, y]) => `${x} ${y}`)
                .join(" L ")} L 500 100 Z`}
              fill="url(#insights-chart-fill)"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 0.8, 0.28],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                repeatDelay: 1.2,
              }}
            />

            {chartPoints.map(([x, y], index) => (
              <motion.circle
                key={`chart-point-${index}`}
                cx={x}
                cy={y}
                r="3.5"
                fill="white"
                filter="url(#insights-chart-glow)"
                animate={{
                  opacity: [0.2, 1, 0.2],
                  r: [2.5, 4.5, 2.5],
                }}
                transition={{
                  duration: 2.4,
                  delay: index * 0.18,
                  repeat: Infinity,
                }}
              />
            ))}
          </svg>

          <motion.div
            className="absolute bottom-0 top-0 w-px"
            style={{
              background:
                "linear-gradient(180deg, transparent, rgba(255,255,255,.8), rgba(34,211,238,.65), transparent)",
              boxShadow: "0 0 10px rgba(34,211,238,.65)",
            }}
            animate={{
              left: ["0%", "100%"],
              opacity: [0, 0.9, 0],
            }}
            transition={{
              duration: 4.4,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="mt-4 flex justify-between text-[7px] tracking-[0.16em] text-white/35">
          <span>8 AM</span>
          <span>10 AM</span>
          <span>12 PM</span>
          <span>2 PM</span>
          <span>4 PM</span>
          <span>6 PM</span>
        </div>
      </motion.div>

      {/* Occupancy Gauge */}
      <motion.div
        className="absolute right-10 top-[17%] flex h-[225px] w-[225px] flex-col items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/64 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 24px 70px rgba(2,8,23,.5), inset 0 0 35px rgba(34,211,238,.06)",
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          className="absolute inset-3 h-[calc(100%-24px)] w-[calc(100%-24px)] -rotate-90"
          viewBox="0 0 200 200"
        >
          <circle
            cx="100"
            cy="100"
            r="82"
            fill="none"
            stroke="rgba(34,211,238,.08)"
            strokeWidth="10"
          />

          <motion.circle
            cx="100"
            cy="100"
            r="82"
            fill="none"
            stroke="rgba(34,211,238,.92)"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={515}
            initial={{
              strokeDashoffset: 515,
            }}
            animate={{
              strokeDashoffset: [515, 93, 93],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatDelay: 1.6,
              ease: "easeInOut",
            }}
            style={{
              filter: "drop-shadow(0 0 7px rgba(34,211,238,.8))",
            }}
          />

          <motion.circle
            cx="100"
            cy="100"
            r="66"
            fill="none"
            stroke="rgba(59,130,246,.32)"
            strokeWidth="2"
            strokeDasharray="4 10"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              transformOrigin: "100px 100px",
            }}
          />
        </svg>

        <div className="text-[8px] tracking-[0.28em] text-cyan-300/60">
          FACILITY
        </div>

        <motion.div
          className="mt-2 text-5xl tracking-[-0.04em] text-white"
          animate={{
            scale: [0.97, 1.04, 0.97],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          82%
        </motion.div>

        <div className="mt-2 text-[9px] tracking-[0.22em] text-white/48">
          OCCUPANCY
        </div>

        <motion.div
          className="mt-3 rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1 text-[7px] tracking-[0.18em] text-emerald-400"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          NORMAL FLOW
        </motion.div>
      </motion.div>

      {/* Popular Destinations */}
      <motion.div
        className="absolute bottom-10 left-10 w-[330px] rounded-2xl border border-cyan-300/18 bg-slate-950/68 p-5 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 22px 65px rgba(2,8,23,.48), inset 0 0 26px rgba(34,211,238,.04)",
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[9px] tracking-[0.28em] text-cyan-300/65">
            POPULAR DESTINATIONS
          </div>

          <div className="text-[7px] tracking-[0.16em] text-white/35">
            LIVE RANKING
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {destinationBars.map((destination, index) => (
            <div key={destination.name}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-4 text-[8px] text-cyan-300/50">
                    0{index + 1}
                  </div>
                  <div className="text-[8px] tracking-[0.16em] text-white/75">
                    {destination.name}
                  </div>
                </div>

                <div className="text-[8px] tracking-[0.12em] text-cyan-100">
                  {destination.visits}
                </div>
              </div>

              <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(34,211,238,.42), rgba(255,255,255,.88), rgba(59,130,246,.62))",
                    boxShadow: "0 0 10px rgba(34,211,238,.4)",
                  }}
                  initial={{
                    width: "0%",
                  }}
                  animate={{
                    width: `${destination.value}%`,
                  }}
                  transition={{
                    duration: 2.4,
                    delay: index * 0.28,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Hourly Traffic */}
      <motion.div
        className="absolute bottom-10 left-1/2 w-[360px] -translate-x-1/2 rounded-2xl border border-cyan-300/18 bg-slate-950/68 p-5 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 22px 65px rgba(2,8,23,.48), inset 0 0 26px rgba(34,211,238,.04)",
        }}
        animate={{
          y: [0, -4, 0],
        }}
        transition={{
          duration: 4.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[9px] tracking-[0.27em] text-cyan-300/65">
              HOURLY TRAFFIC
            </div>
            <div className="mt-1 text-[8px] tracking-[0.14em] text-white/35">
              VISITOR DISTRIBUTION
            </div>
          </div>

          <div className="text-right">
            <div className="text-lg text-white">1,284</div>
            <div className="text-[7px] tracking-[0.14em] text-emerald-400">
              PEAK HOUR
            </div>
          </div>
        </div>

        <div className="mt-5 flex h-24 items-end gap-2">
          {hourlyBars.map((height, index) => (
            <div
              key={`hourly-bar-${index}`}
              className="relative flex h-full flex-1 items-end overflow-hidden rounded-t"
            >
              <motion.div
                className="w-full rounded-t"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,.84), rgba(34,211,238,.58), rgba(37,99,235,.22))",
                  boxShadow: "0 0 10px rgba(34,211,238,.3)",
                }}
                initial={{
                  height: "0%",
                }}
                animate={{
                  height: [`12%`, `${height}%`, `${Math.max(18, height - 12)}%`],
                }}
                transition={{
                  duration: 3.8,
                  delay: index * 0.12,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                  ease: "easeInOut",
                }}
              />

              <motion.div
                className="absolute left-0 right-0 h-px bg-white"
                animate={{
                  bottom: ["0%", `${height}%`],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  duration: 3.8,
                  delay: index * 0.12,
                  repeat: Infinity,
                  repeatDelay: 1.2,
                }}
              />
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-between text-[6px] tracking-[0.1em] text-white/28">
          <span>8A</span>
          <span>10A</span>
          <span>12P</span>
          <span>2P</span>
          <span>4P</span>
          <span>6P</span>
        </div>
      </motion.div>

      {/* Facility Systems */}
      <motion.div
        className="absolute bottom-10 right-10 w-[285px] rounded-2xl border border-cyan-300/18 bg-slate-950/68 p-5 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 22px 65px rgba(2,8,23,.48), inset 0 0 26px rgba(34,211,238,.04)",
        }}
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 5.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[9px] tracking-[0.27em] text-cyan-300/65">
            FACILITY SYSTEMS
          </div>

          <motion.div
            className="h-2 w-2 rounded-full bg-emerald-400"
            style={{
              boxShadow: "0 0 10px rgba(52,211,153,.9)",
            }}
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.8, 1.25, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="mt-4 space-y-3">
          {statusSystems.map((system) => (
            <div
              key={system.name}
              className="flex items-center justify-between border-b border-cyan-300/8 pb-2"
            >
              <div className="flex items-center gap-3">
                <motion.div
                  className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                  style={{
                    boxShadow: "0 0 7px rgba(52,211,153,.8)",
                  }}
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: system.delay,
                    repeat: Infinity,
                  }}
                />

                <div className="text-[8px] tracking-[0.17em] text-white/58">
                  {system.name}
                </div>
              </div>

              <motion.div
                className="text-[7px] tracking-[0.16em] text-emerald-400"
                animate={{
                  opacity: [0.55, 1, 0.55],
                }}
                transition={{
                  duration: 2.2,
                  delay: system.delay,
                  repeat: Infinity,
                }}
              >
                {system.status}
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 text-center">
          <div className="rounded-lg border border-cyan-300/10 bg-cyan-400/5 py-2">
            <div className="text-[7px] tracking-[0.14em] text-white/35">
              UPTIME
            </div>
            <div className="mt-1 text-xs text-white">99.9%</div>
          </div>

          <div className="rounded-lg border border-cyan-300/10 bg-cyan-400/5 py-2">
            <div className="text-[7px] tracking-[0.14em] text-white/35">
              KIOSKS
            </div>
            <div className="mt-1 text-xs text-white">24</div>
          </div>

          <div className="rounded-lg border border-cyan-300/10 bg-cyan-400/5 py-2">
            <div className="text-[7px] tracking-[0.14em] text-white/35">
              QR NODES
            </div>
            <div className="mt-1 text-xs text-white">86</div>
          </div>
        </div>
      </motion.div>

      {/* QR Scan Metric */}
      <motion.div
        className="absolute right-[285px] top-[19%] w-48 rounded-xl border border-cyan-300/16 bg-slate-950/62 p-4 font-mono backdrop-blur-md"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4.1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[7px] tracking-[0.21em] text-cyan-300/58">
              QR SCANS
            </div>
            <div className="mt-2 text-2xl text-white">2,431</div>
            <div className="mt-1 text-[7px] tracking-[0.14em] text-emerald-400">
              +23.8%
            </div>
          </div>

          <motion.div
            className="grid h-9 w-9 grid-cols-3 gap-[2px] rounded-md border border-cyan-300/20 bg-cyan-400/6 p-1.5"
            animate={{
              scale: [0.92, 1.08, 0.92],
              boxShadow: [
                "0 0 0 rgba(34,211,238,0)",
                "0 0 18px rgba(34,211,238,.3)",
                "0 0 0 rgba(34,211,238,0)",
              ],
            }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
            }}
          >
            {Array.from({ length: 9 }, (_, index) => (
              <motion.div
                key={`metric-qr-${index}`}
                className="rounded-[1px] bg-cyan-200"
                animate={{
                  opacity:
                    index % 3 === 0
                      ? [0.25, 1, 0.25]
                      : [0.85, 0.3, 0.85],
                }}
                transition={{
                  duration: 1.6,
                  delay: index * 0.08,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Navigation Sessions Metric */}
      <motion.div
        className="absolute right-[285px] top-[36%] w-48 rounded-xl border border-cyan-300/16 bg-slate-950/62 p-4 font-mono backdrop-blur-md"
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 4.4,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-[7px] tracking-[0.21em] text-cyan-300/58">
          ACTIVE ROUTES
        </div>

        <div className="mt-2 flex items-end justify-between">
          <div>
            <div className="text-2xl text-white">318</div>
            <div className="mt-1 text-[7px] tracking-[0.14em] text-white/35">
              LIVE SESSIONS
            </div>
          </div>

          <motion.div
            className="relative h-11 w-11 rounded-full border border-cyan-300/20"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,.9)]" />
            <div className="absolute left-1/2 top-1 h-2 w-px -translate-x-1/2 bg-cyan-200" />
            <div className="absolute bottom-1 left-1/2 h-2 w-px -translate-x-1/2 bg-cyan-200/35" />
            <div className="absolute left-1 top-1/2 h-px w-2 -translate-y-1/2 bg-cyan-200/35" />
            <div className="absolute right-1 top-1/2 h-px w-2 -translate-y-1/2 bg-cyan-200" />
          </motion.div>
        </div>
      </motion.div>

      {/* AI Insight Card */}
      <motion.div
        className="absolute left-[39%] top-[15%] w-[275px] rounded-2xl border border-cyan-300/18 bg-slate-950/66 p-5 font-mono backdrop-blur-md"
        style={{
          boxShadow:
            "0 18px 55px rgba(2,8,23,.44), inset 0 0 24px rgba(34,211,238,.045)",
        }}
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center justify-between">
          <div className="text-[8px] tracking-[0.24em] text-cyan-300/62">
            ATLAS INTELLIGENCE
          </div>

          <motion.div
            className="h-2 w-2 rounded-full bg-cyan-300"
            style={{
              boxShadow: "0 0 10px rgba(34,211,238,.9)",
            }}
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </div>

        <div className="mt-4 text-sm leading-6 tracking-[0.04em] text-white/85">
          Dining traffic is currently
          <span className="text-cyan-200"> 18% above </span>
          the normal weekday average.
        </div>

        <div className="mt-4 rounded-xl border border-cyan-300/10 bg-cyan-400/5 p-3">
          <div className="text-[7px] tracking-[0.18em] text-white/35">
            RECOMMENDED ACTION
          </div>

          <div className="mt-2 text-[8px] leading-4 tracking-[0.12em] text-cyan-100/72">
            INCREASE DIGITAL SIGNAGE SUPPORT NEAR CENTER COURT
          </div>
        </div>

        <motion.div
          className="mt-4 h-px origin-left"
          style={{
            background:
              "linear-gradient(90deg, rgba(34,211,238,.75), transparent)",
          }}
          animate={{
            scaleX: [0.15, 1, 0.15],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Vertical Scan Sweep */}
      <motion.div
        className="absolute bottom-[8%] top-[8%] w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(34,211,238,.55), rgba(255,255,255,.85), rgba(34,211,238,.55), transparent)",
          boxShadow: "0 0 16px rgba(34,211,238,.5)",
        }}
        animate={{
          left: ["8%", "92%", "8%"],
          opacity: [0, 0.55, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Horizontal Analytics Sweep */}
      <motion.div
        className="absolute left-[7%] right-[7%] h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(34,211,238,.4), rgba(255,255,255,.72), rgba(34,211,238,.4), transparent)",
          boxShadow: "0 0 12px rgba(34,211,238,.45)",
        }}
        animate={{
          top: ["10%", "90%", "10%"],
          opacity: [0, 0.42, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Top HUD */}
      <div className="absolute left-10 top-10 font-mono">
        <div className="text-xs tracking-[0.4em] text-cyan-300">
          ATLAS INSIGHTS
        </div>

        <div className="mt-2 text-[9px] tracking-[0.24em] text-white/50">
          LOCATION INTELLIGENCE PLATFORM
        </div>
      </div>

      <div className="absolute right-10 top-10 text-right font-mono">
        <div className="text-[8px] tracking-[0.26em] text-cyan-300/60">
          ANALYTICS STATUS
        </div>

        <motion.div
          className="mt-1 text-xs tracking-[0.18em] text-emerald-400"
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          LIVE INTELLIGENCE
        </motion.div>
      </div>

      {/* Facility Label */}
      <motion.div
        className="absolute left-1/2 top-10 -translate-x-1/2 rounded-full border border-cyan-300/15 bg-slate-950/50 px-5 py-2 font-mono backdrop-blur-sm"
        animate={{
          y: [0, -3, 0],
          borderColor: [
            "rgba(34,211,238,.12)",
            "rgba(34,211,238,.34)",
            "rgba(34,211,238,.12)",
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="text-[8px] tracking-[0.25em] text-white/50">
          FACILITY MODE
        </div>

        <div className="mt-1 text-center text-[10px] tracking-[0.2em] text-cyan-200">
          SHOPPING CENTER
        </div>
      </motion.div>

      {/* Corner Brackets */}
      <div className="absolute left-5 top-5 h-14 w-14 border-l border-t border-cyan-300/24" />
      <div className="absolute right-5 top-5 h-14 w-14 border-r border-t border-cyan-300/24" />
      <div className="absolute bottom-5 left-5 h-14 w-14 border-b border-l border-cyan-300/24" />
      <div className="absolute bottom-5 right-5 h-14 w-14 border-b border-r border-cyan-300/24" />

      {/* Edge Coordinates */}
      <div className="absolute left-5 top-1/2 -translate-y-1/2 -rotate-90 font-mono text-[7px] tracking-[0.26em] text-cyan-300/24">
        ATLAS LOCATION GRID · 34.7465° N
      </div>

      <div className="absolute right-5 top-1/2 -translate-y-1/2 rotate-90 font-mono text-[7px] tracking-[0.26em] text-cyan-300/24">
        REAL-TIME FACILITY TELEMETRY
      </div>

      {/* Final Edge Fade */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, transparent 44%, rgba(2,8,23,.13) 70%, rgba(2,8,23,.74) 100%)",
        }}
      />
    </div>
  );
}