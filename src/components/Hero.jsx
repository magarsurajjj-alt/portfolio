export default function Hero() {
  return (
    <section className="hero">

      {/* STATUS BADGE */}
      <div className="hero-badge">
        🔐 SOC ANALYST • ACTIVE • BLUE TEAM / RED TEAM
      </div>

      {/* NAME */}
      <h1>
        Hi, I’m <span>Suraj Pun Magar</span>
      </h1>

      {/* ROLE */}
      <h2 className="hero-role">
        Cybersecurity Analyst | Web Pentester | Bug Bounty Hunter
      </h2>

      {/* DESCRIPTION */}
      <p className="hero-text">
        I specialize in <b>SOC operations, vulnerability assessment, and penetration testing</b>.
        Experienced in analyzing logs, detecting threats, and securing web applications using real-world attack simulation techniques.
      </p>

      {/* EXTRA DETAIL */}
      <p className="hero-sub">
        Hands-on with SIEM tools, Burp Suite, Wireshark, TryHackMe, Hack The Box, and PortSwigger Labs.
        Focused on real-world security research and defensive architecture improvement.
      </p>

      {/* CTA BUTTONS */}
      <div className="hero-buttons">
        <a className="btn" href="#projects">
          View Projects
        </a>

        <a className="btn-outline" href="#contact">
          Contact Me
        </a>
      </div>

    </section>
  );
}