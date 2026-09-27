"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type ProductExperienceProps = {
  division: string;
  divisionId: string;
  product: string | null;
  productId: string;
  tagline: string;
  accent: string;
  onBack: () => void;
};

export default function ProductExperience({
  division,
  divisionId,
  product,
  productId,
  tagline,
  accent,
  onBack,
}: ProductExperienceProps) {
  const router = useRouter();

  const [launching, setLaunching] = useState(false);
  const navigationTimer = useRef<number | null>(null);

  const productUrl = `/products/${divisionId}/${productId}`;

  useEffect(() => {
    return () => {
      if (navigationTimer.current !== null) {
        window.clearTimeout(navigationTimer.current);
      }
    };
  }, []);

  if (!product) return null;

  function launchProduct(destination: string) {
    if (launching) return;

    setLaunching(true);

    navigationTimer.current = window.setTimeout(() => {
      router.push(destination);
    }, 1450);
  }

  return (
    <>
      <style>{`
        @keyframes productPanelIn {
          from {
            opacity: 0;
            transform: translateX(70px) scale(.96);
          }

          to {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes reactorSpin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes reactorSpinReverse {
          from {
            transform: translate(-50%, -50%) rotate(360deg);
          }

          to {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes reactorZoom {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.18);
          }

          18% {
            opacity: 1;
          }

          68% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.18);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(8);
          }
        }

        @keyframes coreIgnition {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.08);
            filter: brightness(.8);
          }

          22% {
            opacity: 1;
          }

          55% {
            transform: translate(-50%, -50%) scale(1.08);
            filter: brightness(2.3);
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(10);
            filter: brightness(3);
          }
        }

        @keyframes energyPulse {
          0%, 100% {
            filter: brightness(1);
          }

          50% {
            filter: brightness(2.4);
          }
        }

        @keyframes scanSweep {
          from {
            transform: translateY(-115%);
          }

          to {
            transform: translateY(115%);
          }
        }

        @keyframes tunnelGrid {
          0% {
            opacity: 0;
            transform: perspective(700px) rotateX(72deg) scale(.28);
          }

          28% {
            opacity: .52;
          }

          100% {
            opacity: 0;
            transform: perspective(700px) rotateX(72deg) scale(4.5);
          }
        }

        @keyframes interfaceText {
          0% {
            opacity: 0;
            transform: translateY(18px) scale(.96);
            letter-spacing: 3px;
          }

          28% {
            opacity: 0;
          }

          44%, 76% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }

          100% {
            opacity: 0;
            transform: translateY(-10px) scale(1.03);
            letter-spacing: 9px;
          }
        }

        @keyframes statusSequence {
          0%, 18% {
            opacity: 0;
            transform: translateY(8px);
          }

          32%, 72% {
            opacity: 1;
            transform: translateY(0);
          }

          100% {
            opacity: 0;
            transform: translateY(-7px);
          }
        }

        @keyframes reactorFlash {
          0%, 72% {
            opacity: 0;
          }

          88% {
            opacity: .9;
          }

          100% {
            opacity: 1;
          }
        }

        @keyframes reactorParticles {
          0% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(.3) rotate(0deg);
          }

          25% {
            opacity: .9;
          }

          100% {
            opacity: 0;
            transform: translate(-50%, -50%) scale(4.5) rotate(120deg);
          }
        }

        @media (max-width: 720px) {
          .auris-product-overlay {
            align-items: flex-end !important;
            padding: 16px !important;
            background: linear-gradient(
              180deg,
              rgba(2, 6, 23, 0.06) 0%,
              rgba(2, 6, 23, 0.62) 38%,
              rgba(2, 6, 23, 0.98) 100%
            ) !important;
          }

          .auris-product-panel {
            max-height: calc(100vh - 32px) !important;
            padding: 24px !important;
            border-radius: 24px !important;
          }

          .auris-product-actions {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            width: 100%;
          }

          .auris-hex-button {
            width: 100% !important;
            min-width: 0 !important;
          }
        }

        @media (max-width: 480px) {
          .auris-product-actions {
            grid-template-columns: 1fr;
          }

          .auris-hex-button {
            height: 72px !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .auris-product-panel,
          .auris-reactor-element,
          .auris-reactor-text,
          .auris-reactor-status,
          .auris-reactor-flash {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>

      <div
        className="auris-product-overlay"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "32px clamp(24px, 5vw, 72px)",
          pointerEvents: "none",
          background: `
            linear-gradient(
              90deg,
              rgba(2, 6, 23, 0.02) 0%,
              rgba(2, 6, 23, 0.16) 38%,
              rgba(2, 6, 23, 0.82) 68%,
              rgba(2, 6, 23, 0.97) 100%
            )
          `,
        }}
      >
        <section
          className="auris-product-panel"
          style={{
            width: "min(610px, 100%)",
            maxHeight: "calc(100vh - 64px)",
            overflowY: "auto",
            padding: 34,
            textAlign: "left",
            pointerEvents: launching ? "none" : "auto",
            opacity: launching ? 0.08 : 1,
            transform: launching ? "scale(.9)" : "scale(1)",
            transition: "opacity 500ms ease, transform 500ms ease",
            animation:
              "productPanelIn 650ms cubic-bezier(.2,.8,.2,1) both",
            border: `1px solid ${accent}88`,
            borderRadius: 28,
            background: `
              radial-gradient(
                circle at 85% 8%,
                ${accent}38,
                transparent 34%
              ),
              linear-gradient(
                145deg,
                ${accent}18,
                rgba(15, 23, 42, 0.96) 42%,
                rgba(2, 6, 23, 0.97)
              )
            `,
            boxShadow: `
              0 0 75px ${accent}28,
              inset 0 0 45px ${accent}12,
              0 28px 80px rgba(0, 0, 0, 0.48)
            `,
          }}
        >
          <button
            type="button"
            onClick={onBack}
            disabled={launching}
            style={{
              padding: 0,
              border: "none",
              background: "transparent",
              color: accent,
              fontSize: 14,
              fontWeight: 900,
              cursor: launching ? "default" : "pointer",
              opacity: launching ? 0.45 : 1,
            }}
          >
            ← Back to {division}
          </button>

          <div
            style={{
              marginTop: 28,
              color: accent,
              fontSize: 12,
              fontWeight: 950,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            AURIS {division}
          </div>

          <h2
            style={{
              margin: "10px 0 0",
              color: "#ffffff",
              fontSize: "clamp(44px, 7vw, 78px)",
              lineHeight: 0.95,
              letterSpacing: "-0.045em",
              overflowWrap: "anywhere",
              textShadow: `0 0 28px ${accent}35`,
            }}
          >
            {product}
          </h2>

          <p
            style={{
              margin: "18px 0 0",
              maxWidth: 540,
              color: "#d5deea",
              fontSize: 18,
              lineHeight: 1.65,
            }}
          >
            {tagline}. Explore the concept, capabilities, future roadmap, and
            how AURIS intends to help people through this technology.
          </p>

          <div
            style={{
              marginTop: 28,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
              gap: 12,
            }}
          >
            {[
              {
                title: "Concept",
                text: "The purpose and problem behind the product.",
              },
              {
                title: "Capabilities",
                text: "Planned features and connected functions.",
              },
              {
                title: "Roadmap",
                text: "The path from concept toward development.",
              },
            ].map((item) => (
              <article
                key={item.title}
                style={{
                  padding: 16,
                  borderRadius: 17,
                  border: `1px solid ${accent}38`,
                  background: `${accent}0d`,
                }}
              >
                <div
                  style={{
                    color: "#ffffff",
                    fontWeight: 950,
                  }}
                >
                  {item.title}
                </div>

                <p
                  style={{
                    margin: "7px 0 0",
                    color: "#9eacbf",
                    fontSize: 13,
                    lineHeight: 1.5,
                  }}
                >
                  {item.text}
                </p>
              </article>
            ))}
          </div>

          <div
            className="auris-product-actions"
            style={{
              marginTop: 30,
              display: "flex",
              alignItems: "center",
              gap: 18,
              flexWrap: "wrap",
            }}
          >
            <button
              className="auris-hex-button"
              type="button"
              disabled={launching}
              onClick={() => launchProduct(productUrl)}
              style={{
                width: 154,
                height: 82,
                display: "grid",
                placeItems: "center",
                padding: "0 18px",
                border: `1px solid ${accent}`,
                background: `linear-gradient(145deg, ${accent}42, ${accent}16)`,
                color: "#ffffff",
                fontWeight: 900,
                textAlign: "center",
                cursor: launching ? "default" : "pointer",
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                filter: `drop-shadow(0 0 16px ${accent}66)`,
                opacity: launching ? 0.6 : 1,
                transition:
                  "transform 180ms ease, filter 180ms ease, opacity 180ms ease",
              }}
              onMouseEnter={(event) => {
                if (launching) return;

                event.currentTarget.style.transform = "scale(1.045)";
                event.currentTarget.style.filter =
                  `drop-shadow(0 0 24px ${accent}99)`;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "scale(1)";
                event.currentTarget.style.filter =
                  `drop-shadow(0 0 16px ${accent}66)`;
              }}
            >
              Explore {product}
            </button>

            <button
              className="auris-hex-button"
              type="button"
              disabled={launching}
              onClick={() => launchProduct(`${productUrl}#contact`)}
              style={{
                width: 154,
                height: 82,
                display: "grid",
                placeItems: "center",
                padding: "0 18px",
                border: `1px solid ${accent}88`,
                background: "rgba(15, 23, 42, 0.82)",
                color: "#d5deea",
                fontWeight: 900,
                textAlign: "center",
                cursor: launching ? "default" : "pointer",
                clipPath:
                  "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
                filter: `drop-shadow(0 0 10px ${accent}35)`,
                opacity: launching ? 0.6 : 1,
                transition:
                  "transform 180ms ease, filter 180ms ease, opacity 180ms ease",
              }}
              onMouseEnter={(event) => {
                if (launching) return;

                event.currentTarget.style.transform = "scale(1.045)";
                event.currentTarget.style.filter =
                  `drop-shadow(0 0 20px ${accent}66)`;
              }}
              onMouseLeave={(event) => {
                event.currentTarget.style.transform = "scale(1)";
                event.currentTarget.style.filter =
                  `drop-shadow(0 0 10px ${accent}35)`;
              }}
            >
              Contact AURIS
            </button>
          </div>
        </section>
      </div>

      {launching && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            overflow: "hidden",
            pointerEvents: "none",
            background: `
              radial-gradient(
                circle at center,
                ${accent}55 0%,
                #020617 52%,
                #000000 100%
              )
            `,
          }}
        >
          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              left: "10%",
              right: "10%",
              bottom: "-48%",
              height: "100%",
              backgroundImage: `
                linear-gradient(${accent}3d 1px, transparent 1px),
                linear-gradient(90deg, ${accent}3d 1px, transparent 1px)
              `,
              backgroundSize: "42px 42px",
              transformOrigin: "center bottom",
              animation:
                "tunnelGrid 1.45s cubic-bezier(.2,.8,.2,1) forwards",
            }}
          />

          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(430px, 82vw)",
              aspectRatio: "1",
              borderRadius: "50%",
              border: `2px solid ${accent}b3`,
              borderTopColor: "transparent",
              borderBottomColor: "#ffffff",
              boxShadow: `
                0 0 24px ${accent},
                inset 0 0 28px ${accent}73
              `,
              animation: `
                reactorSpin 1.05s linear infinite,
                reactorZoom 1.45s cubic-bezier(.2,.8,.2,1) forwards
              `,
            }}
          />

          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(310px, 61vw)",
              aspectRatio: "1",
              borderRadius: "50%",
              border: `3px dashed ${accent}d9`,
              boxShadow: `0 0 32px ${accent}cc`,
              animation: `
                reactorSpinReverse .72s linear infinite,
                reactorZoom 1.35s cubic-bezier(.2,.8,.2,1) forwards
              `,
            }}
          />

          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(205px, 42vw)",
              aspectRatio: "1",
              borderRadius: "50%",
              border: `7px double ${accent}`,
              borderLeftColor: "#ffffff",
              borderRightColor: `${accent}2e`,
              filter: `drop-shadow(0 0 18px ${accent})`,
              animation: `
                reactorSpin 480ms linear infinite,
                reactorZoom 1.25s cubic-bezier(.2,.8,.2,1) forwards
              `,
            }}
          />

          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(118px, 25vw)",
              aspectRatio: "1.13",
              background: `
                radial-gradient(
                  circle,
                  #ffffff 0%,
                  ${accent}cc 27%,
                  ${accent} 62%,
                  #020617 100%
                )
              `,
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              boxShadow: `
                0 0 30px #ffffff,
                0 0 70px ${accent},
                0 0 160px ${accent}cc
              `,
              animation: `
                energyPulse 240ms ease-in-out infinite,
                coreIgnition 1.2s cubic-bezier(.2,.8,.2,1) forwards
              `,
            }}
          />

          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(170px, 35vw)",
              aspectRatio: "1.13",
              border: "2px solid rgba(255,255,255,.82)",
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              filter: `drop-shadow(0 0 18px ${accent})`,
              animation: `
                reactorSpinReverse 650ms linear infinite,
                reactorZoom 1.3s cubic-bezier(.2,.8,.2,1) forwards
              `,
            }}
          />

          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              width: "min(520px, 92vw)",
              aspectRatio: "1",
              borderRadius: "50%",
              backgroundImage: `
                repeating-conic-gradient(
                  from 0deg,
                  ${accent} 0deg 2deg,
                  transparent 2deg 18deg
                )
              `,
              maskImage:
                "radial-gradient(circle, transparent 0 46%, black 48% 50%, transparent 52%)",
              WebkitMaskImage:
                "radial-gradient(circle, transparent 0 46%, black 48% 50%, transparent 52%)",
              animation:
                "reactorParticles 1.4s cubic-bezier(.2,.8,.2,1) forwards",
            }}
          />

          <div
            className="auris-reactor-element"
            style={{
              position: "absolute",
              inset: 0,
              height: "22%",
              background: `
                linear-gradient(
                  to bottom,
                  transparent,
                  ${accent}33,
                  rgba(255,255,255,.72),
                  ${accent}33,
                  transparent
                )
              `,
              filter: "blur(2px)",
              animation: "scanSweep 760ms linear infinite",
            }}
          />

          <div
            className="auris-reactor-text"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 4,
              display: "grid",
              placeItems: "center",
              padding: 24,
              color: "#ffffff",
              textAlign: "center",
              textTransform: "uppercase",
              textShadow: `
                0 0 12px #ffffff,
                0 0 30px ${accent}
              `,
              animation: "interfaceText 1.42s ease both",
            }}
          >
            <div>
              <div
                style={{
                  color: accent,
                  fontSize: 11,
                  fontWeight: 950,
                  letterSpacing: 6,
                }}
              >
                AURIS TECHNOLOGIES
              </div>

              <div
                style={{
                  marginTop: 12,
                  fontSize: "clamp(18px, 3vw, 32px)",
                  fontWeight: 950,
                  letterSpacing: 5,
                }}
              >
                {division} · {product}
              </div>

              <div
                className="auris-reactor-status"
                style={{
                  marginTop: 16,
                  color: "#dbeafe",
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 4,
                  animation: "statusSequence 1.35s ease both",
                }}
              >
                INITIALIZING PRODUCT EXPERIENCE
              </div>
            </div>
          </div>

          <div
            className="auris-reactor-flash"
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 10,
              background: `
                radial-gradient(
                  circle at center,
                  #ffffff 0%,
                  ${accent}cc 32%,
                  ${accent} 65%,
                  #020617 100%
                )
              `,
              animation: "reactorFlash 1.45s ease forwards",
            }}
          />
        </div>
      )}
    </>
  );
}