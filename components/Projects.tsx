import { projects } from "@/data/portfolio";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  return (
    <section className="py-section-padding px-8 overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-stack-lg reveal-on-scroll">
          <h2 className="font-h1 text-h1 text-white">Selected Works</h2>
          <span className="font-label-caps text-outline">2024 – 2026</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12 items-start">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`${project.gridClass} group project-card parallax-card glass-card p-3 reveal-on-scroll`}
              data-speed={project.speed}
            >
              <div
                className={`relative overflow-hidden ${project.aspect} bg-surface-container-high rounded-sm`}
              >
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-110"
                  src={project.image}
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-h2 text-h2 text-white">{project.title}</h3>
                  <div className="flex items-center gap-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub repository"
                        className="text-zinc-500 hover:text-white transition-colors duration-300"
                      >
                        <SiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Live demo"
                        className="text-primary hover:translate-x-0.5 hover:-translate-y-0.5 transition-transform duration-300"
                      >
                        <span className="material-symbols-outlined text-xl">north_east</span>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-outline text-sm leading-relaxed max-w-lg mb-6">
                  {project.description}
                </p>

                <div className="project-details flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 font-label-caps text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
