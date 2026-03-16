"use client";

import Navbar from "./Navbar";

export default function Hero({darkMode,setDarkMode}) {
  return (
    <section className="relative min-h-screen flex flex-col items-center text-white overflow-hidden bg-black">
      <div
        className="absolute top-0 left-0 w-screen h-[38%] bg-bottom bg-cover mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('/Frontend Assessment/light circle.png')",
        }}
      />

      <div
        className="absolute inset-0 bg-center bg-cover opacity-20"
        style={{ backgroundImage: "url('/Frontend Assessment/Stars.png')" }}
      />

      <div
        className="absolute inset-0 bg-center bg-cover mix-blend-screen pointer-events-none"
        style={{
          backgroundImage: "url('/Frontend Assessment/Light Rays.svg')",
        }}
      />

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

      <div className="relative flex flex-col items-center text-center px-4 gap-5 top-24">
        <button
          className="flex items-center justify-center text-sm font-medium text-white hover:brightness-110"
          style={{
            width: "134px",
            height: "35px",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "8px",
            boxShadow: "1px -2px 11.5px rgba(64,107,254,0.49) inset",
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(80,110,255,0.10) 50%, rgba(255,255,255,0.06) 100%)",
          }}
        >
          AI Dev Lab
        </button>

        <h1
          className="font-poppins tracking-tight"
          style={{ fontSize: "clamp(36px,5.5vw,72px)", lineHeight: "1.15" }}
        >
          Every idea starts in{" "}
          <span className="font-mgn text-indigo-400">the light</span>
        </h1>

        <h2
          className="tracking-tight -mt-2 bg-gradient-to-t from-indigo-400 to-white bg-clip-text text-transparent"
          style={{ fontSize: "clamp(36px,5.5vw,72px)", lineHeight: "1.15" }}
        >
          We build it <span className="font-mgn">right</span>.
        </h2>

        <p className="max-w-[625px] text-sm leading-relaxed text-white/55 -mt-1">
          XYZ is an AI Dev Lab helping founders turn ideas into real,
          scalable products, with clarity, not chaos.
          <br />
          Build. Fix. Scale. Gain traction guided by systems, AI, and elite operators.
        </p>

        <div className="flex gap-4 mt-3">
          <button
            className="text-sm textBleu hover:brightness-95 transition"
            style={{
              borderRadius: "8px",
              background: "#fff",
              padding: "12px 40px",
              minWidth: "180px",
            }}
          >
            Get In Touch
          </button>

          <button
            className="text-sm font-bold text-white hover:brightness-110 transition"
            style={{
              borderRadius: "8px",
              background: "rgba(15,25,80,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "12px 40px",
              minWidth: "180px",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      <img
        src="/Frontend Assessment/Frame 1000005931.svg"
        alt="AI Dev Lab icon"
      />
    </section>
  );
}
