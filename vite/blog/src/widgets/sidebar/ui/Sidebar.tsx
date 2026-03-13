import { Link } from "react-router-dom";
import { getAllTags } from "@/src/shared/config";

export function Sidebar() {
  const tags = getAllTags();

  return (
    <aside className="space-y-6">
      <div>
        <h3 className="text-sm font-medium">Tags</h3>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map(({ tag, count }) => (
            <Link
              key={tag}
              to={`/tags/${tag}`}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs transition-colors hover:bg-accent"
            >
              {tag} <span className="text-muted-foreground">({count})</span>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-medium">About</h3>
        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Thoughts on development, design, and building great software.
        </p>
      </div>
    </aside>
  );
}
