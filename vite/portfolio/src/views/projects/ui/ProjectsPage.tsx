import { ProjectGrid } from "@/src/widgets/project-grid";
import { projects } from "@/src/shared/config";

export function ProjectsPage() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      <p className="mt-2 text-muted-foreground">A collection of things I've built</p>
      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  );
}
