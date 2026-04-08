"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    category: "Website Development",
    title: "Himalayan Treks Nepal",
    description:
      "A fully responsive tourism website for a trekking company in Nepal. Built with booking integration, photo galleries, and multi-language support to attract international visitors.",
    href: "#",
    gradient: "from-teal-400 via-cyan-400 to-blue-500",
    accent: "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
  },
  {
    id: 2,
    category: "Software Development",
    title: "RetailPro Inventory System",
    description:
      "A custom inventory and point-of-sale dashboard for a retail chain with 12 branches. Features real-time stock tracking, sales reporting, and staff management.",
    href: "#",
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    accent: "bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
  },
  {
    id: 3,
    category: "Digital Marketing",
    title: "GreenLeaf Organics Campaign",
    description:
      "A 6-month digital marketing campaign for an organic food brand. Achieved 3x growth in online sales through SEO, paid ads, and social media content strategy.",
    href: "#",
    gradient: "from-emerald-400 via-green-400 to-teal-500",
    accent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
  },
  {
    id: 4,
    category: "Branding & Design",
    title: "Apex Financial Services",
    description:
      "Complete brand identity for a financial services firm — logo, color system, typography, business stationery, and digital brand guidelines.",
    href: "#",
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    accent: "bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
  },
];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
  }),
};

export default function FeaturedProjects() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  };

  const project = projects[index];

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-brand-dark">Featured Projects</h2>
            <p className="mt-3 text-muted">A look at some of the work we&apos;re proud of.</p>
          </div>
          {/* Arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:border-brand hover:text-brand"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted transition hover:border-brand hover:text-brand"
              aria-label="Next project"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={project.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid md:grid-cols-2"
            >
              {/* Image / visual */}
              <div
                className={`relative flex min-h-64 items-center justify-center bg-gradient-to-br ${project.gradient} md:min-h-80`}
              >
                <div className="absolute inset-0 bg-black/10" />
                <span className="relative text-6xl font-black text-white/20 select-none">
                  {String(project.id).padStart(2, "0")}
                </span>
                {/* Replace with <Image> once you have real screenshots */}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center gap-4 p-8 md:p-12">
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${project.accent}`}>
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-brand-dark leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted leading-7">{project.description}</p>
                <Link
                  href={project.href}
                  className="mt-2 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-brand transition hover:gap-2.5"
                >
                  View Details
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {projects.map((p, i) => (
            <button
              key={p.id}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand" : "w-2 bg-border hover:bg-muted"
              }`}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
