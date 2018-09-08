const withMDX = require('@zeit/next-mdx')();
const withImages = require('next-images');

const nextConfig = {
  distDir: 'build'
};

module.exports = withImages(withMDX(nextConfig));
