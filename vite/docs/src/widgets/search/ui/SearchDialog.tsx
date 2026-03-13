import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, X } from "lucide-react";
import { sections } from "@/src/shared/config";

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export function SearchDialog({ open, onClose }: SearchDialogProps) {
  const [query, setQuery] = useState("");

  if (!open) return null;

  const results = query.length >= 2
    ? sections.flatMap((s) =>
        s.items.filter(
          (p) =>
            p.title.toLowerCase().includes(query.toLowerCase()) ||
            p.content.toLowerCase().includes(query.toLowerCase()),
        ),
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-foreground/20 pt-[20vh] backdrop-blur-sm" onClick={onClose}>
      <div className="w-full max-w-lg rounded-[var(--radius)] border border-border bg-card shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <Search className="size-4 text-muted-foreground" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search documentation..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="size-4" />
          </button>
        </div>
        {query.length >= 2 && (
          <div className="max-h-64 overflow-y-auto p-2">
            {results.length === 0 ? (
              <p className="px-3 py-4 text-center text-sm text-muted-foreground">No results found</p>
            ) : (
              results.map((page) => (
                <Link
                  key={page.slug}
                  to={`/docs/${page.slug}`}
                  onClick={onClose}
                  className="block rounded-[var(--radius)] px-3 py-2 text-sm transition-colors hover:bg-accent"
                >
                  {page.title}
                </Link>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}
