import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { HeroSection } from "@/src/widgets/hero-section";
import { ProjectGrid } from "@/src/widgets/project-grid";
import { SkillsSection } from "@/src/widgets/skills-section";
import { projects } from "@/src/shared/config";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
          <Link to="/projects" className="flex items-center gap-1 text-sm text-primary hover:underline">
            View all <ArrowRight className="size-3.5" />
          </Link>
        </div>
        <div className="mt-8">
          <ProjectGrid projects={projects} limit={2} />
        </div>
      </section>
      <SkillsSection />
    </>
  );
}
