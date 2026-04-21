import { useState } from 'react'
import './index.css'
import Portfolio from './Portfolio.jsx'
import Projects from './Projects.jsx'
import Certificates from './Certificates.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'
import FooterContact from './FooterContact.jsx'
import Experience from './Experience.jsx'

function App() {
  return (
    <>
      <AnimatedBackground />
      <div className="relative z-10 min-h-screen text-white overflow-x-hidden">
        <Portfolio />

        {/* Fade divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent max-w-4xl mx-auto"></div>

        <Experience />

        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent max-w-4xl mx-auto"></div>

        <Projects />

        <div className="h-px bg-gradient-to-r from-transparent via-sky-500/30 to-transparent max-w-4xl mx-auto"></div>

        <Certificates />

        <FooterContact />
      </div>
    </>
  )
}

export default App