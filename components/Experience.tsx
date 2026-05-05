import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section className="py-16 md:py-section-padding px-4 md:px-8" id="experience">
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <h2 className="font-h1 text-3xl md:text-h1 text-white mb-stack-lg">Professional Journey</h2>

        <div className="relative space-y-0">
          {/* Animated vertical line */}
          <div className="hidden md:block absolute left-[16.666667%] ml-[calc(24px/2)] top-0 bottom-0 w-1 bg-zinc-800 -translate-x-1/2 z-0">
            <div
              id="timeline-progress"
              className="absolute top-0 left-0 w-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 ease-out"
              style={{ height: "0%" }}
            />
          </div>

          {experience.map((exp, i) => (
            <div
              key={exp.company}
              className="timeline-item group grid grid-cols-12 gap-gutter py-16 border-b border-zinc-900/50 hover:border-zinc-700 transition-colors relative z-10"
              data-node={i}
            >
              <div className="col-span-12 md:col-span-2">
                <span className="font-label-caps text-outline">{exp.period}</span>
              </div>

              <div className="hidden md:flex col-span-1 justify-center relative">
                <div className="timeline-node w-5 h-5 rounded-full bg-zinc-700 border-4 border-background z-20 mt-1.5 transition-all duration-300" />
              </div>

              <div className="col-span-12 md:col-span-5">
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className={`${exp.logoHeight} w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <div className="w-px self-stretch bg-zinc-700" />
                  <h3 className="font-h2 text-h2 text-white group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                </div>
                <p className="text-zinc-500 font-label-caps uppercase">{exp.company}</p>
                <p className="text-outline text-xs mt-0.5">{exp.location}</p>
              </div>

              <div className="col-span-12 md:col-span-4">
                <p className="text-outline text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
