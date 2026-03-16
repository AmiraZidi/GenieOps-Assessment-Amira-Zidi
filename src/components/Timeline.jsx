"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Step from "./Step";

export default function Timeline() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const beamFill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.88, 1], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.88, 1], [30, 0]);
  const ctaScale = useTransform(scrollYProgress, [0.88, 1], [0.92, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black font-poppins min-h-[200vh]"
    >
      <div className="z-10 flex flex-col items-center pt-10 pb-6">
        <div
          className="hidden md:flex items-center justify-center rounded-lg text-[11px] font-extralight w-[150px] text-white mb-2"
          style={{
            marginBottom:"15px",
            background: "rgba(64,107,254,0.15)",
            border: "1px solid rgba(99,149,255,0.5)",
            padding: "10px",
            boxShadow:
              "0 0 14px rgba(64,107,254,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
          }}
        >
          How it works
        </div>

        <h2 className="font-mgn text-center text-white" style={{fontSize:"40px"}}>
          A{" "}
          <span className="bg-gradient-to-l from-indigo-400 to-white bg-clip-text text-transparent">
            Clear
          </span>{" "}
          <span className="text-indigo-400">Process</span>
        </h2>

        <p className="text-white/40 text-sm mt-1 text-center">
          This is exactly how working with XYZ works
        </p>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <img
          src="/Frontend Assessment/Light Beam.svg"
          alt=""
          className="pointer-events-none mix-blend-screen"
        />
        <img
          src="/Frontend Assessment/Particles.svg"
          alt=""
          className="pointer-events-none mix-blend-screen absolute top-0"
        />

        <div className="absolute inset-0 z-20">
          <Step beamFill={beamFill} />
        </div>
      </div>

      <motion.div
        className="absolute left-1/2 z-50"
        style={{
          bottom: "170px",
          x: "-57%",
          y: ctaY,
          scale: ctaScale,
        }}
      >
        <button
          className="flex items-center justify-center font-medium hover:brightness-110 transition"
          style={{
            width: "282px",
            height: "50px",
            color: "white",
            fontSize: "20px",
            borderRadius: "12px",
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(80,120,255,0.55) 0%, rgba(40,70,200,0.35) 50%, rgba(20,40,140,0.2) 100%)",
            border: "1px solid rgba(140,180,255,0.35)",
            boxShadow: `
        0 0 32px rgba(60,110,255,0.35),
        0 0 80px rgba(50,90,255,0.15),
        inset 0 1px 0 rgba(180,210,255,0.25),
        inset 0 -1px 0 rgba(30,60,180,0.3)
      `,
            backdropFilter: "blur(6px)",
          }}
        >
          Get in Touch
        </button>
      </motion.div>
    </section>
  );
}
