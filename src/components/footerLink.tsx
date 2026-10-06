import { type ReactNode } from "react";
import { Link } from "react-router-dom";
export function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <p className="text-sm text-zinc-600 hover:text-zinc-900">
      <Link to={href}>{children}</Link>
    </p>
  );
}