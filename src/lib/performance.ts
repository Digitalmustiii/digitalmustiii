// src/lib/performance.ts

/**
 * Performance optimization utilities for Next.js
 */

import { useEffect } from 'react';

/**
 * Hook to defer non-critical animations until after page load
 * @param delay - Milliseconds to wait after component mounts
 * @returns Boolean indicating if animations should run
 */
export function useDeferredAnimations(delay: number = 100): boolean {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    // Don't run animations immediately
    const timeoutId = setTimeout(() => {
      setShouldAnimate(true);
    }, delay);
    
    return () => clearTimeout(timeoutId);
  }, [delay]);
  
  return shouldAnimate;
}

/**
 * Hook to optimize animations based on user preference and device capability
 * @returns Object with animation settings
 */
export function useOptimizedAnimations(): { 
  prefersReducedMotion: boolean;
  isLowPowerDevice: boolean;
  shouldUseSimplifiedAnimations: boolean;
} {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowPowerDevice, setIsLowPowerDevice] = useState(false);
  
  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    // Detect low-power devices heuristically
    // This is a simple heuristic - you might want to use more sophisticated detection
    const isLowEnd = 
      navigator.hardwareConcurrency <= 4 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
    setIsLowPowerDevice(isLowEnd);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);
  
  return {
    prefersReducedMotion,
    isLowPowerDevice,
    shouldUseSimplifiedAnimations: prefersReducedMotion || isLowPowerDevice
  };
}

/**
 * Fix missing useState import
 */
import { useState } from 'react';