type ProductOverviewProps = {
  product: string;
  overview: string;
  accent: string;
};

export default function ProductOverview({
  product,
  overview,
  accent,
}: ProductOverviewProps) {
  return (
    <section
      id="overview"
      style={{
        width: "min(1120px, calc(100% - 40px))",
        margin: "0 auto",
        padding: "96px 0",
        scrollMarginTop: 100,
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
        Product Overview
      </div>

      <h2
        style={{
          margin: "12px 0 0",
          maxWidth: 850,
          color: "#ffffff",
          fontSize: "clamp(38px, 6vw, 68px)",
          lineHeight: 1.02,
        }}
      >
        What is {product}?
      </h2>

      <p
        style={{
          margin: "28px 0 0",
          maxWidth: 900,
          color: "#bdc7d6",
          fontSize: "clamp(19px, 2.2vw, 26px)",
          lineHeight: 1.65,
        }}
      >
        {overview}
      </p>
    </section>
  );
}