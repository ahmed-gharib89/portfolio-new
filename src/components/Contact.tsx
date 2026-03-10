"use client";

import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "ahmed.gharib89@gmail.com", href: "mailto:ahmed.gharib89@gmail.com" },
  { icon: Phone, label: "Phone", value: "+2010 96995535", href: "tel:+201096995535" },
  { icon: MapPin, label: "Location", value: "Cairo, Egypt", href: null },
  { icon: Github, label: "GitHub", value: "ahmed-gharib89", href: "https://github.com/ahmed-gharib89" },
  { icon: Linkedin, label: "LinkedIn", value: "ahmed-gharib89", href: "https://linkedin.com/in/ahmed-gharib89" },
];

export default function Contact() {
  return (
    <AnimatedSection id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Have a project in mind or want to discuss data engineering? I&apos;d love to hear from you.
          </p>
          <div className="w-20 h-1 bg-primary/50 mx-auto rounded-full mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact cards */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all"
                  >
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = `mailto:ahmed.gharib89@gmail.com?subject=${encodeURIComponent("Portfolio Contact")}&body=${encodeURIComponent("Hello Ahmed,")}`;
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
            />
            <textarea
              placeholder="Your message..."
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/25 flex items-center justify-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </AnimatedSection>
  );
}
