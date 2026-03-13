import { cn } from "@/src/shared/lib";

interface UserBadgeProps {
  status: "active" | "inactive" | "suspended";
}

const styles = {
  active: "bg-success/10 text-success",
  inactive: "bg-muted text-muted-foreground",
  suspended: "bg-destructive/10 text-destructive",
} as const;

export function UserBadge({ status }: UserBadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium capitalize", styles[status])}>
      <span className={cn("size-1.5 rounded-full", {
        "bg-success": status === "active",
        "bg-muted-foreground": status === "inactive",
        "bg-destructive": status === "suspended",
      })} />
      {status}
    </span>
  );
}
