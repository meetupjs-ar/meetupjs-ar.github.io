const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss');
const tailwindcss = require('tailwindcss');

let purgePlugin = () => {};

if (process.env.NODE_ENV === 'production') {
  purgePlugin = purgecss({
    content: ['./components/**/*.jsx', './pages/**/*.jsx'],
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
  });
}

module.exports = {
  plugins: [tailwindcss, autoprefixer, purgePlugin, cssnano]
};
