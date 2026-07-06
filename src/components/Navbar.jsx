import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { theme } from "../config/theme";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { name: "/projects", href: "#projects" },
    { name: "/experience", href: "#experience" },
    { name: "/achievements", href: "#achievements" },
    { name: "/art", href: "#art" },
    { name: "/contact", href: "#contact" }
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.name);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-hero-bg text-hero-text border-b border-accent/20 px-4 md:px-8 py-4 backdrop-blur-md bg-opacity-95">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / Brand */}
        <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")} className="flex items-center space-x-1 font-mono text-lg font-bold tracking-tight">
          <span className="text-hero-text">gargi</span>
          <span className="text-hero-rose">.init()</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "steps(2)" }}
            className="w-[8px] h-[18px] bg-hero-rose inline-block ml-0.5"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 font-mono text-sm">
          <div className="flex space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors duration-200 hover:text-hero-rose ${
                  activeSection === link.name ? "text-hero-rose font-medium border-b border-hero-rose" : "text-hero-rose/70"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <motion.a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-1.5 border border-hero-rose text-hero-rose rounded-full hover:bg-hero-rose hover:text-hero-bg transition-colors duration-200"
          >
            say_hi()
          </motion.a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-1 text-hero-rose focus:outline-none hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden absolute top-full left-0 w-full bg-hero-bg border-b border-accent/20 px-6 py-6 flex flex-col space-y-4 font-mono text-base shadow-lg"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`hover:text-hero-rose transition-colors py-2 ${
                activeSection === link.name ? "text-hero-rose" : "text-hero-rose/70"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="w-full text-center py-2.5 border border-hero-rose text-hero-rose rounded-full hover:bg-hero-rose hover:text-hero-bg transition-colors"
          >
            say_hi()
          </a>
        </motion.div>
      )}
    </nav>
  );
}
