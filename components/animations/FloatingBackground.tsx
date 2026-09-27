"use client";

import { motion } from "framer-motion";

import AuraBackground from "./AuraBackground";
import TerraBackground from "./TerraBackground";
import HavenBackground from "./HavenBackground";
import OrbitBackground from "./OrbitBackground";
import AtlasBackground from "./AtlasBackground";
import EnterpriseBackground from "./EnterpriseBackground";
import MedicalBackground from "./MedicalBackground";

type FloatingBackgroundProps = {
  accent: string;
  variant:
    | "terra"
    | "haven"
    | "atlas"
    | "orbit"
    | "enterprise"
    | "medical"
    | "gaming"
    | "aura";
  product?: string;
};

export default function FloatingBackground({
  accent,
  variant,
  product,
}: FloatingBackgroundProps) {
  if (variant === "terra") {
    return (
      <TerraBackground
        accent={accent}
        product={product}
      />
    );
  }

  if (variant === "haven") {
    return (
      <HavenBackground
        accent={accent}
        product={product}
      />
    );
  }

  if (variant === "orbit") {
    return (
      <OrbitBackground
        accent={accent}
        product={product}
      />
    );
  }

  if (variant === "atlas") {
    return (
      <AtlasBackground
        accent={accent}
        product={product}
      />
    );
  }

  if (variant === "enterprise") {
    return (
      <EnterpriseBackground
        accent={accent}
        productId={product}
      />
    );
  }

  if (variant === "medical") {
    return (
      <MedicalBackground
        accent={accent}
        productId={product}
      />
    );
  }

  if (variant === "aura") {
    return <AuraBackground />;
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          inset: 0,
          overflow: "hidden",
          pointerEvents: "none",
          zIndex: 1,
        }}
      >
        {Array.from({ length: 40 }).map((_, index) => {
          const left = (index * 83) % 100;
          const size = 4 + (index % 4) * 2;
          const height = 20 + (index % 6) * 8;

          return (
            <motion.div
              key={index}
              initial={{
                y: 900 + (index % 8) * 70,
                x: 0,
                opacity: 0,
                rotate: -20,
              }}
              animate={{
                y: -200,
                x: [0, 80, -35, 120],
                opacity: [0, 0.8, 0.55, 0],
                rotate: [-20, 25, -10, 35],
              }}
              transition={{
                duration: 9 + (index % 7),
                repeat: Infinity,
                delay: index * 0.16,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                left: `${left}%`,
                bottom: -100,
                width: size,
                height,
                borderRadius: 999,
                background: `linear-gradient(
                  to bottom,
                  transparent,
                  ${accent},
                  transparent
                )`,
                filter: "blur(1.5px)",
                boxShadow: `0 0 14px ${accent}`,
              }}
            />
          );
        })}
      </div>

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: -250,
          right: -250,
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: accent,
          filter: "blur(180px)",
          opacity: 0.2,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
    </>
  );
}