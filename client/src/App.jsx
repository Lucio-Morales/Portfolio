import Nav from "./components/nav/Nav"
import Home from "./components/home/Home"
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom";


function App() {

  const [loading, setLoading] = useState(true)



  useEffect(() => {
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1900)
  }, [])

  return (
    <div >
      {loading ? (
        <div>
          <p>Loading..</p>
        </div>
      ) : (
        <>

          <Nav />


          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>


          <Footer />
        </>
      )}
    </div>
  )
}

export default App
