import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const divisions = [
  {
    name: "Nexus",
    color: "#06b6d4",
    description:
      "The intelligent AI platform connecting every AURIS product and service into one unified ecosystem.",
  },
  {
    name: "Terra",
    color: "#22c55e",
    description:
      "Environmental monitoring, severe weather research, and intelligent sensor technologies.",
  },
  {
    name: "Haven",
    color: "#c49a6c",
    description:
      "AI-powered healthcare, assisted living, robotics, and independent living technologies.",
  },
  {
    name: "Medical",
    color: "#dc2626",
    description:
      "Clinical AI, documentation, medical workflow automation, and healthcare innovation.",
  },
  {
    name: "Atlas",
    color: "#38bdf8",
    description:
      "Indoor navigation, mapping, positioning, and intelligent location services.",
  },
  {
    name: "Orbit",
    color: "#8b5cf6",
    description:
      "Future satellite systems, Earth observation, and orbital technologies.",
  },
  {
    name: "Enterprise",
    color: "#94a3b8",
    description:
      "Professional software development, websites, consulting, and digital transformation.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",
          color: "#fff",
          background: `
            radial-gradient(circle at 82% 12%, rgba(6,182,212,.22), transparent 34%),
            radial-gradient(circle at 12% 42%, rgba(34,197,94,.15), transparent 40%),
            linear-gradient(135deg,#020617,#08111f,#020617)
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
              color: "#67e8f9",
              fontWeight: 900,
              letterSpacing: 3,
              margin: 0,
            }}
          >
            ABOUT AURIS
          </p>

          <h1
            style={{
              fontSize: "clamp(48px,8vw,78px)",
              lineHeight: 1,
              margin: "18px 0",
            }}
          >
            Technology Built
            <br />
            to Help People
          </h1>

          <p
            style={{
              maxWidth: 850,
              color: "#cbd5e1",
              fontSize: 20,
              lineHeight: 1.8,
            }}
          >
            AURIS Technologies exists to create intelligent,
            connected technology that improves everyday life.
            Every product we design begins with one simple
            question:
            <strong> How can technology genuinely help people?</strong>
          </p>
        </section>

        {/* Story */}
        <section
          style={{
            width: "min(1180px, calc(100% - 40px))",
            margin: "0 auto",
            paddingBottom: 90,
          }}
        >
          <h2 style={{ color: "#67e8f9", fontSize: 34 }}>
            Our Story
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.9,
              fontSize: 18,
            }}
          >
            AURIS Technologies was founded on the belief that
            innovation should solve real-world problems.
            Rather than creating technology for the sake of
            technology, our mission is to build intelligent
            platforms that improve safety, healthcare,
            accessibility, environmental awareness, and digital
            experiences.
          </p>

          <p
            style={{
              color: "#cbd5e1",
              lineHeight: 1.9,
              fontSize: 18,
            }}
          >
            Every division within AURIS works together through
            Nexus AI, creating one connected ecosystem capable
            of sharing intelligence across products while
            remaining focused on the people who rely on them.
          </p>
        </section>

        {/* Mission + Vision */}
        <section
          style={{
            width: "min(1180px, calc(100% - 40px))",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(340px,1fr))",
            gap: 28,
            paddingBottom: 90,
          }}
        >
          {[
            {
              title: "Mission",
              color: "#22d3ee",
              text:
                "Design intelligent technologies that solve meaningful problems while improving quality of life.",
            },
            {
              title: "Vision",
              color: "#22c55e",
              text:
                "Create one of the world's most connected technology ecosystems, where AI enhances every product and every experience.",
            },
          ].map((item) => (
            <div
              key={item.title}
              style={{
                padding: 30,
                borderRadius: 22,
                background: "rgba(15,23,42,.55)",
                border: `1px solid ${item.color}44`,
              }}
            >
              <h3
                style={{
                  color: item.color,
                  marginBottom: 18,
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#cbd5e1",
                  lineHeight: 1.8,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </section>

        {/* Ecosystem */}
        <section
          style={{
            width: "min(1180px, calc(100% - 40px))",
            margin: "0 auto",
            paddingBottom: 90,
          }}
        >
          <h2
            style={{
              color: "#67e8f9",
              fontSize: 34,
              marginBottom: 35,
            }}
          >
            The AURIS Ecosystem
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(270px,1fr))",
              gap: 24,
            }}
          >
            {divisions.map((division) => (
              <div
                key={division.name}
                style={{
                  padding: 24,
                  borderRadius: 20,
                  border: `1px solid ${division.color}55`,
                  background: "rgba(15,23,42,.45)",
                }}
              >
                <h3
                  style={{
                    color: division.color,
                    marginBottom: 16,
                  }}
                >
                  {division.name}
                </h3>

                <p
                  style={{
                    color: "#cbd5e1",
                    lineHeight: 1.7,
                  }}
                >
                  {division.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section
          style={{
            width: "min(1180px, calc(100% - 40px))",
            margin: "0 auto",
            paddingBottom: 120,
          }}
        >
          <h2
            style={{
              color: "#67e8f9",
              fontSize: 34,
              marginBottom: 35,
            }}
          >
            Our Core Values
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: 22,
            }}
          >
            {[
              "Innovation",
              "Integrity",
              "Accessibility",
              "Security",
              "Reliability",
              "Human-Centered Design",
            ].map((value) => (
              <div
                key={value}
                style={{
                  padding: 24,
                  borderRadius: 18,
                  textAlign: "center",
                  border:
                    "1px solid rgba(103,232,249,.2)",
                  background:
                    "rgba(255,255,255,.03)",
                  fontWeight: 800,
                }}
              >
                {value}
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}