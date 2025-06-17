import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-orbitron scroll-smooth min-h-screen bg-[#0F0F1B] text-[#F8F8F8] relative overflow-hidden">
      {/* Pulse Background Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#FF007F33] via-transparent to-[#00FFF733] animate-pulse pointer-events-none" />
      
      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
