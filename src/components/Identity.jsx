export default function Identity() {
  return (
    <section id="identity">
      <h1>
        Professional <span>Identity</span>
      </h1>

      <div className="card identity-card">

        <h3>👤 Suraj Pun Magar</h3>

        <p>SOC Analyst • Web Penetration Tester • Bug Bounty Hunter</p>

        <p style={{ color: "#8aa0b6", marginTop: "10px" }}>
          Specialized in SOC monitoring, vulnerability analysis, penetration testing,
          and real-world threat detection using modern security tools and CTF platforms.
        </p>

        <div style={{ marginTop: "15px" }}>
          <a
            href="https://www.linkedin.com/in/suraj-pun-magar-958489398/"
            target="_blank"
            className="btn"
          >
            View LinkedIn Profile
          </a>
        </div>

      </div>
    </section>
  );
}