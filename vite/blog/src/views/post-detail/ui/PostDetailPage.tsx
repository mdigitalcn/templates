import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { getPostBySlug } from "@/src/shared/config";

export function PostDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold">Post not found</h1>
        <Link to="/posts" className="mt-4 inline-block text-primary hover:underline">Back to posts</Link>
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link to="/posts" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3.5" /> Back to posts
      </Link>

      {post.cover && (
        <div className="mt-6 aspect-[2/1] overflow-hidden rounded-[var(--radius)] bg-muted">
          <img src={post.cover} alt={post.title} className="size-full object-cover" />
        </div>
      )}

      <div className="mt-8">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <time>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}</time>
          <span className="flex items-center gap-1"><Clock className="size-3.5" />{post.readingTime} min read</span>
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{post.title}</h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground hover:bg-secondary/80"
            >
              {tag}
            </Link>
          ))}
        </div>
      </div>

      <div className="prose mt-10 max-w-none">
        {post.content.split("\n\n").map((paragraph, i) => {
          if (paragraph.startsWith("### ")) {
            return <h3 key={i} className="mt-6 text-lg font-semibold">{paragraph.slice(4)}</h3>;
          }
          if (paragraph.startsWith("## ")) {
            return <h2 key={i} className="mt-8 text-xl font-bold">{paragraph.slice(3)}</h2>;
          }
          if (paragraph.startsWith("```")) {
            const code = paragraph.replace(/```\w*\n?/, "").replace(/```$/, "");
            return (
              <pre key={i} className="mt-4 overflow-x-auto rounded-[var(--radius)] bg-foreground/5 p-4">
                <code className="text-sm font-mono">{code}</code>
              </pre>
            );
          }
          return <p key={i} className="mt-4 text-muted-foreground leading-relaxed">{paragraph}</p>;
        })}
      </div>
    </article>
  );
}
