module.exports = {
  env: {
    browser: true
  },
  extends: ['airbnb', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'react/forbid-foreign-prop-types': 'off'
  }
};
