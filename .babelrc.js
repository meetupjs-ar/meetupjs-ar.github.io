const env = require('./env-config.js');

module.exports = {
  plugins: [
    [
      'inline-import',
      {
        extensions: ['.css']
      }
    ],
    ['transform-define', env]
  ],
  presets: ['next/babel']
};
