"use client";

import { MessageCircle } from "lucide-react";

const PHONE = "9779844883275"; // Replace with real WhatsApp number (no + or spaces)
const MESSAGE = "Hi! I'd like to know more about your services.";

export default function WhatsAppButton() {
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-lg transition-all hover:px-5 hover:shadow-xl"
    >
      <MessageCircle className="h-5 w-5 shrink-0" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold transition-all duration-300 group-hover:max-w-xs">
        Chat with us
      </span>
    </a>
  );
}
