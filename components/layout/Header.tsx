import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 24,
        padding: "16px clamp(20px, 5vw, 72px)",
        borderBottom: "1px solid rgba(148,163,184,.18)",
        background: "rgba(2,6,23,.88)",
        backdropFilter: "blur(18px)",
      }}
    >
      <Link
        href="/"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          color: "#ffffff",
          textDecoration: "none",
        }}
      >
        <Image
          src="/auris-logo.png"
          alt="AURIS Technologies LLC"
          width={42}
          height={42}
          priority
        />

        <div>
          <div
            style={{
              fontSize: 16,
              fontWeight: 950,
              letterSpacing: 0.3,
            }}
          >
            AURIS Technologies LLC
          </div>

          <div
            style={{
              marginTop: 2,
              color: "#94a3b8",
              fontSize: 12,
            }}
          >
            Technology Built to Help People
          </div>
        </div>
      </Link>

      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={navLink}>
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
  );
}

const navLink: React.CSSProperties = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: 14,
  fontWeight: 800,
};