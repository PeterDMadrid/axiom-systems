import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Process() {
  return (
    <section id="process" className="border-t border-ink/10 bg-cyan-25 py-20 md:py-28">
      <Container>
        <Eyebrow>Process</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          How an engagement runs.
        </h2>

        <ol className="mt-12 grid gap-8 md:grid-cols-4 md:gap-0">
          {siteConfig.process.map((item, index) => (
            <li key={item.step} className="relative pr-6">
              {index < siteConfig.process.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-0 top-3 hidden h-px w-6 bg-ink/15 md:block"
                />
              )}
              <span className="font-mono text-xs text-cyan-600">{item.step}</span>
              <h3 className="mt-3 font-display text-base font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
