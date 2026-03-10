"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ahmed Gharib. Built with Next.js & Tailwind CSS.
        </p>
        <div className="flex gap-4">
          {[
            { icon: Github, href: "https://github.com/ahmed-gharib89" },
            { icon: Linkedin, href: "https://linkedin.com/in/ahmed-gharib89" },
            { icon: Mail, href: "mailto:ahmed.gharib89@gmail.com" },
          ].map(({ icon: Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
