module.exports = {
  '*': 'prettier --write --ignoreunknown',
  'src/**/*.{ts,html}': (files) => `ng lint --fix ${files.map((file) => `--lint-file-patterns ${file}`).join(' ')}`,
};
