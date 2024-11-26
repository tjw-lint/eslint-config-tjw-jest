/**
 * @newLineBeforeExpectAssertion Rule to enforce return after expect
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
      description: 'enforce return after expect',
      category: 'Stylistic Issues',
      recommended: true,
      url: 'https://eslint.org/docs/developer-guide/working-with-rules'
    }
  },
  create: function (context) {
    const sourceCode = context.getSourceCode();
    return {
      'MemberExpression[object.callee.name="expect"]': function (node) {
        const expectCallLastParenToken = sourceCode.getLastToken(node.object);
        const toBeCallFirstToken = sourceCode.getFirstToken(node.property);

        if (toBeCallFirstToken.loc.start.line - expectCallLastParenToken.loc.end.line !== 1) {
          context.report({
            node,
            message: 'Expected line break between "expect" call and assertion',
            fix: function (fixer) {
              return fixer.insertTextAfter(node.object, '\n');
            }
          });
        }
      }
    };
  }
};
