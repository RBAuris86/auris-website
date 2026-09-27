import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main
        style={{
          minHeight: "100vh",
          color: "#ffffff",
          background: `
            radial-gradient(
              circle at 82% 12%,
              rgba(6,182,212,0.28) 0%,
              transparent 34%
            ),
            radial-gradient(
              circle at 12% 42%,
              rgba(59,130,246,0.18) 0%,
              transparent 38%
            ),
            linear-gradient(
              135deg,
              #020617 0%,
              #08111f 52%,
              #020617 100%
            )
          `,
        }}
      >
        <section
          style={{
            width: "min(1180px, calc(100% - 40px))",
            margin: "0 auto",
            padding: "110px 0 120px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(320px, 1fr))",
              gap: 54,
              alignItems: "start",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  color: "#67e8f9",
                  fontSize: 13,
                  fontWeight: 900,
                  letterSpacing: 3,
                }}
              >
                CONTACT AURIS
              </p>

              <h1
                style={{
                  margin: "14px 0 22px",
                  fontSize: "clamp(42px, 7vw, 78px)",
                  lineHeight: 1,
                  letterSpacing: -2,
                }}
              >
                Let&apos;s Build Something Meaningful
              </h1>

              <p
                style={{
                  margin: 0,
                  maxWidth: 640,
                  color: "#cbd5e1",
                  fontSize: 19,
                  lineHeight: 1.8,
                }}
              >
                Tell us about your organization, your challenge,
                or the technology you want to create. AURIS
                Technologies develops thoughtful digital systems,
                intelligent platforms, and connected technology
                designed to help people.
              </p>

              <div
                style={{
                  marginTop: 36,
                  display: "grid",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    padding: 20,
                    borderRadius: 18,
                    border:
                      "1px solid rgba(103,232,249,0.18)",
                    background:
                      "rgba(15,23,42,0.5)",
                  }}
                >
                  <div
                    style={{
                      color: "#67e8f9",
                      fontSize: 12,
                      fontWeight: 900,
                      letterSpacing: 2,
                    }}
                  >
                    EMAIL
                  </div>

                  <a
                    href="mailto:contact@goauris.com"
                    style={{
                      display: "inline-block",
                      marginTop: 8,
                      color: "#ffffff",
                      textDecoration: "none",
                      fontSize: 17,
                    }}
                  >
                    contact@goauris.com
                  </a>
                </div>

                <div
                  style={{
                    padding: 20,
                    borderRadius: 18,
                    border:
                      "1px solid rgba(103,232,249,0.18)",
                    background:
                      "rgba(15,23,42,0.5)",
                  }}
                >
                  <div
                    style={{
                      color: "#67e8f9",
                      fontSize: 12,
                      fontWeight: 900,
                      letterSpacing: 2,
                    }}
                  >
                    LOCATION
                  </div>

                  <div
                    style={{
                      marginTop: 8,
                      color: "#ffffff",
                      fontSize: 17,
                    }}
                  >
                    Little Rock, Arkansas
                  </div>
                </div>
              </div>
            </div>

            <form
              action="mailto:contact@goauris.com"
              method="post"
              encType="text/plain"
              style={{
                padding: 32,
                borderRadius: 28,
                border:
                  "1px solid rgba(103,232,249,0.2)",
                background:
                  "rgba(2,6,23,0.72)",
                boxShadow:
                  "0 0 80px rgba(6,182,212,0.08)",
                backdropFilter: "blur(18px)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: 20,
                }}
              >
                <label style={labelStyle}>
                  Name
                  <input
                    type="text"
                    name="name"
                    required
                    style={inputStyle}
                  />
                </label>

                <label style={labelStyle}>
                  Email
                  <input
                    type="email"
                    name="email"
                    required
                    style={inputStyle}
                  />
                </label>

                <label style={labelStyle}>
                  Company or Organization
                  <input
                    type="text"
                    name="company"
                    style={inputStyle}
                  />
                </label>

                <label style={labelStyle}>
                  What can AURIS help you build?
                  <textarea
                    name="message"
                    required
                    rows={7}
                    style={{
                      ...inputStyle,
                      resize: "vertical",
                      minHeight: 160,
                    }}
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    border: 0,
                    borderRadius: 999,
                    padding: "16px 24px",
                    color: "#020617",
                    background:
                      "linear-gradient(135deg, #67e8f9, #22d3ee)",
                    fontSize: 14,
                    fontWeight: 950,
                    letterSpacing: 1.6,
                    cursor: "pointer",
                    boxShadow:
                      "0 0 28px rgba(34,211,238,0.35)",
                  }}
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

const labelStyle: React.CSSProperties = {
  display: "grid",
  gap: 9,
  color: "#e2e8f0",
  fontSize: 14,
  fontWeight: 800,
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: 14,
  border: "1px solid rgba(148,163,184,0.24)",
  background: "rgba(15,23,42,0.72)",
  color: "#ffffff",
  padding: "14px 16px",
  fontSize: 16,
  outline: "none",
};