import Link from "next/link";
import { notFound } from "next/navigation";

import FloatingBackground from "@/components/animations/FloatingBackground";
import RevealSection from "@/components/animations/RevealSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ProductHero from "@/components/products/ProductHero";
import ProductOverview from "@/components/products/ProductOverview";

import { ecosystemNodes } from "@/lib/ecosystem";
import { getProduct } from "@/lib/ProductData";

type ProductRouteProps = {
  params: Promise<{
    division: string;
    product: string;
  }>;
};

type BackgroundVariant =
  | "terra"
  | "haven"
  | "atlas"
  | "orbit"
  | "enterprise"
  | "medical"
  | "gaming";

/*
  Required for Next.js static export.

  Creates a static page for every product contained
  inside the AURIS ecosystem data.
*/
export function generateStaticParams() {
  return ecosystemNodes.flatMap((division) =>
    division.products.map((product) => ({
      division: division.id,
      product: product.id,
    })),
  );
}

export default async function ProductRoute({
  params,
}: ProductRouteProps) {
  const { division, product } = await params;

  const productDetail = getProduct(
    division,
    product,
  );

  if (!productDetail) {
    notFound();
  }

  const backgroundVariant =
    productDetail.divisionId as BackgroundVariant;

  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",

          position: "relative",

          overflow: "hidden",

          color: "#ffffff",

          background: `
            radial-gradient(
              circle at 82% 12%,
              ${productDetail.accent}AA 0%,
              ${productDetail.accent}55 18%,
              transparent 42%
            ),

            radial-gradient(
              circle at 12% 42%,
              ${productDetail.accent}66 0%,
              transparent 36%
            ),

            radial-gradient(
              circle at 50% 110%,
              ${productDetail.accent}33 0%,
              transparent 55%
            ),

            linear-gradient(
              135deg,
              ${productDetail.accent}22 0%,
              rgba(15, 23, 42, 0.96) 35%,
              rgba(2, 6, 23, 1) 100%
            )
          `,

          transition:
            "background 0.8s ease",

          boxShadow: `
            inset 0 0 180px ${productDetail.accent}22,
            inset 0 0 340px rgba(0, 0, 0, 0.45)
          `,
        }}
      >
        {/* AURA / AURIS ecosystem navigation */}
        <div
          style={{
            position: "relative",

            zIndex: 100,

            width:
              "min(1200px, calc(100% - 40px))",

            margin: "0 auto",

            paddingTop: 24,

            display: "flex",

            alignItems: "center",

            justifyContent: "space-between",

            gap: 16,

            flexWrap: "wrap",
          }}
        >
          {/* Back to current node */}
          <Link
            href={`/?division=${productDetail.divisionId}`}
            style={{
              display: "inline-flex",

              alignItems: "center",

              gap: 10,

              padding: "11px 18px",

              borderRadius: 999,

              border:
                `1px solid ${productDetail.accent}66`,

              background:
                "rgba(2, 6, 23, 0.78)",

              color: "#ffffff",

              textDecoration: "none",

              fontSize: 12,

              fontWeight: 800,

              letterSpacing: 1.1,

              backdropFilter:
                "blur(12px)",

              boxShadow:
                `0 0 24px ${productDetail.accent}22`,
            }}
          >
            <span
              style={{
                color:
                  productDetail.accent,

                fontSize: 18,

                lineHeight: 1,
              }}
            >
              ←
            </span>

            Back to{" "}
            {productDetail.divisionName}{" "}
            Products
          </Link>

          {/* AURA ecosystem indicator */}
          <div
            style={{
              display: "flex",

              alignItems: "center",

              gap: 10,

              padding: "9px 16px",

              borderRadius: 999,

              border:
                "1px solid rgba(103, 232, 249, 0.18)",

              background:
                "rgba(2, 6, 23, 0.55)",

              backdropFilter:
                "blur(12px)",

              boxShadow:
                "0 0 24px rgba(34, 211, 238, 0.08)",
            }}
          >
            <span
              style={{
                width: 7,

                height: 7,

                borderRadius: "50%",

                background: "#67e8f9",

                boxShadow:
                  "0 0 12px rgba(103, 232, 249, 0.95)",
              }}
            />

            <span
              style={{
                color:
                  "rgba(207, 250, 254, 0.72)",

                fontSize: 9,

                fontWeight: 800,

                letterSpacing: 2.2,
              }}
            >
              AURA CONNECTED
            </span>
          </div>
        </div>

        {/* Product-specific animated background */}
        <FloatingBackground
          accent={productDetail.accent}
          variant={backgroundVariant}
          product={productDetail.productId}
        />

        {/* Product hero */}
        <RevealSection>
          <ProductHero
            division={
              productDetail.divisionName
            }
            divisionId={
              productDetail.divisionId
            }
            product={
              productDetail.productName
            }
            productId={
              productDetail.productId
            }
            tagline={
              productDetail.tagline
            }
            accent={
              productDetail.accent
            }
            heroImage={
              productDetail.heroImage
            }
          />
        </RevealSection>

        {/* Product overview */}
        <RevealSection delay={0.1}>
          <ProductOverview
            product={
              productDetail.productName
            }
            overview={
              productDetail.overview
            }
            accent={
              productDetail.accent
            }
          />
        </RevealSection>

        {/* Challenge */}
        <RevealSection delay={0.2}>
          <section
            style={{
              width:
                "min(1100px, calc(100% - 40px))",

              margin: "0 auto",

              padding: "90px 0",
            }}
          >
            <div
              style={{
                color:
                  productDetail.accent,

                fontSize: 10,

                fontWeight: 900,

                letterSpacing: 3,

                marginBottom: 12,
              }}
            >
              AURIS /{" "}
              {productDetail.divisionName.toUpperCase()}
            </div>

            <h2
              style={{
                color:
                  productDetail.accent,

                fontSize: 34,

                marginBottom: 20,
              }}
            >
              The Challenge
            </h2>

            <p
              style={{
                color: "#cbd5e1",

                fontSize: 20,

                lineHeight: 1.8,

                maxWidth: 900,
              }}
            >
              {productDetail.problem}
            </p>
          </section>
        </RevealSection>

        {/* Solution */}
        <RevealSection delay={0.3}>
          <section
            style={{
              width:
                "min(1100px, calc(100% - 40px))",

              margin: "0 auto",

              paddingBottom: 90,
            }}
          >
            <h2
              style={{
                color:
                  productDetail.accent,

                fontSize: 34,

                marginBottom: 20,
              }}
            >
              Our Solution
            </h2>

            <p
              style={{
                color: "#cbd5e1",

                fontSize: 20,

                lineHeight: 1.8,

                maxWidth: 900,
              }}
            >
              {productDetail.solution}
            </p>
          </section>
        </RevealSection>

        {/* Capabilities */}
        {productDetail.capabilities.length >
          0 && (
          <RevealSection delay={0.4}>
            <section
              style={{
                width:
                  "min(1200px, calc(100% - 40px))",

                margin: "0 auto",

                paddingBottom: 100,
              }}
            >
              <h2
                style={{
                  color:
                    productDetail.accent,

                  fontSize: 34,

                  marginBottom: 32,
                }}
              >
                Capabilities
              </h2>

              <div
                style={{
                  display: "grid",

                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(260px, 1fr))",

                  gap: 24,
                }}
              >
                {productDetail.capabilities.map(
                  (item) => (
                    <div
                      key={item.title}
                      style={{
                        padding: 28,

                        borderRadius: 22,

                        border:
                          `1px solid ${productDetail.accent}55`,

                        background:
                          `${productDetail.accent}12`,

                        backdropFilter:
                          "blur(10px)",

                        boxShadow:
                          `0 0 28px ${productDetail.accent}0D`,
                      }}
                    >
                      <h3
                        style={{
                          color:
                            "#ffffff",

                          marginBottom: 14,
                        }}
                      >
                        {item.title}
                      </h3>

                      <p
                        style={{
                          color:
                            "#cbd5e1",

                          lineHeight: 1.7,

                          margin: 0,
                        }}
                      >
                        {
                          item.description
                        }
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          </RevealSection>
        )}

        {/* Roadmap */}
        {productDetail.roadmap.length >
          0 && (
          <RevealSection delay={0.5}>
            <section
              style={{
                width:
                  "min(1100px, calc(100% - 40px))",

                margin: "0 auto",

                paddingBottom: 80,
              }}
            >
              <h2
                style={{
                  color:
                    productDetail.accent,

                  fontSize: 34,

                  marginBottom: 36,
                }}
              >
                Roadmap
              </h2>

              <div
                style={{
                  display: "grid",

                  gap: 24,
                }}
              >
                {productDetail.roadmap.map(
                  (roadmapPhase) => (
                    <div
                      key={`${roadmapPhase.phase}-${roadmapPhase.title}`}
                      style={{
                        padding: 28,

                        borderLeft:
                          `5px solid ${productDetail.accent}`,

                        border:
                          `1px solid ${productDetail.accent}22`,

                        borderLeftWidth: 5,

                        borderLeftColor:
                          productDetail.accent,

                        background:
                          "rgba(255, 255, 255, 0.03)",

                        borderRadius: 16,

                        backdropFilter:
                          "blur(10px)",
                      }}
                    >
                      <div
                        style={{
                          color:
                            productDetail.accent,

                          fontWeight: 900,

                          letterSpacing: 2,

                          marginBottom: 8,
                        }}
                      >
                        {
                          roadmapPhase.phase
                        }
                      </div>

                      <h3
                        style={{
                          color: "#ffffff",

                          marginTop: 0,
                        }}
                      >
                        {
                          roadmapPhase.title
                        }
                      </h3>

                      <p
                        style={{
                          color:
                            "#cbd5e1",

                          lineHeight: 1.8,

                          marginBottom: 0,
                        }}
                      >
                        {
                          roadmapPhase.description
                        }
                      </p>
                    </div>
                  ),
                )}
              </div>
            </section>
          </RevealSection>
        )}

        {/* AURA ecosystem footer navigation */}
        <RevealSection delay={0.6}>
          <section
            style={{
              position: "relative",

              zIndex: 20,

              width:
                "min(1100px, calc(100% - 40px))",

              margin: "0 auto",

              padding: "20px 0 120px",
            }}
          >
            <div
              style={{
                padding: "34px 28px",

                borderRadius: 24,

                border:
                  "1px solid rgba(103, 232, 249, 0.16)",

                background:
                  "linear-gradient(135deg, rgba(8,145,178,0.08), rgba(15,23,42,0.72))",

                backdropFilter:
                  "blur(16px)",

                boxShadow:
                  "0 0 50px rgba(34,211,238,0.06)",

                textAlign: "center",
              }}
            >
              <div
                style={{
                  color: "#67e8f9",

                  fontSize: 10,

                  fontWeight: 900,

                  letterSpacing: 3.2,

                  marginBottom: 12,
                }}
              >
                POWERED BY AURA
              </div>

              <h2
                style={{
                  margin:
                    "0 0 12px",

                  color: "#ffffff",

                  fontSize: 28,
                }}
              >
                Part of the AURIS
                Ecosystem
              </h2>

              <p
                style={{
                  maxWidth: 700,

                  margin:
                    "0 auto 24px",

                  color: "#94a3b8",

                  lineHeight: 1.7,
                }}
              >
                AURA is the ambient,
                context-aware intelligence
                layer connecting experiences
                across the AURIS ecosystem.
              </p>

              <Link
                href={`/?division=${productDetail.divisionId}`}
                style={{
                  display:
                    "inline-flex",

                  alignItems: "center",

                  justifyContent:
                    "center",

                  gap: 10,

                  padding:
                    "12px 22px",

                  borderRadius: 999,

                  border:
                    `1px solid ${productDetail.accent}66`,

                  background:
                    `${productDetail.accent}14`,

                  color: "#ffffff",

                  textDecoration:
                    "none",

                  fontSize: 12,

                  fontWeight: 900,

                  letterSpacing: 1.2,

                  boxShadow:
                    `0 0 24px ${productDetail.accent}18`,
                }}
              >
                ← Explore{" "}
                {
                  productDetail.divisionName
                }{" "}
                Products
              </Link>
            </div>
          </section>
        </RevealSection>
      </main>

      <Footer />
    </>
  );
}