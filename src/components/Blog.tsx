"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Building Scalable Data Pipelines with Azure Synapse",
    excerpt: "A deep dive into designing and implementing enterprise-grade data pipelines using Azure Synapse Analytics.",
    date: "Coming Soon",
    readTime: "8 min read",
    tag: "Data Engineering",
  },
  {
    title: "From Accounting to Data Engineering: My Career Journey",
    excerpt: "How I transitioned from traditional finance to cutting-edge data engineering over 8+ years.",
    date: "Coming Soon",
    readTime: "6 min read",
    tag: "Career",
  },
  {
    title: "Power BI Best Practices for Enterprise Dashboards",
    excerpt: "Lessons learned from building dashboards at companies like Coca-Cola, VOIS, and ITWorx.",
    date: "Coming Soon",
    readTime: "10 min read",
    tag: "Visualization",
  },
];

export default function Blog() {
  return (
    <AnimatedSection id="blog" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground">Thoughts on data engineering, analytics, and technology</p>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all cursor-default"
            >
              <span className="inline-block px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary mb-4">
                {post.tag}
              </span>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </div>
                <span className="text-primary/60">{post.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
