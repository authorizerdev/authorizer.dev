import type { LandingContent } from "../components/LandingPage";

// Landing-page copy for the solution pages. Every claim here must match the
// docs (docs.authorizer.dev) or the server's behaviour; link the doc page that
// backs it. Written answer-first so each paragraph can be quoted on its own.

const DOCS = "https://docs.authorizer.dev";

const DOCKER_QUICKSTART = `docker run -p 8080:8080 \\
  -v authorizer_data:/authorizer/data \\
  quay.io/authorizer/authorizer \\
  --database-type=sqlite \\
  --database-url=/authorizer/data/data.db \\
  --url=http://localhost:8080 \\
  --client-id=123456 \\
  --client-secret=secret \\
  --admin-secret=admin \\
  --jwt-type=HS256 \\
  --jwt-secret=test \\
  --encryption-key=test-encryption-key`;

export const AI_AGENTS: LandingContent = {
  path: "/ai-agents",
  title: "Auth for AI agents — delegation, permissions, audit | Authorizer",
  description:
    "Let AI agents act for users with RFC 8693 delegated tokens, agent ∩ user permission checks, time-limited grants and audit logs — self-hosted and open source.",
  eyebrow: "AI agents",
  h1: "Authentication and authorization for AI agents",
  crumb: "AI agents",
  lead: "Authorizer lets an AI agent act on a user's behalf without inheriting the user's full reach. The agent exchanges the user's token for a short-lived delegated token, every permission check requires both the agent and the user to be allowed, and every action is recorded against the agent.",
  ctas: [
    { label: "Read the agent docs", href: `${DOCS}/enterprise/agent-identity` },
    { label: "Token exchange guide", href: `${DOCS}/enterprise/token-exchange` },
  ],
  sections: [
    {
      heading: "How an agent acts for a user",
      body: [
        "An agent is a service account in Authorizer's client registry. It authenticates with its own credentials (a client secret, or a workload identity token such as a Kubernetes or SPIFFE JWT) and exchanges the user's access token for a delegated token using RFC 8693 token exchange.",
        "The delegated token names both identities: `sub` is the user and `act.sub` is the agent. It lives five minutes, has no refresh token, is bound to exactly one resource (RFC 8707), and its scopes are the intersection of the user's scopes, the agent's allowed scopes and what was requested.",
      ],
    },
    {
      heading: "Permissions: the agent and the user must both be allowed",
      body: [
        "When the authorization model declares `type agent`, a check made with a delegated token passes only if the agent and the user each hold the permission. An agent with a broad grant can't reach a document its user can't see, and an agent with no grant can do nothing, whatever the user's access.",
      ],
      bullets: [
        "Time-limited agent grants: a tuple can carry a condition such as `non_expired_grant`, and the server's own clock decides when it expires.",
        "Task-scoped grants: grant a task once, assign agents to it, and delete one tuple to end the task for every agent.",
        "A delegated token can't send condition context or contextual tuples, so an agent can't extend its own window or assert access it wasn't given.",
      ],
    },
    {
      heading: "Revocation and audit",
      body: [
        "Every exchange checks that the user's originating session is still live, so signing the user out stops the agent from minting new tokens. Delegation chains are capped at four hops, and audit logs record the acting agent and the user it acted for.",
      ],
    },
    {
      heading: "Run it locally",
      body: ["Start a server with Docker, then follow the token exchange guide to register an agent."],
      code: DOCKER_QUICKSTART,
    },
  ],
  faq: [
    {
      question: "Can an AI agent get a token that never expires?",
      answer:
        "No. Delegated tokens last five minutes and cannot be refreshed. The agent needs a valid user access token and a live user session to mint a new one, and its permissions can additionally be time-limited with conditional grants.",
    },
    {
      question: "What stops a prompt-injected agent from accessing more data?",
      answer:
        "Each check requires both the agent and the user to hold the permission, the subject is pinned server-side, and delegated tokens can't send contextual tuples or condition context. The agent can only use access it was explicitly granted.",
    },
    {
      question: "Is this a hosted service?",
      answer:
        "No. Authorizer is open source (Apache-2.0) and self-hosted; users, agents and permissions live in your own database.",
    },
  ],
};

export const MCP_AUTH: LandingContent = {
  path: "/mcp-auth",
  title: "MCP authentication and authorization (OAuth 2.1) | Authorizer",
  description:
    "Secure Model Context Protocol servers with OAuth 2.1: protected resource metadata, audience-bound tokens, client ID metadata documents and a built-in MCP server.",
  eyebrow: "Model Context Protocol",
  h1: "Authentication for MCP servers and MCP clients",
  crumb: "MCP auth",
  lead: "Authorizer is an OAuth 2.1 authorization server for the Model Context Protocol. It can protect your own MCP server, and it ships one of its own that lets Claude, Cursor or any MCP host ask who the user is and what they may do.",
  ctas: [
    { label: "MCP server docs", href: `${DOCS}/core/mcp` },
    { label: "with-mcp example", href: "https://github.com/authorizerdev/examples/tree/main/with-mcp" },
  ],
  sections: [
    {
      heading: "Protect your own MCP server",
      body: [
        "Your MCP server publishes RFC 9728 protected resource metadata naming Authorizer as its authorization server, and answers unauthenticated calls with a 401 that points to it. Clients request a token with `resource` set to your server's URL (RFC 8707), so the token's audience is your server and it is useless anywhere else.",
        "Authorizer issues those tokens through authorization code with PKCE for a signed-in user, client credentials for a service account, or RFC 8693 token exchange for an agent acting for a user. Your server verifies them against Authorizer's JWKS.",
      ],
    },
    {
      heading: "Authorizer's built-in MCP server",
      body: [
        "Start the server with `--mcp-enabled` and it serves MCP over streamable HTTP at `<url>/mcp`, with the tools `meta`, `profile`, `check_permissions` and `list_permissions`. Only tokens whose audience is exactly `<url>/mcp` are accepted.",
        "MCP hosts discover everything from the 401: protected resource metadata, then authorization server metadata (RFC 8414 / OIDC discovery). Clients register themselves with Client ID Metadata Documents (`--enable-client-id-metadata-document`) or optional Dynamic Client Registration, behind a consent screen.",
      ],
      code: `claude mcp add --transport http authorizer https://auth.example.com/mcp`,
    },
  ],
  faq: [
    {
      question: "Which OAuth specs does MCP authorization use?",
      answer:
        "OAuth 2.1 with PKCE, RFC 9728 protected resource metadata, RFC 8414 authorization server metadata and RFC 8707 resource indicators; clients register with Client ID Metadata Documents or RFC 7591 dynamic client registration. Authorizer supports all of them.",
    },
    {
      question: "Why is my MCP call rejected with 401?",
      answer:
        "Most often the token's audience is wrong. Request the token with resource set to the MCP server's URL so its aud claim matches; a normal login token, whose audience is the client id, is rejected by design.",
    },
  ],
};

export const FGA: LandingContent = {
  path: "/fine-grained-authorization",
  title: "Fine-grained authorization with embedded OpenFGA | Authorizer",
  description:
    "Relationship-based, fine-grained authorization (OpenFGA, Zanzibar-style) built into your auth server: models, tuples, conditions, check and list APIs, permission-aware RAG.",
  eyebrow: "Fine-grained authorization",
  h1: "Fine-grained authorization, built into your auth server",
  crumb: "Fine-grained authorization",
  lead: "Authorizer embeds OpenFGA, the open-source implementation of Google's Zanzibar model. You describe your domain as types and relations, grant access with relationship tuples, and ask Authorizer whether a user may act on an object — with the same server that signs them in.",
  ctas: [
    { label: "Authorization docs", href: `${DOCS}/core/authorization` },
    { label: "FGA cookbook", href: `${DOCS}/core/fga-guide` },
  ],
  sections: [
    {
      heading: "What you can model",
      bullets: [
        "Document sharing with owners, editors and viewers.",
        "Hierarchies: documents inherit access from folders, projects or organizations.",
        "Groups, roles as objects, public access and block lists.",
        "Conditions such as grants that expire, evaluated against the server's clock.",
      ],
    },
    {
      heading: "Ask the question from any client",
      body: [
        "`check_permissions` answers up to 100 relation/object checks in one call and `list_permissions` lists what a user can access. Both are available over GraphQL, REST and gRPC, in the Go, JavaScript and Python SDKs, and as MCP tools. The subject defaults to the caller's own token, so a user can't ask about someone else.",
      ],
      code: `query {
  check_permissions(params: {
    checks: [{ relation: "can_view", object: "document:q4-plan" }]
  }) { results { object allowed } }
}`,
    },
    {
      heading: "Permission-aware RAG",
      body: [
        "Before an AI assistant retrieves documents, ask Authorizer which documents the user may see and pass that list to the vector search as a filter. Forbidden documents are never retrieved or placed in the prompt, and revoking a tuple takes effect on the next question without re-indexing.",
      ],
    },
  ],
  faq: [
    {
      question: "Do I need to run OpenFGA separately?",
      answer:
        "No. OpenFGA runs inside the Authorizer binary and stores its data in your SQL database by default; you can point it at a separate PostgreSQL, MySQL or SQLite store with --fga-store.",
    },
    {
      question: "How is this different from RBAC?",
      answer:
        "RBAC answers whether a user has a role. Fine-grained authorization answers whether a user may act on one specific object, based on relationships such as ownership, team membership or a parent folder. Authorizer supports both.",
    },
  ],
};
