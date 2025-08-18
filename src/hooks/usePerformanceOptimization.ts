// hooks/usePerformanceOptimization.ts
"use client";

import { useEffect, useState, useCallback } from "react";

// Hook to detect device performance capability
export function useDevicePerformance() {
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Detect low-end device based on various factors
    const detectLowEndDevice = () => {
      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 1;

      // Check memory (if available)
      const memory = (navigator as any).deviceMemory || 1;

      // Check connection type
      const connection = (navigator as any).connection;
      const isSlowConnection =
        connection &&
        (connection.effectiveType === "2g" ||
          connection.effectiveType === "slow-2g");

      // User agent checks for budget devices
      const userAgent = navigator.userAgent.toLowerCase();
      const isBudgetDevice =
        userAgent.includes("android") &&
        (userAgent.includes("go") || userAgent.includes("lite"));

      // Combine factors
      const isLowEnd =
        cores <= 2 || memory <= 2 || isSlowConnection || isBudgetDevice;
      setIsLowEndDevice(isLowEnd);
    };

    detectLowEndDevice();

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return { isLowEndDevice, prefersReducedMotion };
}

// Hook for optimized animation settings
export function useOptimizedAnimations() {
  const { isLowEndDevice, prefersReducedMotion } = useDevicePerformance();

  const getAnimationConfig = useCallback(() => {
    if (prefersReducedMotion) {
      return {
        duration: 0.01,
        type: "tween" as const,
        ease: "linear" as const,
      };
    }

    if (isLowEndDevice) {
      return {
        duration: 0.3,
        type: "tween" as const,
        ease: "easeOut" as const,
      };
    }

    return {
      duration: 0.6,
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
    };
  }, [isLowEndDevice, prefersReducedMotion]);

  const shouldReduceAnimations = isLowEndDevice || prefersReducedMotion;

  return {
    animationConfig: getAnimationConfig(),
    shouldReduceAnimations,
    isLowEndDevice,
    prefersReducedMotion,
  };
}

// Hook for throttled scroll handling
export function useThrottledScroll(callback: () => void, delay: number = 16) {
  const [isThrottled, setIsThrottled] = useState(false);

  const throttledCallback = useCallback(() => {
    if (!isThrottled) {
      callback();
      setIsThrottled(true);
      setTimeout(() => setIsThrottled(false), delay);
    }
  }, [callback, delay, isThrottled]);

  useEffect(() => {
    window.addEventListener("scroll", throttledCallback, { passive: true });
    return () => window.removeEventListener("scroll", throttledCallback);
  }, [throttledCallback]);
}

// Hook for intersection observer with performance optimization
export function useOptimizedIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && !hasIntersected) {
          setHasIntersected(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [elementRef, hasIntersected, options]);

  return { isIntersecting, hasIntersected };
}

// Hook for adaptive quality based on performance
export function useAdaptiveQuality() {
  const { isLowEndDevice } = useDevicePerformance();
  const [fps, setFps] = useState(60);

  useEffect(() => {
    let lastTime = performance.now();
    let frameCount = 0;
    let animationId: number;

    const measureFPS = (currentTime: number) => {
      frameCount++;

      if (currentTime - lastTime >= 1000) {
        const currentFPS = Math.round(
          (frameCount * 1000) / (currentTime - lastTime)
        );
        setFps(currentFPS);
        frameCount = 0;
        lastTime = currentTime;
      }

      animationId = requestAnimationFrame(measureFPS);
    };

    // Start measuring after a delay to avoid initial load impact
    const timeoutId = setTimeout(() => {
      animationId = requestAnimationFrame(measureFPS);
    }, 2000);

    return () => {
      clearTimeout(timeoutId);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const qualityLevel =
    isLowEndDevice || fps < 30 ? "low" : fps < 50 ? "medium" : "high";

  return {
    fps,
    qualityLevel,
    isLowEndDevice,
    shouldReduceBlur: qualityLevel === "low",
    shouldReduceParticles: qualityLevel !== "high",
    shouldReduceGradients: qualityLevel === "low",
  };
}
