"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "#home" },
  { name: "Labs", href: "#labs" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "How it works", href: "#how-it-works" },
  { name: "FAQ", href: "#faq" },
];

function NavButton({ className = "" }) {
  return (
    <button className={`nav-btn ${className}`}>
      <span className="nav-btn__bubble" />
      <span className="nav-btn__label">Get in touch</span>
    </button>
  );
}

export default function Navbar() {
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
      transition={{ duration: 0.4 }}
      className="fixed top-9 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
      style={{ filter: "drop-shadow(0 0 18px rgba(80,120,255,0.25))" }}
    >
      <div className="nav">
        <span className="nav__bubble" />

        <nav className="nav-container">
          <Link href="#home" className="logo">
            LOGO
          </Link>
          <ul className="hidden md:flex items-center gap-5">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="nav-link px-4 py-2 rounded-lg text-sm text-white/75"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <NavButton className="hidden md:inline-flex" />

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col gap-[5px] p-1"
          >
            <span className={`burger-line ${open ? "open-top" : ""}`} />
            <span className={`burger-line ${open ? "open-mid" : ""}`} />
            <span className={`burger-line ${open ? "open-bottom" : ""}`} />
          </button>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
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

                  <NavButton />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </motion.div>
  );
}