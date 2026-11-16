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
    </figure>
  );
}

export default function YesJunePage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/education/us-china">Back to YES</BackLink>
      <header className="pb-9 pt-12">
        <div>
          <h1 className="text-5xl font-semibold leading-none tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            YES 2026 <span className="block font-serif font-normal italic">June</span>
          </h1>
        </div>
      </header>
      <Photo number={7} wide priority />
      <nav aria-label="Photo chapters" className="mt-4 flex flex-wrap gap-x-8 gap-y-3 border-y border-border py-6">
        {yesJuneChapters.map((chapter) => (
          <a key={chapter.id} href={`#${chapter.id}`} className="text-link">{chapter.title}</a>
        ))}
      </nav>
      {yesJuneChapters.map((chapter) => (
        <section key={chapter.id} id={chapter.id} aria-labelledby={`${chapter.id}-title`} className="scroll-mt-8 pt-12 sm:pt-18">
          <header className="mb-8">
            <h2 id={`${chapter.id}-title`} className="text-3xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">{chapter.title}</h2>
          </header>
          <div className="grid items-start gap-x-7 gap-y-10 md:grid-cols-2">
            {chapter.photos.map((number, photoIndex) => <Photo key={number} number={number} wide={photoIndex === 0} />)}
          </div>
        </section>
      ))}
      <div className="mt-16 border-t border-border pt-10">
        <BackLink href="/education/us-china">Back to YES</BackLink>
      </div>
    </PageContainer>
  );
}
