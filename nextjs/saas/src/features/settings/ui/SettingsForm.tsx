"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

type FieldConfig = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

type Props = {
  title: string;
  description?: string;
  fields: FieldConfig[];
  onSubmit: (data: Record<string, string>) => Promise<void>;
};

export function SettingsForm({ title, description, fields, onSubmit }: Props) {
  const [saved, setSaved] = useState(false);

  // Build a dynamic zod schema from field configs
  const shape: Record<string, z.ZodString> = {};
  for (const field of fields) {
    shape[field.name] = z.string().min(1, `${field.label} is required`);
  }
  const schema = z.object(shape);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Record<string, string>>({
    resolver: zodResolver(schema),
  });

  async function submit(data: Record<string, string>) {
    await onSubmit(data);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <form onSubmit={handleSubmit(submit)} className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>

      <div className="space-y-4">
        {fields.map((field) => (
          <div key={field.name} className="space-y-1.5">
            <label htmlFor={field.name} className="block text-sm font-medium">
              {field.label}
            </label>
            <input
              id={field.name}
              type={field.type ?? "text"}
              placeholder={field.placeholder}
              className="block w-full max-w-md rounded-[var(--radius)] border border-border bg-background px-3 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring"
              {...register(field.name)}
            />
            {errors[field.name] && (
              <p className="text-xs text-destructive">{errors[field.name]?.message as string}</p>
            )}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-[var(--radius)] bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-50"
        >
          {isSubmitting ? "Saving…" : "Save changes"}
        </button>
        {saved && <span className="text-sm text-success">Saved!</span>}
      </div>
    </form>
  );
}
