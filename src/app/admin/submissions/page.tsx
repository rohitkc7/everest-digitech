"use client";

import { useState } from "react";
import { submissions as allSubmissions, type Submission, type SubmissionStatus } from "../_data";
import { X, Mail, Phone, Calendar, DollarSign } from "lucide-react";

const statusColors: Record<SubmissionStatus, string> = {
  new: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "in-progress": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  closed: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

const statusLabel: Record<SubmissionStatus, string> = {
  new: "New",
  "in-progress": "In Progress",
  closed: "Closed",
};

const tabs: Array<{ label: string; value: SubmissionStatus | "all" }> = [
  { label: "All", value: "all" },
  { label: "New", value: "new" },
  { label: "In Progress", value: "in-progress" },
  { label: "Closed", value: "closed" },
];

function getInitials(name: string) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

export default function SubmissionsPage() {
  const [active, setActive] = useState<SubmissionStatus | "all">("all");
  const [selected, setSelected] = useState<Submission | null>(null);

  const filtered =
    active === "all"
      ? allSubmissions
      : allSubmissions.filter((s) => s.status === active);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-brand-dark">Submissions</h1>
        <p className="mt-1 text-sm text-muted">All contact form inquiries from your website.</p>
      </div>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2">
        {tabs.map(({ label, value }) => {
          const count =
            value === "all"
              ? allSubmissions.length
              : allSubmissions.filter((s) => s.status === value).length;
          return (
            <button
              key={value}
              onClick={() => setActive(value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === value
                  ? "bg-brand text-white shadow-sm"
                  : "border border-border bg-card text-muted hover:border-brand hover:text-brand"
              }`}
            >
              {label}{" "}
              <span className="opacity-70">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Submission list */}
      <div className="space-y-3">
        {filtered.map((s) => (
          <div
            key={s.id}
            onClick={() => setSelected(s)}
            className="flex cursor-pointer items-start justify-between gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:border-brand hover:shadow-md"
          >
            <div className="flex min-w-0 flex-1 items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-light text-sm font-bold text-brand">
                {getInitials(s.name)}
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-brand-dark">{s.name}</p>
                  <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[s.status]}`}>
                    {statusLabel[s.status]}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-muted">{s.service} · {s.budget}</p>
                <p className="mt-1 truncate text-sm text-muted">{s.message}</p>
              </div>
            </div>
            <p className="shrink-0 text-xs text-muted">{s.date}</p>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-border bg-card py-16 text-center text-muted">
            No submissions found.
          </div>
        )}
      </div>

      {/* Detail modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl border border-border bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-muted transition hover:bg-surface hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal header */}
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-sm font-bold text-brand">
                {getInitials(selected.name)}
              </div>
              <div>
                <p className="font-bold text-brand-dark">{selected.name}</p>
                <span className={`mt-0.5 inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold ${statusColors[selected.status]}`}>
                  {statusLabel[selected.status]}
                </span>
              </div>
            </div>

            {/* Contact details */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href={`mailto:${selected.email}`} className="text-foreground hover:text-brand">
                  {selected.email}
                </a>
              </div>
              {selected.phone && (
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="h-4 w-4 shrink-0 text-brand" />
                  <span className="text-foreground">{selected.phone}</span>
                </div>
              )}
              <div className="flex items-center gap-3 text-sm">
                <DollarSign className="h-4 w-4 shrink-0 text-brand" />
                <span className="text-foreground">{selected.budget || "—"}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 shrink-0 text-brand" />
                <span className="text-foreground">{selected.date}</span>
              </div>
            </div>

            <div className="mt-4 rounded-xl bg-surface p-4">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Service</p>
              <p className="text-sm font-medium text-foreground">{selected.service}</p>
            </div>

            <div className="mt-3 rounded-xl bg-surface p-4">
              <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted">Message</p>
              <p className="text-sm leading-6 text-foreground">{selected.message}</p>
            </div>

            <a
              href={`mailto:${selected.email}`}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-white transition hover:bg-brand-hover"
            >
              <Mail className="h-4 w-4" />
              Reply via Email
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
