import avoidIt from './rules/avoid-it.js';
import avoidToBe from './rules/avoid-to-be.js';
import capitalizeTestNames from './rules/capitalize-test-names.js';
import newLineBeforeExpectAssertion from './rules/new-line-before-expect-assertion.js';
import testNamesAvoidShould from './rules/test-names-avoid-should.js';

const pluginTjwJest = {
  meta: {
    name: 'eslint-plugin-jest-tjw',
    version: '3.0.0'
  },
  configs: {},
  rules: {
    'avoid-it': avoidIt,
    'avoid-to-be': avoidToBe,
    'capitalize-test-names': capitalizeTestNames,
    'new-line-before-expect-assertion': newLineBeforeExpectAssertion,
    'test-names-avoid-should': testNamesAvoidShould
  }
};

Object.assign(pluginTjwJest.configs, {
  recommended: {
    plugins: {
      'jest-tjw': pluginTjwJest
    },
    rules: {
      'jest-tjw/avoid-it': 'error',
      'jest-tjw/avoid-to-be': 'error',
      'jest-tjw/capitalize-test-names': 'error',
      'jest-tjw/new-line-before-expect-assertion': 'error',
      'jest-tjw/test-names-avoid-should': 'error'
    }
  }
});

export default pluginTjwJest;
