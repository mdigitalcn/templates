import type { Metadata } from "next";
import { NotificationSettingsPage } from "@/src/views/notification-settings";

export const metadata: Metadata = { title: "Notifications" };

export default function NotificationsRoute() {
  return <NotificationSettingsPage />;
}
