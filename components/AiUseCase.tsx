import { FaRobot, FaUserShield, FaBolt, FaLock, FaPlug } from "react-icons/fa";

/**
 * Flagship use-case section: permission-aware AI / RAG powered by Authorizer's
 * embedded OpenFGA (relationship-based, Zanzibar-style) authorization engine.
 *
 * Written answer-first and self-contained for AEO (featured snippets, People
 * Also Ask) and GEO (citation by AI answer engines). The "two users, one
 * question, two answers" narrative mirrors the live demo and blog post so the
 * homepage, blog, and docs tell one consistent story.
 */
const guarantees = [
  {
    icon: <FaUserShield className="text-blue-500 text-2xl" />,
    title: "Filter before you retrieve",
    body: "Authorizer answers “what may this user see?” with the user’s own token. That allow-list becomes a vector-search filter, so forbidden documents are never scored, never retrieved, never placed in the prompt.",
  },
  {
    icon: <FaLock className="text-blue-500 text-2xl" />,
    title: "Fail closed by default",
    body: "Authorizer unreachable, token missing, or permission list truncated? The pipeline denies instead of leaking. An empty allow-list returns a refusal without ever calling the model.",
  },
  {
    icon: <FaBolt className="text-blue-500 text-2xl" />,
    title: "Revoke in one call",
    body: "Permissions live in relationship tuples, not in your vector index. Off-board a contractor with a single delete—their very next question is denied. No re-embedding, no re-indexing, no re-login.",
  },
  {
    icon: <FaRobot className="text-blue-500 text-2xl" />,
    title: "Prompt-injection safe",
    body: "The agent calls Authorizer with the end user’s JWT and the subject is pinned server-side. A hijacked agent holds no privileged credential—it asks as the user, and gets the user’s answer.",
  },
];

export default function AiUseCase() {
  return (
    <section
      className="container mx-auto max-w-7xl my-20 px-4 md:px-0"
      aria-labelledby="ai-usecase-heading"
    >
      <div className="text-center mb-12">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-600 bg-blue-50 rounded-full px-3 py-1 mb-4">
          Fine-grained authorization · AI / RAG
        </span>
        <h2
          id="ai-usecase-heading"
          className="font-fraunces text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900"
        >
          Authorization your AI can&apos;t talk its way around
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Authorizer ships an embedded{" "}
          <span className="font-semibold text-gray-800">OpenFGA</span> engine—the
          open-source implementation of Google&apos;s Zanzibar relationship-based
          access control. The same server that logs your users in also answers{" "}
          <span className="font-semibold text-gray-800">
            “can this user view this document?”
          </span>{" "}
          in-process, so you can build AI assistants and RAG pipelines that
          respect who is allowed to see what—fully self-hosted, on your own
          hardware.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* The story: two users, one question, two answers */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">
            Same question. Two people. Two answers.
          </h3>
          <p className="mt-2 text-gray-600">
            Vector search has no concept of “need to know”—semantically close
            means retrieved. Authorizer puts the permission boundary{" "}
            <span className="font-semibold text-gray-800">inside</span> the
            retrieval step, so the model can never leak what it was never shown.
          </p>
          <div className="mt-5 rounded-xl bg-gray-900 text-gray-100 p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
            <div className="text-emerald-300">
              👤 alice@acme (engineering)
            </div>
            <div className="text-gray-400">
              ❓ What was our Q4 revenue and cash runway?
            </div>
            <div className="text-gray-100">
              💬 I don&apos;t have that information in the knowledge base.
            </div>
            <div className="mt-4 text-emerald-300">
              👤 carol@acme (finance)
            </div>
            <div className="text-gray-400">
              ❓ What was our Q4 revenue and cash runway?
            </div>
            <div className="text-gray-100">
              💬 Q4 revenue was $14.2M with a 26-month runway at current burn.
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Alice isn&apos;t shown an “access denied.” The finance report simply
            never existed in her search results—it was never a candidate, never
            in the prompt.
          </p>
        </div>

        {/* How it works: two API calls */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900">
            Permissions are relationships, not roles
          </h3>
          <p className="mt-2 text-gray-600">
            Grant access by writing facts, not code. Ask Authorizer for the
            user&apos;s allow-list, then hand it to your vector store as a filter.
          </p>
          <div className="mt-5 rounded-xl bg-gray-900 text-gray-100 p-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
            <div className="text-sky-300">{`// 1. Ask as the user — subject pinned from their JWT`}</div>
            <div>
              <span className="text-pink-300">list_permissions</span>(relation:{" "}
              <span className="text-amber-300">&quot;can_view&quot;</span>,
            </div>
            <div className="pl-4">
              object_type:{" "}
              <span className="text-amber-300">&quot;document&quot;</span>)
            </div>
            <div className="text-gray-400">
              {`// alice → ["onboarding_guide", "tech_stack"]`}
            </div>
            <div className="mt-4 text-sky-300">{`// 2. Pre-filter the vector search — forbidden chunks`}</div>
            <div className="text-sky-300">{`//    are never scored`}</div>
            <div>
              <span className="text-pink-300">match</span>(source ∈ allowed)
            </div>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Same <code className="text-gray-700">check_permissions</code> /{" "}
            <code className="text-gray-700">list_permissions</code> helpers ship
            in the Go, JavaScript, and Python SDKs.
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {guarantees.map((g) => (
          <div
            key={g.title}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-center mb-3">
              {g.icon}
              <h3 className="ml-3 text-base font-semibold text-gray-900">
                {g.title}
              </h3>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{g.body}</p>
          </div>
        ))}
      </div>

      {/* Built-in MCP server highlight */}
      <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-pink-50 p-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm">
                <FaPlug className="text-blue-600 text-xl" />
              </span>
              <h3 className="text-xl font-semibold text-gray-900">
                Built-in MCP server
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed max-w-2xl">
              Authorizer ships a built-in{" "}
              <span className="font-semibold text-gray-900">
                Model Context Protocol (MCP)
              </span>{" "}
              server, so an AI assistant can ask{" "}
              <span className="font-semibold text-gray-900">
                “is this user allowed to see this?”
              </span>{" "}
              as a tool—before it retrieves or summarizes anything. It exposes a
              curated, <span className="font-semibold text-gray-900">read-only</span>{" "}
              subset (<code className="text-gray-800">profile</code>,{" "}
              <code className="text-gray-800">check_permissions</code>,{" "}
              <code className="text-gray-800">list_permissions</code>)—no token
              minting, no account mutation. It&apos;s stdio-only and can&apos;t be
              exposed over the network, and the model never escalates beyond the
              bearer token&apos;s subject.
            </p>
          </div>
          <div className="lg:w-64 shrink-0">
            <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-2">
                Works with
              </div>
              <ul className="space-y-1.5 text-sm font-medium text-gray-700">
                <li>Claude Desktop</li>
                <li>Claude Code</li>
                <li>Cursor</li>
                <li>Any MCP-compatible host</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://blog.authorizer.dev/permission-aware-rag-authorizer-openfga-qdrant"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-white bg-blue-500 hover:bg-blue-400 font-medium rounded-lg text-lg px-8 py-4 mr-2 mb-2 shadow-sm hover:shadow-md transition-all duration-200"
        >
          Read the permission-aware RAG walkthrough
        </a>
        <a
          href="https://docs.authorizer.dev/core/fga-guide"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-500 font-medium text-lg px-6 py-4 underline-offset-2 hover:underline"
        >
          See the FGA guide →
        </a>
        <a
          href="https://docs.authorizer.dev/core/mcp"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-blue-600 hover:text-blue-500 font-medium text-lg px-6 py-4 underline-offset-2 hover:underline"
        >
          MCP server docs →
        </a>
      </div>
    </section>
  );
}
