"use client";

import { motion } from "framer-motion";
import { Card, CardBody, Button } from "@heroui/react";
import { ExternalLink } from "lucide-react";
import { socialLinks } from "@/config/links";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

export function LinksSection() {
  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* Section Title */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold font-tech mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Connect With Me
          </span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Explore my digital presence across platforms
        </p>
      </motion.div>

      {/* Links Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-4"
      >
        {socialLinks.map((link, index) => {
          const Icon = link.icon;

          return (
            <motion.div
              key={link.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card
                  className={`
                    group transition-all duration-300 
                    bg-white/80 dark:bg-slate-800/80 
                    backdrop-blur-md border-0
                    hover:bg-white dark:hover:bg-slate-800
                    hover:shadow-xl hover:shadow-blue-500/20
                    ${link.hoverColor}
                  `}
                  isPressable
                >
                  <CardBody className="p-0">
                    <Button
                      as="a"
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-20 bg-transparent text-left justify-start p-6 rounded-xl"
                      startContent={
                        <div
                          className={`
                        p-3 rounded-xl 
                        bg-gradient-to-r ${link.color}
                        text-white
                        group-hover:scale-110 
                        transition-transform duration-300
                        shadow-lg
                      `}
                        >
                          <Icon size={24} />
                        </div>
                      }
                      endContent={
                        <motion.div
                          initial={{ x: 0, opacity: 0.5 }}
                          whileHover={{ x: 5, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <ExternalLink
                            size={20}
                            className="text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                          />
                        </motion.div>
                      }
                    >
                      <div className="flex flex-col items-start">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {link.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                          {link.description}
                        </span>
                      </div>
                    </Button>
                  </CardBody>
                </Card>

                {/* Animated line under each card */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex justify-center pt-8"
      >
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
