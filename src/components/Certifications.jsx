import { useState } from "react";

export default function Certifications() {
  const [preview, setPreview] = useState(null);

  const certs = [
    {
      title: "CJWAPT - Web Application Penetration Tester",
      issuer: "Cyber Security Training",
      link: "https://sturtles.in/?page=verify-certificate",
      image: ""
    },
    {
      title: "ISO/IEC 27001:2022 Lead Auditor",
      issuer: "ISO Certification Body",
      link: "https://learn.mastermindassurance.com/certificates/h5lsh2honf",
      image: ""
    },
    {
      title: "Cisco Ethical Hacker",
      issuer: "Cisco Networking Academy",
      link: "https://www.netacad.com/certificates/?issuanceId=ef3d53ef-d528-4135-9d24-541b5e26f762",
      image: ""
    },
    {
      title: "Endpoint Security",
      issuer: "Cisco Networking Academy",
      link: "https://www.netacad.com/certificates/?issuanceId=95de0397-8275-4504-ba46-8717e7640139",
      image: ""
    },
    {
      title: "CAPIJ - API Hacking Junior",
      issuer: "The XSS Rat",
      link: "https://thexssrat.podia.com/p/certificates/cert_8opI8JGA",
      image: ""
    },
    {
      title: "CCEP - Cybersecurity Educator Professional",
      issuer: "Red Team Leaders",
      link: "https://courses.redteamleaders.com/exam-completion/4ab8b4275091860a",
      image: ""
    },
    {
      title: "RATCTF Certification",
      issuer: "RATCTF Platform",
      link: "https://ratctf.thexssrat.com/users/suraj%20pun%20magar/certificates",
      image: ""
    }
  ];

  return (
    <section id="certifications" className="cert-section">

      <h1 className="section-title">
        Verified <span>Certifications</span>
      </h1>

      <p className="section-subtitle">
        Industry certifications, cybersecurity training & CTF achievements
      </p>

      <div className="grid">

        {certs.map((c, i) => (
          <div className="card cert-card" key={i}>

            <div className="cert-header">
              <h3>🏆 {c.title}</h3>
              <span className="tag">Verified</span>
            </div>

            <p className="cert-issuer">{c.issuer}</p>

            <div className="cert-actions">

              <a
                className="btn cert-btn"
                href={c.link}
                target="_blank"
                rel="noreferrer"
              >
                Verify
              </a>

              {c.image && (
                <button
                  className="btn cert-btn secondary"
                  onClick={() => setPreview(c.image)}
                >
                  View
                </button>
              )}

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {preview && (
        <div className="modal" onClick={() => setPreview(null)}>
          <div className="modal-box">
            <img src={preview} alt="certificate" />
          </div>
        </div>
      )}

    </section>
  );
}