"use client";

import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import ParallaxSection from "@/components/ParallaxSection";
import "./globals.css";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Hero darkMode={darkMode} setDarkMode={setDarkMode}/>
      <ParallaxSection/>
      <Timeline />
    </div>
  );
}
