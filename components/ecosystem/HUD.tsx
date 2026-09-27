type HUDProps = {
  active: boolean;
  accent: string;
  title?: string;
  subtitle?: string;
  onCollapse?: () => void;
};

export default function HUD({
  active,
  accent,
  title,
  subtitle,
  onCollapse,
}: HUDProps) {
  if (!active) return null;

  return (
    <div
      style={{
        position: "absolute",
        left: 28,
        top: 22,
        textAlign: "left",
        zIndex: 20,
        userSelect: "none",
      }}
    >
      <div
        style={{
          color: accent,
          fontSize: 12,
          fontWeight: 900,
          letterSpacing: 3,
          textTransform: "uppercase",
        }}
      >
        AURIS ECOSYSTEM
      </div>

      <div
        style={{
          marginTop: 6,
          color: "white",
          fontSize: 22,
          fontWeight: 700,
        }}
      >
        {title ?? "Select Division"}
      </div>

      <div
        style={{
          marginTop: 4,
          color: "#94a3b8",
          fontSize: 13,
          maxWidth: 260,
        }}
      >
        {subtitle ?? "Interactive Technology Platform"}
      </div>

      {onCollapse && (
        <button
          onClick={onCollapse}
          style={{
            marginTop: 20,
            padding: "10px 16px",
            borderRadius: 999,
            border: `1px solid ${accent}66`,
            background: "rgba(15,23,42,.75)",
            color: "white",
            cursor: "pointer",
            fontWeight: 700,
            transition: "all .25s ease",
          }}
        >
          ← Collapse Ecosystem
        </button>
      )}
    </div>
  );
}