"use client";

import { useEffect, useState } from "react";
import { FeatureLight } from "./FeatureLight";

type Chapter = { id: string; title: string };

export function AboutSectionNavigation({ chapters }: { chapters: readonly Chapter[] }) {
  const [active, setActive] = useState(chapters[0]?.id);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const sections = chapters.flatMap(({ id }) => {
      const section = document.getElementById(id);
      return section ? [section] : [];
    });
    function update() {
      const passed = sections.filter((section) => section.getBoundingClientRect().top <= window.innerHeight * 0.35);
      setActive((passed.at(-1) ?? sections[0])?.id);
    }
    // The reading band works for both short chapters and viewport-tall sections.
    const observer = new IntersectionObserver(update, {
      rootMargin: "-15% 0px -65% 0px",
      threshold: 0,
    });
    sections.forEach((section) => observer.observe(section));
    window.addEventListener("hashchange", update);
    window.addEventListener("resize", update, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", update);
      window.removeEventListener("resize", update);
    };
  }, [chapters]);

  return (
    <nav aria-label="About page sections" className="about-chapter-nav">
      <ol>
        {chapters.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className="about-chapter-link"
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => setActive(item.id)}
            >
              <FeatureLight variant="heading" />
              <span className="chapter-label">{item.title}</span><span className="chapter-arrow" aria-hidden="true">→</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
