import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// ===== ZOOM VARIANTS =====

// Simple zoom in
export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Zoom in with rotation
export const zoomInRotate: Variants = {
  hidden: { opacity: 0, scale: 0.3, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Zoom out (starts large, shrinks to normal)
export const zoomOut: Variants = {
  hidden: { opacity: 0, scale: 1.5 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Zoom in with bounce effect
export const zoomInBounce: Variants = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
      damping: 15
    }
  }
};

// Zoom in with fade
export const zoomFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Zoom in from specific origin (left)
export const zoomInLeft: Variants = {
  hidden: { opacity: 0, scale: 0.4, x: -80 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Zoom in from specific origin (right)
export const zoomInRight: Variants = {
  hidden: { opacity: 0, scale: 0.4, x: 80 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Zoom in from specific origin (top)
export const zoomInTop: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: -80 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

// Zoom in from specific origin (bottom)
export const zoomInBottom: Variants = {
  hidden: { opacity: 0, scale: 0.4, y: 80 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

// Stagger with zoom for children
export const staggerZoom: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  }
};

export const animations = {
   fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  slideInLeft,
  slideInRight,
  scaleIn,
  zoomIn,
  zoomInRotate,
  zoomOut,
  zoomInBounce,
  zoomFadeIn,
  zoomInLeft,
  zoomInRight,
  zoomInTop,
  zoomInBottom,
  staggerContainer,
  staggerContainerFast,
  staggerZoom,
};