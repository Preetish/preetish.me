"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { MetricsBar } from "@/components/MetricsBar";
import { ExperienceFilter } from "@/components/ExperienceFilter";
import { SkillsGrid } from "@/components/SkillsGrid";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ContactSection } from "@/components/ContactSection";
import { ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      {/* HERO SECTION */}
      <section
        style={{
          paddingTop: "4rem",
          paddingBottom: "3rem",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            <div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 4.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                  letterSpacing: "-0.035em",
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Scaling tech companies from <br />
                <span className="editorial" style={{ fontWeight: 400 }}>
                  early traction
                </span>{" "}
                to millions in ARR.
              </h1>

              {/* Subheading */}
              <p
                style={{
                  fontSize: "clamp(1.0625rem, 2vw, 1.25rem)",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  maxWidth: "680px",
                  marginBottom: "2rem",
                }}
              >
                I&apos;m <strong>Preetish Panda</strong>, Director of Growth at{" "}
                <strong>Passage</strong> and former marketing leader at{" "}
                <strong>Bettermode</strong>. With 14 years blending engineering
                rigor with creative positioning, I build repeatable acquisition
                flywheels, GTM plays, and product marketing engines that compound.
              </p>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  flexWrap: "wrap",
                  marginBottom: "3rem",
                }}
              >
                <a
                  href="#experience"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.5rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--text-primary)",
                    color: "var(--text-inverse)",
                    fontSize: "0.9375rem",
                    fontWeight: 600,
                    letterSpacing: "-0.01em",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    transition: "var(--transition-smooth)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <span>Explore Career</span>
                  <ArrowUpRight size={17} />
                </a>

                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.75rem 1.35rem",
                    borderRadius: "var(--radius-full)",
                    backgroundColor: "var(--bg-surface)",
                    color: "var(--text-primary)",
                    border: "1px solid var(--border-subtle)",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    transition: "var(--transition-smooth)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-hover)";
                    e.currentTarget.style.backgroundColor = "var(--bg-surface-elevated)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border-subtle)";
                    e.currentTarget.style.backgroundColor = "var(--bg-surface)";
                  }}
                >
                  <span>Get in Touch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <MetricsBar />

          {/* Social Proof / Logo Bar */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2.5rem",
              borderTop: "1px solid var(--border-subtle)",
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--text-tertiary)",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              Proven experience across leading tech organizations
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.75rem",
                flexWrap: "wrap",
                opacity: 0.9,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: "6px",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#000000",
                  }}
                >
                  <Image
                    src="/images/passagehq-logo.jpg"
                    alt="Passage"
                    width={28}
                    height={28}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Passage
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Image
                  src="/images/bettermode-logo.png"
                  alt="Bettermode"
                  width={28}
                  height={28}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  Bettermode
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Image
                  src="/images/promptcloud-logo.png"
                  alt="PromptCloud"
                  width={68}
                  height={17}
                  style={{ objectFit: "contain", height: "17px", width: "auto" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Image
                  src="/images/teamwave-logo.png"
                  alt="TeamWave"
                  width={24}
                  height={24}
                  style={{ objectFit: "contain" }}
                />
                <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  TeamWave
                </span>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Image
                  src="/images/infosys-logo.png"
                  alt="Infosys"
                  width={64}
                  height={24}
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                <Image
                  src="/images/oracle-logo.png"
                  alt="Oracle"
                  width={75}
                  height={20}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "3.5rem",
              alignItems: "center",
            }}
          >
            {/* Left: Portrait & Bio Card */}
            <div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "420px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border-subtle)",
                  boxShadow: "var(--card-shadow-hover)",
                  backgroundColor: "var(--bg-surface)",
                }}
              >
                <Image
                  src={siteConfig.avatar}
                  alt={siteConfig.name}
                  width={800}
                  height={800}
                  priority
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>

            {/* Right: Narrative Story */}
            <div>
              <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
                Background &amp; Mindset
              </span>

              <h2
                style={{
                  fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  color: "var(--text-primary)",
                  marginBottom: "1.5rem",
                }}
              >
                Collaborative, creative, and{" "}
                <span className="editorial" style={{ fontWeight: 400 }}>
                  relentlessly analytical.
                </span>
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                  fontSize: "0.9375rem",
                  color: "var(--text-secondary)",
                  lineHeight: 1.6,
                  marginBottom: "2rem",
                }}
              >
                {siteConfig.fullBio.map((paragraph, idx) => {
                  const colonIndex = paragraph.indexOf(":");
                  if (colonIndex !== -1 && colonIndex < 25) {
                    const label = paragraph.slice(0, colonIndex);
                    const rest = paragraph.slice(colonIndex + 1);
                    return (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "0.65rem",
                        }}
                      >
                        <span
                          style={{
                            color: "var(--accent-primary)",
                            fontSize: "1.2rem",
                            lineHeight: "1.35rem",
                            fontWeight: 700,
                            userSelect: "none",
                          }}
                        >
                          •
                        </span>
                        <p style={{ margin: 0 }}>
                          <strong
                            style={{
                              color: "var(--text-primary)",
                              fontWeight: 600,
                              letterSpacing: "-0.01em",
                            }}
                          >
                            {label}:
                          </strong>
                          {rest}
                        </p>
                      </div>
                    );
                  }
                  return <p key={idx}>{paragraph}</p>;
                })}
              </div>

              {/* Core Strengths Checklist */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "0.875rem",
                }}
              >
                {[
                  "Engineering systems mindset",
                  "Multi-channel acquisition",
                  "GTM & product positioning",
                  "Enterprise ABM campaigns",
                  "Team leadership & mentorship",
                  "Data-driven experimentation",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      fontSize: "0.875rem",
                      color: "var(--text-primary)",
                      fontWeight: 500,
                    }}
                  >
                    <CheckCircle2 size={16} color="var(--accent-primary)" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE TIMELINE SECTION */}
      <section
        id="experience"
        className="section"
        style={{
          backgroundColor: "var(--bg-surface-elevated)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
              Career Milestones
            </span>
            <h2
              style={{
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              14 years of scaling tech companies.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              From writing analytics algorithms at Oracle to scaling revenue from
              scratch into double-digit millions at Bettermode, TeamWave, and PromptCloud.
            </p>
          </div>

          <ExperienceFilter />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="container">
          <div style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
              Core Competencies
            </span>
            <h2
              style={{
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              Skills &amp; Toolset.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              A holistic blend of full-funnel marketing execution, product
              positioning, data analytics, and modern web architecture.
            </p>
          </div>

          <SkillsGrid />
        </div>
      </section>

      {/* PHILOSOPHY & PRINCIPLES SECTION */}
      <section
        id="philosophy"
        className="section"
        style={{
          backgroundColor: "var(--bg-surface-elevated)",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          position: "relative",
        }}
      >
        <div id="newsletter" style={{ position: "absolute", top: "-4rem" }} />
        <div className="container">
          <div style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
              Mindset &amp; Values
            </span>
            <h2
              style={{
                fontSize: "clamp(1.875rem, 4vw, 2.75rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                color: "var(--text-primary)",
                marginBottom: "0.75rem",
              }}
            >
              Growth Philosophy.
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              The foundational convictions that guide how I diagnose funnels,
              position products, and scale high-growth tech companies.
            </p>
          </div>

          <PhilosophySection />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section">
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
