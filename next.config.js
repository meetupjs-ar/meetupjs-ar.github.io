const externalLinks = require('remark-external-links');
const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const { version, homepage } = require('./package.json');

module.exports = withPlugins(
  [
    withMDX({
      options: {
        mdPlugins: [externalLinks]
      }
    }),
    [withOptimizedImages],
    [withCSS],
    [
      withBundleAnalyzer,
      {
        analyzeBrowser: process.env.NODE_ENV === 'production',
        bundleAnalyzerConfig: {
          browser: {
            analyzerMode: 'static',
            reportFilename: 'bundle-analyzer/client.html'
          }
        }
      }
    ]
  ],
  {
    distDir: 'build',
    publicRuntimeConfig: {
      GA: 'UA-93848949-1',
      ISNA_MESSAGES: [
        {
          activateAfter: 10000,
          expiration: new Date(2018, 11, 15, 23, 59, 59),
          hideAfter: 10000,
          key: 'meetupjs-birthday',
          message: '¿Sabías que el 7 de noviembre cumplimos 5 años?'
        }
      ],
      REACT_APP_SOCIAL_IMAGE: 'https://meetupjs.com.ar/static/social.jpg',
      REACT_APP_TITLE: 'Meetup.js Argentina',
      REACT_APP_URL: homepage,
      REACT_APP_VERSION: version
    }
  }
);
