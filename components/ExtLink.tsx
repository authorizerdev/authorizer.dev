import type { ReactNode } from "react";

/**
 * Anchor for anything off authorizer.dev — specs, RFCs, SDK repos, vendor
 * sites. Always opens in a new tab so a reader following a reference doesn't
 * lose the page, and always carries `rel="noopener noreferrer"`.
 */
export default function ExtLink({
  href,
  children,
  className = "text-blue-600 hover:text-blue-500 underline-offset-2 hover:underline",
  title,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      title={title}
    >
      {children}
    </a>
  );
}
