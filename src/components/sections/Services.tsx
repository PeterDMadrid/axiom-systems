import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function Services() {
  return (
    <section id="services" className="border-t border-ink/10 bg-cyan-25 py-20 md:py-28">
      <Container>
        <Eyebrow>Services</Eyebrow>
        <h2 className="mt-4 max-w-xl font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          What we build.
        </h2>

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service) => (
            <div key={service.id} className="flex flex-col bg-white p-7">
              <h3 className="font-display text-lg font-semibold text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {service.description}
              </p>
              <ul className="mt-5 space-y-2 border-t border-ink/10 pt-5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-xs text-ink-soft"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-500" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
