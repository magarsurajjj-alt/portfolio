export default function Projects() {
  const projects = [
    {
      title: "File Upload Vulnerabilities - PortSwigger Labs",
      desc: "Web penetration testing focused on bypassing upload restrictions."
    },
    {
      title: "RDP Brute Force Attack Investigation (Splunk)",
      desc: "SOC log analysis for brute force detection and response."
    },
    {
      title: "n8n SOC Threat Detection Automation",
      desc: "SOAR automation workflow for security event detection."
    },
    {
      title: "SMB Lateral Movement Forensics",
      desc: "Network packet analysis and incident response investigation."
    },
    {
      title: "OWASP API Top 10 Security Testing",
      desc: "API penetration testing based on OWASP standards."
    },
    {
      title: "Splunk Security Dashboards",
      desc: "Log monitoring dashboards for SOC environments."
    }
  ];

  return (
    <section id="projects">
      <h1>
        Security <span>Projects</span>
      </h1>

      <div className="grid">
        {projects.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>

      {/* GitHub Button */}
      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <a
          href="https://github.com/magarsurajjj-alt?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          View All GitHub Repositories
        </a>
      </div>
    </section>
  );
}