import type { EcosystemNode } from "@/lib/ecosystem";

type ProductBranchesProps = {
  selectedNode?: EcosystemNode;
  selectedId: string | null;
  nodes: EcosystemNode[];
  innerRadius: number;
  productRadius: number;
  color: string;
};

export default function ProductBranches({
  selectedNode,
  selectedId,
  nodes,
  innerRadius,
  productRadius,
  color,
}: ProductBranchesProps) {
  if (!selectedNode || !selectedId) return null;

  const selectedIndex = nodes.findIndex((node) => node.id === selectedId);

  if (selectedIndex === -1) return null;

  const center = 310;

  const selectedAngle = (360 / nodes.length) * selectedIndex - 90;

  const startX =
    center +
    Math.cos((selectedAngle * Math.PI) / 180) * innerRadius;

  const startY =
    center +
    Math.sin((selectedAngle * Math.PI) / 180) * innerRadius;

  return (
    <svg
      viewBox="0 0 620 620"
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        overflow: "visible",
        zIndex: 2,
      }}
    >
      <defs>
        <filter
          id={`product-branch-glow-${selectedId}`}
          x="-100%"
          y="-100%"
          width="300%"
          height="300%"
        >
          <feGaussianBlur stdDeviation="4" result="blur" />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient
          id={`product-branch-gradient-${selectedId}`}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="55%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      {selectedNode.products.map((product, index) => {
        const angle =
          (360 / selectedNode.products.length) * index - 90;

        const endX =
          center +
          Math.cos((angle * Math.PI) / 180) * productRadius;

        const endY =
          center +
          Math.sin((angle * Math.PI) / 180) * productRadius;

        const middleX = (startX + endX) / 2;
        const middleY = (startY + endY) / 2;

        return (
          <g key={product.id}>
            <path
              d={`M ${startX} ${startY} Q ${middleX} ${middleY} ${endX} ${endY}`}
              fill="none"
              stroke={`url(#product-branch-gradient-${selectedId})`}
              strokeWidth="1.5"
              strokeLinecap="round"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset="1"
              filter={`url(#product-branch-glow-${selectedId})`}
              style={{
                animation: "drawProductBranch 650ms ease forwards",
                animationDelay: `${index * 90}ms`,
              }}
            />

            <circle
              r="3"
              fill={color}
              filter={`url(#product-branch-glow-${selectedId})`}
              style={{
                offsetPath: `path("M ${startX} ${startY} Q ${middleX} ${middleY} ${endX} ${endY}")`,
                offsetDistance: "0%",
                animation: "branchEnergyPulse 1200ms ease-in-out infinite",
                animationDelay: `${650 + index * 90}ms`,
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}