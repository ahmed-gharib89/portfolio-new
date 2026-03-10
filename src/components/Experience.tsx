"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const experiences = [
  {
    title: "Principal Advanced Analytics Engineer",
    company: "ITWorx",
    period: "Dec 2025 – Present",
    current: true,
    bullets: [
      "Spearhead complex analytics initiatives combining data modeling and algorithm design",
      "Lead ML, statistical methodologies, and dynamic data visualization projects",
      "Mentor junior professionals and drive cutting-edge analytics adoption",
    ],
  },
  {
    title: "Senior Data Engineer",
    company: "Raisa Energy",
    period: "Mar 2025 – Nov 2025",
    bullets: [
      "Led scalable data infrastructure and pipelines for business intelligence",
      "Architected ETL processes for large-scale multi-source data integration",
      "Implemented data governance strategies for quality, security, and compliance",
    ],
  },
  {
    title: "Principal Advanced Analytics Engineer",
    company: "ITWorx",
    period: "Oct 2023 – Feb 2025",
    bullets: [
      "Led complex analytics initiatives with data modeling and algorithm design",
      "Drove ML and statistical methodologies across the organization",
      "Mentored team members in modern analytics practices",
    ],
  },
  {
    title: "Business Insights Senior Lead",
    company: "VOIS (Vodafone)",
    period: "May 2022 – Oct 2023",
    bullets: [
      "Automated processes reducing manual intervention by 25%",
      "Built Power BI dashboards for Pre-sales, Demand, and WIP tracking",
      "Migrated data infrastructure to AWS Redshift and BigQuery",
    ],
  },
  {
    title: "Data Scientist",
    company: "Atos",
    period: "May 2021 – May 2022",
    bullets: [
      "Built ML models with Python, Scikit-learn, and TensorFlow",
      "Deployed solutions with Docker and Kubernetes in production",
      "Managed ECK on AKS and MongoDB IaaS on Azure",
    ],
  },
  {
    title: "Senior BI Developer",
    company: "Coca-Cola",
    period: "Dec 2020 – May 2021",
    bullets: [
      "Created sales dashboards with Power Query, DAX, and VBA",
      "Automated commission calculations and cheque systems",
    ],
  },
  {
    title: "Data Analyst",
    company: "Al Safy Group",
    period: "May 2018 – Dec 2020",
    bullets: ["Data analysis and reporting for business operations"],
  },
  {
    title: "Accounts Payable Supervisor",
    company: "Master's Food",
    period: "May 2014 – May 2018",
    bullets: ["Financial operations management and team supervision"],
  },
  {
    title: "Accountant",
    company: "Al Fares / Cottonil",
    period: "Feb 2013 – May 2014",
    bullets: ["Financial accounting and reporting"],
  },
];

export default function Experience() {
  return (
    <AnimatedSection id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className={`relative mb-8 md:mb-12 pl-8 md:pl-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <div
                className={`absolute top-2 w-3 h-3 rounded-full border-2 border-primary bg-background left-0 md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6.5px]" : "md:left-[-6.5px]"
                } ${exp.current ? "bg-primary" : ""}`}
              />

              <div className="p-5 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all group">
                <div className={`flex items-center gap-2 mb-1 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  {exp.current && (
                    <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                      Current
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <p className="text-primary/80 text-sm font-medium mb-3">{exp.company}</p>
                <ul className={`space-y-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="text-sm text-muted-foreground">
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
