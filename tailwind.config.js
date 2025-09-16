/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary - Azul Corporativo Premium
        primary: {
          '50': '#F0F4FF',
          '400': '#4F7CFF',
          '500': '#1E40AF', // Azul corporativo
          '600': '#1E3A8A',
          '900': '#1E293B',
        },
        // Secondary - Dourado Premium
        secondary: {
          '400': '#F59E0B',
          '500': '#D97706', // Dourado elegante
          '600': '#B45309',
        },
        // Accent - Verde Sucesso
        accent: {
          '400': '#10B981',
          '500': '#059669', // Verde profissional
          '600': '#047857',
        },
        // Dark - Tons premium
        dark: {
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