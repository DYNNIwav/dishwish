// Flat config. The app is plain browser scripts loaded with <script> tags —
// no bundler, no modules — so everything runs in "script" source type.
module.exports = [
  {
    files: ['js/**/*.js', 'script.js', 'data/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'script',
      globals: {
        window: 'readonly',
        document: 'readonly',
        localStorage: 'readonly',
        navigator: 'readonly',
        fetch: 'readonly',
        AbortController: 'readonly',
        requestAnimationFrame: 'readonly',
        console: 'readonly',
        module: 'writable',
        MEALS: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-undef': 'error',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'smart'],
      'prefer-const': 'error',
      'no-var': 'error',
    },
  },
  {
    files: ['tools/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'writable',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly',
      },
    },
    rules: { 'no-unused-vars': 'error' },
  },
];
