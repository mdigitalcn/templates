import { Link } from "react-router-dom";
import { getAllTags } from "@/src/shared/config";

export function TagCloud() {
  const tags = getAllTags();
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(({ tag, count }) => (
        <Link
          key={tag}
          to={`/tags/${tag}`}
          className="rounded-full border border-border px-3 py-1 text-sm transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          {tag} ({count})
        </Link>
      ))}
    </div>
  );
}
