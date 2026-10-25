import { siteConfig } from "@/data/siteConfig";

export function MetricsBar() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "1.25rem",
        margin: "3rem 0 1rem",
      }}
    >
      {siteConfig.stats.map((stat, idx) => (
        <div
          key={idx}
          style={{
            padding: "1.5rem 1.25rem",
            backgroundColor: "var(--bg-surface)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--card-shadow)",
            transition: "var(--transition-smooth)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontSize: "2.125rem",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
              lineHeight: 1.1,
              marginBottom: "0.4rem",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {stat.value}
          </div>
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "0.2rem",
            }}
          >
            {stat.label}
          </div>
          <div
            style={{
              fontSize: "0.75rem",
              color: "var(--text-tertiary)",
              lineHeight: 1.4,
            }}
          >
            {stat.subtext}
          </div>
        </div>
      ))}
    </div>
  );
}
