import React, { useEffect, useRef } from "react";

/** Thin azure→gold progress bar pinned to the top of the viewport. */
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    let raf = null;
    const update = () => {
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const pct = max > 0 ? (el.scrollTop / max) * 100 : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${pct / 100})`;
      raf = null;
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9997] h-[3px] origin-left"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-azur-wave via-teal-sea to-gold"
        style={{ transition: "transform 0.1s linear" }}
      />
    </div>
  );
};

export default ScrollProgress;
