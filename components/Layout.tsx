import Head from "next/head";
import Nav from "./Nav";
import Footer from "./Footer";
import SeoJsonLd from "./SeoJsonLd";
import {
  SITE_NAME,
  SITE_URL,
  META_DESCRIPTION,
  OG_IMAGE_URL,
  OG_IMAGE_WIDTH,
  OG_IMAGE_HEIGHT,
  OG_IMAGE_TYPE,
  TWITTER_CARD_IMAGE_URL,
} from "../constants/site";

const PAGE_TITLE = `${SITE_NAME} | Self-hosted auth for OAuth2 & OpenID Connect`;

const KEYWORDS = [
  "open source authentication",
  "self-hosted auth",
  "OAuth2 server",
  "OpenID Connect",
  "identity server",
  "JWT",
  "social login",
  "magic link authentication",
  "RBAC",
  "MFA",
  "data sovereignty",
  "own your user data",
  "authorizer",
  "docker auth",
  "kubernetes authentication",
  "postgres authentication",
].join(", ");

export default function Layout({ children }) {
  const canonicalUrl = `${SITE_URL}/`;

  return (
    <>
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="keywords" content={KEYWORDS} />
        <meta name="author" content={SITE_NAME} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:secure_url" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content={String(OG_IMAGE_WIDTH)} />
        <meta property="og:image:height" content={String(OG_IMAGE_HEIGHT)} />
        <meta property="og:image:type" content={OG_IMAGE_TYPE} />
        <meta
          property="og:image:alt"
          content={`${SITE_NAME} — open-source authentication and authorization`}
        />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={TWITTER_CARD_IMAGE_URL} />
        <meta
          name="twitter:image:alt"
          content={`${SITE_NAME} — open-source authentication and authorization`}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/favicon_io/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon_io/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon_io/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/images/favicon_io/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/images/favicon_io/android-chrome-512x512.png"
        />
      </Head>
      <SeoJsonLd />
      <iframe
        src="https://ghbtns.com/github-btn.html?user=authorizerdev&repo=authorizer&type=star&count=true&size=large"
        frameBorder="0"
        scrolling="0"
        width="170"
        height="30"
        title="Star Authorizer on GitHub"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "0",
          zIndex: 100,
        }}
      />
      <div className="min-h-screen">
        <Nav />
        <main className="pt-10">{children}</main>
        <Footer />
      </div>
    </>
  );
}
