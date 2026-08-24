import { ArrowUp, Code2, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          {/* Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div className="brand-icon" style={{ width: "32px", height: "32px", fontSize: "14px" }}>
              <Code2 size={16} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: "16px" }}>
                Sakib Ansari<span style={{ color: "var(--accent-secondary)" }}>.</span>
              </div>
              <div style={{ fontSize: "12px", color: "var(--text-muted)" }}>
                Frontend &amp; WordPress Developer • Delhi, India
              </div>
            </div>
          </div>

          {/* Quick Links & Socials */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "20px", fontSize: "13.5px" }}>
            <a href="#about" style={{ color: "var(--text-secondary)" }}>About</a>
            <a href="#projects" style={{ color: "var(--text-secondary)" }}>Projects</a>
            <a href="#skills" style={{ color: "var(--text-secondary)" }}>Skills</a>
            <a href="#experience" style={{ color: "var(--text-secondary)" }}>Experience</a>
            <a href="#contact" style={{ color: "var(--text-secondary)" }}>Contact</a>
            <span style={{ color: "var(--border-subtle)" }}>|</span>
            <a
              href="https://wa.me/919310150598"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#25d366", fontWeight: 600 }}
              title="Chat on WhatsApp"
            >
              WhatsApp
            </a>
            <a
              href="https://instagram.com/_sakibansari315_"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--accent-secondary)", fontWeight: 600 }}
              title="Instagram Profile"
            >
              @_sakibansari315_
            </a>
          </div>

          {/* Back to Top */}
          <button onClick={scrollToTop} className="scroll-top-btn">
            <span>Back to Top</span>
            <ArrowUp size={15} />
          </button>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Sakib Ansari. All rights reserved.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Designed &amp; Developed with</span>
            <Heart size={14} color="#f43f5e" fill="#f43f5e" />
            <span>in Delhi, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
