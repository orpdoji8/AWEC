import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { aboutContent } from "@/content/pages";

export const metadata: Metadata = aboutContent.metadata;
const chapters = [
  { id: "overview", title: "Overview" },
  { id: "direction", title: "Our mission" },
  { id: "focus", title: "Education & exchange" },
  { id: "recognition", title: "Recognition" },
];

export default function AboutPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <header className="max-w-4xl border-b border-border pb-10">
        <p className="eyebrow">About the organization</p>
        <h1 className="page-title mt-4">American West<br className="hidden sm:block" /> Educational Center</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{aboutContent.intro.description}</p>
      </header>
      <div className="mt-10 grid gap-10 lg:grid-cols-[14rem_minmax(0,1fr)] lg:gap-20">
        <nav aria-label="About page sections" className="lg:sticky lg:top-8 lg:self-start">
          <p className="eyebrow">On this page</p>
          <ol className="mt-4 grid gap-x-5 sm:grid-cols-2 lg:grid-cols-1">
            {chapters.map((item, index) => (
              <li key={item.id}><a href={`#${item.id}`} className="flex min-h-11 items-center gap-3 text-sm text-muted hover:text-accent"><span className="text-accent" aria-hidden="true">0{index + 1}</span>{item.title}</a></li>
            ))}
          </ol>
        </nav>
        <div className="min-w-0 max-w-3xl">
          <section id="overview" className="scroll-mt-8 pb-12">
            <p className="eyebrow">01 / Overview</p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight">A bridge between the United States and China</h2>
            <p className="mt-5 text-lg leading-8 text-muted">{aboutContent.overview.description}</p>
            <p className="mt-5 leading-8 text-muted">{aboutContent.overview.body}</p>
          </section>
          <section id="direction" className="scroll-mt-8 border-t border-border py-12">
            <p className="eyebrow">02 / Our mission</p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight">{aboutContent.mission.statement}</h2>
            <p className="mt-5 leading-8 text-muted">{aboutContent.mission.description}</p>
          </section>
          <section id="focus" className="scroll-mt-8 border-t border-border py-12">
            <p className="eyebrow">03 / Education &amp; exchange</p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight">Learning through connection</h2>
            <dl className="mt-7 space-y-7">
              {aboutContent.activities.map((item) => (
                <div key={item.title}><dt className="text-xl font-semibold">{item.title}</dt><dd className="mt-2 leading-8 text-muted">{item.description}</dd></div>
              ))}
            </dl>
            <Link href="/education" className="text-link mt-7 inline-block">Explore Education &rarr;</Link>
          </section>
          <section id="recognition" className="scroll-mt-8 border-t border-border py-12">
            <p className="eyebrow">04 / Recognition</p>
            <h2 className="mt-4 text-3xl lg:text-4xl font-semibold tracking-tight">Certificates of Recognition</h2>
            <p className="mt-5 leading-8 text-muted">Recognition from the California State Assembly for contributions to education and the community.</p>
            <div className="mt-8 grid items-start gap-10 md:grid-cols-2">
              {aboutContent.recognition.map((item) => (
                <figure key={item.src}>
                  <a href={item.src} target="_blank" rel="noopener noreferrer" className="block" aria-label={`View certificate for ${item.title}, ${item.date} (new tab)`}>
                    <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw" className="h-auto w-full bg-white" />
                  </a>
                  <figcaption className="mt-5"><p className="eyebrow">{item.date}</p><h3 className="mt-2 text-xl lg:text-2xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{item.description}</p><a href={item.src} target="_blank" rel="noopener noreferrer" className="text-link mt-3 inline-block text-sm">View certificate<span className="sr-only"> for {item.title} (new tab)</span> &rarr;</a></figcaption>
                </figure>
              ))}
            </div>
          </section>
          <Link href="/news/historical-activities" className="text-link inline-flex min-h-12 items-center border-t border-border pt-6">Explore the historical activity archive &rarr;</Link>
        </div>
      </div>
    </PageContainer>
  );
}
