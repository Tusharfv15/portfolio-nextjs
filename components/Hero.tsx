import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 max-w-7xl mx-auto pt-20">
      <div className="max-w-4xl space-y-stack-md reveal-on-scroll">
        <span className="font-label-caps text-primary tracking-[0.3em] uppercase block">
          {personalInfo.heroLabel}
        </span>

        <h1 className="font-display text-display leading-none">
          I am{" "}
          <span className="obsidian-gradient">{personalInfo.name}</span>.
        </h1>

        <p className="font-body-lg text-body-lg text-outline max-w-2xl">
          {personalInfo.heroTagline}
        </p>

        <div className="pt-stack-md flex gap-gutter">
          <a
            href="#projects"
            className="group flex items-center gap-2 font-label-caps uppercase text-white hover:text-primary transition-colors"
          >
            View Projects
            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
