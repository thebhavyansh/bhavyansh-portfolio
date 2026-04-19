"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data";
import { ExternalLink, Code, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 px-4">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="h-1.5 w-20 bg-brand rounded-full" />
          <p className="text-slate-400 max-w-md">
            Solving real-world problems with GenAI, modern frontend stacks, and secure backends.
          </p>
        </div>
        <a href="#" className="flex items-center gap-2 text-brand hover:underline font-semibold pr-4 mt-6 md:mt-0">
          More work <ArrowUpRight className="w-5 h-5" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: any }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-[2rem] glass-card"
    >
      {/* Decorative Background Glow */}
      <div className={cn(
        "absolute -right-10 -top-10 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none bg-gradient-to-br",
        project.color
      )} />

      <div className="p-8 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">Project Case Study</span>
            <div className="flex gap-2">
              <button className="p-2 bg-white/5 rounded-full hover:bg-brand/20 transition-colors">
                <Code className="w-5 h-5" />
              </button>
              <button className="p-2 bg-white/5 rounded-full hover:bg-brand/20 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-4 group-hover:text-brand transition-colors">
            {project.title}
          </h3>
          
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            {project.description}
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((t: string, i: number) => (
              <span key={i} className="text-[10px] font-bold uppercase py-1 px-3 bg-white/5 rounded-full border border-white/10">
                {t}
              </span>
            ))}
          </div>

          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-brand font-bold">
                  <span>Explore features</span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
