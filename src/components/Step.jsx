"use client";

import { motion, useTransform } from "framer-motion";

const steps = [
  {
    id: "01",
    side: "right",
    title: "Fit Check",
    body: "We review what exists and tell you the truth. If we're not a good fit, we'll tell you.. We don't take unclear visions or empty projects.",
    bold: "This protects both sides.",
  },
  {
    id: "02",
    side: "left",
    title: "Choose Engagement",
    body: "If you know exactly what you want built, we define the scope, lock timeline and price, and deliver to a clear outcome — even if we underestimate. If you need ongoing execution, we assemble a fractional team that can build, fix, and scale without hiring, HR, or long-term commitments.",
  },
  {
    id: "03",
    side: "right",
    title: "Build with Visibility",
    body: "Work runs in a steady rhythm. Every week, you see what was done, what's next, and what's blocked. Bi-weekly calls keep progress aligned. You always know who's working, on what, and why — no black boxes, no blind trust.",
  },
  {
    id: "04",
    side: "left",
    title: "Guarantees & Accountability",
    body: "If we underestimate, we finish the work. If a team member isn't the right fit, we replace them. You own the code from day one, and you can exit anytime with everything in hand. Accountability isn't promised — it's built into the system.",
  },
  {
    id: "05",
    side: "right",
    title: "Scale or Exit Cleanly",
    body: "Continue, scale the team, or stop — no pressure, no dependency, no cleanup phase. If the foundations are solid, scaling becomes optional, not forced.",
  },
];

const FIGMA_STEPS = [
  { top: 385, left: 96.41, width: 535, height: 175 },
  { top: 671, left: -660.59, width: 541.86, height: 144 },
  { top: 1000.88, left: 96.41, width: 545, height: 180.22 },
  { top: 1300.54, left: -660.59, width: 522.95, height: 214.62 },
  { top: 1620.54, left: 96.41, width: 533, height: 142 },
];

function StepItem({ step, figma, beamFill, index }) {
  const start = index * 0.16;
  const end = start + 0.16;

  const opacity = useTransform(beamFill, [start, end], [0, 1]);
  const translateY = useTransform(beamFill, [start, end], [20, 0]);

  return (
    <motion.div
      className="absolute text-left"
      style={{
        top: `${figma.top}px`,
        left: `calc(50% + ${figma.left}px)`,
        width: `${figma.width}px`,
        height: `${figma.height}px`,
        opacity,
        y: translateY,
      }}
    >
      <h3 className="font-mgn mb-2" style={{ fontSize: "28px" }}>
        <span className="font-extrabold bg-gradient-to-l from-indigo-400 to-white bg-clip-text text-transparent">
          {step.id}.{" "}
        </span>
        <span className="font-extrabold text-white">
          {step.title.split(" ")[0]}{" "}
        </span>
        <span className="font-extrabold bg-gradient-to-l from-indigo-400 to-white bg-clip-text text-transparent">
          {step.title.split(" ").slice(1).join(" ")}
        </span>
      </h3>

      <p
        style={{
          fontFamily: "Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "20px",
          lineHeight: "24px",
          letterSpacing: "-0.32px",
          color: "rgba(255,255,255,0.5)",
        }}
      >
        {step.body}
      </p>

      {step.bold && (
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "24px",
            letterSpacing: "-0.32px",
            color: "rgba(255,255,255,0.8)",
            marginTop: "4px",
          }}
        >
          {step.bold}
        </p>
      )}
    </motion.div>
  );
}

export default function Step({ beamFill }) {
  return (
    <div className="relative w-full" style={{ height: "1500px" }}>
      {steps.map((step, i) => (
        <StepItem
          key={step.id}
          step={step}
          figma={FIGMA_STEPS[i]}
          beamFill={beamFill}
          index={i}
        />
      ))}
    </div>
  );
}
