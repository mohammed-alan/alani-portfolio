import React from "react";

// Sample certificates with github flag
const certificates = [
  {
    title: "Machine Learning with Python: Foundations",
    description: "A comprehensive course covering the fundamentals of machine learning using Python.",
    image: "/images/machine_learning.png",
    skills: ["Python", "Machine Learning", "Data Science"],
    github: true,
    githubUrl: "https://github.com/yourusername/machine-learning",
    
  },
  {
    title: "MATLAB Onramp",
    description: "A beginner-friendly introduction to MATLAB, covering the basics of programming and data analysis.",
    image: "/images/matlab_onramp.png",
    skills: ["MATLAB", "Data Analysis", "Programming"],
    github: true,
    githubUrl: "https://github.com/yourusername/pid-robot-controller",
  
  }
  
  
];

function Certificates() {
  return (
    <div className=" inset-0 z-0 animate-gradient shadow-lg p-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Certificates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certificates.map((certificate, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition transform duration-300 relative cursor-pointer"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-48 object-cover"
            />
            {/* GitHub Icon */}
            {certificate.github && (
              <a
                href={certificate.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-5 right-4 bg-gray-800 bg-opacity-75 text-white p-2 rounded-full hover:bg-gray-700 transition"
                aria-label={`${certificate.title} GitHub Repository`}
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
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{certificate.title}</h3>
              <p className="text-gray-600 mb-4">{certificate.description}</p>
              <div className="flex flex-wrap gap-2">
                {certificate.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full hover:bg-gray-300 transition duration-200" 
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificates;
