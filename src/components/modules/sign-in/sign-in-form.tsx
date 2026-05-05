"use client";

import { signInUser } from "@/actions/auth-actions";
import AppInputField from "@/components/shared/form/app-input-field ";
import { TypographySmall } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { ISignInPayload, signInSchema } from "./sign-in.form.schema";

interface SignInFromProps {
  redirectPath?: string;
}

export default function SignInForm({ redirectPath }: SignInFromProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const router = useRouter();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: ISignInPayload) =>
      await signInUser(payload, redirectPath),
  });

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: signInSchema,
    },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Sign in...");

      try {
        const res = await mutateAsync(value);

        if (!res.success) {
          if (res.message?.includes("Email not verified")) {
            toast.error("Please verify your email first.", { id: toastId });
            router.push("/verify-email");
            return;
          }

          toast.error(res.message ?? "Sign in failed", {
            id: toastId,
            style: {
              whiteSpace: "pre-line",
            },
          });
          return;
        }

        toast.success(res.message ?? "Sign in Successful!", { id: toastId });

        if ("redirectTo" in res && res.redirectTo) {
          router.push(res.redirectTo);
        }
      } catch (error) {
        toast.error((error as Error).message ?? "Something went wrong", {
          id: toastId,
        });
      } finally {
        form.reset();
      }
    },
  });

  return (
    <form
      noValidate
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
      className="space-y-4"
    >
      <FieldGroup className="space-y-4">
        <form.Field name="email">
          {(field) => (
            <div className="text-start">
              <AppInputField
                field={field}
                label="Email Address"
                type="email"
                placeholder="name@example.com"
                className="h-12 bg-background/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all text-sm"
                append={
                  <Mail className="size-3.5 text-muted-foreground/40 mr-3" />
                }
              />
            </div>
          )}
        </form.Field>

        <Field>
          <div className="flex items-center justify-between mb-1">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <TypographySmall className="text-[10px] font-bold uppercase tracking-wider">
              <Link
                href="/forgot-password"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Forgot?
              </Link>
            </TypographySmall>
          </div>
          <form.Field name="password">
            {(field) => (
              <div className="text-start">
                <AppInputField
                  field={field}
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-12 bg-background/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all text-sm"
                  append={
                    <div className="flex items-center">
                      <Button
                        size="icon"
                        type="button"
                        variant="ghost"
                        className="hover:bg-transparent h-12 w-8"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-3.5 text-muted-foreground/40" />
                        ) : (
                          <Eye className="size-3.5 text-muted-foreground/40" />
                        )}
                      </Button>
                      <Lock className="size-3.5 text-muted-foreground/40 mr-3 ml-1" />
                    </div>
                  }
                />
              </div>
            )}
          </form.Field>
        </Field>
      </FieldGroup>

      <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit || isPending || isSubmitting}
            className="w-full h-12 rounded-xl font-bold mt-4 shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
          >
            {isPending || isSubmitting ? "Signing in..." : "Sign In"}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
