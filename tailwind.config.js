module.exports = {
  theme: {
    extend: {
      backgroundColor: theme => ({
        'near-white': '#f4f4f4',
        overlay: 'rgba(0, 0, 0, 0.7)',
        'secondary-light': theme('colors')['secondary-light'],
        'washed-green': '#e8fdf5'
      }),
      borderColor: {
        'black-10': 'rgba(0, 0, 0, 0.1)'
      },
      colors: {
        'dark-green': '#137752',
        primary: '#2e282a',
        quaternary: '#6a5359',
        secondary: '#ffe45e',
        'secondary-light': '#fffceb',
        success: '#98d083',
        tertiary: '#fffceb'
      },
      height: {
        '50-px': '50px'
      },
      maxHeight: {
        '75-vh': '75vh'
      },
      maxWidth: {
        '7xl': '96rem'
      },
      padding: {
        '68-px': '68px'
      },
      width: {
        '50-px': '50px'
      }
    }
  },
  variants: {},
  plugins: []
};
