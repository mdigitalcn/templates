import type { Metadata } from "next";
import { TeamSettingsPage } from "@/src/views/team-settings";

export const metadata: Metadata = { title: "Team" };

export default function TeamRoute() {
  return <TeamSettingsPage />;
}
