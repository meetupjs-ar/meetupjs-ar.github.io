const withMDX = require('@zeit/next-mdx')();
const withImages = require('next-images');

module.exports = withImages(withMDX());
