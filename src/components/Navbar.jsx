import logo from "../assets/hero.jpg";

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <div>
          <h2 className="nav-title">SURAJ.exe</h2>
          <p className="nav-sub">Cybersecurity Analyst</p>
        </div>
      </div>

      {/* LINKS */}
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#identity">Profile</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}