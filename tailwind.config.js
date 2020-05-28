/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#74EBD5',
        secondary: '#ACB6E5'
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function({ addBase }) {
      addBase({
        'h1': { fontSize: '40px', lineHeight: '48px', fontWeight: '600' },
        'h2': { fontSize: '32px', lineHeight: '38px' },
        'h3': { fontSize: '24px', lineHeight: '32px' },
        'h4': { fontSize: '20px', lineHeight: '24px' },
        'h5': { fontSize: '17px', lineHeight: '20px' },
      })
    })
  ]
}
