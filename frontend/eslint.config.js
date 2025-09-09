import json from '@eslint/json';
import markdown from '@eslint/markdown';
import * as tsParser from '@typescript-eslint/parser';
import { defineConfig, globalIgnores } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import solid from 'eslint-plugin-solid/configs/typescript';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    '.output',
    '.tanstack',
    '.nitro',
    '.prettierrc.js',
    '.eslintignore',
    '.eslintrc.json',
    '.prettierignore',
    'tsconfig.json',
    'vite.config.ts',
    'styled-system',
    'panda.config.ts',
  ]),
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...solid,
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
  { files: ['**/*.json'], plugins: { json }, language: 'json/json' },
  { files: ['**/*.jsonc'], plugins: { json }, language: 'json/jsonc' },
  { files: ['**/*.md'], plugins: { markdown }, language: 'markdown/gfm' },
  eslintConfigPrettier,
]);
