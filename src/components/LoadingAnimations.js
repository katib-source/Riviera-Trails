import React from "react";

// Simple fade-in animation wrapper
export const FadeIn = ({ children, delay = 0 }) => {
  return (
    <div
      className="animate-fadeIn"
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};

// Slide-in animation wrapper
export const SlideIn = ({ children, delay = 0, direction = "up" }) => {
  const animationClass = {
    up: "animate-slideInUp",
    down: "animate-slideInDown",
    left: "animate-slideInLeft",
    right: "animate-slideInRight",
  }[direction];

  return (
    <div
      className={animationClass}
      style={{
        animationDelay: `${delay}ms`,
        opacity: 0,
        animationFillMode: "forwards",
      }}
    >
      {children}
    </div>
  );
};
