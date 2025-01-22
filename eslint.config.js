import pluginJest from 'eslint-plugin-jest';

import pluginTjwJest from './index.js';

export default [
  pluginJest.configs['flat/recommended'],
  pluginTjwJest.configs.recommended,
  // Your project rules/settings
  {
    // If you are using Vitest
    languageOptions: {
      globals: {
        vi: true
      }
    },
    rules: {
      // If this is not turned off, linting throws because it can't find 'jest' install
      'jest/no-deprecated-functions': 'off'
    }
  }
];
