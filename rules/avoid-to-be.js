/**
 * @avoidToBe Use .toEqual() instead of .toBe().
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
      description: 'Use .toEqual() instead of .toBe().',
      category: 'Error Prevention',
      recommended: true,
      url: 'https://dev.to/thejaredwilcurt/why-you-should-never-use-tobe-in-jest-48ca'
    },
    schema: []
  },
  create: function (context) {
    return {
      'MemberExpression[object.callee.name="expect"][property.name="toBe"]': function (node) {
        context.report({
          node,
          message: 'Always use .toEqual(), never use .toBe().',
          fix: function (fixer) {
            return fixer.replaceTextRange(node.range, 'toEqual');
          }
        });
      }
    };
  }
};
