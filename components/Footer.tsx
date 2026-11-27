import Link from "next/link";
import { REFS } from "../constants/links";

const links = [
  { href: REFS.docs, label: "Documentation" },
  { href: REFS.github, label: "GitHub" },
  { href: REFS.blog, label: "Blog" },
  { href: REFS.discord, label: "Discord" },
  { href: REFS.changelog, label: "Changelog" },
  { href: REFS.license, label: "Apache-2.0 License" },
];

// Internal solution pages (same tab; crawlable internal links).
const solutions = [
  { href: "/ai-agents", label: "AI agents" },
  { href: "/mcp-auth", label: "MCP auth" },
  { href: "/fine-grained-authorization", label: "Fine-grained authorization" },
  { href: "/alternatives", label: "Alternatives" },
];

export default function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col p-8 bg-gray-50 flex-wrap gap-4 text-gray-700">
      <nav aria-label="Solutions" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
        {solutions.map(({ href, label }) => (
          <Link key={href} href={href} className="hover:text-blue-600">
            {label}
          </Link>
        ))}
      </nav>
      <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {label}
          </Link>
        ))}
      </nav>
      <p className="text-sm font-semibold text-gray-600">
        © {new Date().getFullYear()} authorizer.dev
      </p>
    </footer>
  );
}
