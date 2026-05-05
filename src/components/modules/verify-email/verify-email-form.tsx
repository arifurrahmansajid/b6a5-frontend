"use client";

import { verifyEmailUser } from "@/actions/auth-actions";
import { AppForm } from "@/components/shared/form/app-form";
import AppInputField from "@/components/shared/form/app-input-field ";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { Hash, Mail, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  IVerifyEmailPayload,
  verifyEmailSchema,
} from "./verify-email.form.schema";

export default function VerifyEmailForm() {
  const router = useRouter();

  return (
    <AppForm<IVerifyEmailPayload>
      defaultValues={{ email: "", otp: "" }}
      schema={verifyEmailSchema}
      mutationFn={verifyEmailUser}
      submitButtonText="Activate Account"
      loadingMessage="Activating..."
      successMessage="Account activated!"
      errorMessage="Activation failed"
      className="space-y-4"
      onSuccess={() => router.push("/sign-in")}
    >
      {(form) => (
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

          <form.Field name="otp">
            {(field) => (
              <div className="text-start">
                <AppInputField
                  field={field}
                  label="Verification Code"
                  placeholder="5-digit code"
                  className="h-12 bg-background/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all text-sm font-mono tracking-widest"
                  append={
                    <Hash className="size-3.5 text-muted-foreground/40 mr-3" />
                  }
                />
              </div>
            )}
          </form.Field>
        </FieldGroup>
      )}
    </AppForm>
  );
}
