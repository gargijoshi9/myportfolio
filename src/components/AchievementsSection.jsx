import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, Star } from "lucide-react";
import { achievements } from "../data/achievements";

export default function AchievementsSection() {
  const getIcon = (type) => {
    switch (type) {
      case "trophy":
        return <Trophy size={18} />;
      case "medal":
        return <Award size={18} />;
      case "star":
        return <Star size={18} />;
      default:
        return <Award size={18} />;
    }
  };

  return (
    <section id="achievements" className="py-20 px-6 md:px-12 bg-cream-bg border-t border-cream-border">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-cream-border pb-6">
          <span className="font-mono text-xs tracking-widest text-text-secondary uppercase">
            /03 • achievements
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mt-2 mb-4 tracking-tight leading-tight">
            Some <span className="italic font-serif text-accent">receipts</span> for the work.
          </h2>
          <p className="max-w-xl text-text-secondary text-sm md:text-base leading-relaxed">
            Wins, shortlists, and shipped work that made a measurable dent.
          </p>
        </div>

        {/* Achievements List */}
        <div className="relative border-l border-cream-border/60 ml-6 md:ml-8 space-y-0">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative pl-12 md:pl-16 pb-12 last:pb-0"
            >
              {/* Vertical connector line overlay */}
              {index < achievements.length - 1 && (
                <div className="absolute left-[-1px] top-8 bottom-0 w-[1px] bg-cream-border/60" />
              )}
              
              {/* Circle Icon Indicator */}
              <div className="absolute left-[-17px] top-1 p-2 bg-cream-surface border border-cream-border rounded-full text-accent shadow-sm z-10 flex items-center justify-center w-8 h-8 md:w-9 md:h-9">
                {getIcon(ach.iconType)}
              </div>

              {/* Text content */}
              <div className="pt-0.5 border-b border-cream-border/40 pb-6">
                <h3 className="text-lg md:text-xl font-heading font-bold text-text-primary">
                  {ach.title}
                </h3>
                <p className="text-sm text-text-secondary mt-1 font-sans">
                  {ach.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
