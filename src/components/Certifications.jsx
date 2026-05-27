import { useState } from "react";

export default function Certifications() {
  const [preview, setPreview] = useState(null);

  const certs = [
    {
      title: "CJWAPT - Certified Web Application Penetration Tester",
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
      title: "Cisco Ethical Hacker (Networking Academy)",
      issuer: "Cisco",
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
      title: "CAPIJ - Certified API Hacking Junior",
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
      title: "RATCTF-certificate",
      issuer: "RatCtf",
      link: "https://ratctf.thexssrat.com/users/suraj%20pun%20magar/certificates",
      image: ""
    }
  ];

  return (
    <section id="certifications">
      <h1>
        Verified <span>Certifications</span>
      </h1>

      <div className="grid">
        {certs.map((c, i) => (
          <div className="card" key={i}>
            <h3>🏆 {c.title}</h3>
            <p>{c.issuer}</p>

            <div style={{ marginTop: "12px", display: "flex", gap: "10px", flexWrap: "wrap" }}>
              <a className="btn" href={c.link} target="_blank">
                Verify
              </a>

              {c.image && (
                <button
                  className="btn"
                  onClick={() => setPreview(c.image)}
                >
                  View Certificate
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* IMAGE PREVIEW MODAL */}
      {preview && (
        <div className="modal" onClick={() => setPreview(null)}>
          <div className="modal-box">
            <img src={preview} alt="certificate" style={{ width: "100%" }} />
          </div>
        </div>
      )}
    </section>
  );
}