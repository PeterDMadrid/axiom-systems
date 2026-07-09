import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function About() {
  const { about } = siteConfig;

  return (
    <section id="approach" className="border-t border-ink/10 py-20 md:py-28">
      <Container className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-16">
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {about.heading}
          </h2>
        </div>

        <div className="space-y-5">
          {about.body.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-ink-soft">
              {paragraph}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
