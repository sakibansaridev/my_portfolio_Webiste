import { useState, useEffect } from "react";
import { Sun, Moon, Menu, X, ArrowUpRight, Code2 } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="wrap navbar-inner">
        {/* Brand Logo */}
        <a href="#top" className="navbar-brand">
          <div className="brand-icon">
            <Code2 size={20} />
          </div>
          <span>
            Sakib Ansari<span className="brand-dot">.</span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav>
          <ul className="nav-links-desktop">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="nav-link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls */}
        <div className="navbar-controls">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark/light theme"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hire Me CTA */}
          <a href="#contact" className="btn btn-primary btn-sm" style={{ display: "inline-flex" }}>
            <span>Hire Me</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileOpen ? "open" : ""}`}>
        <ul className="mobile-drawer-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-drawer-link"
                onClick={closeMobileMenu}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={18} />
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: "auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={closeMobileMenu}
          >
            Start a Project
          </a>
        </div>
      </div>
    </header>
  );
}
