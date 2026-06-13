/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Legacy tokens (kept so existing pages keep working) ──
        "riviera-blue": "#0A6FB5",
        "sand-beige": "#F4ECDD",
        "sunset-orange": "#E8765A",
        "mediterranean-teal": "#18B0A4",

        // ── New "Côte d'Azur" luxury system ──
        azur: {
          ink: "#04101F", // deepest midnight sea
          night: "#071D33", // night azure
          deep: "#0C2F4F", // deep sea
          sea: "#0A6FB5", // signature azure
          wave: "#1F8FD0", // bright wave
          mist: "#9FC9E6", // sea mist
        },
        gold: {
          DEFAULT: "#E7B473", // riviera sun gold
          light: "#F3D3A1",
          deep: "#C98F4A",
        },
        coral: {
          DEFAULT: "#E8765A",
          light: "#F4A38C",
        },
        sand: {
          DEFAULT: "#F6EFE2",
          deep: "#E9DCC4",
          warm: "#FBF7EF",
        },
        teal: {
          sea: "#18B0A4",
          deep: "#0E7C76",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        ultra: "0.35em",
        widest2: "0.25em",
      },
      animation: {
        fadeIn: "fadeIn 0.8s ease-in-out",
        floaty: "floaty 6s ease-in-out infinite",
        shimmer: "shimmer 2.4s linear infinite",
        marquee: "marquee 40s linear infinite",
        "scroll-cue": "scrollCue 2s ease-in-out infinite",
        "pulse-slow": "pulse 3s infinite",
        grain: "grain 8s steps(10) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollCue: {
          "0%": { transform: "translateY(0)", opacity: "0" },
          "40%": { opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(-8%, 5%)" },
          "70%": { transform: "translate(8%, 8%)" },
          "90%": { transform: "translate(-3%, 12%)" },
        },
      },
      screens: {
        xs: "475px",
        "3xl": "1600px",
      },
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        glow: "0 0 40px rgba(31, 143, 208, 0.35)",
        gold: "0 10px 40px -10px rgba(231, 180, 115, 0.5)",
        lift: "0 30px 60px -20px rgba(4, 16, 31, 0.35)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
