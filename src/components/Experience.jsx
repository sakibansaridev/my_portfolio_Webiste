import { Award, Briefcase, Calendar, CheckCircle2, FileText, ExternalLink } from "lucide-react";
import useReveal from "../useReveal";

export default function Experience() {
  const ref = useReveal();

  const experiences = [
    {
      period: "13 APR 2026 — 15 JUN 2026",
      role: "Website Design & Development Intern",
      company: "Danstring Technologies",
      location: "Delhi / Remote",
      desc: "Completed an intensive 2-month professional agency internship. Collaborated with design and development teams to architect, build, QA, and deploy commercial client web projects.",
      projects: ["SDMI Academy", "Inspire Physics (UK)", "Tirsha Healthcare"],
      certificateLink: "/danstring-internship-certificate.pdf",
    },
    {
      period: "2025 — PRESENT",
      role: "Freelance Frontend & WordPress Developer",
      company: "Independent Client Practice",
      location: "Delhi, India",
      desc: "Architecting bespoke websites for local businesses, fitness centers, and restaurants. Creating custom themes, responsive interfaces, and interactive React applications.",
      projects: ["ScrapMe Web App", "Kesar Restaurant", "Egyptian Muscle Gym"],
      certificateLink: null,
    },
  ];

  return (
    <section className="experience-section" id="experience">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow-pill">
            <Briefcase size={14} />
            <span>// Career &amp; Experience</span>
          </div>
          <h2 className="section-title">
            Professional Experience &amp; <br />
            <span className="gradient-accent">Agency Credentials</span>
          </h2>
          <p className="section-subtitle">
            Hands-on commercial agency background combined with self-driven
            development practice and verified certification.
          </p>
        </div>

        <div ref={ref} className="reveal-fade experience-timeline">
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-date-badge">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </div>

                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company} • {exp.location}</div>
                <p className="timeline-desc">{exp.desc}</p>

                {/* Shipped deliverables */}
                <div style={{ marginBottom: "16px" }}>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)", display: "block", marginBottom: "8px", fontWeight: 600 }}>
                    KEY DELIVERABLES:
                  </span>
                  <div className="timeline-project-tags">
                    {exp.projects.map((p, pIdx) => (
                      <span className="tech-pill" key={pIdx} style={{ color: "var(--accent-secondary)", borderColor: "rgba(6, 182, 212, 0.3)" }}>
                        ✓ {p}
                      </span>
                    ))}
                  </div>
                </div>

                {exp.certificateLink && (
                  <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "var(--accent-emerald)" }}>
                      <Award size={16} />
                      <span>Verified Certificate Issued</span>
                    </div>
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary btn-sm"
                    >
                      <FileText size={14} />
                      <span>View Danstring Certificate (PDF)</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
