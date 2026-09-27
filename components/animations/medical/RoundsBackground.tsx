"use client";

type RoundsBackgroundProps = {
  accent?: string;
};

export default function RoundsBackground({
  accent = "#22d3ee",
}: RoundsBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">

      {/* Main Ambient Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-20"
        style={{
          background: `radial-gradient(circle, ${accent}55 0%, transparent 75%)`,
        }}
      />

      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Horizontal Hallways */}
      <div className="absolute left-0 top-[28%] h-px w-full bg-cyan-400/10" />
      <div className="absolute left-0 top-[50%] h-px w-full bg-cyan-400/10" />
      <div className="absolute left-0 top-[72%] h-px w-full bg-cyan-400/10" />

      {/* Vertical Hallways */}
      <div className="absolute left-[25%] top-0 h-full w-px bg-cyan-400/10" />
      <div className="absolute left-1/2 top-0 h-full w-px bg-cyan-400/10" />
      <div className="absolute left-[75%] top-0 h-full w-px bg-cyan-400/10" />

      {/* Patient Room Pulses */}
      {[
        ["20%", "22%"],
        ["48%", "18%"],
        ["78%", "24%"],
        ["26%", "52%"],
        ["55%", "55%"],
        ["82%", "58%"],
        ["18%", "82%"],
        ["52%", "80%"],
        ["78%", "82%"],
      ].map(([left, top], i) => (
        <div
          key={i}
          className="absolute h-3 w-3 rounded-full animate-pulse"
          style={{
            left,
            top,
            background: accent,
            boxShadow: `0 0 18px ${accent}`,
            animationDelay: `${i * .35}s`,
          }}
        />
      ))}

      {/* AI Route Lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-30"
        viewBox="0 0 1000 700"
        preserveAspectRatio="none"
      >
        <path
          d="M180 160 L360 160 L360 320 L620 320 L620 520 L820 520"
          stroke={accent}
          strokeWidth="2"
          fill="none"
          strokeDasharray="8 10"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-180"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M200 520 L200 250 L520 250 L520 120 L760 120"
          stroke={accent}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="6 8"
          opacity=".55"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="-150"
            dur="18s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Floating Digital Clipboards */}
      <div className="absolute left-[14%] top-[18%] h-24 w-16 rounded-xl border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm animate-[float_9s_ease-in-out_infinite]" />

      <div className="absolute right-[18%] top-[30%] h-20 w-14 rounded-xl border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm animate-[float_11s_ease-in-out_infinite]" />

      <div className="absolute left-[72%] bottom-[16%] h-24 w-16 rounded-xl border border-cyan-400/20 bg-cyan-500/5 backdrop-blur-sm animate-[float_13s_ease-in-out_infinite]" />

      {/* Navigation Nodes */}
      {[15, 32, 48, 67, 82].map((x) => (
        <div
          key={x}
          className="absolute top-[50%] h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-300"
          style={{
            left: `${x}%`,
            boxShadow: `0 0 10px ${accent}`,
          }}
        />
      ))}

      {/* Soft Lighting */}
      <div className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-cyan-400/5 to-transparent" />

      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-cyan-950/20 to-transparent" />

      {/* Slow EKG */}
      <svg
        className="absolute bottom-10 left-0 w-full opacity-15"
        viewBox="0 0 1200 120"
      >
        <path
          d="M0 60 H180 L220 60 L250 20 L285 95 L330 45 L370 60 H1200"
          stroke={accent}
          strokeWidth="2"
          fill="none"
        >
          <animate
            attributeName="stroke-dashoffset"
            from="600"
            to="0"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

    </div>
  );
}