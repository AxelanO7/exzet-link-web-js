"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export function TypingAnimation({
  text,
  className = "",
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Main animation logic effect
  useEffect(() => {
    const currentFullText = text[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    // Condition 1: Word is fully typed, now we need to pause
    if (!isDeleting && currentText === currentFullText) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    }
    // Condition 2: We are in the deleting phase
    else if (isDeleting) {
      timeoutId = setTimeout(() => {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Finished deleting, move to the next word and start typing again
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % text.length);
        }
      }, deletingSpeed);
    }
    // Condition 3: We are in the typing phase
    else {
      timeoutId = setTimeout(() => {
        setCurrentText(currentFullText.slice(0, currentText.length + 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [
    currentText,
    isDeleting,
    currentTextIndex,
    text,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0, repeat: Infinity, ease: "easeInOut" }}
        className="text-blue-600 dark:text-blue-400"
      >
        |
      </motion.span>
    </div>
  );
}
