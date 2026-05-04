import { personalInfo } from "@/data/portfolio";
import { SiLinkedin, SiGithub, SiLeetcode } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import type { IconType } from "react-icons";

const socials: { label: string; href: string; Icon: IconType }[] = [
  { label: "LinkedIn", href: personalInfo.linkedin, Icon: SiLinkedin },
  { label: "GitHub", href: personalInfo.github, Icon: SiGithub },
  { label: "LeetCode", href: personalInfo.leetcode, Icon: SiLeetcode },
  { label: "Email", href: `mailto:${personalInfo.email}`, Icon: HiOutlineMail },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm font-semibold text-zinc-200">{personalInfo.name}</div>

        <div className="flex gap-6">
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="group flex items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-colors duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="font-['Inter'] text-xs hidden sm:inline">{label}</span>
            </a>
          ))}
        </div>

        <p className="font-['Inter'] text-xs text-zinc-600">
          © 2025 {personalInfo.name}. Built with precision.
        </p>
      </div>
    </footer>
  );
}
