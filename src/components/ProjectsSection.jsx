import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { featuredProjects, secondaryProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-cream-bg">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 border-b border-cream-border pb-6">
          <span className="font-mono text-xs tracking-widest text-text-secondary uppercase">
            /01 • projects
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mt-2 mb-4 tracking-tight leading-tight">
            Things I've <span className="italic font-serif text-accent">built</span>, shipped, and broken.
          </h2>
          <p className="max-w-xl text-text-secondary text-sm md:text-base leading-relaxed">
            A working set — half research, half product. The ones in the limelight are what I'd walk you through first.
          </p>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} isFeatured={true} />
          ))}
        </div>

        {/* Toggle Button Wrapper (Centered) */}
        <div className="flex flex-col items-center my-8">
          {!showSecondary && (
            <motion.button
              layout
              onClick={() => setShowSecondary(true)}
              className="px-6 py-2.5 bg-hero-bg text-hero-rose border border-hero-rose/25 hover:border-hero-rose rounded-full font-mono text-xs flex items-center space-x-2 transition-all shadow-md"
            >
              <span>Show more projects</span>
              <ChevronDown size={14} />
            </motion.button>
          )}
        </div>

        {/* Secondary Projects Section */}
        <AnimatePresence>
          {showSecondary && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Secondary Projects Upper Toggle Button (as in Image 1) */}
              <div className="flex justify-start mb-6">
                <button
                  onClick={() => setShowSecondary(false)}
                  className="px-5 py-2 bg-accent text-white rounded-full font-mono text-xs flex items-center space-x-2 transition-all hover:bg-accent-hover shadow-sm"
                >
                  <span>Hide more projects</span>
                  <ChevronUp size={14} />
                </button>
              </div>

              {/* Secondary Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {secondaryProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} isFeatured={false} />
                ))}
              </div>

              {/* Secondary Projects Lower Toggle Button (as in Image 4) */}
              <div className="flex justify-start mt-6">
                <button
                  onClick={() => setShowSecondary(false)}
                  className="px-5 py-2 bg-accent text-white rounded-full font-mono text-xs flex items-center space-x-2 transition-all hover:bg-accent-hover shadow-sm"
                >
                  <span>Hide more projects</span>
                  <ChevronUp size={14} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
