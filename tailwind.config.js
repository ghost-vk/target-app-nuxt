module.exports = {
  purge: ['./src/**/*.{vue,js}'],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
      },
    },
    extend: {
      minHeight: {
        '3/4': '75%',
      },
    },
  },
  variants: {
    extend: {
      blur: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
