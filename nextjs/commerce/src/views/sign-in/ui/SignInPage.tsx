export function SignInPage() {
  return (
    <div className="space-y-6 text-center">
      <h1 className="text-2xl font-bold">Sign in</h1>
      <p className="text-sm text-muted-foreground">Sign in to your account to continue</p>
      {/* TODO: Add auth form — reuse from features/auth or your auth provider */}
      <div className="rounded-[var(--radius)] border border-border p-8 text-sm text-muted-foreground">
        Auth form placeholder — integrate your auth provider here.
      </div>
    </div>
  );
}
