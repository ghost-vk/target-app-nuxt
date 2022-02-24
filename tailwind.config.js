module.exports = {
  content: ['./src/**/*.{vue,js}'],
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
      colors: {
        'purple-main': '#A88BFA'
      }
    },
  },
  // variants: {
  //   extend: {
  //     blur: ['hover', 'group-hover'],
  //   },
  // },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
