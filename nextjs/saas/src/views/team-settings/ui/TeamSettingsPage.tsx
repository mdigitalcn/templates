import { TeamList } from "@/src/features/team";

export function TeamSettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">Team members</h3>
          <p className="text-sm text-muted-foreground">Manage who has access to this workspace.</p>
        </div>
        <button className="rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Invite member
        </button>
      </div>
      <TeamList />
    </div>
  );
}
