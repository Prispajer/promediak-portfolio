import storybook from "eslint-plugin-storybook";
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
      "unused-imports": unusedImports,
      storybook,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "react/react-in-jsx-scope": "off",
    },
  },

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
