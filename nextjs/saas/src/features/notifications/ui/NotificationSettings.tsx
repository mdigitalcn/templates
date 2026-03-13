"use client";

import { useState } from "react";

type NotifSetting = { id: string; label: string; description: string; enabled: boolean };

const defaults: NotifSetting[] = [
  { id: "email_marketing", label: "Marketing emails", description: "Product updates and newsletters", enabled: true },
  { id: "email_security", label: "Security alerts", description: "Login attempts and password changes", enabled: true },
  { id: "email_billing", label: "Billing updates", description: "Invoice and payment notifications", enabled: true },
  { id: "email_team", label: "Team activity", description: "Member invites and role changes", enabled: false },
];

export function NotificationSettings() {
  const [settings, setSettings] = useState(defaults);

  function toggle(id: string) {
    setSettings((prev) => prev.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s)));
  }

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Email notifications</h3>
        <p className="text-sm text-muted-foreground">Choose what emails you receive.</p>
      </div>
      <div className="divide-y divide-border rounded-[var(--radius)] border">
        {settings.map((s) => (
          <div key={s.id} className="flex items-center justify-between p-4">
            <div>
              <p className="text-sm font-medium">{s.label}</p>
              <p className="text-xs text-muted-foreground">{s.description}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={s.enabled}
              onClick={() => toggle(s.id)}
              className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors ${
                s.enabled ? "bg-primary" : "bg-muted"
              }`}
            >
              <span
                className={`pointer-events-none inline-block size-5 transform rounded-full bg-background shadow-sm ring-0 transition-transform ${
                  s.enabled ? "translate-x-5" : "translate-x-0.5"
                } mt-0.5`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
