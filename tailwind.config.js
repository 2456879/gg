/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Azul Tecnológico Premium
        primary: {
          '50': '#F0F4FF',
          '400': '#60A5FA',
          '500': '#3B82F6', // Azul moderno e vibrante
          '600': '#2563EB',
          '900': '#1E293B',
        },
        // Secondary - Roxo Tecnológico
        secondary: {
          '400': '#A78BFA',
          '500': '#8B5CF6', // Roxo sofisticado
          '600': '#7C3AED',
        },
        // Accent - Ciano Futurista
        accent: {
          '400': '#22D3EE',
          '500': '#06B6D4', // Ciano vibrante
          '600': '#0891B2',
        },
        // Dark - Tons mais modernos
        dark: {
          '700': '#374151',
          '800': '#1F2937',
          '900': '#111827',
          '950': '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-in',
        'slide-up': 'slideUp 0.7s ease-out',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 87, 255, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 87, 255, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'gradient-card': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};