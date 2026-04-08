"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";

const services = [
  "Website Development",
  "Software Development",
  "Digital Marketing",
  "Branding & Design",
  "Not sure yet",
];

const budgets = [
  "Under $500",
  "$500 – $1,500",
  "$1,500 – $5,000",
  "$5,000+",
  "Let's discuss",
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [budget, setBudget] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      budget,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 rounded-3xl border border-border bg-card p-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand-light">
          <CheckCircle className="h-8 w-8 text-brand" />
        </div>
        <h3 className="text-xl font-bold text-brand-dark">Message Sent!</h3>
        <p className="max-w-xs text-muted">
          Thanks for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => { setStatus("idle"); setBudget(""); }}
          className="mt-2 rounded-xl border border-border px-5 py-2 text-sm font-medium text-muted transition hover:border-brand hover:text-brand"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-8 shadow-sm"
    >
      {status === "error" && (
        <div className="mb-5 flex items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400">
          <AlertCircle className="h-4 w-4 shrink-0" />
          {errorMsg}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Full Name <span className="text-brand">*</span>
          </label>
          <input
            required
            name="name"
            type="text"
            placeholder="Pravin Singh"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted transition focus:border-brand focus:ring-2 focus:ring-brand-muted"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Email Address <span className="text-brand">*</span>
          </label>
          <input
            required
            name="email"
            type="email"
            placeholder="you@example.com"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted transition focus:border-brand focus:ring-2 focus:ring-brand-muted"
          />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="+977 98XXXXXXXX"
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted transition focus:border-brand focus:ring-2 focus:ring-brand-muted"
          />
        </div>

        {/* Service */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Service Interested In <span className="text-brand">*</span>
          </label>
          <select
            required
            name="service"
            defaultValue=""
            className="rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand-muted"
          >
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>

        {/* Budget */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-sm font-medium text-foreground">Budget Range</label>
          <div className="flex flex-wrap gap-2">
            {budgets.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setBudget(b === budget ? "" : b)}
                className={`rounded-xl border px-4 py-2 text-sm transition ${
                  budget === b
                    ? "border-brand bg-brand-light text-brand font-semibold"
                    : "border-border text-muted hover:border-brand hover:text-brand"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-sm font-medium text-foreground">
            Tell us about your project <span className="text-brand">*</span>
          </label>
          <textarea
            required
            name="message"
            rows={5}
            placeholder="Describe what you need, your timeline, and any other details..."
            className="resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted transition focus:border-brand focus:ring-2 focus:ring-brand-muted"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 font-semibold text-white shadow-sm transition hover:bg-brand-hover disabled:opacity-70"
      >
        {status === "loading" ? (
          <><Loader2 className="h-4 w-4 animate-spin" />Sending…</>
        ) : (
          <><Send className="h-4 w-4" />Send Message</>
        )}
      </button>
    </form>
  );
}
