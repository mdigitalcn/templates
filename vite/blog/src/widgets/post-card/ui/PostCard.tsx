import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import type { Post } from "@/src/shared/config";

interface PostCardProps {
  post: Post;
  featured?: boolean;
}

export function PostCard({ post, featured }: PostCardProps) {
  return (
    <Link
      to={`/posts/${post.slug}`}
      className="group block rounded-[var(--radius)] border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-sm"
    >
      {featured && post.cover && (
        <div className="aspect-[2/1] overflow-hidden rounded-t-[var(--radius)] bg-muted">
          <img
            src={post.cover}
            alt={post.title}
            className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <time>{new Date(post.publishedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}</time>
          <span className="flex items-center gap-1"><Clock className="size-3" />{post.readingTime} min</span>
        </div>
        <div className="mt-2 flex items-start justify-between gap-2">
          <h2 className={`font-semibold leading-snug ${featured ? "text-xl" : "text-base"}`}>{post.title}</h2>
          <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
