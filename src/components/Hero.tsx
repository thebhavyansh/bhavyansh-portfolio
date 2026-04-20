"use client";

import React from "react";
import { motion, Variants, easeOut } from "framer-motion";
import { personalData } from "@/lib/data";
import { ArrowDownRight, Sparkles } from "lucide-react";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen pt-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-widest uppercase rounded-full border border-white/10 bg-white/5 backdrop-blur-sm"
        >
          <Sparkles className="w-3 h-3 text-brand" />
          <span>Available for New Opportunities</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold tracking-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">
            {personalData.name.split(" ")[0]}
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-3xl font-medium text-slate-400 mb-8 max-w-2xl leading-relaxed"
        >
          {personalData.title}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-brand hover:scale-105 transition-transform rounded-full font-semibold overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative flex items-center gap-2">
              View My Work{" "}
              <ArrowDownRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </span>
          </a>

          <a
            href="#experience"
            className="px-8 py-4 bg-white/5 hover:bg-white/10 transition-colors border border-white/10 rounded-full font-semibold backdrop-blur-sm"
          >
            Experience
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 animate-bounce">
        <span className="text-xs uppercase tracking-widest font-semibold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
