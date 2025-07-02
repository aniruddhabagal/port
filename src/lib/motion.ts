// /src/lib/motion.ts

/**
 * Defines a variant for staggered animations on container elements.
 * This allows child elements to animate in sequence rather than all at once.
 *
 * @param staggerChildren - The amount of time (in seconds) to stagger the animation of each child.
 * @param delayChildren - The delay (in seconds) before the first child's animation starts.
 * @returns A Framer Motion variants object for the container.
 */
export const staggerContainer = (staggerChildren?: number, delayChildren?: number) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerChildren,
        delayChildren: delayChildren || 0,
      },
    },
  };
};

/**
 * Defines a text animation variant that reveals text characters or words in sequence.
 * This is great for headings and titles.
 *
 * @param delay - The delay (in seconds) before the animation starts.
 * @returns A Framer Motion variants object for a text element.
 */
export const textVariant = (delay?: number) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as "spring",
        duration: 1.25,
        delay: delay,
      },
    },
  };
};

/**
 * Defines a variant for fading an element in from a specified direction.
 * This is a versatile animation for cards, images, and content blocks.
 *
 * @param direction - The direction from which the element should enter ('left', 'right', 'up', 'down').
 * @param type - The type of Framer Motion transition (e.g., 'spring', 'tween').
 * @param delay - The delay (in seconds) before the animation starts.
 * @param duration - The duration of the animation (in seconds).
 * @returns A Framer Motion variants object.
 */
export const fadeIn = (direction: 'left' | 'right' | 'up' | 'down', type: 'spring' | 'tween', delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type as "spring" | "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut" as const,
      },
    },
  };
};

/**
 * Defines a variant for zooming an element in.
 * Useful for modal pop-ups or focusing attention on a specific item.
 *
 * @param delay - The delay (in seconds) before the animation starts.
 * @param duration - The duration of the animation (in seconds).
 * @returns A Framer Motion variants object.
 */
export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween" as const,
        delay: delay,
        duration: duration,
        ease: "easeOut" as const,
      },
    },
  };
};

/**
 * Defines a variant for sliding an element in from a specified direction.
 * This version uses percentage-based translation, which can be smoother for full-width elements.
 *
 * @param direction - The direction from which the element should enter ('left', 'right', 'up', 'down').
 * @param type - The type of Framer Motion transition (e.g., 'spring', 'tween').
 * @param delay - The delay (in seconds) before the animation starts.
 * @param duration - The duration of the animation (in seconds).
 * @returns A Framer Motion variants object.
 */
export const slideIn = (direction: 'left' | 'right' | 'up' | 'down', type: 'spring' | 'tween', delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type as "spring" | "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut" as const,
      },
    },
  };
};