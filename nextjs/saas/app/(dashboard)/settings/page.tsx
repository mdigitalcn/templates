import type { Metadata } from "next";
import { GeneralSettingsPage } from "@/src/views/general-settings";

export const metadata: Metadata = { title: "Settings" };

export default function SettingsRoute() {
  return <GeneralSettingsPage />;
}
