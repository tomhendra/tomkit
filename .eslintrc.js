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
      files: [
        'jest.setup.js',
        'jest.config.js',
        '**/*.test.ts',
        '**/*.test.tsx',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
