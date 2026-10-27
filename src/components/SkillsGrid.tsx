import { skillCategories } from "@/data/skills";

export function SkillsGrid() {
  return (
    <div className="skills-grid">
      {skillCategories.map((cat, idx) => (
        <div key={idx} className="skill-card">
          <div>
            <h3
              style={{
                fontSize: "1.0625rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "0.4rem",
                letterSpacing: "-0.01em",
              }}
            >
              {cat.title}
            </h3>
            <p
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-tertiary)",
                lineHeight: 1.5,
                marginBottom: "1.25rem",
              }}
            >
              {cat.description}
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {cat.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    padding: "0.3rem 0.65rem",
                    borderRadius: "var(--radius-sm)",
                    fontSize: "0.8125rem",
                    fontWeight: skill.highlight ? 600 : 400,
                    backgroundColor: skill.highlight
                      ? "var(--accent-surface)"
                      : "var(--bg-surface-elevated)",
                    color: skill.highlight
                      ? "var(--accent-text)"
                      : "var(--text-secondary)",
                    border: "1px solid",
                    borderColor: skill.highlight
                      ? "var(--accent-border)"
                      : "var(--border-subtle)",
                    transition: "var(--transition-smooth)",
                  }}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
