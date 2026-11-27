import Link from "next/link";
import Layout from "../../components/Layout";
import { SITE_URL } from "../../constants/site";
import alternatives from "../../constants/alternatives.json";

export default function Alternatives() {
  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Authorizer", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Alternatives", item: `${SITE_URL}/alternatives` },
      ],
    },
  ];
  return (
    <Layout
      title="Authorizer alternatives and comparisons"
      description="How open-source, self-hosted Authorizer compares with Auth0, Clerk, Keycloak, SuperTokens, Zitadel and Ory, factor by factor with sources."
      path="/alternatives"
      jsonLd={jsonLd}
    >
      <article className="container mx-auto max-w-4xl px-4 md:px-0 my-16">
        <h1 className="font-roboto text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          Authorizer compared
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          Authorizer is an open-source (Apache-2.0) authentication and authorization server you self-host. These pages
          compare it factor by factor with other identity products, with a source link for every claim about them.
        </p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {alternatives.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/alternatives/${a.slug}`}
                className="block rounded-lg border border-gray-200 p-5 hover:border-blue-600"
              >
                <span className="font-semibold text-gray-900">Authorizer vs {a.name}</span>
                <span className="mt-2 block text-sm text-gray-600">{a.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      </article>
    </Layout>
  );
}
