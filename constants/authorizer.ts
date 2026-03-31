function envOr(
  key:
    | 'NEXT_PUBLIC_AUTHORIZER_URL'
    | 'NEXT_PUBLIC_REDIRECT_URL'
    | 'NEXT_PUBLIC_AUTHORIZER_CLIENT_ID',
  fallback: string,
): string {
  const v = process.env[key];
  return typeof v === 'string' && v.trim() !== '' ? v.trim() : fallback;
}

/**
 * Public env vars for the live demo. Fallbacks keep `next build` working when
 * vars are unset (e.g. CI); override in `.env.local` for real demo credentials.
 */
export const AUTHORIZER_CONFIG = {
  authorizerURL: envOr(
    'NEXT_PUBLIC_AUTHORIZER_URL',
    'https://demo.authorizer.dev',
  ),
  redirectURL: envOr('NEXT_PUBLIC_REDIRECT_URL', 'https://authorizer.dev'),
  clientID: envOr(
    'NEXT_PUBLIC_AUTHORIZER_CLIENT_ID',
    '96fed66c-9779-4694-a79a-260fc489ce33',
  ),
};
