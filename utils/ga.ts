export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag("config", process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
export const event = ({ action, params }: { action: string; params: Record<string, any> }) => {
  // @ts-ignore
  window.gtag("event", action, params);
};
