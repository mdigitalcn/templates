"use client";

import { cn } from "@/src/shared/lib";
import { UserAvatar } from "@/src/entities/user";
import type { TeamMember } from "@/src/entities/team";

const mockMembers: TeamMember[] = [
  { id: "1", userId: "u1", name: "Jane Cooper", email: "jane@example.com", role: "owner", joinedAt: "2024-01-01" },
  { id: "2", userId: "u2", name: "Robert Fox", email: "robert@example.com", role: "admin", joinedAt: "2024-03-15" },
  { id: "3", userId: "u3", name: "Esther Howard", email: "esther@example.com", role: "member", joinedAt: "2024-06-20" },
];

const roleBadgeStyles: Record<string, string> = {
  owner: "bg-warning/15 text-warning-foreground",
  admin: "bg-primary/10 text-primary",
  member: "bg-muted text-muted-foreground",
};

export function TeamList() {
  return (
    <div className="divide-y divide-border rounded-[var(--radius)] border">
      {mockMembers.map((member) => (
        <div key={member.id} className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <UserAvatar user={{ name: member.name, avatarUrl: member.avatarUrl }} size="sm" />
            <div>
              <p className="text-sm font-medium">{member.name}</p>
              <p className="text-xs text-muted-foreground">{member.email}</p>
            </div>
          </div>
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-medium capitalize", roleBadgeStyles[member.role])}>
            {member.role}
          </span>
        </div>
      ))}
    </div>
  );
}
