"use client";

import { motion, useTransform } from "framer-motion";

const steps = [
  {
    id: "01",
    side: "right",
    title: "Fit Check",
    body: "We review what exists and tell you the truth. If we’re not a good fit, we’ll tell you.. We don’t take unclear visions or empty projects.",
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
    body: "Work runs in a steady rhythm. Every week, you see what was done, what’s next, and what’s blocked. Bi-weekly calls keep progress aligned. You always know who’s working, on what, and why — no black boxes, no blind trust.",
  },
  {
    id: "04",
    side: "left",
    title: "Guarantees & Accountability",
    body: "If we underestimate, we finish the work. If a team member isn’t the right fit, we replace them. You own the code from day one, and you can exit anytime with everything in hand. Accountability isn’t promised — it’s built into the system.",
  },
  {
    id: "05",
    side: "right",
    title: "Scale or Exit Cleanly",
    body: "Continue, scale the team, or stop — no pressure, no dependency, no cleanup phase. If the foundations are solid, scaling becomes optional, not forced.",
  },
];

export const POSITIONS = [8, 26, 44, 62, 78];

function StepItem({ step, position, beamFill, index }) {
  const isLeft = step.side === "left";
  const layout = isLeft
    ? { left: "4%", width: "calc(50% - 80px)" }
    : { left: "calc(50% + 56px)", width: "calc(50% - 80px)" };

  const start = index * 0.18;
  const end = start + 0.18;

  const opacity = useTransform(beamFill, [start, end], [0, 1]);
  const translateY = useTransform(beamFill, [start, end], [20, 0]);

  return (
    <motion.div
      className="absolute text-left"
      style={{
        top: `${position}%`,
        ...layout,
        opacity,
        y: translateY,
        width: "460px",
      }}
    >
      <h3 className="font-mgn mb-2" style={{ fontSize: "35px" }}>
        <motion.span
          className="font-extrabold bg-gradient-to-l from-indigo-400 to-white bg-clip-text text-transparent"
          
        >
          {step.id}. {step.title}
        </motion.span>
      </h3>

      <p className="text-white/50 leading-relaxed" style={{ fontSize: "17px" }}>
        {step.body}
      </p>

      {step.bold && (
        <p className="text-white/80 font-semibold mt-1">{step.bold}</p>
      )}
    </motion.div>
  );
}

export default function Step({ beamFill }) {
  return (
    <>
      {steps.map((step, i) => (
        <StepItem
          key={step.id}
          step={step}
          position={POSITIONS[i]}
          beamFill={beamFill}
          index={i}
        />
      ))}
    </>
  );
}
