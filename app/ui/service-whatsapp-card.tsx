"use client";

import type { ConversionEvent } from "@/app/lib/track";
import { trackEvent } from "@/app/lib/track";
import type { KeyboardEvent, MouseEvent, ReactNode } from "react";
import { useCallback, useState } from "react";

type ServiceWhatsappCardProps = {
  id?: string;
  href: string;
  ariaLabel: string;
  className?: string;
  trackEventName: ConversionEvent;
  children: ReactNode;
};

export function ServiceWhatsappCard({
  id,
  href,
  ariaLabel,
  className = "",
  trackEventName,
  children,
}: ServiceWhatsappCardProps) {
  const [opening, setOpening] = useState(false);

  const openWhatsApp = useCallback(() => {
    trackEvent(trackEventName);
    setOpening(true);
    window.open(href, "_blank", "noopener,noreferrer");
    window.setTimeout(() => setOpening(false), 700);
  }, [href, trackEventName]);

  function handleClick(e: MouseEvent<HTMLElement>) {
    const target = e.target as HTMLElement;
    if (
      target.closest("details") ||
      target.closest("summary") ||
      target.closest("a[href]")
    ) {
      return;
    }
    openWhatsApp();
  }

  function handleKeyDown(e: KeyboardEvent<HTMLElement>) {
    if (e.key !== "Enter" && e.key !== " ") return;
    const target = e.target as HTMLElement;
    if (target.closest("summary")) return;
    e.preventDefault();
    openWhatsApp();
  }

  return (
    <article
      id={id}
      role="button"
      tabIndex={0}
      aria-busy={opening}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`relative cursor-pointer overflow-hidden outline-none transition duration-300 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${opening ? "pointer-events-none scale-[0.99] opacity-90" : ""} ${className}`}
      aria-label={ariaLabel}
    >
      {opening ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white/55 text-sm font-semibold text-brand-dark backdrop-blur-[2px]">
          Abriendo WhatsApp...
        </div>
      ) : null}
      {children}
    </article>
  );
}
