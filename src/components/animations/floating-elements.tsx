"use client";

import { motion } from "framer-motion";
import { memo, useMemo } from "react";

// Optimized FloatingElements dengan performance improvements
export const FloatingElements = memo(function FloatingElements() {
  // Reduce elements for better performance
  const elements = useMemo(
    () => [
      { id: 1, x: "10%", y: "20%", delay: 0 },
      { id: 2, x: "80%", y: "10%", delay: 2 },
      { id: 3, x: "70%", y: "70%", delay: 4 },
      { id: 4, x: "20%", y: "80%", delay: 6 },
    ],
    []
  );

  // Reduce geometric shapes count
  const shapes = useMemo(() => [...Array(2)], []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: element.x,
            top: element.y,
            // Use transform3d for hardware acceleration
            transform: "translate3d(0, 0, 0)",
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8, // Slower animation for better performance
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
            // Optimize for performance
            type: "tween",
          }}
        />
      ))}

      {/* Reduced geometric shapes */}
      {shapes.map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-purple-400/15 rounded-lg"
          style={{
            left: `${30 + i * 30}%`,
            top: `${40 + i * 20}%`,
            width: `${30 + i * 15}px`,
            height: `${30 + i * 15}px`,
            // Hardware acceleration
            transform: "translate3d(0, 0, 0)",
            willChange: "transform",
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25 + i * 10, // Much slower rotation
            repeat: Infinity,
            ease: "linear",
            type: "tween",
          }}
        />
      ))}
    </div>
  );
});
