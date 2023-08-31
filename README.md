# eslint-config-tjw-jest

The Jared Wilcurt's Jest/Vitest ESLint rules


## Using this

1. `npm install --save-dev eslint-config-tjw-jest`
1. In your `.eslitrc.js` add `tjw-jest` to your `extends` like so:
    ```js
    module.exports = {
      'extends': [
        'tjw-jest'
      ]
    };
    ```

If you already have a `no-restricted-syntax` rule, you can merge the ones that come with this config with your own, like so:

```js
// .eslintrc.js
const jestRestrictedSyntax = require('eslint-config-tjw-jest/no-restricted-syntax.json');

module.exports = {
  extends: [
    'tjw-jest'
  ],
  rules: {
    'no-restricted-syntax': [
      'error',
      ...jestRestrictedSyntax,
      // your custom rules
    ]
  }
};
```


* * *


Custom rules:

```js
module.exports = {
  extends: [
    'tjw-jest'
  ],
  rules: {
    'capitalize-test-names': 'error',
    'newline-before-expect-assertion': 'error',
    'test-names-avoid-should': 'error'
  }
};
```
```json
{
  "scripts": {
    "lint": "eslint --rulesdir=./node_modules/eslint-config-tjw-jest/custom-eslint-rules"
  }
}
```

* * *


**See also:**

* [eslint-config-tjw-base](https://github.com/tjw-lint/eslint-config-tjw-base)
* [eslint-config-tjw-import](https://github.com/tjw-lint/eslint-config-tjw-import)
* [eslint-config-tjw-jest](https://github.com/tjw-lint/eslint-config-tjw-jest)
* [eslint-config-tjw-jsdoc](https://github.com/tjw-lint/eslint-config-tjw-jsdoc)
* [eslint-config-tjw-vue](https://github.com/tjw-lint/eslint-config-tjw-vue)
