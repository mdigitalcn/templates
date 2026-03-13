import { api } from "@/src/shared/api";
import type { TeamMember } from "../model/types";

export async function getTeamMembers() {
  return api<TeamMember[]>("/api/team");
}

export async function inviteMember(email: string, role: string) {
  return api<TeamMember>("/api/team/invite", { method: "POST", body: { email, role } });
}

export async function removeMember(memberId: string) {
  return api<void>(`/api/team/${memberId}`, { method: "DELETE" });
}
