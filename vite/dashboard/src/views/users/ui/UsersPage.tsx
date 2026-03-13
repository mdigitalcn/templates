import { useQuery } from "@tanstack/react-query";
import { type ColumnDef } from "@tanstack/react-table";
import { fetchUsers, type User, UserBadge } from "@/src/entities/user";
import { DataTable } from "@/src/widgets/data-table";
import { formatRelativeTime } from "@/src/shared/lib";

const columns: ColumnDef<User, unknown>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <div className="size-8 rounded-full bg-primary/10 text-center text-xs font-medium leading-8 text-primary">
          {row.original.name.split(" ").map((n) => n[0]).join("")}
        </div>
        <div>
          <div className="font-medium">{row.original.name}</div>
          <div className="text-xs text-muted-foreground">{row.original.email}</div>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => (
      <span className="capitalize">{getValue<string>()}</span>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => <UserBadge status={getValue<User["status"]>()} />,
  },
  {
    accessorKey: "lastActive",
    header: "Last Active",
    cell: ({ getValue }) => (
      <span className="text-muted-foreground">{formatRelativeTime(new Date(getValue<string>()))}</span>
    ),
  },
];

export function UsersPage() {
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Users</h1>
          <p className="text-sm text-muted-foreground">{users.length} total users</p>
        </div>
        <button className="rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Invite User
        </button>
      </div>
      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="size-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      ) : (
        <DataTable data={users} columns={columns} />
      )}
    </div>
  );
}
