import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // Machine-unbundled modules from the original site and   reverse-engineering material.
  { ignores: ["components/m/**", "re/**"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // The original site uses plain <a> elements for all navigation; kept for DOM parity.
  { rules: { "@next/next/no-html-link-for-pages": "off" } },
];

export default eslintConfig;
