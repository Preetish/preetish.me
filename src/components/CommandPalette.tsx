"use client";

import { useEffect, useState, useRef } from "react";
import {
  Search,
  Briefcase,
  User,
  Sparkles,
  BookOpen,
  Mail,
  FileDown,
  Sun,
  X,
  ExternalLink,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { LinkedInIcon, GitHubIcon, TwitterIcon } from "@/components/SocialIcons";

interface CommandItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  category: "Navigation" | "Actions" | "Writing" | "Social";
  action: () => void;
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const handleCustomOpen = () => setOpen(true);

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("open-command-palette", handleCustomOpen);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("open-command-palette", handleCustomOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery("");
    }
  }, [open]);

  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    setOpen(false);
  };

  const jumpTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const items: CommandItem[] = [
    {
      id: "about",
      title: "About Preetish",
      subtitle: "Background, mindset, and experience overview",
      icon: <User size={16} />,
      category: "Navigation",
      action: () => jumpTo("about"),
    },
    {
      id: "experience",
      title: "Career & Experience",
      subtitle: "Passage, Bettermode, PromptCloud, TeamWave, Oracle",
      icon: <Briefcase size={16} />,
      category: "Navigation",
      action: () => jumpTo("experience"),
    },
    {
      id: "skills",
      title: "Skills & Toolset",
      subtitle: "Growth, GTM, analytics, lifecycle, and tech stack",
      icon: <Sparkles size={16} />,
      category: "Navigation",
      action: () => jumpTo("skills"),
    },
    {
      id: "philosophy",
      title: "Growth Philosophy",
      subtitle: "Core principles on simple consistency and systems thinking",
      icon: <BookOpen size={16} />,
      category: "Navigation",
      action: () => jumpTo("philosophy"),
    },
    {
      id: "growthlog",
      title: "Growth Log Newsletter",
      subtitle: "Read actionable SaaS growth guides on Substack",
      icon: <ExternalLink size={16} />,
      category: "Writing",
      action: () => {
        window.open(siteConfig.newsletterUrl, "_blank");
        setOpen(false);
      },
    },
    {
      id: "contact",
      title: "Get in Touch (Contact Form)",
      subtitle: "Send a message for advisory or growth opportunities",
      icon: <Mail size={16} />,
      category: "Navigation",
      action: () => jumpTo("contact"),
    },
    {
      id: "print-resume",
      title: "Print / Save Resume as PDF",
      subtitle: "Opens clean executive print format",
      icon: <FileDown size={16} />,
      category: "Actions",
      action: () => {
        setOpen(false);
        setTimeout(() => window.print(), 300);
      },
    },
    {
      id: "toggle-theme",
      title: "Toggle Light / Dark Mode",
      subtitle: "Switch between soothing light and dark palettes",
      icon: <Sun size={16} />,
      category: "Actions",
      action: toggleTheme,
    },
    {
      id: "linkedin",
      title: "LinkedIn Profile",
      subtitle: "linkedin.com/in/preetishpanda",
      icon: <LinkedInIcon size={16} />,
      category: "Social",
      action: () => {
        window.open("https://www.linkedin.com/in/preetishpanda/", "_blank");
        setOpen(false);
      },
    },
    {
      id: "twitter",
      title: "Twitter / X Profile",
      subtitle: "x.com/Pr33tish",
      icon: <TwitterIcon size={16} />,
      category: "Social",
      action: () => {
        window.open("https://x.com/Pr33tish", "_blank");
        setOpen(false);
      },
    },
    {
      id: "github",
      title: "GitHub Profile",
      subtitle: "github.com/Preetish",
      icon: <GitHubIcon size={16} />,
      category: "Social",
      action: () => {
        window.open("https://github.com/Preetish", "_blank");
        setOpen(false);
      },
    },
  ];

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDownInList = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % filteredItems.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      filteredItems[selectedIndex].action();
    }
  };

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "5rem 1rem 2rem",
        zIndex: 9999,
        animation: "fadeIn 0.15s ease-out",
      }}
      onClick={() => setOpen(false)}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "580px",
          backgroundColor: "var(--bg-surface)",
          border: "1px solid var(--border-subtle)",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--modal-shadow)",
          overflow: "hidden",
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDownInList}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.875rem 1.25rem",
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <Search size={18} color="var(--text-tertiary)" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "0.9375rem",
              color: "var(--text-primary)",
              fontFamily: "inherit",
            }}
          />
          <button
            onClick={() => setOpen(false)}
            aria-label="Close command palette"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 24,
              height: 24,
              borderRadius: "4px",
              color: "var(--text-tertiary)",
              cursor: "pointer",
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div
          style={{
            maxHeight: "360px",
            overflowY: "auto",
            padding: "0.5rem",
          }}
        >
          {filteredItems.length === 0 ? (
            <div
              style={{
                padding: "2rem 1rem",
                textAlign: "center",
                color: "var(--text-tertiary)",
                fontSize: "0.875rem",
              }}
            >
              No matching commands found.
            </div>
          ) : (
            filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={item.action}
                onMouseEnter={() => setSelectedIndex(idx)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.625rem 0.875rem",
                  borderRadius: "var(--radius-md)",
                  cursor: "pointer",
                  backgroundColor:
                    idx === selectedIndex ? "var(--bg-surface-elevated)" : "transparent",
                  transition: "background-color 0.15s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 28,
                      height: 28,
                      borderRadius: "6px",
                      backgroundColor: "var(--badge-bg)",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        color: "var(--text-primary)",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--text-tertiary)",
                      }}
                    >
                      {item.subtitle}
                    </div>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.6875rem",
                    color: "var(--text-tertiary)",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {item.category}
                </span>
              </div>
            ))
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.625rem 1rem",
            backgroundColor: "var(--bg-surface-elevated)",
            borderTop: "1px solid var(--border-subtle)",
            fontSize: "0.75rem",
            color: "var(--text-tertiary)",
          }}
        >
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <span>↑↓ Navigate</span>
            <span>↵ Select</span>
            <span>esc Close</span>
          </div>
          <span>Preetish.me</span>
        </div>
      </div>
    </div>
  );
}
