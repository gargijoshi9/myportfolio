import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";
import { paintings } from "../data/paintings";

export default function ArtSection() {
  const [activePainting, setActivePainting] = useState(null);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (activePainting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activePainting]);

  return (
    <section id="art" className="py-20 px-6 md:px-12 bg-cream-bg border-t border-cream-border">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-cream-border pb-6">
          <span className="font-mono text-xs tracking-widest text-text-secondary uppercase">
            /04 • painting & digital art
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mt-2 mb-4 tracking-tight leading-tight">
            When the laptop closes, <span className="italic font-serif text-accent">canvas</span> opens.
          </h2>
          <p className="max-w-xl text-text-secondary text-sm md:text-base leading-relaxed">
            A growing gallery of traditional paintings and digital art. Experimenting with different textures and digital brushes.
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
              onClick={() => painting.image && setActivePainting(painting)}
              className={`bg-cream-surface border border-cream-border rounded-2xl overflow-hidden shadow-sm flex flex-col group transition-all duration-300 ${
                painting.image ? "cursor-zoom-in hover:shadow-md" : ""
              }`}
            >
              {/* Painting Image or Placeholder Tile */}
              <div className="aspect-[4/3] w-full bg-linear-to-tr from-accent/5 to-accent/20 relative flex items-center justify-center border-b border-cream-border overflow-hidden">
                {painting.image ? (
                  <img
                    src={painting.image}
                    alt={painting.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <>
                    {/* Palette Icon */}
                    <div className="p-4 bg-cream-surface/80 rounded-full border border-cream-border/50 text-accent group-hover:scale-110 transition-transform duration-300 relative z-10 shadow-sm">
                      <Palette size={24} />
                    </div>
                    
                    {/* Dynamic gradient shift decoration */}
                    <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--color-accent)_0%,_transparent_100%] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  </>
                )}
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activePainting && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActivePainting(null)}
            className="fixed inset-0 z-[100] bg-[#3a1418]/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] flex flex-col items-center bg-cream-surface border border-cream-border p-4 rounded-2xl shadow-2xl overflow-hidden cursor-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div className="overflow-hidden rounded-xl flex items-center justify-center bg-linear-to-tr from-accent/5 to-accent/20">
                <img
                  src={activePainting.image}
                  alt={activePainting.title}
                  className="max-h-[60vh] md:max-h-[70vh] w-auto object-contain"
                />
              </div>

              {/* Details Footer */}
              <div className="mt-4 text-center w-full px-4">
                <span className="font-mono text-[10px] tracking-wider text-text-secondary block mb-1">
                  {activePainting.label}
                </span>
                <h3 className="text-lg font-heading font-bold text-text-primary">
                  {activePainting.title}
                </h3>
                <p className="text-xs text-text-secondary/80 font-sans mt-2 italic leading-relaxed">
                  {activePainting.caption}
                </p>
              </div>

              {/* Floating Close Button */}
              <button
                onClick={() => setActivePainting(null)}
                className="absolute top-6 right-6 p-2 bg-cream-surface border border-cream-border rounded-full text-text-primary hover:bg-accent hover:text-white transition-colors duration-200 shadow-md cursor-pointer flex items-center justify-center"
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
