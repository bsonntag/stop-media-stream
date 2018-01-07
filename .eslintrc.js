module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: 'seegno',
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
  },
};
