"use client";

import { motion } from "framer-motion";
import { Chip } from "@heroui/react";
import { techStack } from "@/config/tech-stack";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 12,
    },
  },
};

export function TechStack() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Section Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-tech mb-4">
          <span className="bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">
            Tech Arsenal
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Technologies I work with to bring ideas to life
        </p>
      </motion.div>

      {/* Tech Stack Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-wrap justify-center gap-3"
      >
        {techStack.map((tech, index) => (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Chip
              variant="flat"
              className={`
                text-sm font-medium px-4 py-2 cursor-pointer
                transition-all duration-300
                bg-white/80 dark:bg-slate-800/80 
                backdrop-blur-md border border-gray-200/50 dark:border-slate-700/50
                hover:border-blue-300 dark:hover:border-blue-600
                hover:shadow-lg hover:shadow-blue-500/20
                text-gray-700 dark:text-gray-200
                hover:text-blue-700 dark:hover:text-blue-300
              `}
              style={{
                boxShadow: `0 0 20px ${tech.color}20`,
              }}
            >
              <motion.span
                initial={{ opacity: 0.8 }}
                whileHover={{
                  opacity: 1,
                  textShadow: `0 0 8px ${tech.color}80`,
                }}
              >
                {tech.name}
              </motion.span>
            </Chip>
          </motion.div>
        ))}
      </motion.div>

      {/* Animated divider */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex justify-center pt-8"
      >
        <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </motion.div>

      {/* Bottom Quote */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="text-center"
      >
        <blockquote className="text-lg italic text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          "Technology is a tool in service of humanity. Let's build something
          meaningful together."
        </blockquote>
        <motion.div
          className="mt-4 w-8 h-0.5 bg-blue-500 mx-auto"
          initial={{ width: 0 }}
          animate={{ width: 32 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        />
      </motion.div>
    </div>
  );
}
