"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Download, Mail, BookOpen, Github, Linkedin } from "lucide-react";
import ParticlesBackground from "./ParticlesBackground";
import DataFlowAnimation from "./DataFlowAnimation";

const buttonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.8 + custom * 0.1, duration: 0.5 },
  }),
};

const coreSkills = [
  "Data Integration",
  "Data Pipeline Development",
  "Data Modeling",
  "ETL Processes",
  "Python",
  "SQL",
  "Power BI",
  "Azure",
  "AWS",
  "Machine Learning",
];

export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", targetId);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <ParticlesBackground />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 pt-24 pb-12">
        {/* Hero content: text left, photo right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left side — text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm text-muted-foreground"
            >
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse" />
              Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Ahmed <span className="gradient-text">Gharib</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-blue-600 dark:text-blue-400 font-medium"
            >
              Principal Advanced Analytics Engineer at ITWorx
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-2xl leading-relaxed"
            >
              Data Engineer and Analytics Professional with over <strong className="text-foreground">8+ years</strong> of expertise in designing and implementing scalable data solutions across Microsoft Azure, AWS, and Google Cloud platforms. Currently driving advanced analytics initiatives at ITWorx since December 2025.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={0}>
                <a
                  href="#projects"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                  className="w-44 justify-center inline-flex items-center px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>

              <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={1}>
                <a
                  href="/resume.pdf"
                  download
                  className="w-44 justify-center inline-flex items-center px-4 py-3 border border-border hover:bg-accent text-foreground rounded-lg transition-colors font-medium"
                >
                  Download CV
                  <Download className="ml-2 h-4 w-4" />
                </a>
              </motion.div>

              <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={2}>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothScroll(e, "#contact")}
                  className="w-44 justify-center inline-flex items-center px-4 py-3 border border-border hover:bg-accent text-foreground rounded-lg transition-colors font-medium"
                >
                  Contact Me
                  <Mail className="ml-2 h-4 w-4" />
                </a>
              </motion.div>

              <motion.div variants={buttonVariants} initial="initial" animate="animate" custom={3}>
                <a
                  href="#blog"
                  onClick={(e) => handleSmoothScroll(e, "#blog")}
                  className="w-44 justify-center inline-flex items-center px-4 py-3 border border-border hover:bg-accent text-foreground rounded-lg transition-colors font-medium"
                >
                  Read My Blog
                  <BookOpen className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-3 pt-2 justify-center md:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/ahmed-gharib89", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/ahmed-gharib89", label: "LinkedIn" },
                { icon: Mail, href: "mailto:ahmed.gharib89@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:bg-accent hover:border-primary/50 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side — photo */}
          <motion.div
            className="flex-shrink-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-600 dark:border-blue-400 overflow-hidden relative shadow-2xl shadow-blue-500/20">
              <Image
                src="/assets/images/AhmedGharib.png"
                alt="Ahmed Gharib"
                fill
                sizes="(max-width: 768px) 256px, 320px"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Core Skills tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6">Core Skills</h3>
          <div className="flex flex-wrap gap-3">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium transition-colors hover:bg-blue-200 dark:hover:bg-blue-800/40"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Data flow animation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="mt-12">
          <DataFlowAnimation />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs mb-2">Scroll down</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <ArrowDown size={20} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
