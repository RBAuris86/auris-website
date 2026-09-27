"use client";

type MedSyncBackgroundProps = {
  accent?: string;
};

export default function MedSyncBackground({
  accent = "#38bdf8",
}: MedSyncBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Cloud Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[950px] w-[950px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${accent}55 0%, transparent 75%)`,
        }}
      />

      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:44px_44px]" />

      {/* Hexagon Mesh */}
      <svg
        className="absolute inset-0 h-full w-full opacity-10"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 18 }).map((_, i) => (
          <g key={i} transform={`translate(${(i % 6) * 220},${Math.floor(i / 6) * 230})`}>
            <polygon
              points="60,0 120,35 120,105 60,140 0,105 0,35"
              stroke={accent}
              strokeWidth="1"
              fill="none"
            />
          </g>
        ))}
      </svg>

      {/* Fiber Network */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1200 800"
      >
        <path
          d="M120 150 L400 150 L600 320 L900 320 L1080 150"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 10"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-200"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M160 620 L360 500 L620 520 L820 360 L1050 560"
          stroke="#8b5cf6"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 8"
          opacity=".5"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-180"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M250 300 L520 160 L840 260 L1040 120"
          stroke="#ffffff"
          strokeWidth="1"
          fill="none"
          strokeDasharray="4 6"
          opacity=".25"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-120"
            dur="18s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Network Nodes */}
      {[
        ["12%", "18%"],
        ["32%", "22%"],
        ["52%", "40%"],
        ["72%", "28%"],
        ["88%", "18%"],
        ["20%", "72%"],
        ["42%", "60%"],
        ["66%", "70%"],
        ["86%", "62%"],
      ].map(([left, top], i) => (
        <div
          key={i}
          className="absolute h-3 w-3 rounded-full animate-pulse"
          style={{
            left,
            top,
            background: accent,
            boxShadow: `0 0 16px ${accent}`,
            animationDelay: `${i * .3}s`,
          }}
        />
      ))}

      {/* Floating Cloud Servers */}
      <div className="absolute left-[14%] top-[22%] text-cyan-300/15 text-6xl animate-[float_12s_ease-in-out_infinite]">
        ☁
      </div>

      <div className="absolute right-[18%] top-[16%] text-cyan-300/10 text-5xl animate-[float_15s_ease-in-out_infinite]">
        ☁
      </div>

      <div className="absolute left-[76%] bottom-[18%] text-cyan-300/10 text-6xl animate-[float_18s_ease-in-out_infinite]">
        ☁
      </div>

      {/* Security Icons */}
      <div className="absolute left-[28%] top-[58%] text-cyan-400/15 text-3xl animate-pulse">
        🔒
      </div>

      <div className="absolute right-[24%] bottom-[28%] text-cyan-400/15 text-3xl animate-pulse">
        🛡
      </div>

      {/* AI Sync Core */}
      <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2">

        <div
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: accent }}
        />

        <div
          className="absolute inset-2 rounded-full"
          style={{
            background: accent,
            boxShadow: `0 0 35px ${accent}`,
          }}
        />

      </div>

      {/* Rotating Sync Rings */}
      <div
        className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/15 animate-[spin_30s_linear_infinite]"
      />

      <div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/10 animate-[spin_45s_linear_reverse_infinite]"
      />

      {/* Data Particles */}
      {Array.from({ length: 45 }).map((_, i) => (
        <div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-300 opacity-60"
          style={{
            left: `${(i * 11) % 100}%`,
            top: `${(i * 17) % 100}%`,
            animationDelay: `${(i % 8) * 0.4}s`,
            animationDuration: `${3 + (i % 4)}s`,
          }}
        />
      ))}

      {/* Soft Lighting */}
      <div className="absolute top-0 left-0 h-1/2 w-full bg-gradient-to-b from-cyan-400/5 to-transparent" />

      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-blue-950/20 to-transparent" />

    </div>
  );
}