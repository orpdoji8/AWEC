import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { homeContent } from "@/content/pages";
import { newsArticles } from "@/content/news";
import { focusAreas } from "@/content/areas";

export const metadata: Metadata = homeContent.metadata;
const selected = newsArticles.filter((article) =>
  ["HIST-001", "HIST-005", "HIST-015"].includes(article.id),
);

export default function HomePage() {
  return (
    <>
      <PageContainer className="grid gap-10 py-12 sm:py-20 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
        <div>
          <p className="eyebrow">{homeContent.hero.eyebrow}</p>
          <h1 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Learning and connection across borders.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
            {homeContent.hero.description}
          </p>
          <Link
            className="mt-8 inline-flex min-h-12 items-center rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground hover:bg-accent-hover"
            href="/news/historical-activities"
          >
            Explore historical activities{" "}
            <span className="ml-4" aria-hidden="true">
              →
            </span>
          </Link>
        </div>

          <figure className="min-w-0">
            <Image
              src="/images/yes-2026-june/homepage.jpg"
              width={2275}
              height={1280}
              alt="YES June group holding a banner beside an exhibition display"
              priority
              sizes="(min-width: 1024px) 600px, 100vw"
              className="h-auto w-full"
            />
            <figcaption className="mt-4 flex flex-wrap items-start justify-between gap-3 border-b border-border pb-4 text-sm leading-6 text-muted">
              <span className="max-w-sm">
                YES PROGRAM-JUNE, 2026
              </span>
              <Link className="text-link" href="/education/us-china/yes-2026-june">
                View activity →
              </Link>
            </figcaption>
          </figure>
      </PageContainer>
      <PageContainer className="pb-12">
        <Link href="/education/us-china/yes-2026-december" className="group flex flex-wrap items-center justify-between gap-4 border-y border-border py-6">
          <div><p className="eyebrow">Upcoming trip</p><h2 className="mt-2 text-2xl font-semibold">YES December 2026</h2></div>
          <span className="text-link">Explore &amp; register <span aria-hidden="true">&rarr;</span></span>
        </Link>
      </PageContainer>
      <section className="border-y border-border bg-surface">
        <PageContainer className="grid gap-8 py-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <p className="eyebrow">About the organization</p>
            <Link
              href="/about"
              className="text-link mt-5 inline-flex min-h-11 items-center"
            >
              Get to know AWEC →
            </Link>
          </div>
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              American West Educational Center
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-muted">
              {homeContent.introduction.description}{" "}
              {homeContent.introduction.body}
            </p>
          </div>
        </PageContainer>
      </section>
      <section>
        <PageContainer className="py-14 sm:py-20">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">From the archive</p>
              <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
                Visits, learning & exchange
              </h2>
            </div>
            <Link
              href="/news/historical-activities"
              className="text-link inline-flex min-h-11 items-center"
            >
              All activities →
            </Link>
          </div>
          <div className="mt-9 grid gap-9 md:grid-cols-3">
            {selected.map((article) => (
              <article key={article.id}>
                {article.featuredImage ? (
                  <Image
                    {...article.featuredImage}
                    alt={article.featuredImage.alt}
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="aspect-[16/9] w-full bg-surface-subtle object-contain"
                  />
                ) : null}
                <h3 className="mt-5 text-xl font-semibold leading-snug">
                  <Link
                    className="hover:text-accent"
                    href={`/news/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-7 text-muted">{article.summary}</p>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
      <section className="border-t border-border bg-surface-subtle" aria-labelledby="focus-areas">
        <PageContainer className="py-14 sm:py-20">
          <p className="eyebrow">Explore AWEC</p>
          <h2 id="focus-areas" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Business and Education</h2>
          <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-16">
            {focusAreas.map((area, index) => (
              <article key={area.href} className="border-t border-border pt-6">
                <p className="eyebrow" aria-hidden="true">0{index + 1}</p>
                <h3 className="mt-4 text-3xl font-semibold">{area.title}</h3>
                <p className="mt-4 max-w-lg leading-8 text-muted">{area.description}</p>
                <Link href={area.href} className="text-link mt-6 inline-flex min-h-11 items-center">
                  Explore {area.title} <span className="ml-3" aria-hidden="true">&rarr;</span>
                </Link>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
    </>
  );
}
