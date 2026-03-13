"use client";

import { Bell, Menu } from "lucide-react";
import { UserAvatar } from "@/src/entities/user";
import { useAuthStore } from "@/src/features/auth";

export function DashboardHeader() {
  const user = useAuthStore((s) => s.user);

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-border px-4">
      <button className="text-muted-foreground md:hidden" aria-label="Toggle sidebar">
        <Menu className="size-5" />
      </button>

      <div className="flex-1" />

      <div className="flex items-center gap-3">
        <button className="relative text-muted-foreground transition-colors hover:text-foreground" aria-label="Notifications">
          <Bell className="size-5" />
          <span className="absolute -right-0.5 -top-0.5 size-2 rounded-full bg-destructive" />
        </button>
        {user && <UserAvatar user={user} size="sm" />}
      </div>
    </header>
  );
}
