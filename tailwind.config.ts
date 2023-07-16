const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#65A8D1',
        secondary: '#36d1dc',
        // ...
      },
      fontFamily: {
        sans: ['Helvetica', ...defaultTheme.fontFamily.sans],
      },
    }
  }
}