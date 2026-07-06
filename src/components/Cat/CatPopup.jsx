import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { X, Trophy } from "lucide-react";
import { catFacts } from "../../data/catFacts";

export default function CatPopup({ onClose }) {
  const containerRef = useRef(null);
  const [fact, setFact] = useState("");
  const [playCount, setPlayCount] = useState(0);
  const [showPaw, setShowPaw] = useState(false);

  // Position of yarn ball
  const yarnX = useMotionValue(0);
  const yarnY = useMotionValue(0);

  // Select a random fact on mount
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setFact(catFacts[randomIndex]);
  }, []);

  // Monitor yarn position to trigger "batting" animation
  useEffect(() => {
    const unsubscribeX = yarnX.on("change", (latestX) => {
      // If dragged close to the left side, show paw batting it!
      if (latestX < -40 && !showPaw) {
        setShowPaw(true);
        setTimeout(() => {
          setShowPaw(false);
          // Gently push it back
          yarnX.set(latestX + 40);
          setPlayCount(p => p + 1);
        }, 300);
      }
    });

    return () => {
      unsubscribeX();
    };
  }, [yarnX, showPaw]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 20 }}
      className="absolute bottom-24 left-6 z-40 bg-cream-surface border-2 border-text-primary rounded-2xl p-5 shadow-xl w-[290px] text-text-primary font-mono text-xs flex flex-col space-y-4"
    >
      {/* Header */}
      <div className="flex justify-between items-center border-b border-cream-border pb-2">
        <span className="text-[10px] font-bold text-accent">t.fact()</span>
        <button
          onClick={onClose}
          className="text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
        >
          <X size={14} />
        </button>
      </div>

      {/* Fact Bubble */}
      <div className="bg-cream-bg border border-cream-border p-3 rounded-lg text-text-primary/90 leading-relaxed font-sans text-xs">
        {fact}
      </div>

      {/* Yarn Play Area */}
      <div 
        ref={containerRef}
        className="relative h-[80px] bg-cream-bg/40 border border-dashed border-cream-border rounded-lg overflow-hidden flex flex-col justify-end p-2"
      >
        <span className="absolute top-2 left-2 text-[9px] text-text-secondary/50 uppercase select-none">
          drag the yarn → {playCount > 0 && `(Batted: ${playCount})`}
        </span>

        {/* Draggable Yarn Ball */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          style={{ x: yarnX, y: yarnY }}
          whileDrag={{ scale: 1.15 }}
          className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-accent cursor-grab active:cursor-grabbing flex items-center justify-center shadow-md select-none"
        >
          {/* Yarn texture using simple CSS overlay */}
          <div className="w-6 h-6 border-2 border-white/40 rounded-full flex items-center justify-center rotate-45">
            <div className="w-4 h-4 border border-white/30 rounded-full" />
          </div>
        </motion.div>

        {/* Mascot's Paw (appearing to swipe at the ball) */}
        {showPaw && (
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -40, opacity: 0 }}
            className="absolute left-1 bottom-3 text-2xl select-none"
          >
            🐾
          </motion.div>
        )}
        
        {playCount >= 5 && (
          <span className="absolute top-2 right-2 text-[9px] text-accent flex items-center gap-0.5 animate-bounce">
            <Trophy size={10} /> Playful Cat!
          </span>
        )}
      </div>
    </motion.div>
  );
}
