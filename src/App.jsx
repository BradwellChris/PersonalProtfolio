import Navbar from "./ui/layouts/Navbar"
import About from "./ui/sections/About"
import Contact from "./ui/sections/Contact"
import Experience from "./ui/sections/Experience"
import Hero from "./ui/sections/Hero"
import Projects from "./ui/sections/Projects"

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  )
}

export default App
