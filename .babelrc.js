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
  plugins: [moduleResolverConfig],
  presets: ['next/babel']
};
