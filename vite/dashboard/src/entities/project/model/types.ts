export interface Project {
  id: string;
  name: string;
  description: string;
  status: "active" | "archived" | "draft";
  members: number;
  progress: number;
  updatedAt: string;
  createdAt: string;
}
