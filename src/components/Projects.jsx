import React, { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "BuyMate",
      description:
        "This is my portfolio website showcasing my front-end skills, key projects, and contact details in a clean, modern, and responsive design.",
      image: "/img/buymate.webp",
      category: "web",
      technologies: ["React", "CSS"],
      liveLink: "https://ahmedvbdelaziz.github.io/Portoflio/",
      githubLink: "https://github.com/ahmedvbdelaziz/Portoflio/",
    },
    {
      id: 2,
      title: "E-commerce Watch Store",
      description:
        "A stylish and responsive e-commerce store for showcasing and selling luxury watches.",
      image: "/img/chrono.webp",
      category: "web",
      technologies: ["HTML", "CSS", "JS"],
      liveLink: "https://ahmedvbdelaziz.github.io/CHRONO/",
      githubLink: "https://github.com/ahmedvbdelaziz/CHRONO",
    },
    {
      id: 3,
      title: "La-Maison Restaurant",
      description:
        "A modern and responsive restaurant website showcasing the menu and key info in a clean, user-friendly layout.",
      image: "/img/la-maison.webp",
      category: "web",
      technologies: ["HTML", "CSS", "JS"],
      liveLink: "https://ahmedvbdelaziz.github.io/Restaurant/",
      githubLink: "https://github.com/ahmedvbdelaziz/Restaurant",
    },
    {
      id: 4,
      title: "AROMA Coffee Shop",
      description:
        "A responsive coffee shop website with a modern design, showcasing the menu and ambiance.",
      image: "/img/coffee.webp",
      category: "web",
      technologies: ["HTML", "CSS", "JS"],
      liveLink: "https://ahmedvbdelaziz.github.io/Aroma---Coffee/",
      githubLink: "https://github.com/ahmedvbdelaziz/Aroma---Coffee",
    },
  ];

  const filters = [
    { name: "All", value: "all" },
    { name: "Web Apps", value: "web" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="works"
      className="min-h-screen bg-gray-100 py-12 sm:py-16 lg:py-20"
    >
      {/* Section header */}
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
          Works
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-12 sm:mb-16">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`px-4 sm:px-6 py-2 rounded-md font-medium border-2 transition-all duration-200 ${
              activeFilter === filter.value
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-purple-600 text-purple-600 hover:bg-indigo-100"
            }`}
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.name}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 max-w-6xl mx-auto px-4 sm:px-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Image */}
            <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300">
                <div className="flex gap-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-white hover:text-purple-400 transition"
                  >
                    <ExternalLink size={22} />
                    <span className="text-xs sm:text-sm mt-1">Live Demo</span>
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center text-white hover:text-purple-400 transition"
                  >
                    <Github size={22} />
                    <span className="text-xs sm:text-sm mt-1">Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-purple-700 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
