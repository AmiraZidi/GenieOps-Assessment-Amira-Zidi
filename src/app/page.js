"use client";

import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ParallaxSection from "@/components/ParallaxSection";
import "./globals.css";
import { useState } from "react";
import DarkMode from "@/components/DarkMode";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : ""}>

      <Hero />
      <ParallaxSection/>
      <Timeline />
      <DarkMode darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}
