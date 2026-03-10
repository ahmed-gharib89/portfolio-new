"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "NYC Taxi Data Pipeline",
    description: "End-to-end data pipeline for NYC taxi trip data — ingestion, transformation, and analytics using modern data stack tools.",
    tags: ["Python", "Data Pipeline", "ETL", "Analytics"],
    repo: "https://github.com/ahmed-gharib89/nyc-taxi-pipeline",
    icon: "🚕",
  },
  {
    title: "AutoSense dbt Task",
    description: "Data transformation project using dbt (data build tool) for structured analytics engineering and data modeling.",
    tags: ["dbt", "SQL", "Data Modeling", "Analytics Engineering"],
    repo: "https://github.com/ahmed-gharib89/autosense-dbt-task",
    icon: "🔄",
  },
  {
    title: "n8n Workflow Automation",
    description: "Fork of n8n workflow automation platform with custom integrations and enhancements for data engineering workflows.",
    tags: ["n8n", "Automation", "TypeScript", "Workflows"],
    repo: "https://github.com/ahmed-gharib89/n8n",
    icon: "⚡",
  },
  {
    title: "World Bank Data Analysis",
    description: "Comprehensive analysis of World Bank datasets with visualizations and insights on global development indicators.",
    tags: ["Python", "Pandas", "Data Analysis", "Visualization"],
    repo: "https://github.com/ahmed-gharib89/world-bank-analysis",
    icon: "🌍",
  },
];

export default function Projects() {
  return (
    <AnimatedSection id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all block"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{project.icon}</span>
                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Github size={18} className="text-muted-foreground" />
                  <ExternalLink size={18} className="text-muted-foreground" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-accent text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/ahmed-gharib89"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-sm font-medium hover:bg-accent transition-all"
          >
            <Github size={18} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </AnimatedSection>
  );
}
