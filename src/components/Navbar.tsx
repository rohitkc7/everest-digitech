"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Mountain, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

function ThemeToggle({ scrolled }: { scrolled: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return <div className="h-9 w-9" />;

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
        scrolled
          ? "text-muted hover:bg-surface hover:text-foreground"
          : "text-white/70 hover:bg-white/10 hover:text-white"
      }`}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll(); // set initial state
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/95 shadow-lg shadow-black/5 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className={`flex items-center gap-2 text-xl font-bold transition-colors duration-300 ${
            scrolled ? "text-brand-dark" : "text-white"
          }`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white shadow-sm">
            <Mountain className="h-4 w-4" />
          </span>
          Everest Digitech
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                pathname === link.href
                  ? scrolled
                    ? "bg-brand-light text-brand font-semibold"
                    : "bg-white/15 text-white font-semibold"
                  : scrolled
                    ? "text-muted hover:bg-surface hover:text-foreground"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <ThemeToggle scrolled={scrolled} />

          <Link
            href="/contact"
            className={`ml-2 rounded-xl px-5 py-2 text-sm font-semibold shadow-sm transition-all duration-300 ${
              scrolled
                ? "bg-brand text-white hover:bg-brand-hover"
                : "bg-white text-brand hover:bg-white/90"
            }`}
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile: toggle + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle scrolled={scrolled} />
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
              scrolled
                ? "text-muted hover:bg-surface"
                : "text-white/80 hover:bg-white/10"
            }`}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background/98 px-6 pb-6 backdrop-blur-xl md:hidden">
          <nav className="mt-4 flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "bg-brand-light text-brand font-semibold"
                    : "text-muted hover:bg-surface hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-3 rounded-xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-hover"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
