export default function Skills() {
  return (
    <section>
      <h1>Skills & <span>Tools</span></h1>

      <div className="grid">
        <div className="card">
          <h3>Web Security</h3>
          <p>SQLi, XSS, CSRF, Burp Suite, OWASP Top 10</p>
        </div>

        <div className="card">
          <h3>SOC Tools</h3>
          <p>Splunk, Wireshark, SIEM Monitoring, Log Analysis</p>
        </div>

        <div className="card">
          <h3>Platforms</h3>
          <p>TryHackMe, Hack The Box, PortSwigger Labs</p>
        </div>
      </div>
    </section>
  );
}