"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  {
    name: "Data Engineering",
    icon: "🔧",
    skills: [
      { name: "Data Integration", level: 95 },
      { name: "Pipeline Development", level: 90 },
      { name: "ETL Processes", level: 85 },
      { name: "Data Warehousing", level: 90 },
      { name: "Data Modeling", level: 85 },
    ],
  },
  {
    name: "Programming",
    icon: "💻",
    skills: [
      { name: "SQL", level: 95 },
      { name: "Python", level: 90 },
      { name: "SQL Server", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    name: "Cloud",
    icon: "☁️",
    skills: [
      { name: "Azure", level: 90 },
      { name: "AWS", level: 85 },
      { name: "GCP", level: 80 },
    ],
  },
  {
    name: "Visualization",
    icon: "📊",
    skills: [
      { name: "Power BI", level: 95 },
      { name: "SSRS", level: 90 },
      { name: "Paginated Reports", level: 85 },
      { name: "Data Visualization", level: 90 },
    ],
  },
  {
    name: "Machine Learning",
    icon: "🧠",
    skills: [
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 80 },
      { name: "PyTorch", level: 75 },
      { name: "Predictive Analytics", level: 80 },
    ],
  },
  {
    name: "Big Data",
    icon: "⚡",
    skills: [
      { name: "PySpark", level: 85 },
      { name: "Synapse", level: 85 },
      { name: "Delta Lake", level: 80 },
    ],
  },
];

const tools = [
  "VS Code", "Azure Data Studio", "SSMS", "Azure Portal", "PowerShell",
  "Power BI", "Docker", "Kubernetes", "Git", "Selenium", "dbt", "ADF",
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  return (
    <div className="mb-3">
      <div className="flex justify-between text-sm mb-1">
        <span className="text-foreground">{name}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-accent rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-primary to-purple-500"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ delay, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <AnimatedSection id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === i
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active category skills */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="p-6 rounded-xl border border-border bg-card">
            {categories[activeTab].skills.map((skill, j) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={j * 0.1} />
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <div className="mt-16 text-center">
          <h3 className="text-lg font-semibold mb-6">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -2 }}
                className="px-4 py-2 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
