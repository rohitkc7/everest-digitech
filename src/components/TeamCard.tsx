"use client";

import { useState } from "react";
import { ExternalLink, Mail } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  gradient: string;
  initials: string;
  linkedin?: string;
  email?: string;
}

export default function TeamCard({ member }: { member: TeamMember }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
    >
      {/* Avatar */}
      <div className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${member.gradient}`}>
        <span className="text-5xl font-black text-white/30 select-none">
          {member.initials}
        </span>

        {/* Hover overlay */}
        <div
          className={`absolute inset-0 flex flex-col items-center justify-center gap-4 bg-black/60 backdrop-blur-sm transition-all duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="px-6 text-center text-sm leading-6 text-white">{member.bio}</p>
          <div className="flex gap-3">
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-brand"
                aria-label="LinkedIn"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            {member.email && (
              <a
                href={`mailto:${member.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-brand"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <p className="font-semibold text-brand-dark">{member.name}</p>
        <p className="mt-1 text-sm text-muted">{member.role}</p>
      </div>
    </div>
  );
}
