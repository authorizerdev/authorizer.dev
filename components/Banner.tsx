import { useState } from "react";
import { IoClose } from "react-icons/io5";

// Lightweight, dismissible announcement bar. Placeholder for now —
// swap the message/link below as updates change.
export default function Banner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="relative bg-blue-600 text-white text-sm">
      <div className="container mx-auto max-w-7xl flex items-center justify-center px-10 py-2 text-center">
        <p>
          📣 Want major Authorizer updates? Follow along on{" "}
          <a
            href="https://github.com/authorizerdev/authorizer"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2 hover:text-blue-100"
          >
            GitHub
          </a>
          .
        </p>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-200"
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
}
