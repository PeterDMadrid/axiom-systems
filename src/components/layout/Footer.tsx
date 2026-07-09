import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-white">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-semibold tracking-tight text-ink">
            {siteConfig.shortName}
            <span className="text-cyan-500">.</span>
          </p>
          <p className="mt-2 text-sm text-ink-soft">{siteConfig.footer.note}</p>
        </div>

        <div className="flex gap-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft/70">
              Site
            </p>
            <ul className="mt-3 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-cyan-700"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {siteConfig.social.length > 0 && (
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft/70">
                Elsewhere
              </p>
              <ul className="mt-3 space-y-2">
                {siteConfig.social.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink-soft transition-colors hover:text-cyan-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Container>

      <Container className="flex flex-col gap-2 border-t border-ink/10 py-6 text-xs text-ink-soft/70 md:flex-row md:items-center md:justify-between">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
        <p className="font-mono">{siteConfig.contact.email}</p>
      </Container>
    </footer>
  );
}
