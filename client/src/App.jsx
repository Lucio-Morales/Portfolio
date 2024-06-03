import Nav from "./components/nav/Nav"
import Hero from "./components/hero/Hero"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import './App.css'

function App() {

  return (
    <>
      <Nav />

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="skills">
        <Skills />
      </section>
    </>
  )
}

export default App
