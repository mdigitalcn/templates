import { SettingsNav } from "@/src/features/settings";

export default function SettingsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6 p-6 lg:flex-row">
      <aside className="w-full shrink-0 lg:w-52">
        <SettingsNav />
      </aside>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
