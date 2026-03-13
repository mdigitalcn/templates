import type { UserRole } from "@/src/entities/user";

export type TeamMember = {
  id: string;
  userId: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  joinedAt: string;
};
