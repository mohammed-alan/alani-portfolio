import { useState } from 'react'
import './index.css'
import Portfolio from './Portfolio.jsx'
import Projects from './Projects.jsx'
import Certificates from './Certificates.jsx'
import AnimatedBackground from './AnimatedBackground.jsx'

function App() {

  return(
    <>
   <div className="relative z-10">
      <Portfolio/>
      <Projects/>
      <Certificates/>
      <h1 className="mt-100 text-white">Hello</h1>      
      </div>
    </>
  )

    }


export default App
