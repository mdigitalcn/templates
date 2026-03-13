import type { User } from "../model/types";

const MOCK_USERS: User[] = [
  { id: "1", name: "Alice Chen", email: "alice@acme.com", role: "admin", status: "active", lastActive: new Date().toISOString(), createdAt: "2024-01-15T00:00:00Z" },
  { id: "2", name: "Bob Smith", email: "bob@acme.com", role: "editor", status: "active", lastActive: new Date(Date.now() - 3600000).toISOString(), createdAt: "2024-03-20T00:00:00Z" },
  { id: "3", name: "Carol Davis", email: "carol@acme.com", role: "viewer", status: "inactive", lastActive: new Date(Date.now() - 86400000 * 7).toISOString(), createdAt: "2024-06-10T00:00:00Z" },
  { id: "4", name: "Dan Lee", email: "dan@acme.com", role: "editor", status: "active", lastActive: new Date(Date.now() - 1800000).toISOString(), createdAt: "2024-08-01T00:00:00Z" },
  { id: "5", name: "Eve Park", email: "eve@acme.com", role: "viewer", status: "suspended", lastActive: new Date(Date.now() - 86400000 * 30).toISOString(), createdAt: "2024-09-15T00:00:00Z" },
];

export async function fetchUsers(): Promise<User[]> {
  await new Promise((r) => setTimeout(r, 300));
  return MOCK_USERS;
}

export async function fetchUser(id: string): Promise<User | undefined> {
  await new Promise((r) => setTimeout(r, 200));
  return MOCK_USERS.find((u) => u.id === id);
}
