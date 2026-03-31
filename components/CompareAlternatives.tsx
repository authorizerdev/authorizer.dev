/**
 * Competitive context for positioning (informational; trademarks belong to respective owners).
 * Links: WorkOS https://workos.com — Clerk https://clerk.com — Auth0 https://auth0.com
 */
const rows = [
  {
    factor: "Deployment",
    authorizer: "Self-hosted on your cloud or VPC; you operate the service",
    others:
      "Hosted SaaS (Clerk, Auth0); WorkOS is API-first hosted with enterprise features",
  },
  {
    factor: "Data & residency",
    authorizer: "User directory lives in your database (SQL, NoSQL, graph)",
    others: "Typically vendor-managed user stores and dashboards",
  },
  {
    factor: "Pricing model",
    authorizer: "Open source; pay for infra, not per-seat auth tax",
    others: "Usage/seat/connection-based SaaS pricing at scale",
  },
  {
    factor: "Enterprise SSO (SAML/OIDC IdPs)",
    authorizer: "Core OAuth2/OIDC server; extend for your SSO needs",
    others:
      "WorkOS & Auth0 excel at multi-IdP SSO; Clerk adds org/B2B patterns",
  },
  {
    factor: "Drop-in UI",
    authorizer: "Built-in login + headless APIs; React SDK available",
    others:
      "Clerk is known for polished components; Auth0 Universal Login; WorkOS AuthKit",
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
          Teams evaluating{" "}
          <a
            href="https://clerk.com/"
            className="text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Clerk
          </a>
          ,{" "}
          <a
            href="https://auth0.com/"
            className="text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            Auth0
          </a>
          , or{" "}
          <a
            href="https://workos.com/"
            className="text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            WorkOS
          </a>{" "}
          (and teams considering self-hosted IAM like Keycloak) often want hosted
          dashboards, enterprise SSO marketplaces, and batteries-included UI.
          Authorizer is a different tradeoff:{" "}
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
                Typical SaaS (Clerk / Auth0 / WorkOS)
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
        Product names are trademarks of their respective owners. Compare features
        in docs for your exact requirements.
      </p>
    </section>
  );
}
