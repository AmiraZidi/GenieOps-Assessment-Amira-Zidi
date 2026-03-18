"use client";

import Navbar from "./Navbar";

export default function Hero({ darkMode, setDarkMode }) {
  return (
    <section className="hero-section">
      <div className="hero-bg-top" />
      <div className="hero-bg-stars" />
      <div className="hero-bg-rays" />
      <div className="hero-gradient-strong" />
      <div className="hero-gradient-soft" />

      <Navbar />

      <div className="hero-content">
        <button className="dev-lab">
          <span className="dev-lab__border" />
          <span className="dev-lab__shimmer" />
          <span className="dev-lab__bubble" />
          <span className="dev-lab__ellipse-top" />
          <span className="dev-lab__ellipse-bottom" />
          <span className="dev-lab__label">AI Dev Lab</span>
        </button>
        <h1 className="hero-title">
          Every idea starts in{" "}
          <span className="font-mgn text-indigo-400">the light</span>
        </h1>
        <h2 className="hero-subtitle">
          We build it <span className="font-mgn">right</span>.
        </h2>
        <p className="hero-description">
          XYZ is an AI Dev Lab helping founders turn ideas into real, scalable
          products, with clarity, not chaos.
          <br />
          Build. Fix. Scale. Gain traction guided by systems, AI, and elite
          operators.
        </p>

        <div className="hero-actions">
          <button className="white_btn">Get In Touch</button>
          <button className="glow-btn">
            <span className="glow-btn__border" />
            <span className="glow-btn__shimmer" />
            <span className="glow-btn__bubble" />
            <span className="glow-btn__label">Learn More</span>
          </button>
        </div>
      </div>

      <img
        src="/Frontend Assessment/Frame 1000005931.svg"
        alt="AI Dev Lab icon"
        className="hero-image"
      />
    </section>
  );
}