import { StatsGrid } from "@/src/widgets/stats-grid";
import { ActivityFeed } from "@/src/widgets/activity-feed";

export function OverviewPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Overview</h1>
        <p className="text-sm text-muted-foreground">Key metrics and recent activity</p>
      </div>
      <StatsGrid />
      <div className="grid gap-6 lg:grid-cols-2">
        <ActivityFeed />
        <div className="rounded-[var(--radius)] border border-border bg-card p-5">
          <h3 className="mb-4 text-sm font-medium">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            {["Invite User", "New Project", "View Reports", "Export Data"].map((action) => (
              <button
                key={action}
                className="rounded-[var(--radius)] border border-border bg-background px-3 py-2 text-sm transition-colors hover:bg-accent"
              >
                {action}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
