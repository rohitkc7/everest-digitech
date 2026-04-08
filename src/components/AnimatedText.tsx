"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const phrases = [
  "We empower local businesses.",
  "We build digital products.",
  "We drive online growth.",
  "We turn ideas into reality.",
  "We make technology simple.",
];

export default function AnimatedText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto h-10 w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-brand"
        >
          {phrases[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
}
