"use client";

import { motion } from "framer-motion";
import { Avatar } from "@heroui/react";
import { TypingAnimation } from "@/components/animations/typing-animation";
import { roles } from "@/config/tech-stack";
import { memo, useMemo } from "react";

export const HeroSection = memo(function HeroSection() {
  // Memoize particle positions to prevent recalculation
  const particlePositions = useMemo(
    () =>
      [...Array(4)].map((_, i) => ({
        // Reduced from 6 to 4 particles
        x: Math.cos((i * 90 * Math.PI) / 180) * 50, // Reduced radius from 60 to 50
        y: Math.sin((i * 90 * Math.PI) / 180) * 50,
        delay: i * 0.8, // Increased delay for less concurrent animations
      })),
    []
  );

  return (
    <div className="text-center space-y-8 py-16">
      {/* Avatar with optimized glow effect */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 200, // Reduced stiffness for smoother animation
          damping: 25, // Increased damping
          duration: 1,
        }}
        className="flex justify-center"
      >
        <div className="relative">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 15px rgba(59, 130, 246, 0.2)", // Reduced glow intensity
                "0 0 25px rgba(59, 130, 246, 0.4)",
                "0 0 15px rgba(59, 130, 246, 0.2)",
              ],
            }}
            transition={{
              duration: 3, // Slower glow animation
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="rounded-full"
            style={{
              // Hardware acceleration
              transform: "translate3d(0, 0, 0)",
              willChange: "box-shadow",
            }}
          >
            <Avatar
              src="/avatar.jpg"
              alt="Jeremia Axelano"
              className="w-32 h-32 text-large border-4 border-white/20 shadow-2xl"
            />
          </motion.div>

          {/* Optimized floating particles around avatar */}
          {particlePositions.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 bg-blue-500/60 rounded-full" // Reduced opacity
              animate={{
                x: [0, particle.x],
                y: [0, particle.y],
                opacity: [0, 0.8, 0], // Reduced max opacity
              }}
              transition={{
                duration: 4, // Slower animation
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut",
                type: "tween", // Use tween for better performance
              }}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) translate3d(0, 0, 0)",
                willChange: "transform, opacity",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Name with optimized gradient text */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }} // Faster transition
      >
        <h1 className="text-5xl md:text-7xl font-bold font-tech mb-4">
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 5, // Slower gradient animation
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
              // Prevent layout shifts
              willChange: "background-position",
            }}
          >
            Jeremia Axelano
          </motion.span>
        </h1>

        {/* Typing Animation for roles */}
        <div className="h-16 flex items-center justify-center">
          <TypingAnimation
            text={roles}
            className="text-xl md:text-3xl font-medium text-gray-600 dark:text-gray-300"
            typingSpeed={130} // Slightly slower typing
          />
        </div>
      </motion.div>

      {/* Subtitle - simplified animation */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Bridging{" "}
          <span className="text-blue-600 dark:text-blue-400 font-semibold">
            innovation
          </span>{" "}
          with
          <span className="text-purple-600 dark:text-purple-400 font-semibold">
            {" "}
            execution
          </span>
          . Transforming ideas into digital realities.
        </p>
      </motion.div>

      {/* Simplified scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex justify-center pt-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }} // Reduced movement
          transition={{
            duration: 2.5, // Slower bounce
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-gray-400 dark:text-gray-500"
          style={{
            willChange: "transform",
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </div>
  );
});
