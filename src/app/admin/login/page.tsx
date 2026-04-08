"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mountain, Eye, EyeOff, Lock } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const username = (form.elements.namedItem("username") as HTMLInputElement).value;
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    await new Promise((r) => setTimeout(r, 600));

    if (username === "admin" && password === "everest2026") {
      localStorage.setItem("admin_auth", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid username or password.");
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-teal-900 px-4">
      {/* Background orbs */}
      <div className="animate-orb-1 absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]" />
      <div className="animate-orb-2 absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-cyan-400/15 blur-[100px]" />

      <div className="relative w-full max-w-sm">
        {/* Logo */}
        <div className="mb-8 flex flex-col items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand shadow-lg">
            <Mountain className="h-6 w-6 text-white" />
          </span>
          <div className="text-center">
            <p className="text-lg font-bold text-white">Everest Digitech</p>
            <p className="text-sm text-teal-300">Admin Panel</p>
          </div>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-md">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Lock className="h-5 w-5 text-teal-300" />
            </div>
            <h1 className="text-xl font-bold text-white">Sign In</h1>
            <p className="mt-1 text-sm text-teal-200">Enter your credentials to continue</p>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Username
              </label>
              <input
                name="username"
                type="text"
                required
                placeholder="admin"
                className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-teal-300">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((p) => !p)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 transition hover:text-white"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 flex w-full items-center justify-center rounded-xl bg-brand py-3 font-semibold text-white transition hover:bg-brand-hover disabled:opacity-70"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
