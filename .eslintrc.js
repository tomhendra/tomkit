module.exports = {
  root: true,
  extends: ['@react-native'],
  plugins: ['react-compiler', 'import'],

  rules: {
    // React
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'warn',

    // React Hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // React Compiler
    'react-compiler/react-compiler': 'error',

    // Imports
    'import/order': [
      'warn',
      {
        alphabetize: { order: 'asc', caseInsensitive: true },
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'type',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/no-duplicates': ['warn', { 'prefer-inline': false }],
    'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],
  },

  overrides: [
    // TypeScript
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            caughtErrorsIgnorePattern: '^_',
          },
        ],
        '@typescript-eslint/consistent-type-imports': [
          'warn',
          { prefer: 'type-imports' },
        ],
      },
    },
    // Tests
    {
      files: [
        '**/__tests__/**/*',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        'jest.setup.js',
      ],
      extends: ['plugin:testing-library/react'],
      env: { jest: true },
      rules: {
        '@typescript-eslint/no-shadow': 'off',
      },
    },
    // Config files
    {
      files: ['*.mjs', '*.config.mjs', '*.config.js', '*.config.ts'],
      parserOptions: {
        ecmaVersion: 2024,
        sourceType: 'module',
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],

  settings: {
    'import/ignore': ['react-native'],
    react: { version: 'detect' },
  },

  ignorePatterns: ['dist/*', 'android/*', 'ios/*'],
}
