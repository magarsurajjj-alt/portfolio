export default function About() {
  return (
    <section id="about">
      <h1>
        About <span>Me</span>
      </h1>

      <div className="card about-card">

        <h3>🧠 Cybersecurity Analyst Profile</h3>

        <p>
          I am <b>Suraj Pun Magar</b>, a cybersecurity enthusiast specializing in
          SOC operations, web application penetration testing, and vulnerability research.
        </p>

        <p>
          My focus areas include <b>threat detection, log analysis, incident response,
          and offensive security testing</b> using real-world tools like Splunk,
          Wireshark, Burp Suite, and various CTF platforms.
        </p>

        <p>
          I actively participate in platforms like TryHackMe, Hack The Box, and PortSwigger Labs
          to simulate real-world attack scenarios and improve defensive security skills.
        </p>

        <p>
          My goal is to grow as a <b>SOC Analyst / Security Engineer</b> and contribute to
          building secure systems by identifying vulnerabilities before attackers do.
        </p>

        <div style={{ marginTop: "15px", color: "#00f5ff" }}>
          <b>Status:</b> Active Learner • SOC Focused • Bug Bounty Explorer
        </div>

      </div>
    </section>
  );
}