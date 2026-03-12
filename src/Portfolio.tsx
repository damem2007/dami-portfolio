import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Linkedin, Briefcase, BarChart3, BadgeCheck, Target, Layers, CheckCircle2, ArrowRight, Globe, Database, Workflow, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const highlights = [
  "10+ years across fintech, payments, ERP, enterprise systems, and digital transformation",
  "Deep expertise in payment processing, ISO 20022 / SWIFT MT messaging, clearing, settlement, and merchant operations",
  "Strong track record translating complex business problems into scalable product and systems solutions",
  "Metrics-driven delivery across business analysis, product ownership, QA/UAT, implementation, and stakeholder alignment",
];

const metrics = [
  { value: "60%", label: "Reduction in payment rejects" },
  { value: "$2M+", label: "Cost savings / efficiency impact delivered across initiatives" },
  { value: "95%", label: "UAT first-pass success achieved on major programs" },
  { value: "1B+", label: "Monthly transactions supported in enterprise payment environments" },
];

const expertise = [
  "Business Systems Analysis",
  "Product Management",
  "Payments & Fintech",
  "ISO 20022 / SWIFT MT",
  "Requirements Engineering",
  "User Stories & Acceptance Criteria",
  "Process Mapping & BPMN",
  "UAT / QA / Defect Triage",
  "Agile / Scrum Delivery",
  "Stakeholder Workshops",
  "Data Mapping & Integration",
  "ERP / Treasury / Enterprise Platforms",
  "Implementation & Change Readiness",
  "API & Cross-Functional Solution Design",
];

const certifications = [
  {
    name: "CBAP — Certified Business Analysis Professional",
    org: "IIBA",
    short: "CBAP",
    badgeClass: "bg-blue-100 text-blue-700 ring-blue-200",
  },
  {
    name: "ITIL v4 — ITIL Foundation",
    org: "AXELOS",
    short: "ITIL",
    badgeClass: "bg-purple-100 text-purple-700 ring-purple-200",
  },
  {
    name: "CSM — Certified Scrum Master",
    org: "Scrum Alliance",
    short: "CSM",
    badgeClass: "bg-amber-100 text-amber-700 ring-amber-200",
  },
  {
    name: "CSPO — Certified Scrum Product Owner",
    org: "Scrum Alliance",
    short: "CSPO",
    badgeClass: "bg-orange-100 text-orange-700 ring-orange-200",
  },
  {
    name: "ISTQB — Certified Software Tester",
    org: "ISTQB",
    short: "ISTQB",
    badgeClass: "bg-emerald-100 text-emerald-700 ring-emerald-200",
  },
];

const experience = [
  {
    company: "RS2",
    role: "Senior Business Systems Analyst / Payments Product Specialist",
    period: "Fintech / Global Payments Platform",
    bullets: [
      "Led requirements engineering and solution analysis for enterprise payment processing systems supporting issuing, acquiring, interchange, and settlement capabilities.",
      "Reduced transaction rejects by over 60% by improving message validation, workflow clarity, and payment processing rules across high‑volume environments.",
      "Supported platforms processing over 1B+ monthly transactions while coordinating requirements across product, engineering, operations, and compliance teams.",
      "Contributed to ISO 20022 / SWIFT message handling improvements, improving reliability of transaction routing and reconciliation processes.",
    ],
  },
  {
    company: "Asseco Software Nigeria",
    role: "Business Analyst / Enterprise Systems Delivery",
    period: "Banking & Enterprise Platforms",
    bullets: [
      "Delivered business and systems analysis across enterprise banking and financial systems implementations.",
      "Facilitated stakeholder workshops, requirements documentation, and integration design across product, architecture, and engineering teams.",
      "Improved delivery readiness through structured UAT planning, acceptance criteria, and traceable functional documentation.",
    ],
  },
  {
    company: "Parkway Projects",
    role: "Business Analysis & Digital Transformation Consultant",
    period: "Public Sector Programs",
    bullets: [
      "Supported large transformation programs focused on digital workflows, operational efficiency, and technology modernization.",
      "Developed business process maps, functional requirements, and delivery governance artifacts supporting cross‑agency transformation.",
      "Helped translate strategic policy initiatives into implementable digital systems and operational improvements.",
    ],
  },
  {
    company: "Baqers",
    role: "Lead Product Manager & Solutions Architect",
    period: "Retail Commerce Platform / Market Expansion",
    bullets: [
      "Led product strategy and platform architecture for a retail commerce initiative focused on digital marketplace and cross‑border supply chain enablement.",
      "Defined product vision, feature roadmap, and system architecture supporting supplier onboarding, pricing models, inventory visibility, and transaction workflows.",
      "Conducted Canadian market entry analysis including supplier economics, margin structures, COGS modeling, and competitive retail benchmarking.",
      "Collaborated with engineering and business stakeholders to design scalable platform capabilities across catalog management, payments, logistics integration, and analytics.",
    ],
  },
];

const caseStudies = [
  {
    title: "Enterprise Payments Platform",
    icon: <Globe className="h-5 w-5" />,
    summary:
      "Supported implementation and enhancement of enterprise card processing platforms covering issuing, acquiring, interchange, clearing and settlement. Contributed to requirements definition, message mapping (ISO 8583 / ISO 20022), integration alignment, and operational readiness for high‑volume global payment environments.",
  },
  {
    title: "Enterprise Banking & Integration Delivery",
    icon: <Layers className="h-5 w-5" />,
    summary:
      "Worked on multiple banking technology implementations including core banking integrations, digital channels, and enterprise service layers. Led requirements engineering, data mapping, stakeholder workshops, and UAT coordination across product, architecture, and engineering teams.",
  },
  {
    title: "Government Digital Transformation",
    icon: <Database className="h-5 w-5" />,
    summary:
      "Participated in large‑scale public sector digital transformation initiatives involving process digitization, workflow automation, and data modernization. Helped translate policy and operational requirements into implementable system specifications and delivery artifacts.",
  },
  {
    title: "Commerce Platform Architecture",
    icon: <BarChart3 className="h-5 w-5" />,
    summary:
      "As Lead Product Manager and Solutions Architect at Baqers, defined the architecture and implementation roadmap for a retail marketplace platform including supplier onboarding, catalog management, pricing models, payment workflows, logistics integration, and analytics capabilities.",
  },
];

const testimonials = [
  {
    quote: "Damilola combines strong technical expertise with excellent people skills. He consistently goes above and beyond to ensure projects meet delivery timelines and is a valuable asset to any team.",
    author: "Seyi Lucas",
    title: "Enterprise / Solutions Architect"
  },
  {
    quote: "Dami’s work ethic is top‑notch. I would gladly recommend him to any organization looking for someone dependable and results‑oriented.",
    author: "Chukwuka Okafor",
    title: "Chief Product Officer"
  },
  {
    quote: "One of the best analysts I’ve had the pleasure of working with. Highly analytical, motivated, and focused, with the ability to make a significant impact on project success.",
    author: "Hrvoje Bek",
    title: "Strategic Product Manager"
  },
  {
    quote: "A highly committed professional with strong technical, project management, and people skills. A resource any project manager would love to have on their team.",
    author: "Ayodeji Adeleye",
    title: "Digital Transformation Program Manager"
  },
  {
    quote: "Dami combines business understanding with deep technical insight to create real value for the organizations and teams he works with.",
    author: "Matej Sloup",
    title: "Technology & Business Executive"
  }
  ,
  {
    quote: "Dami demonstrates deep proficiency in solution design and brings strong ideas, technical insight, and understanding of system dependencies. His commitment and expertise make complex projects much easier to execute.",
    author: "Salman Saifi",
    title: "Web Developer / Solutions Collaborator"
  }
];

const tools = [
  "JIRA",
  "Confluence",
  "Azure DevOps",
  "SQL",
  "Visio",
  "Figma",
  "Power BI",
  "Excel",
  "Postman",
  "ServiceNow",
  "SharePoint",
  "Salesforce",
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden border-b bg-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-100" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-sm shadow-sm">
                <BadgeCheck className="h-4 w-4" />
                Payments, Product & Enterprise Transformation Leader
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Damilola Dahunsi
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                I help organizations translate strategy into executable product, systems, and process outcomes across payments, enterprise platforms, and digital transformation programs — with a strong focus on scale, delivery quality, and measurable business value.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
                <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2">
                  <MapPin className="h-4 w-4" /> Vancouver, BC / Canada
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2">
                  <Workflow className="h-4 w-4" /> Agile • Product • Systems Analysis
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border bg-white px-3 py-2">
                  <ShieldCheck className="h-4 w-4" /> Fintech • Payments • Enterprise Delivery
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="rounded-2xl px-5 py-6 text-base">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Button>
                <Button variant="outline" className="rounded-2xl px-5 py-6 text-base">
                  Download Resume
                </Button>
                <Button variant="outline" className="rounded-2xl px-5 py-6 text-base">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn Profile
                </Button>
              </div>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="rounded-3xl border-0 bg-slate-900 text-white shadow-2xl">
                <CardContent className="p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <BarChart3 className="h-6 w-6" />
                    <h2 className="text-xl font-semibold">Impact Snapshot</h2>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {metrics.map((item) => (
                      <div key={item.label} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                        <div className="text-3xl font-bold">{item.value}</div>
                        <div className="mt-1 text-sm text-slate-200">{item.label}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-3">
                <Target className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">Professional Summary</h2>
              </div>
              <div className="space-y-3 text-slate-700">
                {highlights.map((item) => (
                  <div key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <div className="mb-5 flex items-center gap-3">
                <BadgeCheck className="h-5 w-5" />
                <h2 className="text-2xl font-semibold">Professional Credentials</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {certifications.map((item) => (
                  <div
                    key={item.name}
                    className="group rounded-2xl border bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-sm font-bold ring-1 ${item.badgeClass}`}
                      >
                        {item.short}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold leading-6 text-slate-900">{item.name}</div>
                        <div className="mt-1 text-xs uppercase tracking-wide text-slate-500">{item.org}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardContent className="p-8">
            <div className="mb-6 flex items-center gap-3">
              <Briefcase className="h-5 w-5" />
              <h2 className="text-2xl font-semibold">Leadership & Delivery Experience</h2>
            </div>
            <div className="space-y-6">
              {experience.map((item) => (
                <div key={item.company} className="rounded-2xl border p-6">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold">{item.role}</h3>
                      <p className="text-slate-600">{item.company}</p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">
                      {item.period}
                    </span>
                  </div>
                  <div className="mt-4 space-y-3 text-slate-700">
                    {item.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3">
                        <ArrowRight className="mt-0.5 h-4 w-4 shrink-0" />
                        <p>{bullet}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Industry Feedback</h2>
          <p className="mt-2 text-slate-600">What colleagues and leaders say about working with Damilola</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.quote} className="rounded-3xl border-0 shadow-sm">
              <CardContent className="p-8">
                <p className="text-slate-700 leading-7">“{t.quote}”</p>
                <div className="mt-4 text-sm text-slate-500">
                  <div className="font-semibold text-slate-700">{t.author}</div>
                  <div>{t.title}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold">Featured Platforms & Programs</h2>
          <p className="mt-2 text-slate-600">Selected initiatives and platforms reflecting enterprise‑scale systems, payments infrastructure, and digital transformation work.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.map((item) => (
            <Card key={item.title} className="rounded-3xl border-0 shadow-sm">
              <CardContent className="p-8">
                <div className="mb-4 inline-flex rounded-2xl bg-slate-100 p-3">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold">Strategic Capabilities</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">Payments & Enterprise Platforms</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">Payments & Fintech, ISO 20022 / SWIFT MT, ERP / Treasury / Enterprise Platforms, Data Mapping & Integration</div>
                </div>
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">Product & Delivery Leadership</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">Product Management, Agile / Scrum Delivery, Stakeholder Workshops, Implementation & Change Readiness</div>
                </div>
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">Analysis & Execution</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">Business Systems Analysis, Requirements Engineering, User Stories & Acceptance Criteria, UAT / QA / Defect Triage</div>
                </div>
                <div className="rounded-2xl border bg-slate-50 p-4">
                  <div className="text-sm font-semibold text-slate-900">Process, Architecture & Design</div>
                  <div className="mt-2 text-sm leading-6 text-slate-600">Process Mapping & BPMN, API & Cross-Functional Solution Design, enterprise operating model alignment</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-3xl border-0 shadow-sm">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold">Tools & Platforms</h2>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {tools.map((item) => (
                  <div key={item} className="rounded-2xl border bg-slate-50 p-3 text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
          <Card className="rounded-3xl border-0 bg-slate-900 text-white shadow-xl">
            <CardContent className="p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold">Let’s build business outcomes, not just documents.</h2>
                  <p className="mt-3 max-w-2xl text-slate-300">
                    Available for Business Systems Analyst, Product Owner, Implementation Consultant,
                    and payments-focused transformation roles across Canada and remote-first teams.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <Button className="rounded-2xl bg-white px-5 py-6 text-base text-slate-900 hover:bg-slate-100">
                    <Mail className="mr-2 h-4 w-4" /> Email Me
                  </Button>
                  <Button variant="outline" className="rounded-2xl border-white/30 px-5 py-6 text-base text-white hover:bg-white/10">
                    <Linkedin className="mr-2 h-4 w-4" /> Connect on LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
