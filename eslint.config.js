// @ts-check
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierConfig = require('eslint-config-prettier');
const prettierPlugin = require('eslint-plugin-prettier');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const globals = require('globals');

module.exports = tseslint.config(
  {
    ignores: ['.cache/', '.git/', '.github/', 'node_modules/'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ['./tsconfig.json', './tsconfig.app.json', './tsconfig.spec.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      '@angular-eslint': angular.tsPlugin,
      prettier: prettierPlugin,
      unicorn: eslintPluginUnicorn,
    },
    extends: [
      prettierConfig,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...tseslint.configs.strict,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'unicorn/catch-error-name': 'error',
      'unicorn/consistent-function-scoping': 'error',
      'unicorn/custom-error-definition': 'error',
      'unicorn/error-message': 'error',
      'unicorn/escape-case': 'error',
      'unicorn/expiring-todo-comments': 'error',
      'unicorn/explicit-length-check': 'error',
      'unicorn/filename-case': 'error',
      'unicorn/import-index': 'error',
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-abusive-eslint-disable': 'error',
      'unicorn/no-array-instanceof': 'error',
      'unicorn/no-console-spaces': 'error',
      'unicorn/no-fn-reference-in-iterator': 'error',
      'unicorn/no-for-loop': 'error',
      'unicorn/no-hex-escape': 'error',
      'unicorn/no-keyword-prefix': 'error',
      'no-nested-ternary': 'error',
      'unicorn/no-nested-ternary': 'error',
      'unicorn/no-new-buffer': 'error',
      'unicorn/no-process-exit': 'error',
      'unicorn/no-unreadable-array-destructuring': 'error',
      'unicorn/no-unsafe-regex': 'error',
      'unicorn/no-unused-properties': 'error',
      'unicorn/no-zero-fractions': 'error',
      'unicorn/number-literal-case': 'error',
      'unicorn/prefer-add-event-listener': 'error',
      'unicorn/prefer-dataset': 'error',
      'unicorn/prefer-event-key': 'error',
      'unicorn/prefer-exponentiation-operator': 'error',
      'unicorn/prefer-flat-map': 'error',
      'unicorn/prefer-includes': 'error',
      'unicorn/prefer-node-append': 'error',
      'unicorn/prefer-node-remove': 'error',
      'unicorn/prefer-query-selector': 'error',
      'unicorn/prefer-reflect-apply': 'error',
      'unicorn/prefer-spread': 'error',
      'unicorn/prefer-starts-ends-with': 'error',
      'unicorn/prefer-text-content': 'error',
      'unicorn/prefer-type-error': 'error',
      'unicorn/prevent-abbreviations': 'error',
      'unicorn/regex-shorthand': 'error',
      'unicorn/throw-new-error': 'error',
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'kit',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'kit',
          style: 'kebab-case',
        },
      ],
    },
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended, ...angular.configs.templateAccessibility],
    rules: {},
  }
);
