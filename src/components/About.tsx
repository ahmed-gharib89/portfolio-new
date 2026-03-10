"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { MapPin, Briefcase, GraduationCap, Languages } from "lucide-react";

const stats = [
  { label: "Years Experience", value: "8+", icon: Briefcase },
  { label: "Projects Delivered", value: "50+", icon: "📊" },
  { label: "Technologies", value: "30+", icon: "⚡" },
  { label: "Companies", value: "7+", icon: "🏢" },
];

export default function About() {
  return (
    <AnimatedSection id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I&apos;m a Principal Advanced Analytics Engineer at ITWorx with a passion for
              turning complex data challenges into elegant, scalable solutions. My journey
              from accounting to cutting-edge data engineering has given me a unique perspective
              that blends business acumen with deep technical expertise.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              With experience spanning Azure, AWS, and GCP ecosystems, I specialize in
              building robust data pipelines, implementing ML solutions, and creating
              impactful visualizations that drive business decisions. I&apos;m passionate about
              mentoring teams and driving adoption of modern analytics practices.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, text: "Cairo, Egypt" },
                { icon: Briefcase, text: "ITWorx" },
                { icon: GraduationCap, text: "B.Com, Ain Shams University" },
                { icon: Languages, text: "Arabic · English" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Icon size={16} className="text-primary shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
              >
                <div className="text-3xl mb-2">
                  {typeof stat.icon === "string" ? stat.icon : <stat.icon className="text-primary" size={28} />}
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
