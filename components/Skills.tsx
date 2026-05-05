import { skills } from "@/data/portfolio";
import type { IconType } from "react-icons";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";
import { TbBrain, TbDatabase, TbChartDots3 } from "react-icons/tb";

const SKILL_ICONS: Record<string, IconType> = {
  // Core Languages
  Python: SiPython,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  C: SiC,
  "C++": SiCplusplus,
  SQL: TbDatabase,
  // AI / ML
  PyTorch: SiPytorch,
  LangChain: TbBrain,
  LangGraph: TbChartDots3,
  "Scikit-Learn": SiScikitlearn,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  // Frontend & Infra
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
};

export default function Skills() {
  return (
    <section className="py-16 md:py-section-padding px-4 md:px-8 bg-surface-container-lowest" id="skills">
      <div className="max-w-7xl mx-auto reveal-on-scroll">
        <div className="grid grid-cols-12 gap-gutter items-start">
          <div className="col-span-12 md:col-span-4 md:sticky md:top-32">
            <h2 className="font-h1 text-3xl md:text-h1 text-white">Technical Arsenal</h2>
            <p className="text-outline mt-4 font-body-md">
              A curated stack of technologies I use to build and deploy intelligent systems.
            </p>
          </div>

          <div className="col-span-12 md:col-span-7 md:col-start-6 space-y-stack-lg">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="space-y-stack-sm">
                <h4 className="font-label-caps text-primary border-b border-zinc-800 pb-2">
                  {category}
                </h4>
                <div className="flex flex-wrap gap-3 pt-4">
                  {items.map((item) => {
                    const Icon = SKILL_ICONS[item];
                    return (
                      <div
                        key={item}
                        className="group flex items-center gap-3 px-5 py-3 border border-zinc-800 hover:border-primary/40 bg-surface-container-low hover:bg-primary/5 transition-all duration-300 cursor-default"
                      >
                        {Icon && (
                          <Icon className="w-5 h-5 flex-shrink-0 text-primary/70 group-hover:text-primary transition-colors duration-300" />
                        )}
                        <span className="font-label-caps text-[13px] tracking-widest text-zinc-400 group-hover:text-white transition-colors duration-300">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
