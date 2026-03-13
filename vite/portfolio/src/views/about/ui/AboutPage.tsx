import { siteConfig } from "@/src/app/config/site";
import { SkillsSection } from "@/src/widgets/skills-section";

export function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">About</h1>
        <div className="mt-8 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm {siteConfig.name}, a {siteConfig.title.toLowerCase()} passionate about
            building products that make a difference. I've been writing code professionally
            for over 7 years, working with startups and established companies alike.
          </p>
          <p>
            My focus is on creating performant, accessible, and beautiful user interfaces.
            I believe in writing clean code, thorough testing, and continuous learning.
          </p>
          <p>
            When I'm not coding, you'll find me hiking, reading about distributed systems,
            or contributing to open-source projects.
          </p>
        </div>

        <div className="mt-12 rounded-[var(--radius)] border border-border bg-card p-6">
          <h2 className="font-semibold">Experience highlights</h2>
          <div className="mt-4 space-y-4">
            {[
              { role: "Senior Frontend Engineer", company: "Acme Corp", period: "2023 - Present" },
              { role: "Full-Stack Developer", company: "StartupXYZ", period: "2021 - 2023" },
              { role: "Frontend Developer", company: "AgencyABC", period: "2019 - 2021" },
            ].map((exp) => (
              <div key={exp.company} className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground">{exp.period}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SkillsSection />
    </>
  );
}
