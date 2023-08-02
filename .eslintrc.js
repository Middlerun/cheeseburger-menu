module.exports = {
  env: {
    jasmine: true,
    jest: true,
    browser: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'babel', 'react'],
  extends: [
    'standard',
    'plugin:react/recommended',
    'plugin:storybook/recommended',
  ],
  rules: {
    'space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    'quote-props': 'off',
  },
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
}
