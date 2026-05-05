"use client";
import { useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { HiOutlineDocumentDownload, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const NAV_LINKS = ["About", "Experience", "Projects", "Skills", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#09090B]/70 backdrop-blur-xl border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-20">
        <div className="text-lg font-bold tracking-tighter text-white uppercase">
          {personalInfo.name}
        </div>

        <div className="hidden md:flex gap-8 items-center font-['Inter'] text-sm tracking-wide uppercase">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-zinc-400 hover:text-white transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white font-label-caps text-[10px] uppercase tracking-widest transition-colors duration-300"
          >
            <HiOutlineDocumentDownload className="w-4 h-4" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden md:block bg-primary-container text-on-primary-container px-6 py-2.5 font-label-caps uppercase text-[10px] tracking-widest hover:brightness-110 transition-all duration-300"
          >
            Get in Touch
          </a>

          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#09090B]/95 backdrop-blur-xl border-t border-zinc-800 px-4 py-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block font-['Inter'] text-sm tracking-wide uppercase text-zinc-400 hover:text-white transition-colors duration-300 py-3"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block bg-primary-container text-on-primary-container px-6 py-3 font-label-caps uppercase text-[10px] tracking-widest hover:brightness-110 transition-all duration-300 text-center mt-4"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
