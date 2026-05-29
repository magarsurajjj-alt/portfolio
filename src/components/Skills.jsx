export default function Skills() {
  return (
    <section id="skills">

      <h1>
        Skills & <span>Tools</span>
      </h1>

      <div className="grid">

        {/* WEB SECURITY */}
        <div className="card">
          <h3>Web Application Security</h3>
          <p>
            OWASP Top 10, SQL Injection, XSS, CSRF, Authentication Bypass,
            Session Management, Burp Suite, Manual Web Pentesting
          </p>
          <span className="tag">VAPT • OWASP • Burp Suite</span>
        </div>

        {/* API SECURITY (NEW) */}
        <div className="card">
          <h3>API Security / API Hacking</h3>
          <p>
            REST API testing, authentication flaws, broken object level authorization (BOLA),
            rate limiting bypass, JWT manipulation, API recon & exploitation techniques
          </p>
          <span className="tag">API Testing • JWT • BOLA • OWASP API Top 10</span>
        </div>

        {/* SOC / BLUE TEAM */}
        <div className="card">
          <h3>SOC & Blue Team</h3>
          <p>
            SIEM Monitoring, Splunk, Log Analysis, Incident Detection,
            Threat Hunting, Basic Digital Forensics & Incident Response
          </p>
          <span className="tag">SOC • SIEM • Incident Response</span>
        </div>

        {/* NETWORKING */}
        <div className="card">
          <h3>Networking & Security Tools</h3>
          <p>
            Wireshark, Nmap, TCP/IP Fundamentals, Packet Analysis,
            Network Reconnaissance, Traffic Inspection
          </p>
          <span className="tag">Networking • Wireshark • Nmap</span>
        </div>

        {/* PLATFORMS */}
        <div className="card">
          <h3>Security Platforms</h3>
          <p>
            TryHackMe, Hack The Box, PortSwigger Web Security Academy,
            CTF challenges & hands-on security labs
          </p>
          <span className="tag">CTF • Labs • Practice</span>
        </div>

        {/* AUTOMATION */}
        <div className="card">
          <h3>Security Automation</h3>
          <p>
            n8n workflows, alert automation, IP reputation checking,
            basic SOAR-style security automation projects
          </p>
          <span className="tag">SOAR • Automation • Detection</span>
        </div>

      </div>

    </section>
  );
}