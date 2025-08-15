"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { LinksSection } from "@/components/sections/links-section";
import { TechStack } from "@/components/sections/tech-stack";
import { FloatingElements } from "@/components/animations/floating-elements";
import { GradientOrb } from "@/components/animations/gradient-orb";

export default function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950">
      {/* Background Elements */}
      <FloatingElements />
      <GradientOrb />

      {/* Main Content */}
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 py-8 space-y-16"
        >
          {/* Hero Section */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroSection />
          </motion.section>

          {/* Links Section */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <LinksSection />
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <TechStack />
          </motion.section>
        </motion.div>
      </main>

      {/* Tech Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity=".1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>
    </div>
  );
}
