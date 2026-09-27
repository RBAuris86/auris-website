import type { EcosystemNode } from "@/lib/ecosystem";
import HexNode from "./HexNode";

type InnerRingProps = {
  active: boolean;
  nodes: EcosystemNode[];
  selected: string | null;
  hovered: string | null;
  radius: number;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
};

export default function InnerRing({
  active,
  nodes,
  selected,
  hovered,
  radius,
  onSelect,
  onHover,
}: InnerRingProps) {
  if (!active) return null;

  return (
    <>
      {nodes.map((node, index) => {
        const angle = (360 / nodes.length) * index - 90;
        const x = Math.cos((angle * Math.PI) / 180) * radius;
        const y = Math.sin((angle * Math.PI) / 180) * radius;

        const isSelected = selected === node.id;
        const isHovered = hovered === node.id;

        const shouldDim =
          selected !== null
            ? !isSelected
            : hovered !== null
              ? !isHovered
              : false;

        return (
          <div
            key={node.id}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              animation: "nodeFade 350ms ease both",
              animationDelay: `${index * 60}ms`,
              zIndex: 4,
            }}
          >
            <HexNode
              label={node.name}
              color={node.color}
              selected={isSelected}
              dimmed={shouldDim}
              onClick={() => onSelect(node.id)}
              onHoverChange={(isHovering) =>
                onHover(isHovering ? node.id : null)
              }
            />
          </div>
        );
      })}
    </>
  );
}