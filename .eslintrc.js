module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  "root": true,
  overrides: [
    {
      files: ['src/**/*.slice.ts'],
      rules: { 'no-param-reassign': ['error', { props: false }] },
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    'react', 'react-hooks', '@typescript-eslint', 'import', 'prettier', 'promise',
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "comma-dangle": ["error", "only-multiline"],
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    "@typescript-eslint/no-explicit-any": "error",
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": 0,
    "import/no-cycle": 0,
    "react/function-component-definition": [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
        unnamedComponents: 'arrow-function',
      },
    ],
    "react/display-name": 0,
    "no-console": ["error", { "allow": ["error"] }],
    "react/require-default-props": "off",
    "no-underscore-dangle": ["error", { "allow": ["_id"] }]
  },
  'settings': {
    "react": {
      "version": "detect"
    },
    "import/resolver": {
      typescript: {}
    },
  }
};
