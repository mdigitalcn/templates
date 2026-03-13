import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { type ProjectData } from "@/src/shared/config";

interface ProjectGridProps {
  projects: ProjectData[];
  limit?: number;
}

export function ProjectGrid({ projects, limit }: ProjectGridProps) {
  const items = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((project) => (
        <Link
          key={project.slug}
          to={`/projects/${project.slug}`}
          className="group rounded-[var(--radius)] border border-border bg-card transition-all hover:border-foreground/20 hover:shadow-md"
        >
          <div className="aspect-video overflow-hidden rounded-t-[var(--radius)] bg-muted">
            <img
              src={project.image}
              alt={project.title}
              className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-5">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold">{project.title}</h3>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.slice(0, 4).map((tag) => (
                <span key={tag} className="rounded-full bg-secondary px-2 py-0.5 text-xs text-secondary-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
