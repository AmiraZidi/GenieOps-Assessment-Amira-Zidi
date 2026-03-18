"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Step, { POSITIONS } from "./Step";

export default function Timeline() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const beamFill = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.88, 1], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.88, 1], [30, 0]);
  const ctaScale = useTransform(scrollYProgress, [0.88, 1], [0.92, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-black font-poppins"
      style={{ minHeight: "305vh" }}
    >
      <div
        className="relative top-0 w-full overflow-hidden"
        style={{ height: "300vh" }}
      >
        <img
          src="/Frontend Assessment/Light Beam.svg"
          alt=""
          className="absolute mix-blend-screen pointer-events-none"
          style={{
            width: "28%",
            top: "-120px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 0,
          }}
        />

        <img
          src="/Frontend Assessment/Particles.svg"
          alt=""
          className="absolute mix-blend-screen pointer-events-none"
          style={{
            width: "1440px",
            height: "2080px",
            top: "0px",
            left: "50%",
            transform: "translateX(-50%)",
            opacity: 1,
            zIndex: 1,
          }}
        />

        <div
          className="absolute top-0 left-0 right-0 flex flex-col items-center pt-10 pb-6"
          style={{ zIndex: 10 }}
        >
          <div className="button-wrapper">
            <div className="how-it-works-btn">
              <span className="btn-label">How it works</span>
            </div>
            <div className="rect-small"></div>
          </div>

          <h2
            className="font-poppins text-center text-white"
            style={{ fontSize: "40px" }}
          >
            A{" "}
            <span className="bg-gradient-to-l from-indigo-400 to-white bg-clip-text text-transparent">
              Clear
            </span>{" "}
            <span className="text-indigo-400 font-mgn">Process</span>
          </h2>

          <p className="text-white/65 text-sm mt-1 text-center">
            This is exactly how working with XYZ works
          </p>
        </div>

        <div className="absolute inset-0" style={{ zIndex: 20 }}>
          <Step beamFill={beamFill} />
        </div>

        <motion.div
          className="absolute left-1/2"
          style={{
            bottom: "80px",
            x: "-50%",
            opacity: ctaOpacity,
            y: ctaY,
            scale: ctaScale,
            zIndex: 50,
          }}
        >
          <button className="cta-btn">Get in Touch</button>
        </motion.div>
        <div className="absolute z-30 bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-black/55 to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
