import './index.css'
import Projects from './Projects.jsx'
import Certificates from './Certificates.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'
import FooterContact from './FooterContact.jsx'
import Experience from './Experience.jsx'
import ProjectShowreel from './ProjectShowreel.jsx'

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen text-white overflow-x-hidden">
        <ProjectShowreel />

        {/* Fade divider */}
        <div className="h-px bg-white/10 max-w-6xl mx-auto"></div>

        <Experience />

        <div className="h-px bg-white/10 max-w-6xl mx-auto"></div>

        <div id="projects">
          <Projects />
        </div>

        <div className="h-px bg-white/10 max-w-6xl mx-auto"></div>

        <Certificates />

        <div id="contact">
          <FooterContact />
        </div>
      </div>
    </>
  )
}

export default App
