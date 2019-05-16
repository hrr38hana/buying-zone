module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
  },
  extends: 'airbnb',
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
