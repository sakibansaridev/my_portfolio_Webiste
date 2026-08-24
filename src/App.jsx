import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Strengths from "./components/Strengths";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThreeDBackground from "./components/ThreeDBackground";
import { CheckCircle2 } from "lucide-react";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("sakib-theme") || "dark";
  });

  const [toastMessage, setToastMessage] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sakib-theme", theme);
  }, [theme]);

  // Track scroll progress for 3D progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  return (
    <>
      {/* 3D Scroll Progress Indicator */}
      <div
        className="scroll-progress-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "4px",
          zIndex: 1000,
          background: "transparent",
        }}
      >
        <div
          className="scroll-progress-bar"
          style={{
            height: "100%",
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #6366f1, #06b6d4, #a855f7)",
            boxShadow: "0 0 12px rgba(99, 102, 241, 0.8)",
            transition: "width 0.1s ease-out",
          }}
        />
      </div>

      {/* 3D Interactive Particle & Geometry Background */}
      <ThreeDBackground />

      {/* Background Ambient Glow & Grid Pattern */}
      <div className="ambient-bg" aria-hidden="true">
        <div className="ambient-blob-1" />
        <div className="ambient-blob-2" />
        <div className="ambient-blob-3" />
        <div className="ambient-grid" />
      </div>

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Strengths />
        <Projects />
        <Skills />
        <Experience />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Toast Notification Popup */}
      {toastMessage && (
        <div className="toast-popup">
          <CheckCircle2 size={18} color="var(--accent-secondary)" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
