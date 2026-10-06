import { type ReactNode } from "react";
import { Link } from "react-router-dom";
export function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
          <Link to={href}  className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950">{children}</Link>
  );
}