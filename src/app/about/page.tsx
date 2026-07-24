import type { Metadata } from "next";
import { CallToAction } from "@/components/sections/CallToAction";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TemporaryContentNotice } from "@/components/sections/TemporaryContentNotice";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PageContainer } from "@/components/ui/PageContainer";
import { aboutContent } from "@/content/pages";

export const metadata: Metadata = aboutContent.metadata;

export default function AboutPage() {
  return (
    <>
      <section aria-labelledby="about-heading">
        <PageContainer className="py-16 sm:py-22">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {aboutContent.intro.eyebrow}
            </p>
            <h1
              id="about-heading"
              className="text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {aboutContent.intro.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {aboutContent.intro.description}
            </p>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-border bg-surface">
        <PageContainer className="py-14 sm:py-18">
          <SectionIntro {...aboutContent.overview} />
          <div className="mt-7 max-w-3xl">
            <TemporaryContentNotice>
              This section is prepared for client-supplied organization material.
            </TemporaryContentNotice>
          </div>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="py-16 sm:py-22">
          <div className="grid gap-5 md:grid-cols-2">
            {aboutContent.direction.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-border bg-surface-subtle">
        <PageContainer className="py-16 sm:py-22">
          <SectionIntro {...aboutContent.educationalFocus} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {aboutContent.educationalFocus.items.map((item) => (
              <li
                key={item}
                className="rounded-md border border-border bg-surface px-5 py-6 text-lg font-semibold text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="grid gap-10 py-16 sm:py-22 lg:grid-cols-2">
          <SectionIntro {...aboutContent.background} />
          <div className="rounded-lg border border-border bg-surface p-7 sm:p-8">
            <SectionIntro {...aboutContent.team} />
            <div className="mt-6">
              <TemporaryContentNotice>
                No team profiles are published until names, roles, and biographies are approved.
              </TemporaryContentNotice>
            </div>
          </div>
        </PageContainer>
      </section>

      <CallToAction
        {...aboutContent.contact}
        href="/contact"
        linkLabel="Go to Contact"
      />
    </>
  );
}
