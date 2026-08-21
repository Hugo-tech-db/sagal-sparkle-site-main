import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingContextType {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  sensitivity: number;
}

const FloatingContext = createContext<FloatingContextType | null>(null);

interface FloatingProps {
  children: ReactNode;
  sensitivity?: number;
  className?: string;
  easing?: "spring" | "linear";
}

export default function Floating({
  children,
  sensitivity = 1,
  className,
}: FloatingProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 100, mass: 0.5 };
  const mouseX = useSpring(rawMouseX, springConfig);
  const mouseY = useSpring(rawMouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / (rect.width / 2);
      const y = (e.clientY - centerY) / (rect.height / 2);
      rawMouseX.set(x * 50 * sensitivity);
      rawMouseY.set(y * 50 * sensitivity);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current || !e.touches[0]) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.touches[0].clientX - centerX) / (rect.width / 2);
      const y = (e.touches[0].clientY - centerY) / (rect.height / 2);
      rawMouseX.set(x * 50 * sensitivity);
      rawMouseY.set(y * 50 * sensitivity);
    };

    const handleMouseLeave = () => {
      rawMouseX.set(0);
      rawMouseY.set(0);
    };

    const node = containerRef.current;
    if (node) {
      node.addEventListener("mousemove", handleMouseMove);
      node.addEventListener("touchmove", handleTouchMove, { passive: true });
      node.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (node) {
        node.removeEventListener("mousemove", handleMouseMove);
        node.removeEventListener("touchmove", handleTouchMove);
        node.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [sensitivity, rawMouseX, rawMouseY]);

  return (
    <FloatingContext.Provider value={{ mouseX, mouseY, sensitivity }}>
      <div
        ref={containerRef}
        className={cn("relative w-full h-full pointer-events-none", className)}
      >
        {children}
      </div>
    </FloatingContext.Provider>
  );
}

interface FloatingElementProps {
  children: ReactNode;
  depth?: number;
  className?: string;
}

export function FloatingElement({
  children,
  depth = 1,
  className,
}: FloatingElementProps) {
  const context = useContext(FloatingContext);
  if (!context) {
    throw new Error("FloatingElement must be used within a Floating provider");
  }

  const { mouseX, mouseY } = context;
  const x = useTransform(mouseX, (val) => val * depth);
  const y = useTransform(mouseY, (val) => val * depth);

  return (
    <motion.div
      style={{ x, y }}
      className={cn("absolute pointer-events-auto", className)}
    >
      {children}
    </motion.div>
  );
}
