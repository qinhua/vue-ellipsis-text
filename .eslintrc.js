// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  extends: ['plugin:vue/essential', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 8
  },
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        semi: true
      }
    ]
  }
};
