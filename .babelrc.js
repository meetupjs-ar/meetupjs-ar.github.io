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

module.exports = {
  plugins: [inlineImportConfig, moduleResolverConfig],
  presets: ['next/babel']
};
