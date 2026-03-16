"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "Labs", href: "#labs" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "How it works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const section = document.querySelector("section");

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ y: -24, opacity: 0 }}
      animate={{
        y: visible ? 0 : -24,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
      style={{ filter: "drop-shadow(0 0 18px rgba(80,120,255,0.25))" }}
    >
      <div
        className="rounded-2xl p-px"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.18) 0%, rgba(80,110,255,0.10) 50%, rgba(255,255,255,0.06) 100%)",
        }}
      >
        <nav
          className="rounded-xl backdrop-blur-xl"
          style={{
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "8px",
            boxShadow: "1px -2px 11.5px rgba(64,107,254,0.49) inset",
            background: "rgba(10,18,60,0.45)",
            padding: "10px",
          }}
        >
          <div className="flex items-center justify-between px-6 py-3.5">
            <Link
              href="#home"
              className="text-xl font-bold tracking-[0.2em] text-white hover:opacity-80 transition-opacity"
            >
              LOGO
            </Link>

            <ul className="hidden md:flex items-center gap-5">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="px-4 py-2 rounded-lg text-sm text-white/75 hover:text-white hover:bg-white/10 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="#contact"
              className="hidden md:flex items-center justify-center rounded-lg text-[11px] font-bold uppercase tracking-widest text-blue-200 hover:brightness-110 transition"
              style={{
                background: "rgba(64,107,254,0.15)",
                border: "1px solid rgba(99,149,255,0.5)",
                padding: "10px",
                boxShadow:
                  "0 0 14px rgba(64,107,254,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              Get in touch
            </Link>

            <button onClick={() => setDarkMode(!darkMode)}>
              {darkMode === false ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              className="md:hidden flex flex-col gap-[5px] p-1"
            >
              <span
                className={`h-0.5 w-5 bg-white rounded transition-transform duration-300 ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white rounded transition-opacity duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white rounded transition-transform duration-300 ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="border-t border-white/10 pt-2">
                  {links.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-3 text-sm text-white/75 hover:text-white hover:bg-white/10 transition"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <div className="px-6 pt-2 pb-1 border-t border-white/10 mt-1">
                    <Link
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="block text-center py-2 rounded-lg text-[11px] font-bold uppercase tracking-widest text-blue-200"
                      style={{
                        background: "rgba(64,107,254,0.15)",
                        border: "1px solid rgba(99,149,255,0.5)",
                      }}
                    >
                      Get in touch
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
        <div className={darkMode ? "dark-mode" : ""}></div>
      </div>
    </motion.div>
  );
}
