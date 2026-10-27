"use client";

import { useState } from "react";
import { principles } from "@/data/philosophy";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUpRight, Sparkles, BookOpen } from "lucide-react";

export function PhilosophySection() {
  const [activeNumber, setActiveNumber] = useState<string>("01");

  const activePrinciple =
    principles.find((p) => p.number === activeNumber) || principles[0];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
      {/* Principle Tabs for quick browsing */}
      <div
        style={{
          display: "flex",
          gap: "0.625rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
          scrollbarWidth: "none",
        }}
      >
        {principles.map((p) => {
          const isActive = p.number === activeNumber;
          return (
            <button
              key={p.number}
              onClick={() => setActiveNumber(p.number)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.55rem 1.15rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.8125rem",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "var(--text-inverse)" : "var(--text-secondary)",
                backgroundColor: isActive
                  ? "var(--text-primary)"
                  : "var(--bg-surface)",
                border: "1px solid",
                borderColor: isActive
                  ? "var(--text-primary)"
                  : "var(--border-subtle)",
                transition: "var(--transition-smooth)",
                whiteSpace: "nowrap",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.color = "var(--text-primary)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "var(--border-subtle)";
                  e.currentTarget.style.color = "var(--text-secondary)";
                }
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  opacity: isActive ? 0.9 : 0.6,
                }}
              >
                {p.number}
              </span>
              <span>{p.tag}</span>
            </button>
          );
        })}
      </div>

      {/* Featured Active Principle Showcase */}
      <div
        style={{
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          padding: "clamp(1.75rem, 4vw, 3rem)",
          boxShadow: "var(--card-shadow-hover)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "1.5rem",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span
              style={{
                fontSize: "0.875rem",
                fontFamily: "var(--font-serif)",
                fontWeight: 600,
                color: "var(--accent-text)",
                backgroundColor: "var(--accent-surface)",
                padding: "0.25rem 0.65rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--accent-border)",
              }}
            >
              Principle {activePrinciple.number}
            </span>

            <span
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-tertiary)",
                fontWeight: 600,
              }}
            >
              {activePrinciple.tag}
            </span>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8125rem",
              color: "var(--text-tertiary)",
            }}
          >
            <Sparkles size={14} color="var(--accent-primary)" />
            <span>Guiding Principle</span>
          </div>
        </div>

        <h3
          style={{
            fontSize: "clamp(1.35rem, 3vw, 1.85rem)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            color: "var(--text-primary)",
            lineHeight: 1.3,
            marginBottom: "1.25rem",
          }}
        >
          {activePrinciple.title}
        </h3>

        {/* Serene Editorial Quote */}
        <blockquote
          className="editorial"
          style={{
            fontSize: "clamp(1.15rem, 2.5vw, 1.4rem)",
            color: "var(--text-primary)",
            lineHeight: 1.5,
            paddingLeft: "1.25rem",
            borderLeft: "2px solid var(--accent-primary)",
            marginBottom: "1.5rem",
            fontStyle: "italic",
          }}
        >
          &ldquo;{activePrinciple.quote}&rdquo;
        </blockquote>

        <p
          style={{
            fontSize: "1rem",
            color: "var(--text-secondary)",
            lineHeight: 1.7,
            maxWidth: "760px",
            marginBottom: "2rem",
          }}
        >
          {activePrinciple.body}
        </p>

        {/* Key Takeaway Chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.5rem 0.875rem",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-surface-elevated)",
            border: "1px solid var(--border-subtle)",
            fontSize: "0.8125rem",
            color: "var(--text-primary)",
          }}
        >
          <span
            style={{
              fontWeight: 600,
              color: "var(--text-tertiary)",
              textTransform: "uppercase",
              fontSize: "0.6875rem",
              letterSpacing: "0.05em",
            }}
          >
            Takeaway
          </span>
          <span style={{ color: "var(--border-hover)" }}>|</span>
          <span style={{ fontWeight: 500 }}>{activePrinciple.takeaway}</span>
        </div>
      </div>

      {/* Growth Log Newsletter Spotlight Card */}
      <div
        id="newsletter"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1.5rem",
          flexWrap: "wrap",
          padding: "1.75rem 2rem",
          borderRadius: "var(--radius-lg)",
          backgroundColor: "var(--accent-surface)",
          border: "1px solid var(--accent-border)",
          scrollMarginTop: "6rem",
          transition: "var(--transition-smooth)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: "10px",
              backgroundColor: "var(--bg-surface)",
              border: "1px solid var(--accent-border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--accent-text)",
              flexShrink: 0,
            }}
          >
            <BookOpen size={22} />
          </div>

          <div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "var(--accent-text)",
                letterSpacing: "-0.01em",
              }}
            >
              Growth Log — Actionable growth playbooks for tech leaders
            </div>
            <div
              style={{
                fontSize: "0.8125rem",
                color: "var(--text-secondary)",
                marginTop: "0.2rem",
              }}
            >
              Actionable guides, practical frameworks, and counter-intuitive growth ideas.
            </div>
          </div>
        </div>

        <a
          href={siteConfig.newsletterUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            padding: "0.6rem 1.25rem",
            borderRadius: "var(--radius-full)",
            backgroundColor: "var(--text-primary)",
            color: "var(--text-inverse)",
            fontSize: "0.8125rem",
            fontWeight: 600,
            transition: "var(--transition-smooth)",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          <span>Read on Substack</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}
