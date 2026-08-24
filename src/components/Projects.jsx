import { useState } from "react";
import { ExternalLink, Layers, CheckCircle2 } from "lucide-react";
import useReveal from "../useReveal";
import TiltCard from "./TiltCard";

const PROJECTS = [
  {
    initials: "SD",
    category: "agency",
    tag: "Agency Internship",
    tagClass: "tag-agency",
    title: "SDMI Academy",
    desc: "Comprehensive educational institute website built during internship at Danstring Technologies. Features structured course catalogs, lead generation forms, and responsive mobile-first UI.",
    tech: ["WordPress", "Elementor", "CSS3", "Responsive UI"],
    highlights: ["Live client project", "Form integration", "Fast page loads"],
    link: "#",
  },
  {
    initials: "IP",
    category: "agency",
    tag: "Agency Internship",
    tagClass: "tag-agency",
    title: "Inspire Physics",
    desc: "UK-based physics lab equipment & e-commerce website. Delivered with an exhaustive 42-point QA and cross-browser responsiveness audit.",
    tech: ["WordPress", "WooCommerce", "HTML5", "CSS3", "JavaScript"],
    highlights: ["UK client delivery", "42-point QA audit", "E-commerce layout"],
    link: "#",
  },
  {
    initials: "TH",
    category: "agency",
    tag: "Agency Internship",
    tagClass: "tag-agency",
    title: "Tirsha Healthcare",
    desc: "Modern healthcare services portal built at Danstring Technologies, designed for optimal patient accessibility, service listings, and clean visual branding.",
    tech: ["WordPress", "Elementor Pro", "SEO", "Custom CSS"],
    highlights: ["Healthcare branding", "Appointment CTA flow", "Mobile tested"],
    link: "#",
  },
  {
    initials: "SM",
    category: "react",
    tag: "React / Web App",
    tagClass: "tag-react",
    title: "ScrapMe Smartphone Buyback",
    desc: "Dynamic web application featuring a multi-step device valuation funnel, live dynamic pricing calculation, instant quote generation, and interactive auth modal.",
    tech: ["React", "JavaScript", "CSS Modules", "State Management"],
    highlights: ["Multi-step form engine", "Real-time quote math", "Interactive modal"],
    link: "#",
  },
  {
    initials: "KR",
    category: "wordpress",
    tag: "Freelance & UI",
    tagClass: "tag-wordpress",
    title: "Kesar Restaurant",
    desc: "End-to-end luxury restaurant website featuring interactive menu categories, reservation request module, and atmospheric visual storytelling.",
    tech: ["WordPress / Web", "Lovable.dev", "CSS Grid", "Animations"],
    highlights: ["Interactive food menu", "Table booking UI", "Modern aesthetics"],
    link: "#",
  },
  {
    initials: "EG",
    category: "wordpress",
    tag: "Freelance & UI",
    tagClass: "tag-wordpress",
    title: "Egyptian Muscle Gym",
    desc: "High-energy fitness and gym website designed from Google Maps local research through full production launch, including membership pricing tables and trainer profiles.",
    tech: ["Web Design", "Lovable.dev", "Responsive Design", "Custom CSS"],
    highlights: ["Tiered pricing matrix", "Class schedule grid", "High conversion CTA"],
    link: "#",
  },
];

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "agency", label: "Agency Client Work" },
  { id: "react", label: "React & Web Apps" },
  { id: "wordpress", label: "WordPress & CMS" },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const ref = useReveal();

  const filteredProjects =
    activeTab === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section className="projects-section" id="projects">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow-pill">
            <Layers size={14} />
            <span>// Featured Portfolio</span>
          </div>
          <h2 className="section-title">
            Featured Projects &amp; <br />
            <span className="gradient-accent">Client Deliverables</span>
          </h2>
          <p className="section-subtitle">
            A curated selection of live commercial client work from my agency
            internship alongside independent web applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`filter-btn ${activeTab === cat.id ? "active" : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div ref={ref} className="reveal-fade projects-grid">
          {filteredProjects.map((project, index) => (
            <TiltCard key={index} maxTilt={8} scale={1.02} style={{ height: "100%" }}>
              <article className="project-card" style={{ height: "100%" }}>
                {/* Project Banner */}
                <div className="project-banner">
                  <div className="project-banner-pattern" />
                  <div className="project-initials-badge">{project.initials}</div>
                  <span className={`project-badge-tag ${project.tagClass}`}>
                    {project.tag}
                  </span>
                </div>

                {/* Card Body */}
                <div className="project-body">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.desc}</p>

                  {/* Highlights List */}
                  <div style={{ marginBottom: "16px", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {project.highlights.map((h, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "6px",
                          fontSize: "12.5px",
                          color: "var(--text-secondary)",
                        }}
                      >
                        <CheckCircle2 size={13} color="var(--accent-primary)" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Pills */}
                  <div className="project-tech-tags">
                    {project.tech.map((t, idx) => (
                      <span className="tech-pill" key={idx}>
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Footer Link */}
                  <div className="project-footer-actions">
                    <a
                      href="#contact"
                      className="project-action-link"
                    >
                      <span>Inquire about this build</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </article>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
