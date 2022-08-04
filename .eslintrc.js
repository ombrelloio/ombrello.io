module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:@next/next/recommended",
    "airbnb",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/require-default-props": 0,
    "react/react-in-jsx-scope": 0,
    "react/jsx-filename-extension": [
      1,
      {
        extensions: ["ts", "tsx"],
      },
    ],
    "react/jsx-props-no-spreading": 0,
    "react/function-component-definition": 0,
    "arrow-body-style": [
      0,
      "as-needed",
      { requireReturnForObjectLiteral: true },
    ],
    "import/prefer-default-export": 0,
    "react/button-has-type": 0,
    "no-unused-vars": 1,
    "import/no-unresolved": "error",
    "react/no-array-index-key": 0,
    "no-console": ["error", { allow: ["warn"] }],
    // TODO: consider change later (below) => from 1 to error (2) (see transition component for errors)
    "jsx-a11y/anchor-is-valid": 1,
    "jsx-a11y/no-static-element-interactions": 1,
    "jsx-a11y/click-events-have-key-events": 1,
    "react/prop-types": 1,
    "no-underscore-dangle": ["error", { allow: ["__typename"] }],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {},
    },
  },
};
