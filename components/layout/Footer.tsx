import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(148,163,184,.18)",
        background: "#020617",
        color: "#cbd5e1",
        padding: "34px clamp(20px, 5vw, 72px)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1240,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
          flexWrap: "wrap",
        }}
      >
        <div>
          <div
            style={{
              color: "#ffffff",
              fontWeight: 950,
              fontSize: 16,
            }}
          >
            AURIS Technologies LLC
          </div>

          <div
            style={{
              marginTop: 6,
              color: "#94a3b8",
              fontSize: 13,
            }}
          >
            Technology Built to Help People
          </div>

          <div
            style={{
              marginTop: 10,
              color: "#64748b",
              fontSize: 12,
            }}
          >
            © {year} AURIS Technologies LLC. All rights reserved.
          </div>
        </div>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            flexWrap: "wrap",
          }}
        >
          <Link href="/" style={footerLink}>
            Ecosystem
          </Link>

          <Link href="/about" style={footerLink}>
            About
          </Link>

          <Link href="/portfolio" style={footerLink}>
            Portfolio
          </Link>

          <Link href="/contact" style={footerLink}>
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

const footerLink: React.CSSProperties = {
  color: "#94a3b8",
  textDecoration: "none",
  fontSize: 13,
  fontWeight: 800,
};