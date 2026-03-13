const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"] },
  { category: "DevOps", items: ["Docker", "AWS", "CI/CD", "Vercel", "Terraform"] },
  { category: "Tools", items: ["Git", "Figma", "VS Code", "Linear", "Notion"] },
];

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h2 className="text-2xl font-bold tracking-tight">Skills & Tools</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map(({ category, items }) => (
          <div key={category}>
            <h3 className="text-sm font-medium text-primary">{category}</h3>
            <ul className="mt-3 space-y-2">
              {items.map((item) => (
                <li key={item} className="text-sm text-muted-foreground">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
