import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { aboutContent } from "@/content/pages";

export const metadata: Metadata = aboutContent.metadata;
const chapters = [
  { id: "overview", title: "Overview" },
  { id: "direction", title: "Mission & vision" },
  { id: "focus", title: "Educational focus" },
  { id: "background", title: "Background & people" },
];

export default function AboutPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <header className="max-w-4xl border-b border-border pb-10">
        <p className="eyebrow">About the organization</p>
        <h1 className="page-title mt-4">
          American West
          <br className="hidden sm:block" /> Educational Center
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {aboutContent.intro.description}
        </p>
      </header>
      <div className="mt-10 grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
        <nav
          aria-label="About page sections"
          className="lg:sticky lg:top-8 lg:self-start"
        >
          <p className="eyebrow">On this page</p>
          <ol className="mt-4 grid gap-x-5 sm:grid-cols-2 lg:grid-cols-1">
            {chapters.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex min-h-11 items-center gap-3 text-sm text-muted hover:text-accent"
                >
                  <span className="text-accent" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="min-w-0 max-w-3xl">
          <section id="overview" className="scroll-mt-8 pb-12">
            <p className="eyebrow">01 / Overview</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              The organization’s story
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted">
              {aboutContent.overview.description}
            </p>
            <p className="mt-5 border-l-2 border-accent pl-5 text-sm leading-7 text-muted">
              Company information on this page is awaiting client approval.
            </p>
          </section>
          <section
            id="direction"
            className="scroll-mt-8 border-t border-border py-12"
          >
            <p className="eyebrow">02 / Direction</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Mission & vision
            </h2>
            <dl className="mt-7 space-y-7">
              {aboutContent.direction.map((item) => (
                <div
                  key={item.title}
                  className="grid gap-2 sm:grid-cols-[7rem_1fr]"
                >
                  <dt className="font-semibold">{item.title}</dt>
                  <dd className="leading-8 text-muted">{item.description}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section
            id="focus"
            className="scroll-mt-8 border-t border-border py-12"
          >
            <p className="eyebrow">03 / Educational focus</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              Themes for future content
            </h2>
            <p className="mt-5 leading-8 text-muted">
              {aboutContent.educationalFocus.description}
            </p>
            <ul className="mt-7 space-y-4">
              {aboutContent.educationalFocus.items.map((item) => (
                <li key={item} className="flex gap-4 text-xl font-medium">
                  <span className="text-accent" aria-hidden="true">
                    —
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
          <section
            id="background"
            className="scroll-mt-8 border-t border-border py-12"
          >
            <p className="eyebrow">04 / Background & people</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              History and the people behind it
            </h2>
            <p className="mt-5 leading-8 text-muted">
              {aboutContent.background.description}
            </p>
            <h3 className="mt-8 text-xl font-semibold">Team & leadership</h3>
            <p className="mt-3 leading-8 text-muted">
              {aboutContent.team.description}
            </p>
          </section>
          <Link
            href="/news"
            className="text-link inline-flex min-h-12 items-center border-t border-border pt-6"
          >
            Explore the historical activity archive →
          </Link>
        </div>
      </div>
    </PageContainer>
  );
}
