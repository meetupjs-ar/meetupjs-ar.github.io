const { version, homepage } = require('./package.json');

module.exports = {
  'process.env.REACT_APP_SOCIAL_IMAGE': 'http://meetupjs.com.ar/static/social.jpg',
  'process.env.REACT_APP_TITLE': 'Meetup.js Argentina',
  'process.env.REACT_APP_URL': homepage,
  'process.env.REACT_APP_VERSION': version
};
