import { useState } from "react";
import { ArrowRight, Download, Check, Copy, Sparkles, Terminal } from "lucide-react";
import useReveal from "../useReveal";
import TiltCard from "./TiltCard";

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const ref = useReveal();

  const codeSnippet = `const developer = {
  name: "Sakib Ansari",
  role: "Frontend & WordPress Developer",
  location: "Delhi, India",
  skills: ["React", "JavaScript", "WordPress", "Elementor", "CSS3/Tailwind"],
  experience: "Danstring Technologies (Internship)",
  openForOpportunities: true,
  buildQuality: "100% Pixel-Accurate & Fast"
};`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="hero-section" id="top">
      <div className="wrap">
        <div className="hero-grid">
          {/* Left Column: Intro & Pitch */}
          <div ref={ref} className="reveal-fade">
            {/* Status Pill */}
            <div className="hero-status-badge">
              <span className="status-dot" />
              <span>Available for Freelance &amp; Full-Time Roles</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-headline">
              Crafting Modern, <br />
              <span className="gradient-accent">High-Performance</span> <br />
              Web Experiences.
            </h1>

            {/* Subtitle */}
            <p className="hero-description">
              Hi, I'm <strong>Sakib Ansari</strong> — a passionate Frontend &amp;
              WordPress Developer based in Delhi. I transform creative ideas and design
              files into fast, responsive, and pixel-perfect web applications.
            </p>

            {/* Action Buttons */}
            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary btn-lg">
                <span>Explore Projects</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary btn-lg">
                <span>Get In Touch</span>
              </a>

              <a
                href="/danstring-internship-certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <Download size={16} />
                <span>Certificate</span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="hero-stats-row">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Projects Shipped</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2 mo.</span>
                <span className="stat-label">Agency Internship</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client Dedication</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Code Terminal Card */}
          <div className="reveal-fade">
            <TiltCard maxTilt={10} scale={1.02}>
              <div className="code-terminal-card">
                {/* Terminal Title Bar */}
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="terminal-dot dot-red" />
                    <span className="terminal-dot dot-yellow" />
                    <span className="terminal-dot dot-green" />
                  </div>
                  <div className="terminal-title">
                    <Terminal size={12} style={{ display: "inline", marginRight: "6px" }} />
                    developer.config.ts
                  </div>
                  <button
                    onClick={handleCopyCode}
                    className="terminal-copy-btn"
                    title="Copy snippet"
                  >
                    {copied ? (
                      <>
                        <Check size={13} color="#10b981" />
                        <span style={{ color: "#10b981" }}>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Terminal Code Body */}
                <div className="terminal-body">
                  <div>
                    <span className="code-keyword">const </span>
                    <span className="code-var">developer </span>
                    <span className="code-punct">= </span>
                    <span className="code-punct">&#123;</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="code-prop">name</span>
                    <span className="code-punct">: </span>
                    <span className="code-str">"Sakib Ansari"</span>
                    <span className="code-punct">,</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="code-prop">role</span>
                    <span className="code-punct">: </span>
                    <span className="code-str">"Frontend &amp; WordPress Dev"</span>
                    <span className="code-punct">,</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="code-prop">location</span>
                    <span className="code-punct">: </span>
                    <span className="code-str">"Delhi, India"</span>
                    <span className="code-punct">,</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="code-prop">stack</span>
                    <span className="code-punct">: [</span>
                    <span className="code-str">"React"</span>
                    <span className="code-punct">, </span>
                    <span className="code-str">"JavaScript"</span>
                    <span className="code-punct">, </span>
                    <span className="code-str">"WordPress"</span>
                    <span className="code-punct">],</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="code-comment">// Danstring Tech Experience</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="code-prop">agencyTrained</span>
                    <span className="code-punct">: </span>
                    <span className="code-bool">true</span>
                    <span className="code-punct">,</span>
                  </div>
                  <div>
                    &nbsp;&nbsp;<span className="code-prop">openToWork</span>
                    <span className="code-punct">: </span>
                    <span className="code-bool">true</span>
                    <span className="code-punct">,</span>
                  </div>
                  <div>
                    <span className="code-punct">&#125;;</span>
                    <span className="blinking-cursor" />
                  </div>
                </div>

                {/* Terminal Footer */}
                <div className="terminal-footer-badge">
                  <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                    <Sparkles size={13} color="var(--accent-secondary)" />
                    Ready to build something exceptional
                  </span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "var(--accent-emerald)" }}>
                    ● Active
                  </span>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
