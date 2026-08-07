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
    "https://pypi.org/project/authorizer-py/",
    "https://quay.io/repository/authorizer/authorizer",
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
  license: "https://www.apache.org/licenses/LICENSE-2.0",
  featureList: [
    "OAuth2 and OpenID Connect authentication",
    "Social login, email/password, and magic link",
    "WebAuthn passkeys (FIDO2) for passwordless login and MFA",
    "Multi-factor authentication (MFA) with TOTP, email OTP, and SMS OTP",
    "Enterprise SSO: SAML 2.0 as Service Provider and Identity Provider, plus OIDC federation",
    "SCIM 2.0 user and group provisioning",
    "Organizations, multi-tenancy, and home-realm discovery",
    "Machine-to-machine auth and secretless workload identity (RFC 7523, SPIFFE, Kubernetes TokenReview)",
    "Agent delegation via RFC 8693 token exchange",
    "Role-based access control (RBAC)",
    "Fine-grained authorization with embedded OpenFGA (Zanzibar ReBAC)",
    "Permission-aware AI and RAG access control",
    "Built-in Model Context Protocol (MCP) server for AI agents",
    "GraphQL, REST, and gRPC APIs",
    "SDKs for Go, JavaScript/TypeScript, and React (Python pre-release; Vue and Svelte beta)",
    "13+ SQL, NoSQL, and graph database backends",
    "Prometheus metrics, audit logs, and rate limiting",
    "Self-hosted on Docker, Kubernetes, and cloud PaaS",
  ],
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
