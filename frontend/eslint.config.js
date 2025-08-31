import globals from "globals";
import tseslint from "typescript-eslint";
import json from "@eslint/json";
import markdown from "@eslint/markdown";
import { defineConfig, globalIgnores } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import solid from "eslint-plugin-solid/configs/typescript";
import * as tsParser from "@typescript-eslint/parser";

export default defineConfig([
  globalIgnores([
    ".output",
    ".tanstack",
    ".nitro",
    ".prettierrc.js",
    ".eslintignore",
    ".eslintrc.json",
    ".prettierignore",
    "tsconfig.json",
    "vite.config.ts",
    "styled-system",
    "panda.config.ts",
  ]),
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.json",
      },
    },
  },
  { files: ["**/*.json"], plugins: { json }, language: "json/json" },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc" },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm" },
  eslintConfigPrettier,
]);
