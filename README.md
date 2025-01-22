# eslint-config-tjw-jest

The Jared Wilcurt's Jest/Vitest ESLint rules.


## Using this

This assumes you have ESLint 9+ already set up, if not, refer to [this guide](https://github.com/tjw-lint/eslint-config-tjw-base).

1. `npm install --save-dev eslint eslint-plugin-jest eslint-config-tjw-jest`
1. In your `eslint.config.js`:
    ```js
    import pluginJest from 'eslint-plugin-jest';
    import pluginTjwJest from 'eslint-config-tjw-jest';

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
    ```


* * *


## Custom rules

This library contains the following custom rules.

You can set any of these to `'off'` instead of the default `'error'`, to disable them.


### Avoid ".toBe()"

**Error prevention rule:** Enforces using `.toEqual` instead of the [error-proned](https://dev.to/thejaredwilcurt/why-you-should-never-use-tobe-in-jest-48ca) `.toBe` assertion.

```js
/* 'jest-tjw/avoid-to-be': 'error' */

describe('Return first player', () => {  
  test('Both players happen to have same name/age', () => {
    const player1 = { name: 'bob', age: 25 };
    const player2 = { name: 'bob', age: 25 };
    const players = [player1, player2];
    const getFirstPlayer = () => {
      return players[0];
    };

    // Good
    expect(getFirstPlayer() === player1)
      .toEqual(true);

    expect(getFirstPlayer() === player2)
      .toEqual(false);

    // Bad
    expect(getFirstPlayer() === player1)
      .toBe(true);

    expect(getFirstPlayer() === player2)
      .toBe(false);
  });
});
```


### Capitalize Test Names

Rule to enforce uppercasing the first character of a test description.

**Benefits:**

* Language evolved to use capitalizing the first word in a sentance to give clear visual indication of the start of a new statement. Let's piggy-back on centuries of improving the readability of the English language by enforcing this.
* Looks better in test runners when a test fails, example:
  * `LabDetailsCalendar > Calendar filtering > Selecting a user filters calendar data`

```js
/* 'jest-tjw/capitalize-test-names': 'error' */

// Good
test('Renders correctly', () => {...});

// Bad
test('renders correctly', () => {...});
```


### New Line Before Expect Assertion

Rule to enforce return after expect.

**Benefit:**

* The assertion is always consistently under the expectation.
* Visually locating assertions is much easier, and predictable.

```js
/* 'jest-tjw/new-line-before-expect-assertion': 'error' */

// Good
expect(myFunctionCall(with, these, values))
  .toEqual(thisOtherValue);

// Bad
expect(myFunctionCall(with, these, values)).toEqual(thisOtherValue);
```


### Test Names, Avoid "Should"

Rule to enforce writing test names in the style of classic prose using the "active voice".

Most instances of the Passive Voice used in tests starting with "Should" **can be automatically fixed**.
For example, all the following passive voices would become the displayed active voice alternative automatically.

Passive voice                | Active voice
:--                          | :--
Should not have been called  | Was not called
Should not have errored      | Does not error
Should not error             | Does not error
Should be true if clicked    | Is true if clicked
Should have been called once | Called once
Should have exploded         | Explodes
Should correctly render      | Correctly renders
Should say x                 | Displays x
Should render correctly      | Renders correctly

**Benefits:**

* Makes test names unique (they don't all start with the same 5 letters and blend together).
* Makes test names more direct and concise.
* It can [save lives](https://www.youtube.com/watch?v=OV5J6BfToSw&t=22m11s).

```js
/* 'jest-tjw/test-names-avoid-should': 'error' */

// Good
test('Renders correctly', () => {});

// Bad
test('Should render correctly', () => {});
```


* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
