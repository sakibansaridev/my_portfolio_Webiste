import { useState } from "react";
import { MapPin, Code, Rocket, ShieldCheck, Palette, Award, Terminal, CheckCircle2, Sparkles } from "lucide-react";
import useReveal from "../useReveal";
import TiltCard from "./TiltCard";

export default function About() {
  const [activeTab, setActiveTab] = useState("story");
  const ref = useReveal();

  const tabContent = {
    story: {
      title: "Self-Taught Hustle to Agency Delivery",
      text: [
        "My journey in web development started with pure curiosity and a relentless commitment to mastering the craft. Rather than taking shortcuts, I spent countless hours mastering the core building blocks: HTML5 semantic structure, modern CSS3 layout engines, and vanilla JavaScript logic.",
        "That strong foundation earned me a 2-month intensive Website Design & Development internship at Danstring Technologies. There, I collaborated directly with agency teams to design, develop, test, and ship real commercial web applications for international clients.",
        "Today, I operate at the intersection of modern React engineering and robust WordPress CMS architecture, building pixel-accurate, ultra-fast websites for businesses, startups, and agencies.",
      ],
    },
    philosophy: {
      title: "Pixel Precision & Performance-First",
      text: [
        "I believe a website should be more than just pretty visuals — it must be blindingly fast, intuitive to navigate, and convert visitors into clients.",
        "Every layout I write is built mobile-first, ensuring zero layout shifts (CLS), lightning-quick load times, and clean semantic code that search engines love.",
        "Whether translating a complex Figma design or building a custom WordPress Elementor portal, I treat every project with meticulous attention to detail.",
      ],
    },
    value: {
      title: "What I Bring to Your Project or Agency",
      text: [
        "1. Rapid Prototyping & Delivery: Fast turnaround without sacrificing code quality or visual fidelity.",
        "2. Agency-Level QA Standards: Every project undergoes rigorous multi-device testing, speed audits, and cross-browser validation.",
        "3. Clear & Transparent Communication: Daily updates, disciplined version control, and dependable project execution from kickoff to launch.",
      ],
    },
  };

  const keyStrengths = [
    {
      icon: <Code size={20} />,
      title: "Clean React & Modern JS",
      desc: "Component-driven architecture, custom hooks, and modular clean styling.",
    },
    {
      icon: <Palette size={20} />,
      title: "WordPress & Elementor Master",
      desc: "Custom themes, WooCommerce setups, dynamic post types, and speed tuning.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Danstring Agency Trained",
      desc: "Shipped SDMI Academy, Inspire Physics UK, and Tirsha Healthcare live.",
    },
    {
      icon: <Rocket size={20} />,
      title: "SEO & Core Web Vitals",
      desc: "Lightweight bundle sizes, optimized assets, and high Google PageSpeed scores.",
    },
  ];

  return (
    <section className="about-section" id="about">
      <div className="wrap">
        <div className="section-header text-left">
          <div className="eyebrow-pill">
            <Terminal size={13} />
            <span>// About Sakib Ansari</span>
          </div>
          <h2 className="section-title">
            Passionate Developer Building with <br />
            <span className="gradient-accent">3D Precision &amp; Agency Standards</span>
          </h2>
          <p className="section-subtitle">
            Get to know my journey, design mindset, and how I turn complex requirements
            into high-impact digital experiences.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: 3D Tilt Photo Showcase */}
          <div ref={ref} className="reveal-fade">
            <TiltCard
              maxTilt={12}
              scale={1.02}
              className="about-photo-tilt-wrapper"
              style={{ maxWidth: "440px", margin: "0 auto" }}
            >
              <div className="about-photo-card" style={{ position: "relative" }}>
                {/* Glowing Holographic Halo */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-2px",
                    borderRadius: "inherit",
                    background: "linear-gradient(135deg, rgba(99,102,241,0.6), rgba(6,182,212,0.6), rgba(168,85,247,0.6))",
                    zIndex: -1,
                    filter: "blur(10px)",
                    opacity: 0.7,
                  }}
                />

                <img
                  src="/sakib-photo.jpg"
                  alt="Sakib Ansari - Frontend & WordPress Developer"
                  loading="lazy"
                  style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "top center" }}
                />

                {/* Floating Tech Badges on Photo */}
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    padding: "6px 12px",
                    background: "rgba(7, 9, 14, 0.85)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.15)",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "var(--accent-secondary)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
                  }}
                >
                  <Sparkles size={13} color="var(--accent-primary)" />
                  <span>Frontend &amp; WordPress</span>
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "56px",
                    left: "16px",
                    padding: "6px 12px",
                    background: "rgba(7, 9, 14, 0.85)",
                    backdropFilter: "blur(10px)",
                    borderRadius: "20px",
                    border: "1px solid rgba(16,185,129,0.3)",
                    fontSize: "11.5px",
                    fontWeight: 600,
                    color: "#34d399",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  <Award size={13} />
                  <span>Danstring Intern Alumni</span>
                </div>

                {/* Bottom Overlay Badge */}
                <div className="photo-overlay-badge">
                  <div>
                    <div className="photo-badge-title">Sakib Ansari</div>
                    <div className="photo-badge-loc">
                      <MapPin size={13} />
                      <span>Delhi, India • Open for Work</span>
                    </div>
                  </div>
                  <div className="status-dot" title="Available for Freelance & Full-time" />
                </div>
              </div>
            </TiltCard>

            {/* Quick Stats Grid under Photo */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "12px",
                marginTop: "20px",
                maxWidth: "440px",
                margin: "20px auto 0",
              }}
            >
              <div
                style={{
                  padding: "12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--accent-primary)", fontFamily: "var(--font-display)" }}>
                  6+
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>
                  Shipped Sites
                </div>
              </div>

              <div
                style={{
                  padding: "12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--accent-secondary)", fontFamily: "var(--font-display)" }}>
                  2 Mo.
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>
                  Agency Intern
                </div>
              </div>

              <div
                style={{
                  padding: "12px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-subtle)",
                  borderRadius: "var(--radius-md)",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "20px", fontWeight: 800, color: "#34d399", fontFamily: "var(--font-display)" }}>
                  100%
                </div>
                <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>
                  Self-Driven
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Narrative & Interactive Tabs */}
          <div className="reveal-fade about-content-block">
            {/* Interactive Story Tabs */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                marginBottom: "24px",
                padding: "6px",
                background: "var(--bg-card)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-subtle)",
                width: "fit-content",
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={() => setActiveTab("story")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: activeTab === "story" ? "var(--accent-primary)" : "transparent",
                  color: activeTab === "story" ? "#fff" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                My Journey
              </button>
              <button
                onClick={() => setActiveTab("philosophy")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: activeTab === "philosophy" ? "var(--accent-primary)" : "transparent",
                  color: activeTab === "philosophy" ? "#fff" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                Design Philosophy
              </button>
              <button
                onClick={() => setActiveTab("value")}
                style={{
                  padding: "8px 16px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "13px",
                  fontWeight: 600,
                  background: activeTab === "value" ? "var(--accent-primary)" : "transparent",
                  color: activeTab === "value" ? "#fff" : "var(--text-secondary)",
                  transition: "all 0.2s ease",
                }}
              >
                Why Work With Me
              </button>
            </div>

            {/* Tab Narrative Display */}
            <div
              style={{
                padding: "24px",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                borderRadius: "var(--radius-lg)",
                marginBottom: "28px",
              }}
            >
              <h3 style={{ fontSize: "19px", marginBottom: "14px", color: "var(--text-primary)" }}>
                {tabContent[activeTab].title}
              </h3>
              {tabContent[activeTab].text.map((para, pIdx) => (
                <p key={pIdx} style={{ fontSize: "14.5px", lineHeight: "1.75", marginBottom: pIdx === tabContent[activeTab].text.length - 1 ? 0 : "12px", color: "var(--text-secondary)" }}>
                  {para}
                </p>
              ))}
            </div>

            {/* 4 Pillars Highlights Grid */}
            <div className="highlights-grid">
              {keyStrengths.map((item, idx) => (
                <div className="highlight-item" key={idx}>
                  <div className="highlight-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
