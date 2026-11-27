import Link from "next/link";
import Layout from "./Layout";
import { SITE_URL } from "../constants/site";

export interface LandingSection {
  heading: string;
  /** Paragraphs, written answer-first so each can be quoted on its own. */
  body?: string[];
  bullets?: string[];
  /** Optional code sample (shown verbatim). */
  code?: string;
}

export interface LandingFaq {
  question: string;
  answer: string;
}

export interface LandingContent {
  path: string;
  /** <title>, ≤ 60 chars where possible. */
  title: string;
  /** Meta description, ~155 chars. */
  description: string;
  eyebrow: string;
  h1: string;
  lead: string;
  sections: LandingSection[];
  faq: LandingFaq[];
  ctas: { label: string; href: string }[];
  /** Breadcrumb label for this page (defaults to h1). */
  crumb?: string;
  /** Parent crumb, e.g. { name: "Alternatives", path: "/alternatives" }. */
  parent?: { name: string; path: string };
}

/** Renders `backtick` spans as inline code. */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(`[^`]+`)/g).map((part, i) =>
        part.startsWith("`") && part.endsWith("`") ? (
          <code key={i} className="rounded bg-gray-100 px-1 py-0.5 text-[0.9em] text-gray-800">
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        )
      )}
    </>
  );
}

/** Plain text for JSON-LD (backticks removed). */
const plain = (t: string) => t.replace(/`/g, "");

function jsonLdFor(c: LandingContent): Record<string, unknown>[] {
  const crumbs = [{ name: "Authorizer", path: "/" }];
  if (c.parent) crumbs.push(c.parent);
  crumbs.push({ name: c.crumb ?? c.h1, path: c.path });
  const graph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((b, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: b.name,
        item: `${SITE_URL}${b.path}`,
      })),
    },
  ];
  if (c.faq.length) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: c.faq.map((f) => ({
        "@type": "Question",
        name: plain(f.question),
        acceptedAnswer: { "@type": "Answer", text: plain(f.answer) },
      })),
    });
  }
  return graph;
}

export default function LandingPage({ content: c }: { content: LandingContent }) {
  return (
    <Layout title={c.title} description={c.description} path={c.path} jsonLd={jsonLdFor(c)}>
      <article className="container mx-auto max-w-4xl px-4 md:px-0 my-16">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-blue-600">
            Authorizer
          </Link>
          {c.parent && (
            <>
              {" / "}
              <Link href={c.parent.path} className="hover:text-blue-600">
                {c.parent.name}
              </Link>
            </>
          )}
          {" / "}
          <span className="text-gray-700">{c.crumb ?? c.h1}</span>
        </nav>

        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4">
          {c.eyebrow}
        </span>
        <h1 className="font-roboto text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900">
          {c.h1}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          <Rich text={c.lead} />
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {c.ctas.map((cta, i) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                i === 0
                  ? "rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
                  : "rounded-md border border-gray-300 px-5 py-2.5 text-sm font-semibold text-gray-800 hover:border-blue-600 hover:text-blue-600"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>

        {c.sections.map((s) => (
          <section key={s.heading} className="mt-14">
            <h2 className="font-roboto text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">
              {s.heading}
            </h2>
            {s.body?.map((p) => (
              <p key={p} className="mt-4 leading-relaxed text-gray-700">
                <Rich text={p} />
              </p>
            ))}
            {s.bullets && (
              <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
                {s.bullets.map((b) => (
                  <li key={b}>
                    <Rich text={b} />
                  </li>
                ))}
              </ul>
            )}
            {s.code && (
              <pre className="mt-4 overflow-x-auto rounded-lg bg-gray-900 p-4 text-sm leading-relaxed text-gray-100">
                <code>{s.code}</code>
              </pre>
            )}
          </section>
        ))}

        {c.faq.length > 0 && (
          <section className="mt-16" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="font-roboto text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900"
            >
              Frequently asked questions
            </h2>
            <dl className="mt-6 space-y-6">
              {c.faq.map((f) => (
                <div key={f.question}>
                  <dt className="font-semibold text-gray-900">{f.question}</dt>
                  <dd className="mt-2 leading-relaxed text-gray-700">
                    <Rich text={f.answer} />
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}
      </article>
    </Layout>
  );
}
