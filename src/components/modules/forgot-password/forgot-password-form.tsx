"use client";

import { sendPasswordResetEmail } from "@/actions/auth-actions";
import AppInputField from "@/components/shared/form/app-input-field ";
import { Button } from "@/components/ui/button";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { Mail, Send } from "lucide-react";
import { toast } from "sonner";
import {
  forgotPasswordSchema,
  IForgotPasswordPayload,
} from "./forgot-password.form.schema";

export default function ForgotPasswordForm() {
  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (payload: IForgotPasswordPayload) =>
      await sendPasswordResetEmail(payload),
  });

  const form = useForm({
    defaultValues: { email: "" },
    validators: { onSubmit: forgotPasswordSchema },
    onSubmit: async ({ value }) => {
      const toastId = toast.loading("Sending reset code...");

      try {
        const res = await mutateAsync(value);

        if (!res.success) {
          toast.error(res.message ?? "Failed to send reset code", {
            id: toastId,
            style: { whiteSpace: "pre-line" },
          });
          return;
        }

        toast.success(res.message ?? "Reset code sent!", { id: toastId });
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

      <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button
            type="submit"
            disabled={!canSubmit || isPending || isSubmitting}
            className="w-full h-12 rounded-xl font-bold mt-2 shadow-xl shadow-primary/20 transition-all active:scale-[0.98]"
          >
            {isPending || isSubmitting ? (
              "Sending..."
            ) : (
              <span className="flex items-center gap-2">
                <Send className="size-4" />
                Send Reset Code
              </span>
            )}
          </Button>
        )}
      </form.Subscribe>
    </form>
  );
}
