import React, { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";

/**
 * Counts up to `value` when scrolled into view. Supports an optional decimal
 * (e.g. 5.0) and prefix/suffix (e.g. "1,000+").
 */
const Counter = ({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
  immediate = false,
}) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      setDisplay(prefix + value.toFixed(decimals) + suffix);
      return;
    }

    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration: 2,
      ease: "power2.out",
      paused: true,
      onUpdate: () => setDisplay(prefix + obj.v.toFixed(decimals) + suffix),
    });

    // `immediate` is used where the element may sit below the fold yet should
    // still animate on load (e.g. the hero stats on tall mobile layouts).
    let st;
    if (immediate) {
      const id = setTimeout(() => tween.play(), 600);
      return () => {
        clearTimeout(id);
        tween.kill();
      };
    }

    st = ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => tween.play(),
    });

    return () => {
      st.kill();
      tween.kill();
    };
  }, [value, decimals, prefix, suffix, immediate]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
};

export default Counter;
