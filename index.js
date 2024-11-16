import pluginJest from 'eslint-plugin-jest';

// Jest Linter Options
export default [
  ...pluginJest.configs['flat/recommended'],
  {
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
  }
];
