import React from "react";
import { motion } from "framer-motion";
import { Palette } from "lucide-react";
import { paintings } from "../data/paintings";

export default function ArtSection() {
  return (
    <section id="art" className="py-20 px-6 md:px-12 bg-cream-bg border-t border-cream-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-cream-border pb-6">
          <span className="font-mono text-xs tracking-widest text-text-secondary uppercase">
            /04 • art
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mt-2 mb-4 tracking-tight leading-tight">
            When the laptop closes, <span className="italic font-serif text-accent">paint</span> opens.
          </h2>
          <p className="max-w-xl text-text-secondary text-sm md:text-base leading-relaxed">
            A small, growing gallery. Placeholders for now — real works landing soon.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {paintings.map((painting, index) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-cream-surface border border-cream-border rounded-2xl overflow-hidden shadow-sm flex flex-col group"
            >
              {/* Painting Image or Placeholder Tile */}
              <div className="aspect-[4/3] w-full bg-linear-to-tr from-accent/5 to-accent/20 relative flex items-center justify-center p-6 border-b border-cream-border overflow-hidden">
                {/* Palette Icon */}
                <div className="p-4 bg-cream-surface/80 rounded-full border border-cream-border/50 text-accent group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                  <Palette size={24} />
                </div>
                
                {/* Dynamic gradient shift decoration */}
                <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--color-accent)_0%,_transparent_100%] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>

              {/* Title & Description */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-text-secondary block mb-1">
                    {painting.label}
                  </span>
                  <h3 className="text-base font-heading font-bold text-text-primary">
                    {painting.title}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary/80 font-sans mt-3 italic leading-relaxed">
                  {painting.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
