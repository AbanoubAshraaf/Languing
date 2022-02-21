module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true,
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import"],
  rules: {
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
  },
  settings: {
    react: {
      version: "latest",
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      typescript: {
        project: ["/tsconfig.json"],
      },
    },
  },
};
