import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { FooterLink } from "./components/footerLink";
import {
  ArrowRight,
  BarChart3,
  Briefcase,
  Download,
  Linkedin,
  Mail,
  Moon,
  ShieldCheck,
  Sun,
  Target,
} from "lucide-react";
//import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contact = {
  email: "dahunsi.damilola@outlook.com",
  phone: "236-660-6272",
  linkedin: "https://www.linkedin.com/in/damidahunsi",
};
const updatedDate = new Date("2024-10-06T12:00:00");

const formatDate = updatedDate.toLocaleDateString(undefined, {
  year: "numeric",
  month: "long",
  day: "numeric",
});


const resumeHref =
  "/files/Damilola_Dahunsi_Technical_Business_Analyst_Resume.pdf";
//const portraitSrc = "/images/damilola-dahunsi-portrait-cropped.png";

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

const revealTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

//const liftCardClass = "transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg";
//const sectionIntroClass = "max-w-2xl rounded-lg border border-zinc-200 bg-zinc-50 p-4 text-sm leading-6 text-zinc-700 shadow-sm";

const navItems = [
  {
    href: "/",
    label: "Portfolio",
    mobileLabel: "Portfolio",
    icon: Briefcase,
    type: "link",
  },
];

type PortfolioTheme = "day" | "night";

function SectionReveal({
  id,
  className,
  children,
}: {
  id?: string;
  className: string;
  children: ReactNode;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      id={id}
      className={`scroll-mt-24 ${className}`}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.02 }}
      transition={revealTransition}
    >
      {children}
    </motion.section>
  );
}

export default function Privacy() {
  const [isRailVisible, setIsRailVisible] = useState(false);
  const [activeNav, setActiveNav] = useState(navItems[0].href);
  const [theme, setTheme] = useState<PortfolioTheme>(() => {
    if (typeof window === "undefined") return "night";
    return window.localStorage.getItem("portfolio-theme") === "day"
      ? "day"
      : "night";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "night");
    document.documentElement.style.colorScheme =
      theme === "night" ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateNavigationState = () => {
      setIsRailVisible(window.scrollY > 260);

      const activeItem = navItems.filter((item) => item.type === "section")
      .map((item) => {
          const section = document.querySelector(item.href);
          if (!section) return null;
          return {
            href: item.href,
            top: section.getBoundingClientRect().top,
          };
        })
        .filter((item): item is { href: string; top: number } => Boolean(item))
        .filter((item) => item.top <= window.innerHeight * 0.38)
        .at(-1);

      if (activeItem) {
        setActiveNav(activeItem.href);
      }
    };

    updateNavigationState();
    window.addEventListener("scroll", updateNavigationState, { passive: true });
    window.addEventListener("resize", updateNavigationState);

    return () => {
      window.removeEventListener("scroll", updateNavigationState);
      window.removeEventListener("resize", updateNavigationState);
    };
  }, []);

  return (
    <main
      className={`portfolio-shell ${theme === "night" ? "portfolio-night" : "portfolio-day"} min-h-screen w-screen bg-zinc-50 pb-20 text-zinc-950 lg:pb-0`}
    >
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:pr-24">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-sm font-semibold">Dami Dahunsi </span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:block" />
            <span className="text-sm text-zinc-600">
              Payments, Commerce & Banking Systems
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              asChild
              variant="outline"
              className="h-9 rounded-lg border-zinc-300 bg-white px-3"
            >
              <a href={resumeHref} download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-9 rounded-lg border-zinc-300 bg-white px-3"
            >
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-9 rounded-lg border-zinc-300 bg-white px-3"
            >
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </section>

      <button
        type="button"
        aria-label={`Switch to ${theme === "night" ? "day" : "night"} theme`}
        title={`Switch to ${theme === "night" ? "day" : "night"} theme`}
        onClick={() => setTheme(theme === "night" ? "day" : "night")}
        className="theme-float"
      >
        {theme === "night" ? (
          <Moon className="h-5 w-5" />
        ) : (
          <Sun className="h-5 w-5" />
        )}
      </button>

      <nav
        aria-label="Portfolio sections"
        className={`fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-white/80 bg-[linear-gradient(145deg,#ffffff_0%,#f4f4f5_58%,#ecfeff_100%)] p-2 shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-zinc-900/5 backdrop-blur-xl transition duration-300 lg:flex ${
          isRailVisible
            ? "translate-x-0 opacity-100"
            : "translate-x-3 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeNav === item.href;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              className="group relative flex h-7 w-7 items-center justify-center"
            >
              <span className="pointer-events-none absolute right-8 rounded-full border border-white/80 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_60%,#ecfeff_100%)] px-3 py-1.5 text-xs font-medium text-zinc-600 opacity-0 shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-zinc-900/5 backdrop-blur-md transition duration-200 group-hover:-translate-x-1 group-hover:opacity-100">
                {item.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-200 ${
                  isActive
                    ? "h-6 w-1.5 bg-zinc-900"
                    : "h-2 w-2 bg-zinc-300 group-hover:h-3 group-hover:w-3 group-hover:bg-zinc-500"
                }`}
              />
            </a>
          );
        })}
      </nav>

      <nav
        aria-label="Portfolio sections mobile"
        className={`fixed bottom-3 left-2 right-2 z-30 grid grid-cols-4 gap-1 rounded-2xl border border-white/80 bg-[linear-gradient(145deg,#ffffff_0%,#f4f4f5_58%,#ecfeff_100%)] p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-zinc-900/5 backdrop-blur-xl transition duration-300 sm:left-4 sm:right-4 sm:grid-cols-8 lg:hidden ${
          isRailVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeNav === item.href;
          const Icon = item.icon;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
              className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl border px-1 py-2 text-[0.64rem] font-semibold leading-none transition ${
                isActive
                  ? "border-teal-200 bg-white !text-zinc-950 shadow-sm ring-1 ring-teal-900/5"
                  : "border-transparent !text-zinc-500 hover:border-white/80 hover:bg-white/70 hover:!text-zinc-950"
              }`}
            >
              <Icon
                className={`h-4 w-4 ${isActive ? "text-teal-700" : "text-zinc-400"}`}
              />
              <span className="max-w-full truncate">{item.mobileLabel}</span>
            </a>
          );
        })}
      </nav>

      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f4f4f5_48%,#ecfeff_100%)]">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          {/* Privacy heading */}
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-medium text-teal-900">
              <ShieldCheck className="h-4 w-4" />
              Privacy & Data Protection
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-3 text-sm font-medium text-zinc-500">
              Last updated: {formatDate}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
              This Privacy Policy explains how information is collected, used,
              and protected when you visit damidahunsi.com or contact me through
              this website.
            </p>
          </motion.div>

          {/* Privacy content */}
          <div className="mt-10 grid gap-5">
            {/* Information collected */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">
                Information I Collect
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-zinc-700">
                <p>
                  This website may collect information that you voluntarily
                  provide when using a contact form or otherwise communicating
                  with me, including:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Your name</li>
                  <li>Your email address</li>
                  <li>The content of your message</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <p>
                  Basic technical information may also be collected
                  automatically by the website or hosting provider, such as
                  browser type, device information, IP address, and website
                  usage information for security, reliability, and analytics
                  purposes.
                </p>
              </div>
            </div>

            {/* Use of information */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">
                How Your Information Is Used
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-zinc-700">
                <p>
                  Information submitted through this website is used only for
                  legitimate purposes related to operating this portfolio
                  website, including:
                </p>

                <ul className="list-disc space-y-2 pl-6">
                  <li>Responding to messages or inquiries</li>
                  <li>
                    Communicating regarding professional opportunities,
                    projects, or services
                  </li>
                  <li>Sending requested email communications</li>
                  <li>
                    Maintaining the security and functionality of the website
                  </li>
                </ul>

                <p className="font-medium text-zinc-950">
                  I do not sell or rent your personal information.
                </p>
              </div>
            </div>

            {/* Mailjet */}
            <div className="rounded-lg border border-teal-200 bg-teal-50 p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase text-teal-800">
                <Mail className="h-4 w-4" />
                Email Services
              </div>

              <div className="mt-4 space-y-4 text-base leading-7 text-zinc-700">
                <p>
                  This website may use{" "}
                  <span className="font-semibold text-zinc-950">Mailjet</span>{" "}
                  to send transactional or contact-related emails.
                </p>

                <p>
                  When email functionality is used, information such as your
                  name, email address, and relevant message information may be
                  processed by Mailjet for the purpose of delivering the
                  communication.
                </p>

                <p>
                  Mailjet processes information according to its own privacy and
                  data-protection policies.
                </p>

                <a
                  href="https://www.mailjet.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-teal-700 hover:text-teal-900"
                >
                  View Mailjet Privacy Policy
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            {/* Third party */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">
                Third-Party Services
              </h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-zinc-700">
                <p>
                  The website may rely on third-party hosting, email, analytics,
                  or infrastructure providers where necessary to operate the
                  site.
                </p>

                <p>
                  These providers may process limited information on my behalf
                  solely for the purposes for which their services are used.
                </p>
              </div>
            </div>

            {/* Retention */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">
                Data Retention
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-700">
                Personal information is retained only for as long as reasonably
                necessary to respond to an inquiry, maintain relevant
                correspondence, meet legitimate business or security
                requirements, or comply with applicable legal obligations.
              </p>
            </div>

            {/* Cookies */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">Cookies</h2>

              <p className="mt-4 text-base leading-7 text-zinc-700">
                This website may use essential cookies or similar technologies
                required for website functionality. If analytics or other
                non-essential tracking technologies are introduced, this policy
                may be updated accordingly.
              </p>
            </div>

            {/* Security */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">
                Data Security
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-700">
                Reasonable technical and organizational measures are used to
                protect information submitted through this website. However, no
                method of internet transmission or electronic storage can be
                guaranteed to be completely secure.
              </p>
            </div>

            {/* Choices */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">
                Your Choices
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-700">
                You may request access to, correction of, or deletion of
                personal information that you have provided through this
                website, subject to any applicable legal or legitimate retention
                requirements.
              </p>
            </div>

            {/* Policy changes */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">
                Changes to This Policy
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-700">
                This Privacy Policy may be updated periodically to reflect
                changes to the website, its services, or applicable
                requirements. The latest version will be published on this page
                with an updated revision date.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-2xl font-semibold text-zinc-950">Contact</h2>

              <div className="mt-4 space-y-4 text-base leading-7 text-zinc-700">
                <p>
                  If you have questions about this Privacy Policy or how
                  information submitted through this website is handled, please
                  contact me by email.
                </p>

                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-2 font-medium text-teal-700 hover:text-teal-900"
                >
                  <Mail className="h-4 w-4" />
                  {contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionReveal className="border-t border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold">
              Available for payments, product, business systems, and
              transformation roles.
            </h2>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-300">
              Strongest fit: Business Systems Analyst, Product Owner, Payments /
              Fintech Analyst, Implementation Consultant, and retail commerce
              transformation roles across Canada or remote-first teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button
              asChild
              className="footer-cta-primary h-10 rounded-lg bg-white px-4 text-zinc-950 hover:bg-zinc-100"
            >
              <a href={resumeHref} download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </a>
            </Button>
            <Button
              asChild
              className="footer-cta-primary h-10 rounded-lg bg-white px-4 text-zinc-950 hover:bg-zinc-100"
            >
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="footer-cta-secondary h-10 rounded-lg border-white/30 bg-transparent px-4 text-white hover:bg-white/10"
            >
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
          <div className="col-span-full justify-self-end">
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
