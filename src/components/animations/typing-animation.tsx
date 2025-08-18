"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { motion } from "framer-motion";

interface TypingAnimationProps {
  text: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypingAnimation = memo(function TypingAnimation({
  text,
  className = "",
  typingSpeed = 120, // Slightly slower for better performance
  deletingSpeed = 60,
  pauseDuration = 2000,
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Memoized callbacks for better performance
  const moveToNextText = useCallback(() => {
    setIsDeleting(false);
    setCurrentTextIndex((prev) => (prev + 1) % text.length);
  }, [text.length]);

  const deleteOneChar = useCallback(() => {
    setCurrentText((prev) => prev.slice(0, -1));
  }, []);

  const typeOneChar = useCallback(() => {
    const currentFullText = text[currentTextIndex];
    setCurrentText((prev) => currentFullText.slice(0, prev.length + 1));
  }, [text, currentTextIndex]);

  // Main animation logic effect
  useEffect(() => {
    const currentFullText = text[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && currentText === currentFullText) {
      timeoutId = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting) {
      timeoutId = setTimeout(() => {
        if (currentText.length > 0) {
          deleteOneChar();
        } else {
          moveToNextText();
        }
      }, deletingSpeed);
    } else {
      timeoutId = setTimeout(typeOneChar, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [currentText, isDeleting, currentTextIndex, text, typingSpeed, deletingSpeed, pauseDuration, deleteOneChar, typeOneChar, moveToNextText]);

  // Optimized cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 600); // Slightly slower blink

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className={`font-mono ${className}`}>
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{
          duration: 0.1, // Faster transition for cursor
          ease: "easeInOut",
        }}
        className="text-blue-600 dark:text-blue-400"
        style={{
          // Prevent layout shifts
          display: "inline-block",
          width: "2px",
        }}
      >
        |
      </motion.span>
    </div>
  );
});
