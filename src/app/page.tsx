import type { Metadata } from "next";
import { Globe, Code2, TrendingUp, Lightbulb } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import FeaturedProjects from "@/components/FeaturedProjects";
import AnimatedText from "@/components/AnimatedText";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Everest Digitech — Websites, Software & Digital Growth",
  description:
    "We help businesses build strong digital products and online presence through website development, custom software, digital marketing, branding, and IT solutions.",
};

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Professional business websites, landing pages, and responsive web platforms.",
  },
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Custom software solutions tailored to business workflows and growth.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "SEO, social media marketing, campaigns, and digital strategy.",
  },
  {
    icon: Lightbulb,
    title: "IT Consulting",
    description:
      "Smart technical guidance to help businesses adopt the right technology.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <HeroSection />

      {/* Services */}
      <section id="services" className="bg-surface py-20">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold text-brand-dark">Our Services</h2>
            <p className="mt-3 text-muted">
              Everything your business needs to grow online.
            </p>
          </FadeIn>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, description }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="h-full rounded-2xl bg-card p-6 shadow-sm transition hover:shadow-md">
                  <div className="mb-4 inline-flex rounded-xl bg-brand-light p-3">
                    <Icon className="h-6 w-6 text-brand" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-dark">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <ClientLogos />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Testimonials */}
      <Testimonials />

      {/* About snippet */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Who We Are
            </p>
            <h2 className="text-3xl font-bold text-brand-dark sm:text-4xl">
              About Everest Digitech
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted">
              Everest Digitech is an IT company focused on delivering practical,
              modern, and result-driven digital solutions for startups, local
              businesses, and growing brands.
            </p>
            <div className="mt-6">
              <AnimatedText />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-teal-900 py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn>
            <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
            <p className="mt-4 max-w-2xl text-lg text-teal-200">
              Need a website, software solution, or digital marketing support?
              Let&apos;s build something great for your business.
            </p>
            <div className="mt-8">
              <a
                href="mailto:hello@everestdigitech.com"
                className="inline-block rounded-xl bg-white px-6 py-3 font-semibold text-brand transition hover:bg-brand-light"
              >
                hello@everestdigitech.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
