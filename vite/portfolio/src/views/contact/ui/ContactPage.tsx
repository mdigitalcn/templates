import { Mail } from "lucide-react";
import { siteConfig } from "@/src/app/config/site";
import { ContactForm } from "@/src/widgets/contact-form";

export function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <p className="mt-2 text-muted-foreground">
        Have a project in mind? Let's talk.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <ContactForm />
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-[var(--radius)] border border-border bg-card p-6">
            <h3 className="font-medium">Prefer email?</h3>
            <a
              href={`mailto:${siteConfig.social.email}`}
              className="mt-2 inline-flex items-center gap-2 text-sm text-primary hover:underline"
            >
              <Mail className="size-4" />
              {siteConfig.social.email}
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
