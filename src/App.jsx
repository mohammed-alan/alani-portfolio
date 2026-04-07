import { useState } from 'react'
import './index.css'
import Portfolio from './Portfolio.jsx'
import Projects from './Projects.jsx'
import Certificates from './Certificates.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'
import FooterContact from './FooterContact.jsx'

function App() {

  return(
    <>
   <div className="relative z-10">
      <Portfolio/>
      <Projects/>
      <Certificates/>
      <FooterContact/>
            
      </div>
    </>
  )

    }


export default App
