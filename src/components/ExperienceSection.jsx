import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { experiences } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 bg-cream-bg border-t border-cream-border">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-cream-border pb-6">
          <span className="font-mono text-xs tracking-widest text-text-secondary uppercase">
            /02 • experience
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mt-2 mb-4 tracking-tight leading-tight">
            Where I've <span className="italic font-serif text-accent">actually</span> worked.
          </h2>
          <p className="max-w-xl text-text-secondary text-sm md:text-base leading-relaxed">
            Professional internships and open-source contributions.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-6 before:md:left-8 before:w-[2px] before:bg-cream-border/60">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-14 md:pl-20"
            >
              {/* Timeline dot */}
              <div className="absolute left-2 md:left-4 top-1.5 p-2 bg-cream-surface border border-cream-border rounded-full shadow-sm z-10 text-accent">
                <Briefcase size={16} />
              </div>

              {/* Experience Card */}
              <div className="bg-cream-surface border border-cream-border rounded-2xl p-6 md:p-8 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-heading font-bold text-text-primary">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-mono text-text-secondary mt-1 flex flex-wrap items-center gap-2">
                      <span className="text-accent font-semibold">{exp.company}</span>
                      <span>•</span>
                      <span>{exp.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-xs font-mono bg-cream-bg text-text-secondary px-3 py-1.5 rounded-full border border-cream-border w-fit h-fit">
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start text-sm text-text-primary/80 leading-relaxed font-sans">
                      <CheckCircle2 size={14} className="text-accent mt-1 mr-3 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
