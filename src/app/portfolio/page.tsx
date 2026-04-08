import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";
import ProjectsGrid, { type Project } from "@/components/ProjectsGrid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio — Everest Digitech",
  description:
    "Browse our work — websites, software, digital marketing campaigns, and branding projects delivered for clients across Nepal and beyond.",
};

const projects: Project[] = [
  {
    id: 1,
    title: "Himalayan Treks Nepal",
    category: "Website",
    description:
      "A fully responsive tourism website with booking integration, photo galleries, and multi-language support to attract international trekkers.",
    tags: ["Next.js", "SEO", "Booking System"],
    gradient: "from-teal-400 via-cyan-400 to-blue-500",
    accent: "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    href: "#",
  },
  {
    id: 2,
    title: "RetailPro Inventory System",
    category: "Software",
    description:
      "Custom inventory and POS dashboard for a retail chain with 12 branches — real-time stock, sales reports, and staff management.",
    tags: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    accent: "bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    href: "#",
  },
  {
    id: 3,
    title: "GreenLeaf Organics Campaign",
    category: "Marketing",
    description:
      "6-month digital campaign achieving 3× growth in online sales through SEO, Google Ads, and a full social media content strategy.",
    tags: ["SEO", "Google Ads", "Social Media"],
    gradient: "from-emerald-400 via-green-400 to-teal-500",
    accent: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    href: "#",
  },
  {
    id: 4,
    title: "Apex Financial Services",
    category: "Branding",
    description:
      "Complete brand identity — logo, color system, typography, business stationery, and a comprehensive digital brand guidelines document.",
    tags: ["Logo Design", "Brand Guidelines", "Print"],
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    accent: "bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    href: "#",
  },
  {
    id: 5,
    title: "Kathmandu Events Portal",
    category: "Website",
    description:
      "An events listing and ticketing portal for Kathmandu's largest event organizer with admin panel, seat selection, and payment gateway.",
    tags: ["Next.js", "Stripe", "Admin Panel"],
    gradient: "from-rose-400 via-pink-400 to-fuchsia-500",
    accent: "bg-rose-50 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
    href: "#",
  },
  {
    id: 6,
    title: "Oli Construction Group",
    category: "Website",
    description:
      "Professional website and Google Business setup for a construction firm. New client inquiries started coming in within the first two weeks of launch.",
    tags: ["WordPress", "SEO", "Google Business"],
    gradient: "from-blue-400 via-sky-400 to-cyan-500",
    accent: "bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    href: "#",
  },
  {
    id: 7,
    title: "NepalMart E-Commerce",
    category: "Software",
    description:
      "Full e-commerce platform for a local marketplace — product catalog, vendor management, order tracking, and mobile-optimized checkout.",
    tags: ["E-Commerce", "Next.js", "Razorpay"],
    gradient: "from-indigo-400 via-violet-400 to-purple-500",
    accent: "bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300",
    href: "#",
  },
  {
    id: 8,
    title: "Summit Coffee Branding",
    category: "Branding",
    description:
      "Brand identity and packaging design for an artisan coffee brand. Includes logo, labels, social media kit, and in-store signage templates.",
    tags: ["Logo", "Packaging", "Social Kit"],
    gradient: "from-yellow-400 via-amber-400 to-orange-500",
    accent: "bg-yellow-50 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
    href: "#",
  },
  {
    id: 9,
    title: "FitNepal App Marketing",
    category: "Marketing",
    description:
      "App launch campaign for a fitness platform — influencer coordination, Meta Ads, and App Store Optimization that drove 5,000 downloads in 30 days.",
    tags: ["App Launch", "Meta Ads", "ASO"],
    gradient: "from-green-400 via-teal-400 to-emerald-500",
    accent: "bg-green-50 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    href: "#",
  },
];

export default function PortfolioPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-900 py-36 text-white">
        {/* Gradient orbs */}
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-teal-400/15 blur-[100px]" />
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:48px_48px]" />

        {/* Floating project category badges — decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {[
            { label: "Website",   x: "4%",  y: "20%", rotate: "-5deg"  },
            { label: "Software",  x: "78%", y: "12%", rotate: "6deg"   },
            { label: "Marketing", x: "82%", y: "60%", rotate: "-3deg"  },
            { label: "Branding",  x: "2%",  y: "65%", rotate: "8deg"   },
            { label: "120+ Projects", x: "60%", y: "78%", rotate: "-4deg" },
          ].map(({ label, x, y, rotate }) => (
            <span
              key={label}
              style={{ left: x, top: y, transform: `rotate(${rotate})` }}
              className="absolute rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/30 backdrop-blur-sm"
            >
              {label}
            </span>
          ))}
        </div>

        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Our Work
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Projects We&apos;re{" "}
              <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Proud Of.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100/80">
              From websites to full software systems — here&apos;s a look at
              what we&apos;ve built for clients across Nepal and beyond.
            </p>

            {/* Stats strip */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
              {[
                { value: "120+", label: "Projects Delivered" },
                { value: "50+",  label: "Happy Clients"      },
                { value: "4",    label: "Service Categories"  },
                { value: "98%",  label: "Satisfaction Rate"   },
              ].map(({ value, label }) => (
                <div key={label} className="flex flex-col items-center gap-1 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
                  <span className="text-2xl font-black text-white">{value}</span>
                  <span className="text-xs text-teal-200">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <ProjectsGrid projects={projects} />
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Want to Be Our Next Success Story?
            </h2>
            <p className="mt-4 text-lg text-teal-200">
              Let&apos;s build something great together.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-brand transition hover:bg-brand-light"
              >
                Start a Project
              </Link>
              <Link
                href="/services"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
