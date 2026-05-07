import React from "react";

const FooterContact = () => {
  const email = "mohd.otmn@gmail.com";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full z-10 mt-16">
      {/* Top fade-in border line */}
      <div className="h-px bg-white/10"></div>

      {/* Main footer content */}
      <div className="bg-black pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          {/* CTA section */}
          <div className="text-center">
            <p className="text-zinc-300 text-sm mb-4 tracking-wide">
              Interested in working together?
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-zinc-200 text-black font-bold py-2.5 px-8 rounded-full transition-all duration-300"
              aria-label="Contact Me"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get In Touch
            </a>
          </div>

          {/* Divider */}
          <div className="w-24 h-px bg-white/15"></div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            <a
              href="https://github.com/mohammed-alan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.204.085 1.838 1.24 1.838 1.24 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.3-5.466-1.335-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.29-1.552 3.295-1.23 3.295-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.48 5.92.43.372.814 1.103.814 2.222v3.293c0 .32.215.694.825.576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-al-ani-0a699924a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-400 hover:text-white transition-colors duration-200"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 24h5V8H0v16zM7.5 8h4.79v2.17h.07c.67-1.27 2.3-2.6 4.73-2.6 5.06 0 6 3.34 6 7.68V24h-5v-7.8c0-1.85-.03-4.22-2.57-4.22-2.58 0-2.98 2.01-2.98 4.08V24h-5V8z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-zinc-500 text-xs select-none">
            &copy; {currentYear} Mohammed Al Ani
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterContact;
