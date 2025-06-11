import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans scroll-smooth min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e40af] to-[#0f172a]
 relative, overflow-hidden">
      <Navbar />
      <Home />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
