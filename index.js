import pluginJest from 'eslint-plugin-jest';

// Jest Linter Options
export default [
  pluginJest.configs['flat/recommended'],
  {
    languageOptions: {
      globals: {
        vi: true
      }
    },
    rules: {
      // If this is not turned off, linting throws because it can't find 'jest' install
      'jest/no-deprecated-functions': 'off',
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
  }
];
