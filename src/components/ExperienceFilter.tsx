"use client";

import { useState } from "react";
import Image from "next/image";
import { experiences, ExperienceItem } from "@/data/experience";
import { CheckCircle2, ChevronRight } from "lucide-react";

type FilterType = "all" | "growth" | "leadership" | "product" | "engineering";

export function ExperienceFilter() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [expandedId, setExpandedId] = useState<string | null>("bettermode-marketing");

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: "all", label: "All Experience" },
    { id: "growth", label: "Growth & GTM" },
    { id: "leadership", label: "Leadership" },
    { id: "product", label: "Product Marketing" },
    { id: "engineering", label: "Technical Roots" },
  ];

  const filtered = experiences.filter((exp) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "growth") return exp.category === "growth" || exp.category === "leadership";
    if (activeFilter === "leadership") return exp.category === "leadership";
    if (activeFilter === "product") return exp.category === "product";
    if (activeFilter === "engineering") return exp.category === "engineering" || exp.category === "consulting";
    return true;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
          marginBottom: "2rem",
          scrollbarWidth: "none",
        }}
      >
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                padding: "0.45rem 1rem",
                borderRadius: "var(--radius-full)",
                fontSize: "0.8125rem",
                fontWeight: isActive ? 600 : 500,
                color: isActive ? "var(--text-inverse)" : "var(--text-secondary)",
                backgroundColor: isActive ? "var(--text-primary)" : "var(--bg-surface)",
                border: "1px solid",
                borderColor: isActive ? "var(--text-primary)" : "var(--border-subtle)",
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
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Experience Timeline Cards */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {filtered.map((item) => {
          const isExpanded = expandedId === item.id;
          return (
            <div
              key={item.id}
              style={{
                backgroundColor: "var(--bg-surface)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                boxShadow: isExpanded ? "var(--card-shadow-hover)" : "var(--card-shadow)",
                padding: "1.75rem",
                transition: "var(--transition-smooth)",
              }}
            >
              {/* Top header row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "1rem",
                  flexWrap: "wrap",
                  cursor: "pointer",
                }}
                onClick={() => toggleExpand(item.id)}
              >
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  {/* Company Logo container */}
                  <div className="company-logo-badge">
                    <Image
                      src={item.logo}
                      alt={item.logoAlt}
                      width={36}
                      height={36}
                      style={{ objectFit: "contain", maxHeight: "100%", maxWidth: "100%" }}
                    />
                  </div>

                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.6rem",
                        flexWrap: "wrap",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: "1.125rem",
                          fontWeight: 600,
                          color: "var(--text-primary)",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {item.role}
                      </h3>
                      {item.current && (
                        <span className="badge badge-accent">
                          <span className="ping-wrapper">
                            <span className="ping-circle" />
                            <span className="ping-dot" />
                          </span>
                          Current
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        color: "var(--text-secondary)",
                        marginTop: "0.15rem",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.35rem",
                      }}
                    >
                      {item.website ? (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            color: "inherit",
                            textDecoration: "underline",
                            textDecorationColor: "var(--border-hover)",
                            textUnderlineOffset: "2px",
                          }}
                        >
                          {item.company}
                        </a>
                      ) : (
                        <span>{item.company}</span>
                      )}
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--text-tertiary)",
                      fontWeight: 500,
                    }}
                  >
                    {item.period}
                  </span>

                  {item.metrics && (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        padding: "0.25rem 0.6rem",
                        borderRadius: "var(--radius-full)",
                        backgroundColor: "var(--badge-bg)",
                        border: "1px solid var(--badge-border)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {item.metrics}
                    </span>
                  )}

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--text-tertiary)",
                      transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <ChevronRight size={18} />
                  </div>
                </div>
              </div>

              {/* Summary */}
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginTop: "1.1rem",
                }}
              >
                {item.summary}
              </p>

              {/* Expanded details */}
              {isExpanded && (
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid var(--border-subtle)",
                    animation: "fadeIn 0.2s ease",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.75rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      fontWeight: 600,
                      color: "var(--text-tertiary)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Key Accomplishments
                  </div>

                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.625rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {item.highlights.map((h, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.6rem",
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--accent-primary)"
                          style={{ flexShrink: 0, marginTop: "0.15rem" }}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Skills tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.4rem",
                    }}
                  >
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          fontSize: "0.75rem",
                          padding: "0.25rem 0.6rem",
                          borderRadius: "4px",
                          backgroundColor: "var(--bg-surface-elevated)",
                          color: "var(--text-secondary)",
                          border: "1px solid var(--border-subtle)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
