module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    sourceType: 'module',
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react'],
  rules: {
    semi: ['error', 'always'],
    indent: ['error', 2],
    'comma-dangle': ['error', 'always-multiline'],
  },
};
