import { useState } from "react";
import "./index.css";
import Prompt from "./Prompt.jsx";

function Portfolio() {
  const [showMessage, setShowMessage] = useState(false);

  const handleResumeClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-6 py-16">
      {/* Subtle ambient glow blobs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-white/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Profile */}
        <div className="flex flex-col items-center md:items-center text-center md:text-left">
          {/* Avatar with ring */}
          <div className="relative mb-6">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-sky-400/60 via-zinc-500/40 to-zinc-700/40 opacity-70 blur-sm"></div>
            <img
              src="images/me.png"
              alt="Mohammed Al Ani"
              className="relative w-28 h-28 rounded-full object-cover border-2 border-zinc-900"
            />
          </div>

          {/* Name & title */}
          <h1 className="text-3xl font-bold text-white mb-1.5 tracking-tight">
            Mohammed Al Ani
          </h1>
          <h2 className="text-base text-zinc-300 mb-4">
            Mechatronics Engineering{" "}
            <span className="text-sky-400">@ UWaterloo</span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-px bg-gradient-to-r from-sky-400/60 to-transparent mb-5"></div>

          {/* Social row */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/mohammed-alan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.24 1.838 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.814 1.103.814 2.222v3.293c0 .32.215.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-al-ani-0a699924a"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-all duration-200 hover:scale-110"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V8H0v16zM7.5 8h4.79v2.17h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.34 6 7.68V24h-5v-7.8c0-1.85-.03-4.22-2.57-4.22-2.58 0-2.98 2.01-2.98 4.08V24h-5V8z" />
              </svg>
            </a>

            {/* Divider dot */}
            <span className="w-1 h-1 rounded-full bg-zinc-700"></span>

            {/* Resume Button */}
            <button
              onClick={handleResumeClick}
              className="text-sm font-medium px-4 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 hover:bg-zinc-800 hover:text-white hover:border-sky-500/40 transition-all duration-200"
            >
              Resume
            </button>
          </div>

          {/* Message */}
          {showMessage && (
            <p className="mt-4 text-sky-400 text-sm animate-pulse">
              Contact me directly for my resume!
            </p>
          )}
        </div>

        {/* Right Side: Prompt Terminal */}
        <Prompt width="530px" height="530px" />
      </div>
    </div>
  );
}

export default Portfolio;