import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        tradie: {
          navy: "#0F172A",
          orange: "#F97316",
          gray: "#64748B",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          'primary-foreground': "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          'accent-foreground': "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))"
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        },
        'border-dance': {
          '0%, 100%': {
            'clip-path': 'inset(0 0 98% 0)'
          },
          '25%': {
            'clip-path': 'inset(0 98% 0 0)'
          },
          '50%': {
            'clip-path': 'inset(98% 0 0 0)'
          },
          '75%': {
            'clip-path': 'inset(0 0 0 98%)'
          }
        },
        'water-flow': {
          '0%': {
            transform: 'translateX(-100%) translateY(0)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateX(100%) translateY(-20px)',
            opacity: '0'
          }
        },
        'droplet-fall': {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '50%': {
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
            opacity: '0'
          },
          '50%': {
            transform: 'translateY(-20px)',
            opacity: '1'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'water-flow': 'water-flow 3s infinite',
        'droplet-fall': 'droplet-fall 2s infinite',
        'float': 'float 3s infinite',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
