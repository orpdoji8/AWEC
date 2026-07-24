type ContactFormShellProps = {
  title: string;
  description: string;
  status: string;
  categories: readonly string[];
};

const fieldClassName =
  "mt-2 min-h-12 w-full rounded-md border border-border bg-surface px-4 py-3 text-foreground disabled:cursor-not-allowed disabled:bg-surface-subtle disabled:text-muted disabled:opacity-100";

export function ContactFormShell({
  title,
  description,
  status,
  categories,
}: ContactFormShellProps) {
  return (
    <section aria-labelledby="inquiry-form-heading">
      <div className="rounded-lg border border-border bg-surface p-6 shadow-sm sm:p-8">
        <h2
          id="inquiry-form-heading"
          className="text-2xl font-semibold tracking-[-0.02em] text-foreground sm:text-3xl"
        >
          {title}
        </h2>
        <p className="mt-3 leading-7 text-muted">{description}</p>
        <p
          id="form-disabled-status"
          className="mt-5 rounded-md border border-border bg-surface-subtle px-4 py-3 text-sm leading-6 text-muted"
        >
          {status}
        </p>

        <form className="mt-7" aria-describedby="form-disabled-status">
          <fieldset disabled className="grid gap-5 sm:grid-cols-2">
            <legend className="sr-only">Disabled inquiry form preview</legend>
            <div>
              <label htmlFor="name" className="font-medium text-foreground">
                Name
              </label>
              <input id="name" name="name" type="text" className={fieldClassName} />
            </div>
            <div>
              <label htmlFor="email" className="font-medium text-foreground">
                Email
              </label>
              <input id="email" name="email" type="email" className={fieldClassName} />
            </div>
            <div>
              <label htmlFor="organization" className="font-medium text-foreground">
                Organization <span className="font-normal text-muted">(optional)</span>
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className={fieldClassName}
              />
            </div>
            <div>
              <label htmlFor="category" className="font-medium text-foreground">
                Inquiry category
              </label>
              <select id="category" name="category" className={fieldClassName}>
                {categories.map((category) => (
                  <option key={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className={fieldClassName}
              />
            </div>
            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled
                className="inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-md bg-accent px-6 py-3 font-semibold text-accent-foreground opacity-55 sm:w-auto"
              >
                Send inquiry — unavailable
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
}
