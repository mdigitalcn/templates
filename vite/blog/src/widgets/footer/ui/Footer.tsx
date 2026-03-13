import { siteConfig } from "@/src/app/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-3xl px-6 py-8 text-center text-sm text-muted-foreground">
        {new Date().getFullYear()} {siteConfig.name}. Built with React and Tailwind.
      </div>
    </footer>
  );
}
