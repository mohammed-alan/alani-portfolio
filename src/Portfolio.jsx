import { useState } from 'react';
import './index.css'
import Prompt from './Prompt.jsx';

function Portfolio() {
  // const [count, setCount] = useState(0); // Unused, so commented out
  const desc = "";
  const background = "";

  const gradientText = "bg-gradient-to-r from-white to-white bg-clip-text text-transparent";

  return (
    <div className={`min-h-screen relative overflow-hidden flex items-center justify-center ${background}`}>
      {/* Animated Gradient Background */}



      {/* Main content */}
      <div className={`relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 absolute inset-0 z-0`}>
        {/* Left Side: Profile */}
        <div className="flex flex-col justify-center text-center">
          <img
            src="images/me.png"
            alt="Mohammed Al Ani"
            className="w-32 h-32 rounded-full mb-4 object-cover mx-auto"
          />
          <h1 className={`text-3xl font-bold mb-2 text-center ${gradientText}`}>
            Mohammed Al Ani
          </h1>
          <h2 className={`text-xl mb-1 ${gradientText}`}>
            Mechatronics Engineering @ UWaterloo
          </h2>
          <p className={gradientText}>{desc}</p>
          <hr className="my-2 border-t-2 border-gray-900" />

          {/* Social Icons */}
          <div className="flex space-x-6 items-center justify-center">
            <a
              href="https://github.com/mohammed-alan"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 hover:-rotate-3"
            >
              <i className={`fab fa-github text-3xl ${gradientText}`}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-al-ani-0a699924a"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform transform hover:scale-110 hover:-rotate-3"
            >
              <i className={`fab fa-linkedin text-3xl ${gradientText}`}></i>
            </a>
            <div className="relative group transition-transform transform hover:scale-110 hover:rotate-3">
              <i className={`fab fa-discord text-3xl cursor-pointer ${gradientText} transition-colors`}></i>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-max px-3 py-1 bg-gray-800 text-white text-sm rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
                axiioo
              </div>
            </div>
            <a
              href="/path-to-your-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transform transition hover:scale-105 hover:-rotate-1">
                Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side: Prompt Terminal */}
        <Prompt
          width="530px"
          height="455px"
          command={`root@uwaterloo:~ 
┌──(mohammed㉿uwaterloo)-[~/portfolio]
└─# whoami
Mohammed Al Ani

┌──(mohammed㉿uwaterloo)-[~/portfolio]
└─# cat mohammed_info.txt
University of Waterloo, BASc Mechatronics Engineering, Year 2
Focus: Embedded Systems, Robotics, and Intelligent Control
Skills: Python, JavaScript, React, C++, Data Analysis

┌──(mohammed㉿uwaterloo)-[~/portfolio]
└─# cat site_status.txt
Still evolving... just like my code.

┌──(mohammed㉿uwaterloo)-[~/portfolio]
└─#`}
        />
      </div>

      
    </div>
  );
}

export default Portfolio;