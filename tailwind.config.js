module.exports = {
  mode:process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'puregreen': 'rgb(0,128,0)',
      'brightgreen': 'rbg(15, 166, 15)',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
