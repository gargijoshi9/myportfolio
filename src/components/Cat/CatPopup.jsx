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
      className="absolute bottom-full left-0 mb-4 z-40 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] border border-white/40 w-[250px] p-4 flex flex-col gap-3"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <span
          className="text-[10px] font-bold font-mono tracking-wide"
          style={{ color: accentColor }}
        >
          t.fact()
        </span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
        >
          <X size={14} />
        </button>
      </div>

      {/* Fact, quote style */}
      <p className="font-mono text-[11px] md:text-xs leading-relaxed text-gray-800">
        &ldquo;{fact}&rdquo;
      </p>

      <div className="border-t border-gray-200/50" />

      {/* Yarn Play Area */}
      <div
        ref={containerRef}
        className="relative h-[48px] flex items-center justify-between px-1"
      >
        <span className="text-[9px] font-mono text-gray-400 uppercase select-none">
          drag yarn →
          {playCount > 0 && (
            <span className="ml-1 text-gray-500 font-bold">({playCount})</span>
          )}
        </span>

        {playCount >= 5 && (
          <span
            className="absolute -top-1 left-1/2 -translate-x-1/2 text-[9px] flex items-center gap-0.5 animate-bounce font-bold"
            style={{ color: accentColor }}
          >
          </span>
        )}

        {/* Mascot's Paw (appearing to swipe at the ball) */}
        {showPaw && (
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 20, opacity: 0 }}
            className="absolute right-9 text-lg select-none"
          >
            🐾
          </motion.div>
        )}

        {/* Draggable Glossy Emoji-Style Yarn Ball (🧶) */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.12}
          style={{ x: yarnX, y: yarnY }}
          whileDrag={{ scale: 1.12 }}
          className="relative w-9 h-9 rounded-full cursor-grab active:cursor-grabbing shadow-md select-none shrink-0"
        >
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <defs>
              {/* Radial gradient for glossy 3D yarn ball sphere */}
              <radialGradient id="yarnBallGrad" cx="35%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#FFA4B2" />
                <stop offset="65%" stopColor="#884049ff" />
                <stop offset="100%" stopColor="#672c33ff" />
              </radialGradient>
            </defs>
            {/* Base Sphere */}
            <circle cx="18" cy="18" r="17" fill="url(#yarnBallGrad)" />
            {/* Yarn thread details */}
            <path d="M 3,15 Q 18,5 33,15" stroke={yarnHighlight} strokeWidth="1.5" fill="none" opacity="0.65" />
            <path d="M 3,21 Q 18,31 33,21" stroke={yarnHighlight} strokeWidth="1.5" fill="none" opacity="0.65" />
            <path d="M 7,8 Q 18,18 7,28" stroke={yarnHighlight} strokeWidth="1.5" fill="none" opacity="0.45" />
            <path d="M 29,8 Q 18,18 29,28" stroke={yarnHighlight} strokeWidth="1.5" fill="none" opacity="0.45" />
            {/* Soft sphere gloss reflection */}
            <ellipse cx="11" cy="11" rx="3.5" ry="1.8" fill="#FFFFFF" opacity="0.38" transform="rotate(-30 11 11)" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}