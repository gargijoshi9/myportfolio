import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Lock } from "lucide-react";

const GithubIcon = ({ size = 12, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);


export default function ProjectCard({ project, isFeatured }) {
  const {
    id,
    title,
    subtitle,
    type,
    problem,
    myMove,
    outcome,
    description,
    stack,
    liveUrl,
    githubUrl,
    isInProgress,
    isPrivate
  } = project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: "0 12px 30px -10px rgba(43, 20, 24, 0.08)" }}
      className={`relative bg-cream-surface border border-cream-border rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-200 ${
        isFeatured ? "col-span-1 min-h-[380px]" : "col-span-1 min-h-[300px]"
      }`}
    >
      <div>
        {/* Card Header Metadata */}
        <div className="flex justify-between items-center mb-4 text-xs font-mono tracking-wider text-text-secondary">
          <div className="flex items-center space-x-2">
            <span>/{id}</span>
            <span>•</span>
            <span>{type}</span>
            {isInProgress && (
              <span className="ml-2 px-2 py-0.5 bg-accent/10 text-accent font-semibold text-[10px] rounded-full flex items-center gap-1 border border-accent/20">
                <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                in progress
              </span>
            )}
            {isPrivate && (
              <span className="ml-2 px-2 py-0.5 bg-text-secondary/15 text-text-secondary font-semibold text-[10px] rounded-full flex items-center gap-1 border border-text-secondary/20">
                <Lock size={10} />
                private repo
              </span>
            )}
          </div>
        </div>

        {/* Title & Subtitle */}
        <div className="mb-6">
          <h3 className="text-2xl font-heading font-bold text-text-primary leading-tight">
            {title}
          </h3>
          <p className="text-sm font-sans text-text-secondary mt-1">
            {subtitle}
          </p>
        </div>

        {/* Card Body content */}
        {isFeatured ? (
          /* Three Column Layout for Featured Projects */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 text-sm">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-text-secondary/60 uppercase block mb-1.5">
                Challenge
              </span>
              <p className="text-text-primary/85 leading-relaxed font-sans text-sm">
                {problem}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-text-secondary/60 uppercase block mb-1.5">
               Built
              </span>
              <p className="text-text-primary/85 leading-relaxed font-sans text-sm">
                {myMove}
              </p>
            </div>
            <div>
              <span className="font-mono text-[10px] tracking-widest text-text-secondary/60 uppercase block mb-1.5">
                Impact
              </span>
              <p className="text-text-primary/85 leading-relaxed font-sans text-sm">
                {outcome}
              </p>
            </div>
          </div>
        ) : (
          /* Simple Paragraph Layout for Secondary Projects */
          <div className="mb-6">
            <p className="text-text-primary/85 leading-relaxed font-mono text-sm whitespace-pre-line">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Footer tags and links */}
      <div>
        {/* Stack Tags */}
        {stack && stack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {stack.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 bg-cream-bg text-text-primary/80 font-mono text-[11px] rounded-full border border-cream-border"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        {!isPrivate && (
          <div className="flex space-x-3 font-mono text-xs">
            <a
              href={liveUrl || "#"}
              onClick={(e) => !liveUrl && e.preventDefault()}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center space-x-1.5 ${
                liveUrl
                  ? "border-accent text-accent hover:bg-accent hover:text-white"
                  : "border-cream-border text-text-secondary/40 cursor-not-allowed"
              }`}
            >
              <ExternalLink size={12} />
              <span>Live {liveUrl ? "" : "• soon"}</span>
            </a>

            <a
              href={githubUrl || "#"}
              onClick={(e) => !githubUrl && e.preventDefault()}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center space-x-1.5 ${
                githubUrl
                  ? "border-accent text-accent hover:bg-accent hover:text-white"
                  : "border-cream-border text-text-secondary/40 cursor-not-allowed"
              }`}
            >
              <GithubIcon size={12} />
              <span>GitHub {githubUrl ? "" : "• soon"}</span>
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
}
