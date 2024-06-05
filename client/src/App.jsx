import Nav from "./components/nav/Nav"
import MoveToTop from "./components/moveToTop/MoveToTop"
import { TransitionGroup, CSSTransition } from "react-transition-group"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"
import { Routes, Route, useLocation } from "react-router-dom";
import './App.css'
import "./components/transitions.css"
import { useEffect, useState } from "react"
import Home from "./components/home/Home"
import Footer from "./components/footer/Footer"

function App() {

  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1900)
  }, [])

  return (
    <div>
      {loading ? (
        <div>
          <p>Loading..</p>
        </div>
      ) : (
        <>

          <Nav />
          <MoveToTop />

          <TransitionGroup>
            <CSSTransition key={location.key} classNames="fade" timeout={500} >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </CSSTransition>
          </TransitionGroup>

          <Footer />
        </>
      )}
    </div>


    // <>
    //   <Nav />

    //   <Routes>
    //     <Route path="/hero" element={<Hero />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/skills" element={<Skills />} />
    //   </Routes>
    // </>
  )
}

export default App
