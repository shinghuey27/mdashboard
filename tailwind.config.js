module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'yellow-custom': '#ffdd00',
        'blue-custom':'#0e1b42',
        'grey-custom':'#d5d5dc',
      }
    },


  },
  variants: {
    extend: {},
  },
  plugins: [],
}
