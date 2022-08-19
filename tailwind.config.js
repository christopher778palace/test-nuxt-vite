/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    ripple: theme => ({
      colors: theme('colors'),
      darken: 0.1
    }),
    extend: {}
  },
  plugins: [
    require('tailwindcss-ripple')()
  ]
}
