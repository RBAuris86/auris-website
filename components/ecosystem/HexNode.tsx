"use client";

import { useState } from "react";

type HexNodeProps = {
  label: string;
  color: string;
  selected?: boolean;
  dimmed?: boolean;
  size?: "inner" | "outer";
  onClick?: () => void;
  onHoverChange?: (hovered: boolean) => void;
  style?: React.CSSProperties;
};

export default function HexNode({
  label,
  color,
  selected = false,
  dimmed = false,
  size = "inner",
  onClick,
  onHoverChange,
  style,
}: HexNodeProps) {
  const [hovered, setHovered] = useState(false);

  const width = size === "inner" ? 108 : 96;
  const height = size === "inner" ? 92 : 78;
  const activeVisual = selected || hovered;

  function handleHover(value: boolean) {
    setHovered(value);
    onHoverChange?.(value);
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      onFocus={() => handleHover(true)}
      onBlur={() => handleHover(false)}
      style={{
        width,
        height,
        border: "none",
        background: "transparent",
        color: "#ffffff",
        fontWeight: 900,
        cursor: onClick ? "pointer" : "default",
        opacity: dimmed && !hovered ? 0.32 : 1,
        transform: activeVisual ? "scale(1.08)" : "scale(1)",
        filter: activeVisual
          ? `drop-shadow(0 0 26px ${color})`
          : `drop-shadow(0 0 8px ${color}55)`,
        transition:
          "transform 240ms ease, opacity 240ms ease, filter 240ms ease",
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "grid",
          placeItems: "center",
          padding: 8,
          fontSize: size === "inner" ? 14 : 12,
          lineHeight: 1.1,
          background: activeVisual
            ? `linear-gradient(145deg, ${color}45, ${color}18)`
            : "rgba(15, 23, 42, 0.82)",
          border: `1px solid ${
            activeVisual ? color : "rgba(148, 163, 184, 0.35)"
          }`,
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          boxShadow: activeVisual
            ? `0 0 34px ${color}35 inset`
            : `0 0 18px rgba(15, 23, 42, 0.55) inset`,
          transition:
            "background 240ms ease, border-color 240ms ease, box-shadow 240ms ease",
        }}
      >
        {label}
      </div>
    </button>
  );
}