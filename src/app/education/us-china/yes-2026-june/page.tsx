import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";
import { yesJuneChapters, yesJunePhotos } from "@/content/yes-june";

export const metadata: Metadata = {
  title: "YES 2026 June",
  description: "YES 2026 June photo journal: visits, culture, and time together.",
};

function Photo({ number, wide = false, priority = false }: { number: number; wide?: boolean; priority?: boolean }) {
  const photo = yesJunePhotos[number - 1];
  return (
    <figure className={wide ? "min-w-0 md:col-span-2" : "min-w-0"}>
      <a href={photo.src} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open photograph: ${photo.alt} (new tab)`}>
        <Image {...photo} alt={photo.alt} priority={priority} sizes={wide ? "(min-width: 1200px) 1152px, 100vw" : "(min-width: 768px) 50vw, 100vw"} className="h-auto w-full bg-surface-subtle" />
      </a>
      <figcaption className="pt-3 text-sm text-muted">placeholder</figcaption>
    </figure>
  );
}

export default function YesJunePage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/education/us-china">Back to YES</BackLink>
      <header className="grid items-end gap-8 pb-9 pt-12 md:grid-cols-[1.5fr_1fr] md:gap-12">
        <div>
          <p className="eyebrow">YES / Photo journal</p>
          <h1 className="mt-5 text-5xl font-semibold leading-none tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            YES 2026 <span className="block font-serif font-normal italic">June</span>
          </h1>
        </div>
        <div className="max-w-sm text-muted">
          <p>A collection of moments.</p>
          <p className="mt-4 leading-7">25 photographs, arranged in three visual chapters. Select any photograph to open its full view.</p>
        </div>
      </header>
      <Photo number={7} wide priority />
      <nav aria-label="Photo chapters" className="mt-4 flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-6">
        {yesJuneChapters.map((chapter, index) => (
          <a key={chapter.id} href={`#${chapter.id}`} className="text-link">0{index + 1} {chapter.title}</a>
        ))}
      </nav>
      {yesJuneChapters.map((chapter, index) => (
        <section key={chapter.id} id={chapter.id} aria-labelledby={`${chapter.id}-title`} className="scroll-mt-8 pt-12 sm:pt-18">
          <header className="mb-8 md:grid md:grid-cols-[1fr_2fr] md:gap-x-10">
            <p className="eyebrow md:row-span-2">0{index + 1} / Photo chapter</p>
            <h2 id={`${chapter.id}-title`} className="my-3 text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{chapter.title}</h2>
            <p className="leading-7 text-muted">{chapter.description}</p>
          </header>
          <div className="grid items-start gap-x-7 gap-y-10 md:grid-cols-2">
            {chapter.photos.map((number, photoIndex) => <Photo key={number} number={number} wide={photoIndex === 0} />)}
          </div>
        </section>
      ))}
      <div className="mt-16 border-t border-border pt-10">
        <p className="mb-6 text-muted">End of the photo journal · 25 photographs</p>
        <BackLink href="/education/us-china">Back to YES</BackLink>
      </div>
    </PageContainer>
  );
}
