module.exports = {
  '*.js': ['eslint --fix', 'prettier --write', 'git add'],
  'index.js': ['npm test'],
  'package.json': ['sort-package-json', 'git add'],
};
