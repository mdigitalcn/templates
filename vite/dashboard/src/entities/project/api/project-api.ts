import type { Project } from "../model/types";

const MOCK_PROJECTS: Project[] = [
  { id: "1", name: "Website Redesign", description: "Complete overhaul of the marketing site", status: "active", members: 5, progress: 72, updatedAt: new Date().toISOString(), createdAt: "2024-11-01T00:00:00Z" },
  { id: "2", name: "Mobile App v2", description: "React Native rewrite of the iOS app", status: "active", members: 8, progress: 45, updatedAt: new Date(Date.now() - 3600000).toISOString(), createdAt: "2024-10-15T00:00:00Z" },
  { id: "3", name: "API Migration", description: "Migrate REST endpoints to GraphQL", status: "draft", members: 3, progress: 10, updatedAt: new Date(Date.now() - 86400000).toISOString(), createdAt: "2025-01-10T00:00:00Z" },
  { id: "4", name: "Analytics Dashboard", description: "Internal analytics and reporting tool", status: "active", members: 4, progress: 88, updatedAt: new Date(Date.now() - 7200000).toISOString(), createdAt: "2024-09-01T00:00:00Z" },
  { id: "5", name: "Legacy CRM", description: "Old CRM system - migrating to new platform", status: "archived", members: 2, progress: 100, updatedAt: new Date(Date.now() - 86400000 * 60).toISOString(), createdAt: "2023-06-01T00:00:00Z" },
];

export async function fetchProjects(): Promise<Project[]> {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_PROJECTS;
}
