module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  prefix: "",
  purge: {
    enabled: true,
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'principal-gray': '#464545',
      'principal-white': '#ffffff',
      'principal-blue': '#36aadd',
      'principal-orange': '#e8920a',
      'text-color': '#888888',
      'title-color': '#5c5c5c'
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      '7': '50px',
      '8': '56px',
      '9': '64px',
      '10': '100px',
      '11': '317px'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
      'title': '42px'
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
