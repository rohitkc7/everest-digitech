import type { Metadata } from "next";
import {
  Globe,
  Code2,
  TrendingUp,
  Palette,
  Check,
  Search,
  FileText,
  Hammer,
  Rocket,
  HeartHandshake,
  Clock,
  BadgeCheck,
  PhoneCall,
  Banknote,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services — Everest Digitech",
  description:
    "Website development, software solutions, digital marketing, and branding services tailored to help your business grow online.",
};

const services = [
  {
    icon: Globe,
    gradient: "from-teal-400 via-cyan-400 to-blue-500",
    tag: "bg-teal-50 text-teal-700 dark:bg-teal-900/40 dark:text-teal-300",
    title: "Website Development",
    description:
      "We design and build websites that look great, load fast, and convert visitors into customers. From simple landing pages to full business websites.",
    features: [
      "Fully responsive across all devices",
      "SEO-optimized from the ground up",
      "Fast loading with performance best practices",
      "CMS integration (edit your content easily)",
      "Contact forms & lead capture",
      "Google Analytics setup",
    ],
  },
  {
    icon: Code2,
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    tag: "bg-violet-50 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300",
    title: "Software Development",
    description:
      "Custom software built around your business processes — dashboards, portals, automation tools, and internal systems that actually save time.",
    features: [
      "Custom-built for your exact workflow",
      "API integrations with third-party tools",
      "Cloud-ready & scalable architecture",
      "Admin panels & user management",
      "Data export & reporting",
      "Ongoing maintenance & support",
    ],
  },
  {
    icon: TrendingUp,
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    tag: "bg-amber-50 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300",
    title: "Digital Marketing",
    description:
      "Get found online and turn traffic into real business. We handle SEO, paid ads, social media, and content so you can focus on running your business.",
    features: [
      "Keyword research & on-page SEO",
      "Google Ads & Meta Ads management",
      "Social media content & scheduling",
      "Monthly performance reports",
      "Email marketing campaigns",
      "Lead generation funnels",
    ],
  },
  {
    icon: Palette,
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    tag: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300",
    title: "Branding & Design",
    description:
      "Your brand is the first impression. We create visual identities that are memorable, professional, and consistent across every touchpoint.",
    features: [
      "Logo design (multiple concepts)",
      "Color palette & typography system",
      "Full brand guidelines document",
      "Social media profile kits",
      "Business card & stationery design",
      "Presentation templates",
    ],
  },
];

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description: "We learn about your business, goals, and what success looks like for you.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Planning",
    description: "We map out the scope, timeline, and deliverables — no surprises later.",
  },
  {
    icon: Hammer,
    step: "03",
    title: "Execution",
    description: "Our team gets to work, keeping you updated at every milestone.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch",
    description: "We review, test, and launch — making sure everything is perfect.",
  },
  {
    icon: HeartHandshake,
    step: "05",
    title: "Support",
    description: "We stick around after launch to help you grow and improve.",
  },
];

const whyUs = [
  {
    icon: BadgeCheck,
    title: "Quality You Can See",
    description: "Every project goes through a thorough review before it reaches you.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect deadlines and communicate early if anything changes.",
  },
  {
    icon: Banknote,
    title: "Transparent Pricing",
    description: "Fixed quotes upfront. No hidden fees, no surprise invoices.",
  },
  {
    icon: PhoneCall,
    title: "Always Reachable",
    description: "A real person answers. We're here via WhatsApp, email, or call.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-900 py-36 text-white">
        {/* Gradient orbs */}
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />
        <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,_#fff_1px,_transparent_1px)] [background-size:28px_28px]" />

        {/* Floating service pills — decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {[
            { label: "Website Development", x: "5%",  y: "15%", rotate: "-6deg"  },
            { label: "Software Development", x: "72%", y: "10%", rotate: "5deg"   },
            { label: "Digital Marketing",    x: "80%", y: "65%", rotate: "-4deg"  },
            { label: "Branding & Design",    x: "3%",  y: "70%", rotate: "7deg"   },
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
              What We Offer
            </p>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Services Built for{" "}
              <span className="bg-gradient-to-r from-teal-300 to-cyan-300 bg-clip-text text-transparent">
                Real Growth.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-100/80">
              We don&apos;t sell packages — we solve problems. Whether you need a
              website, software, marketing, or a full brand, we&apos;ve got you covered.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-lg shadow-teal-950/40 transition hover:bg-brand-hover"
              >
                Get a Free Quote
              </Link>
              <a
                href="#services"
                className="rounded-xl border border-white/20 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Browse Services
              </a>
            </div>

            {/* Service icon strip */}
            <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
              {[
                { icon: Globe,      label: "Website Dev"  },
                { icon: Code2,      label: "Software"     },
                { icon: TrendingUp, label: "Marketing"    },
                { icon: Palette,    label: "Branding"     },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm">
                  <Icon className="h-4 w-4 text-teal-300" />
                  <span className="text-sm font-medium text-white/80">{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">Our Core Services</h2>
            <p className="mt-3 text-muted">Click into any service to see what&apos;s included.</p>
          </FadeIn>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {services.map(({ icon: Icon, gradient, tag, title, description, features }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:shadow-lg">
                  {/* Card header */}
                  <div className={`relative flex items-end gap-4 bg-gradient-to-br ${gradient} p-8`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="relative">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tag}`}>
                        Service
                      </span>
                      <h2 className="mt-1 text-xl font-bold text-white">{title}</h2>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="flex flex-1 flex-col gap-6 p-8">
                    <p className="text-muted leading-7">{description}</p>

                    <ul className="space-y-2.5">
                      {features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-light">
                            <Check className="h-3 w-3 text-brand" />
                          </span>
                          <span className="text-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-xl bg-brand-light px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
                      >
                        Get Started →
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">How We Work</h2>
            <p className="mt-3 text-muted">
              A simple, transparent process from first call to final delivery.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {process.map(({ icon: Icon, step, title, description }, i) => (
              <FadeIn key={step} delay={i * 0.1}>
                <div className="relative flex flex-col items-center text-center">
                  {/* Connector line */}
                  {i < process.length - 1 && (
                    <div className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-[calc(100%-1rem)] bg-brand-light lg:block" />
                  )}

                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light shadow-sm">
                    <Icon className="h-7 w-7 text-brand" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-semibold text-brand-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">Why Work With Us?</h2>
            <p className="mt-3 text-muted">What makes Everest Digitech different.</p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map(({ icon: Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card p-6 text-center transition hover:border-brand hover:shadow-md">
                  <div className="mx-auto mb-4 inline-flex rounded-xl bg-brand-light p-3 transition group-hover:bg-brand">
                    <Icon className="h-6 w-6 text-brand transition group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-900 py-24 text-white">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Not Sure Where to Start?
            </h2>
            <p className="mt-4 text-lg text-teal-200">
              Tell us about your business and we&apos;ll recommend the right service
              — no obligation, no pressure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-brand transition hover:bg-brand-light"
              >
                Talk to Us
              </Link>
              <Link
                href="/about"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Learn About Us
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
