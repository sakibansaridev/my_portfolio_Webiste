import { Zap, Layout, CheckCircle, Smartphone } from "lucide-react";
import useReveal from "../useReveal";

export default function Strengths() {
  const ref = useReveal();

  const strengths = [
    {
      icon: <Layout size={26} />,
      title: "Pixel-Perfect Conversion",
      desc: "Transform Figma, Adobe XD, or custom design concepts into 100% accurate, responsive code without layout compromises.",
    },
    {
      icon: <Zap size={26} />,
      title: "Speed & Performance",
      desc: "Lightweight, optimized asset delivery, lazy loading, and modern build setups ensuring top-tier Google PageSpeed scores.",
    },
    {
      icon: <Smartphone size={26} />,
      title: "Mobile-First Design",
      desc: "Flawless rendering and intuitive touch interactions across smartphones, tablets, laptops, and ultra-wide screens.",
    },
    {
      icon: <CheckCircle size={26} />,
      title: "Reliable & Committed",
      desc: "Clear timelines, proactive communication, and disciplined version control workflow from project start to final launch.",
    },
  ];

  return (
    <section className="strengths-section" style={{ background: "rgba(255, 255, 255, 0.01)" }}>
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow-pill">
            <Zap size={14} />
            <span>// Why Work With Me</span>
          </div>
          <h2 className="section-title">
            Committed to Quality, <br />
            <span className="gradient-accent">Built for Results</span>
          </h2>
          <p className="section-subtitle">
            Every website I develop is engineered for aesthetic excellence, high
            conversion, and long-term maintainability.
          </p>
        </div>

        <div ref={ref} className="reveal-fade features-grid">
          {strengths.map((s, idx) => (
            <div className="feature-box" key={idx}>
              <div className="feature-icon-wrapper">{s.icon}</div>
              <h3 className="feature-title">{s.title}</h3>
              <p className="feature-text">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
