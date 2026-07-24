import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
  ...nextCoreWebVitals,
  {
    ignores: [
      ".agents/**",
      ".next/**",
      ".npm-cache/**",
      "dev-*.log",
      "node_modules/**",
      "out/**"
    ]
  }
];

export default config;
