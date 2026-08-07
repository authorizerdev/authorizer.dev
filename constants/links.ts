/**
 * Outbound references for the standards, RFCs, and open-source projects
 * Authorizer implements or embeds. One place so every mention on the site
 * points at the same primary source (spec text, not a second-hand summary),
 * and so a moved URL is fixed once.
 *
 * Render these with <ExtLink> — it pins target="_blank" and a safe rel.
 */
export const REFS = {
  // Protocols & specs
  oauth2: "https://datatracker.ietf.org/doc/html/rfc6749",
  oidc: "https://openid.net/specs/openid-connect-core-1_0.html",
  oidcDiscovery:
    "https://openid.net/specs/openid-connect-discovery-1_0.html",
  jwt: "https://datatracker.ietf.org/doc/html/rfc7519",
  pkce: "https://datatracker.ietf.org/doc/html/rfc7636",
  clientCredentials:
    "https://datatracker.ietf.org/doc/html/rfc6749#section-4.4",
  tokenExchange: "https://datatracker.ietf.org/doc/html/rfc8693",
  jwtBearer: "https://datatracker.ietf.org/doc/html/rfc7523",
  saml: "https://www.oasis-open.org/standard/saml/",
  scimProtocol: "https://datatracker.ietf.org/doc/html/rfc7644",
  scimSchema: "https://datatracker.ietf.org/doc/html/rfc7643",
  webauthn: "https://www.w3.org/TR/webauthn-2/",
  passkeys: "https://fidoalliance.org/passkeys/",
  totp: "https://datatracker.ietf.org/doc/html/rfc6238",
  mcp: "https://modelcontextprotocol.io",

  // Projects Authorizer embeds or integrates with
  openfga: "https://openfga.dev",
  zanzibar: "https://research.google/pubs/pub48190/",
  spiffe: "https://spiffe.io",
  kubernetesTokenReview:
    "https://kubernetes.io/docs/reference/kubernetes-api/authentication-resources/token-review-v1/",
  prometheus: "https://prometheus.io",
  graphql: "https://graphql.org",
  grpc: "https://grpc.io",
  twilio: "https://www.twilio.com",
  apache2: "https://www.apache.org/licenses/LICENSE-2.0",

  // Runtimes & platforms
  docker: "https://www.docker.com",
  kubernetes: "https://kubernetes.io",
  helm: "https://helm.sh",
  railway:
    "https://railway.com/deploy/authorizer-1?referralCode=FEF4uT&utm_medium=integration&utm_source=template&utm_campaign=generic",
  heroku:
    "https://heroku.com/deploy?template=https://github.com/authorizerdev/authorizer-heroku",
  render: "https://render.com/deploy?repo=https://github.com/authorizerdev/authorizer-render",

  // Authorizer properties
  github: "https://github.com/authorizerdev/authorizer",
  docs: "https://docs.authorizer.dev",
  blog: "https://blog.authorizer.dev",
  discord: "https://discord.gg/Zv2D5h6kkK",
  license: "https://github.com/authorizerdev/authorizer/blob/main/LICENSE",
  changelog:
    "https://github.com/authorizerdev/authorizer/blob/main/CHANGELOG.md",
} as const;

/** Official SDK repositories. `note` marks anything not yet generally available. */
export const SDK_REPOS = {
  go: "https://github.com/authorizerdev/authorizer-go",
  python: "https://github.com/authorizerdev/authorizer-py",
  js: "https://github.com/authorizerdev/authorizer-js",
  react: "https://github.com/authorizerdev/authorizer-react",
  vue: "https://github.com/authorizerdev/authorizer-vue",
  svelte: "https://github.com/authorizerdev/authorizer-svelte",
  flutter: "https://github.com/authorizerdev/authorizer-flutter-sdk",
} as const;

/** Homepages for the database backends shown in the "bring your own database" grid. */
export const DATABASE_SITES = {
  MongoDB: "https://www.mongodb.com/",
  Cassandra: "https://cassandra.apache.org/",
  PostgreSQL: "https://www.postgresql.org/",
  ArangoDB: "https://www.arangodb.com/",
  MySQL: "https://www.mysql.com/",
  SQLite: "https://www.sqlite.org/index.html",
  "SQL Server": "https://www.microsoft.com/en-us/sql-server/",
  YugaByte: "https://www.yugabyte.com/",
  MariaDB: "https://mariadb.org/",
  PlanetScale: "https://planetscale.com/",
  Scylla: "https://www.scylladb.com/",
  "AWS DynamoDB": "https://aws.amazon.com/dynamodb/",
  Couchbase: "https://www.couchbase.com/",
} as const;
