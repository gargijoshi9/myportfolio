import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { X, Trophy } from "lucide-react";
import { catFacts } from "../../data/catFacts";
import { catTheme } from "../../config/catTheme";

export default function CatPopup({ onClose }) {
  const containerRef = useRef(null);
  const [fact, setFact] = useState("");
  const [playCount, setPlayCount] = useState(0);
  const [showPaw, setShowPaw] = useState(false);

  const { accentColor, yarnColor, yarnHighlight } = catTheme;

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
          setPlayCount((p) => p + 1);
        }, 300);
      }
    });

    return () => {
      unsubscribeX();
    };
  }, [yarnX, showPaw]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.85, y: 16 }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="absolute bottom-24 left-6 z-40 bg-white rounded-2xl shadow-xl border border-black/5 w-[290px] p-5 flex flex-col gap-4"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span
          className="text-[11px] font-bold font-mono tracking-wide"
          style={{ color: accentColor }}
        >
          t.fact()
        </span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X size={16} />
        </button>
      </div>

      {/* Fact, quote style */}
      <p className="font-serif text-[15px] leading-snug text-gray-800">
        &ldquo;{fact}&rdquo;
      </p>

      <div className="border-t border-gray-100" />

      {/* Yarn Play Area */}
      <div
        ref={containerRef}
        className="relative h-[64px] flex items-center justify-between px-1"
      >
        <span className="text-[10px] font-mono text-gray-400 uppercase select-none">
          drag the yarn →
          {playCount > 0 && (
            <span className="ml-1 text-gray-500">({playCount})</span>
          )}
        </span>

        {playCount >= 5 && (
          <span
            className="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] flex items-center gap-0.5 animate-bounce"
            style={{ color: accentColor }}
          >
            <Trophy size={10} /> Playful Cat!
          </span>
        )}

        {/* Mascot's Paw (appearing to swipe at the ball) */}
        {showPaw && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            className="absolute right-9 text-xl select-none"
          >
            🐾
          </motion.div>
        )}

        {/* Draggable Yarn Ball */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.12}
          style={{ x: yarnX, y: yarnY }}
          whileDrag={{ scale: 1.12 }}
          className="relative w-11 h-11 rounded-full cursor-grab active:cursor-grabbing shadow-md select-none shrink-0"
        >
          <svg viewBox="0 0 44 44" className="w-full h-full">
            <circle cx="22" cy="22" r="21" fill={yarnColor} />
            <path d="M 4,18 Q 22,6 40,18" stroke={yarnHighlight} strokeWidth="2" fill="none" opacity="0.7" />
            <path d="M 4,26 Q 22,38 40,26" stroke={yarnHighlight} strokeWidth="2" fill="none" opacity="0.7" />
            <path d="M 8,10 Q 22,22 8,34" stroke={yarnHighlight} strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M 36,10 Q 22,22 36,34" stroke={yarnHighlight} strokeWidth="2" fill="none" opacity="0.5" />
            <ellipse cx="15" cy="14" rx="4" ry="2.5" fill="#FFFFFF" opacity="0.25" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}