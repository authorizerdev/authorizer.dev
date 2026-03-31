import Link from "next/link";

const links = [
  { href: "https://docs.authorizer.dev", label: "Documentation" },
  { href: "https://github.com/authorizerdev/authorizer", label: "GitHub" },
  { href: "https://blog.authorizer.dev", label: "Blog" },
  { href: "https://discord.gg/Zv2D5h6kkK", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="flex justify-center items-center flex-col p-8 bg-gray-50 flex-wrap gap-4 text-gray-700">
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
