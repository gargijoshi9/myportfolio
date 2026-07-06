import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Power, PowerOff } from "lucide-react";
import { catTheme as importedCatTheme } from "../../config/catTheme";
import { catAnimations } from "./catAnimations";
import CatPopup from "./CatPopup";

export default function Cat({ isAwake, onToggleWake }) {
  const [showPopup, setShowPopup] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const catRef = useRef(null);

  // Pupil tracking mouse cursor relative to cat head center
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!catRef.current) return;
      
      const rect = catRef.current.getBoundingClientRect();
      // Center of the cat head relative to viewport
      const catX = rect.left + rect.width / 2;
      // Head center Y is at 52px inside the 140px viewbox
      const catY = rect.top + (rect.height * 52) / 140;
      
      const dx = e.clientX - catX;
      const dy = e.clientY - catY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist === 0) return;

      // Max pupil displacement in pixels within the eye socket
      const maxDisplacement = 2.0;
      const force = Math.min(maxDisplacement, dist / 40);

      const moveX = (dx / dist) * force;
      const moveY = (dy / dist) * force;

      setMousePos({ x: moveX, y: moveY });
    };

    if (isAwake) {
      window.addEventListener("mousemove", handleMouseMove);
    }
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isAwake]);

  const handleClick = () => {
    if (!isAwake) return;
    setIsJumping(true);
    setShowPopup(true);
    setTimeout(() => {
      setIsJumping(false);
    }, 500);
  };

  const {
    bodyColor,
    bellyColor,
    outlineColor,
    accentColor,
    platformTop,
    platformHighlight,
    platformBase,
    size
  } = importedCatTheme;

  return (
    <div ref={catRef} className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-3">
      {/* Fact Popup bubble */}
      <AnimatePresence>
        {isAwake && showPopup && (
          <CatPopup onClose={() => setShowPopup(false)} />
        )}
      </AnimatePresence>

      {/* Cat Mascot Frame */}
      <div className="relative">
        <AnimatePresence mode="wait">
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
              {/* Minimalist 2D Vector Cat SVG */}
              <svg
                viewBox="0 0 140 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Drop shadow under the platform */}
                <ellipse cx="70" cy="132" rx="52" ry="4" fill={outlineColor} opacity="0.15" />

                {/* Dark, Tiered Rectangular Base Platform */}
                <rect x="16" y="123" width="108" height="9" rx="3.5" fill={platformBase} stroke={outlineColor} strokeWidth="2" />
                <rect x="24" y="115" width="92" height="9" rx="2.5" fill={platformTop} stroke={outlineColor} strokeWidth="1.8" />
                <rect x="32" y="117.5" width="34" height="2" rx="0.8" fill={platformHighlight} opacity="0.6" />

                {/* Thick curved tail extending outward and upward to its left side */}
                <motion.g
                  variants={catAnimations}
                  animate="tailWag"
                  className="origin-[46px_96px]"
                >
                  {/* Outline of tail */}
                  <path
                    d="M 46,96 Q 22,96 22,76 Q 22,56 34,56"
                    stroke={outlineColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Inner fill of tail */}
                  <path
                    d="M 46,96 Q 22,96 22,76 Q 22,56 34,56"
                    stroke={bodyColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                  />
                </motion.g>

                {/* Large plump circular body shape */}
                <ellipse cx="70" cy="94" rx="28" ry="24" fill={bodyColor} stroke={outlineColor} strokeWidth="3" />
                {/* Lighter brown oval patch on its belly */}
                <ellipse cx="70" cy="98" rx="16" ry="12" fill={bellyColor} />

                {/* Tiny, stubby paws at the very bottom */}
                <ellipse cx="56" cy="116" rx="5" ry="3" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />
                <ellipse cx="84" cy="116" rx="5" ry="3" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" />

                {/* Smaller circular head stacked on body */}
                <circle cx="70" cy="52" r="22" fill={bodyColor} stroke={outlineColor} strokeWidth="3" />

                {/* Sharply pointed ears with reddish-pink inner triangles */}
                {/* Left Ear */}
                <polygon points="52,36 44,12 63,28" fill={bodyColor} stroke={outlineColor} strokeWidth="3" strokeLinejoin="round" />
                <polygon points="52,33 47,19 60,28" fill={accentColor} />

                {/* Right Ear */}
                <polygon points="88,36 96,12 77,28" fill={bodyColor} stroke={outlineColor} strokeWidth="3" strokeLinejoin="round" />
                <polygon points="88,33 93,19 80,28" fill={accentColor} />

                {/* Large, wide-set white eyes with small black pupils (Follows cursor) */}
                <motion.g variants={catAnimations} animate="blink" className="origin-[56px_52px]">
                  <circle cx="56" cy="52" r="7" fill="#FFFFFF" stroke={outlineColor} strokeWidth="1.5" />
                  <circle cx={56 + mousePos.x} cy={52 + mousePos.y} r="2.2" fill={outlineColor} />
                </motion.g>
                <motion.g variants={catAnimations} animate="blink" className="origin-[84px_52px]">
                  <circle cx="84" cy="52" r="7" fill="#FFFFFF" stroke={outlineColor} strokeWidth="1.5" />
                  <circle cx={84 + mousePos.x} cy={52 + mousePos.y} r="2.2" fill={outlineColor} />
                </motion.g>

                {/* Tiny pink nose & small pink 'w'-shaped smile */}
                <polygon points="70,57 68,54 72,54" fill={accentColor} />
                <path
                  d="M 66,60 Q 68,63 70,60 Q 72,63 74,60"
                  stroke={accentColor}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Two thin white whiskers extending from each cheek */}
                {/* Left cheek */}
                <line x1="44" y1="55" x2="30" y2="54" stroke="#FFFFFF" strokeWidth="1.2" />
                <line x1="44" y1="59" x2="28" y2="60" stroke="#FFFFFF" strokeWidth="1.2" />
                {/* Right cheek */}
                <line x1="96" y1="55" x2="110" y2="54" stroke="#FFFFFF" strokeWidth="1.2" />
                <line x1="96" y1="59" x2="112" y2="60" stroke="#FFFFFF" strokeWidth="1.2" />
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
                {/* Tiered rectangular base */}
                <rect x="16" y="123" width="108" height="9" rx="3.5" fill={platformBase} stroke={outlineColor} strokeWidth="2" />
                <rect x="24" y="115" width="92" height="9" rx="2.5" fill={platformTop} stroke={outlineColor} strokeWidth="1.8" />

                {/* Curled sleeping blob */}
                <path
                  d="M 32,115
                     C 28,92 48,82 70,82
                     C 92,82 112,92 108,115
                     Z"
                  fill={bodyColor}
                  stroke={outlineColor}
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
                {/* ears peeking */}
                <path d="M 46,84 Q 43,72 52,81 Z" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" strokeLinejoin="round" />
                <path d="M 94,84 Q 97,72 88,81 Z" fill={bodyColor} stroke={outlineColor} strokeWidth="2.5" strokeLinejoin="round" />

                {/* Curled tail wrapped around */}
                <path
                  d="M 102,115 C 105,98 120,100 116,115"
                  stroke={bodyColor}
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />

                {/* Sleeping closed eyes (pink accent) */}
                <path d="M 52,96 Q 57,100 62,96" stroke={accentColor} strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M 78,96 Q 83,100 88,96" stroke={accentColor} strokeWidth="2" strokeLinecap="round" fill="none" />

                {/* Zzz */}
                <motion.path
                  d="M 82,72 L 88,72 L 82,78 L 88,78"
                  stroke={accentColor}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  animate={{ y: [0, -3, 0], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
                <motion.path
                  d="M 94,62 L 100,62 L 94,68 L 100,68"
                  stroke={accentColor}
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.6, ease: "easeInOut" }}
                />
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