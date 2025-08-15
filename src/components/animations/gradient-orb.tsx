"use client";

import { motion } from "framer-motion";

export function GradientOrb() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main gradient orb */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 via-purple-400/20 to-cyan-400/20 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary orb */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-indigo-400/15 via-pink-400/15 to-purple-400/15 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Smaller accent orbs */}
      <motion.div
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Additional moving orbs for more dynamic effect */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        animate={{
          x: [0, 60, -30, 0],
          y: [0, -40, 20, 0],
          scale: [0.8, 1.2, 1, 0.8],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-gradient-to-bl from-green-400/15 to-teal-400/15 rounded-full blur-2xl"
        animate={{
          x: [0, -50, 25, 0],
          y: [0, 30, -15, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Tech-inspired geometric orb */}
      <motion.div
        className="absolute top-1/4 right-1/2 w-16 h-16 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-lg"
        animate={{
          scale: [1, 1.8, 0.6, 1],
          opacity: [0.2, 0.7, 0.2],
          x: [0, 40, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
}
