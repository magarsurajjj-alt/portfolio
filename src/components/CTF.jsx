export default function CTF() {
  const ctf = [
    "RAT CTF - Web Exploitation & Recon",
    "Hackinlayers - Privilege Escalation",
    "TryHackMe SOC Analyst Path",
    "PortSwigger Web Security Labs",
    "Hack The Box Machine Practice"
  ];

  return (
    <section>
      <h1>CTF <span>Achievements</span></h1>

      <div className="grid">
        {ctf.map((c, i) => (
          <div className="card" key={i}>
            <h3>Mission Complete</h3>
            <p>{c}</p>
          </div>
        ))}
      </div>
    </section>
  );
}