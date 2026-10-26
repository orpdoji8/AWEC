import type { Metadata } from "next";
import { ContactFormEmbed } from "@/components/forms/ContactFormEmbed";
import { PageContainer } from "@/components/ui/PageContainer";
import { contactContent } from "@/content/pages";

export const metadata: Metadata = contactContent.metadata;
export default function ContactPage() {
  return (
    <PageContainer className="grid gap-12 py-12 sm:py-18 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
      <div>
        <header>
          <p className="eyebrow">American West Educational Center</p>
          <h1 className="page-title mt-4">Contact us</h1>
          <p className="mt-5 text-lg leading-8 text-muted">
            Get in touch with American West Educational Center by email or phone.
          </p>
        </header>
        <section className="mt-10" aria-labelledby="contact-channels">
          <h2 id="contact-channels" className="eyebrow lg:text-sm">
            Contact details
          </h2>
          <dl className="mt-4 divide-y divide-border">
            {contactContent.channels.items.map((item) => (
              <div key={item.label} className="py-5">
                <dt className="font-semibold">{item.label}</dt>
                <dd className="mt-2 leading-7 text-muted">
                  {item.href ? <a href={item.href} className="text-link break-words">{item.value}</a> : item.value}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
      <div className="min-w-0 border-t border-border pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
        <ContactFormEmbed />
      </div>
    </PageContainer>
  );
}
