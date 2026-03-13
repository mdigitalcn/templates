import { RegisterForm } from "@/src/features/auth";

export function SignUpPage() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="mt-1 text-sm text-muted-foreground">Get started in seconds</p>
      </div>
      <RegisterForm />
    </div>
  );
}
