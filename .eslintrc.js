module.exports = {
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: [
          "node_modules",
          "src" // replace with your app-module-path directory
        ]
      }
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 2016,
    sourceType: "module"
  },
  extends: ["airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["react", "jsx-a11y", "import"],
  rules: {
    "arrow-body-style": 0,
    "no-trailing-spaces": 0,
    quotes: [
      "error",
      "double",
      {
        avoidEscape: true
      }
    ],
    indent: ["error", 4],
    "max-len":0,
    "react/jsx-indent": ["error", 4],
    "arrow-parens":0,
    "react/jsx-indent-props": ["error", 4],
    "import/prefer-default-export": 0,
    "object-curly-newline": 0,
    "react/jsx-wrap-multilines": 0,
    "react/prop-types": 0,
    "react/jsx-closing-tag-location": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "no-confusing-arrow": 0,
    "no-nested-ternary":0,
    "prefer-template":0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"]
      }
    ]
  }
};
