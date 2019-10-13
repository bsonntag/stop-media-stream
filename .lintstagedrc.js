module.exports = {
  '*.js': ['eslint --fix', 'git add'],
  'index.js': ['npm test'],
  'package.json': ['sort-package-json', 'git add'],
};
