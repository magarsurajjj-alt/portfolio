import { useEffect, useState } from "react";

export default function BootScreen({ onFinish }) {
  const lines = [
    "[OK] Initializing SOC Environment...",
    "[OK] Loading Threat Intelligence Feeds...",
    "[OK] Connecting GitHub API...",
    "[OK] Loading CTF Records...",
    "[OK] Parsing Security Projects...",
    "[OK] System Ready ✔"
  ];

  const [output, setOutput] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setOutput((prev) => prev + lines[i] + "\n");
      i++;

      if (i === lines.length) {
        clearInterval(interval);
        setTimeout(() => onFinish(), 800);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="boot">
      <pre>{output}</pre>
    </div>
  );
}