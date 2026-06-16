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
    question: "Does Authorizer support fine-grained authorization (FGA)?",
    answer:
      "Yes. Authorizer ships with an embedded OpenFGA engine—the open-source implementation of Google's Zanzibar relationship-based access control (ReBAC)—in the same Go binary that handles login. You model permissions as relationships between users, teams, and resources, then call check_permissions and list_permissions to enforce them. This goes beyond role-based access control (RBAC) to answer document-, object-, and record-level questions like \"can this user view this file?\" with no extra service to deploy.",
  },
  {
    question: "Can Authorizer secure AI assistants and RAG applications?",
    answer:
      "Yes. Because Authorizer combines authentication with an embedded fine-grained authorization engine, you can build permission-aware RAG: fetch the current user's allow-list with their own token, then pre-filter your vector search so the model only ever retrieves documents that user is allowed to see. Forbidden chunks are never scored or placed in the prompt, the pipeline fails closed if authorization is unavailable, and revoking access takes effect on the user's next question—no re-indexing. Everything runs self-hosted on your own hardware.",
  },
  {
    question: "Does Authorizer have an MCP (Model Context Protocol) server?",
    answer:
      "Yes. Authorizer ships a built-in MCP server that lets AI hosts like Claude Desktop, Claude Code, Cursor, or any MCP-compatible client call a curated, read-only subset of Authorizer's API as tools—profile, check_permissions, and list_permissions. This lets an agent ask \"is this user allowed to see this?\" before it retrieves or summarizes content. The server is stdio-only (it cannot be exposed over the network), credential-issuing and destructive operations are never exposed, and identity is pinned to the bearer token's subject, so a model can never escalate beyond it.",
  },
  {
    question: "What APIs and SDKs does Authorizer provide?",
    answer:
      "Authorizer exposes GraphQL, REST, and gRPC APIs over standard OAuth2 and OpenID Connect flows. Official SDKs are available for Go, Python, JavaScript/TypeScript, and React, with Vue, Svelte, and Flutter coming soon. The fine-grained authorization helpers (check_permissions and list_permissions) ship in the Go, JavaScript, and Python SDKs.",
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
