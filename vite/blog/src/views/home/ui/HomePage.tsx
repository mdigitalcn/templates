import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { posts } from "@/src/shared/config";
import { PostCard } from "@/src/widgets/post-card";
import { siteConfig } from "@/src/app/config/site";

export function HomePage() {
  const [featured, ...rest] = posts;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight">{siteConfig.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{siteConfig.description}</p>
      </div>

      {featured && (
        <div className="mb-10">
          <PostCard post={featured} featured />
        </div>
      )}

      <div className="space-y-4">
        {rest.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {posts.length > 4 && (
        <div className="mt-8 text-center">
          <Link
            to="/posts"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
          >
            View all posts <ArrowRight className="size-3.5" />
          </Link>
        </div>
      )}
    </div>
  );
}
