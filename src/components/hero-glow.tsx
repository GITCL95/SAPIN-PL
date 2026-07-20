"use client";

import { motion } from "motion/react";

export function HeroGlow() {
  return (
    <motion.div
      className="showcase-arch__glow"
      aria-hidden="true"
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.8, 0.4, 0.8],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

export function PlayRing() {
  return (
    <motion.span
      className="play-btn__ring"
      animate={{
        scale: [1, 1.35, 1],
        opacity: [0.5, 0, 0.5],
      }}
      transition={{
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
