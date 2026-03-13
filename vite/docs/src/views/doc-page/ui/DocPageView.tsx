import { useParams, Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getDocBySlug, sections } from "@/src/shared/config";
import { TableOfContents } from "@/src/widgets/toc";

export function DocPageView() {
  const { slug } = useParams<{ slug: string }>();
  const page = slug ? getDocBySlug(slug) : undefined;

  if (!page) {
    return (
      <div className="py-16 text-center">
        <h1 className="text-2xl font-bold">Page not found</h1>
        <Link to="/docs/introduction" className="mt-4 inline-block text-primary hover:underline">
          Go to Introduction
        </Link>
      </div>
    );
  }

  const allPages = sections.flatMap((s) => s.items);
  const currentIndex = allPages.findIndex((p) => p.slug === slug);
  const prev = currentIndex > 0 ? allPages[currentIndex - 1] : null;
  const next = currentIndex < allPages.length - 1 ? allPages[currentIndex + 1] : null;

  return (
    <div className="flex gap-8">
      <article className="min-w-0 flex-1">
        <h1 className="text-3xl font-bold tracking-tight">{page.title}</h1>

        <div className="mt-8">
          {page.content.split("\n\n").map((block, i) => {
            if (block.startsWith("### ")) {
              const text = block.slice(4);
              const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
              return <h3 key={i} id={id} className="mt-6 scroll-mt-20 text-lg font-semibold">{text}</h3>;
            }
            if (block.startsWith("## ")) {
              const text = block.slice(3);
              const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
              return <h2 key={i} id={id} className="mt-8 scroll-mt-20 text-xl font-bold">{text}</h2>;
            }
            if (block.startsWith("```")) {
              const lines = block.split("\n");
              const lang = lines[0].replace("```", "");
              const code = lines.slice(1, -1).join("\n");
              return (
                <div key={i} className="mt-4">
                  {lang && <span className="inline-block rounded-t-[var(--radius)] bg-foreground/10 px-3 py-1 text-xs text-muted-foreground">{lang}</span>}
                  <pre className={`overflow-x-auto bg-foreground/5 p-4 font-mono text-sm ${lang ? "rounded-b-[var(--radius)] rounded-tr-[var(--radius)]" : "rounded-[var(--radius)]"}`}>
                    <code>{code}</code>
                  </pre>
                </div>
              );
            }
            if (block.startsWith("- ")) {
              const items = block.split("\n").filter((l) => l.startsWith("- "));
              return (
                <ul key={i} className="mt-4 space-y-1.5 text-muted-foreground">
                  {items.map((item, j) => {
                    const text = item.slice(2);
                    const boldMatch = text.match(/^\*\*(.+?)\*\*\s*[-–]\s*(.*)/);
                    return (
                      <li key={j} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-muted-foreground" />
                        {boldMatch ? (
                          <span><strong className="text-foreground">{boldMatch[1]}</strong> - {boldMatch[2]}</span>
                        ) : (
                          <span>{text}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              );
            }
            return <p key={i} className="mt-4 text-muted-foreground leading-relaxed">{block}</p>;
          })}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-border pt-6">
          {prev ? (
            <Link to={`/docs/${prev.slug}`} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <ChevronLeft className="size-4" /> {prev.title}
            </Link>
          ) : <div />}
          {next ? (
            <Link to={`/docs/${next.slug}`} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              {next.title} <ChevronRight className="size-4" />
            </Link>
          ) : <div />}
        </div>
      </article>

      <aside className="hidden w-44 shrink-0 xl:block">
        <div className="sticky top-20">
          <TableOfContents content={page.content} />
        </div>
      </aside>
    </div>
  );
}
