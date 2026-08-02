import { Variants } from "framer-motion";

export const KEYBOARD_THEME = {
  keyGradient: "from-cyan-900 via-blue-900 to-slate-900",
  hoverKeyGradient: "from-cyan-800 via-blue-800 to-slate-800",
  glowColor: "rgba(56, 189, 248, 0.5)",
  unfocusedGlowColor: "rgba(56, 189, 248, 0.2)"
};

export const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
};

export const techIconVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 10,
    },
  },
};

export const textVariants: Variants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export const titleVariants: Variants = {
  rest: { y: 0 },
  hover: { y: -3 }
};

export const buttonVariants: Variants = {
  rest: { y: 0, opacity: 0.9 },
  hover: { y: -2, opacity: 1 }
};

export const staggerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export const buttonHover = {
  scale: 1.04,
  transition: { duration: 0.2 }
};

export const staggerChildren: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const articleVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const paragraphVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export const fadeInLeft: Variants = {
  hidden: { x: -40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  }
};

export const fadeInRight: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 200, damping: 20 }
  }
};

export const buttonBaseStyles = `inline-flex items-center justify-center rounded-lg text-xs font-medium
                                 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2
                                 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 disabled:opacity-50
                                 disabled:pointer-events-none bg-[#0e172e] border border-cyan-500/30 text-cyan-300
                                 hover:bg-cyan-500/15 hover:border-cyan-400 hover:text-white h-7 py-1 px-3`;

export const letterVariants: Variants = {
  hidden: { y: 48, opacity: 0 },
  visible: (i: number) => ({
    y: 0, opacity: 1,
    transition: { delay: i * 0.06, type: "spring", stiffness: 120 },
  }),
};

export const orbVariants: Variants = {
  animate: {
    scale: [1, 1.10, 1],
    y: [0, 15, 0],
    x: [0, 8, 0],
    transition: {
      duration: 18,
      repeat: Infinity,
      repeatType: "mirror"
    },
  }
};

export const timelineLineVariants: Variants = {
  hidden: { height: 0, opacity: 0 },
  visible: (height: number) => ({
    height,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  }),
};

export const cardVariants: Variants = {
  hidden: (isEven: boolean) => ({ opacity: 0, y: 40, x: isEven ? -40 : 40, scale: 0.97 }),
  visible: { opacity: 1, y: 0, x: 0, scale: 1, transition: { type: "spring", stiffness: 110, damping: 15 } },
  hover: { scale: 1.02, boxShadow: "0 6px 36px 0 rgba(56, 189, 248, 0.2)" }
};

export const cardGlowVariants = {
  rest: { opacity: 0, scale: 1 },
  hover: { opacity: 1, scale: 1.05, transition: { duration: 0.3 } },
};
