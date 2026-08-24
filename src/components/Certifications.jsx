import useReveal from "../useReveal";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section className="certs" id="certifications">
      <div className="wrap">
        <div className="section-head-row">
          <p className="eyebrow">Credentials</p>
          <h2 className="section-heading">Certifications</h2>
        </div>

        <div ref={ref} className="reveal cert-card">
          <div className="cert-mark">DS</div>

          <div className="cert-info">
            <div className="cert-role">Website Design &amp; Development Intern</div>
            <div className="cert-org">Danstring Technologies</div>
            <div className="cert-meta">13 APR 2026 — 15 JUN 2026 · 2-MONTH PROGRAM</div>
            <p className="cert-desc">
              Completed a 2-month internship focused on website design and
              development, contributing to live client projects and
              collaborating directly with the agency team from brief to
              delivery.
            </p>
            <div className="cert-projects">
              <span>SDMI Academy</span>
              <span>Inspire Physics</span>
              <span>Tirsha Healthcare</span>
            </div>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}danstring-internship-certificate.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-dark"
          >
            View Certificate
          </a>
        </div>
      </div>
    </section>
  );
}
