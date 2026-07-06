import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import resumePdf from "../data/Gargi_Resume.pdf";

export default function Hero() {
  const [blink, setBlink] = useState(true);

  // Blinking cursor effect for the title and terminal
  useEffect(() => {
    const interval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 550);
    return () => clearInterval(interval);
  }, []);

  const [typedText, setTypedText] = useState("");
  const fullName = "Gargi Joshi";

  // Typing effect for the name header
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullName.slice(0, index + 1));
      index++;
      if (index >= fullName.length) {
        clearInterval(interval);
      }
    }, 110);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector("#projects");
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-hero-bg text-hero-text flex items-center pt-28 pb-20 px-6 md:px-12 lg:px-24 overflow-hidden border-b border-accent/20"
    >
      {/* Background terminal grid / noise overlay */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--color-accent)_0%,_transparent_70%] opacity-20 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
        
        {/* Left Side Content (3 columns on desktop) */}
        <div className="lg:col-span-3 flex flex-col justify-center text-left">
          
          {/* Terminal Input Line */}
          <div className="font-mono text-xs md:text-sm text-hero-rose/55 mb-6 md:mb-8 space-y-1">
            <div className="flex items-center space-x-2">
              <span>~/your-truly</span>
              <span className="opacity-60">•</span>
              <span>zsh</span>
            </div>
            <div className="flex items-center space-x-1.5 text-hero-rose/85">
              <span>$</span>
              <span>./gargi.txt</span>
            </div>
          </div>

          {/* Main Title Name */}
          <div className="mb-6 select-none leading-none">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-bold tracking-tight text-white flex items-center flex-wrap min-h-[48px] sm:min-h-[72px] md:min-h-[80px] lg:min-h-[110px]">
              <span>{typedText}</span>
              <span 
                className={`inline-block w-[12px] md:w-[16px] h-[48px] sm:h-[64px] md:h-[72px] lg:h-[96px] bg-hero-rose ml-3 ${
                  blink ? "opacity-100" : "opacity-0"
                }`}
                style={{ transition: "opacity 100ms" }}
              />
            </h1>
          </div>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg font-sans max-w-xl mb-8 leading-relaxed">
            <span className="text-white/90">
              Full-Stack & AI Engineer who ships intelligent, high-scale software.
            </span>
            <span className="text-hero-rose">
              {" "}Currently pursuing BTech in IT at PICT Pune.
            </span>
          </p>

          {/* Monospace Indicator */}
          <div className="font-mono text-sm text-hero-rose mb-10 flex items-center space-x-2">
            <span className="text-hero-rose/70">&gt;</span>
            <span className="font-semibold text-white/95">Full-Stack & AI Engineer & Full Time Student</span>
          </div>

          {/* CTAs / Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="px-6 py-2.5 bg-hero-rose text-hero-bg font-mono text-xs font-bold rounded-full hover:bg-white transition-colors duration-250 flex items-center space-x-1.5 shadow-md"
            >
              <span>View Projects</span>
              <span>↓</span>
            </a>

            <a
              href={resumePdf}
              download="Gargi_Joshi_Resume.pdf"
              className="px-6 py-2.5 border border-hero-rose/45 bg-transparent text-hero-rose font-mono text-xs font-semibold rounded-full hover:bg-hero-rose/10 transition-colors duration-200 flex items-center space-x-2"
            >
              <FileText size={13} className="text-hero-rose" />
              <span>Resume.pdf</span>
            </a>
          </div>

        </div>

        {/* Right Side Window Container (2 columns on desktop) */}
        <div className="lg:col-span-2 w-full max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full bg-[#2B1418]/65 border border-hero-rose/15 rounded-2xl p-5 shadow-2xl backdrop-blur-md"
          >
            {/* Mock Window Top Bar */}
            <div className="flex items-center justify-between border-b border-hero-rose/10 pb-4 mb-4 select-none">
              <div className="flex items-center space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ef4444] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#eab308] opacity-80" />
                <div className="w-3 h-3 rounded-full bg-[#22c55e] opacity-80" />
              </div>
              <div className="font-mono text-xs text-hero-rose/55">
                ~/gargi/profile.png
              </div>
              <div className="w-12" /> {/* spacing placeholder */}
            </div>

            {/* Inner Profile Image Placeholder */}
            <div className="aspect-[4/4] w-full bg-gradient-to-br from-[#3a1418] to-[#1e0a0c] rounded-xl flex flex-col items-center justify-center border border-hero-rose/10 relative overflow-hidden p-6 mb-5 group">
              {/* GJ Text */}
              <div className="text-5xl sm:text-6xl font-serif italic text-hero-rose/85 tracking-wider select-none mb-3 transform group-hover:scale-105 transition-transform duration-300">
                GJ
              </div>
              
              <div className="font-mono text-[10px] text-hero-rose/40 uppercase tracking-widest select-none">
                [ portrait.png — pending upload ]
              </div>

              {/* Ambient decoration */}
              <div className="absolute inset-0 bg-radial-[circle_at_center,_var(--color-hero-rose)_0%,_transparent_75%] opacity-[0.04]" />
            </div>

            {/* Monospace Metadata Table */}
            <div className="font-mono text-xs space-y-2.5 text-hero-rose/75">
              <div className="flex justify-between items-center py-0.5 border-b border-hero-rose/5">
                <span className="opacity-70">role</span>
                <span className="text-white font-medium">AI/ML + Full-Stack</span>
              </div>
              
              <div className="flex justify-between items-center py-0.5 border-b border-hero-rose/5">
                <span className="opacity-70">cgpa</span>
                <span className="text-white font-medium">9.415 / 10</span>
              </div>
              
              <div className="flex justify-between items-center py-0.5 border-b border-hero-rose/5">
                <span className="opacity-70">base</span>
                <span className="text-white font-medium">Pune, IN</span>
              </div>
              
              <div className="flex justify-between items-center py-0.5">
                <span className="opacity-70">status</span>
                <span className="text-[#22c55e] font-semibold flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-[#22c55e] rounded-full animate-ping inline-block" />
                  <span>open to internships</span>
                </span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
