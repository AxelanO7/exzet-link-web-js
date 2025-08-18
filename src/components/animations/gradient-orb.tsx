"use client";

import { motion } from "framer-motion";
import { memo } from "react";

// Heavily optimized gradient orb component
export const GradientOrb = memo(function GradientOrb() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main gradient orb - simplified animation */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/15 via-purple-400/15 to-cyan-400/15 rounded-full blur-3xl"
        style={{
          // Force hardware acceleration
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 25, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20, // Much slower for better performance
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween", // Use tween instead of spring for better performance
        }}
      />

      {/* Secondary orb - reduced opacity and simplified */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 via-pink-400/10 to-purple-400/10 rounded-full blur-3xl"
        style={{
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -30, 0],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
          type: "tween",
        }}
      />

      {/* Single accent orb instead of multiple */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-2xl"
        style={{
          transform: "translate3d(0, 0, 0)",
          willChange: "transform",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          type: "tween",
        }}
      />

      {/* Removed other moving orbs to improve performance */}
    </div>
  );
});
