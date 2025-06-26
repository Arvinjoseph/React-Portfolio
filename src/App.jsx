import React, { useRef } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          <li><button onClick={() => scrollToSection(homeRef)}>Home</button></li>
          <li><button onClick={() => scrollToSection(aboutRef)}>About</button></li>
          <li><button onClick={() => scrollToSection(skillsRef)}>Skills</button></li>
          <li><button onClick={() => scrollToSection(projectsRef)}>Projects</button></li>
          <li><button onClick={() => scrollToSection(contactRef)}>Contact</button></li>
        </ul>
      </nav>
      <main>
        <section ref={homeRef}><Home onProjectsClick={() => scrollToSection(projectsRef)} /></section>
        <section ref={aboutRef}><About /></section>
        <section ref={skillsRef}><Skills /></section>
        <section ref={projectsRef}><Projects /></section>
        <section ref={contactRef}><Contact /></section>
      </main>
    </>
  );
}

export default App;
