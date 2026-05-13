/** Canonical site origin for SEO, Open Graph, and JSON-LD (no trailing slash). */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://authorizer.dev").replace(
    /\/$/,
    ""
  );

export const SITE_NAME = "Authorizer";

/** Path under `public/`; used for Open Graph, X/Twitter, LinkedIn, and similar link previews. */
export const OG_IMAGE_PATH = "/images/authorizer-og.png";

/** Absolute URL for social / OG crawlers (must be publicly reachable). */
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

/** Pixel size of `authorizer-og.png` — helps some crawlers (e.g. LinkedIn) pick dimensions. */
export const OG_IMAGE_WIDTH = 1734;
export const OG_IMAGE_HEIGHT = 907;

/** ~155 chars for meta description snippets */
export const META_DESCRIPTION =
  "Self-host open-source auth with OAuth2, OpenID Connect, social login, magic links, RBAC, and MFA while keeping user data in your database.";

export const DEFAULT_DESCRIPTION =
  "Open-source authentication and authorization you can self-host. OAuth2, OpenID Connect, social login, magic links, RBAC, MFA—and your user data stays in your database. Alternative to Clerk, Auth0, and WorkOS when you need ownership and control.";
