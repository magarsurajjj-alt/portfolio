import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Identity from "./components/Identity";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import CTF from "./components/CTF";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

import "./style.css";

export default function App() {
  return (
    <div className="app-container">

      {/* HEADER */}
      <header>
        <Navbar />
      </header>

      {/* MAIN CONTENT */}
      <main>

        {/* HERO SECTION */}
        <section id="home">
          <Hero />
        </section>

        {/* PROFILE SECTION */}
        <section id="identity">
          <Identity />
        </section>

        {/* ABOUT */}
        <section id="about">
          <About />
        </section>

        {/* EXPERIENCE (HIGH VALUE SECTION) */}
        <section id="experience">
          <Experience />
        </section>

        {/* PROJECTS */}
        <section id="projects">
          <Projects />
        </section>

        {/* CERTIFICATIONS */}
        <section id="certifications">
          <Certifications />
        </section>

        {/* CTF / PRACTICE */}
        <section id="ctf">
          <CTF />
        </section>

        {/* SKILLS */}
        <section id="skills">
          <Skills />
        </section>
        
        <section id="blog">
  <Blog />
</section>

        {/* CONTACT */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      {/* FOOTER (future-ready) */}
      <footer>
        <p>© {new Date().getFullYear()} Suraj Pun Magar • Cybersecurity Portfolio</p>
      </footer>

    </div>
  );
}