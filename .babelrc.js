const env = require('./env-config.js');

module.exports = {
  plugins: [
    [
      'inline-import',
      {
        extensions: ['.css']
      }
    ],
    ['transform-define', env],
    [
      'module-resolver',
      {
        alias: {
          components: './components',
          utils: './components/Utils'
        }
      }
    ]
  ],
  presets: ['next/babel']
};
