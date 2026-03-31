/** Canonical site origin for SEO, Open Graph, and JSON-LD (no trailing slash). */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://authorizer.dev").replace(
    /\/$/,
    ""
  );

export const SITE_NAME = "Authorizer";

/** ~155 chars for meta description snippets */
export const META_DESCRIPTION =
  "Self-host open-source authentication: OAuth2, OpenID Connect, social login, magic links, RBAC & MFA. Your users stay in your database—an alternative to Clerk, Auth0, WorkOS, and Keycloak.";

export const DEFAULT_DESCRIPTION =
  "Open-source authentication and authorization you can self-host. OAuth2, OpenID Connect, social login, magic links, RBAC, MFA—and your user data stays in your database. Alternative to Clerk, Auth0, and WorkOS when you need ownership and control.";
