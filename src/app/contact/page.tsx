import type { Metadata } from "next";
import { ContactFormShell } from "@/components/forms/ContactFormShell";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PageContainer } from "@/components/ui/PageContainer";
import { contactContent } from "@/content/pages";

export const metadata: Metadata = contactContent.metadata;

export default function ContactPage() {
  return (
    <>
      <section aria-labelledby="contact-heading">
        <PageContainer className="py-16 sm:py-22">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {contactContent.intro.eyebrow}
            </p>
            <h1
              id="contact-heading"
              className="text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {contactContent.intro.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {contactContent.intro.description}
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-border bg-surface-subtle">
        <PageContainer className="grid gap-8 py-16 sm:py-22 lg:grid-cols-[minmax(0,1.15fr)_minmax(20rem,0.85fr)] lg:items-start">
          <ContactFormShell {...contactContent.form} />
          <div>
            <SectionIntro {...contactContent.channels} />
            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactContent.channels.items.map((item) => (
                <FeatureCard
                  key={item.label}
                  title={item.label}
                  description={item.value}
                />
              ))}
            </div>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="py-14 sm:py-18">
          <div className="max-w-3xl rounded-lg border border-border bg-surface p-7 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-[-0.02em] text-foreground">
              {contactContent.response.title}
            </h2>
            <p className="mt-3 leading-7 text-muted">
              {contactContent.response.description}
            </p>
          </div>
        </PageContainer>
      </section>
    </>
  );
}
