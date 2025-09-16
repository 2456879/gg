/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Azul Fortexis (baseado na logo)
        primary: {
          '50': '#F0F7FF',
          '100': '#E0EFFF',
          '200': '#BAD9FF',
          '300': '#7CBEFF',
          '400': '#369EFF',
          '500': '#0C7EF2', // Azul principal da logo
          '600': '#0A5BC7', // Azul mais escuro da logo
          '700': '#0D4A9C',
          '800': '#123E81',
          '900': '#15356B',
        },
        // Secondary - Azul escuro complementar
        secondary: {
          '400': '#4F7FBF',
          '500': '#2D5AA0', // Azul escuro sofisticado
          '600': '#1E4080',
          '700': '#1A3B75',
          '800': '#15356B',
          '900': '#0F2A5A',
        },
        // Accent - Azul claro para contraste
        accent: {
          '400': '#60A5FA',
          '500': '#3B82F6', // Azul claro para acentos
          '600': '#2563EB',
          '700': '#1D4ED8',
        },
        // Dark - Tons escuros premium
        dark: {
          '700': '#1E293B',
          '800': '#0F172A',
          '900': '#020617',
          '950': '#020617',
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