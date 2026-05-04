"use client";
import { useEffect } from "react";

export default function ScrollEffects() {
  useEffect(() => {
    // Reveal on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

    const handleScroll = () => {
      // Parallax cards
      document.querySelectorAll<HTMLElement>(".parallax-card").forEach((card) => {
        const speed = parseFloat(card.dataset.speed ?? "0.05");
        const rect = card.getBoundingClientRect();
        card.style.transform = `translateY(${(window.innerHeight / 2 - rect.top) * speed}px)`;
      });

      // Timeline progress bar
      const progress = document.getElementById("timeline-progress");
      const nodes = document.querySelectorAll<HTMLElement>(".timeline-node");
      if (!progress || nodes.length === 0) return;

      const scrollY = window.scrollY + window.innerHeight * 0.6;
      const firstPos = nodes[0].getBoundingClientRect().top + window.scrollY;
      const lastPos = nodes[nodes.length - 1].getBoundingClientRect().top + window.scrollY;
      const pct = Math.max(0, Math.min(1, (scrollY - firstPos) / (lastPos - firstPos)));
      progress.style.height = `${pct * 100}%`;

      nodes.forEach((node) => {
        const pos = node.getBoundingClientRect().top + window.scrollY;
        if (scrollY >= pos) {
          node.classList.remove("bg-zinc-700");
          node.classList.add("bg-indigo-500", "shadow-[0_0_15px_rgba(99,102,241,0.8)]", "scale-110");
        } else {
          node.classList.add("bg-zinc-700");
          node.classList.remove("bg-indigo-500", "shadow-[0_0_15px_rgba(99,102,241,0.8)]", "scale-110");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      observer.disconnect();
    };
  }, []);

  return null;
}
