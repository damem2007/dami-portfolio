import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
import {
  BarChart3,
  Building2,
  Briefcase,
  CreditCard,
  Database,
  Target,
  Waypoints,
  Workflow,
} from "lucide-react";
export const navItems = [
  { href: "#summary", label: "Summary", mobileLabel: "Sum", icon: Target, type: "section" },
  { href: "#proof", label: "Enterprise Proof", mobileLabel: "Proof", icon: BarChart3, type: "section" },
  { href: "#systems", label: "Systems Thinking", mobileLabel: "Flow", icon: Waypoints, type: "section" },
  { href: "#payments", label: "Payments", mobileLabel: "Pay", icon: CreditCard, type: "section" },
  { href: "#experience", label: "Experience", mobileLabel: "Exp", icon: Briefcase, type: "section" },
  { href: "#featured", label: "Case Studies", mobileLabel: "Cases", icon: Database, type: "section" },
  { href: "#consulting", label: "Consulting", mobileLabel: "More", icon: Building2, type: "section" },
  { href: "#tools", label: "Tools", mobileLabel: "Tools", icon: Workflow, type: "section" },
];