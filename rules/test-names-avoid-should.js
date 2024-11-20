/**
 * @testNamesAvoidShould Rule to enforce writing tests names in the style of classic prose using the "active voice"
 * @author TheJaredWilcurt
 */

'use strict';

/*
 * Most instances of the Passive Voice used in tests starting with "Should" can be
 * automatically fixed. For example, all the following passive voices would become
 * the displayed active voice alternative.
 *
 * Passive voice                | Active voice
 * :--                          | :--
 * Should not have been called  | Was not called
 * Should not have errored      | Does not error
 * Should not error             | Does not error
 * Should be true if clicked    | Is true if clicked
 * Should have been called once | Called once
 * Should have exploded         | Explodes
 * Should correctly render      | Correctly renders
 * Should say x                 | Displays x
 * Should render correctly      | Renders correctly
 */

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------
export default {
  meta: {
    type: 'layout',
    fixable: 'code',
    docs: {
      description: 'Avoid starting test names with "should"',
      category: 'Stylistic Issues',
      recommended: true,
      url: 'https://www.youtube.com/watch?v=OV5J6BfToSw&t=22m11s'
    },
    schema: []
  },
  create: function (context) {
    return {
      'CallExpression[callee.name="test"]': function (node) {
        if (node && node.arguments && node.arguments[0] && typeof(node.arguments[0].value) === 'string') {
          let testName = node.arguments[0].value;
          if (testName.toLowerCase().startsWith('should')) {
            context.report({
              node,
              message: 'Write test names in classic prose with the active voice (don\'t use "should")',
              fix: function (fixer) {
                function removeLastTwoCharacters (word) {
                  return word.slice(0, word.length - 2);
                }

                // 'Should render correctly' -> ['Should', 'render', 'correctly']
                let testWords = testName.split(' ');
                // ['Should', 'render', 'correctly'] -> ['render', 'correctly']
                testWords.shift();

                let firstWord = testWords[0].toLowerCase();
                let secondWord = testWords[1].toLowerCase();
                let thirdWord = testWords[2].toLowerCase();
                // Should not have been called => Was not called
                if (firstWord === 'not' && secondWord === 'have' && thirdWord === 'been') {
                  testWords[0] = '';
                  testWords[1] = 'was';
                  testWords[2] = 'not';
                // Should not have errored => Does not error
                } else if (firstWord === 'not' && secondWord === 'have') {
                  testWords[0] = 'does';
                  testWords[1] = 'not';
                  if (thirdWord.endsWith('ed')) {
                    testWords[2] = removeLastTwoCharacters(thirdWord);
                  }
                // Should not error => Does not error
                } else if (firstWord === 'not') {
                  testWords[0] = 'does not';
                // Should be true if clicked => Is true if clicked
                } else if (firstWord === 'be') {
                  testWords[0] = 'is';
                // Should have been called once => called once
                } else if (firstWord === 'have' && secondWord === 'been') {
                  testWords[0] = '';
                  testWords[1] = '';
                // Should have exploded => explodes
                } else if (firstWord === 'have') {
                  if (secondWord.endsWith('ed')) {
                    testWords[0] = '';
                    testWords[1] = removeLastTwoCharacters(secondWord) + 's';
                  } else {
                    testWords[0] = 'has';
                  }
                // Should correctly render => Correctly renders
                } else if (firstWord.endsWith('ly')) {
                  testWords[0] = testWords[0];
                  if (!secondWord.endsWith('s')) {
                    testWords[1] = testWords[1] + 's';
                  }
                // Should say x => Displays x
                } else if (firstWord === 'say') {
                  testWords[0] = 'displays';
                } else {
                  // Should render correctly -> Renders correctly
                  testWords[0] = testWords[0] + 's';
                }

                // ['', 'renders', 'correctly'] -> '\'renders correctly\''
                let revoiced = '\'' + testWords.join(' ').trim() + '\'';
                return fixer.replaceText(node.arguments[0], revoiced);
              }
            });
          }
        }
      }
    };
  }
};
