// Jest Linter Options
module.exports = {
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true,
    node: true
  },
  globals: {
    jsdom: true,
    Promise: true
  },
  extends: [
    'plugin:jest/recommended'
  ],
  plugins: [
    'jest'
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name="it"]',
        message: 'Use "test" instead of "it"'
      },
      {
        selector: 'MemberExpression[object.callee.name="expect"][property.name="toBe"]',
        message: 'Prefer .toEqual over .toBe'
      },
      {
        selector: 'Identifier[name="toBe"]',
        message: 'Prefer .toEqual over .toBe'
      }
    ]
  }
};
