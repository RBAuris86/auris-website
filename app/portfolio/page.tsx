import Link from "next/link";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const clientProjects = [
  {
    title: "Timberlodge Lanes",
    category: "Client Website",
    status: "Client Project",
    accent: "#f59e0b",
    description:
      "A modern digital presence created to help a local entertainment venue present its services, connect with customers, and support future online growth.",
    features: [
      "Responsive website experience",
      "Business information and services",
      "Customer-focused navigation",
      "Expandable digital foundation",
    ],
  },
  {
    title: "A & L Party Planning",
    category: "Booking Platform",
    status: "In Development",
    accent: "#ec4899",
    description:
      "A colorful event-planning website designed for service discovery, availability, booking requests, deposits, and future inventory management.",
    features: [
      "Interactive celebration experience",
      "Services and event gallery",
      "Availability and booking workflow",
      "Future owner dashboard",
    ],
  },
  {
    title: "AURIS Technologies",
    category: "Corporate Ecosystem",
    status: "Active Development",
    accent: "#22d3ee",
    description:
      "The flagship AURIS digital platform connecting company information, technology divisions, products, concepts, and the Nexus AI experience.",
    features: [
      "Interactive ecosystem interface",
      "Division and product experiences",
      "Animated Nexus AI entry",
      "Scalable product architecture",
    ],
  },
];

const productConcepts = [
  {
    name: "Nexus",
    category: "Connected AI Platform",
    accent: "#06b6d4",
    href: "/products/nexus/ai-core",
    description:
      "The intelligence layer designed to connect products, information, automation, and services throughout the AURIS ecosystem.",
  },
  {
    name: "Terra",
    category: "Environmental Intelligence",
    accent: "#22c55e",
    href: "/products/terra/swarm",
    description:
      "Advanced environmental sensing and severe-weather technologies built around connected field intelligence.",
  },
  {
    name: "Haven",
    category: "AI & Robotics",
    accent: "#c49a6c",
    href: "/products/haven/adam",
    description:
      "Human-centered AI, assisted-living systems, healthcare support, and future robotic platforms.",
  },
  {
    name: "Medical",
    category: "Clinical Intelligence",
    accent: "#dc2626",
    href: "/products/medical/scribe",
    description:
      "AI-assisted clinical documentation, healthcare workflows, and connected medical technology.",
  },
  {
    name: "Atlas",
    category: "Navigation Systems",
    accent: "#38bdf8",
    href: "/products/atlas/navigate",
    description:
      "Indoor navigation, mapping, positioning, and spatial experiences for complex public environments.",
  },
  {
    name: "Orbit",
    category: "Space Systems",
    accent: "#8b5cf6",
    href: "/products/orbit/satellites",
    description:
      "Future satellite, orbital telemetry, Earth observation, and space-based research technologies.",
  },
  {
    name: "Enterprise",
    category: "Digital Solutions",
    accent: "#ffffff",
    href: "/products/enterprise/websites",
    description:
      "Websites, custom applications, consulting, automation, and digital transformation services.",
  },
];

const services = [
  {
    title: "Website Development",
    description:
      "Modern, responsive websites created around each organization’s identity, goals, customers, and future growth.",
  },
  {
    title: "Custom Applications",
    description:
      "Purpose-built software experiences for business operations, customer services, internal workflows, and connected platforms.",
  },
  {
    title: "Technology Consulting",
    description:
      "Practical technology planning, systems guidance, modernization strategies, and digital transformation support.",
  },
  {
    title: "AI & Automation",
    description:
      "Thoughtful AI-assisted workflows, intelligent interfaces, process automation, and connected data experiences.",
  },
  {
    title: "Cybersecurity",
    description:
      "Security-conscious architecture, operational guidance, risk awareness, and technology built with protection in mind.",
  },
  {
    title: "Product Development",
    description:
      "Concept planning, architecture, prototypes, technical documentation, roadmaps, and scalable product ecosystems.",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",
          color: "#ffffff",
          overflow: "hidden",
          background: `
            radial-gradient(
              circle at 82% 10%,
              rgba(6, 182, 212, 0.25),
              transparent 34%
            ),
            radial-gradient(
              circle at 10% 34%,
              rgba(139, 92, 246, 0.18),
              transparent 38%
            ),
            radial-gradient(
              circle at 50% 105%,
              rgba(34, 197, 94, 0.12),
              transparent 46%
            ),
            linear-gradient(
              135deg,
              #020617 0%,
              #08111f 48%,
              #020617 100%
            )
          `,
        }}
      >
        {/* Hero */}
        <section
          style={{
            width: "min(1180px, calc(100% - 40px))",
            margin: "0 auto",
            padding: "110px 0 90px",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#67e8f9",
              fontSize: 13,
              fontWeight: 950,
              letterSpacing: 3.2,
            }}
          >
            AURIS PORTFOLIO
          </p>

          <h1
            style={{
              maxWidth: 950,
              margin: "16px 0 22px",
              fontSize: "clamp(48px, 8vw, 84px)",
              lineHeight: 0.98,
              letterSpacing: -2.5,
            }}
          >
            Technology Designed Around Real Problems
          </h1>

          <p
            style={{
              maxWidth: 820,
              margin: 0,
              color: "#cbd5e1",
              fontSize: 20,
              lineHeight: 1.8,
            }}
          >
            Explore client projects, digital platforms, technology services,
            and the connected products being developed across the AURIS
            ecosystem.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 34,
            }}
          >
            <Link href="/contact" style={primaryButton}>
              START A PROJECT
            </Link>

            <Link href="/" style={secondaryButton}>
              EXPLORE THE ECOSYSTEM
            </Link>
          </div>
        </section>

        {/* Client work */}
        <section style={sectionStyle}>
          <SectionHeading
            eyebrow="CLIENT & COMPANY WORK"
            title="Featured Projects"
            description="Digital experiences designed to support real organizations, customers, and business goals."
          />

          <div style={largeGrid}>
            {clientProjects.map((project) => (
              <article
                key={project.title}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  padding: 30,
                  borderRadius: 26,
                  border: `1px solid ${project.accent}55`,
                  background: `
                    linear-gradient(
                      145deg,
                      ${project.accent}16,
                      rgba(2, 6, 23, 0.78) 48%
                    )
                  `,
                  boxShadow: `0 20px 70px ${project.accent}10`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -110,
                    right: -110,
                    width: 260,
                    height: 260,
                    borderRadius: "50%",
                    background: project.accent,
                    filter: "blur(110px)",
                    opacity: 0.18,
                    pointerEvents: "none",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span
                      style={{
                        color: project.accent,
                        fontSize: 11,
                        fontWeight: 950,
                        letterSpacing: 2.2,
                      }}
                    >
                      {project.category.toUpperCase()}
                    </span>

                    <span
                      style={{
                        padding: "7px 11px",
                        borderRadius: 999,
                        border: `1px solid ${project.accent}44`,
                        color: "#e2e8f0",
                        background: "rgba(15, 23, 42, 0.62)",
                        fontSize: 10,
                        fontWeight: 850,
                        letterSpacing: 1,
                      }}
                    >
                      {project.status.toUpperCase()}
                    </span>
                  </div>

                  <h2
                    style={{
                      margin: "24px 0 14px",
                      fontSize: 30,
                    }}
                  >
                    {project.title}
                  </h2>

                  <p
                    style={{
                      margin: 0,
                      color: "#cbd5e1",
                      lineHeight: 1.75,
                    }}
                  >
                    {project.description}
                  </p>

                  <div
                    style={{
                      display: "grid",
                      gap: 10,
                      marginTop: 24,
                    }}
                  >
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 11,
                          color: "#e2e8f0",
                          fontSize: 14,
                        }}
                      >
                        <span
                          style={{
                            width: 7,
                            height: 7,
                            flexShrink: 0,
                            borderRadius: "50%",
                            background: project.accent,
                            boxShadow: `0 0 12px ${project.accent}`,
                          }}
                        />

                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Products */}
        <section style={sectionStyle}>
          <SectionHeading
            eyebrow="AURIS PRODUCT DEVELOPMENT"
            title="The Connected Ecosystem"
            description="Each AURIS division addresses a different area of technology while remaining connected through Nexus."
          />

          <div style={smallGrid}>
            {productConcepts.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                style={{
                  position: "relative",
                  display: "block",
                  minHeight: 250,
                  overflow: "hidden",
                  padding: 26,
                  borderRadius: 22,
                  border: `1px solid ${product.accent}44`,
                  color: "#ffffff",
                  textDecoration: "none",
                  background: `linear-gradient(
                    145deg,
                    ${product.accent}14,
                    rgba(2,6,23,0.78) 62%
                  )`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: -65,
                    bottom: -65,
                    width: 180,
                    height: 180,
                    borderRadius: "50%",
                    background: product.accent,
                    filter: "blur(80px)",
                    opacity: 0.13,
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  <span
                    style={{
                      color: product.accent,
                      fontSize: 10,
                      fontWeight: 950,
                      letterSpacing: 2,
                    }}
                  >
                    {product.category.toUpperCase()}
                  </span>

                  <h3
                    style={{
                      margin: "20px 0 13px",
                      fontSize: 26,
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    style={{
                      margin: 0,
                      color: "#cbd5e1",
                      lineHeight: 1.7,
                    }}
                  >
                    {product.description}
                  </p>

                  <div
                    style={{
                      marginTop: 24,
                      color: product.accent,
                      fontSize: 11,
                      fontWeight: 950,
                      letterSpacing: 1.8,
                    }}
                  >
                    EXPLORE PRODUCT →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Services */}
        <section style={sectionStyle}>
          <SectionHeading
            eyebrow="WHAT WE BUILD"
            title="Technology Services"
            description="AURIS combines software, infrastructure, security, product strategy, and intelligent systems into practical solutions."
          />

          <div style={smallGrid}>
            {services.map((service, index) => (
              <article
                key={service.title}
                style={{
                  padding: 26,
                  borderRadius: 20,
                  border: "1px solid rgba(103, 232, 249, 0.17)",
                  background: "rgba(15, 23, 42, 0.46)",
                }}
              >
                <div
                  style={{
                    color: "#67e8f9",
                    fontSize: 11,
                    fontWeight: 950,
                    letterSpacing: 2,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3
                  style={{
                    margin: "17px 0 12px",
                    fontSize: 21,
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                  }}
                >
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Process */}
        <section style={sectionStyle}>
          <SectionHeading
            eyebrow="HOW WE WORK"
            title="From Idea to Execution"
            description="Every engagement is structured around understanding the need, planning the right system, and building toward measurable value."
          />

          <div style={processGrid}>
            {[
              {
                number: "01",
                title: "Discover",
                text: "Understand the organization, users, challenges, goals, and current technology.",
              },
              {
                number: "02",
                title: "Design",
                text: "Define the experience, architecture, requirements, workflows, and visual direction.",
              },
              {
                number: "03",
                title: "Build",
                text: "Develop, integrate, test, refine, and document the technology solution.",
              },
              {
                number: "04",
                title: "Grow",
                text: "Support future capabilities, improvements, integrations, and long-term expansion.",
              },
            ].map((step) => (
              <article
                key={step.number}
                style={{
                  padding: 27,
                  borderTop: "1px solid rgba(103, 232, 249, 0.28)",
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                <div
                  style={{
                    color: "#67e8f9",
                    fontSize: 12,
                    fontWeight: 950,
                    letterSpacing: 2,
                  }}
                >
                  {step.number}
                </div>

                <h3
                  style={{
                    margin: "18px 0 11px",
                    fontSize: 23,
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    margin: 0,
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                  }}
                >
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          style={{
            width: "min(1180px, calc(100% - 40px))",
            margin: "0 auto",
            padding: "20px 0 120px",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              padding: "clamp(34px, 6vw, 68px)",
              borderRadius: 30,
              border: "1px solid rgba(103, 232, 249, 0.22)",
              textAlign: "center",
              background: `
                radial-gradient(
                  circle at center,
                  rgba(34, 211, 238, 0.16),
                  transparent 62%
                ),
                rgba(2, 6, 23, 0.76)
              `,
              boxShadow: "0 0 90px rgba(6, 182, 212, 0.08)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#67e8f9",
                fontSize: 12,
                fontWeight: 950,
                letterSpacing: 3,
              }}
            >
              BUILD WITH AURIS
            </p>

            <h2
              style={{
                margin: "17px auto",
                maxWidth: 760,
                fontSize: "clamp(34px, 6vw, 58px)",
                lineHeight: 1.05,
              }}
            >
              Let&apos;s Turn Your Idea Into Something Real
            </h2>

            <p
              style={{
                maxWidth: 720,
                margin: "0 auto",
                color: "#cbd5e1",
                fontSize: 18,
                lineHeight: 1.8,
              }}
            >
              Tell us what you are trying to solve, improve, or create. We will
              help define the right path forward.
            </p>

            <Link
              href="/contact"
              style={{
                ...primaryButton,
                display: "inline-block",
                marginTop: 30,
              }}
            >
              CONTACT AURIS
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div
      style={{
        maxWidth: 790,
        marginBottom: 38,
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#67e8f9",
          fontSize: 11,
          fontWeight: 950,
          letterSpacing: 2.7,
        }}
      >
        {eyebrow}
      </p>

      <h2
        style={{
          margin: "13px 0 15px",
          fontSize: "clamp(34px, 5vw, 52px)",
          lineHeight: 1.05,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          margin: 0,
          color: "#cbd5e1",
          fontSize: 17,
          lineHeight: 1.75,
        }}
      >
        {description}
      </p>
    </div>
  );
}

const sectionStyle: React.CSSProperties = {
  width: "min(1180px, calc(100% - 40px))",
  margin: "0 auto",
  paddingBottom: 100,
};

const largeGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
  gap: 24,
};

const smallGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 22,
};

const processGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
  gap: 2,
  overflow: "hidden",
  borderRadius: 22,
  background: "rgba(103, 232, 249, 0.1)",
};

const primaryButton: React.CSSProperties = {
  padding: "15px 23px",
  borderRadius: 999,
  color: "#020617",
  background: "linear-gradient(135deg, #a5f3fc, #22d3ee)",
  textDecoration: "none",
  fontSize: 12,
  fontWeight: 950,
  letterSpacing: 1.5,
  boxShadow: "0 0 30px rgba(34, 211, 238, 0.28)",
};

const secondaryButton: React.CSSProperties = {
  padding: "15px 23px",
  borderRadius: 999,
  border: "1px solid rgba(103, 232, 249, 0.25)",
  color: "#e2e8f0",
  background: "rgba(15, 23, 42, 0.52)",
  textDecoration: "none",
  fontSize: 12,
  fontWeight: 950,
  letterSpacing: 1.5,
};