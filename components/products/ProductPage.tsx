"use client";

import { useEffect } from "react";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import type { ProductDetail } from "../../lib/ProductData";
import NavigatePhoneDemo from "@/components/animations/atlas/NavigatePhoneDemo";

type ProductPageProps = {
  product: ProductDetail;
};

export default function ProductPage({ product }: ProductPageProps) {
  useEffect(() => {
    const elements =
      document.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target as HTMLElement;

          element.dataset.visible = "true";
          observer.unobserve(element);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        isolation: "isolate",
        color: "#ffffff",
        background: `
          radial-gradient(
            circle at 72% 18%,
            ${product.accent}46,
            transparent 34%
          ),
          radial-gradient(
            circle at 20% 42%,
            ${product.accent}28,
            transparent 40%
          ),
          linear-gradient(
            145deg,
            ${product.accent}18 0%,
            rgba(15, 23, 42, 0.96) 42%,
            #020617 100%
          )
        `,
      }}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes havenAmbientPulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }

          50% {
            opacity: 0.55;
            transform: scale(1.08);
          }
        }

        @keyframes havenParticleFloat {
          0% {
            opacity: 0;
            transform: translate3d(0, 50px, 0) rotate(0deg);
          }

          20% {
            opacity: 0.42;
          }

          80% {
            opacity: 0.28;
          }

          100% {
            opacity: 0;
            transform: translate3d(30px, -140px, 0) rotate(180deg);
          }
        }

        @keyframes heroConceptBreathe {
          0%,
          100% {
            transform: scale(1);
            box-shadow: 0 0 75px ${product.accent}20;
          }

          50% {
            transform: scale(1.012);
            box-shadow: 0 0 115px ${product.accent}38;
          }
        }

        [data-reveal] {
          opacity: 0;
          transform: translateY(48px);
          filter: blur(5px);
          transition:
            opacity 850ms cubic-bezier(0.2, 0.8, 0.2, 1),
            transform 850ms cubic-bezier(0.2, 0.8, 0.2, 1),
            filter 850ms ease;
        }

        [data-reveal="left"] {
          transform: translateX(-55px);
        }

        [data-reveal="right"] {
          transform: translateX(55px);
        }

        [data-reveal][data-visible="true"] {
          opacity: 1;
          transform: translate(0, 0);
          filter: blur(0);
        }

        .hero-concept {
          animation: heroConceptBreathe 7s ease-in-out infinite;
        }

        .product-card {
          transition:
            transform 260ms ease,
            border-color 260ms ease,
            box-shadow 260ms ease,
            background 260ms ease;
        }

        .product-card:hover {
          transform: translateY(-7px);
          border-color: ${product.accent}77 !important;
          background: ${product.accent}12 !important;
          box-shadow:
            0 24px 65px rgba(0, 0, 0, 0.28),
            0 0 34px ${product.accent}18 !important;
        }

        .product-hero-image {
          transition: transform 900ms ease;
        }

        .hero-concept:hover .product-hero-image {
          transform: scale(1.035);
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 1ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: 1ms !important;
          }

          [data-reveal] {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: -1,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "52vw",
            height: "52vw",
            minWidth: 500,
            minHeight: 500,
            right: "-18vw",
            top: "8vh",
            borderRadius: "50%",
            background: `radial-gradient(
              circle,
              ${product.accent}48,
              transparent 68%
            )`,
            filter: "blur(32px)",
            animation: "havenAmbientPulse 9s ease-in-out infinite",
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "46vw",
            height: "46vw",
            minWidth: 420,
            minHeight: 420,
            left: "-20vw",
            top: "42vh",
            borderRadius: "50%",
            background: `radial-gradient(
              circle,
              ${product.accent}32,
              transparent 70%
            )`,
            filter: "blur(44px)",
            animation:
              "havenAmbientPulse 11s ease-in-out 2s infinite reverse",
          }}
        />

        {Array.from({ length: 10 }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              left: `${8 + ((index * 13) % 86)}%`,
              top: `${22 + ((index * 17) % 68)}%`,
              width: 14 + (index % 3) * 6,
              height: 12 + (index % 3) * 5,
              border: `1px solid ${product.accent}44`,
              clipPath:
                "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              animation: `havenParticleFloat ${
                10 + (index % 4) * 2
              }s linear ${index * 0.8}s infinite`,
            }}
          />
        ))}
      </div>

      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          padding: "18px clamp(22px, 5vw, 72px)",
          borderBottom: "1px solid rgba(148, 163, 184, 0.18)",
          background: "rgba(2, 6, 23, 0.82)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#ffffff",
            textDecoration: "none",
            fontWeight: 950,
            letterSpacing: 0.4,
          }}
        >
          AURIS Technologies LLC
        </Link>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <Link href="/#ecosystem" style={navLink}>
            Ecosystem
          </Link>

          <Link href="/about" style={navLink}>
            About
          </Link>

          <Link href="/portfolio" style={navLink}>
            Portfolio
          </Link>

          <Link href="/contact" style={navLink}>
            Contact
          </Link>
        </nav>
      </header>

      <section
        data-reveal="up"
        style={{
          width: "min(1240px, calc(100% - 40px))",
          margin: "0 auto",
          padding: "clamp(70px, 10vw, 130px) 0",
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(320px, 100%), 1fr))",
          gap: 54,
          alignItems: "center",
        }}
      >
        <div>
          <Link
            href="/#ecosystem"
            style={{
              display: "inline-block",
              color: product.accentSoft,
              textDecoration: "none",
              fontWeight: 900,
              marginBottom: 26,
            }}
          >
            ← Return to the AURIS Ecosystem
          </Link>

          <div
            style={{
              color: product.accent,
              fontSize: 13,
              fontWeight: 950,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            AURIS {product.divisionName}
          </div>

          <h1
            style={{
              margin: "14px 0 0",
              fontSize: "clamp(64px, 12vw, 132px)",
              lineHeight: 0.84,
              letterSpacing: "-0.055em",
            }}
          >
            {product.productName}
          </h1>

          <p
            style={{
              marginTop: 26,
              maxWidth: 700,
              color: "#d7dee9",
              fontSize: "clamp(20px, 2.4vw, 30px)",
              lineHeight: 1.35,
            }}
          >
            {product.tagline}
          </p>

          <div
            style={{
              marginTop: 30,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                padding: "9px 14px",
                borderRadius: 999,
                border: `1px solid ${product.accent}88`,
                background: `${product.accent}18`,
                color: product.accentSoft,
                fontWeight: 850,
                fontSize: 13,
              }}
            >
              {product.status}
            </span>

            <a
              href="#contact"
              style={{
                padding: "11px 17px",
                borderRadius: 999,
                border: `1px solid ${product.accent}`,
                background: `${product.accent}24`,
                color: "#ffffff",
                textDecoration: "none",
                fontWeight: 900,
              }}
            >
              Discuss this concept
            </a>
          </div>
        </div>

        <div
          className="hero-concept"
          style={{
            minHeight: 470,
            position: "relative",
            display: "grid",
            placeItems: "center",
            overflow: "hidden",
            borderRadius: 32,
            border: `1px solid ${product.accent}55`,
            background: `
              linear-gradient(
                145deg,
                ${product.accent}18,
                rgba(15, 23, 42, 0.78)
              )
            `,
            boxShadow: `0 0 90px ${product.accent}20`,
          }}
        >
          {product.divisionId === "atlas" &&
product.productId === "maps" ? (
  <NavigatePhoneDemo />
) : product.heroImage ? (
  <Image
    className="product-hero-image"
    src={product.heroImage}
    alt={`${product.productName} concept artwork`}
    fill
    priority
    sizes="(max-width: 768px) 100vw, 50vw"
    style={{
      objectFit: "contain",
    }}
  />
) : (
  <div
    style={{
      padding: 40,
      textAlign: "center",
      color: "#94a3b8",
    }}
  >
    <div
      style={{
        color: product.accent,
        fontSize: 70,
        fontWeight: 950,
      }}
    >
    </div>
  </div>
)}

          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(2, 6, 23, 0.66), transparent 50%)",
              pointerEvents: "none",
            }}
          />
        </div>
      </section>

      <section data-reveal="up" style={section}>
        <SectionHeading
          eyebrow="The Vision"
          title={`What is ${product.productName}?`}
          accent={product.accent}
        />

        <p style={leadText}>{product.overview}</p>
      </section>

      <section data-reveal="up" style={splitSection}>
        <article className="product-card" style={contentCard}>
          <div style={cardEyebrow}>The problem</div>

          <h2 style={cardTitle}>Why this matters</h2>

          <p style={cardText}>{product.problem}</p>
        </article>

        <article
          className="product-card"
          style={{
            ...contentCard,
            borderColor: `${product.accent}55`,
            background: `${product.accent}0f`,
          }}
        >
          <div
            style={{
              ...cardEyebrow,
              color: product.accent,
            }}
          >
            The AURIS approach
          </div>

          <h2 style={cardTitle}>A connected solution</h2>

          <p style={cardText}>{product.solution}</p>
        </article>
      </section>

      <section data-reveal="up" style={section}>
        <SectionHeading
          eyebrow="Capabilities"
          title="Designed around real human needs"
          accent={product.accent}
        />

        <div style={cardGrid}>
          {product.capabilities.map((capability) => (
            <article
              key={capability.title}
              className="product-card"
              style={contentCard}
            >
              <div
                style={{
                  width: 38,
                  height: 4,
                  borderRadius: 999,
                  background: product.accent,
                  boxShadow: `0 0 18px ${product.accent}`,
                }}
              />

              <h3
                style={{
                  margin: "18px 0 0",
                  fontSize: 21,
                }}
              >
                {capability.title}
              </h3>

              <p style={cardText}>{capability.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        data-reveal="left"
        style={{
          ...section,
          border: `1px solid ${product.accent}44`,
          borderRadius: 30,
          padding: "clamp(34px, 6vw, 70px)",
          background: `${product.accent}0d`,
          boxShadow: `0 24px 90px ${product.accent}10`,
        }}
      >
        <SectionHeading
          eyebrow="Why AURIS"
          title="Technology should strengthen independence"
          accent={product.accent}
        />

        <p style={leadText}>{product.whyAuris}</p>
      </section>

      <section data-reveal="up" style={section}>
        <SectionHeading
          eyebrow="Product Roadmap"
          title="From intelligence platform to physical assistance"
          accent={product.accent}
        />

        <div style={cardGrid}>
          {product.roadmap.map((item) => (
            <article
              key={item.phase}
              className="product-card"
              style={contentCard}
            >
              <div
                style={{
                  color: product.accent,
                  fontSize: 12,
                  fontWeight: 950,
                  letterSpacing: 2,
                  textTransform: "uppercase",
                }}
              >
                {item.phase}
              </div>

              <h3
                style={{
                  margin: "12px 0 0",
                  fontSize: 21,
                }}
              >
                {item.title}
              </h3>

              <p style={cardText}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="contact"
        data-reveal="up"
        style={{
          width: "min(1120px, calc(100% - 40px))",
          margin: "0 auto",
          padding: "90px 0 120px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "clamp(38px, 7vw, 78px)",
            borderRadius: 34,
            border: `1px solid ${product.accent}55`,
            background: `radial-gradient(
              circle at top,
              ${product.accent}22,
              rgba(15, 23, 42, 0.72) 68%
            )`,
            boxShadow: `0 30px 100px ${product.accent}12`,
          }}
        >
          <div
            style={{
              color: product.accent,
              fontWeight: 950,
              letterSpacing: 3,
              fontSize: 12,
              textTransform: "uppercase",
            }}
          >
            Build with AURIS
          </div>

          <h2
            style={{
              margin: "14px auto 0",
              maxWidth: 760,
              fontSize: "clamp(34px, 6vw, 62px)",
              lineHeight: 1,
            }}
          >
            Interested in the future of {product.productName}?
          </h2>

          <p
            style={{
              margin: "22px auto 0",
              maxWidth: 650,
              color: "#aeb9ca",
              fontSize: 17,
              lineHeight: 1.7,
            }}
          >
            Contact AURIS Technologies to discuss partnerships, development,
            research, demonstrations, or related custom technology solutions.
          </p>

          <Link
            href={`/contact?division=${product.divisionId}&product=${product.productId}`}
            style={{
              display: "inline-block",
              marginTop: 30,
              padding: "14px 22px",
              borderRadius: 999,
              border: `1px solid ${product.accent}`,
              background: `${product.accent}25`,
              color: "#ffffff",
              textDecoration: "none",
              fontWeight: 950,
              boxShadow: `0 0 32px ${product.accent}18`,
            }}
          >
            Contact AURIS about {product.productName}
          </Link>
        </div>
      </section>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <div>
      <div
        style={{
          color: accent,
          fontSize: 12,
          fontWeight: 950,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        {eyebrow}
      </div>

      <h2
        style={{
          margin: "12px 0 0",
          maxWidth: 850,
          fontSize: "clamp(36px, 6vw, 66px)",
          lineHeight: 1.02,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

const navLink: CSSProperties = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 800,
};

const section: CSSProperties = {
  width: "min(1120px, calc(100% - 40px))",
  margin: "0 auto",
  padding: "86px 0",
};

const splitSection: CSSProperties = {
  width: "min(1120px, calc(100% - 40px))",
  margin: "0 auto",
  padding: "20px 0 86px",
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(290px, 100%), 1fr))",
  gap: 20,
};

const cardGrid: CSSProperties = {
  marginTop: 42,
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
  gap: 18,
};

const contentCard: CSSProperties = {
  padding: 24,
  borderRadius: 22,
  border: "1px solid rgba(148, 163, 184, 0.2)",
  background: "rgba(15, 23, 42, 0.62)",
  boxShadow: "0 18px 50px rgba(0, 0, 0, 0.16)",
};

const cardEyebrow: CSSProperties = {
  color: "#94a3b8",
  fontSize: 12,
  fontWeight: 950,
  letterSpacing: 2,
  textTransform: "uppercase",
};

const cardTitle: CSSProperties = {
  margin: "12px 0 0",
  fontSize: 26,
};

const cardText: CSSProperties = {
  margin: "12px 0 0",
  color: "#aeb9ca",
  fontSize: 15,
  lineHeight: 1.7,
};

const leadText: CSSProperties = {
  margin: "28px 0 0",
  maxWidth: 900,
  color: "#bdc7d6",
  fontSize: "clamp(19px, 2.2vw, 26px)",
  lineHeight: 1.65,
};