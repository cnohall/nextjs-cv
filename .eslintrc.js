module.exports = {
  root: true,
  extends: ["next/core-web-vitals", "plugin:prettier/recommended"],
  rules: {
    semi: ["error", "always"],
    "max-len": "off"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname
  },
  ignorePatterns: [
    ".eslintrc.js",
    "postcss.config.js",
    "tailwind.config.js"
  ]
};