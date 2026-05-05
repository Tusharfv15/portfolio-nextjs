import { education } from "@/data/portfolio";

const PORTRAIT_URL = "/Portrait.jpeg"

export default function About() {
  return (
    <section className="py-16 md:py-section-padding px-4 md:px-8 bg-surface-container-lowest" id="about">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-gutter items-center reveal-on-scroll">
        <div className="col-span-12 md:col-span-5 order-2 md:order-1">
          <h2 className="font-h1 text-3xl md:text-h1 text-white mb-stack-md">
            Engineering with <br />
            <span className="text-primary">Intentionality.</span>
          </h2>

          <div className="space-y-stack-md">
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Currently pursuing B.Tech in Computer Science at {education.shortName}, I specialize in
              AI/ML engineering and full-stack development. From multi-agent LLM systems at Bosch
              Research to deploying ML models on cloud GPUs at scale, I bridge research and
              production.
            </p>
            <p className="font-body-md text-outline">
              My work spans LangGraph orchestration, PyTorch model training, and RAG pipelines, all
              backed by clean API design with FastAPI and Node.js. I believe the best engineering is
              invisible: fast, reliable, and maintainable.
            </p>
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7 order-1 md:order-2 mb-12 md:mb-0">
          <div className="relative group">
            <div className="absolute -inset-4 border border-primary/20 rounded-xl transition-transform duration-500 group-hover:scale-105" />
            <img
              alt="Portrait of Tushar Parsai"
              className="relative z-10 w-full h-auto aspect-square object-cover rounded-xl shadow-2xl border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700"
              src={PORTRAIT_URL}
            />
            <div className="absolute bottom-4 left-4 z-20 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10 rounded-lg">
              <span className="font-label-caps text-[10px] text-white tracking-widest">
                {education.shortName.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
