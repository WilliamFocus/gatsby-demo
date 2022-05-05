module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: `react-app`,
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/semi': 'off',
  },
}
