// Jest Linter Options
module.exports = {
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 8,
    'sourceType': 'module'
  },
  'env': {
    'browser': true,
    'node': true
  },
  'globals': {
    'jsdom': true,
    'Promise': true
  },
  'extends': [
    'plugin:jest/recommended'
  ],
  'plugins': [
    'jest'
  ],
  rules: {}
};
