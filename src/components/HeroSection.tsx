"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Code2,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  Star,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" as const } },
};

const services = [
  { icon: Globe,      label: "Website Dev" },
  { icon: Code2,      label: "Software" },
  { icon: TrendingUp, label: "Marketing" },
  { icon: Lightbulb,  label: "IT Consulting" },
];

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-teal-900">
      {/* ── Animated gradient orbs (CSS — no JS) ───────────── */}
      <div className="animate-orb-1 absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full bg-teal-500/20 blur-[120px]" />
      <div className="animate-orb-2 absolute -right-20 bottom-1/4 h-[400px] w-[400px] rounded-full bg-cyan-400/15 blur-[100px]" />
      <div className="animate-orb-3 absolute right-1/3 top-0 h-[300px] w-[300px] rounded-full bg-teal-300/10 blur-[80px]" />

      {/* ── Dot grid ───────────────────────────────────────── */}
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,_#fff_1px,_transparent_1px)] [background-size:32px_32px]" />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 py-28 md:grid-cols-2">

        {/* Left — Text */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.p
            variants={item}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Everest Digitech
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Grow Your Business{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
              Digitally.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-8 text-teal-100/80"
          >
            We build websites, software, and digital strategies that help
            local businesses grow — with honesty, speed, and real results.
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/services"
              className="group flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-teal-900/40 transition hover:bg-brand-hover"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Get a Free Quote
            </Link>
          </motion.div>

          {/* Social proof strip */}
          <motion.div
            variants={item}
            className="mt-10 flex items-center gap-4 border-t border-white/10 pt-8"
          >
            <div className="flex -space-x-2">
              {["AM", "SG", "MT", "BS"].map((initials) => (
                <div
                  key={initials}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand-dark bg-gradient-to-br from-teal-400 to-cyan-500 text-[10px] font-bold text-white"
                >
                  {initials}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-0.5 text-xs text-teal-200">
                Trusted by <strong className="text-white">50+ clients</strong> across Nepal
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right — Floating UI cards */}
        <div className="relative hidden h-[480px] md:block">

          {/* Main services card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute left-4 top-8 w-72 rounded-3xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-teal-300">
              Our Services
            </p>
            <div className="grid grid-cols-2 gap-3">
              {services.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5"
                >
                  <Icon className="h-4 w-4 shrink-0 text-teal-300" />
                  <span className="text-xs font-medium text-white">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats badge — top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 },
              scale: { duration: 0.5, delay: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            }}
            className="absolute right-0 top-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-center shadow-xl backdrop-blur-md"
          >
            <p className="text-3xl font-black text-white">120+</p>
            <p className="mt-0.5 text-xs text-teal-200">Projects Done</p>
          </motion.div>

          {/* Project complete notification — bottom left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0, y: [0, -8, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 1.1 },
              x: { duration: 0.5, delay: 1.1 },
              y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
            }}
            className="absolute bottom-10 left-0 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500/30">
              <CheckCircle className="h-5 w-5 text-teal-300" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Project Delivered 🎉</p>
              <p className="text-[11px] text-teal-200">RetailPro Inventory System</p>
            </div>
          </motion.div>

          {/* Satisfaction badge — bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -12, 0] }}
            transition={{
              opacity: { duration: 0.5, delay: 1.3 },
              scale: { duration: 0.5, delay: 1.3 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 },
            }}
            className="absolute bottom-16 right-4 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-center shadow-xl backdrop-blur-md"
          >
            <p className="text-3xl font-black text-white">98%</p>
            <p className="mt-0.5 text-xs text-teal-200">Client Satisfaction</p>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" className="w-full fill-background" preserveAspectRatio="none">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
