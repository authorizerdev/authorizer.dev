import {
  SITE_NAME,
  SITE_URL,
  DEFAULT_DESCRIPTION,
  META_DESCRIPTION,
} from "../constants/site";

const organization = {
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  sameAs: [
    "https://github.com/authorizerdev/authorizer",
    "https://discord.gg/Zv2D5h6kkK",
    "https://docs.authorizer.dev",
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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Authorizer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Authorizer is an open-source authentication and authorization server you deploy on your infrastructure. It supports OAuth2 and OpenID Connect, social logins, magic links, email/password, MFA, webhooks, and role-based access control while storing users in a database you control.",
      },
    },
    {
      "@type": "Question",
      name: "How does Authorizer compare to Clerk, Auth0, WorkOS, or Keycloak?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Clerk, Auth0, and WorkOS are primarily hosted identity platforms with strong enterprise and UI component ecosystems. Keycloak is a popular self-hosted IAM. Authorizer is self-hosted and open source with a strong bring-your-database story: you run the service, choose your database backend, and keep user records in your own storage—ideal when data residency, customization, and cost predictability matter.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use Authorizer for production?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Authorizer is designed for production use with secure session handling, deployment templates (Railway, Heroku, Render, Docker, Kubernetes), and documentation for integration via SDKs and standard OAuth2/OIDC flows.",
      },
    },
  ],
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
