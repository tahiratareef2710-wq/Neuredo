import { useEffect, useState } from "react";

/**
 * Tracks which section id currently owns the "reading line" near the top
 * of the viewport, used to drive both the header nav highlight and the
 * neural scroll rail.
 *
 * Position-based (not intersection-ratio-based) so it stays correct
 * regardless of how tall any individual section is.
 */
export function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    // How far down the viewport counts as the "active" reading line.
    const LINE_RATIO = 0.3;
    let frame = null;

    const computeActiveId = () => {
      const line = window.innerHeight * LINE_RATIO;

      // Elements are in top-to-bottom document order, so the last one
      // whose top has scrolled above the line is the active section.
      let current = elements[0].id;
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= line) {
          current = el.id;
        } else {
          break;
        }
      }

      // Once the page is scrolled to (or past) the bottom, force the
      // last section active even if it never crosses the reading line
      // (e.g. a short final section on a tall viewport).
      const scrolledToBottom =
        window.innerHeight + Math.ceil(window.scrollY) >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        current = elements[elements.length - 1].id;
      }

      return current;
    };

    const update = () => {
      const next = computeActiveId();
      setActiveId((prev) => (prev === next ? prev : next));
    };

    const onScrollOrResize = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [sectionIds]);

  return activeId;
}