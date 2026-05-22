/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular"]
      },
      colors: {
        night: "#020617",
        ink: "#07111f",
        electric: "#38bdf8",
        cyan: "#22d3ee",
        violet: "#8b5cf6"
      },
      boxShadow: {
        glow: "0 0 45px rgba(34, 211, 238, 0.22)",
        violet: "0 0 55px rgba(139, 92, 246, 0.25)"
      },
      backgroundImage: {
        "mesh-radial":
          "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.22), transparent 26%), radial-gradient(circle at 78% 12%, rgba(139, 92, 246, 0.2), transparent 24%), radial-gradient(circle at 50% 80%, rgba(34, 211, 238, 0.12), transparent 28%)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 3.6s ease-in-out infinite",
        orbit: "orbit 22s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.95", transform: "scale(1.04)" }
        },
        orbit: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" }
        }
      }
    }
  },
  plugins: []
};
