"use client";

import { useEffect, useRef } from "react";

/** Optional surface lighting. The server-rendered section remains fully usable. */
export function FeatureLight({ variant = "surface" }: { variant?: "surface" | "heading" }) {
  const lightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const light = lightRef.current;
    const surface = light?.parentElement?.parentElement;
    if (!light || !surface) return;

    const preference = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const connection = (navigator as Navigator & {
      connection?: EventTarget & { saveData?: boolean };
    }).connection;
    let frame = 0;
    let latestX = 0;
    let latestY = 0;
    let bounds: DOMRect | undefined;

    function reset() {
      cancelAnimationFrame(frame);
      frame = 0;
      bounds = undefined;
      light!.style.removeProperty("--light-visible");
    }

    function move(event: PointerEvent) {
      if (!preference.matches || connection?.saveData || event.pointerType === "touch") return;
      bounds ??= surface!.getBoundingClientRect();
      latestX = Math.max(0, Math.min(bounds.width, event.clientX - bounds.left));
      if (variant === "heading") {
        latestY = Math.max(0, Math.min(bounds.height, event.clientY - bounds.top));
      }
      if (frame) return;
      frame = requestAnimationFrame(() => {
        light!.style.setProperty("--light-x", `${latestX}px`);
        if (variant === "heading") light!.style.setProperty("--light-y", `${latestY}px`);
        light!.style.setProperty("--light-visible", "1");
        frame = 0;
      });
    }

    surface.addEventListener("pointermove", move, { passive: true });
    surface.addEventListener("pointerleave", reset);
    window.addEventListener("resize", reset, { passive: true });
    window.addEventListener("blur", reset);
    document.addEventListener("visibilitychange", reset);
    preference.addEventListener("change", reset);
    connection?.addEventListener("change", reset);
    return () => {
      reset();
      surface.removeEventListener("pointermove", move);
      surface.removeEventListener("pointerleave", reset);
      window.removeEventListener("resize", reset);
      window.removeEventListener("blur", reset);
      document.removeEventListener("visibilitychange", reset);
      preference.removeEventListener("change", reset);
      connection?.removeEventListener("change", reset);
    };
  }, [variant]);

  return (
    <span className="feature-light-clip" aria-hidden="true">
      <span ref={lightRef} className="feature-light" data-light={variant} />
    </span>
  );
}
