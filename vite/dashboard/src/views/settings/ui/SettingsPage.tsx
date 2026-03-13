import { useState } from "react";

export function SettingsPage() {
  const [saved, setSaved] = useState(false);

  function handleSave() {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-xl font-semibold tracking-tight">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your dashboard preferences</p>
      </div>

      <div className="rounded-[var(--radius)] border border-border bg-card">
        <div className="border-b border-border px-5 py-3">
          <h3 className="text-sm font-medium">General</h3>
        </div>
        <div className="space-y-4 p-5">
          <div className="space-y-1.5">
            <label className="block text-sm font-medium">Dashboard Name</label>
            <input
              type="text"
              defaultValue="Admin Dashboard"
              className="block w-full rounded-[var(--radius)] border border-border bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
            />
          </div>
          <div className="space-y-1.5">
            <label className="block text-sm font-medium">Timezone</label>
            <select className="block w-full rounded-[var(--radius)] border border-border bg-background px-3 py-2 text-sm shadow-sm focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring">
              <option>UTC</option>
              <option>America/New_York</option>
              <option>Europe/London</option>
              <option>Asia/Tokyo</option>
            </select>
          </div>
        </div>
      </div>

      <div className="rounded-[var(--radius)] border border-border bg-card">
        <div className="border-b border-border px-5 py-3">
          <h3 className="text-sm font-medium">Notifications</h3>
        </div>
        <div className="space-y-3 p-5">
          {["Email notifications", "Push notifications", "Weekly digest"].map((label) => (
            <label key={label} className="flex items-center justify-between">
              <span className="text-sm">{label}</span>
              <input type="checkbox" defaultChecked className="size-4 rounded border-border text-primary focus:ring-ring" />
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3">
        {saved && <span className="self-center text-sm text-success">Saved</span>}
        <button
          onClick={handleSave}
          className="rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
