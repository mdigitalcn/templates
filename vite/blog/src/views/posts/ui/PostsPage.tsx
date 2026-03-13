import { useState } from "react";
import { Search } from "lucide-react";
import { posts } from "@/src/shared/config";
import { PostCard } from "@/src/widgets/post-card";
import { Sidebar } from "@/src/widgets/sidebar";

export function PostsPage() {
  const [query, setQuery] = useState("");

  const filtered = query
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.tags.some((t) => t.includes(query.toLowerCase())),
      )
    : posts;

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl font-bold tracking-tight">All Posts</h1>
        <div className="flex items-center gap-2 rounded-[var(--radius)] border border-border px-3 py-1.5">
          <Search className="size-4 text-muted-foreground" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search posts..."
            className="w-40 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-4">
        <div className="space-y-4 lg:col-span-3">
          {filtered.length === 0 ? (
            <p className="py-12 text-center text-muted-foreground">No posts found</p>
          ) : (
            filtered.map((post) => <PostCard key={post.slug} post={post} />)
          )}
        </div>
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
