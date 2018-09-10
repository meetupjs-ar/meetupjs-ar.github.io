const env = require('./env-config.js');

const inlineImportConfig = [
  'inline-import',
  {
    extensions: ['.css']
  }
];
const moduleResolverConfig = [
  'module-resolver',
  {
    alias: {
      components: './components',
      utils: './components/Utils'
    }
  }
];
const transformDefineConfig = ['transform-define', env];

module.exports = {
  plugins: [inlineImportConfig, moduleResolverConfig, transformDefineConfig],
  presets: ['next/babel']
};
