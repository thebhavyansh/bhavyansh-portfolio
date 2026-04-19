"use client";

import React from "react";
import { personalData, navLinks } from "@/lib/data";
import { ExternalLink, Code, ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-20 px-6 border-t border-white/5 bg-black/30 backdrop-blur-3xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <div className="text-3xl font-black tracking-tight text-white">
            BT<span className="text-brand">.</span>
          </div>
          <p className="text-slate-400 max-w-sm text-sm">
            Building digital experiences that combine performance, design, and intelligence.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Navigation</h4>
            <div className="flex flex-col gap-2 text-sm font-semibold">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-brand transition-colors">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-500">Connect</h4>
            <div className="flex gap-4">
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-brand/20 transition-all">
                <Code className="w-5 h-5" />
              </a>
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-brand/20 transition-all">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href={`mailto:${personalData.email}`} className="p-3 rounded-full bg-white/5 hover:bg-brand/20 transition-all">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-600">
        <p>© {currentYear} {personalData.name}. All rights reserved.</p>
        <p>Built with Next.js & Framer Motion</p>
      </div>
    </footer>
  );
}
