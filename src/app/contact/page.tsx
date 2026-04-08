import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us — Everest Digitech",
  description:
    "Get in touch with Everest Digitech to discuss your website, software, or digital marketing needs.",
};

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "hello@everestdigitech.com",
    href: "mailto:hello@everestdigitech.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+977 984-4883275",
    href: "tel:+9779844883275",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+977 984-4883275",
    href: "https://wa.me/9779844883275",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Kathmandu, Nepal",
    href: "https://maps.google.com/?q=Kathmandu,Nepal",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Sun – Fri, 9am – 6pm NPT",
    href: null,
  },
];

const faqs = [
  {
    question: "How quickly will you respond?",
    answer:
      "We respond to all inquiries within 24 hours on business days. For urgent matters, WhatsApp is the fastest way to reach us.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes! We work with clients across Nepal and internationally. All communication and project management is handled remotely.",
  },
  {
    question: "How do you handle pricing?",
    answer:
      "We provide fixed quotes after understanding your project. No hourly billing surprises — you know the full cost upfront.",
  },
  {
    question: "Can I see examples of your work?",
    answer:
      "Absolutely. Check out the Featured Projects section on our homepage, or mention it in your message and we'll share a portfolio relevant to your needs.",
  },
  {
    question: "What if I'm not sure which service I need?",
    answer:
      "That's totally fine — just describe your goal or problem. We'll recommend the right approach during our first conversation.",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-teal-900 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(13,148,136,0.3),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <FadeIn>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-teal-300">
              Let&apos;s Talk
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Start a Conversation
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Whether you have a project in mind, a question, or just want to
              explore what&apos;s possible — we&apos;d love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Main content */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">

            {/* Left — contact info */}
            <FadeIn className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-bold text-brand-dark">Get in Touch</h2>
                <p className="mt-2 text-muted leading-7">
                  Fill in the form and we&apos;ll get back to you within 24 hours.
                  Prefer a faster reply? Message us on WhatsApp.
                </p>
              </div>

              <ul className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-light">
                      <Icon className="h-5 w-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                        {label}
                      </p>
                      {href ? (
                        <a
                          href={href}
                          target={href.startsWith("http") ? "_blank" : undefined}
                          rel="noopener noreferrer"
                          className="mt-0.5 text-sm font-medium text-foreground transition hover:text-brand"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-foreground">{value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              {/* Quick WhatsApp CTA */}
              <a
                href="https://wa.me/9779844883275?text=Hi!%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp Directly
              </a>

              {/* Response time badge */}
              <div className="rounded-2xl border border-brand-muted bg-brand-light px-5 py-4">
                <p className="text-sm font-semibold text-brand-dark">
                  ⚡ Average Response Time
                </p>
                <p className="mt-1 text-2xl font-black text-brand">Under 2 Hours</p>
                <p className="mt-1 text-xs text-muted">During business hours (Sun–Fri, 9am–6pm NPT)</p>
              </div>
            </FadeIn>

            {/* Right — form */}
            <FadeIn delay={0.15}>
              <ContactForm />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-3xl px-6">
          <FadeIn className="text-center">
            <h2 className="text-3xl font-bold text-brand-dark">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-muted">
              Common questions before reaching out.
            </p>
          </FadeIn>

          <div className="mt-12 divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
            {faqs.map(({ question, answer }, i) => (
              <FadeIn key={question} delay={i * 0.07}>
                <details className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-medium text-brand-dark">{question}</span>
                    <ChevronDown className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-muted">{answer}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-teal-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <FadeIn className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="text-2xl font-bold">Still have questions?</h2>
              <p className="mt-1 text-teal-200">
                Browse our services or read about the team before reaching out.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="/services"
                className="rounded-xl border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Services
              </a>
              <a
                href="/about"
                className="rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-brand transition hover:bg-brand-light"
              >
                About Us
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
