import type { Metadata } from "next";
import Image from "next/image";
import { BackLink } from "@/components/ui/BackLink";
import { PageContainer } from "@/components/ui/PageContainer";

export const metadata: Metadata = {
  title: "YES December 2026",
  description: "Restart the December YES trip to China with AWEC.",
};

// Owner-supplied application destinations.
const registrationUrl = "https://forms.gle/kR6SSRbzr779fTuS7";
const visaUrl = "https://consular.mfa.gov.cn/VISA/";

export default function YesDecemberPage() {
  return (
    <PageContainer className="py-12 sm:py-18">
      <BackLink href="/education/us-china">Back to YES</BackLink>
      <section className="mt-10 grid items-start gap-12 lg:grid-cols-2 lg:gap-14">
        <div className="min-w-0 lg:col-start-2 lg:row-start-1">
          <p className="eyebrow">China / December 2026</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            YES <span className="block">December</span> <span className="block font-serif font-normal italic text-accent">2026</span>
          </h1>
          <p className="mt-7 max-w-md text-xl leading-8 text-muted">Restart the December YES trip to China with AWEC.</p>
          <div className="mt-9">
            <a href={registrationUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-5 rounded-md bg-accent px-6 py-6 text-accent-foreground hover:bg-accent-hover sm:px-7">
              <span className="text-2xl font-bold leading-tight sm:text-3xl">Register for YES<span className="mt-2 block text-xl font-semibold sm:text-2xl">December 2026</span></span>
              <span aria-hidden="true" className="shrink-0 text-4xl">&#8599;</span>
            </a>
            <p className="mt-3 text-sm leading-6 text-muted">Opens Google Forms in a new tab. Google sign-in is required.</p>
          </div>
          <div className="mt-8 border-t border-border pt-7">
            <a href={visaUrl} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-4 rounded-sm py-2 text-accent hover:text-accent-hover">
              <span>
                <span lang="zh-Hans" className="block text-2xl font-bold leading-snug sm:text-3xl">中国签证在线办理</span>
                <span className="mt-3 block text-2xl font-bold leading-tight underline decoration-1 underline-offset-8 sm:text-3xl">China Online VISA Application (COVA)</span>
              </span>
              <span aria-hidden="true" className="shrink-0 text-4xl">&#8599;</span>
            </a>
            <p className="mt-4 text-sm leading-6 text-muted">Opens the consular visa application website in a new tab.</p>
          </div>
        </div>
        <section aria-labelledby="trip-leader" className="min-w-0 lg:col-start-1 lg:row-start-1">
          <p className="eyebrow">Meet your trip leader</p>
          <Image src="/images/yes-2026-december/ryan-allen.jpg" alt="Ryan Allen, PhD" width={318} height={406} priority sizes="318px" className="mt-6 h-auto w-full max-w-[318px]" />
          <h2 id="trip-leader" className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl">Ryan Allen, PhD</h2>
          <p className="mt-3 max-w-lg text-xl font-semibold leading-8 text-accent">Associate Professor of Comparative and International Education and Leadership</p>
          <p className="mt-3 text-lg text-muted">Soka University of America</p>
          <p className="mt-6 max-w-lg text-xl leading-8">Dr. Ryan Allen from Soka University will be leading the group on the December China trip.</p>
          <a href="https://www.soka.edu/about/faculty-staff/ryan-allen" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-link">View Soka faculty profile <span aria-hidden="true">&#8599;</span><span className="sr-only"> (opens in a new tab)</span></a>
          <p className="mt-2 text-sm text-muted">Portrait source: Soka University of America.</p>
        </section>
      </section>
      <section aria-label="Photos from previous trips" className="mt-16 border-t border-border pt-8 sm:mt-20">
        <p className="mb-6 text-sm leading-6 text-muted">Photos from previous trips, shared as a glimpse of the experience.</p>
        <div className="grid items-center gap-5 md:grid-cols-[1.78fr_1.34fr_0.75fr]">
          <Image src="/images/yes-2026-december/welcome.webp" alt="Group holding an AWEC banner beneath a welcome sign on a previous trip" width={1800} height={1013} sizes="(min-width: 768px) 46vw, 100vw" className="h-auto w-full" />
            <Image src="/images/yes-2026-december/registration-group.png" alt="Group in matching yellow shirts posing in front of a green display" width={461} height={345} sizes="(min-width: 768px) 35vw, 100vw" className="h-auto w-full" />
            <Image src="/images/yes-2026-december/tower.webp" alt="Group on the steps beneath a tower during a previous trip" width={750} height={1000} sizes="(min-width: 768px) 19vw, 100vw" className="h-auto w-full" />
        </div>
      </section>
    </PageContainer>
  );
}
