module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  extends: 'airbnb',
  parser: 'babel-eslint',
  globals: {
    page: true,
    browser: true,
    context: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jsx-a11y',
    'react',
    'react-hooks'
  ],
  rules: {
    'no-plusplus': ['error', { "allowForLoopAfterthoughts": true } ],
    'no-underscore-dangle': 'off',
    'no-else-return': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off',
  },
};
