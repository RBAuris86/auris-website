import type { EcosystemNode } from "@/lib/ecosystem";
import HexNode from "./HexNode";

type ProductRingProps = {
  selectedNode?: EcosystemNode;
  selectedProduct: string | null;
  radius: number;
  color: string;
  onSelectProduct: (productId: string) => void;
};

export default function ProductRing({
  selectedNode,
  selectedProduct,
  radius,
  color,
  onSelectProduct,
}: ProductRingProps) {
  if (!selectedNode) return null;

  return (
    <>
      {selectedNode.products.map((product, index) => {
        const angle =
          (360 / selectedNode.products.length) * index - 90;

        const x =
          Math.cos((angle * Math.PI) / 180) * radius;

        const y =
          Math.sin((angle * Math.PI) / 180) * radius;

        const isSelected = selectedProduct === product.id;

        const isDimmed =
          selectedProduct !== null &&
          selectedProduct !== product.id;

        return (
          <div
            key={product.id}
            style={{
              position: "absolute",
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              animation: "productBurst 460ms ease both",
              animationDelay: `${index * 75}ms`,
              zIndex: 3,
            }}
          >
            <HexNode
              label={product.name}
              color={color}
              size="outer"
              selected={isSelected}
              dimmed={isDimmed}
              onClick={() => onSelectProduct(product.id)}
            />
          </div>
        );
      })}
    </>
  );
}