import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import ExperienceSection from "./components/ExperienceSection";
import AchievementsSection from "./components/AchievementsSection";
import ArtSection from "./components/ArtSection";
import ContactSection from "./components/ContactSection";
import Cat from "./components/Cat/Cat";

function App() {
  const [isCatAwake, setIsCatAwake] = useState(() => {
    const saved = localStorage.getItem("gargi-cat-awake");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("gargi-cat-awake", JSON.stringify(isCatAwake));
  }, [isCatAwake]);

  return (
    <div className="bg-cream-bg text-text-primary min-h-screen selection:bg-accent/15 selection:text-accent font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <ProjectsSection />
        <ExperienceSection />
        <AchievementsSection />
        <ArtSection />
      </main>
      <ContactSection />
      <Cat isAwake={isCatAwake} onToggleWake={() => setIsCatAwake(!isCatAwake)} />
    </div>
  );
}

export default App;
