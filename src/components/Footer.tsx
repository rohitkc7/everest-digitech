import Link from "next/link";
import { Mail, Phone, MapPin, Mountain } from "lucide-react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-lg font-bold text-brand-dark">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
                <Mountain className="h-4 w-4" />
              </span>
              Everest Digitech
            </Link>
            <p className="mt-3 text-sm leading-6 text-muted">
              Helping businesses build strong digital products and online
              presence through websites, software, and marketing.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Quick Links
            </p>
            <ul className="mt-4 space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-muted">
              Get in Touch
            </p>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a
                  href="mailto:hello@everestdigitech.com"
                  className="hover:text-brand"
                >
                  hello@everestdigitech.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a href="tel:+9779844883275" className="hover:text-brand">+977 984-4883275</a>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center text-xs text-muted">
          © {new Date().getFullYear()} Everest Digitech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
