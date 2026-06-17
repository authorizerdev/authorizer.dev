// Fallbacks point at the public Authorizer demo instance so the site (and the
// "Try it now" widget) keeps working even when the deploy env vars are missing.
// authorizer-js@3 throws "Invalid authorizerURL" for an empty/malformed URL, and
// since AuthorizerProvider wraps the whole app that would otherwise 500 every page.
const DEFAULT_AUTHORIZER_URL = "https://demo.authorizer.dev";
const DEFAULT_REDIRECT_URL = "https://authorizer.dev";
const DEFAULT_CLIENT_ID = "96fed66c-9779-4694-a79a-260fc489ce33";

const isValidURL = (value?: string): value is string => {
  if (!value) return false;
  try {
    new URL(value);
    return true;
  } catch {
    return false;
  }
};

export const AUTHORIZER_CONFIG = {
  authorizerURL: isValidURL(process.env.NEXT_PUBLIC_AUTHORIZER_URL)
    ? process.env.NEXT_PUBLIC_AUTHORIZER_URL
    : DEFAULT_AUTHORIZER_URL,
  redirectURL: process.env.NEXT_PUBLIC_REDIRECT_URL || DEFAULT_REDIRECT_URL,
  clientID: process.env.NEXT_PUBLIC_AUTHORIZER_CLIENT_ID || DEFAULT_CLIENT_ID,
};
