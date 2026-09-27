type ConnectionLinesProps = {
  active: boolean;
  selected: string | null;
  nodeCount: number;
  radius: number;
  color: string;
};

export default function ConnectionLines({
  active,
  selected,
  nodeCount,
  radius,
  color,
}: ConnectionLinesProps) {
  if (!active) return null;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 620 620"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 2,
        pointerEvents: "none",
      }}
    >
      {Array.from({ length: nodeCount }).map((_, index) => {
        const angle = (360 / nodeCount) * index - 90;
        const x = 310 + Math.cos((angle * Math.PI) / 180) * radius;
        const y = 310 + Math.sin((angle * Math.PI) / 180) * radius;

        return (
          <line
            key={index}
            x1="310"
            y1="310"
            x2={x}
            y2={y}
            stroke={color}
            strokeWidth={selected ? 0.8 : 1.2}
            opacity={selected ? 0.18 : 0.34}
          />
        );
      })}
    </svg>
  );
}