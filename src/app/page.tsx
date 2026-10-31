"use client";

import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { MetricsBar } from "@/components/MetricsBar";
import { ExperienceFilter } from "@/components/ExperienceFilter";
import { SkillsGrid } from "@/components/SkillsGrid";
import { PhilosophySection } from "@/components/PhilosophySection";
import { ContactSection } from "@/components/ContactSection";
import { WorkSection } from "@/components/WorkSection";
import { ArrowUpRight, Terminal, TrendingUp, Compass } from "lucide-react";

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
                Engineer by training,
                <br />
                <span className="editorial" style={{ fontWeight: 400 }}>
                  growth leader
                </span>{" "}
                by trade.
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
                I&apos;m <strong>Preetish Panda</strong>. I head growth at an
                AI-native legal services firm. Before that I ran growth at{" "}
                <strong>Passage</strong> and was employee #2 at{" "}
                <strong>Bettermode</strong>, where I built marketing from
                scratch. I also build open-source tools and publish research on
                marketing.
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
                  <span>See my work</span>
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
              Where I&apos;ve worked
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
                  width={74}
                  height={30}
                  style={{ objectFit: "contain", height: "30px", width: "auto" }}
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
              alignItems: "end",
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
                An engineer who{" "}
                <span className="editorial" style={{ fontWeight: 400 }}>
                  fell for marketing.
                </span>
              </h2>

              {/* Strategic Bio Pillars */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.85rem",
                }}
              >
                {siteConfig.fullBio.map((item, idx) => {
                  const colonIndex = item.indexOf(":");
                  const label = colonIndex !== -1 ? item.slice(0, colonIndex) : "";
                  const text = colonIndex !== -1 ? item.slice(colonIndex + 1).trim() : item;

                  const icon =
                    idx === 0 ? (
                      <Terminal size={15} />
                    ) : idx === 1 ? (
                      <TrendingUp size={15} />
                    ) : (
                      <Compass size={15} />
                    );

                  return (
                    <div key={idx} className="bio-pillar-card">
                      <div className="bio-pillar-icon">{icon}</div>
                      <div>
                        {label && <div className="bio-pillar-label">{label}</div>}
                        <p className="bio-pillar-text">
                          {idx === 0 ? (
                            <>
                              Started as a software engineer at <strong>Oracle</strong>. I still
                              treat funnels like systems to instrument and debug.
                            </>
                          ) : idx === 1 ? (
                            <>
                              <strong>Employee #2</strong> and first marketing hire at{" "}
                              <strong>Bettermode</strong>. I&apos;ve led growth from zero to
                              millions in revenue.
                            </>
                          ) : (
                            <>
                              I ship <strong>open-source MarTech tools</strong> and publish{" "}
                              <strong>peer-reviewed research</strong> on customer behavior
                              and growth systems.
                            </>
                          )}
                        </p>
                      </div>
                    </div>
                  );
                })}
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
              From first hire to{" "}
              <span className="editorial" style={{ fontWeight: 400 }}>
                Head of Growth.
              </span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Software engineering at Oracle, then growth roles at TeamWave,
              PromptCloud, Bettermode, Passage, and now an AI-native legal
              services firm.
            </p>
          </div>

          <ExperienceFilter />
        </div>
      </section>

      {/* BUILDING & RESEARCH SECTION */}
      <section id="building" className="section">
        <div className="container">
          <div style={{ maxWidth: "680px", marginBottom: "2.5rem" }}>
            <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
              Building &amp; Research
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
              I also build{" "}
              <span className="editorial" style={{ fontWeight: 400 }}>
                and publish.
              </span>
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Open-source tools for problems I&apos;ve hit in growth work, and
              peer-reviewed research on marketing.
            </p>
          </div>

          <WorkSection />
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section
        id="skills"
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
              Skills &amp; Toolset
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Full-funnel marketing, positioning, and analytics, plus enough
              engineering to build the tools myself.
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
          position: "relative",
        }}
      >
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
              Growth Philosophy
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
              }}
            >
              The principles behind how I diagnose funnels and position
              products.
            </p>
          </div>

          <PhilosophySection />
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="section"
        style={{
          backgroundColor: "var(--bg-surface-elevated)",
          borderTop: "1px solid var(--border-subtle)",
        }}
      >
        <div className="container">
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
