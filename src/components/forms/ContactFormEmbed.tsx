const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLScfXnzv18eZc3fj_tzWQhgax72x9QDWSPT_ty21uFDQebT2cA/viewform";

export function ContactFormEmbed() {
  return (
    <section aria-labelledby="inquiry-form-heading">
      <h2 id="inquiry-form-heading" className="text-2xl font-semibold sm:text-3xl lg:text-4xl">Send an inquiry</h2>
      <p className="mt-3 leading-7 text-muted">Google sign-in may be required.</p>
      <a href={formUrl} target="_blank" rel="noopener noreferrer" className="text-link mt-4 inline-flex min-h-11 items-center">Open form in a new tab &rarr;</a>
      <iframe
        src={`${formUrl}?embedded=true`}
        title="AWEC Contact and Inquiries Google Form"
        className="mt-5 h-[1500px] w-full border-0 sm:h-[1350px]"
      />
    </section>
  );
}
