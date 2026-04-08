import type { Metadata } from "next";
import {
  Target,
  Eye,
  Heart,
  Zap,
  ShieldCheck,
  Users,
  Lightbulb,
  Handshake,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import CountUp from "@/components/CountUp";
import TeamCard from "@/components/TeamCard";

export const metadata: Metadata = {
  title: "About Us — Everest Digitech",
  description:
    "Learn about Everest Digitech — an IT company delivering practical, modern, and result-driven digital solutions for startups, local businesses, and growing brands.",
};

const stats = [
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const values = [
  {
    icon: Heart,
    title: "Client First",
    description:
      "Every decision we make starts with one question: is this best for our client?",
  },
  {
    icon: Zap,
    title: "Speed & Quality",
    description:
      "We deliver fast without cutting corners — because your time and reputation matter.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Honest communication, transparent pricing, and no hidden surprises.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We stay ahead of technology so our clients always get modern, future-ready solutions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are proud to support and uplift local businesses and entrepreneurs.",
  },
  {
    icon: Handshake,
    title: "Long-term Partnership",
    description:
      "We don't disappear after launch — we grow alongside your business.",
  },
];

const team = [
  {
    name: "Pravin Singh Thakuri",
    role: "Founder & CEO",
    bio: "Visionary leader with a passion for technology and helping local businesses thrive digitally.",
    gradient: "from-teal-400 via-cyan-400 to-blue-500",
    initials: "PS",
    linkedin: "#",
    email: "pravin@everestdigitech.com",
  },
  {
    name: "Rohit KC",
    role: "Co-founder/Team Lead",
    bio: "Full-stack engineer who loves turning complex problems into elegant, user-friendly solutions.",
    gradient: "from-violet-400 via-purple-400 to-indigo-500",
    initials: "RK",
    linkedin: "#",
    email: "rohit@everestdigitech.com",
  },
  {
    name: "Aakash Thapa",
    role: "Digital Marketing Lead",
    bio: "Growth strategist specializing in SEO, paid campaigns, and data-driven content strategy.",
    gradient: "from-amber-400 via-orange-400 to-rose-400",
    initials: "AT",
    linkedin: "#",
    email: "aakash@everestdigitech.com",
  },
  {
    name: "Sita Rai",
    role: "UI/UX Designer",
    bio: "Crafts beautiful, intuitive interfaces that delight users and reflect each brand's identity.",
    gradient: "from-emerald-400 via-teal-400 to-cyan-500",
    initials: "SR",
    linkedin: "#",
    email: "sita@everestdigitech.com",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-900 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(13,148,136,0.3),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(94,234,212,0.1),_transparent_50%)]" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:48px_48px]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              Our Story
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
              We Are{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">
                Everest Digitech
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-teal-100">
              Born in the heart of Nepal, built for the world. We help
              businesses grow digitally — with honesty, craft, and a genuine
              desire to see them succeed.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map(({ value, suffix, label }, i) => (
              <FadeIn key={label} delay={i * 0.1} className="text-center">
                <p className="text-4xl font-black text-brand sm:text-5xl">
                  <CountUp target={value} suffix={suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-muted">{label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <FadeIn>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-brand">
                How It Started
              </p>
              <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
                From a Small Idea to a Growing Team
              </h2>
              <div className="mt-6 space-y-4 text-muted leading-7">
                <p>
                  Everest Digitech started in 2025 with a simple goal — to make
                  quality digital services accessible to local businesses in
                  Nepal that couldn&apos;t afford big agency prices.
                </p>
                <p>
                  What began as a two-person freelance studio is quickly growing
                  into a full team of developers, designers, and marketers
                  united by a shared mission: to help every client succeed
                  online.
                </p>
                <p>
                  Today, we work with clients across Nepal and internationally,
                  delivering websites, software, and marketing strategies that
                  actually move the needle.
                </p>
              </div>
            </FadeIn>

            {/* Timeline */}
            <FadeIn delay={0.15}>
              <div className="relative border-l-2 border-brand-light pl-8 space-y-10">
                {[
                  {
                    year: "2025",
                    event: "Worked as a Freelance team.",
                  },
                  {
                    year: "2026",
                    event: "Officialy registered and Founded.",
                  },
                ].map(({ year, event }) => (
                  <div key={year} className="relative">
                    <span className="absolute -left-[2.85rem] flex h-5 w-5 items-center justify-center rounded-full bg-brand ring-4 ring-background" />
                    <p className="text-xs font-bold uppercase tracking-widest text-brand">
                      {year}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-muted">{event}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">
              What Drives Us
            </h2>
            <p className="mt-3 text-muted">
              The purpose and direction behind everything we do.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <FadeIn delay={0.1}>
              <div className="relative overflow-hidden rounded-3xl bg-teal-900 p-10 text-white">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/5" />
                <div className="absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-white/5" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-white/10 p-4">
                    <Target className="h-7 w-7 text-teal-300" />
                  </div>
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                  <p className="mt-4 leading-7 text-teal-100">
                    To make powerful digital solutions accessible to every
                    business — regardless of size or budget — and to be the most
                    trusted IT partner for local and growing brands.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative overflow-hidden rounded-3xl border-2 border-brand bg-card p-10">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand/5" />
                <div className="absolute -bottom-8 -left-4 h-32 w-32 rounded-full bg-brand/5" />
                <div className="relative">
                  <div className="mb-6 inline-flex rounded-2xl bg-brand-light p-4">
                    <Eye className="h-7 w-7 text-brand" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark">
                    Our Vision
                  </h3>
                  <p className="mt-4 leading-7 text-muted">
                    To become Nepal&apos;s most recognized digital agency —
                    known not just for great work, but for genuinely caring
                    about the growth and success of every client we serve.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">Our Values</h2>
            <p className="mt-3 text-muted">
              The principles we live and work by every day.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-border bg-card p-6 transition hover:border-brand hover:shadow-md">
                  <div className="mb-4 inline-flex rounded-xl bg-brand-light p-3 transition group-hover:bg-brand">
                    <Icon className="h-5 w-5 text-brand transition group-hover:text-white" />
                  </div>
                  <h3 className="font-semibold text-brand-dark">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">
              Meet the Team
            </h2>
            <p className="mt-3 text-muted">
              The people behind the work. Hover to learn more.
            </p>
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.1}>
                <TeamCard member={member} />
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
              Ready to Build Something Great?
            </h2>
            <p className="mt-4 text-lg text-teal-200">
              Let&apos;s talk about your project and how Everest Digitech can
              help you grow.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="rounded-xl bg-white px-6 py-3 font-semibold text-brand transition hover:bg-brand-light"
              >
                Get in Touch
              </a>
              <a
                href="/services"
                className="rounded-xl border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
