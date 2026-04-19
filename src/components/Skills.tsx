"use client";

import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { Code2, Database, BrainCircuit, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function Skills() {
  const iconMap = {
    Frontend: <Code2 className="w-6 h-6" />,
    Backend: <Globe className="w-6 h-6" />,
    Databases: <Database className="w-6 h-6" />,
    "AI/GenAI": <BrainCircuit className="w-6 h-6" />,
  };

  return (
    <section id="skills" className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Proficiency</h2>
        <div className="h-1.5 w-20 bg-brand rounded-full mb-6" />
        <p className="text-slate-400 max-w-xl">
          Deep expertise in building robust, performant, and intelligent solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skillGroup, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="glass-card p-10 rounded-[2.5rem] flex flex-col items-center text-center group"
          >
            <div className="p-4 rounded-full bg-brand/10 text-brand mb-8 group-hover:scale-110 transition-transform duration-500 shadow-xl">
              {iconMap[skillGroup.category as keyof typeof iconMap] || <Code2 className="w-6 h-6" />}
            </div>

            <h3 className="text-2xl font-black mb-8 tracking-tight">{skillGroup.category}</h3>

            <div className="flex flex-wrap justify-center gap-3">
              {skillGroup.items.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-full bg-white/5 border border-white/10 hover:border-brand/50 hover:bg-brand/10 transition-all cursor-crosshair"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
