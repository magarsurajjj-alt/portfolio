import { useState } from "react";
import BootScreen from "./components/BootScreen";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import CTF from "./components/CTF";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Identity from "./components/Identity";
import About from "./components/About";

import "./style.css";

export default function App() {
  const [ready, setReady] = useState(false);

  if (!ready) return <BootScreen onFinish={() => setReady(true)} />;

  return (
    <>
      <Navbar />
      <Hero />
      <Identity />
      <Projects />
      <Certifications />
      <CTF />
      <Skills />
      <About />
      <Contact />
    </>
  );
}