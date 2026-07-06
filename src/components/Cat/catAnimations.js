export const catAnimations = {
  idle: {
    scaleY: [1, 1.02, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  blink: {
    scaleY: [1, 0, 1],
    transition: {
      duration: 0.15,
      repeat: Infinity,
      repeatDelay: 4,
      ease: "easeInOut"
    }
  },
  tailWag: {
    rotate: [0, -12, 12, 0],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  hover: {
    y: -4,
    transition: {
      duration: 0.2
    }
  },
  jump: {
    y: [0, -35, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};
