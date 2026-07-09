import type { SiteConfig } from "@/types/site";

/**
 * Single source of truth for site content.
 *
 * Everything rendered on the page — nav links, hero copy, services,
 * principles, process steps, and contact details — is read from here.
 * To reuse this template for a different engagement or reword anything,
 * edit this file only; components should not need to change.
 */
export const siteConfig: SiteConfig = {
  name: "Axiom Systems",
  shortName: "Axiom",
  tagline: "Web systems, built on solid foundations.",
  description:
    "Axiom Systems designs and builds custom web applications, internal tools, and digital platforms shaped around how your business actually operates.",
  url: "https://axiom-systems.3-91-173-6.sslip.io",

  nav: [
    { label: "Services", href: "#services" },
    { label: "Approach", href: "#approach" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],

  hero: {
    eyebrow: "WEB DEVELOPMENT, ENGINEERED",
    headline: "Custom web systems, built on solid foundations.",
    subheadline:
      "We design and build web applications, internal tools, and digital platforms shaped around how your business actually operates — not a generic template.",
    primaryCta: { label: "Start a project", href: "#contact" },
    secondaryCta: { label: "See what we do", href: "#services" },
  },

  about: {
    eyebrow: "ABOUT",
    heading: "A small studio, built for exact scope.",
    body: [
      "Axiom Systems is a web development practice focused on one thing: building systems that fit the business they're built for, instead of forcing the business to fit a template.",
      "Every engagement starts from the same place — understanding how your team actually works — and scopes the build around that, whether it's a customer-facing site, an internal dashboard, or a platform that replaces a stack of spreadsheets.",
    ],
  },

  services: [
    {
      id: "web-apps",
      title: "Custom Web Applications",
      description:
        "Full-stack applications built around your workflow, from customer portals to internal platforms.",
      features: [
        "Role-based access & permissions",
        "Custom workflows & approvals",
        "Reporting & admin dashboards",
      ],
    },
    {
      id: "business-sites",
      title: "Business & E-Commerce Sites",
      description:
        "Fast, conversion-focused sites for businesses that need to sell, showcase, or scale online.",
      features: [
        "Content-managed marketing sites",
        "Online payments & checkout",
        "SEO-ready foundations",
      ],
    },
    {
      id: "internal-tools",
      title: "Internal Tools & Dashboards",
      description:
        "Purpose-built dashboards and admin systems that replace spreadsheets and manual processes.",
      features: [
        "Data visualization & reporting",
        "Batch & records management",
        "Exportable, audit-friendly views",
      ],
    },
    {
      id: "integrations",
      title: "Systems Integration & APIs",
      description:
        "Connecting the tools you already use — payments, CRMs, and third-party services — into one system.",
      features: [
        "Third-party API integration",
        "Automated data sync",
        "Webhooks & background jobs",
      ],
    },
    {
      id: "support",
      title: "Maintenance & Support",
      description:
        "Ongoing updates, monitoring, and support after launch, so the system keeps working as your business grows.",
      features: [
        "Bug fixes & security patches",
        "Uptime & error monitoring",
        "Feature iteration on retainer",
      ],
    },
  ],

  principles: [
    {
      code: "01",
      title: "Every system starts with your workflow.",
      description:
        "We study how your team actually works before writing a line of code, not the other way around.",
    },
    {
      code: "02",
      title: "Scope should be exact, not padded.",
      description:
        "You get what the project needs — no bloated stacks, no features billed by the hour that no one asked for.",
    },
    {
      code: "03",
      title: "Code is a liability until it ships.",
      description:
        "We build in working increments you can see and use, not a black box that appears at the very end.",
    },
    {
      code: "04",
      title: "Support doesn't end at launch.",
      description:
        "A system is only finished the day you stop needing it. We stay on for the rest.",
    },
  ],

  process: [
    {
      step: "01",
      title: "Inquiry",
      description: "You tell us what you need; we ask the questions that matter.",
    },
    {
      step: "02",
      title: "Proposal",
      description: "A clear scope, timeline, and cost, specific to your project.",
    },
    {
      step: "03",
      title: "Build",
      description: "Iterative development with visibility at every stage.",
    },
    {
      step: "04",
      title: "Launch & Support",
      description: "Deployment, handoff, and ongoing support as needed.",
    },
  ],

  contact: {
    eyebrow: "CONTACT",
    heading: "Tell us what you're building.",
    subheading:
      "General inquiry or a scoped project — either way, send the details and we'll follow up.",
    email: "petermadrid0421@gmail.com",
    responseTime: "We reply within 1–2 business days.",
    projectTypeOptions: [
      "Custom Web Application",
      "Business / E-Commerce Site",
      "Internal Tool or Dashboard",
      "Systems Integration",
      "Maintenance & Support",
      "Not sure yet",
    ],
    budgetOptions: [
      "Under $2,000",
      "$2,000 – $5,000",
      "$5,000 – $15,000",
      "$15,000+",
      "Prefer to discuss",
    ],
  },

  social: [
    // Add links to show them in the footer, e.g.:
    // { label: "GitHub", href: "https://github.com/your-org" },
    // { label: "LinkedIn", href: "https://linkedin.com/company/your-org" },
  ],

  footer: {
    note: "Web development services, scoped to what you actually need.",
  },
};
