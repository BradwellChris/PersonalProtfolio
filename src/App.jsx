import Navbar from "./ui/layouts/Navbar"
import Hero from "./ui/sections/Hero"

function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
