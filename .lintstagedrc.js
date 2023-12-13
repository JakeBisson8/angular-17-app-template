module.exports = {
  '*': 'prettier --write --ignore-unknown',
  'src/**/*.{ts,html}': (files) => `ng lint --fix ${files.map((file) => `--lint-file-patterns ${file}`).join(' ')}`,
};
