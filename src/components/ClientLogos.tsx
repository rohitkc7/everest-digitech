// Replace the placeholder names with <img> tags pointing to real logo files
// e.g. <img src="/logos/company.svg" alt="Company" className="h-8 object-contain" />

const logos = [
  "Himalayan Treks",
  "RetailPro",
  "GreenLeaf Organics",
  "Apex Financial",
  "Kathmandu Events",
  "Oli Construction",
  "Summit Solutions",
  "Nepal Tech Hub",
];

export default function ClientLogos() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Trusted by businesses across Nepal
        </p>

        {/* Scrolling marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-surface to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-surface to-transparent" />

          <div className="flex animate-marquee gap-12 whitespace-nowrap">
            {[...logos, ...logos].map((name, i) => (
              <div
                key={`${name}-${i}`}
                className="flex h-12 min-w-[140px] items-center justify-center rounded-xl border border-border bg-card px-5 text-sm font-semibold text-muted transition hover:border-brand hover:text-brand"
              >
                {/* Swap this div for <img> once you have real logos */}
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
