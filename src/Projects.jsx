import React from "react";
import './index.css';

const projects = [
  {
    title: "Relasto",
    description: "A responsive short story-sharing site that displayed creative works and writings of the youth.",
    image: "images/relasto.png",
    skills: ["HTML", "CSS", "SASS", "Javascript"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/rellasto.github.io",
    link: true,
    linkUrl: "https://mohammed-alan.github.io/rellasto.github.io/",
    type: "Web Dev"
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my projects and skills. Built from SCRATCH",
    image: "images/portfolio.png",
    skills: ["React", "Tailwind CSS", "Vite"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/alani-portfolio",
    link: true,
    linkUrl: "https://yourportfolio.example.com",
    type: "Web Dev"
  },
  {
    title: "Full Stack NLP Chatbot",
    description: "Developed a full stack chatbot using NLP techniques to provide interactive user experiences.",
    image: "images/nlpbot.png",
    skills: ["Python", "Flask", "JavaScript", "HTML", "CSS"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/fullstack-nlp-chatbot",
    type: "Full Stack"
  },
  {
    title: "MineMatics: Minecraft Themed Math Game",
    description: "Created a Minecraft-themed game to teach math concepts through interactive gameplay. Game includes two modes and increasing difficuilty levels.",
    image: "images/minematics.png",
    skills: ["Java", "Processing IDE", "Game Development"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/MineMatics-Game",
    type: "Game Dev"
  },
  {
    title: "API Fetched Weather App",
    description: "Built a weather application that fetches real-time data from a public API to display current weather conditions.",
    image: "images/weather.png",
    skills: ["JavaScript", "HTML", "CSS", "API"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/weather-app",
    type: "Backend"
  },
  {
    title: "Curve Fitting Software",
    description: "Developed software to fit curves to data points using various mathematical models. Software includes manual and CSV data input. It also includes various methods of curve fitting such as polynomial, exponential, and logarithmic.",
    image: "images/curve.png",
    skills: ["Python", "NumPy", "SciPy", "Matplotlib", "Streamlit"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/Curve-Fitting-Software",
    type: "Data Science"
  },
  {
    title: "To Do List App",
    description: "A simple to-do list application built with React to manage tasks efficiently.",
    image: "images/todoapp.png",
    skills: ["React", "JavaScript", "CSS"],
    github: true,
    githubUrl: "https://github.com/mohammed-alan/react-todo-app",
    type: "Web Dev"
  },
  {
    title: "PID Robot Controller",
    description: "Designed a PID system to keep a robot on a straight path using Python and gyroscopic sensor data.",
    image: "images/pid.jpg",
    skills: ["Python", "Lego EV3", "Control Systems"],
    type: "Robotics"
  },
  {
    title: "Triboelectric Nanogenerator",
    description: "Developed a triboelectric nanogenerator to convert kinetic energy into electrical energy.",
    image: "images/teng.png",
    skills: ["Physics", "Engineering", "Prototyping"],
    type: "Engineering"
  }
];

function Projects() {
  return (
    <div className="z-10">
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
