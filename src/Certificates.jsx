import React from "react";

const certificates = [
  {
    title: "Machine Learning with Python: Foundations",
    description:
      "A comprehensive course covering the fundamentals of machine learning using Python.",
    image: "images/pythonml.jfif",
    skills: ["Python", "Machine Learning", "Data Science"],
    link: true,
    linkUrl:
      "https://www.linkedin.com/learning/certificates/09eef5d07b3333eedaff7cc2282fe4fb2e400e51474f052179c0c3570894be24?u=55034593",
  },
  {
    title: "MATLAB Onramp",
    description:
      "A beginner-friendly introduction to MATLAB, covering the basics of programming and data analysis.",
    image: "images/matlab.png",
    skills: ["MATLAB", "Data Analysis", "Programming"],
    link: true,
    linkUrl:
      "https://www.linkedin.com/in/mohammed-al-anii/overlay/1736830201297/single-media-viewer/?profileId=ACoAAD254j4BPaKPEufiu1HLwmslJEhbVCiYzik",
  },
];

function Certificates() {
  return (
    <div className="z-10 py-16 px-4">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">Certificates</h2>
      <p className="text-zinc-400 text-sm text-center mb-12">
        Courses and certifications I've completed
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {certificates.map((certificate, index) => (
          <div key={index} className="group relative">
            {/* Hover glow */}
            <div className="absolute -inset-0.5 rounded-xl blur-xl opacity-0 group-hover:opacity-40 transition duration-500 bg-sky-500/20 z-0"></div>

            {/* Card */}
            <div className="relative z-10 flex flex-col h-full bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all duration-300">
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-white mb-2 leading-tight">
                  {certificate.title}
                </h3>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  {certificate.description}
                </p>

                {/* Bottom area */}
                <div className="mt-auto pt-3 border-t border-zinc-800 flex flex-wrap items-end justify-between gap-3">
                  {/* Skills */}
                  <div className="flex flex-wrap gap-1.5 flex-grow min-w-0">
                    {certificate.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="text-[11px] font-medium bg-zinc-900 text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-800 hover:bg-zinc-800 hover:text-white transition duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <div className="flex gap-2 flex-shrink-0">
                    {certificate.link && (
                      <a
                        href={certificate.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-white p-1.5 rounded-lg hover:bg-zinc-800 transition-all duration-200"
                        aria-label={`${certificate.title} Certificate Link`}
                      >
                        <svg
                          className="w-5 h-5"
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

export default Certificates;