import { useState, useEffect, useRef } from "react";

// Use a more "bash-like" font stack
const bashFontStack = `'Fira Mono', 'Menlo', 'Consolas', 'Liberation Mono', 'DejaVu Sans Mono', 'Ubuntu Mono', 'monospace'`;

// Typical bash terminal background is a very dark greenish-black
const bashBg = "black";

// Helper to apply color spans based on simple rules
const syntaxHighlight = (str) => {
    return str
        .replace(/^> .*/gm, (match) => `<span style="color:#00ff00;">${match}</span>`)
        .replace(/(- .+?:)/g, '<span style="color:#ff79c6;">$1</span>') // roles
        .replace(/\b(React|Node\.js|Tailwind CSS|Python|PyTorch|OpenCV|Numpy|Pandas|C\+\+|C|Arduino|Raspberry Pi|SolidWorks|AutoCAD|ANSYS|MATLAB|Embedded Systems)\b/g,
    '<span style="color:#8be9fd;">$1</span>'

        )
        .replace(/(Mohammed Al Ani)/g, '<span style="color:#f1fa8c;">$1</span>')
        .replace(/(University of Waterloo)/g, '<span style="color:#bd93f9;">$1</span>')
        .replace(/(\d+\.\d{1,2})/g, '<span style="color:#ffb86c;">$1</span>') // GPA
        .replace(/(\$\d{1,3}(,\d{3})*\+?)/g, '<span style="color:#50fa7b;">$1</span>'); // Scholarships
};

function Prompt({ width = "500px", height = "205px" }) {
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
            className="rounded-lg shadow-2xl flex flex-col border-2 border-[#222] transition-all duration-300 inset-0 z-0 animate-gradient bg-gradient-to-r from-black via-zinc-900 to-gray-900 bg-opacity-90"
            style={{
                width,
                height,
                minWidth: "200px",
                boxShadow: "0 8px 32px 0 rgba(0, 255, 0, 0.29)",
                backdropFilter: "blur(2px)",
                fontFamily: bashFontStack,
                background: bashBg,
            }}
        >
            {/* Title bar */}
            <div
                className="from-[#232b2d] to-[#222] text-white px-3 py-1 flex justify-between items-center select-none rounded-t-lg border-b border-[#333] shadow-sm"
                style={{ fontFamily: bashFontStack }}
            >
                <span className="tracking-wide font-semibold text-sm">Command Prompt</span>
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-600 rounded-full border border-[#222] shadow"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full border border-[#222] shadow"></div>
                    <div className="w-3 h-3 bg-green-600 rounded-full border border-[#222] shadow"></div>
                </div>
            </div>

            {/* Command area */}
            <div
                className="flex-grow px-5 py-4 overflow-auto rounded-b-lg"
                style={{
                    fontFamily: bashFontStack,
                    background: bashBg,
                    color: "#fff",
                }}
            >
                <p
                    className="text-sm leading-relaxed tracking-wide whitespace-pre-wrap"
                    dangerouslySetInnerHTML={{ __html: `<span style="color:#00ff00; font-weight:bold;">$ </span>${htmlText}<span class="animate-blink">█</span>` }}
                />
            </div>

            <style>{`
                @keyframes blink {
                    0%, 50% { opacity: 1; }
                    51%, 100% { opacity: 0; }
                }
                .animate-blink {
                    animation: blink 1s steps(1) infinite;
                }
            `}</style>
        </div>
    );
}

export default Prompt;
