import { cn } from "@/src/shared/lib";
import type { User } from "../model/types";

type Props = {
  user: Pick<User, "name" | "avatarUrl">;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizes = { sm: "size-7 text-xs", md: "size-9 text-sm", lg: "size-12 text-base" };

export function UserAvatar({ user, size = "md", className }: Props) {
  if (user.avatarUrl) {
    return (
      <img
        src={user.avatarUrl}
        alt={user.name}
        className={cn("rounded-full object-cover", sizes[size], className)}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full bg-primary font-medium text-primary-foreground",
        sizes[size],
        className,
      )}
    >
      {user.name.charAt(0).toUpperCase()}
    </div>
  );
}
