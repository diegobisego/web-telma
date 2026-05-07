"use client";

import { useEffect } from "react";

const TARGET_IDS: readonly string[] = ["mentoria", "cv", "empresas"];

export function ScrollHashHighlight() {
  useEffect(() => {
    let timeoutId: number | undefined;

    function flashTarget() {
      const raw = window.location.hash.slice(1);
      if (!TARGET_IDS.includes(raw)) return;

      const el = document.getElementById(raw);
      if (!el) return;

      el.classList.remove("scroll-target-flash");
      void el.offsetWidth;
      el.classList.add("scroll-target-flash");
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        el.classList.remove("scroll-target-flash");
      }, 2000);
    }

    flashTarget();
    window.addEventListener("hashchange", flashTarget);
    return () => {
      window.removeEventListener("hashchange", flashTarget);
      clearTimeout(timeoutId);
    };
  }, []);

  return null;
}
