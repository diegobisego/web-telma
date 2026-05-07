"use client";

import { useEffect, useState } from "react";

type DelayedFloatingWhatsAppProps = {
  href: string;
};

export function DelayedFloatingWhatsApp({ href }: DelayedFloatingWhatsAppProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reveal = () => {
      if (cancelled) return;
      setVisible(true);
    };

    const timer = window.setTimeout(reveal, 1800);

    const onScroll = () => {
      reveal();
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0))] right-[calc(1rem+env(safe-area-inset-right,0))] z-50 transition-all duration-500 ease-out sm:bottom-7 sm:right-7 ${visible ? "pointer-events-auto translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-3 scale-90 opacity-0"}`}
    >
      <div className="group relative">
        <span
          className="pointer-events-none absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-brand-dark px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100"
          role="tooltip"
        >
          Consulta rápida
        </span>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir chat de WhatsApp"
          title="Consulta rápida"
          className={`inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand text-2xl text-white shadow-[0_8px_24px_-4px_rgba(111,143,114,0.45)] transition duration-200 hover:-translate-y-0.5 hover:scale-105 hover:bg-brand-dark hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand active:scale-95 ${visible ? "pulse-soft" : ""}`}
        >
          W
        </a>
      </div>
    </div>
  );
}
