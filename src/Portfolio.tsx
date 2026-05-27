import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Briefcase,
  CheckCircle2,
  CreditCard,
  Database,
  FileCheck2,
  Globe,
  Landmark,
  Layers,
  Linkedin,
  Mail,
  Map,
  MapPin,
  Network,
  Moon,
  Plane,
  Phone,
  ShieldCheck,
  Sun,
  Target,
  Workflow,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const contact = {
  email: "dahunsi.damilola@outlook.com",
  phone: "236-660-6272",
  linkedin: "https://www.linkedin.com/in/damidahunsi",
};

const highlights = [
  "11+ years translating payments, banking, retail commerce, and enterprise-system change into release-ready outcomes.",
  "Deep RS2 BankWORKS card-processing coverage across ISO 8583 MTIs, bitmap-driven data elements, authorization, clearing, settlement, merchant funding, reconciliation, disputes, PCI DSS-aligned controls, and reporting.",
  "Strong omnichannel commerce coverage across CyberSource fraud decisioning, tokenization, 3D Secure, AVS/CVV, checkout, POS, OMS, tax, inventory, fulfillment, and order-to-cash flows.",
  "Led SWIFT MT-to-ISO 20022 update and def3000/TR treasury matching work at Asseco, aligning Funds Transfer, Treasury Operations, and technology teams around MT103, MT202, MT910, MT940, MT950, MT300, and MT320 flows.",
  "Built an AI-powered BA documentation model that turns meetings, workshops, interviews, and discovery notes into structured artifacts while supporting project management, cross-functional alignment, and prioritization discipline.",
  "Known for SQL-backed validation, traceable requirements, stakeholder workshops, UAT strategy, Eisenhower Matrix and MoSCoW prioritization, and production readiness in regulated environments.",
];

const professionalSummary = [
  "I'm Damilola Dahunsi, a CBAP-certified Senior Technical Business Analyst helping organizations turn complex payment, banking, SaaS, and regulated operations into scalable systems, cleaner processes, and implementation-ready requirements.",
  "Across my career, I've supported platforms processing 1B+ transactions monthly, reduced reconciliation exceptions by 25%, improved onboarding timelines by 40%, and delivered change across institutions including WorldPay, Barclays, and Bank of America.",
  "I bring deep business analysis, systems thinking, stakeholder leadership, SQL/data validation, API integration support, and Agile delivery experience to help teams move from ambiguity to measurable operational and customer outcomes.",
];

const metrics = [
  { value: "1B+", label: "Supported payment processing environments handling 1B+ monthly card transactions on RS2 BankWORKS across issuer and acquirer ecosystems." },
  { value: "200+", label: "SIT, UAT, regression, and settlement scenarios coordinated" },
  { value: "95%", label: "Achieved 95% first-pass certification and stakeholder acceptance across major payment implementation programs." },
  { value: "2.2M+", label: "Coordinated migration of 2.2M+ customer and staff credentials while maintaining under 3% exception rates." },
  { value: "30%", label: "Reduced post-release defects by 30% through strengthened validation governance, traceability, and regression coordination" },
  { value: "$4M+", label: "Supported delivery across $4M+ in combined public-sector, financial services, and enterprise transformation portfolios." },
];

const capabilities = [
  {
    title: "Payments Platforms",
    icon: <Globe className="h-5 w-5" />,
    summary:
      "Acquiring, issuing, authorization, clearing, settlement, merchant funding, disputes, chargebacks, PCI DSS-aligned controls, tokenization, reporting, and ISO 8583 message analysis.",
    items: ["RS2 BankWORKS", "MTI", "Bitmap", "Data Elements", "PCI DSS", "IRF", "Tokenization", "3D Secure", "Visa", "MasterCard"],
  },
  {
    title: "Retail Commerce",
    icon: <Workflow className="h-5 w-5" />,
    summary:
      "Checkout, POS, OMS, BOPIS, ship-from-store, CyberSource fraud decisioning, risk scoring, card tokenization, 3DS, tax integrations, fulfillment, and order-to-cash delivery.",
    items: ["CyberSource", "AVS / CVV", "3D Secure", "Tokenization", "Velocity rules", "Device metadata", "Merchants Onboarding"],
  },
  {
    title: "Banking Integrations",
    icon: <Network className="h-5 w-5" />,
    summary:
      "Core banking, digital channels, data mapping matrix, SWIFT MT-to-ISO 20022 matching, account servicing, statements, treasury confirmation matching, and source-to-target mapping.",
    items: ["T24 / Temenos", "SWIFT MT", "ACH", "Data Mapping", "ISO 20022", "SEPA", " Loan IQ", "Syndicated Loan"],
  },
  {
    title: "Delivery Controls",
    icon: <ShieldCheck className="h-5 w-5" />,
    summary:
      "BRDs, FSDs, user stories, process flows, API mappings, data validation, UAT assets, release readiness, and post-go-live stabilization.",
    items: ["SQL", "Postman", "SOAPUI", "Jira", "Confluence", "Zephyr Scale", "UAT",  "Selenium"],
  },
  {
    title: "AI BA Documentation Automation",
    icon: <Bot className="h-5 w-5" />,
    summary:
      "AI-assisted artifact generation and delivery support that turns messy discovery inputs into structured BA outputs, project signals, and prioritized team actions.",
    items: ["Business summaries", "User stories", "Acceptance criteria", "UAT scenarios", "Eisenhower Matrix", "Risks", "Dependencies"],
  },
];

const paymentDepth = [
  {
    title: "ISO 8583 Card Message Analysis",
    icon: <CreditCard className="h-5 w-5" />,
    summary:
      "Practical understanding of MTI, bitmap, and data elements including DE2 PAN, DE3 processing code, DE4 amount, DE11 STAN, DE39 response code, and DE41 terminal ID.",
    proof:
      "Used to support RS2 BankWORKS testing, transaction-type handling, reversals, response-code analysis, routing defects, and clearing or settlement downstream impact.",
  },
  {
    title: "Card Lifecycle, Routing & Exceptions",
    icon: <Workflow className="h-5 w-5" />,
    summary:
      "Can explain and validate 0100/0110 authorization, 0200/0210 financial capture, 0400/0410 reversals, 0800/0810 network management, tokenized transactions, and 3DS-influenced card-not-present flows.",
    proof:
      "Applied across POS, acquirer, card-network, issuer, ONUS/off-us, BIN lookup, fee qualification, authorization response, PCI DSS-aligned handling, settlement, statement, and merchant-reporting scenarios.",
  },
  {
    title: "SWIFT MT & ISO 20022 Update Work",
    icon: <Network className="h-5 w-5" />,
    summary:
      "Asseco experience focused on SWIFT MT message work and ISO 20022 update patterns for institutional payment, statement, confirmation, treasury, and reconciliation flows.",
    proof:
      "Produced message-aware requirements and validation artifacts for payment initiation, confirmations, statements, matching, exception handling, and downstream reporting.",
  },
  {
    title: "CyberSource Fraud Decisioning",
    icon: <ShieldCheck className="h-5 w-5" />,
    summary:
      "Mapped checkout, tokenization, authorization, 3D Secure, fraud screening, settlement, reconciliation, and chargeback handling into CyberSource decisioning flows.",
    proof:
      "Defined rules and mappings for AVS/CVV, velocity checks, device and IP metadata, fraud score, accept/reject/review outcomes, PCI-aware data handling, API timeouts, retries, and UAT fraud scenarios.",
  },
  {
    title: "SWIFT Confirmation Matching",
    icon: <FileCheck2 className="h-5 w-5" />,
    summary:
      "Implemented analysis support for a def3000/TR treasury module automating confirmation matching across specific incoming, outgoing, and statement messages.",
    proof:
      "Covered MT103/MT202/MT910 against MT940/MT950, plus incoming MT300 and MT320 matched with outgoing MT300 and MT320 for Funds Transfer and Treasury Operations teams.",
  },
];

const experience = [
  {
    company: "Intuit TurboTax Canada",
    role: "Business Systems Analyst",
    period: "Jan 2026 - Apr 2026",
    scope: "Canadian consumer tax preparation, product-release support, tax law updates, and client-facing validation",
    bullets: [
      "Led requirements analysis sessions with cross-functional teams for 25+ client and stakeholder needs tied to product releases and changing tax-law requirements.",
      "Created acceptance criteria, test plans, process flows, internal and external communications, and release-support documentation for tax-regulated product changes.",
      "Coordinated UAT and validation processes supporting 99.5% defect-free releases while maintaining strong stakeholder communication and prioritization discipline.",
    ],
  },
  {
    company: "RS2 Plc",
    role: "Business Systems Analyst",
    period: "Nov 2021 - Feb 2024",
    scope: "Global acquiring and issuing platform across North America, Europe, and LATAM",
    bullets: [
      "Translated client, operational, and scheme needs into functional specifications, user stories, mappings, and validation packs for authorization, clearing, settlement, reconciliation, disputes, and reporting.",
      "Analyzed ISO 8583 card-payment flows, including MTI, bitmap, data elements, response codes, processing codes, STAN, terminal ID, reversal behavior, and transaction-type logic.",
      "Coordinated UAT across 15+ financial institutions and 200+ scenarios, contributing to about 95% first-pass acceptance and about 30% fewer post-release defects.",
      "Used SQL-backed transaction, charge, client, and settlement validation to reduce settlement and reconciliation exceptions by about 25%.",
      "Supported WorldPay, Paysafe, Bank of America, Wells Fargo, Landsbankinn, and Barclays initiatives involving merchant onboarding, pricing, funding, IRF mandates, chargebacks, PCI DSS-aligned delivery, tokenized payment flows, Visa Base II, Mastercard IPM, Visa AFT, and Mastercard MoneySend.",
    ],
  },
  {
    company: "Asseco Software",
    role: "Senior Business Analyst / Product Manager / Implementation Lead",
    period: "Jun 2016 - Oct 2021",
    scope: "Core banking, authentication, SWIFT, treasury, and enterprise implementation programs",
    bullets: [
      "Delivered analysis and implementation support for 15+ banking and financial-system initiatives integrating T24, Finacle, Flexcube, SWIFT Alliance, MFA platforms, middleware, and digital channels.",
      "Supported SWIFT MT and ISO 20022 update work for institutional payments, including message mapping, statement validation, confirmation matching, exception handling, and downstream reconciliation.",
      "Implemented analysis support for Asseco's def3000/TR treasury confirmation matching module covering MT103, MT202, MT910, MT940, MT950, MT300, and MT320 message relationships.",
      "Led migration and validation planning for 2.2M+ customer and staff credentials with less than 3% error while preserving continuity across internet banking, mobile banking, SWIFT, and core banking integrations.",
      "Produced BRDs, process models, source-to-target mappings, API requirements, UAT assets, training materials, and release plans that improved onboarding timelines by about 40%.",
    ],
  },
  {
    company: "Baqers.ca",
    role: "Product Lead / Customer Success / Technical Architect",
    period: "Sept 2023 - Nov 2025",
    scope: "Canadian digital commerce, operations, customer experience, and checkout-adjacent flows",
    bullets: [
      "Led backlog management, sprint planning, release coordination, and production stabilization for a retail commerce platform while maintaining about 99.5% uptime.",
      "Improved customer-facing commerce workflows across order management, reporting, customer support, vendor coordination, and integration touchpoints.",
      "Used customer insights, funnel analysis, and operating metrics to guide roadmap decisions that improved repeat purchase rates by about 15-20% and reduced unresolved complaints by about 25%.",
    ],
  },
  {
    company: "Parkway Projects Ltd.",
    role: "Software Tester / QA Analyst",
    period: "Nov 2014 - Jun 2016",
    scope: "Banking and payment application quality across regulated delivery settings",
    bullets: [
      "Executed functional, integration, regression, and UAT testing for banking and payment applications, strengthening release quality and business-rule validation.",
      "Built test assets, traceability controls, and release-readiness processes that reduced post-release rework by about 80% in source materials.",
    ],
  },
];

const consultingProjects = [
  {
    title: "Tier-1 Bank MFA / IAM Modernization",
    icon: <ShieldCheck className="h-5 w-5" />,
    sector: "Financial Sector | Four major Nigerian banks",
    summary:
      "Supported bank-wide MFA and identity-management implementations covering customer-facing mobile tokens and internal workforce authentication.",
    details:
      "Facilitated PoC and kickoff sessions, documented functional and non-functional requirements, built migration and reconciliation plans, assessed security and operational impacts, and coordinated phased rollout, training, and adoption.",
    proof: "$600K+ portfolio across major banks; 2.2M+ credentials migrated with less than 3% error in the strongest-cited program.",
  },
  {
    title: "MOT / NITT Transportation Modernization",
    icon: <Plane className="h-5 w-5" />,
    sector: "Public Sector | Ministry of Transportation / NITT",
    summary:
      "Led analysis and planning for a transportation modernization initiative covering data mining, licensing, inspection, enforcement, and future-state digital service delivery.",
    details:
      "Performed process assessments, gap analysis, infrastructure evaluation, Visio and Miro process modeling, legacy data validation, and authored an RFP package with functional requirements, technical specifications, and vendor evaluation matrix.",
    proof: "$1M modernization program; Asseco supported vendor selection rather than bidding.",
  },
  {
    title: "FIRS Fiscalization & Digital Tax Control",
    icon: <Landmark className="h-5 w-5" />,
    sector: "Public Sector | Federal Inland Revenue Service",
    summary:
      "Translated tax-control and regulatory needs into system specifications for real-time capture, verification, and reporting of cash-based transactions.",
    details:
      "Defined use cases, BPMN process models, impact analysis, offline fallback, mobile-network integration, ECR deployment, SMS/web verification, central tax server workflows, and phased rollout guidance across Asseco, CircleBlue, and FIRS stakeholders.",
    proof: "PPP / incremental revenue-sharing model focused initially on the hospitality sector.",
  },
  {
    title: "NCAA Customer Protection Department Portal",
    icon: <Plane className="h-5 w-5" />,
    sector: "Public Sector | Nigerian Civil Aviation Authority",
    summary:
      "Led requirements and process optimization for a customer protection portal designed to improve complaint handling, data accuracy, SLA control, and aviation customer service.",
    details:
      "Developed use cases, process models, gap analysis, future-state design, CRM integration requirements, ticketing workflow, SLA escalation logic, and analytics dashboard needs; partnered with design on high-fidelity Adobe XD prototypes.",
    proof: "Six-month aviation service modernization engagement.",
  },
  {
    title: "ASIRA Annuity Platform Recovery",
    icon: <BarChart3 className="h-5 w-5" />,
    sector: "Insurance | Zenith Prudential",
    summary:
      "Helped recover a stalled annuity administration implementation by resolving ambiguity, controlling scope, and rebuilding stakeholder agreement.",
    details:
      "Ran strategy analysis, pain-point workshops, MoSCoW prioritization, future-state milestone planning, solution demos, and sign-off governance for annuity contract, batch enrollment, investment, audit, and workflow capabilities.",
    proof: "$70K implementation brought back into delivery alignment.",
  },
  {
    title: "Lagos State eGIS / UAV Orthophoto Mapping",
    icon: <Map className="h-5 w-5" />,
    sector: "Public Sector | Lagos State Ministry of Technology",
    summary:
      "Supported one of West Africa's large geospatial technology programs to capture high-resolution orthophoto map data for urban planning, resource management, and environmental monitoring.",
    details:
      "Facilitated stakeholder workshops across Lagos State, Asseco Poland, and Nigeria teams; translated scope into functional and technical specifications; aligned orthophoto accuracy, data-output, risk, dependency, and training requirements for technology transfer.",
    proof: "$1.4M program; involvement concentrated in the first two years of a four-year engagement.",
  },
  {
    title: "StarINS Core Insurance Implementation",
    icon: <Building2 className="h-5 w-5" />,
    sector: "Insurance | Coronation Nigeria / WAPIC",
    summary:
      "Led underwriting and claims analysis for a core insurance platform covering life, annuity, and general insurance lines.",
    details:
      "Facilitated interviews and workshops, documented findings using UML and process-flow diagrams, secured functional requirement sign-off, and supported customization across Asseco Poland, Asseco Nigeria, and client teams.",
    proof: "Part of an approximately $1.5M combined insurance-platform program.",
  },
  {
    title: "Bank3D Corporate Collections Platform",
    icon: <CreditCard className="h-5 w-5" />,
    sector: "Payments | Parkway Projects",
    summary:
      "Supported QA and UAT for a multi-tenancy corporate payment collection and cash-management platform deployed across 20+ African countries.",
    details:
      "Covered corporate onboarding, bank and tenant onboarding, release management, requirements traceability, payment collection workflows, security compliance validation, reporting, and multi-channel posting across branch, web, POS, mobile, ATM, and direct debit.",
    proof: "Approximately $500K in combined implemented projects on the platform.",
  },
  {
    title: "Nigerian Breweries Smart Sales & Asset Apps",
    icon: <Workflow className="h-5 w-5" />,
    sector: "Enterprise Mobility | Nigerian Breweries",
    summary:
      "Led UAT and test execution for mobile and back-office applications supporting sales performance, SKU forecasting, distributor order visibility, asset tracking, and field-service operations.",
    details:
      "Created and executed test plans and test cases through production deployment for Android and .NET-backed platforms integrating CRM, inventory, asset management, marketing, customer self-service, and field service modules.",
    proof: "Approximately $200K combined project portfolio.",
  },
];

const myLocation= {
    currentLocale : "Vancouver, BC",
    otherLocale: "Ottawa, GTA, ON",
  };
const headerCerts= {
    label : "CBAP®, CSM, CSPO, ITIL® V4",
  };
const caseStudies = [
  {
    title: "WorldPay LATAM Acquiring Expansion",
    icon: <Globe className="h-5 w-5" />,
    summary:
      "Supported onboarding, requirements analysis, scheme alignment, and delivery readiness for WorldPay's Brazil and LATAM acquiring expansion on RS2 BankWORKS.",
    outcome:
      "Validated Visa Debit, Visa AFT, Visa Direct / OCT-aligned, Mastercard MoneySend, settlement, pricing, dispute, and cross-border flows.",
  },
  {
    title: "ISO 8583 Transaction Flow Analysis",
    icon: <CreditCard className="h-5 w-5" />,
    summary:
      "Mapped and validated card transaction behavior across POS/gateway, acquirer, card network, issuer, authorization response, clearing, settlement, and merchant reporting.",
    outcome:
      "Used MTI, bitmap, DE2, DE3, DE4, DE11, DE39, DE41, processing code, STAN, POS entry mode, AFS, product ID, fee identifier, and response-code analysis for testing and defect triage.",
  },
  {
    title: "Bank of America Merchant Portal",
    icon: <BarChart3 className="h-5 w-5" />,
    summary:
      "Analyzed chargebacks, reporting consistency, downstream merchant visibility, and source-to-target payment-data integrity on the RS2 acquiring platform.",
    outcome:
      "Improved reporting accuracy by about 40%, reduced chargeback disputes by about 25%, and cut issue-resolution time by about 30%.",
  },
  {
    title: "Wells Fargo BankWORKS Onboarding",
    icon: <Layers className="h-5 w-5" />,
    summary:
      "Drove detailed requirement analysis, validation artifacts, API scenarios, and multi-stakeholder UAT for Visa and Mastercard-aligned onboarding workflows.",
    outcome:
      "Contributed to about 95% first-pass acceptance, timely deployment quality, and about 30% fewer post-launch defects.",
  },
  {
    title: "Visa & Mastercard IRF Mandates",
    icon: <ShieldCheck className="h-5 w-5" />,
    summary:
      "Led mandate and interchange analysis across LATAM, EU, and North America, including EMV, tokenized payments, PCI DSS-aligned controls, AFS, PID, PTC, and POS entry-mode attributes.",
    outcome:
      "Reduced IRF-related penalties by about 95% on affected clients and lowered scheme non-compliance incidents and acquirer chargeback exposure by about 35%.",
  },
  {
    title: "def3000/TR SWIFT Confirmation Matching",
    icon: <FileCheck2 className="h-5 w-5" />,
    summary:
      "Supported implementation of a commercial off-the-shelf Asseco def3000/TR treasury module for automated SWIFT confirmation and statement matching.",
    outcome:
      "Matched MT103, MT202, and MT910 against MT940/MT950, and matched incoming MT300/MT320 with outgoing MT300/MT320 to improve Funds Transfer and Treasury Operations efficiency.",
  },
  {
    title: "CyberSource Fraud Decisioning",
    icon: <ShieldCheck className="h-5 w-5" />,
    summary:
      "Analyzed retail fraud exposure across ecommerce, tokenized card-not-present purchases, card present purchases, 3D Secure decisioning, account takeover patterns, chargebacks, false declines, and manual review operations.",
    outcome:
      "Mapped transaction payloads and rules for CyberSource fraud screening, including billing and shipping data, device/IP metadata, AVS/CVV, token handling, velocity rules, fraud scores, review queues, API errors, and UAT fraud scenarios.",
  },
  {
    title: "Omnichannel Checkout, POS & OMS",
    icon: <Workflow className="h-5 w-5" />,
    summary:
      "Supported retail commerce flow improvements across ecommerce checkout, POS, OMS, inventory, payments, tax, fraud controls, fulfillment, and reporting.",
    outcome:
      "Connected CyberSource, Decision Manager, Avalara, Oracle Xstore, ORMS / OROB, SFCC, Shopify, ERP, 3PL, and marketplace touchpoints.",
  },
  {
    title: "AI BA Artifact Automation Model",
    icon: <Bot className="h-5 w-5" />,
    summary:
      "Built an AI model that structures messy discovery inputs from meetings, workshop notes, and interviews into delivery-ready business analysis and project-management artifacts.",
    outcome:
      "Generates business summaries, user stories, acceptance criteria, functional requirements, assumptions, risks, dependencies, open questions, UAT scenarios, and prioritization inputs for cross-functional teams.",
  },
];

const certifications = [
  "CBAP® - Certified Business Analysis Professional",
  "CSM - Certified Scrum Master",
  "CSPO - Certified Scrum Product Owner",
  "ITIL® V4 - Foundation Certificate in Service Management",
  "ISTQB - Certified Software Tester",
];

const tools = [
  "SQL",
  "Oracle",
  "PostgreSQL",
  "Postman",
  "SOAPUI",
  "Wizdler",
  "Jira",
  "Confluence",
  "Zephyr Scale",
  "Jenkins",
  "Power BI",
  "Excel",
  "Visio",
  "BPMN / UML",
  "Eisenhower Matrix",
  "MoSCoW",
  "SharePoint",
  "REST APIs",
  "SOAP / WSDL",
  "CyberSource",
  "Decision Manager",
  "PCI DSS",
  "Tokenization",
  "3D Secure",
  "AVS / CVV",
  "EMV",
  "Chargebacks",
  "RS2 BankWORKS",
  "ISO 8583",
  "MTI / Bitmap / DE",
  "ISO 20022 update",
  "SWIFT MT",
  "def3000/TR",
  "T24 / Temenos",
  "Loan IQ",
  "Oracle Flexcube",
  "SWIFT Alliance",
  "SFCC",
  "Shopify",
  "Oracle Xstore",
  "ORMS / OROB",
];

const fadeUp = {
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
};

const revealTransition = { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const };

const liftCardClass = "transition duration-200 ease-out hover:-translate-y-1 hover:shadow-lg";

const navItems = [
  { href: "#summary", label: "Summary", mobileLabel: "Sum", icon: Target },
  { href: "#capabilities", label: "Capabilities", mobileLabel: "Skills", icon: Layers },
  { href: "#payments", label: "Payments", mobileLabel: "Pay", icon: CreditCard },
  { href: "#experience", label: "Experience", mobileLabel: "Exp", icon: Briefcase },
  { href: "#featured", label: "Featured Work", mobileLabel: "Work", icon: Database },
  { href: "#consulting", label: "Consulting", mobileLabel: "Cases", icon: Building2 },
  { href: "#tools", label: "Tools", mobileLabel: "Tools", icon: Workflow },
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
      viewport={{ once: true, amount: 0.16 }}
      transition={revealTransition}
    >
      {children}
    </motion.section>
  );
}

function CountUpMetric({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    if (!isInView || reduceMotion) {
      setDisplayValue(value);
      return;
    }

    const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const [, prefix, numericValue, suffix] = match;
    const target = Number(numericValue);
    const decimals = numericValue.includes(".") ? numericValue.split(".")[1].length : 0;
    const duration = 900;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplayValue(`${prefix}${current.toFixed(decimals)}${suffix}`);

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplayValue(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, reduceMotion, value]);

  return (
    <div ref={ref} className="text-3xl font-semibold text-zinc-950">
      {displayValue}
    </div>
  );
}

export default function Portfolio() {
  const [isRailVisible, setIsRailVisible] = useState(false);
  const [activeNav, setActiveNav] = useState(navItems[0].href);
  const [theme, setTheme] = useState<PortfolioTheme>(() => {
    if (typeof window === "undefined") return "night";
    return window.localStorage.getItem("portfolio-theme") === "day" ? "day" : "night";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "night");
    document.documentElement.style.colorScheme = theme === "night" ? "dark" : "light";
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const updateNavigationState = () => {
      setIsRailVisible(window.scrollY > 260);

      const activeItem = navItems
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
    <main className={`portfolio-shell ${theme === "night" ? "portfolio-night" : "portfolio-day"} min-h-screen w-screen bg-zinc-50 pb-20 text-zinc-950 lg:pb-0`}>
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:pr-24">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span className="text-sm font-semibold">Damilola Dahunsi</span>
            <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:block" />
            <span className="text-sm text-zinc-600">Payments, Commerce & Banking Systems</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button asChild variant="outline" className="h-9 rounded-lg border-zinc-300 bg-white px-3">
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </a>
            </Button>
            <Button asChild variant="outline" className="h-9 rounded-lg border-zinc-300 bg-white px-3">
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
        {theme === "night" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
      </button>

      <nav
        aria-label="Portfolio sections"
        className={`fixed right-3 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-1 rounded-full border border-white/80 bg-[linear-gradient(145deg,#ffffff_0%,#f4f4f5_58%,#ecfeff_100%)] p-2 shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-zinc-900/5 backdrop-blur-xl transition duration-300 lg:flex ${
          isRailVisible ? "translate-x-0 opacity-100" : "translate-x-3 opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeNav === item.href;
          return (
            <a key={item.href} href={item.href} aria-label={item.label} className="group relative flex h-7 w-7 items-center justify-center">
              <span className="pointer-events-none absolute right-8 rounded-full border border-white/80 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_60%,#ecfeff_100%)] px-3 py-1.5 text-xs font-medium text-zinc-600 opacity-0 shadow-[0_10px_30px_rgba(15,23,42,0.12)] ring-1 ring-zinc-900/5 backdrop-blur-md transition duration-200 group-hover:-translate-x-1 group-hover:opacity-100">
                {item.label}
              </span>
              <span
                className={`block rounded-full transition-all duration-200 ${
                  isActive ? "h-6 w-1.5 bg-zinc-900" : "h-2 w-2 bg-zinc-300 group-hover:h-3 group-hover:w-3 group-hover:bg-zinc-500"
                }`}
              />
            </a>
          );
        })}
      </nav>

      <nav
        aria-label="Portfolio sections mobile"
        className={`fixed bottom-3 left-2 right-2 z-30 grid grid-cols-7 gap-1 rounded-2xl border border-white/80 bg-[linear-gradient(145deg,#ffffff_0%,#f4f4f5_58%,#ecfeff_100%)] p-1.5 shadow-[0_18px_45px_rgba(15,23,42,0.14)] ring-1 ring-zinc-900/5 backdrop-blur-xl transition duration-300 sm:left-4 sm:right-4 lg:hidden ${
          isRailVisible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0 pointer-events-none"
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
              <Icon className={`h-4 w-4 ${isActive ? "text-teal-700" : "text-zinc-400"}`} />
              <span className="max-w-full truncate">{item.mobileLabel}</span>
            </a>
          );
        })}
      </nav>

      <section className="bg-[linear-gradient(135deg,#ffffff_0%,#f4f4f5_48%,#ecfeff_100%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(340px,0.95fr)] lg:px-8 lg:py-20">
          <motion.div {...fadeUp} transition={{ duration: 0.45 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-sm font-medium text-teal-900">
              <BadgeCheck className="h-4 w-4" />
              {headerCerts.label} | {myLocation.otherLocale}
            </div>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-normal text-zinc-950 sm:text-5xl lg:text-6xl">
              Senior Business Analyst for payments, commerce, and regulated systems delivery.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-700 sm:text-lg">
              I help product, engineering, operations, finance, compliance, and client teams turn complex transaction flows into clear requirements, validated releases, and measurable business outcomes across card payments, core banking, omnichannel commerce, and digital transformation.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-zinc-700 sm:grid-cols-3">
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-3">
                <MapPin className="h-4 w-4 text-teal-700" />
               {myLocation.otherLocale}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-3">
                <Phone className="h-4 w-4 text-amber-700" />
                {contact.phone}
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-3">
                <Briefcase className="h-4 w-4 text-rose-700" />
                Remote / Canada
              </span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="grid gap-3 sm:grid-cols-2 lg:content-start"
          >
            {metrics.map((item) => (
              <div key={item.label} className={`rounded-lg border border-zinc-200 bg-white p-4 shadow-sm ${liftCardClass}`}>
                <CountUpMetric value={item.value} />
                <div className="mt-2 text-sm leading-6 text-zinc-600">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <SectionReveal id="summary" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase text-teal-800">
              <Target className="h-4 w-4" />
              Professional Summary
            </div>
            <div className="max-w-2xl space-y-4">
              {professionalSummary.map((item) => (
                <p key={item} className="text-base leading-8 text-zinc-700 sm:text-lg">
                  {item}
                </p>
              ))}
            </div>
            <p className="mt-5 max-w-xl text-2xl font-semibold leading-tight text-zinc-950">
              Practical domain depth with the documentation discipline banks and payment teams rely on.
            </p>
          </div>
          <div className="grid gap-3">
            {highlights.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg border border-zinc-200 bg-white p-4 shadow-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal-700" />
                <p className="leading-7 text-zinc-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="capabilities" className="border-y border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase text-amber-800">
                <Layers className="h-4 w-4" />
                Capability Map
              </div>
              <h2 className="text-3xl font-semibold text-zinc-950">Where I create leverage</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-zinc-600">
              {/*  */}
             </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item) => (
              <Card key={item.title} className={`rounded-lg border-zinc-200 py-0 shadow-sm ${liftCardClass}`}>
                <CardContent className="p-5">
                  <div className="mb-4 inline-flex rounded-lg bg-zinc-100 p-3 text-zinc-900">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-2 min-h-24 text-sm leading-6 text-zinc-600">{item.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.items.map((skill) => (
                      <span key={skill} className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="payments" className="w-full border-y border-zinc-200 bg-[linear-gradient(135deg,#ffffff_0%,#f8fafc_46%,#ecfeff_100%)] px-4 py-12 sm:px-6 lg:px-6 2xl:px-10">
        <div className="mx-auto max-w-[1500px] lg:pr-10 2xl:pr-16">
          <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase text-teal-800">
                <CreditCard className="h-4 w-4" />
                Payment Message Depth
              </div>
              <h2 className="text-3xl font-semibold text-zinc-950">Card, commerce, and treasury payment evidence</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-zinc-600">
              {/** */}
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-5">
            {paymentDepth.map((item) => (
              <Card key={item.title} className={`rounded-lg border-zinc-200 py-0 shadow-sm ${liftCardClass}`}>
                <CardContent className="p-5">
                  <div className="mb-4 inline-flex rounded-lg bg-zinc-100 p-3 text-zinc-900">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{item.summary}</p>
                  <p className="mt-4 rounded-lg border border-teal-200 bg-teal-50 p-3 text-sm leading-6 text-teal-950">
                    {item.proof}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="experience" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-center gap-2 text-sm font-semibold uppercase text-rose-800">
          <Briefcase className="h-4 w-4" />
          Experience
        </div>
        <div className="space-y-4">
          {experience.map((item) => (
            <Card key={`${item.company}-${item.role}`} className={`rounded-lg border-zinc-200 py-0 shadow-sm ${liftCardClass}`}>
              <CardContent className="p-5 sm:p-6">
                <div className="grid gap-4 lg:grid-cols-[0.34fr_0.66fr]">
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-950">{item.role}</h3>
                    <p className="mt-1 font-medium text-zinc-700">{item.company}</p>
                    <p className="mt-3 inline-flex rounded-md bg-zinc-100 px-2.5 py-1 text-sm text-zinc-700">{item.period}</p>
                    <p className="mt-4 text-sm leading-6 text-zinc-600">{item.scope}</p>
                  </div>
                  <div className="grid gap-3">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-teal-700" />
                        <p className="leading-7 text-zinc-700">{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </SectionReveal>

      <SectionReveal id="featured" className="border-y border-zinc-200 bg-zinc-100/70">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase text-teal-800">
                <Database className="h-4 w-4" />
                Featured Work
              </div>
              <h2 className="text-3xl font-semibold text-zinc-950">Selected platforms and programs</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-zinc-600">
              Evidence-backed examples spanning payment operations, merchant platforms, core banking, commerce integrations, and release validation.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((item) => (
              <Card key={item.title} className={`rounded-lg border-zinc-200 bg-white py-0 shadow-sm ${liftCardClass}`}>
                <CardContent className="p-5">
                  <div className="mb-4 inline-flex rounded-lg bg-teal-50 p-3 text-teal-900">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-700">{item.summary}</p>
                  <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-3 text-sm leading-6 text-amber-950">
                    {item.outcome}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="consulting" className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase text-amber-800">
                <Building2 className="h-4 w-4" />
                Consulting Portfolio
              </div>
              <h2 className="text-3xl font-semibold text-zinc-950">Government, insurance, IAM, and enterprise transformation</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-zinc-600">
              Additional project evidence from consulting samples, showing breadth beyond payments while staying anchored in business analysis delivery.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {consultingProjects.map((item) => (
              <Card key={item.title} className={`rounded-lg border-zinc-200 py-0 shadow-sm ${liftCardClass}`}>
                <CardContent className="p-5">
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div className="inline-flex rounded-lg bg-amber-50 p-3 text-amber-900">{item.icon}</div>
                    <span className="rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 text-right text-xs leading-5 text-zinc-600">
                      {item.sector}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-700">{item.summary}</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">{item.details}</p>
                  <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm leading-6 text-zinc-700">
                    {item.proof}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal id="tools" className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <Card className={`rounded-lg border-zinc-200 py-0 shadow-sm ${liftCardClass}`}>
          <CardContent className="p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-teal-700" />
              <h2 className="text-2xl font-semibold text-zinc-950">Credentials</h2>
            </div>
            <div className="grid gap-3">
              {certifications.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-lg border border-zinc-200 bg-zinc-50 p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" />
                  <span className="text-sm leading-6 text-zinc-700">{item}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className={`rounded-lg border-zinc-200 py-0 shadow-sm ${liftCardClass}`}>
          <CardContent className="p-5 sm:p-6">
            <div className="mb-5 flex items-center gap-2">
              <Workflow className="h-5 w-5 text-amber-700" />
              <h2 className="text-2xl font-semibold text-zinc-950">Tools, Platforms & Methods</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((item) => (
                <span key={item} className="rounded-md border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700">
                  {item}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </SectionReveal>

      <SectionReveal className="border-t border-zinc-200 bg-zinc-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <h2 className="text-3xl font-semibold">Available for payments, product, business systems, and transformation roles.</h2>
            <p className="mt-3 max-w-3xl leading-7 text-zinc-300">
              Strongest fit: Business Systems Analyst, Product Owner, Payments / Fintech Analyst, Implementation Consultant, and retail commerce transformation roles across Canada or remote-first teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button asChild className="footer-cta-primary h-10 rounded-lg bg-white px-4 text-zinc-950 hover:bg-zinc-100">
              <a href={`mailto:${contact.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email Me
              </a>
            </Button>
            <Button asChild variant="outline" className="footer-cta-secondary h-10 rounded-lg border-white/30 bg-transparent px-4 text-white hover:bg-white/10">
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </SectionReveal>
    </main>
  );
}
