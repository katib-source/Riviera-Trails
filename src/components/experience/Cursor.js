import React, { useEffect, useRef } from "react";

/**
 * Bespoke two-part cursor: a precise gold dot that tracks instantly and a
 * trailing ring that eases behind it and swells over interactive elements.
 * Hidden automatically on touch / coarse-pointer devices via CSS.
 */
const Cursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Skip entirely on touch devices — the ring would just sit in a corner.
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ringPos = { ...mouse };
    let raf;

    const onMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const tick = () => {
      // Ease the ring toward the cursor for a soft trailing feel.
      ringPos.x += (mouse.x - ringPos.x) * 0.18;
      ringPos.y += (mouse.y - ringPos.y) * 0.18;
      ring.style.transform = `translate(${ringPos.x}px, ${ringPos.y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    tick();

    const interactiveSelector = 'a, button, [data-cursor="hover"], input, textarea, select';
    const onOver = (e) => {
      if (e.target.closest(interactiveSelector)) ring.classList.add("is-hover");
    };
    const onOut = (e) => {
      if (e.target.closest(interactiveSelector)) ring.classList.remove("is-hover");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
};

export default Cursor;
