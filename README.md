# Axiom Systems

Axiom Systems is a modern marketing and inquiry website for a web development services company. It is designed to present the company's services, development process, and core principles while providing potential clients with a simple way to get in touch for new projects.

The project follows a configuration-driven architecture where most website content—including navigation, hero content, services, company principles, process timeline, and contact options—is managed from a single configuration file. This makes the site easy to customize and reuse for future iterations without modifying the UI components.

## Features

* Modern, responsive landing page
* Service showcase
* Company principles section
* Development process timeline
* Contact/inquiry form with server-side validation
* Configuration-driven content management
* Clean and maintainable component architecture
* Optimized for performance with Next.js App Router

## Tech Stack

* Next.js 16 (App Router)
* React 19
* TypeScript
* Tailwind CSS v4
* Turbopack
* Route Handlers (API)

## Project Structure

```text
src/
├── app/
│   ├── api/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── config/
│   └── site.config.ts
├── lib/
├── types/
└── ...
```

## Content Configuration

Website content is centralized in:

```text
src/config/site.config.ts
```

This file contains the site's navigation, hero content, services, company principles, development process, and contact information. Updating this configuration automatically updates the corresponding sections throughout the website.

## Contact Form

The contact form submits inquiries through an API route located at:

```text
src/app/api/contact/route.ts
```

By default, submissions are validated and processed server-side. The endpoint can be extended to integrate with email providers, CRM platforms, or webhook-based workflows.

## Design

The interface follows a clean, modern aesthetic centered around simplicity and professionalism. A white canvas, cyan accents, and subtle blueprint-inspired elements reinforce the company's engineering-focused identity while maintaining readability and accessibility across devices.
