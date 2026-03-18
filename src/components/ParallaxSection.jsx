"use client";

import { useRef, useMemo } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useSpring,
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
const REVEAL_START = 0.09;
const REVEAL_END   = 0.92;
const WINDOW       = 0.25;

function AnimatedLine({ line, index, smoothProgress, total }) {
  const isNeon = line.neon;

  const { start, end } = useMemo(() => {
    if (isNeon) {
      const s = index * 0.04;
      return { start: s, end: s + 0.1 };
    }
    const nonNeonIndex = index - 2;
    const nonNeonTotal = total - 2;
    const spacing = (REVEAL_END - REVEAL_START) / (nonNeonTotal - 1);
    const s = REVEAL_START + nonNeonIndex * spacing;
    return { start: s, end: Math.min(s + WINDOW, 1) };
  }, [index, total, isNeon]);

  const activeAt = start + (end - start) * 0.5;

  const opacity = useTransform(
    smoothProgress,
    [start, end],
    isNeon ? [0.5, 1] : [0.04, 1]
  );

  const blurPx = useTransform(
    smoothProgress,
    [start, end],
    isNeon ? [3, 0] : [18, 0]
  );

  const y = useTransform(
    smoothProgress,
    [start, end],
    isNeon ? [8, 0] : [28, 0]
  );

  const neonOpacity = useTransform(
    smoothProgress,
    [start, activeAt, end],
    [0, 0.5, 1]
  );

  const filter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <motion.div
      className="parallax-line"
      style={{
        opacity,
        y,
        filter,
        willChange: "opacity, transform, filter",
        position: "relative",
      }}
    >
      {!isNeon && (
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            translateY: "-50%",
            height: "1px",
            width: useTransform(smoothProgress, [start, end], ["0%", "100%"]),
            background: "linear-gradient(90deg, transparent, rgba(100,140,255,0.6), transparent)",
            filter: "blur(2px)",
            opacity: neonOpacity,
            pointerEvents: "none",
          }}
        />
      )}

      {line.content.map((seg, j) => {
        const segColor = useTransform(
          smoothProgress,
          [start, end],
          seg.highlight
            ? ["rgba(255,255,255,0.9)", "rgba(255,255,255,1)"]
            : ["rgba(255,255,255,0.15)", "rgba(255,255,255,0.55)"]
        );

        return (
          <motion.span
            key={j}
            className={seg.font}
            style={{
              color: seg.highlight && isNeon ? undefined : segColor,
              willChange: "color",
            }}
            {...(seg.highlight && isNeon
              ? { className: `${seg.font} neon-text` }
              : {})}
          >
            {seg.text}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

export default function ParallaxSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="parallax-section"
      style={{ minHeight: "130vh" }}
    >
      <div className="parallax-bg">
        <div className="parallax-beam" />
      </div>

      <div className="parallax-content">
        <div className="parallax-inner">
          {lines.map((line, i) => (
            <AnimatedLine
              key={line.id}
              line={line}
              index={i}
              smoothProgress={smoothProgress}
              total={lines.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}