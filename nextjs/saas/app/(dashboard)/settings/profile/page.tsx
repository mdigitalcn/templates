import type { Metadata } from "next";
import { ProfileSettingsPage } from "@/src/views/profile-settings";

export const metadata: Metadata = { title: "Profile" };

export default function ProfileRoute() {
  return <ProfileSettingsPage />;
}
