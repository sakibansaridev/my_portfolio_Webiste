import { Code2, Globe, Cpu, Wrench, CheckCircle } from "lucide-react";
import useReveal from "../useReveal";
import TiltCard from "./TiltCard";

const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: <Code2 size={22} />,
    skills: [
      { name: "HTML5 & Semantic Markup", level: "Expert", progress: 95 },
      { name: "CSS3 / Flexbox / Grid", level: "Expert", progress: 92 },
      { name: "JavaScript (ES6+)", level: "Advanced", progress: 85 },
      { name: "React.js & Hooks", level: "Intermediate+", progress: 80 },
      { name: "Responsive Web Design", level: "Expert", progress: 95 },
    ],
  },
  {
    title: "WordPress & CMS",
    icon: <Globe size={22} />,
    skills: [
      { name: "WordPress Architecture", level: "Advanced", progress: 88 },
      { name: "Elementor & Elementor Pro", level: "Expert", progress: 92 },
      { name: "WooCommerce Store Setup", level: "Intermediate", progress: 78 },
      { name: "Custom CSS / Page Styling", level: "Expert", progress: 90 },
      { name: "Speed & SEO Optimization", level: "Advanced", progress: 82 },
    ],
  },
  {
    title: "UI Design & Workflow",
    icon: <Wrench size={22} />,
    skills: [
      { name: "Figma to Code Translation", level: "Advanced", progress: 88 },
      { name: "Lovable.dev Rapid Prototyping", level: "Expert", progress: 90 },
      { name: "Git & GitHub Version Control", level: "Intermediate", progress: 80 },
      { name: "Vite & Modern Build Tools", level: "Intermediate+", progress: 82 },
      { name: "Cross-Browser Testing & QA", level: "Advanced", progress: 88 },
    ],
  },
];

export default function Skills() {
  const ref = useReveal();

  return (
    <section className="skills-section" id="skills">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow-pill">
            <Cpu size={14} />
            <span>// Tech Stack &amp; Skills</span>
          </div>
          <h2 className="section-title">
            Technologies &amp; <br />
            <span className="gradient-accent">Development Toolkit</span>
          </h2>
          <p className="section-subtitle">
            A comprehensive overview of my technical proficiencies across frontend
            engineering, CMS customization, and modern UI tooling.
          </p>
        </div>

        <div ref={ref} className="reveal-fade skills-container">
          {SKILL_CATEGORIES.map((category, idx) => (
            <TiltCard key={idx} maxTilt={7} scale={1.02} style={{ height: "100%" }}>
              <div className="skill-category-card" style={{ height: "100%" }}>
                <div className="category-header">
                  <div className="category-icon-box">{category.icon}</div>
                  <h3 className="category-title">{category.title}</h3>
                </div>

                <div className="skill-item-list">
                  {category.skills.map((skill, sIdx) => (
                    <div className="skill-bar-item" key={sIdx}>
                      <div className="skill-name-row">
                        <span>{skill.name}</span>
                        <span className="skill-level-badge">{skill.level}</span>
                      </div>
                      <div className="skill-progress-track">
                        <div
                          className="skill-progress-fill"
                          style={{ width: `${skill.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
