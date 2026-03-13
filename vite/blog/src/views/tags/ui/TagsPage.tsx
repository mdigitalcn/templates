import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getPostsByTag } from "@/src/shared/config";
import { PostCard } from "@/src/widgets/post-card";
import { TagCloud } from "@/src/widgets/tag-cloud";

export function TagsPage() {
  const { tag } = useParams<{ tag: string }>();
  const posts = tag ? getPostsByTag(tag) : [];

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <Link to="/posts" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3.5" /> All posts
      </Link>

      <h1 className="mt-6 text-2xl font-bold tracking-tight">
        Tagged: <span className="text-primary">{tag}</span>
      </h1>
      <p className="mt-1 text-sm text-muted-foreground">{posts.length} post{posts.length !== 1 ? "s" : ""}</p>

      <div className="mt-8 space-y-4">
        {posts.length === 0 ? (
          <p className="py-12 text-center text-muted-foreground">No posts with this tag</p>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>

      <div className="mt-12">
        <h2 className="mb-4 text-sm font-medium">All tags</h2>
        <TagCloud />
      </div>
    </div>
  );
}
