import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  META_DESCRIPTION,
} from "../constants/site";
import { FAQ_ITEMS } from "../constants/faq";

const organization = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  founder: { "@type": "Person", name: "Lakhan Samani" },
  sameAs: [
    "https://github.com/authorizerdev/authorizer",
    "https://discord.gg/Zv2D5h6kkK",
    "https://docs.authorizer.dev",
    "https://blog.authorizer.dev",
    "https://www.npmjs.com/package/@authorizerdev/authorizer-js",
    "https://www.producthunt.com/posts/authorizer",
  ],
  description: META_DESCRIPTION,
};

const website = {
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: META_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
};

const software = {
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  applicationCategory: "SecurityApplication",
  operatingSystem: "Linux, Docker, Kubernetes, cloud PaaS",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Open source (self-hosted); infrastructure costs may apply",
  },
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
};

const faq = {
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SeoJsonLd() {
  const graphs = [organization, website, software, faq];
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graphs }),
      }}
    />
  );
}
