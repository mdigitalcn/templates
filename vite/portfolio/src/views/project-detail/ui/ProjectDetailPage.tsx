import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects } from "@/src/shared/config";

export function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="mx-auto max-w-5xl px-6 py-16 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link to="/projects" className="mt-4 inline-block text-primary hover:underline">
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <Link to="/projects" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-3.5" /> Back to projects
      </Link>

      <div className="mt-8 aspect-video overflow-hidden rounded-[var(--radius)] bg-muted">
        <img src={project.image} alt={project.title} className="size-full object-cover" />
      </div>

      <div className="mt-8">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold tracking-tight">{project.title}</h1>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <p className="mt-6 text-muted-foreground leading-relaxed">{project.longDescription}</p>
        <div className="mt-8 flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="size-4" /> Live Demo
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-[var(--radius)] border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github className="size-4" /> Source
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
