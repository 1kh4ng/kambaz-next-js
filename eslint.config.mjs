// eslint.config.mjs
import nextPlugin from "eslint-plugin-next";

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  // Load Next.js recommended rules so the plugin is detected
  ...nextPlugin.configs["core-web-vitals"],

  // Ignore the teaching snippets that intentionally violate rules
  {
    ignores: [
      "app/Labs/Lab3/**",
      "app/Labs/Lab1/**",
      "app/Labs/Lab2/Float.tsx"
    ],
  },
];
