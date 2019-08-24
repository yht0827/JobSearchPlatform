module.exports = {
    settings:{
      "import/resolver": {
        "node": {
          "moduleDirectory": [
            "node_modules",
            "src" // replace with your app-module-path directory
          ]
        }
      }
    },
    env: {
      "es6": true,
      "browser": true,
      "node": true
    },
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2016,
      "sourceType": "module"
  },
    extends: [
      'airbnb',
    ],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2018,
      sourceType: 'module',
    },
    plugins: [
      'react',
      "jsx-a11y",
      "import"
    ],
    rules: {
      "arrow-body-style":0,
      "no-trailing-spaces":0,
      "quotes": [
        "error",
        "double",
        {
            "avoidEscape": true
        }
    ],
    "indent": [
        "error",
        4
    ],
    "react/jsx-indent": [
        "error",
        4
    ],
    "react/jsx-indent-props": [
        "error",
        4
    ],
    "import/prefer-default-export":0,
    "object-curly-newline":0,
    "react/prefer-stateless-function": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-filename-extension": [
        1,
        {
            "extensions": [
                ".js",
                ".jsx"
            ]
        }
    ]
    },
  };
  