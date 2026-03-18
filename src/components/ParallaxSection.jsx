"use client";

import { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const lines = [
  {
    id: 0,
    neon: true,
    content: [
      { text: "We understand your pain..", highlight: true, font: "font-poppins" },
    ],
  },
  {
    id: 1,
    neon: true,
    content: [
      { text: "Ideas often collapse ", highlight: true, font: "font-poppins" },
      { text: "between vision and execution.", highlight: false, font: "font-mgn" },
    ],
  },
  {
    id: 2,
    content: [{ text: "Fast MVPs break. SaaS bends under growth", highlight: false, font: "font-mgn" }],
  },
  {
    id: 3,
    content: [{ text: "Too many tools. AI stacked on fragile workflows", highlight: false, font: "font-mgn" }],
  },
  {
    id: 4,
    content: [{ text: "Reality doesn't care how fast you built. It only rewards", highlight: false, font: "font-mgn" }],
  },
  {
    id: 5,
    content: [{ text: "what's built to last.", highlight: false, font: "font-mgn" }],
  },
];

const REVEAL_START = 0.05;
const REVEAL_END = 0.9;
const WINDOW = 0.13;

function AnimatedLine({ line, index, scrollYProgress, total }) {
  const isNeon = line.neon;

  const { start, end } = useMemo(() => {
    if (isNeon) return { start: 0, end: 0.05 };

    const nonNeonIndex = index - 2;
    const spacing = (REVEAL_END - REVEAL_START) / (total - 2);
    const start = REVEAL_START + nonNeonIndex * spacing;

    return {
      start,
      end: Math.min(start + WINDOW, 1),
    };
  }, [index, total, isNeon]);

  const opacity = useTransform(
    scrollYProgress,
    [start, end],
    isNeon ? [1, 1] : [0.08, 1]
  );

  const blurPx = useTransform(
    scrollYProgress,
    [start, end],
    isNeon ? [0, 0] : [12, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [start, end],
    isNeon ? [0, 0] : [18, 0]
  );

  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <motion.div
      className="parallax-line"
      style={{ opacity, y, filter }}
    >
      {line.content.map((seg, j) => (
        <span
          key={j}
          className={`${seg.font} ${seg.highlight && isNeon ? "neon-text" : "text-muted"}`}
        >
          {seg.text}
        </span>
      ))}
    </motion.div>
  );
}

export default function ParallaxSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} className="parallax-section">
      
      {/* Beam background */}
      <div className="parallax-bg">
        <div className="parallax-beam" />
      </div>

      {/* Text */}
      <div className="parallax-content">
        <div className="parallax-inner">
          {lines.map((line, i) => (
            <AnimatedLine
              key={line.id}
              line={line}
              index={i}
              scrollYProgress={scrollYProgress}
              total={lines.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}