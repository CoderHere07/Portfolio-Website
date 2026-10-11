import CustomCursor from "./components/CustomCursor.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Repos from "./components/Repos.jsx";
import Contact from "./components/Contact.jsx";
import "./styles.css";

export default function App() {
  return (
    <>
      <CustomCursor />
      <Nav />
      <main style={{ padding: 0, maxWidth: 'none' }}>
        <Hero />
        <Marquee />
        <Skills />
        <Projects />
        <Repos />
        <Contact />
      </main>
    </>
  );
}