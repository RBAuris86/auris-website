"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import { ecosystemNodes } from "@/lib/ecosystem";

import AuraArrival from "@/components/animations/aura/AuraArrival";
import AuraBrainStem from "@/components/animations/aura/AuraBrainStem";
import AuraPortal from "@/components/animations/aura/AuraPortal";
import type { AuraPhase } from "@/components/animations/aura/auraTypes";

import Link from "next/link";

import CenterLogo from "./CenterLogo";
import ConnectionLines from "./ConnectionLines";
import HUD from "./HUD";
import InnerRing from "./InnerRing";
import ProductBranches from "./ProductBranches";
import ProductExperience from "./ProductExperience";
import ProductRing from "./ProductRing";

export default function Ecosystem() {
  const [active, setActive] = useState(false);

  const [selected, setSelected] = useState<string | null>(
    null,
  );

  const [selectedProduct, setSelectedProduct] =
    useState<string | null>(null);

  const [hovered, setHovered] = useState<string | null>(
    null,
  );

  const [auraPhase, setAuraPhase] =
    useState<AuraPhase>("idle");

  const [isCenterHovered, setIsCenterHovered] =
    useState(false);

  const sequenceStartedRef = useRef(false);

  const timersRef = useRef<
    ReturnType<typeof setTimeout>[]
  >([]);

  const selectedNode = ecosystemNodes.find(
    (node) => node.id === selected,
  );

  const selectedProductData =
    selectedNode?.products.find(
      (product) => product.id === selectedProduct,
    );

  const hoveredNode = ecosystemNodes.find(
    (node) => node.id === hovered,
  );

  const previewNode = selectedNode ?? hoveredNode;

  const accent = previewNode?.color ?? "#60a5fa";

  const clearAuraTimers = useCallback(() => {
    timersRef.current.forEach((timer) => {
      clearTimeout(timer);
    });

    timersRef.current = [];
  }, []);

  useEffect(() => {
    return () => {
      clearAuraTimers();
    };
  }, [clearAuraTimers]);

  const schedulePhase = useCallback(
    (nextPhase: AuraPhase, delay: number) => {
      const timer = setTimeout(() => {
        setAuraPhase(nextPhase);
      }, delay);

      timersRef.current.push(timer);
    },
    [],
  );

  const handleCenterHoverStart = useCallback(() => {
    if (active || sequenceStartedRef.current) {
      return;
    }

    setIsCenterHovered(true);
    setAuraPhase("hovering");
  }, [active]);

  const handleCenterHoverEnd = useCallback(() => {
    if (active || sequenceStartedRef.current) {
      return;
    }

    setIsCenterHovered(false);
    setAuraPhase("idle");
  }, [active]);

  const activateEcosystem = useCallback(() => {
    if (active || sequenceStartedRef.current) {
      return;
    }

    sequenceStartedRef.current = true;

    setIsCenterHovered(false);

    clearAuraTimers();

    setAuraPhase("freezing");

    schedulePhase("compressing", 450);
    schedulePhase("opening", 1150);
    schedulePhase("entering", 2150);
    schedulePhase("tunnel", 3350);
    schedulePhase("arrival", 8200);

    const revealEcosystemTimer = setTimeout(() => {
      setActive(true);
    }, 9400);

    const clearArrivalTimer = setTimeout(() => {
      setAuraPhase("idle");
    }, 10800);

    timersRef.current.push(
      revealEcosystemTimer,
      clearArrivalTimer,
    );
  }, [
    active,
    clearAuraTimers,
    schedulePhase,
  ]);

  const collapseEcosystem = useCallback(() => {
    clearAuraTimers();

    sequenceStartedRef.current = false;

    setSelectedProduct(null);
    setSelected(null);
    setHovered(null);

    setIsCenterHovered(false);

    setAuraPhase("idle");

    setActive(false);
  }, [clearAuraTimers]);

  const isAuraSequenceActive =
    auraPhase !== "idle" &&
    auraPhase !== "hovering";

  return (
    <section
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
        padding: 32,
        paddingTop: active ? 24 : 60,
        textAlign: "center",
        color: "#ffffff",

        background: previewNode
          ? `radial-gradient(circle at center, ${accent}38, #020617 58%)`
          : "radial-gradient(circle at center, #1e3a8a55, #020617 58%)",

        transition:
          "background 700ms ease, padding-top 500ms ease",
      }}
    >
      <style>{`
        @keyframes productExperienceIn {
          from {
            opacity: 0;
            transform: scale(.92);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes drawProductBranch {
          from {
            stroke-dashoffset: 1;
            opacity: 0;
          }

          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes branchEnergyPulse {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }

          15% {
            opacity: 1;
          }

          85% {
            opacity: 1;
          }

          100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }

        @keyframes ringDrift {
          from {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }
        }

        @keyframes ringDriftReverse {
          from {
            transform:
              translate(-50%, -50%)
              rotate(360deg);
          }

          to {
            transform:
              translate(-50%, -50%)
              rotate(0deg);
          }
        }

        @keyframes nodeFade {
          from {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.35);
          }

          to {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1);
          }
        }

        @keyframes productBurst {
          0% {
            opacity: 0;
            transform:
              translate(-50%, -50%)
              scale(0.15);
          }

          70% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1.08);
          }

          100% {
            opacity: 1;
            transform:
              translate(-50%, -50%)
              scale(1);
          }
        }
      `}</style>

      <HUD
        active={active}
        accent={accent}
        title={selectedNode?.name}
        subtitle={
          selectedNode
            ? selectedNode.tagline
            : "Select a division from the inner ring."
        }
        onCollapse={collapseEcosystem}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1040,

          opacity: isAuraSequenceActive
            ? 0.28
            : 1,

          transform: isAuraSequenceActive
            ? "scale(0.96)"
            : "scale(1)",

          filter: isAuraSequenceActive
            ? "blur(2px)"
            : "blur(0px)",

          transition:
            "opacity 450ms ease, transform 450ms ease, filter 450ms ease",
        }}
      >
        {!active && (
          <header>
            <p
              style={{
                margin: 0,
                color: accent,
                fontWeight: 900,
                letterSpacing: 3,
              }}
            >
              EXPLORE THE
            </p>

            <h1
              style={{
                margin: "8px 0 10px",
                fontSize: 52,
              }}
            >
              AURIS Ecosystem
            </h1>

            <p
              style={{
                margin: "0 0 10px",
                color: "#cbd5e1",
                fontSize: 16,
              }}
            >
              Technology Built to Help People
            </p>
          </header>
        )}

        <div
          style={{
            position: "relative",
            width: 620,
            height: active ? 620 : 470,
            maxWidth: "100%",
            margin: active
              ? "18px auto 0"
              : "0 auto",

            transition:
              "height 500ms ease, margin 500ms ease",
          }}
        >
          {active && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 390,
                height: 390,

                borderRadius: "50%",

                border: `1px solid ${accent}55`,

                transform:
                  "translate(-50%, -50%)",

                animation:
                  "ringDrift 32s linear infinite",

                animationPlayState:
                  isAuraSequenceActive
                    ? "paused"
                    : "running",

                boxShadow:
                  `0 0 44px ${accent}22 inset`,

                pointerEvents: "none",

                zIndex: 1,
              }}
            />
          )}

          {selectedNode && (
            <div
              style={{
                position: "absolute",
                left: "50%",
                top: "50%",

                width: 560,
                height: 560,

                borderRadius: "50%",

                border:
                  `1px dashed ${accent}55`,

                transform:
                  "translate(-50%, -50%)",

                animation:
                  "ringDriftReverse 45s linear infinite",

                animationPlayState:
                  isAuraSequenceActive
                    ? "paused"
                    : "running",

                boxShadow:
                  `0 0 54px ${accent}18 inset`,

                pointerEvents: "none",

                zIndex: 0,
              }}
            />
          )}

          <ConnectionLines
            active={active}
            selected={selected}
            nodeCount={ecosystemNodes.length}
            radius={190}
            color={accent}
          />

          <InnerRing
            active={active}
            nodes={ecosystemNodes}
            selected={selected}
            hovered={hovered}
            radius={190}
            onSelect={(nodeId) => {
              setSelected(nodeId);
              setHovered(null);
            }}
            onHover={setHovered}
          />

          <ProductBranches
            selectedNode={selectedNode}
            selectedId={selected}
            nodes={ecosystemNodes}
            innerRadius={190}
            productRadius={285}
            color={accent}
          />

          <ProductRing
            selectedNode={selectedNode}
            selectedProduct={selectedProduct}
            radius={285}
            color={accent}
            onSelectProduct={
              setSelectedProduct
            }
          />

          <CenterLogo
            active={active}
            accent={accent}
            phase={auraPhase}
            isHovered={isCenterHovered}
            onHoverStart={
              handleCenterHoverStart
            }
            onHoverEnd={
              handleCenterHoverEnd
            }
            onActivate={
              activateEcosystem
            }
          />

          {selectedNode &&
            selectedProductData && (
              <ProductExperience
                division={
                  selectedNode.name
                }
                divisionId={
                  selectedNode.id
                }
                product={
                  selectedProductData.name
                }
                productId={
                  selectedProductData.id
                }
                tagline={
                  selectedNode.tagline
                }
                accent={accent}
                onBack={() =>
                  setSelectedProduct(null)
                }
              />
            )}
        </div>
      </div>

      {/* Full-screen AURA cinematic sequence */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 1000,
        }}
        aria-hidden="true"
      >
        <AuraPortal phase={auraPhase} />

        <AuraBrainStem
          phase={auraPhase}
        />

        <AuraArrival
          phase={auraPhase}
        />
      </div>
    </section>
  );
}