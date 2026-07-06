import React from "react";
import { motion } from "framer-motion";
import { Mail, Code, FileText, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ className, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function ContactSection() {
  const currentYear = new Date().getFullYear();

  const contacts = [
    {
      name: "/EMAIL",
      href: "mailto:gargijoshi.pict@gmail.com", // sensible default or placeholder
      icon: <Mail className="w-5 h-5 text-hero-rose" />,
      desc: "Get in touch directly"
    },
    {
      name: "/LINKEDIN",
      href: "https://linkedin.com/in/gargi-joshi-", // placeholder
      icon: <LinkedinIcon className="w-5 h-5 text-hero-rose" />,
      desc: "Connect professionally"
    },
    {
      name: "/GITHUB",
      href: "https://github.com/gargi2506", // placeholder
      icon: <GithubIcon className="w-5 h-5 text-hero-rose" />,
      desc: "Explore repositories"
    },
    {
      name: "/LEETCODE",
      href: "https://leetcode.com/u/gargi_25/", // placeholder
      icon: <Code className="w-5 h-5 text-hero-rose" />,
      desc: "Problem solving profile"
    },
    {
      name: "/RESUME.PDF",
      href: "#", // placeholder
      icon: <FileText className="w-5 h-5 text-hero-rose" />,
      desc: "Download curriculum vitae"
    }
  ];

  return (
    <section id="contact" className="relative bg-hero-bg text-hero-text py-20 px-6 md:px-12 border-t border-accent/20">
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[500px]">
        {/* Contact Info Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
              Let's build something <span className="italic font-serif text-hero-rose">odd</span> together.
            </h2>
            <p className="max-w-xl text-hero-rose/80 font-sans text-base md:text-lg leading-relaxed">
              Research collaborations, internship intros, or a chat about tea and transformers — my inbox is open.
            </p>
          </motion.div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(232, 180, 188, 0.6)", backgroundColor: "rgba(58, 20, 24, 0.9)" }}
              className="flex flex-col justify-between p-5 border border-hero-rose/25 bg-hero-bg/50 rounded-xl transition-all duration-200 group h-[140px]"
            >
              <div className="flex justify-between items-start">
                <div className="p-2.5 bg-hero-bg border border-hero-rose/10 rounded-lg">
                  {contact.icon}
                </div>
                <ArrowUpRight className="w-5 h-5 text-hero-rose/40 group-hover:text-hero-rose transition-colors duration-200" />
              </div>
              <div>
                <span className="font-mono text-sm font-semibold tracking-wider text-hero-rose block mb-1">
                  {contact.name}
                </span>
                <span className="text-hero-text/60 text-xs font-sans">
                  {contact.desc}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Footer info */}
        <div className="border-t border-hero-rose/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-xs md:text-sm text-hero-rose/65">
          <div className="flex items-center space-x-2">
            <span className="text-white">$</span>
            <span>echo "made with tea, terminals, and one very persistent cat."</span>
          </div>
          <div>
            &copy; {currentYear} Gargi Joshi. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}
