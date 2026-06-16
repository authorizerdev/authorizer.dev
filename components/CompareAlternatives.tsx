/**
 * Category-level positioning: Authorizer (self-hosted, open source) vs. the
 * hosted-identity-platform category. Named, brand-by-brand comparisons live on
 * dedicated /alternatives/* pages where that framing is on-intent—the homepage
 * stays competitor-free and belief-driven ("own your identity layer").
 */
const rows = [
  {
    factor: "Deployment",
    authorizer: "Self-hosted on your cloud or VPC; you operate the service",
    others: "Hosted SaaS you don't run; identity lives on vendor infrastructure",
  },
  {
    factor: "Data & residency",
    authorizer: "User directory lives in your database (SQL, NoSQL, graph)",
    others: "Typically vendor-managed user stores and dashboards",
  },
  {
    factor: "Pricing model",
    authorizer: "Open source; pay for infra, not per-seat auth tax",
    others: "Usage/seat/connection-based pricing that scales against you",
  },
  {
    factor: "Enterprise SSO (SAML/OIDC IdPs)",
    authorizer: "Core OAuth2/OIDC server; extend for your SSO needs",
    others: "Mature multi-IdP SSO marketplaces and B2B org patterns",
  },
  {
    factor: "Drop-in UI",
    authorizer: "Built-in login + headless APIs; React SDK available",
    others: "Polished hosted components and universal login pages",
  },
  {
    factor: "Authorization model",
    authorizer:
      "RBAC plus relationship-based, fine-grained authorization (embedded OpenFGA/Zanzibar) in the same binary",
    others: "Often RBAC by default; fine-grained authz as a separate paid add-on",
  },
  {
    factor: "AI / RAG access control",
    authorizer:
      "Permission-aware retrieval: list a user's allow-list and pre-filter the vector search, fully self-hosted",
    others: "Usually out of scope; you wire authorization into AI yourself",
  },
  {
    factor: "APIs & SDKs",
    authorizer:
      "GraphQL, REST, and gRPC with SDKs for Go, Python, JS, and React (Vue, Svelte, Flutter coming soon)",
    others: "Mature REST/OIDC APIs and a broad SDK catalog",
  },
  {
    factor: "Best when",
    authorizer:
      "You need ownership, compliance-friendly data location, or deep backend control",
    others:
      "You want zero ops and fastest time-to-market on hosted identity",
  },
];

export default function CompareAlternatives() {
  return (
    <section
      className="container mx-auto max-w-7xl my-20 px-4 md:px-0"
      aria-labelledby="compare-heading"
    >
      <div className="text-center mb-12">
        <h2
          id="compare-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Authorizer vs hosted identity platforms
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Hosted identity platforms give you dashboards, enterprise SSO
          marketplaces, and batteries-included UI—in exchange for running your
          most sensitive infrastructure on someone else&apos;s servers and paying
          a per-seat auth tax as you grow. Authorizer is a different tradeoff:{" "}
          <span className="font-semibold text-gray-800">
            open source and self-hosted
          </span>{" "}
          so authentication runs where you run your product—and user records stay
          in{" "}
          <span className="font-semibold text-gray-800">your</span> database.
        </p>
      </div>
      <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full text-left text-sm text-gray-700">
          <caption className="sr-only">
            High-level comparison of Authorizer with typical hosted identity
            vendors
          </caption>
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">
                Factor
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-blue-700">
                Authorizer
              </th>
              <th scope="col" className="px-4 py-3 font-semibold text-gray-900">
                Hosted identity platforms
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.factor} className="border-b border-gray-100">
                <th
                  scope="row"
                  className="px-4 py-3 font-medium text-gray-900 align-top w-[22%]"
                >
                  {row.factor}
                </th>
                <td className="px-4 py-3 align-top text-gray-600 w-[39%]">
                  {row.authorizer}
                </td>
                <td className="px-4 py-3 align-top text-gray-600 w-[39%]">
                  {row.others}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-center text-sm text-gray-500">
        A category-level comparison. Check the{" "}
        <a
          href="https://docs.authorizer.dev"
          className="text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          docs
        </a>{" "}
        for feature details against your exact requirements.
      </p>
    </section>
  );
}
