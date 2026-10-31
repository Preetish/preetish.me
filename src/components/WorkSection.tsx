import { projects, papers } from "@/data/work";
import { ArrowUpRight, FileText } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";

export function WorkSection() {
  return (
    <div className="work-grid">
      {/* Open Source */}
      <div>
        <div className="work-group-label">Open source</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"
              id={`project-${project.name.toLowerCase()}`}
            >
              <div className="work-card-header">
                <div className="bio-pillar-icon">
                  <GitHubIcon size={15} />
                </div>
                <ArrowUpRight size={17} className="work-card-arrow" />
              </div>
              <h3 className="work-card-title">{project.name}</h3>
              <p className="work-card-tagline">{project.tagline}</p>
              <p className="work-card-body">{project.description}</p>
              <div className="work-card-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="work-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Research */}
      <div>
        <div className="work-group-label">Published research</div>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {papers.map((paper, idx) => (
            <a
              key={paper.url}
              href={paper.url}
              target="_blank"
              rel="noopener noreferrer"
              className="work-card"
              id={`paper-${idx + 1}`}
            >
              <div className="work-card-header">
                <div className="bio-pillar-icon">
                  <FileText size={15} />
                </div>
                <ArrowUpRight size={17} className="work-card-arrow" />
              </div>
              <h3 className="work-card-title work-card-title--paper">{paper.title}</h3>
              <p className="work-card-body">{paper.summary}</p>
              <div className="work-card-meta">
                {paper.publisher} · {paper.venue} · {paper.year}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
