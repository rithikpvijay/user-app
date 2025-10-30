// eslint.config.js
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import pluginVue from "eslint-plugin-vue";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default defineConfig([
  {
    name: "app/files-to-lint",
    files: ["**/*.{js,mjs,jsx,ts,tsx,vue}"], // ✅ Added TS files
  },

  globalIgnores(["**/dist/**", "**/dist-ssr/**", "**/coverage/**"]),

  {
    languageOptions: {
      parser: tsParser, // ✅ Use TypeScript parser
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      "@typescript-eslint": tseslint, // ✅ Enable TS linting
    },
    rules: {
      // Optional custom rules
      "@typescript-eslint/no-unused-vars": ["warn"],
      "@typescript-eslint/no-explicit-any": "off",
    },
  },

  js.configs.recommended,
  ...pluginVue.configs["flat/recommended"], // ✅ recommended over "essential"
]);
