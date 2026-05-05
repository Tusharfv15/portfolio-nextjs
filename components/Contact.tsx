import { personalInfo } from "@/data/portfolio";

export default function Contact() {
  return (
    <section className="py-16 md:py-section-padding px-4 md:px-8 bg-surface-container-lowest" id="contact">
      <div className="max-w-7xl mx-auto text-center space-y-stack-md reveal-on-scroll">
        <span className="font-label-caps text-primary tracking-[0.3em] uppercase">
          Let&apos;s build the future
        </span>
        <h2 className="font-display text-4xl sm:text-5xl md:text-display text-white">Start a Conversation</h2>
        <div className="pt-stack-md flex flex-col md:flex-row gap-gutter justify-center items-center">
          <a
            href={`mailto:${personalInfo.email}`}
            className="bg-white text-black px-10 py-5 font-label-caps uppercase tracking-widest hover:bg-primary transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
}
