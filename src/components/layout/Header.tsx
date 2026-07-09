"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          {siteConfig.shortName}
          <span className="text-cyan-500">.</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-cyan-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <LinkButton href="#contact" variant="primary" className="px-4 py-2 text-xs">
            Start a project
          </LinkButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-ink transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-5 bg-ink transition-opacity ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-px w-5 bg-ink transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </Container>

      {open && (
        <div className="border-t border-ink/10 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-sm px-2 py-3 text-sm text-ink-soft hover:bg-cyan-25 hover:text-cyan-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-ink px-4 py-3 text-center text-sm font-medium text-white"
            >
              Start a project
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
