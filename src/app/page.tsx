import type { Metadata } from "next";
import Link from "next/link";
import { CallToAction } from "@/components/sections/CallToAction";
import { SectionIntro } from "@/components/sections/SectionIntro";
import { TemporaryContentNotice } from "@/components/sections/TemporaryContentNotice";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PageContainer } from "@/components/ui/PageContainer";
import { homeContent } from "@/content/pages";

export const metadata: Metadata = homeContent.metadata;

export default function HomePage() {
  return (
    <>
      <section aria-labelledby="home-heading">
        <PageContainer className="py-18 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              {homeContent.hero.eyebrow}
            </p>
            <h1
              id="home-heading"
              className="text-balance text-4xl font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-5xl lg:text-6xl"
            >
              {homeContent.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              {homeContent.hero.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground transition-colors hover:bg-accent-hover"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-accent bg-surface px-6 py-3 font-semibold text-accent transition-colors hover:bg-surface-subtle hover:text-accent-hover"
              >
                Contact
              </Link>
            </div>
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-border bg-surface">
        <PageContainer className="grid gap-8 py-14 sm:py-18 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:items-center">
          <SectionIntro {...homeContent.introduction} />
          <TemporaryContentNotice>
            {homeContent.introduction.body}
          </TemporaryContentNotice>
        </PageContainer>
      </section>

      <section>
        <PageContainer className="py-16 sm:py-22">
          <SectionIntro {...homeContent.focus} />
          <div className="mt-9 grid gap-5 md:grid-cols-3">
            {homeContent.focus.items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </PageContainer>
      </section>

      <section className="border-y border-border bg-surface-subtle">
        <PageContainer className="py-16 sm:py-22">
          <div className="grid gap-6 lg:grid-cols-2">
            {[homeContent.operations, homeContent.news].map((preview) => {
              const isOperations = preview === homeContent.operations;
              return (
                <section
                  key={preview.title}
                  className="flex flex-col rounded-lg border border-border bg-surface p-7 sm:p-8"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
                    {preview.eyebrow}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl">
                    {preview.title}
                  </h2>
                  <p className="mt-4 flex-1 leading-7 text-muted">
                    {preview.description}
                  </p>
                  <Link
                    href={isOperations ? "/operations" : "/news"}
                    className="mt-6 inline-flex min-h-11 items-center self-start rounded-md font-semibold text-accent hover:text-accent-hover"
                  >
                    {isOperations ? "View Business Operations" : "View News"}
                  </Link>
                </section>
              );
            })}
          </div>
        </PageContainer>
      </section>

      <CallToAction
        {...homeContent.contact}
        href="/contact"
        linkLabel="Visit Contact"
      />
    </>
  );
}
