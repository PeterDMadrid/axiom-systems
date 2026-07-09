"use client";

import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site.config";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const { contact } = siteConfig;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => null);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section id="contact" className="border-t border-ink/10 py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {contact.heading}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {contact.subheading}
          </p>

          <div className="mt-8 space-y-1 border-t border-ink/10 pt-6">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-soft/70">
              Email
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-ink transition-colors hover:text-cyan-700"
            >
              {contact.email}
            </a>
          </div>
          <p className="mt-4 text-xs text-ink-soft/70">{contact.responseTime}</p>
        </div>

        {status === "success" ? (
          <div className="flex flex-col justify-center rounded-sm border border-cyan-200 bg-cyan-25 p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-700">
              Sent
            </p>
            <p className="mt-3 text-base text-ink">
              Thanks — your inquiry is in. We'll follow up at the email you provided.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" required autoComplete="name" />
              <Field
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
              />
            </div>

            <Field label="Company (optional)" name="company" autoComplete="organization" />

            <div className="grid gap-5 sm:grid-cols-2">
              <SelectField
                label="Project type"
                name="projectType"
                options={contact.projectTypeOptions}
              />
              <SelectField
                label="Budget (optional)"
                name="budget"
                options={contact.budgetOptions}
                includeEmpty
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft/70"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-2 w-full rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan-500"
                placeholder="What are you looking to build?"
              />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            <Button type="submit" disabled={status === "submitting"}>
              {status === "submitting" ? "Sending…" : "Send inquiry"}
            </Button>
          </form>
        )}
      </Container>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft/70"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-2 w-full rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan-500"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  includeEmpty,
}: {
  label: string;
  name: string;
  options: string[];
  includeEmpty?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block font-mono text-xs uppercase tracking-[0.15em] text-ink-soft/70"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-2 w-full rounded-sm border border-ink/15 bg-white px-3 py-2.5 text-sm text-ink outline-none transition-colors focus:border-cyan-500"
      >
        {includeEmpty && <option value="" disabled hidden />}
        {!includeEmpty && (
          <option value="" disabled hidden>
            Select one
          </option>
        )}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
