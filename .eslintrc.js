module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    "semi": ["error", "always"],
    "array-bracket-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 2
      }
    ],
    "array-element-newline": [
      "error",
      {
        "multiline": true,
        "minItems": 2
      }
    ],
    "camelcase": "off",
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }
    ],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "multiline-ternary": [
      "warn",
      "always-multiline"
    ],
    "newline-per-chained-call": [
      "error",
      {
        "ignoreChainWithDepth": 2
      }
    ],
    "no-duplicate-imports": "error",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxBOF": 0,
        "maxEOF": 1
      }
    ],
    "object-curly-newline": [
      "error",
      {
        "minProperties": 2,
        "multiline": true,
        "consistent": true
      }
    ],
    "object-property-newline": [
      "error",
      {
        "allowAllPropertiesOnSameLine": false
      }
    ],
    "operator-linebreak": [
      "error",
      "after"
    ],
    "padding-line-between-statements": [
      "error",
      { "blankLine": "always", "prev": "*", "next": ["return", "class", "export", "switch", "throw", "try", "while", "for", "block", "if"] },
      { "blankLine": "always", "prev": ["const", "let", "var"], "next": "*"},
      { "blankLine": "any", "prev": ["const", "let", "var"], "next": ["const", "let", "var"]},
      { "blankLine": "any", "prev": ["export"], "next": ["export"]}
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": true,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": [
          "single",
          "multiple",
          "all",
          "none"
        ]
      }
    ],
  }
}
