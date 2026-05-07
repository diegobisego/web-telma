"use client";

import { useCallback, useState, type MouseEvent } from "react";
import type { ConversionEvent } from "@/app/lib/track";
import { trackEvent } from "@/app/lib/track";

type TrackedWhatsAppButtonProps = {
  href: string;
  label: string;
  className?: string;
  trackEventName?: ConversionEvent;
};

export function TrackedWhatsAppButton({
  href,
  label,
  className = "",
  trackEventName,
}: TrackedWhatsAppButtonProps) {
  const [busy, setBusy] = useState(false);

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      if (
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0
      ) {
        return;
      }
      e.preventDefault();
      if (trackEventName) trackEvent(trackEventName);
      setBusy(true);
      window.open(href, "_blank", "noopener,noreferrer");
      window.setTimeout(() => setBusy(false), 700);
    },
    [href, trackEventName],
  );

  return (
    <a
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      aria-busy={busy}
      className={`inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-base font-semibold text-white shadow-[0_10px_28px_-6px_rgba(111,143,114,0.38)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-dark hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-[0.99] ${busy ? "pointer-events-none opacity-85 scale-[0.98]" : ""} ${className}`}
    >
      {busy ? "Abriendo WhatsApp..." : label}
    </a>
  );
}
