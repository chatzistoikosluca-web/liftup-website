"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

/* Leichtgewichtiger Scroll-Reveal-Wrapper (natives IntersectionObserver-API,
   keine Bibliothek). Zustände:
   - "idle" (Start-/SSR-Zustand, keine Klasse): Inhalt ist normal sichtbar.
     Ohne JavaScript bleibt es dauerhaft bei diesem Zustand — kein
     Accessibility-/No-JS-Risiko wie bei einem "startet unsichtbar"-Ansatz.
   - "hidden" (nur nach Mount, nur für Elemente außerhalb des Viewports):
     dezent ausgeblendet/leicht verschoben, wartet auf Sichtbarkeit.
   - "visible": eingeblendet mit sanftem Übergang.
   Elemente, die beim Laden bereits im Viewport liegen, überspringen den
   "hidden"-Zustand komplett (kein Aufblitzen). Respektiert
   prefers-reduced-motion vollständig über CSS (siehe globals.css
   .lp-reveal). */
export function Reveal({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "visible">("idle");

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) {
      setState("visible");
      return;
    }

    setState("hidden");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const revealClass =
    state === "hidden" ? "lp-reveal" : state === "visible" ? "lp-reveal lp-reveal--visible" : "";

  return (
    <div ref={ref} className={[revealClass, className].filter(Boolean).join(" ")} style={style}>
      {children}
    </div>
  );
}
