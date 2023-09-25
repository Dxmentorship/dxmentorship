/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    animation: {
      marquee: 'marquee 25s linear infinite',
      marquee2: 'marquee2 25s linear infinite',
      'fade-in': 'fade-in 0.5s linear forwards',
    },
    keyframes: {
      marquee: {
        '0%': {
          transform: 'translateX(0%)'
        },
        '100%': {
          transform: 'translateX(-100%)'
        },
      },
      marquee2: {
        '0%': {
          transform: 'translateX(100%)'
        },
        '100%': {
          transform: 'translateX(0%)'
        },
      },
      'fade-in': {
        from: {
          opacity: 0,
        },
        to: {
          opacity: 1,
        },
      },
      scroller3: {
        '100%': {
          transform: 'translateY(-50%)',
        },
      },
    },
    fontSize: {
      xs: [
        '0.75rem',
        {
          lineHeight: '1rem',
        },
      ],
      sm: [
        '0.875rem',
        {
          lineHeight: '1.5rem',
        },
      ],
      base: [
        '1rem',
        {
          lineHeight: '1.75rem',
        },
      ],
      lg: [
        '1.125rem',
        {
          lineHeight: '2rem',
        },
      ],
      xl: [
        '1.25rem',
        {
          lineHeight: '2rem',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          lineHeight: '2rem',
        },
      ],
      '3xl': [
        '2rem',
        {
          lineHeight: '2.5rem',
        },
      ],
      '4xl': [
        '2.5rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '5xl': [
        '3rem',
        {
          lineHeight: '3.5rem',
        },
      ],
      '6xl': [
        '3.75rem',
        {
          lineHeight: '1',
        },
      ],
      '7xl': [
        '4.5rem',
        {
          lineHeight: '1.1',
        },
      ],
      '8xl': [
        '6rem',
        {
          lineHeight: '1',
        },
      ],
      '9xl': [
        '8rem',
        {
          lineHeight: '1',
        },
      ],
    },
    extend: {
      keyframes: {
        disco: {
          '0%': {
            transform: 'translateY(-50%) rotate(0deg)'
          },
          '100%': {
            transform: 'translateY(-50%) rotate(360deg)'
          },
        },
      },
      animation: {
        disco: 'disco 1.5s linear infinite',
      },
      colors: {
        vulcan: {
          50: "#EFF0F5",
      100: "#DFE1EC",
      200: "#BFC3D9",
      300: "#9FA5C6",
      400: "#8087B3",
      500: "#636CA1",
      600: "#4E5683",
      700: "#3B4163",
      800: "#282C43",
      900: "#151723",
      950: "#0B0D13"
        },
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        '6xl': '5rem',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
