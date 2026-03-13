import { Bell, Search } from "lucide-react";

export function TopBar() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-border bg-card px-6">
      <div className="flex items-center gap-2">
        <Search className="size-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search..."
          className="w-64 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        />
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-[var(--radius)] p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
          <Bell className="size-4" />
          <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-destructive" />
        </button>
        <div className="size-8 rounded-full bg-primary/10 text-center text-sm font-medium leading-8 text-primary">
          A
        </div>
      </div>
    </header>
  );
}
