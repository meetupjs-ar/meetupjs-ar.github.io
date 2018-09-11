const withMDX = require('@zeit/next-mdx')();
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  distDir: 'build'
};

module.exports = withPlugins(
  [withMDX, [withOptimizedImages, { optimizeImagesInDev: true }]],
  nextConfig
);
