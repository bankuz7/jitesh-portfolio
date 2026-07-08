"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 inset-x-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-primary via-accent to-primary"
      style={{ scaleX }}
    />
  );
}
