import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AboutSectionNavigation } from "@/components/ui/AboutSectionNavigation";
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
    <PageContainer className="about-page py-12 sm:py-18">
      <header className="about-header border-b border-border pb-10">
        <h1 className="page-title about-title">American West<br className="hidden sm:block" /> Educational Center</h1>
      </header>
      <div className="about-layout">
        <AboutSectionNavigation chapters={chapters} />
        <div className="about-editorial-content min-w-0 max-w-3xl">
          <section id="overview" className="about-editorial-section scroll-mt-8">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight"><span className="about-editorial-heading-text">A bridge between the United States and China</span></h2>
            <p className="mt-5 text-lg leading-8 text-muted">{aboutContent.overview.description}</p>
            <p className="mt-5 leading-8 text-muted">{aboutContent.overview.body}</p>
          </section>
          <section id="direction" className="about-editorial-section scroll-mt-8">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight"><span className="about-editorial-heading-text">{aboutContent.mission.statement}</span></h2>
            <p className="mt-5 leading-8 text-muted">{aboutContent.mission.description}</p>
          </section>
          <section id="focus" className="about-editorial-section scroll-mt-8">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight"><span className="about-editorial-heading-text">Learning through connection</span></h2>
            <dl className="mt-7 space-y-7">
              {aboutContent.activities.map((item) => (
                <div key={item.title}><dt className="text-xl font-semibold">{item.title}</dt><dd className="mt-2 leading-8 text-muted">{item.description}</dd></div>
              ))}
            </dl>
            <Link href="/education" className="text-link mt-7 inline-block">Explore Education &rarr;</Link>
          </section>
          <section id="recognition" className="about-editorial-section scroll-mt-8">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight"><span className="about-editorial-heading-text">Certificates of Recognition</span></h2>
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
