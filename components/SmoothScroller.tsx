"use client";

import React, { useLayoutEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register plugins
// Note: ScrollSmoother is a Club GSAP perk. If you don't have the license, this might fail or warn.
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

interface SmoothScrollerProps {
  children: React.ReactNode;
}

const SmoothScroller: React.FC<SmoothScrollerProps> = ({ children }) => {
  const pathname = usePathname();
  const smootherRef = useRef<globalThis.ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Create ScrollSmoother
    // Check if device is touch-enabled (usually mobile/tablet).
    // If so, skip creating ScrollSmoother to allow native scroll behavior.
    if (ScrollTrigger.isTouch === 1) return;

    smootherRef.current = ScrollSmoother.create({
      smooth: 1.5, // slightly smoother than default
      effects: true, // look for data-speed and data-lag
      smoothTouch: 0, // disable smoothing on touch devices (redundant if we return early, but good safety)
    });

    return () => {
      // Cleanup
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  // Reset scroll on route change
  useLayoutEffect(() => {
    if (smootherRef.current) {
        smootherRef.current.scrollTop(0);
        // Force a refresh to recalculate page height for the new content
        ScrollTrigger.refresh();
    }
  }, [pathname]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroller;
