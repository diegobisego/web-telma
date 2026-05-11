export type ConversionEvent =
  | "hero_cta_click"
  | "mentoria_click"
  | "cv_click"
  | "empresas_click";

export function trackEvent(
  event: ConversionEvent,
  payload?: Record<string, unknown>,
): void {
  if (typeof window === "undefined") return;

  const data = { event, ts: Date.now(), ...payload };
  console.info("[conversion]", data);

  const endpoint = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
  if (endpoint) {
    const body = JSON.stringify(data);
    try {
      if (navigator.sendBeacon) {
        navigator.sendBeacon(
          endpoint,
          new Blob([body], { type: "application/json" }),
        );
      } else {
        void fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body,
          keepalive: true,
        }).catch(() => {});
      }
    } catch {}
  }
}
