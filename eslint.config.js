// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettierConfig = require('eslint-config-prettier');
const eslintPluginUnicorn = require('eslint-plugin-unicorn');
const globals = require('globals');

module.exports = tseslint.config(
  {
    ignores: ['node_modules', 'dist', 'documentation'],
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      globals: globals.builtin,
    },
    plugins: {
      unicorn: eslintPluginUnicorn,
    },
    extends: [
      eslint.configs.recommended,
      prettierConfig,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
      ...tseslint.configs.strict,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      'unicorn/better-regex': 'error',
      'unicorn/import-style': 'error',
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
