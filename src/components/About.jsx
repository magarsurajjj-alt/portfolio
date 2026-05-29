export default function About() {
  return (
    <section id="about">

      <h1>
        About <span>Me</span>
      </h1>

      <div className="card about-card">

        <h3>🧠 Cybersecurity Analyst Profile</h3>

        <p>
          I am <b>Suraj Pun Magar</b>, a cybersecurity enthusiast focused on
          SOC operations, web application penetration testing, API security, and vulnerability research.
        </p>

        <p>
          I specialize in <b>threat detection, log analysis, incident response, and offensive security testing</b>.
          I use real-world tools like Splunk, Wireshark, Burp Suite, and follow OWASP methodologies
          to analyze and secure systems.
        </p>

        <p>
          I actively practice on platforms such as <b>TryHackMe, Hack The Box, and PortSwigger Web Security Academy</b>,
          simulating real-world attack scenarios to strengthen both offensive and defensive security skills.
        </p>

        <p>
          I also work on <b>VAPT projects, SOC labs, API security testing, and automation workflows</b>
          to understand how attackers exploit systems and how defenders can detect and prevent them.
        </p>

        <p>
          My career goal is to grow as a <b>SOC Analyst / Cybersecurity Engineer</b> and contribute to
          building secure digital environments by proactively identifying vulnerabilities.
        </p>

        {/* STATUS BADGE */}
        <div className="about-status">
          <b>Status:</b> Active Learner • SOC Focused • VAPT Practitioner • Bug Bounty Explorer
        </div>

      </div>

    </section>
  );
}