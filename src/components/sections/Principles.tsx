import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Principles() {
  return (
    <section className="border-t border-ink/10 py-20 md:py-28">
      <Container>
        <Eyebrow>How we think</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          The axioms behind every build.
        </h2>

        <div className="mt-12 grid gap-0 border-t border-ink/10 md:grid-cols-2">
          {siteConfig.principles.map((principle) => (
            <div
              key={principle.code}
              className="flex gap-5 border-b border-ink/10 py-8 md:odd:border-r md:odd:pr-10 md:even:pl-10"
            >
              <span className="font-mono text-sm text-cyan-600">
                AXIOM
                <br />
                {principle.code}
              </span>
              <div>
                <h3 className="font-display text-base font-semibold leading-snug text-ink">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
