import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Power, PowerOff } from "lucide-react";
import { catTheme as importedCatTheme } from "../../config/catTheme";
import { catAnimations } from "./catAnimations";
import CatPopup from "./CatPopup";

export default function Cat({ isAwake, onToggleWake }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  const handleClick = () => {
    if (!isAwake) return;
    setIsJumping(true);
    setShowPopup(true);
    // Reset jump animation after completion
    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  // Extract variables
  const { bodyColor, outlineColor, accentColor, size } = importedCatTheme;

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col items-start gap-3">
      {/* Fact Popup bubble */}
      <AnimatePresence>
        {isAwake && showPopup && (
          <CatPopup onClose={() => setShowPopup(false)} />
        )}
      </AnimatePresence>

      {/* Cat Mascot Frame */}
      <div className="relative">
        <AnimatePresence>
          {isAwake ? (
            <motion.div
              key="active-cat"
              onClick={handleClick}
              variants={catAnimations}
              animate={isJumping ? "jump" : "idle"}
              whileHover="hover"
              className="cursor-pointer select-none origin-bottom relative"
              style={{ width: size, height: size }}
            >
              {/* Custom White Cat SVG */}
              <svg
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Laptop / Stack of books platform */}
                <rect x="15" y="115" width="110" height="8" rx="2" fill="#E8DDD4" stroke={outlineColor} strokeWidth="2" />
                <line x1="20" y1="123" x2="120" y2="123" stroke={outlineColor} strokeWidth="2.5" />
                
                {/* Tail */}
                <motion.path
                  d="M 105,95 C 115,95 125,80 120,60 C 117,45 110,40 108,50"
                  stroke={outlineColor}
                  strokeWidth="6"
                  strokeLinecap="round"
                  variants={catAnimations}
                  animate="tailWag"
                  className="origin-[105px_95px]"
                />

                {/* Body */}
                <path
                  d="M 35,115 C 35,70 65,70 65,115 Z"
                  fill={bodyColor}
                  stroke={outlineColor}
                  strokeWidth="3"
                />
                
                {/* Back / Main Body curves */}
                <path
                  d="M 60,115 C 60,80 110,80 110,115 Z"
                  fill={bodyColor}
                  stroke={outlineColor}
                  strokeWidth="3"
                />

                {/* Head */}
                <circle cx="50" cy="65" r="28" fill={bodyColor} stroke={outlineColor} strokeWidth="3" />

                {/* Ears */}
                {/* Left Ear */}
                <polygon
                  points="26,45 18,12 44,38"
                  fill={bodyColor}
                  stroke={outlineColor}
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <polygon
                  points="28,42 22,18 40,36"
                  fill={accentColor}
                />

                {/* Right Ear */}
                <polygon
                  points="74,45 82,12 56,38"
                  fill={bodyColor}
                  stroke={outlineColor}
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                <polygon
                  points="72,42 78,18 60,36"
                  fill={accentColor}
                />

                {/* Collar */}
                <path
                  d="M 32,83 Q 50,92 68,83"
                  stroke={accentColor}
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <circle cx="50" cy="88" r="3.5" fill="#E8B4BC" stroke={outlineColor} strokeWidth="1" />

                {/* Eyes */}
                {/* Left Eye Container */}
                <motion.g variants={catAnimations} animate="blink" className="origin-[38px_63px]">
                  <ellipse cx="38" cy="63" rx="3.5" ry="5" fill={outlineColor} />
                  <circle cx="36.5" cy="61" r="1" fill="#FFFFFF" />
                </motion.g>

                {/* Right Eye Container */}
                <motion.g variants={catAnimations} animate="blink" className="origin-[62px_63px]">
                  <ellipse cx="62" cy="63" rx="3.5" ry="5" fill={outlineColor} />
                  <circle cx="60.5" cy="61" r="1" fill="#FFFFFF" />
                </motion.g>

                {/* Nose & Whiskers */}
                <polygon points="50,71 47,68 53,68" fill={accentColor} />
                <path d="M 48,74 Q 50,77 52,74" stroke={outlineColor} strokeWidth="1.5" strokeLinecap="round" />
                
                {/* Whiskers */}
                {/* Left */}
                <line x1="22" y1="70" x2="8" y2="72" stroke={outlineColor} strokeWidth="1.5" />
                <line x1="22" y1="76" x2="6" y2="80" stroke={outlineColor} strokeWidth="1.5" />
                {/* Right */}
                <line x1="78" y1="70" x2="92" y2="72" stroke={outlineColor} strokeWidth="1.5" />
                <line x1="78" y1="76" x2="94" y2="80" stroke={outlineColor} strokeWidth="1.5" />
              </svg>
            </motion.div>
          ) : (
            /* Sleeping / Inactive Cat */
            <motion.div
              key="sleeping-cat"
              className="opacity-55 relative origin-bottom select-none"
              style={{ width: size, height: size }}
            >
              <svg
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Base Laptop */}
                <rect x="15" y="115" width="110" height="8" rx="2" fill="#E8DDD4" stroke={outlineColor} strokeWidth="2" />
                
                {/* Curled Sleeping Shape */}
                <path
                  d="M 30,115 C 30,85 110,85 110,115 Z"
                  fill={bodyColor}
                  stroke={outlineColor}
                  strokeWidth="3"
                />
                {/* Curled Tail */}
                <path
                  d="M 105,115 C 105,100 120,105 115,115"
                  stroke={outlineColor}
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Sleeping Closed Eyes (Zs) */}
                <path d="M 45,95 L 53,95 L 45,103 L 53,103" stroke={outlineColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 62,87 L 68,87 L 62,93 L 68,93" stroke={outlineColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M 75,81 L 79,81 L 75,85 L 79,85" stroke={outlineColor} strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Wake/Sleep Toggle Button */}
      <motion.button
        onClick={onToggleWake}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="px-3.5 py-1.5 bg-cream-surface border border-cream-border text-text-primary text-xs rounded-full font-mono flex items-center space-x-1.5 shadow-sm cursor-pointer hover:bg-cream-bg transition-colors"
      >
        {isAwake ? (
          <>
            <PowerOff size={12} className="text-accent" />
            <span>sleep the cat</span>
          </>
        ) : (
          <>
            <Power size={12} className="text-accent" />
            <span>wake the cat</span>
          </>
        )}
      </motion.button>
    </div>
  );
}
