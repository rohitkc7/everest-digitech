import { Star } from "lucide-react";
import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    name: "Anita Maharjan",
    role: "Owner",
    company: "Himalayan Treks Nepal",
    quote:
      "Everest Digitech built us a website that truly represents our brand. Bookings increased within the first month. They were professional, fast, and always available to answer questions.",
    rating: 5,
    gradient: "from-teal-400 to-cyan-500",
    initials: "AM",
  },
  {
    name: "Sanjay Gupta",
    role: "CEO",
    company: "RetailPro Solutions",
    quote:
      "The custom inventory system they built saved our team hours every day. They understood our workflow perfectly and delivered exactly what we needed — on time and on budget.",
    rating: 5,
    gradient: "from-violet-400 to-indigo-500",
    initials: "SG",
  },
  {
    name: "Meena Thapa",
    role: "Marketing Manager",
    company: "GreenLeaf Organics",
    quote:
      "Our online sales tripled in 6 months thanks to their digital marketing strategy. They don't just run ads — they actually care about your results and explain everything clearly.",
    rating: 5,
    gradient: "from-amber-400 to-orange-500",
    initials: "MT",
  },
  {
    name: "Bikash Shrestha",
    role: "Founder",
    company: "Apex Financial Services",
    quote:
      "The branding package was outstanding. We now have a professional identity that stands out in our industry. Highly recommend them to any business serious about their image.",
    rating: 5,
    gradient: "from-emerald-400 to-teal-500",
    initials: "BS",
  },
  {
    name: "Priya Karki",
    role: "Director",
    company: "Kathmandu Events Co.",
    quote:
      "Working with Everest Digitech felt like having an in-house tech team. They're honest, responsive, and genuinely invested in your success. Will absolutely work with them again.",
    rating: 5,
    gradient: "from-rose-400 to-pink-500",
    initials: "PK",
  },
  {
    name: "Rajan Oli",
    role: "Managing Director",
    company: "Oli Construction Group",
    quote:
      "They redesigned our website and set up our Google presence from scratch. We started getting calls from new clients within weeks. Best investment we made for our business.",
    rating: 5,
    gradient: "from-blue-400 to-indigo-500",
    initials: "RO",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Client Stories
          </p>
          <h2 className="text-3xl font-bold text-brand-dark">
            What Our Clients Say
          </h2>
          <p className="mt-3 text-muted">
            Real feedback from businesses we&apos;ve worked with.
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, company, quote, rating, gradient, initials }, i) => (
            <FadeIn key={name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:shadow-md">
                {/* Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="mt-4 flex-1 text-sm leading-7 text-muted">
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Author */}
                <div className="mt-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${gradient} text-xs font-bold text-white`}
                  >
                    {initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-brand-dark">{name}</p>
                    <p className="text-xs text-muted">
                      {role}, {company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
