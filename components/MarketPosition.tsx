const pillars = [
  {
    title: "Self-hosted auth for teams that need control",
    body: "If you have data residency requirements, a private network, or you simply prefer to operate critical security infrastructure yourself, Authorizer gives you a full authentication and authorization layer without handing your user directory to a third party.",
  },
  {
    title: "Bring your database (seriously)",
    body: "Authorizer supports a broad set of SQL, NoSQL, and graph databases. That means your users live where your app already lives—simpler compliance stories, fewer data silos, and easier integration with internal tooling.",
  },
  {
    title: "Standards first, UI optional",
    body: "OAuth2 and OpenID Connect make integration predictable across stacks. Use the built-in login, go headless, or embed UI with the React SDK—whatever matches your product and threat model.",
  },
];

const roadmapHighlights = [
  {
    label: "Security hardening",
    text: "Rate limiting and brute-force protections, CAPTCHA/bot protection, and safer operational defaults.",
  },
  {
    label: "Auditability & observability",
    text: "Structured audit logs and Prometheus metrics for production monitoring and compliance workflows.",
  },
  {
    label: "B2B + automation",
    text: "Machine-to-machine auth (client credentials), API keys, fine-grained permissions, and directory sync (SCIM) on the v2 roadmap.",
  },
];

export default function MarketPosition() {
  return (
    <section
      className="container mx-auto max-w-7xl my-20 px-4 md:px-0"
      aria-labelledby="market-position-heading"
    >
      <div className="text-center mb-12">
        <h2
          id="market-position-heading"
          className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Where Authorizer wins
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Authorizer’s strongest position in the market is as a{" "}
          <span className="font-semibold text-gray-800">
            self-hosted alternative to hosted identity platforms
          </span>{" "}
          (and for teams who outgrow “just use hosted auth”). It’s a practical
          choice when ownership, cost predictability, and database flexibility
          matter more than outsourced operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((p) => (
          <div
            key={p.title}
            className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
            <p className="mt-3 text-gray-600 leading-relaxed">{p.body}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50 p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          v2 direction (based on the roadmap)
        </h3>
        <p className="mt-2 text-gray-700">
          The v2 roadmap is focused on the enterprise foundations buyers expect
          from hosted identity platforms—without giving up self-hosting.
        </p>
        <ul className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {roadmapHighlights.map((i) => (
            <li
              key={i.label}
              className="rounded-lg bg-white/70 border border-blue-100 p-4"
            >
              <div className="font-semibold text-blue-800">{i.label}</div>
              <div className="mt-1 text-sm text-gray-700">{i.text}</div>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-gray-600">
          Roadmap items are plans and may change; check the product repository
          for current status.
        </p>
      </div>
    </section>
  );
}

