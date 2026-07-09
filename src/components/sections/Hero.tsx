import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="bg-axiom-grid bg-axiom-grid-fade absolute inset-0 h-[560px]" />

      <Container className="relative pb-20 pt-20 md:pb-28 md:pt-28">
        <Eyebrow>{hero.eyebrow}</Eyebrow>

        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-ink md:text-6xl">
          {hero.headline}
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
          {hero.subheadline}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <LinkButton href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </LinkButton>
          <LinkButton href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
