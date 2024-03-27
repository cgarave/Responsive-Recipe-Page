/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'outfit': 'Outfit',
      'young': 'Young Serif',
    },
    colors: {
      'primary-nutmeg': '#854632',
      'primary-raspberry': '#7b284f',
      'neutral-rose-white': '#fff5fa',
      'neutral-egg-shell': '#f3e6d8',
      'neutral-light-grey': '#e4ded8',
      'neutral-wenge-brown': '#5f574e',
      'neutral-dark-charcoal': '#302d2c',
    }
  },
  plugins: [],
}

