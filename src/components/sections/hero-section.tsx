"use client";

import { motion } from "framer-motion";
import { Avatar } from "@heroui/react";
import { TypingAnimation } from "@/components/animations/typing-animation";
import { roles } from "@/config/tech-stack";

export function HeroSection() {
  return (
    <div className="text-center space-y-8 py-16">
      {/* Avatar with glow effect */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          duration: 1.2,
        }}
        className="flex justify-center"
      >
        <div className="relative">
          <motion.div
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 40px rgba(59, 130, 246, 0.6)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full"
          >
            <Avatar
              src="/avatar.jpg"
              alt="Jeremia Axelano"
              className="w-32 h-32 text-large border-4 border-white/20 shadow-2xl"
            />
          </motion.div>

          {/* Floating particles around avatar */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              animate={{
                x: [0, Math.cos((i * 60 * Math.PI) / 180) * 60],
                y: [0, Math.sin((i * 60 * Math.PI) / 180) * 60],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Name with gradient text */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold font-tech mb-4">
          <motion.span
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 dark:from-blue-400 dark:via-purple-400 dark:to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ["0%", "100%", "0%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundSize: "200% auto",
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
          />
        </div>
      </motion.div>

      {/* Subtitle with typewriter effect */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
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

      {/* Animated scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex justify-center pt-8"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 dark:text-gray-500"
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
}
