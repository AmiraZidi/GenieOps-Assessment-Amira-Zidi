"use client";
import { Moon, Sun } from "lucide-react";

export default function DarkMode({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`dark-mode__btn ${darkMode ? "" : "light"}`}
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}