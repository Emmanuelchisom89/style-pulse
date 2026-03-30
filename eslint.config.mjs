// import { defineConfig, globalIgnores } from "eslint/config";
// import nextVitals from "eslint-config-next/core-web-vitals";
// import nextTs from "eslint-config-next/typescript";

// const eslintConfig = defineConfig([
//   ...nextVitals,
//   ...nextTs,
//   // Override default ignores of eslint-config-next.
//   globalIgnores([
//     // Default ignores of eslint-config-next:
//     ".next/**",
//     "out/**",
//     "build/**",
//     "next-env.d.ts",
//   ]),
//   {
//     ignores: [
//       "src/generated/prisma/**", // ✅ THIS FIXES 90% OF YOUR ERRORS
//       "node_modules",
//       ".next",
//       "out",
//       "build",
//       "dist",
//       "src/generated", // Prisma-generated files
//     ],
//   },

//   {
//     files: ["**/*.ts", "**/*.tsx"],
//     rules: {
//       "@typescript-eslint/no-explicit-any": "off",
//     },
//   },
// ]);

// export default eslintConfig;

import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      "src/generated/prisma/**", // ✅ THIS FIXES 90% OF YOUR ERRORS
      "node_modules",
      ".next",
      "out",
      "build",
      "dist",
      "src/generated", // Prisma-generated files
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
