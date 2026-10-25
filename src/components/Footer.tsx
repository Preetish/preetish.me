"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/data/siteConfig";
import { ArrowUp, BookOpen } from "lucide-react";
import { LinkedInIcon, GitHubIcon, TwitterIcon } from "@/components/SocialIcons";

export function Footer() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-surface)",
        padding: "4rem 0 3rem",
        marginTop: "auto",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "2.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {/* Brand info */}
          <div>
            <div
              style={{
                fontSize: "1.125rem",
                fontWeight: 600,
                color: "var(--text-primary)",
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              Preetish Panda
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
                lineHeight: 1.6,
                maxWidth: "340px",
                marginBottom: "1.25rem",
              }}
            >
              Marketing leader with 14 years of experience scaling modern tech
              products from early traction to millions in ARR.
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.8125rem",
                color: "var(--text-tertiary)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  backgroundColor: "var(--accent-primary)",
                }}
              />
              <span>Director of Growth at Passage • Writing Growth Log</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "var(--text-tertiary)",
                marginBottom: "1rem",
              }}
            >
              Navigation
            </div>
            <ul
              style={{
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.625rem",
                fontSize: "0.875rem",
                color: "var(--text-secondary)",
              }}
            >
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#experience">Career &amp; Experience</a>
              </li>
              <li>
                <a href="#skills">Skills &amp; Expertise</a>
              </li>
              <li>
                <a href="#philosophy">Growth Philosophy</a>
              </li>
              <li>
                <a href="#newsletter">Growth Log Newsletter</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                fontWeight: 600,
                color: "var(--text-tertiary)",
                marginBottom: "1rem",
              }}
            >
              Connect &amp; Follow
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              <a
                href="https://www.linkedin.com/in/preetishpanda/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://growthlog.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <BookOpen size={15} />
                <span>Growth Log (Substack)</span>
              </a>

              <a
                href="https://x.com/Pr33tish"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <TwitterIcon size={14} />
                <span>Twitter / X (@Pr33tish)</span>
              </a>

              <a
                href="https://github.com/Preetish"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.875rem",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <GitHubIcon size={15} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.8125rem",
            color: "var(--text-tertiary)",
          }}
        >
          <div>
            © {year} Preetish Panda. Built with Next.js &amp; deployed on Vercel.
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.8125rem",
              color: "var(--text-secondary)",
              transition: "var(--transition-smooth)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
