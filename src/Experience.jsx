import React from "react";

const experiences = [
  {
    title: "Software Engineer - Computer Vision",
    company: "Digits Health",
    location: "Remote",
    date: "Jan. 2026 – May. 2026",
    skills: ["MediaPipe", "Computer Vision", ".NET Web API", "React Native", "MySQL", "ASP.NET MVC", "NativeWind", "JavaScript"],
    type: "Co-op",
  },
  {
    title: "Robotics Engineer",
    company: "WATonomous",
    location: "Waterloo, ON",
    date: "Jan. 2026 – Present",
    skills: ["ROS2", "C++", "A* Planning", "Pure Pursuit", "LiDAR", "Autonomous Navigation", "Docker", "Foxglove"],
    type: "Design Team",
  },
  {
    title: "Software Engineer",
    company: "Pallet Connect",
    location: "Waterloo, ON",
    date: "Feb. 2025 – Aug. 2025",
    skills: ["Python", "Pandas", "NumPy", "Matplotlib", "PowerBI", "Data Pipelines"],
    type: "Co-op",
  },
];

function Experience() {
  return (
    <div className="z-10 mt-16 mb-8 px-4">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>

      {/* Timeline container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-800 via-zinc-700 to-zinc-800"></div>

        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`relative flex items-start mb-12 md:mb-16 ${
                isLeft ? "md:flex-row" : "md:flex-row-reverse"
              } flex-row`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-sky-400 border-2 border-black z-20 mt-6 shadow-[0_0_12px_rgba(56,189,248,0.5)]"></div>

              {/* Spacer for mobile (left gutter) */}
              <div className="w-14 flex-shrink-0 md:hidden"></div>

              {/* Card */}
              <div
                className={`relative group flex-1 md:w-[calc(50%-2rem)] ${
                  isLeft ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div className="relative">
                  {/* Subtle glow */}
                  <div className="absolute inset-0 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition duration-500 bg-sky-500/20"></div>

                  {/* Card body */}
                  <div className="relative bg-zinc-950 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all duration-300">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <span className="text-xs font-semibold tracking-wider text-sky-400 uppercase">
                        {exp.date}
                      </span>
                      {exp.type && (
                        <span
                          className={`text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase ${
                            exp.type === "Co-op"
                              ? "bg-sky-500/10 text-sky-300 border border-sky-500/20"
                              : "bg-zinc-800 text-zinc-300 border border-zinc-700"
                          }`}
                        >
                          {exp.type}
                        </span>
                      )}
                    </div>

                    {/* Company + role */}
                    <h3 className="text-xl font-bold text-white mb-0.5">{exp.company}</h3>
                    <p className="text-sm text-zinc-300 mb-1">{exp.title}</p>
                    <p className="text-xs text-zinc-500 mb-4">{exp.location}</p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-800 hover:bg-zinc-800 hover:text-white transition duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty spacer for the other side on desktop */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;