/**
 * Single source of truth for FAQ content. Consumed by both the visible FAQ
 * section (components/Faq.tsx) and the FAQPage JSON-LD (components/SeoJsonLd.tsx)
 * so the rendered answers and the structured data never drift—Google expects
 * schema FAQ text to match what's on the page.
 *
 * Answers are written answer-first and self-contained for AEO (featured snippets,
 * People Also Ask) and GEO (citation by AI answer engines). Competitor-free by
 * design—named comparisons live on dedicated /alternatives/* pages.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Authorizer?",
    answer:
      "Authorizer is an open-source authentication and authorization server you deploy on your own infrastructure. It supports OAuth2 and OpenID Connect, social logins, magic links, email/password, multi-factor authentication, webhooks, and role-based access control—while storing users in a database you control.",
  },
  {
    question: "How is Authorizer different from hosted authentication platforms?",
    answer:
      "Hosted authentication platforms run identity on their servers and bill per seat or connection as you scale. Authorizer is self-hosted and open source: you run the service, choose your own database backend, and keep every user record in your own storage. It's the better fit when data residency, customization, cost predictability, and ownership matter more than outsourced operations.",
  },
  {
    question: "Which databases does Authorizer support?",
    answer:
      "Authorizer supports 13+ databases across SQL, NoSQL, and graph, including PostgreSQL, MySQL, MariaDB, SQLite, SQL Server, MongoDB, Cassandra, ScyllaDB, ArangoDB, YugabyteDB, PlanetScale, AWS DynamoDB, and Couchbase. Your users live in the database your application already uses.",
  },
  {
    question: "Can I use Authorizer in production?",
    answer:
      "Yes. Authorizer is built for production with secure session handling over HTTP-only cookies, one-click deployment templates for Railway, Heroku, and Render, plus Docker and Kubernetes support, and SDKs for integration via standard OAuth2 and OpenID Connect flows.",
  },
  {
    question: "Is Authorizer free?",
    answer:
      "Authorizer is free and open source. There is no per-seat or per-user auth tax—you only pay for the infrastructure you run it on. You can self-host it on your own cloud, VPC, or a one-click platform deployment.",
  },
];
