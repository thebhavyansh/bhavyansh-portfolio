"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { experiences } from "@/lib/data";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto" ref={containerRef}>
      <div className="flex flex-col items-center mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Professional Journey</h2>
        <div className="h-1.5 w-20 bg-brand rounded-full mb-6" />
        <p className="text-slate-400 max-w-xl">
          A track record of building scalable full-stack applications and AI-driven solutions.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Desktop Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2 hidden md:block" />
        
        {/* Animated Timeline Progress */}
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-brand -translate-x-1/2 hidden md:block z-10"
        />

        <div className="flex flex-col gap-16 md:gap-24">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index }: { exp: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`relative flex flex-col md:flex-row items-center gap-8 ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-6 h-6 rounded-full bg-brand border-4 border-background -translate-x-1/2 z-20 hidden md:block" />

      {/* Content Card */}
      <div className={`w-full md:w-[45%] glass-card p-8 rounded-3xl`}>
        <div className="flex items-center gap-3 mb-4 text-brand-accent">
          <Briefcase className="w-5 h-5" />
          <span className="font-bold tracking-tight">{exp.role}</span>
        </div>

        <h3 className="text-2xl font-bold mb-2">{exp.company}</h3>
        
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-6">
          <Calendar className="w-4 h-4" />
          <span>{exp.period}</span>
        </div>

        <ul className="space-y-4">
          {exp.description.map((point: string, i: number) => (
            <li key={i} className="flex gap-3 text-slate-300 text-sm leading-relaxed">
              <ChevronRight className="w-4 h-4 text-brand flex-shrink-0 mt-0.5" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer for Desktop */}
      <div className="hidden md:block md:w-[10%]" />
      
      {/* Role/Company Background on the other side */}
      <div className="hidden md:flex md:w-[45%] flex-col items-center justify-center opacity-10">
        <span className="text-6xl font-black text-white">{exp.period.split(" ")[0]}</span>
      </div>
    </motion.div>
  );
}
