const defaultConfig = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...defaultConfig,
  content: [...defaultConfig.content, "./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    ...defaultConfig.theme,
    extend: {
      ...defaultConfig.theme.extend,
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
      colors: {
        ...defaultConfig.theme.extend.colors,
        "cyber-cyan": "#00ffff",
        "cyber-dark": "#0a0f0f",
        "cyber-darker": "#000f0f",
      },
      animation: {
        ...defaultConfig.theme.extend.animation,
        "pulse-dot": "pulse-dot 2s infinite",
        "fade-in-down": "fadeInDown 0.3s ease-out forwards",
        "fade-out-up": "fadeOutUp 0.3s ease-in forwards",
      },
      keyframes: {
        "pulse-dot": {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
            boxShadow: "0 0 5px #ff0000",
          },
          "50%": {
            opacity: "0.7",
            transform: "scale(1.2)",
            boxShadow: "0 0 15px #ff0000",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
            boxShadow: "0 0 5px #ff0000",
          },
        },
        fadeInDown: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeOutUp: {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      transitionProperty: {
        width: "width",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [...defaultConfig.plugins],
}
