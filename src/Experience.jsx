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
      <h2 className="text-4xl font-bold text-white mb-12 text-center">Experience</h2>

      {/* Timeline container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-white/15"></div>

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
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border border-black z-20 mt-6"></div>

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
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 border border-white/20"></div>

                  {/* Card body */}
                  <div className="relative bg-black border border-white/15 p-6 hover:border-white/35 transition-all duration-300">
                    {/* Header row */}
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <span className="text-xs font-semibold tracking-wider text-zinc-300 uppercase">
                        {exp.date}
                      </span>
                      {exp.type && (
                        <span
                          className={`text-[10px] font-bold tracking-wider px-2.5 py-0.5 rounded-full uppercase ${
                            exp.type === "Co-op"
                              ? "bg-white text-black border border-white"
                              : "bg-black text-zinc-300 border border-white/20"
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
                          className="text-[11px] font-medium bg-black text-zinc-300 px-2 py-0.5 rounded-full border border-white/15 hover:border-white/40 hover:text-white transition duration-200"
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
