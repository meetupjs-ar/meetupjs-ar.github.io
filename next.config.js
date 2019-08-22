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
    },
    webpack: config => {
      if (process.env.CI) {
        config.plugins.push(
          new PacktrackerPlugin({
            upload: process.env.CI,
            fail_build: process.env.CI,
            branch: process.env.TRAVIS_BRANCH || process.env.TRAVIS_PULL_REQUEST_BRANCH,
            project_token: process.env.PT_PROJECT_TOKEN
          })
        );
      }

      return config;
    }
  }
);
