"use client";

import { SettingsForm } from "@/src/features/settings";

export function GeneralSettingsPage() {
  return (
    <SettingsForm
      title="General"
      description="Manage your workspace settings."
      fields={[
        { name: "workspace_name", label: "Workspace name", placeholder: "My Workspace" },
        { name: "workspace_url", label: "Workspace URL", placeholder: "my-workspace" },
      ]}
      onSubmit={async (data) => {
        // TODO: Call API to update workspace settings
        console.log("Save general settings:", data);
      }}
    />
  );
}
