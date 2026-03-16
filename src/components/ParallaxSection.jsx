"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

const lines = [
  { id: 0, text: "We understand your pain..", font: "font-poppins" },
  { id: 1, text: "Ideas often collapse ", font: "font-poppins" },
  {
    id: 2,
    text: "between vision and execution.",
    font: "font-mgn",
  },
  {
    id: 3,
    text: "Fast MVPs break. SaaS bends under growth.",
    font: "font-mgn",
  },
  {
    id: 4,
    text: "Too many tools. AI stacked on fragile workflows.",
    font: "font-mgn",
  },
  {
    id: 5,
    text: "Reality doesn't care how fast you built. It only rewards",
    font: "font-mgn",
  },
  { id: 6, text: "what's built to last.", font: "font-mgn" },
];

export default function ParallaxSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[120vh] bg-black flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-center bg-cover mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('/Frontend Assessment/Beam Line.svg')",
        }}
      />

      <div className="sticky top-0 h-screen flex items-center justify-center w-full">
        <div className="flex flex-col items-center text-center px-12 py-10 max-w-4xl w-full mx-6">
          {lines.map((line, i) => {
            const start = i / lines.length;
            const end = (i + 1) / lines.length;

            const opacity = useTransform(
              scrollYProgress,
              [start, end],
              [0.2, 1]
            );
            const blur = useTransform(scrollYProgress, [start, end], [14, 0]);
            const y = useTransform(scrollYProgress, [start, end], [10, 0]);

            const filter = useMotionTemplate`blur(${blur}px)`;

            return (
              <motion.div
                key={line.id}
                className={`${line.font} w-full`}
                style={{
                  fontSize: "30px",
                  lineHeight: "119%",
                  opacity,
                  y,
                  filter,
                }}
              >
                {line.segments ? (
                  line.segments.map((seg, j) => (
                    <span
                      key={j}
                      style={
                        seg.highlight
                          ? { color: "#7aa2ff" }
                          : { color: "rgba(255,255,255,0.7)" }
                      }
                    >
                      {seg.text}
                    </span>
                  ))
                ) : (
                  <span style={{ color: "rgba(255,255,255,0.9)" }}>
                    {line.text}
                  </span>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
