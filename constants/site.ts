/** Canonical site origin for SEO, Open Graph, and JSON-LD (no trailing slash). */
export const SITE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "https://authorizer.dev").replace(
    /\/$/,
    ""
  );

export const SITE_NAME = "Authorizer";

/**
 * Primary Open Graph image (`og:image`). Used by Facebook, LinkedIn, Slack,
 * Discord, WhatsApp, Telegram, iMessage, Pinterest, and other consumers of
 * Open Graph tags. Pixel size must match the file under `public/`.
 */
export const OG_IMAGE_PATH = "/images/authorizer-og.png";

/** Absolute URL for `og:image` (HTTPS, no redirects). */
export const OG_IMAGE_URL = `${SITE_URL}${OG_IMAGE_PATH}`;

/** Pixel size of `authorizer-og.png` — must match the asset or previews break. */
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 800;

export const OG_IMAGE_TYPE = "image/png" as const;

/**
 * X (Twitter) `summary_large_image` expects a 2:1 image (see X Cards docs).
 * Separate asset avoids wrong crops and crawler issues when `og:image` is not 2:1.
 */
export const TWITTER_CARD_IMAGE_PATH = "/images/authorizer-og-x.png";

export const TWITTER_CARD_IMAGE_URL = `${SITE_URL}${TWITTER_CARD_IMAGE_PATH}`;

export const TWITTER_CARD_IMAGE_WIDTH = 1200;
export const TWITTER_CARD_IMAGE_HEIGHT = 600;

/** ~155 chars for meta description snippets */
export const META_DESCRIPTION =
  "Own your identity layer. Self-host open-source auth & fine-grained authorization—OAuth2, OIDC, RBAC, MFA, OpenFGA—with permission-aware AI on your data.";

export const DEFAULT_DESCRIPTION =
  "Own your identity layer with open-source authentication and authorization you self-host. OAuth2, OpenID Connect, social login, magic links, RBAC, MFA, and fine-grained authorization (OpenFGA) for permission-aware AI and RAG. GraphQL, REST, and gRPC APIs with Go, Python, and JS SDKs—your users stay in your own database, not someone else's dashboard. No per-seat auth tax.";
