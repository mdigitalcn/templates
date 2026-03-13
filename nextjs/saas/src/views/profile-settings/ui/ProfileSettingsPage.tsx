"use client";

import { SettingsForm } from "@/src/features/settings";

export function ProfileSettingsPage() {
  return (
    <SettingsForm
      title="Profile"
      description="Update your personal information."
      fields={[
        { name: "name", label: "Full name", placeholder: "Jane Doe" },
        { name: "email", label: "Email", type: "email", placeholder: "jane@example.com" },
      ]}
      onSubmit={async (data) => {
        // TODO: Call updateUser() from entities/user
        console.log("Save profile:", data);
      }}
    />
  );
}
