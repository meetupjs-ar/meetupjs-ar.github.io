const withMDX = require('@zeit/next-mdx')();
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const { version, homepage } = require('./package.json');

const nextConfig = {
  distDir: 'build',
  publicRuntimeConfig: {
    REACT_APP_SOCIAL_IMAGE: 'http://meetupjs.com.ar/static/social.jpg',
    REACT_APP_TITLE: 'Meetup.js Argentina',
    REACT_APP_URL: homepage,
    REACT_APP_VERSION: version
  }
};

module.exports = withPlugins(
  [withMDX, [withOptimizedImages, { optimizeImagesInDev: true }]],
  nextConfig
);
