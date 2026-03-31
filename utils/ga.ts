declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_KEY;

export const pageview = (url: string) => {
  if (typeof window === "undefined" || !GA_ID || !window.gtag) return;
  window.gtag("config", GA_ID, { page_path: url });
};

export const event = ({
  action,
  params,
}: {
  action: string;
  params: Record<string, unknown>;
}) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", action, params);
};
