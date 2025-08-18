"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/sections/hero-section";
import { LinksSection } from "@/components/sections/links-section";
import { TechStack } from "@/components/sections/tech-stack";
import { FloatingElements } from "@/components/animations/floating-elements";
import { GradientOrb } from "@/components/animations/gradient-orb";
import {
  useOptimizedAnimations,
  useAdaptiveQuality,
} from "@/hooks/usePerformanceOptimization";
import { Suspense, memo } from "react";

// Lazy load heavy components
const LazyFloatingElements = memo(FloatingElements);
const LazyGradientOrb = memo(GradientOrb);

// Loading fallback component
const LoadingFallback = memo(function LoadingFallback() {
  return (
    <div className="w-full h-4 bg-gray-200/50 dark:bg-gray-700/50 rounded animate-pulse" />
  );
});

export default function HomePage() {
  const { animationConfig, shouldReduceAnimations } = useOptimizedAnimations();
  const { qualityLevel, shouldReduceBlur, shouldReduceParticles } =
    useAdaptiveQuality();

  // Conditional rendering based on performance
  const backgroundElements = shouldReduceParticles ? null : (
    <>
      <Suspense fallback={null}>
        <LazyFloatingElements />
      </Suspense>
      <Suspense fallback={null}>
        <LazyGradientOrb />
      </Suspense>
    </>
  );

  return (
    <div
      className={`
        min-h-screen relative overflow-hidden 
        bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 
        dark:from-slate-900 dark:via-slate-800 dark:to-indigo-950
        ${shouldReduceBlur ? "" : "backdrop-blur-sm"}
      `}
      style={{
        // Hardware acceleration for the main container
        transform: "translate3d(0, 0, 0)",
        willChange: "scroll-position",
      }}
    >
      {/* Conditionally rendered background elements */}
      {backgroundElements}

      {/* Main Content */}
      <main className="relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={animationConfig}
          className="container mx-auto px-4 py-8 space-y-16"
        >
          {/* Hero Section */}
          <motion.section
            initial={shouldReduceAnimations ? false : { y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ...animationConfig,
              delay: shouldReduceAnimations ? 0 : 0.1,
            }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <HeroSection />
            </Suspense>
          </motion.section>

          {/* Links Section */}
          <motion.section
            initial={shouldReduceAnimations ? false : { y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ...animationConfig,
              delay: shouldReduceAnimations ? 0 : 0.2,
            }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <LinksSection />
            </Suspense>
          </motion.section>

          {/* Tech Stack Section */}
          <motion.section
            initial={shouldReduceAnimations ? false : { y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              ...animationConfig,
              delay: shouldReduceAnimations ? 0 : 0.3,
            }}
          >
            <Suspense fallback={<LoadingFallback />}>
              <TechStack />
            </Suspense>
          </motion.section>
        </motion.div>
      </main>

      {/* Tech Pattern Overlay - Conditionally rendered */}
      {qualityLevel !== "low" && (
        <div className="fixed inset-0 pointer-events-none opacity-3 dark:opacity-8">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity=".08"%3E%3Ccircle cx="30" cy="30" r="1.5"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
              backgroundRepeat: "repeat",
              transform: "translate3d(0, 0, 0)",
            }}
          />
        </div>
      )}
    </div>
  );
}
