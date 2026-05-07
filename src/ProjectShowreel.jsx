import React, { useEffect, useState } from "react";
import "./index.css";
import { showreelProjects } from "./showreelProjects.js";

const AUTO_ROTATE_DELAY = 5200;

function ProjectShowreel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);
  const activeProject = showreelProjects[activeIndex];

  useEffect(() => {
    if (!isAutoScrollEnabled) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % showreelProjects.length);
    }, AUTO_ROTATE_DELAY);

    return () => window.clearInterval(timer);
  }, [isAutoScrollEnabled]);

  const handleProjectSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-center gap-8 pt-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-4">
              <img
                src="images/me.png"
                alt="Mohammed Al Ani"
                className="h-16 w-16 rounded-full border border-white/25 object-cover"
              />
              <div>
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Mohammed Al Ani
                </h1>
                <p className="mt-1 text-sm font-medium text-zinc-300 sm:text-base">
                  Mechatronics Engineering <span className="text-white">@ UWaterloo</span>
                </p>
              </div>
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-zinc-400">
              Selected project reel
            </p>
            <h2 className="text-5xl font-bold leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              The work speaks first.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg">
              A quick look at my projects that span robotics, computer vision, AI, and full-stack development.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full border border-white bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-zinc-200"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/20 bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:border-white/50"
              >
                Contact me
              </a>
              <a
                href="https://github.com/mohammed-alan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-zinc-200 transition hover:border-white/50 hover:text-white"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-al-anii"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 bg-black px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-zinc-200 transition hover:border-white/50 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative mb-3 flex justify-end">
              <button
                type="button"
                onClick={() => setIsAutoScrollEnabled((isEnabled) => !isEnabled)}
                className={`rounded-full border px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition ${
                  isAutoScrollEnabled
                    ? "border-white bg-white text-black hover:bg-zinc-200"
                    : "border-white/15 bg-black/40 text-zinc-300 hover:border-white/30 hover:text-white"
                }`}
                aria-pressed={isAutoScrollEnabled}
              >
                Auto scroll {isAutoScrollEnabled ? "On" : "Off"}
              </button>
            </div>
            <div className="relative overflow-hidden border border-white/20 bg-black">
              <video
                key={`${activeProject.title}-feature`}
                className="aspect-[16/10] w-full object-cover animate-[showreel-fade_420ms_ease-out]"
                src={activeProject.video}
                poster={activeProject.poster}
                autoPlay
                muted
                loop
                playsInline
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent"></div>
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-300">
                  Now showing
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  {activeProject.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-300">
                  {activeProject.skills.join(" / ")}
                </p>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6">
              {showreelProjects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => handleProjectSelect(index)}
                  className={`group relative aspect-[4/3] overflow-hidden border bg-black text-left transition ${
                    activeIndex === index
                      ? "border-white"
                      : "border-white/10 hover:border-white/30"
                  }`}
                  aria-label={`Show ${project.title}`}
                >
                  <video
                    src={project.video}
                    poster={project.poster}
                    className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                    autoPlay
                    muted
                    loop
                    playsInline
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent"></div>
                  <span className="absolute bottom-2 left-2 right-2 truncate text-[11px] font-semibold text-white">
                    {project.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.24em] text-zinc-500">
          <span>Robotics</span>
          <span>AI</span>
          <span>Computer vision</span>
          <span className="hidden sm:inline">Full stack</span>
        </div>
      </div>
    </section>
  );
}

export default ProjectShowreel;
