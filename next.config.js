const externalLinks = require('remark-external-links');
const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const PacktrackerPlugin = require('@packtracker/webpack-plugin');
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
    ],
    [
      new PacktrackerPlugin({
        project_token: '8eae744b-e700-43e7-8c21-97464275e82f',
        upload: process.env.NODE_ENV === 'production',
        branch: process.env.TRAVIS_BRANCH || process.env.TRAVIS_PULL_REQUEST_BRANCH
      })
    ]
  ],
  {
    distDir: 'build',
    publicRuntimeConfig: {
      GA: 'UA-93848949-1',
      ISNA_MESSAGES: [
        /* {
          activateAfter: 10000,
          expiration: new Date(2019, 4, 2, 23, 59, 59),
          hideAfter: 10000,
          key: 'first-event-2019',
          message: 'Seguinos en Twitter. Somos @Meetupjs_ar 😎'
        } */
      ],
      REACT_APP_SOCIAL_IMAGE: 'https://meetupjs.com.ar/static/social.jpg',
      REACT_APP_TITLE: 'Meetup.js Buenos Aires',
      REACT_APP_URL: homepage,
      REACT_APP_VERSION: version
    }
  }
);
