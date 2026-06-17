/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Don't treat ESM packages as Node ESM externals on the server. This lets
    // webpack bundle @authorizerdev/authorizer-react (and resolve its
    // extensionless `react/jsx-runtime` import to `react/jsx-runtime.js`)
    // instead of Node's ESM loader failing on it under React 17.
    esmExternals: false,
  },
  webpack: (config) => {
    // The ESM build of @authorizerdev/authorizer-react does an extensionless
    // `import "react/jsx-runtime"`, which Node's ESM loader cannot resolve
    // against React 17 (no `exports` map). Force the CommonJS build instead,
    // where `require("react/jsx-runtime")` resolves correctly.
    config.resolve.alias["@authorizerdev/authorizer-react$"] = path.resolve(
      __dirname,
      "node_modules/@authorizerdev/authorizer-react/dist/index.cjs"
    );
    return config;
  },
};

module.exports = nextConfig;
