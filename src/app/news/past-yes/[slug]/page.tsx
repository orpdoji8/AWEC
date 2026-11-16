import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";
import { pastYesGalleries } from "@/content/past-yes";
import galleryPhotos from "@/content/past-yes-photos.json";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return pastYesGalleries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = pastYesGalleries.find((item) => item.slug === slug);
  if (!program) notFound();
  return { title: program.title, description: `Photographs from ${program.title}.` };
}

export default async function PastYesProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = pastYesGalleries.find((item) => item.slug === slug);
  if (!program) notFound();
  const photos = galleryPhotos[program.slug];

  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/news/past-yes">Back to Past YES</BackLink>
      <header className="pb-10 pt-12">
        <div>
          <h1 className="page-title">{program.title}</h1>
        </div>
      </header>
      <div className="grid items-start gap-x-7 gap-y-10 md:grid-cols-2">
        {photos.map((photo, index) => {
          const wide = photo.width >= photo.height && (index === 0 || index % 9 === 0);
          return (
            <figure key={photo.src} className={wide ? "min-w-0 md:col-span-2" : "min-w-0"}>
              <a href={photo.src} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Open ${program.title} photograph ${index + 1} (new tab)`}>
                <Image {...photo} alt={photo.alt} priority={index === 0} sizes={wide ? "(min-width: 1200px) 1152px, 100vw" : "(min-width: 1200px) 562px, (min-width: 768px) 50vw, 100vw"} className="h-auto w-full bg-surface-subtle" />
              </a>
            </figure>
          );
        })}
      </div>
      <div className="mt-16 border-t border-border pt-10">
        <BackLink href="/news/past-yes">Back to Past YES</BackLink>
      </div>
    </PageContainer>
  );
}
