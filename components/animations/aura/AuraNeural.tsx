"use client";

import { motion } from "framer-motion";

import type { AuraPhase } from "./auraTypes";

type AuraNeuralProps = {
  hovered: boolean;
  phase: AuraPhase;
};

type NeuralNode = {
  id: number;
  x: number;
  y: number;
  size: number;
};

type NeuralConnection = {
  id: string;
  from: NeuralNode;
  to: NeuralNode;
};

const nodes: NeuralNode[] = Array.from({ length: 48 }, (_, index) => ({
  id: index,
  x: (index * 37 + 11) % 100,
  y: (index * 53 + 7) % 100,
  size: 3 + (index % 4),
}));

const connections: NeuralConnection[] = nodes.flatMap((node, index) => {
  const nodeConnections: NeuralConnection[] = [];

  const adjacentNode = nodes[index + 1];
  const offsetNode = nodes[index + 6];
  const diagonalNode = nodes[index + 11];

  if (adjacentNode) {
    nodeConnections.push({
      id: `${node.id}-${adjacentNode.id}`,
      from: node,
      to: adjacentNode,
    });
  }

  if (offsetNode) {
    nodeConnections.push({
      id: `${node.id}-${offsetNode.id}`,
      from: node,
      to: offsetNode,
    });
  }

  if (index % 3 === 0 && diagonalNode) {
    nodeConnections.push({
      id: `${node.id}-${diagonalNode.id}`,
      from: node,
      to: diagonalNode,
    });
  }

  return nodeConnections;
});

export default function AuraNeural({
  hovered,
  phase,
}: AuraNeuralProps) {
  const isSequenceActive =
    phase !== "idle" && phase !== "hovering";

  const isEntering =
    phase === "entering" || phase === "tunnel";

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
      animate={{
        opacity: isEntering ? 0.12 : 1,
        scale: isEntering ? 1.6 : 1,
      }}
      transition={{
        duration: 1.2,
        ease: "easeIn",
      }}
    >
      {/* Neural atmosphere */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[1100px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[150px]"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.1) 0%, rgba(59,130,246,0.05) 38%, transparent 72%)",
        }}
        animate={{
          scale: hovered ? [0.95, 1.12, 0.95] : [0.96, 1.04, 0.96],
          opacity: isSequenceActive
            ? 0.18
            : hovered
              ? [0.25, 0.55, 0.25]
              : [0.14, 0.3, 0.14],
        }}
        transition={{
          duration: hovered ? 4 : 8,
          repeat: isSequenceActive ? 0 : Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Neural connections */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="aura-neural-glow">
            <feGaussianBlur
              stdDeviation="0.35"
              result="blur"
            />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient
            id="aura-neural-line"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="rgba(34,211,238,0.04)"
            />
            <stop
              offset="50%"
              stopColor="rgba(103,232,249,0.34)"
            />
            <stop
              offset="100%"
              stopColor="rgba(59,130,246,0.04)"
            />
          </linearGradient>
        </defs>

        {connections.map((connection, index) => (
          <motion.line
            key={connection.id}
            x1={connection.from.x}
            y1={connection.from.y}
            x2={connection.to.x}
            y2={connection.to.y}
            stroke="url(#aura-neural-line)"
            strokeWidth="0.11"
            vectorEffect="non-scaling-stroke"
            filter="url(#aura-neural-glow)"
            initial={false}
            animate={{
              opacity: isSequenceActive
                ? 0.1
                : hovered
                  ? [0.12, 0.5, 0.12]
                  : [0.06, 0.22, 0.06],
            }}
            transition={{
              duration: 3.5 + (index % 6) * 0.45,
              delay: (index % 10) * 0.18,
              repeat: isSequenceActive ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Traveling intelligence pulses */}
        {!isSequenceActive &&
          connections
            .filter((_, index) => index % 4 === 0)
            .map((connection, index) => (
              <motion.circle
                key={`pulse-${connection.id}`}
                r={hovered ? 0.34 : 0.24}
                fill="rgba(165,243,252,0.95)"
                filter="url(#aura-neural-glow)"
                initial={{
                  cx: connection.from.x,
                  cy: connection.from.y,
                  opacity: 0,
                }}
                animate={{
                  cx: [
                    connection.from.x,
                    connection.to.x,
                  ],
                  cy: [
                    connection.from.y,
                    connection.to.y,
                  ],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: hovered ? 1.8 : 3.2,
                  delay: index * 0.27,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
      </svg>

      {/* Neural nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
            background:
              index % 5 === 0
                ? "#e0f2fe"
                : "#67e8f9",
            boxShadow:
              index % 5 === 0
                ? "0 0 18px rgba(224,242,254,0.95)"
                : "0 0 14px rgba(34,211,238,0.72)",
          }}
          initial={false}
          animate={{
            scale: isSequenceActive
              ? 0.72
              : hovered
                ? [1, 2.1, 1]
                : [0.9, 1.45, 0.9],
            opacity: isSequenceActive
              ? 0.18
              : hovered
                ? [0.42, 1, 0.42]
                : [0.2, 0.62, 0.2],
          }}
          transition={{
            duration: hovered
              ? 1.8 + (index % 4) * 0.3
              : 3 + (index % 6) * 0.45,
            delay: (index % 12) * 0.16,
            repeat: isSequenceActive ? 0 : Infinity,
            ease: "easeInOut",
          }}
        >
          {index % 6 === 0 && !isSequenceActive && (
            <motion.span
              className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20"
              animate={{
                scale: [0.4, 2.4],
                opacity: [0.55, 0],
              }}
              transition={{
                duration: hovered ? 1.6 : 3,
                delay: (index % 8) * 0.3,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}
        </motion.div>
      ))}

      {/* Central thought waves */}
      {!isSequenceActive &&
        Array.from({ length: 3 }).map((_, index) => (
          <motion.div
            key={`thought-wave-${index}`}
            className="absolute left-1/2 top-1/2 rounded-full border border-cyan-300/10"
            style={{
              width: 260 + index * 150,
              height: 260 + index * 150,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: hovered
                ? [0.82, 1.18, 0.82]
                : [0.9, 1.06, 0.9],
              opacity: hovered
                ? [0.08, 0.3, 0.08]
                : [0.04, 0.14, 0.04],
              rotate: index % 2 === 0 ? 360 : -360,
            }}
            transition={{
              scale: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
              opacity: {
                duration: 5 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
              rotate: {
                duration: 45 + index * 12,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
        ))}
    </motion.div>
  );
}