import { fixupConfigRules } from "@eslint/compat";
import reactRefresh from "eslint-plugin-react-refresh";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import eslint from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier";
import tseslint from "typescript-eslint";
import tailwind from "eslint-plugin-tailwindcss";

const compat = new FlatCompat();

export default [
  {
    ignores: ["**/dist", "eslint.config.js", "src/**/*.gen.ts", "tailwind.config.js", "postcss.config.js"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  eslintConfigPrettier,
  ...fixupConfigRules(
    compat.extends("plugin:react-hooks/recommended", "plugin:react/recommended", "plugin:react/jsx-runtime"),
  ),
  ...tailwind.configs["flat/recommended"],
  {
    files: ["**/*.{ts,tsx}"],

    plugins: {
      "react-refresh": reactRefresh,
    },

    languageOptions: {
      ecmaVersion: "latest",
      globals: globals.browser,
      parser: tsParser,
      sourceType: "module",

      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"],
        tsconfigRootDir: import.meta.dirname,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      "react-refresh/only-export-components": [
        "warn",
        {
          allowConstantExport: true,
        },
      ],

      "react/function-component-definition": [
        "error",
        {
          namedComponents: "function-declaration",
        },
      ],

      "react/hook-use-state": [
        "error",
        {
          allowDestructuredState: true,
        },
      ],

      "react/void-dom-elements-no-children": "error",
      "react/no-this-in-sfc": "error",
      "react/no-namespace": "error",
      "react/button-has-type": "error",
      "react/jsx-pascal-case": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    },
  },
];
