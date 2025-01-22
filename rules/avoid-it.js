/**
 * @avoidIt Use test() instead of it().
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
      description: 'Use test() instead of it().',
      category: 'Stylistic Issues',
      recommended: true,
      url: 'https://eslint.org/docs/developer-guide/working-with-rules'
    },
    schema: []
  },
  create: function (context) {
    return {
      'CallExpression[callee.name="it"]': function (node) {
        context.report({
          node,
          message: 'Always use test(), never use it().',
          fix: function (fixer) {
            return fixer.replaceTextRange([node.range[0], node.range[0] + 2], 'test');
          }
        });
      }
    };
  }
};
