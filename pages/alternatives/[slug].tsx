import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import Layout from "../../components/Layout";
import { SITE_URL } from "../../constants/site";
import alternatives from "../../constants/alternatives.json";

// The date the competitor facts below were checked against their sources.
// Re-verify every row (and update this date) when editing alternatives.json.
const FACTS_CHECKED = "27 November 2026";

type Alternative = (typeof alternatives)[number];

const AUTHORIZER_FIT =
  "Teams that want to own their identity layer: self-hosted, Apache-2.0, users in their own database, with enterprise SSO, fine-grained authorization and AI-agent auth in one server.";

export default function AlternativePage({ alt }: { alt: Alternative }) {
  const path = `/alternatives/${alt.slug}`;
  const title = `${alt.name} alternative: Authorizer vs ${alt.name}`;
  const description = `Authorizer vs ${alt.name}: license, self-hosting, pricing, SAML, SCIM, fine-grained authorization and AI-agent support compared, with sources.`;
  const jsonLd = [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Authorizer", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Alternatives", item: `${SITE_URL}/alternatives` },
        { "@type": "ListItem", position: 3, name: `vs ${alt.name}`, item: `${SITE_URL}${path}` },
      ],
    },
  ];
  return (
    <Layout title={title} description={description} path={path} jsonLd={jsonLd}>
      <article className="container mx-auto max-w-5xl px-4 md:px-0 my-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">Authorizer</Link>
          {" / "}
          <Link href="/alternatives" className="hover:text-blue-600">Alternatives</Link>
          {" / "}
          <span className="text-gray-700">vs {alt.name}</span>
        </nav>
        <h1 className="font-roboto text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          Authorizer vs {alt.name}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">{alt.summary}</p>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">Authorizer compared with {alt.name}</caption>
            <thead>
              <tr className="border-b border-gray-200">
                <th scope="col" className="py-3 pr-4 font-semibold text-gray-900 w-1/5">Factor</th>
                <th scope="col" className="py-3 pr-4 font-semibold text-blue-700 w-2/5">Authorizer</th>
                <th scope="col" className="py-3 font-semibold text-gray-900 w-2/5">{alt.name}</th>
              </tr>
            </thead>
            <tbody>
              {alt.rows.map((r) => (
                <tr key={r.factor} className="border-b border-gray-100 align-top">
                  <th scope="row" className="py-3 pr-4 font-medium text-gray-900">{r.factor}</th>
                  <td className="py-3 pr-4 text-gray-700">{r.authorizer}</td>
                  <td className="py-3 text-gray-700">
                    {r.them}{" "}
                    <a href={r.source} className="text-xs text-blue-600 hover:underline" rel="nofollow noopener noreferrer" target="_blank">
                      source
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-gray-500">
          {alt.name} facts were checked against the linked official sources on {FACTS_CHECKED}. Products change; follow the
          source links for current details. {alt.name} is a trademark of {alt.vendor}; this page is not affiliated with or endorsed by {alt.vendor}.
        </p>

        <section className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-blue-100 bg-blue-50 p-5">
            <h2 className="font-semibold text-gray-900">Choose Authorizer if…</h2>
            <p className="mt-2 text-gray-700">{AUTHORIZER_FIT}</p>
          </div>
          <div className="rounded-lg border border-gray-200 p-5">
            <h2 className="font-semibold text-gray-900">Choose {alt.name} if…</h2>
            <p className="mt-2 text-gray-700">{alt.themFit}</p>
          </div>
        </section>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href="https://docs.authorizer.dev/getting-started" className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
            Get started with Authorizer
          </a>
          <Link href="/alternatives" className="rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600">
            Other comparisons
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: alternatives.map((a) => ({ params: { slug: a.slug } })),
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const alt = alternatives.find((a) => a.slug === params?.slug);
  return alt ? { props: { alt } } : { notFound: true };
};
