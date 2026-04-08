"use client";

import { submissions } from "../_data";
import { Inbox, CheckCircle, Clock, TrendingUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const statusColors = {
  new: "bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  "in-progress": "bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  closed: "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
};

const statusLabels = {
  new: "New",
  "in-progress": "In Progress",
  closed: "Closed",
};

export default function DashboardPage() {
  const total = submissions.length;
  const newCount = submissions.filter((s) => s.status === "new").length;
  const inProgressCount = submissions.filter((s) => s.status === "in-progress").length;
  const closedCount = submissions.filter((s) => s.status === "closed").length;

  const serviceCounts = submissions.reduce<Record<string, number>>((acc, s) => {
    acc[s.service] = (acc[s.service] ?? 0) + 1;
    return acc;
  }, {});
  const topService = Object.entries(serviceCounts).sort((a, b) => b[1] - a[1])[0]?.[0];

  const stats = [
    { label: "Total Inquiries", value: total, icon: Inbox, color: "bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
    { label: "New", value: newCount, icon: ArrowUpRight, color: "bg-violet-50 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400" },
    { label: "In Progress", value: inProgressCount, icon: Clock, color: "bg-amber-50 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400" },
    { label: "Closed", value: closedCount, icon: CheckCircle, color: "bg-emerald-50 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400" },
  ];

  const recent = [...submissions]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-brand-dark">Dashboard</h1>
        <p className="mt-1 text-sm text-muted">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-muted">{label}</p>
              <div className={`rounded-xl p-2 ${color}`}>
                <Icon className="h-4 w-4" />
              </div>
            </div>
            <p className="mt-4 text-3xl font-black text-brand-dark">{value}</p>
          </div>
        ))}
      </div>

      {/* Top service banner */}
      <div className="flex items-center gap-4 rounded-2xl border border-brand-muted bg-brand-light p-5">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-muted">
          <TrendingUp className="h-5 w-5 text-brand" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-brand">
            Most Requested Service
          </p>
          <p className="mt-0.5 font-bold text-brand-dark">{topService}</p>
        </div>
      </div>

      {/* Recent submissions */}
      <div>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold text-brand-dark">Recent Submissions</h2>
          <Link href="/admin/submissions" className="text-sm font-medium text-brand hover:underline">
            View all →
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-border bg-surface text-left text-xs font-semibold uppercase tracking-wider text-muted">
                  <th className="px-6 py-4">Name</th>
                  <th className="px-6 py-4">Service</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recent.map((s) => (
                  <tr key={s.id} className="text-sm transition hover:bg-surface">
                    <td className="px-6 py-4">
                      <p className="font-medium text-foreground">{s.name}</p>
                      <p className="text-xs text-muted">{s.email}</p>
                    </td>
                    <td className="px-6 py-4 text-muted">{s.service}</td>
                    <td className="px-6 py-4 text-muted">{s.date}</td>
                    <td className="px-6 py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColors[s.status]}`}>
                        {statusLabels[s.status]}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
