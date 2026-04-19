"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalData } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Menu, X, Code, Globe } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="glass flex items-center justify-between w-full max-w-5xl px-6 py-3 rounded-full"
      >
        <div className="text-xl font-bold tracking-tight text-white">
          <a href="#home">BT<span className="text-brand">.</span></a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <MagneticLink key={link.name} href={link.href}>
              {link.name}
            </MagneticLink>
          ))}
        </div>

        {/* Desktop Socials */}
        <div className="hidden md:flex items-center gap-4">
          <MagneticLink href={personalData.github} external>
            <Code className="w-5 h-5" />
          </MagneticLink>
          <MagneticLink href={personalData.linkedin} external>
            <Globe className="w-5 h-5" />
          </MagneticLink>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-background/90 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-8 text-2xl font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-brand transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="flex gap-6 mt-4">
                <a href={personalData.github} target="_blank" rel="noopener noreferrer">
                  <Code className="w-8 h-8" />
                </a>
                <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">
                  <Globe className="w-8 h-8" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MagneticLink({ children, href, external = false }: { children: React.ReactNode; href: string; external?: boolean }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="relative px-2 py-1 text-sm font-medium transition-colors hover:text-brand"
      >
        {children}
      </a>
    </motion.div>
  );
}
