import { formatRelativeTime } from "@/src/shared/lib";

interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  time: Date;
}

const activities: Activity[] = [
  { id: "1", user: "Alice Chen", action: "updated", target: "Website Redesign", time: new Date(Date.now() - 300000) },
  { id: "2", user: "Bob Smith", action: "commented on", target: "Mobile App v2", time: new Date(Date.now() - 1800000) },
  { id: "3", user: "Carol Davis", action: "completed", target: "API Documentation", time: new Date(Date.now() - 3600000) },
  { id: "4", user: "Dan Lee", action: "created", target: "New Feature Request", time: new Date(Date.now() - 7200000) },
  { id: "5", user: "Eve Park", action: "deployed", target: "Analytics Dashboard", time: new Date(Date.now() - 14400000) },
];

export function ActivityFeed() {
  return (
    <div className="rounded-[var(--radius)] border border-border bg-card">
      <div className="border-b border-border px-5 py-3">
        <h3 className="text-sm font-medium">Recent Activity</h3>
      </div>
      <div className="divide-y divide-border">
        {activities.map((a) => (
          <div key={a.id} className="flex items-center gap-3 px-5 py-3">
            <div className="size-8 shrink-0 rounded-full bg-primary/10 text-center text-xs font-medium leading-8 text-primary">
              {a.user.split(" ").map((n) => n[0]).join("")}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm">
                <span className="font-medium">{a.user}</span>{" "}
                <span className="text-muted-foreground">{a.action}</span>{" "}
                <span className="font-medium">{a.target}</span>
              </p>
            </div>
            <time className="shrink-0 text-xs text-muted-foreground">{formatRelativeTime(a.time)}</time>
          </div>
        ))}
      </div>
    </div>
  );
}
