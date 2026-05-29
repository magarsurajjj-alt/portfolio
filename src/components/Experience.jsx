export default function Experience() {
  return (
    <section className="experience-section" id="experience">

      <h1 className="section-title">
        Experience <span>& VAPT Work</span>
      </h1>

      <div className="grid">

        {/* CUBE TECHNOLOGIES */}
        <div className="card">
          <h3>VAPT Intern / Security Tester</h3>
          <p>
            Cube Technologies Pvt. Ltd.  
            Conducted Vulnerability Assessment & Penetration Testing (VAPT)
            on web applications and internal systems. Identified security
            flaws, analyzed risk impact, and reported findings with mitigation steps.
          </p>
          <span className="tag">VAPT • Web Security • Risk Analysis</span>
        </div>

        {/* INSURANCE SECTOR */}
        <div className="card">
          <h3>VAPT Projects – Insurance Sector</h3>
          <p>
            Performed security testing for multiple insurance organizations
            including Nepal Reinsurance, Sunlife Insurance, Crest Insurance,
            Micro Insurance, and LIC Nepal. Focused on web vulnerabilities,
            authentication issues, and OWASP Top 10 risks.
          </p>
          <span className="tag">OWASP • Enterprise Security • VAPT</span>
        </div>

        {/* SOC ANALYST */}
        <div className="card">
          <h3>SOC Analyst (Blue Team Simulation)</h3>
          <p>
            Monitored logs, analyzed alerts, and investigated incidents using
            SIEM tools like Splunk. Worked on detection rules, threat analysis,
            and incident response workflows.
          </p>
          <span className="tag">SOC • SIEM • Splunk</span>
        </div>

        {/* BUG BOUNTY */}
        <div className="card">
          <h3>Bug Bounty & Web Security Research</h3>
          <p>
            Conducted ethical hacking and vulnerability research on web applications.
            Focused on recon, exploitation techniques, and responsible disclosure practices.
          </p>
          <span className="tag">Bug Bounty • Recon • Ethical Hacking</span>
        </div>

      </div>

    </section>
  );
}