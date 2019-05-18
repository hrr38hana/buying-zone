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
    jestPuppeteer: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
