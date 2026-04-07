import React from "react";
import './index.css';

const projects = [
  {
    title: "CarPal: Full Stack AI Solution",
    description: "Developed a full stack AI-powered application where users can sign up, log in, and upload car images. The app uses Google Gemini to analyze the image and return car specifications such as make, model, year, and performance data. Users can view and delete their uploads from a personalized dashboard, and a featured car is displayed on the landing page. ",
    image: "images/carpal.png",
    skills: ["Express.JS", "MySQL", "TailwindCSS", "React", "Google Gemini", "REST API"],
    github: true,
    githubURL: "https://github.com/mohammed-alan/CarPal",
    link:false,
    type: ""
  },
  {
    title: "Full Stack NLP Chatbot",
    description: "Built an interactive chatbot leveraging natural language processing with NLTK and spaCy. The app supports intent recognition, entity extraction, and sentiment analysis, providing intelligent, context-aware responses. Features include a modern dark-themed interface, theme toggle, and typing indicators for enhanced realism. Developed with a Flask backend and a responsive JavaScript frontend.",
    image: "images/nlpbot.png",
    skills: ["Python", "Flask", "NLTK", "spaCy", "HTML", "CSS", "JavaScript"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/fullstack-nlp-chatbot",
    type: ""
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website designed from SCRATCH to showcase my projects, resumes, and contact information. Includes a built-in resume selector (hardware/software), animated social links, and a custom terminal-style prompt interface — all styled with TailwindCSS.",
    image: "images/portfolio.png",
    skills: ["React", "Tailwind CSS", "Vite", "JavaScript"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/alani-portfolio",
    link: true,
    linkUrl: "https://mohammed-alan.github.io/alani-portfolio/",
    type: ""
  },
  {
    title: "YOLO + OpenCV Chocolate Detection",
    description: "A real-time chocolate detection and calorie estimation system built with YOLOv8, OpenCV, and React. The system recognizes chocolates like Reese's, Snickers, KitKat, Aero, and Twix, estimates their calories, and displays results on a live dashboard. The backend (Python + YOLOv8) handles object detection, while the frontend (React + Tailwind) shows a live video feed with detections synced via SocketIO.",
    image: "images/yolo.png",
    skills: ["YOLOv8", "OpenCV", "Python", "React", "Tailwind CSS", "SocketIO"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/yolo-snacks-tracker",
    link: false,
    linkUrl: "",
    type: ""
  },
  {
    title: "NoCode LaTeX Resume",
    description: "An interactive web-based LaTeX resume editor that lets users build and customize resumes without touching LaTeX code. Built with React (frontend) and Node.js (backend), it supports adding, editing, and deleting resume sections with a real-time PDF preview. The backend compiles LaTeX into polished PDFs, making professional resume creation accessible to everyone.",
    image: "images/nolatex.png",
    skills: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "LaTeX"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/nocode-latex-resume",
    link: false,
    linkUrl: "",
    type: ""
  },
  {
    title: "MCDiary",
    description: "A Minecraft-inspired diary app built with React and Vite, featuring a nostalgic in-game book interface for multi-page entries. Includes animated Minecraft-style backgrounds, ambient music, and themed UI assets. Users can add, edit, and navigate up to 100 pages, copy entries to clipboard, and enjoy a fully responsive experience across devices.",
    image: "images/mcdiary.png",
    skills: ["React", "Vite", "Tailwind CSS", "JavaScript", "API Integration"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/mcdiary",
    link: true,
    linkUrl: "hhttps://mohammed-alan.github.io/mcdiary/",
    type: ""
  },
  {
    title: "Pan & Tilt Ultrasonic Scanner",
    description: "A joystick-controlled pan-and-tilt system using an ultrasonic sensor to scan the environment. Built with Arduino, servos, and a custom breadboard circuit, the setup allows users to manually adjust the sensor's orientation to measure distances in different directions. Designed as a hands-on robotics/mechatronics experiment integrating hardware control and real-time sensing.",
    image: "images/ultrasonic.jpg",
    skills: ["Arduino", "C++", "Ultrasonic Sensors", "Servos", "Electronics Prototyping"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/pan-and-tilt-arduino-code",
    link: false,
    linkUrl: "",
    type: ""
  },
  {
    title: "Relasto",
    description: "Developed a responsive and accessible short story publishing site using HTML, SCSS, and vanilla JavaScript. The site features a structured layout, modular SCSS styles, and smooth user navigation. It includes a homepage, dynamic About & Contact section, and integration with Instagram for community engagement. Deployed via GitHub Pages.",
    image: "images/relasto.png",
    skills: ["HTML", "CSS", "SCSS", "Javascript"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/rellasto.github.io",
    link: true,
    linkUrl: "https://mohammed-alan.github.io/rellasto.github.io/",
    type: ""
  },
  {
    title: "Expressjs.Yourself",
    description: "A lightweight blog platform built with Express.js, EJS, and SQLite. Users can register, log in, and manage their own posts with full CRUD functionality. Features include JWT-based authentication, secure password hashing, a featured random post display, and a personal user dashboard. The project focuses on backend architecture with minimal frontend styling.",
    image: "images/expressyourself.png",
    skills: ["Express.js", "EJS", "SQLite", "JWT", "bcrypt", "Tailwind CSS"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/Expressjs.Yourself",
    type: ""
  },
  {
    title: "MineMatics: Minecraft Themed Math Game",
    description: "Designed and developed an educational math game using Java and the Processing IDE to make learning addition fun for kids. The game features two modes: Campaign Mode with progressive difficulty and bonus typing challenges, and Infinity Mode with endless questions and increasing speed. Set in a Minecraft-inspired environment, players must answer correctly to escape zombies. Includes a help page and responsive visual feedback.",
    image: "images/minematics.png",
    skills: ["Java", "Processing IDE", "Game Development", "UI/UX"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/MineMatics-Game",
    type: ""
  },
  {
    title: "API Fetched Weather App",
    description: "Developed a simple and user-friendly weather application that fetches and displays real-time weather data for any city using the OpenWeatherMap API. The app shows the city name, current temperature in Celsius, humidity level, and the local time of the selected city, providing users with up-to-date and relevant weather information.",
    image: "images/weather.png",
    skills: ["JavaScript", "HTML/CSS", "Fetch API", "DOM Manipulation"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/weather-app",
    type: ""
  },
  {
    title: "Curve Fitting Software",
    description: "Created a web-based curve fitting tool that allows users to input data manually or upload CSV files, then fit curves using multiple models such as Linear, Polynomial, Exponential, Gaussian, and Histogram. The app visualizes the original data alongside the fitted curve, displays the fitting equation, and evaluates fit quality using metrics like Mean Absolute Error (MAE) and R-squared. Users can download both the fitted data as CSV and the plot as a PNG image.",
    image: "images/curve.png",
    skills: ["Python", "NumPy", "SciPy", "Matplotlib", "Streamlit", "Data Visualization"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/Curve-Fitting-Software",
    type: ""
  },
  {
    title: "To Do List App",
    description: "Built a simple and modern To-Do List application using React functional components and hooks. The app allows users to add, delete, and reorder tasks to manage priorities efficiently. Input validation prevents empty tasks, and the UI features clean styling with flexbox and hover effects for smooth user interaction.",
    image: "images/todoapp.png",
    skills: ["React", "JavaScript", "CSS"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/react-todo-app",
    type: ""
  },
  {
    title: "PID Robot Controller",
    description: "Designed a PID system to keep a robot on a straight path using Python and gyroscopic sensor data.",
    image: "images/pid.jpg",
    skills: ["Python", "Lego EV3", "Control Systems"],
    type: ""
  },
  {
    title: "Triboelectric Nanogenerator",
    description: "Developed a triboelectric nanogenerator to convert kinetic energy into electrical energy.",
    image: "images/teng.png",
    skills: ["Physics", "Engineering", "Prototyping"],
    link: true,
    linkUrl: "https://www.linkedin.com/in/mohammed-al-anii/overlay/1736832674825/single-media-viewer/?profileId=ACoAAD254j4BPaKPEufiu1HLwmslJEhbVCiYzik",
    type: ""
  }
];

function Projects() {
  return (
    <div className="z-10 mt-10">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="relative group">
            {/* Neon glow background */}
            <div className="absolute inset-0 rounded-lg blur-xl opacity-40 group-hover:opacity-80 transition duration-500 bg-gradient-to-br from-pink-600 via-purple-500 to-indigo-600 z-0"></div>

            {/* Actual card content */}
            <div className="relative z-10 flex flex-col justify-between h-full border-zinc-500 bg-gradient-to-r from-zinc-900 via-gray-900 to-gray-950 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 border border-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <h3 className="text-xl font-semibold text-gray-100">{project.title}</h3>
                    {project.type && (
                      <span className="text-xs font-bold bg-blue-700 text-white px-2 py-1 rounded-sm hover:bg-blue-500 transition">
                        {project.type.toUpperCase()}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-200 mb-4">{project.description}</p>
                </div>
                <div className="mt-auto pt-4 flex flex-wrap items-start justify-between gap-2">
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 flex-grow min-w-0">
                    {project.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="font-bold bg-red-700 text-white text-xs px-2 py-1 rounded-sm hover:bg-red-500 transition duration-200 whitespace-nowrap"
                      >
                        {skill.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  {/* GitHub and Link icons */}
                  <div className="flex gap-2 flex-shrink-0 mt-2 sm:mt-0">
                    {project.github && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 bg-opacity-75 text-white p-2 rounded-full hover:bg-gray-700 transition"
                        aria-label={`${project.title} GitHub Repository`}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.166 6.84 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.37-1.342-3.37-1.342-.454-1.153-1.11-1.46-1.11-1.46-.907-.62.069-.608.069-.608 1.004.07 1.532 1.03 1.532 1.03.892 1.527 2.34 1.086 2.91.83.092-.647.35-1.086.636-1.337-2.22-.253-4.555-1.11-4.555-4.94 0-1.09.39-1.98 1.029-2.68-.103-.254-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025a9.56 9.56 0 012.5-.336c.85.004 1.705.115 2.5.337 1.91-1.296 2.75-1.025 2.75-1.025.546 1.378.203 2.396.1 2.65.64.7 1.028 1.59 1.028 2.68 0 3.84-2.337 4.685-4.565 4.93.36.31.68.92.68 1.85 0 1.335-.013 2.415-.013 2.743 0 .268.18.58.688.48A10.005 10.005 0 0022 12c0-5.52-4.48-10-10-10z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 bg-opacity-75 text-white p-2 rounded-full hover:bg-gray-700 transition"
                        aria-label={`${project.title} Live Website`}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 13v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2h6m5-3h5m0 0v5m0-5L10 14"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;