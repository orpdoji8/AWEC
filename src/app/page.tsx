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
      <PageContainer className="home-hero">
        <header className="home-masthead">
          <h1 className="home-title">
            <span>American West</span>
            <span>Educational Center</span>
          </h1>
          <p className="home-motto">
            Learning and Connecting<br className="hidden lg:block" /> across borders.
          </p>
        </header>
          <figure className="home-photograph">
            <Image
              src="/images/yes-2026-june/homepage.jpg"
              width={2275}
              height={1280}
              alt="YES June group holding a banner beside an exhibition display"
              priority
              sizes="(min-width: 1344px) 1280px, 100vw"
              className="home-hero-image"
            />
            <figcaption className="home-photo-caption">
              <span className="max-w-sm">
                YES PROGRAM-JUNE, 2026
              </span>
              <Link className="text-link" href="/education/us-china/yes-2026-june">
                View activity →
              </Link>
            </figcaption>
          </figure>
        <div className="home-hero-summary">
          <p>{homeContent.hero.description}</p>
          <Link className="editorial-button" href="/news/historical-activities">
            Explore historical activities <span aria-hidden="true">→</span>
          </Link>
        </div>
      </PageContainer>
      <section className="december-feature site-chrome" aria-labelledby="december-title">
        <PageContainer>
        <Link href="/education/us-china/yes-2026-december" className="home-invitation-link" aria-labelledby="december-title december-action" aria-describedby="december-status december-photo-note">
          <div className="december-copy">
            <h2 id="december-title" className="december-title"><span className="december-program">YES</span>{" "}<span>December</span>{" "}<em>2026</em></h2>
            <div id="december-status" className="december-details">
              <p className="font-semibold text-accent">Applications Now Open! <span aria-hidden="true">⭐</span> <span lang="zh-Hans">现已开放申请!</span></p>
              <p>Join Us! Limited Spots Available! <span lang="zh-Hans">欢迎加入！名额有限!</span></p>
            </div>
            <span id="december-action" className="december-action">Explore &amp; register <span aria-hidden="true">↗︎</span></span>
          </div>
          <figure className="december-visuals">
            <div className="december-photo-pair">
              <Image src="/images/yes-2026-december/welcome.webp" alt="Group holding an AWEC banner beneath a welcome sign on a previous trip" width={1800} height={1013} sizes="(min-width: 1024px) 36vw, 72vw" className="december-group-photo" />
              <Image src="/images/yes-2026-december/tower.webp" alt="Group on the steps beneath a tower during a previous trip" width={750} height={1000} sizes="(min-width: 1024px) 13vw, 24vw" className="december-tower-photo" />
            </div>
            <figcaption id="december-photo-note">Photos from previous trips.</figcaption>
          </figure>
        </Link>
        </PageContainer>
      </section>
      <section className="home-introduction border-y border-border bg-surface">
        <PageContainer className="home-section home-introduction-grid">
          <div className="home-introduction-mark">
            <Image src="/images/brand/awec-logo-transparent.png" width={1254} height={1254} alt="American West Educational Center logo" className="h-auto w-24 sm:w-28" />
            <Link
              href="/about"
              className="text-link inline-flex min-h-11 items-center"
            >
              Get to know AWEC →
            </Link>
          </div>
          <div>
            <h2 className="home-section-title">
              American West Educational Center
            </h2>
            <p className="mt-4 max-w-3xl leading-8 text-muted">
              {homeContent.introduction.description}{" "}
              {homeContent.introduction.body}
            </p>
          </div>
        </PageContainer>
      </section>
      <section className="home-archive site-chrome" aria-labelledby="activity-showcase-title">
        <PageContainer className="home-section">
          <div className="archive-heading">
            <div>
              <h2 id="activity-showcase-title" className="home-section-title">
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
          <div className="home-activity-grid">
            {selected.map((article, index) => (
              <article key={article.id} className={`home-activity ${index === 0 ? "home-activity-featured" : "home-activity-supporting"}`}>
                {article.featuredImage ? (
                  <Link href={`/news/${article.slug}`} className="activity-image-link" aria-label={article.title}>
                  <Image
                    {...article.featuredImage}
                    alt={article.featuredImage.alt}
                    sizes={index === 0 ? "(min-width: 1024px) 52vw, 100vw" : "(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"}
                    className="h-auto w-full"
                  />
                  </Link>
                ) : null}
                <div className="activity-copy">
                <h3>
                  <Link
                    className="hover:text-accent"
                    href={`/news/${article.slug}`}
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-3 leading-7 text-muted">{article.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </PageContainer>
      </section>
      <section className="border-t border-border bg-surface-subtle" aria-labelledby="focus-areas">
        <PageContainer className="home-section">
          <h2 id="focus-areas" className="sr-only">Education</h2>
          <div>
            {focusAreas.map((area) => (
              <article key={area.href} className="grid gap-x-16 border-t border-border pt-6 md:grid-cols-[1fr_2fr]">
                <h3 className="text-3xl lg:text-4xl font-semibold">{area.title}</h3>
                <p className="mt-4 max-w-2xl leading-8 text-muted md:mt-0">{area.description}</p>
                <Link href={area.href} className="text-link mt-6 inline-flex min-h-11 items-center justify-self-start md:col-start-2">
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
