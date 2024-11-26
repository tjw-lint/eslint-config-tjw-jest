/**
 * @capitalizeTestNames Rule to enforce uppercasing the first character of a test description
 * @author TheJaredWilcurt
 */

'use strict';

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
export default {
  meta: {
    type: 'layout',
    fixable: 'code',
    docs: {
      description: 'Uppercase the first letter of the test name',
      category: 'Stylistic Issues',
      recommended: true,
      url: 'https://eslint.org/docs/developer-guide/working-with-rules'
    },
    schema: []
  },
  create: function (context) {
    return {
      'CallExpression[callee.name="test"]': function (node) {
        const testName = node?.arguments?.[0]?.value;
        if (testName) {
          if (typeof(testName) === 'string' && testName[0] !== testName[0].toUpperCase()) {
            context.report({
              node,
              message: 'Uppercase the first letter of the test name',
              fix: function (fixer) {
                let capitalized = '\'' + testName[0].toUpperCase() + testName.slice(1) + '\'';
                return fixer.replaceText(node.arguments[0], capitalized);
              }
            });
          }
        }
      }
    };
  }
};
