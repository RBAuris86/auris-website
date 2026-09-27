"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type RevealSectionProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export default function RevealSection({
  children,
  delay = 0,
  y = 60,
}: RevealSectionProps) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.section>
  );
}