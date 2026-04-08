"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  gradient: string;
  accent: string;
  href: string;
}

const categories = ["All", "Website", "Software", "Marketing", "Branding"];

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              active === cat
                ? "bg-brand text-white shadow-sm"
                : "border border-border bg-card text-muted hover:border-brand hover:text-brand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-lg"
            >
              {/* Visual */}
              <div
                className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${project.gradient}`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <span className="relative text-7xl font-black text-white/20 select-none">
                  {String(project.id).padStart(2, "0")}
                </span>
                <span
                  className={`absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${project.accent}`}
                >
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-bold text-brand-dark leading-snug">
                  {project.title}
                </h3>
                <p className="flex-1 text-sm leading-6 text-muted">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-surface px-2.5 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.href}
                  className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand transition hover:gap-2.5"
                >
                  View Project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
