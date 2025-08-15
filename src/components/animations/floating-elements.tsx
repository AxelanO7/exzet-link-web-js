"use client";

import { motion } from "framer-motion";

export function FloatingElements() {
  const elements = [
    { id: 1, x: "10%", y: "20%", delay: 0 },
    { id: 2, x: "80%", y: "10%", delay: 1 },
    { id: 3, x: "70%", y: "70%", delay: 2 },
    { id: 4, x: "20%", y: "80%", delay: 3 },
    { id: 5, x: "90%", y: "50%", delay: 4 },
    { id: 6, x: "30%", y: "30%", delay: 5 },
  ];

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric shapes */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute border border-purple-400/20 rounded-lg"
          style={{
            left: `${20 + i * 25}%`,
            top: `${30 + i * 20}%`,
            width: `${40 + i * 10}px`,
            height: `${40 + i * 10}px`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
