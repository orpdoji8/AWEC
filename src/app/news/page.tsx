import type { Metadata } from "next";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { newsPageContent, newsSections } from "@/content/news";
import { PastYesList } from "@/components/news/PastYesList";

export const metadata: Metadata = newsPageContent.metadata;

export default function NewsPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <header className="grid items-end gap-6 border-b border-border pb-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Activity collections</p>
          <h1 className="page-title mt-4">News &amp; Activities</h1>
        </div>
        <p className="max-w-xl text-lg leading-8 text-muted">{newsPageContent.intro.description}</p>
      </header>
      <section className="mt-12" aria-label="Activity collections">
        <ul className="grid gap-10 md:grid-cols-2 md:gap-16">
          {newsSections.map((section, index) => (
            <li key={section.href}>
              <Link href={section.href} className="group block border-b border-border py-6">
                <p className="eyebrow" aria-hidden="true">0{index + 1}</p>
                <h2 className="mt-4 flex items-center justify-between gap-4 text-3xl font-semibold group-hover:text-accent">
                  {section.title}<span aria-hidden="true">&rarr;</span>
                </h2>
                <p className="mt-4 leading-7 text-muted">{section.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="mt-14" aria-labelledby="past-yes-programs">
        <h2 id="past-yes-programs" className="mb-8 text-3xl font-semibold">Past YES Programs</h2>
        <PastYesList />
      </section>
    </PageContainer>
  );
}
