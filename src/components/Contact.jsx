import { useState } from "react";
import { Mail, MessageCircle, Send, Check, Copy, Sparkles, MapPin } from "lucide-react";
import useReveal from "../useReveal";

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "WordPress Website",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const ref = useReveal();

  const myEmail = "sakibansaridev@gmail.com";
  const myWhatsApp = "919310150598";
  const myWhatsAppDisplay = "+91 9310150598";
  const myInstagram = "_sakibansari315_";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate submission / mailto trigger
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      if (onShowToast) onShowToast("Thank you! Your message has been prepared.");
      
      // Also open prefilled mailto as backup
      const mailtoUrl = `mailto:${myEmail}?subject=${encodeURIComponent(
        `Project Inquiry: ${formData.projectType} from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoUrl;
    }, 600);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(myEmail);
    if (onShowToast) {
      onShowToast("Email address copied to clipboard!");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="wrap">
        <div className="section-header text-left">
          <div className="eyebrow-pill">
            <Mail size={14} />
            <span>// Start a Conversation</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <br />
            <span className="gradient-accent">Extraordinary Together</span>
          </h2>
          <p className="section-subtitle">
            Have an upcoming project, freelance requirement, or agency opportunity?
            Send me a message or connect directly through WhatsApp or Email.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Left Column: Direct Channels */}
          <div ref={ref} className="reveal-fade contact-info-panel">
            <div>
              <h3 style={{ fontSize: "22px", marginBottom: "8px" }}>Direct Connect</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                Feel free to reach out directly through any of these platforms for fast responses:
              </p>

              <div className="contact-channels">
                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${myWhatsApp}?text=${encodeURIComponent("Hi Sakib, I visited your portfolio and would like to discuss a project.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-btn"
                >
                  <div className="contact-card-left">
                    <div className="contact-channel-icon icon-whatsapp">
                      <MessageCircle size={22} />
                    </div>
                    <div>
                      <div className="contact-channel-label">WhatsApp Quick Chat</div>
                      <div className="contact-channel-value">{myWhatsAppDisplay}</div>
                    </div>
                  </div>
                  <Sparkles size={16} color="var(--accent-secondary)" />
                </a>

                {/* Email Copy Card */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="contact-card-btn"
                  style={{ width: "100%", textAlign: "left" }}
                >
                  <div className="contact-card-left">
                    <div className="contact-channel-icon icon-email">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="contact-channel-label">Email (Click to Copy)</div>
                      <div className="contact-channel-value">{myEmail}</div>
                    </div>
                  </div>
                  <Copy size={16} color="var(--accent-primary)" />
                </button>

                {/* Instagram */}
                <a
                  href={`https://instagram.com/${myInstagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-btn"
                >
                  <div className="contact-card-left">
                    <div className="contact-channel-icon icon-instagram">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </div>
                    <div>
                      <div className="contact-channel-label">Instagram Profile</div>
                      <div className="contact-channel-value">@{myInstagram}</div>
                    </div>
                  </div>
                  <span style={{ fontSize: "12px", color: "var(--text-muted)" }}>Follow</span>
                </a>
              </div>
            </div>

            {/* Location & Availability Note */}
            <div
              style={{
                padding: "20px",
                borderRadius: "var(--radius-md)",
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--text-primary)", fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>
                <MapPin size={16} color="var(--accent-primary)" />
                <span>Delhi, India • Open Worldwide</span>
              </div>
              <p style={{ fontSize: "13px", color: "var(--text-secondary)", margin: 0 }}>
                Available for remote freelance contracts, full-time positions, and hybrid agency roles.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="reveal-fade">
            <div className="contact-form-card">
              <h3 style={{ fontSize: "20px", marginBottom: "6px" }}>Send a Direct Message</h3>
              <p style={{ color: "var(--text-secondary)", fontSize: "13.5px", marginBottom: "24px" }}>
                Fill in the details and I'll get back to you within 24 hours.
              </p>

              {isSuccess && (
                <div className="form-status-alert status-success">
                  <Check size={18} />
                  <span>Message draft prepared! Check your email client to dispatch.</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="e.g. John Doe"
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="e.g. john@example.com"
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="projectType">
                    Project / Inquiry Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="form-select"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="WordPress Website">WordPress / Elementor Website</option>
                    <option value="React Web Application">React.js Web Application</option>
                    <option value="Figma to Frontend Code">Figma / UI to Clean Code</option>
                    <option value="Agency / Full-Time Role">Full-Time / Agency Opportunity</option>
                    <option value="Other Project">Other Inquiry</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">
                    Project Details / Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Briefly describe your project requirements, goals, or timeline..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ width: "100%", marginTop: "10px" }}
                >
                  {isSubmitting ? (
                    <span>Preparing Message...</span>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
