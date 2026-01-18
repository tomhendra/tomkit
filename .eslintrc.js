module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['react-compiler'],
  rules: {
    'react-compiler/react-compiler': 'error',
  },
  overrides: [
    {
      files: ['*.mjs', '*.config.mjs'],
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
}
