import Link from "next/link";
import type { LegalDocument } from "@/content/legalDocuments";

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function renderParagraphs(items?: string[]) {
  if (!items?.length) return null;

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <p key={item} className="text-sm leading-7 text-text-muted md:text-[15px]">
          {item}
        </p>
      ))}
    </div>
  );
}

function getRawLineClass(line: string) {
  if (line === "ZORAMEETO") {
    return "text-xs font-extrabold uppercase tracking-[0.32em] text-primary";
  }

  if (["TERMS OF SERVICE", "PRIVACY POLICY", "COMMUNITY GUIDELINES"].includes(line)) {
    return "text-3xl font-extrabold uppercase tracking-tight text-text-main md:text-4xl";
  }

  if (line.startsWith("Effective Date:")) {
    return "mt-2 inline-flex w-fit rounded-md border border-border bg-surface-soft px-3 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-text-muted";
  }

  if (/^\d+\.\s/.test(line)) {
    return "mt-8 border-t border-border pt-7 text-xl font-extrabold tracking-tight text-text-main md:text-2xl";
  }

  if (/^\d+\.\d+\s/.test(line)) {
    return "mt-5 text-base font-extrabold tracking-tight text-text-main md:text-lg";
  }

  if (/^Page \d+$/.test(line) || line.startsWith("ZORAMEETO | Legal Document")) {
    return "text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted/60";
  }

  if (
    line.startsWith("Operator:") ||
    line.startsWith("Registered Office:") ||
    line.startsWith("CIN -") ||
    line.startsWith("GSTIN") ||
    line.startsWith("Support Email:") ||
    line.startsWith("Legal Email:")
  ) {
    return "rounded-md border border-border bg-surface-soft px-4 py-3 text-sm font-bold leading-6 text-text-main";
  }

  return "text-sm leading-7 text-text-muted md:text-[15px]";
}

function RawLegalText({ text }: { text: string }) {
  const lines = text.split("\n");

  return (
    <section className="overflow-hidden rounded-lg border border-border bg-background shadow-sm">
      <div className="border-b border-border bg-surface-soft/50 px-5 py-4 sm:px-7">
        <div className="h-1.5 w-20 rounded-full bg-primary"></div>
      </div>
      <div className="px-5 py-7 sm:px-8 md:px-10 md:py-10">
        <div className="mx-auto max-w-3xl">
          {lines.map((line, index) =>
            line.length ? (
              <p key={`${index}-${line}`} className={`whitespace-pre-wrap ${getRawLineClass(line)}`}>
                {line}
              </p>
            ) : (
              <div key={`blank-${index}`} className="h-4" aria-hidden="true" />
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default function LegalDocumentPage({ document }: { document: LegalDocument }) {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden border-b border-border bg-gradient-mesh px-5 pb-12 pt-32 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/70 px-4 py-2 text-primary shadow-sm backdrop-blur">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                verified_user
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.28em]">
                {document.eyebrow}
              </span>
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight text-text-main sm:text-5xl lg:text-6xl">
                {document.title}{" "}
                <span className="font-light italic text-primary">{document.titleAccent}.</span>
              </h1>
              <p className="max-w-3xl text-base font-medium leading-8 text-text-muted md:text-lg">
                {document.description}
              </p>
              <p className="max-w-3xl text-sm font-extrabold uppercase tracking-[0.14em] text-text-main">
                Owned &amp; Operated by Bhatt Square Private Limited
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-white/85 p-5 shadow-sm backdrop-blur">
            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
                  Effective
                </dt>
                <dd className="mt-1 text-sm font-bold text-text-main">{document.effectiveDate}</dd>
              </div>
              <div>
                <dt className="text-[10px] font-bold uppercase tracking-[0.24em] text-text-muted">
                  Version
                </dt>
                <dd className="mt-1 text-sm font-bold text-text-main">{document.version}</dd>
              </div>
              <div className="col-span-2 flex flex-wrap gap-2 border-t border-border pt-4">
                {document.relatedLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex min-h-9 items-center rounded-md border border-border bg-white px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted transition-colors hover:border-primary hover:text-primary"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-12 sm:px-6 lg:px-10 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <article className="space-y-6">
            {document.rawText ? (
              <RawLegalText text={document.rawText} />
            ) : (
              <>
                <div className="rounded-lg border border-primary/20 bg-primary/[0.03] p-6">
                  <h2 className="text-sm font-extrabold uppercase tracking-[0.22em] text-text-main">
                    Publication Completion Fields
                  </h2>
                  <div className="mt-4 space-y-3">
                    {document.completionNotice.map((item) => (
                      <p key={item} className="text-sm leading-7 text-text-muted">
                        {item}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-background p-6 shadow-sm">
                  {renderParagraphs(document.introduction)}
                </div>

                {document.sections.map((section) => (
                  <section
                    key={section.title}
                    id={slugify(section.title)}
                    className="scroll-mt-28 rounded-lg border border-border bg-background p-6 shadow-sm md:p-8"
                  >
                    <h2 className="text-2xl font-extrabold tracking-tight text-text-main md:text-3xl">
                      {section.title}
                    </h2>

                    <div className="mt-5">{renderParagraphs(section.body)}</div>

                    {section.subSections?.length ? (
                      <div className="mt-6 space-y-6 border-t border-border pt-6">
                        {section.subSections.map((subSection) => (
                          <section key={subSection.title} className="space-y-3">
                            <h3 className="text-base font-extrabold tracking-tight text-text-main md:text-lg">
                              {subSection.title}
                            </h3>
                            {renderParagraphs(subSection.body)}
                          </section>
                        ))}
                      </div>
                    ) : null}
                  </section>
                ))}
              </>
            )}
          </article>
        </div>
      </section>
    </main>
  );
}
