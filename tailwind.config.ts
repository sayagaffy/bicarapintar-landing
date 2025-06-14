/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand Colors from BicaraPintar Guidelines
        "royal-purple": "#6A2FF7",
        "royal-purple-hover": "#5A27D8",
        "quantum-teal": "#33F2CD",
        magma: "#F43151",
        "arctic-white": "#FCFCFC",
        "void-black": "#0A0A0A",
        droplet: "#1E1E1E",
        charcoal: "#2A2A2A",
        "light-gray": "#B0B0B0",
        "muted-gray": "#666666",

        // Tints and Shades
        "royal-purple-light": "#8859F9",
        "royal-purple-lighter": "#976DF9",
        "quantum-teal-light": "#99F9E6",
        "quantum-teal-dark": "#29C2A4",
      },
      fontFamily: {
        // Primary Font - Goli (fallback to system fonts)
        goli: ["var(--font-goli)", "system-ui", "sans-serif"],
        sans: ["var(--font-open-sans)", "Open Sans", "system-ui", "sans-serif"],
      },
      fontSize: {
        hero: ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        section: ["2.5rem", { lineHeight: "1.2" }],
        subsection: ["2rem", { lineHeight: "1.3" }],
        "card-title": ["1.5rem", { lineHeight: "1.4" }],
      },
      spacing: {
        section: "6rem",
        "section-mobile": "4rem",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #6A2FF7 0%, #33F2CD 100%)",
        "gradient-hero":
          "radial-gradient(circle at 25% 25%, rgba(106, 47, 247, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(51, 242, 205, 0.05) 0%, transparent 50%)",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease-out",
        "fade-in": "fadeIn 0.3s ease-out",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
