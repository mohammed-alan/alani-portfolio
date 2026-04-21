import { useState, useEffect, useRef } from "react";

const monoFont = `'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'DejaVu Sans Mono', 'Ubuntu Mono', monospace`;

const syntaxHighlight = (str) => {
  return str
    .replace(/^> .*/gm, (match) => `<span style="color:#7dd3fc;">${match}</span>`)
    .replace(/(- .+?:)/g, '<span style="color:#d4d4d8; font-weight:500;">$1</span>')
    .replace(
      /\b(React|Node\.js|Tailwind CSS|Python|PyTorch|OpenCV|Numpy|Pandas|C\+\+|C|Arduino|Raspberry Pi|SolidWorks|AutoCAD|ANSYS|MATLAB|Embedded Systems)\b/g,
      '<span style="color:#38bdf8;">$1</span>'
    )
    .replace(/(Mohammed Al Ani)/g, '<span style="color:#ffffff; font-weight:600;">$1</span>')
    .replace(/(University of Waterloo)/g, '<span style="color:#7dd3fc;">$1</span>')
    .replace(/(\d+\.\d{1,2})/g, '<span style="color:#fde68a;">$1</span>')
    .replace(/(\$\d{1,3}(,\d{3})*\+?)/g, '<span style="color:#86efac;">$1</span>');
};

function Prompt({ width = "530px", height = "530px" }) {
  const rawCommand = `
> whoami
Mohammed Al Ani

> bio
B.A.Sc. Mechatronics Engineering student @ University of Waterloo  
Passionate about full stack development, AI development, robotics, and embedded systems  
GPA: 3.94 | Co-op Program | Scholarships: $10,000+

> skills --list
- Full-Stack Developer: React, Node.js, Tailwind CSS  
- AI Developer: Python, PyTorch, OpenCV, Numpy, Pandas  
- Systems: C/C++, Embedded Systems, Arduino, Raspberry Pi  
- CAD & Simulation: SolidWorks, AutoCAD, ANSYS, MATLAB 

> status
This portfolio is still in progress...
`;

  const [htmlText, setHtmlText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    let currentRaw = "";
    indexRef.current = 0;

    const interval = setInterval(() => {
      if (indexRef.current < rawCommand.length) {
        currentRaw += rawCommand.charAt(indexRef.current);
        setHtmlText(syntaxHighlight(currentRaw));
        indexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [rawCommand]);

  return (
    <div
      className="rounded-xl flex flex-col overflow-hidden"
      style={{
        width,
        height,
        minWidth: "200px",
        fontFamily: monoFont,
        background: "rgba(9, 9, 11, 0.9)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(63, 63, 70, 0.8)",
        boxShadow:
          "0 0 40px rgba(56, 189, 248, 0.06), 0 8px 32px rgba(0, 0, 0, 0.6)",
      }}
    >
      {/* Title bar */}
      <div
        className="px-4 py-2.5 flex items-center select-none"
        style={{
          background: "rgba(24, 24, 27, 0.95)",
          borderBottom: "1px solid rgba(63, 63, 70, 0.6)",
          fontFamily: monoFont,
        }}
      >
        {/* Classic macOS traffic lights — adds warmth and familiarity */}
        <div className="flex space-x-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_4px_rgba(255,95,87,0.3)]"></div>
          <div className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[0_0_4px_rgba(254,188,46,0.3)]"></div>
          <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_4px_rgba(40,200,64,0.3)]"></div>
        </div>
        <span className="text-zinc-400 text-xs tracking-wider">
          ~/mohammed — bash
        </span>
      </div>

      {/* Terminal body */}
      <div
        className="flex-grow px-5 py-4 overflow-auto"
        style={{
          fontFamily: monoFont,
          color: "rgba(229, 231, 235, 0.95)",
        }}
      >
        <p
          className="text-sm leading-relaxed tracking-wide whitespace-pre-wrap"
          dangerouslySetInnerHTML={{
            __html: `<span style="color:#38bdf8; font-weight:600;">❯ </span>${htmlText}<span class="prompt-cursor">█</span>`,
          }}
        />
      </div>

      <style>{`
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .prompt-cursor {
          animation: cursor-blink 1s steps(1) infinite;
          color: #38bdf8;
        }
      `}</style>
    </div>
  );
}

export default Prompt;