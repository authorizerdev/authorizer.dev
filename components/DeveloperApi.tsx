import {
  SiGo,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiPython,
  SiFlutter,
  SiGraphql,
} from "react-icons/si";
import { FaServer, FaExchangeAlt } from "react-icons/fa";

/**
 * Developer-experience section: the three API protocols Authorizer speaks
 * (GraphQL, REST, gRPC) and the official SDKs. Reinforces "standards your stack
 * already understands" with concrete, scannable proof for SEO/AEO.
 */
const protocols = [
  {
    icon: <SiGraphql className="text-pink-500 text-3xl" />,
    label: "GraphQL",
    body: "A GraphQL-first API for auth, user management, RBAC, and fine-grained authorization—typed, introspectable, and one round trip per screen.",
  },
  {
    icon: <FaExchangeAlt className="text-blue-500 text-3xl" />,
    label: "REST",
    body: "Standard OAuth2 and OpenID Connect REST endpoints—authorize, token, userinfo, JWKS—so any client or language integrates with the flows it already knows.",
  },
  {
    icon: <FaServer className="text-emerald-500 text-3xl" />,
    label: "gRPC",
    body: "A high-performance gRPC API for service-to-service auth and low-latency backends—strongly typed contracts from the same protobuf definitions.",
  },
];

const sdks = [
  { icon: <SiGo className="text-sky-500" />, label: "Go" },
  { icon: <SiPython className="text-blue-500" />, label: "Python" },
  { icon: <SiJavascript className="text-yellow-500" />, label: "JavaScript" },
  { icon: <SiTypescript className="text-blue-600" />, label: "TypeScript" },
  { icon: <SiReact className="text-cyan-400" />, label: "React" },
  { icon: <SiVuedotjs className="text-green-500" />, label: "Vue", comingSoon: true },
  { icon: <SiSvelte className="text-orange-500" />, label: "Svelte", comingSoon: true },
  { icon: <SiFlutter className="text-sky-400" />, label: "Flutter", comingSoon: true },
];

export default function DeveloperApi() {
  return (
    <section
      className="bg-slate-50 my-20"
      aria-labelledby="developer-api-heading"
    >
      <div className="container mx-auto max-w-7xl py-16 px-6 md:px-10">
        <div className="text-center mb-12">
          <h2
            id="developer-api-heading"
            className="font-roboto text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
          >
            Three protocols. SDKs for every stack.
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Authorizer speaks{" "}
            <span className="font-semibold text-gray-800">
              GraphQL, REST, and gRPC
            </span>{" "}
            over standard OAuth2 and OpenID Connect—so it drops into the stack you
            already run, from a React frontend to a Go microservice to a Python
            AI agent.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {protocols.map((p) => (
            <div
              key={p.label}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1 hover:border-blue-200"
            >
              <div className="flex items-center mb-4">
                {p.icon}
                <h3 className="ml-3 text-xl font-semibold text-gray-900">
                  {p.label}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <h3 className="text-center text-xl font-semibold text-gray-900">
            Official SDKs &amp; framework libraries
          </h3>
          <p className="mt-2 text-center text-gray-600">
            Drop authentication, sessions, and fine-grained authorization into
            your app in minutes.
          </p>
          <ul className="mt-8 flex flex-wrap justify-center gap-4">
            {sdks.map((s) => (
              <li
                key={s.label}
                className={`flex items-center gap-2 rounded-lg border px-5 py-3 ${
                  s.comingSoon
                    ? "border-dashed border-gray-300 bg-white"
                    : "border-gray-200 bg-gray-50"
                }`}
              >
                <span className={`text-2xl ${s.comingSoon ? "opacity-60" : ""}`}>
                  {s.icon}
                </span>
                <span
                  className={`font-semibold ${
                    s.comingSoon ? "text-gray-500" : "text-gray-700"
                  }`}
                >
                  {s.label}
                </span>
                {s.comingSoon && (
                  <span className="ml-1 text-[10px] font-semibold uppercase tracking-wide text-amber-700 bg-amber-100 rounded-full px-2 py-0.5">
                    Coming soon
                  </span>
                )}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-gray-500">
            Permission helpers (<code className="text-gray-700">check_permissions</code>{" "}
            and <code className="text-gray-700">list_permissions</code>) ship in the
            Go, JavaScript, and Python SDKs.
          </p>
        </div>

        <div className="flex justify-center mt-10">
          <a
            href="https://docs.authorizer.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-4 shadow-sm hover:shadow-md transition-all duration-200"
          >
            Explore the API docs
          </a>
        </div>
      </div>
    </section>
  );
}
