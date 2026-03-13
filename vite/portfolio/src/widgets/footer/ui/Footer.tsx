import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";

const socials = [
  { icon: Github, href: siteConfig.social.github, label: "GitHub" },
  { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
  { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: Mail, href: `mailto:${siteConfig.social.email}`, label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8">
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[var(--radius)] p-2 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={label}
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
