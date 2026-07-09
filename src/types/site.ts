export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface Principle {
  code: string; // e.g. "01"
  title: string;
  description: string;
}

export interface ProcessStep {
  step: string; // e.g. "01"
  title: string;
  description: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  url: string;

  nav: NavItem[];

  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };

  about: {
    eyebrow: string;
    heading: string;
    body: string[];
  };

  services: Service[];

  principles: Principle[];

  process: ProcessStep[];

  contact: {
    eyebrow: string;
    heading: string;
    subheading: string;
    email: string;
    responseTime: string;
    projectTypeOptions: string[];
    budgetOptions: string[];
  };

  social: SocialLink[];

  footer: {
    note: string;
  };
}
