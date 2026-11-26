import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import hooks from "eslint-plugin-react-hooks";
import refresh from "eslint-plugin-react-refresh";
import globals from "globals";
import ts from "typescript-eslint";

export default defineConfig(
  { ignores: ["dist/**", "playwright-report/**", "test-results/**"] },
  js.configs.recommended,
  { files: ["**/*.{js,mjs}"], languageOptions: { globals: globals.node } },
  { files: ["tests/**"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{ts,tsx}"], extends: [ts.configs.recommended] },
  {
    files: ["src/**/*.{ts,tsx}"],
    extends: [hooks.configs.flat.recommended, refresh.configs.vite],
    languageOptions: { globals: globals.browser },
  },
);
