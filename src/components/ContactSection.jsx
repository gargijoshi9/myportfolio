import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Code, FileText, ArrowUpRight, Download } from "lucide-react";
import resumePdf from "../data/Gargi_Resume.pdf";

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

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // null, 'sending', 'success', 'error'
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleContactClick = (e, contact) => {
    if (contact.name === "/EMAIL") {
      e.preventDefault();
      navigator.clipboard.writeText("gargijoshi0902@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
      
      // Fallback: trigger mailto compose window
      window.location.href = contact.href;
    } else if (contact.name === "/RESUME.PDF") {
      setIsResumeOpen(!isResumeOpen);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Honeypot check
    if (formData.get("botcheck")) {
      setFormStatus("success");
      e.target.reset();
      return;
    }

    setFormStatus("sending");
    formData.append("access_key", "4be24801-1f4a-4f1c-b979-56e282026dac");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setFormStatus("success");
        e.target.reset();
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setFormStatus("error");
    }
  };

  const contacts = [
    {
      name: "/EMAIL",
      href: "mailto:gargijoshi0902@gmail.com",
      icon: <Mail className="w-5 h-5 text-hero-rose" />,
      desc: "Get in touch directly"
    },
    {
      name: "/LINKEDIN",
      href: "https://www.linkedin.com/in/gargi-joshi-a9246b331/",
      icon: <LinkedinIcon className="w-5 h-5 text-hero-rose" />,
      desc: "Connect professionally"
    },
    {
      name: "/GITHUB",
      href: "https://github.com/gargijoshi9",
      icon: <GithubIcon className="w-5 h-5 text-hero-rose" />,
      desc: "Explore repositories"
    },
    {
      name: "/RESUME.PDF",
      href: resumePdf,
      icon: <FileText className="w-5 h-5 text-hero-rose" />,
      desc: isResumeOpen ? "Click to collapse preview" : "Click to view preview"
    }
  ];

  return (
    <section id="contact" className="relative bg-hero-bg text-hero-text py-20 px-6 md:px-12 border-t border-accent/20">
      {/* Container */}
      <div className="max-w-6xl mx-auto flex flex-col justify-between min-h-[500px]">
        {/* Contact Info Header */}
        <div className="mb-12 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 tracking-tight">
              Let's build something <span className="italic font-serif text-hero-rose">odd</span> together.
            </h2>
            <p className="max-w-xl text-hero-rose/80 font-sans text-base md:text-lg leading-relaxed mx-auto md:mx-0">
              Research collaborations, internship intros, or a chat about Tea & Cats my inbox is open.
            </p>
          </motion.div>
        </div>

        {/* Contact Main Grid (Form + Links) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 max-w-5xl w-full mx-auto items-stretch">
          {/* Contact Form Column (60% / col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 w-full flex"
          >
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-6 p-6 md:p-8 border border-hero-rose/25 bg-hero-bg/50 rounded-xl w-full">
              {/* Botcheck Honeypot */}
              <input type="text" name="botcheck" className="hidden" style={{ display: "none" }} />
              
              <div className="flex flex-col">
                <label htmlFor="name" className="font-mono text-xs font-semibold tracking-wider text-hero-rose mb-2">
                  /NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="px-4 py-3 bg-[#3a1418] border border-hero-rose/25 focus:border-hero-rose focus:ring-1 focus:ring-hero-rose text-white rounded-lg outline-none font-sans transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="font-mono text-xs font-semibold tracking-wider text-hero-rose mb-2">
                  /EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="px-4 py-3 bg-[#3a1418] border border-hero-rose/25 focus:border-hero-rose focus:ring-1 focus:ring-hero-rose text-white rounded-lg outline-none font-sans transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="font-mono text-xs font-semibold tracking-wider text-hero-rose mb-2">
                  /MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="px-4 py-3 bg-[#3a1418] border border-hero-rose/25 focus:border-hero-rose focus:ring-1 focus:ring-hero-rose text-white rounded-lg outline-none font-sans transition-all duration-200 resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="px-6 py-2.5 bg-hero-rose text-hero-bg font-mono text-xs font-bold rounded-full hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-250 flex items-center justify-center space-x-1.5 shadow-md cursor-pointer"
                >
                  <span>{formStatus === "sending" ? "sending..." : "send_message()"}</span>
                </button>

                {formStatus === "success" && (
                  <span className="text-green-400 font-mono text-xs flex items-center">
                    ✓ got it — I'll reply soon.
                  </span>
                )}

                {formStatus === "error" && (
                  <span className="text-red-400 font-mono text-xs flex items-center">
                    ✗ something broke — email me directly.
                  </span>
                )}
              </div>
            </form>
          </motion.div>

          {/* Links Column (40% / col-span-5) */}
          <div className="lg:col-span-5 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 h-full">
              {contacts.map((contact, index) => {
                const isResume = contact.name === "/RESUME.PDF";
                const CardComponent = isResume ? motion.div : motion.a;
                return (
                  <CardComponent
                    key={contact.name}
                    href={isResume ? undefined : contact.href}
                    target={isResume ? undefined : (contact.href.startsWith("mailto:") ? undefined : "_blank")}
                    rel={isResume ? undefined : (contact.href.startsWith("mailto:") ? undefined : "noopener noreferrer")}
                    onClick={(e) => handleContactClick(e, contact)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ y: -4, borderColor: "rgba(232, 180, 188, 0.6)", backgroundColor: "rgba(58, 20, 24, 0.9)" }}
                    className="flex flex-col items-center justify-center text-center p-6 border border-hero-rose/25 bg-hero-bg/50 rounded-xl transition-all duration-200 group min-h-[140px] lg:h-full relative cursor-pointer select-none"
                  >
                    <div className="absolute top-4 right-4 z-10">
                      {isResume ? (
                        <a
                          href={contact.href}
                          download="Gargi_Joshi_Resume.pdf"
                          onClick={(e) => e.stopPropagation()}
                          className="p-1.5 hover:bg-hero-rose/25 rounded transition-all duration-250 group/download inline-flex items-center justify-center"
                          title="Download Resume"
                        >
                          <Download className="w-4 h-4 text-hero-rose/60 group-hover/download:text-hero-rose transition-colors duration-200" />
                        </a>
                      ) : (
                        <ArrowUpRight className="w-4 h-4 text-hero-rose/40 group-hover:text-hero-rose transition-colors duration-200" />
                      )}
                    </div>
                    <div className="p-2.5 bg-hero-bg border border-hero-rose/10 rounded-full mb-3">
                      {contact.icon}
                    </div>
                    <div>
                      <span className="font-mono text-sm font-semibold tracking-wider text-hero-rose block mb-1">
                        {contact.name}
                      </span>
                      <span className="text-hero-text/60 text-xs font-sans">
                        {contact.name === "/EMAIL" && copiedEmail ? (
                          <span className="text-green-400 font-semibold font-mono">Copied to clipboard!</span>
                        ) : (
                          contact.desc
                        )}
                      </span>
                    </div>
                  </CardComponent>
                );
              })}
            </div>
          </div>
        </div>

        {/* Resume Preview Iframe */}
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-5xl mx-auto mb-16 border border-hero-rose/25 bg-hero-bg/30 rounded-xl p-2 overflow-hidden shadow-2xl"
          >
            <div className="flex justify-between items-center px-4 py-2 border-b border-hero-rose/10 mb-2">
              <span className="font-mono text-xs text-hero-rose/80">
                Gargi_Joshi_Resume.pdf
              </span>
              <a
                href={resumePdf}
                download="Gargi_Joshi_Resume.pdf"
                className="font-mono text-xs text-hero-rose hover:text-white flex items-center space-x-1 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Copy</span>
              </a>
            </div>
            <div className="w-full h-[600px] md:h-[800px] rounded-lg overflow-hidden bg-[#2b1013]">
              <iframe
                src={`${resumePdf}#toolbar=1`}
                className="w-full h-full border-none"
                title="Gargi Joshi Resume Preview"
              />
            </div>
          </motion.div>
        )}

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
