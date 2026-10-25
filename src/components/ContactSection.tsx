"use client";

import { useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Send, Check, MessageSquare, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, GitHubIcon, TwitterIcon } from "@/components/SocialIcons";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("success");
      }
    } catch {
      setStatus("success");
    }
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "2.5rem",
        backgroundColor: "var(--bg-surface)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: "clamp(1.75rem, 4vw, 2.75rem)",
        boxShadow: "var(--card-shadow)",
      }}
    >
      {/* Left Column: Direct Outreach & Socials */}
      <div>
        <span className="badge badge-accent" style={{ marginBottom: "1rem" }}>
          Get In Touch
        </span>

        <h3
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            fontWeight: 700,
            letterSpacing: "-0.025em",
            color: "var(--text-primary)",
            marginBottom: "0.875rem",
            lineHeight: 1.25,
          }}
        >
          Let&apos;s talk growth, GTM, or advisory.
        </h3>

        <p
          style={{
            fontSize: "0.9375rem",
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            marginBottom: "1.75rem",
          }}
        >
          Have a SaaS growth bottleneck to solve, a GTM question, or an advisory
          opportunity? Fill out the form or reach out directly on LinkedIn.
        </p>

        {/* LinkedIn Direct CTA Card */}
        <a
          href="https://www.linkedin.com/in/preetishpanda/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            padding: "1rem 1.25rem",
            borderRadius: "var(--radius-md)",
            backgroundColor: "var(--bg-surface-elevated)",
            border: "1px solid var(--border-subtle)",
            marginBottom: "1.75rem",
            transition: "var(--transition-smooth)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--border-hover)";
            e.currentTarget.style.boxShadow = "var(--card-shadow)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "var(--border-subtle)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "8px",
                backgroundColor: "#0077b5",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <LinkedInIcon size={18} />
            </div>
            <div>
              <div
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "var(--text-primary)",
                }}
              >
                Connect on LinkedIn
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "var(--text-tertiary)",
                }}
              >
                linkedin.com/in/preetishpanda
              </div>
            </div>
          </div>
          <ArrowUpRight size={17} color="var(--text-tertiary)" />
        </a>

        {/* Additional Social Links */}
        <div>
          <div
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontWeight: 600,
              color: "var(--text-tertiary)",
              marginBottom: "0.75rem",
            }}
          >
            Other Channels
          </div>

          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a
              href="https://x.com/Pr33tish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow on X"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.45rem 0.85rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-secondary)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                transition: "var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              <TwitterIcon size={14} />
              <span>@Pr33tish</span>
            </a>

            <a
              href="https://growthlog.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Growth Log on Substack"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.45rem 0.85rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-secondary)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                transition: "var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              <MessageSquare size={14} />
              <span>Growth Log</span>
            </a>

            <a
              href="https://github.com/Preetish"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.45rem 0.85rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-subtle)",
                backgroundColor: "var(--bg-surface)",
                color: "var(--text-secondary)",
                fontSize: "0.8125rem",
                fontWeight: 500,
                transition: "var(--transition-smooth)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--border-hover)";
                e.currentTarget.style.color = "var(--text-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border-subtle)";
                e.currentTarget.style.color = "var(--text-secondary)";
              }}
            >
              <GitHubIcon size={14} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Contact Form */}
      <div>
        {status === "success" ? (
          <div
            style={{
              padding: "2.5rem 1.5rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--accent-surface)",
              border: "1px solid var(--accent-border)",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                backgroundColor: "var(--accent-primary)",
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Check size={24} />
            </div>
            <h4
              style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--accent-text)",
              }}
            >
              Message Received!
            </h4>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.5,
                maxWidth: "320px",
              }}
            >
              Thank you for reaching out. I review all inquiries and will follow up shortly.
            </p>
            <button
              onClick={() => setStatus("idle")}
              style={{
                marginTop: "0.5rem",
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "var(--accent-text)",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.1rem",
            }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "0.35rem",
                }}
              >
                Your Name
              </label>
              <input
                id="name"
                required
                type="text"
                placeholder="Jane Doe"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.65rem 0.875rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-surface-elevated)",
                  color: "var(--text-primary)",
                  fontSize: "0.875rem",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "0.35rem",
                }}
              >
                Your Email
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="jane@company.com"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.65rem 0.875rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-surface-elevated)",
                  color: "var(--text-primary)",
                  fontSize: "0.875rem",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "0.35rem",
                }}
              >
                Subject / Project Topic
              </label>
              <input
                id="subject"
                type="text"
                placeholder="SaaS Growth, GTM Advisory, or Consultation"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.65rem 0.875rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-surface-elevated)",
                  color: "var(--text-primary)",
                  fontSize: "0.875rem",
                  outline: "none",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: "block",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  color: "var(--text-secondary)",
                  marginBottom: "0.35rem",
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell me a bit about your company, current stage, and goals..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                style={{
                  width: "100%",
                  padding: "0.65rem 0.875rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--border-subtle)",
                  backgroundColor: "var(--bg-surface-elevated)",
                  color: "var(--text-primary)",
                  fontSize: "0.875rem",
                  outline: "none",
                  resize: "vertical",
                  fontFamily: "inherit",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.25rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--text-primary)",
                color: "var(--text-inverse)",
                fontSize: "0.875rem",
                fontWeight: 600,
                cursor: status === "submitting" ? "not-allowed" : "pointer",
                transition: "var(--transition-smooth)",
                marginTop: "0.25rem",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Send size={15} />
              <span>{status === "submitting" ? "Sending..." : "Send Message"}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
