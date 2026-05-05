"use client";

import { signUpUser } from "@/actions/auth-actions";
import { AppForm } from "@/components/shared/form/app-form";
import AppInputField from "@/components/shared/form/app-input-field ";
import { Button } from "@/components/ui/button";
import { FieldGroup } from "@/components/ui/field";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ISignUpPayload, signUpSchema } from "./sign-up.form.schema";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  return (
    <AppForm<ISignUpPayload>
      defaultValues={{ name: "", email: "", password: "" }}
      schema={signUpSchema}
      mutationFn={signUpUser}
      submitButtonText="Create Account"
      loadingMessage="Creating your account..."
      successMessage="Welcome to HopeLink!"
      errorMessage="Creation failed"
      className="space-y-6"
      onSuccess={() => router.push("/verify-email")}
    >
      {(form) => (
        <FieldGroup className="space-y-6">
          <form.Field name="name">
            {(field) => (
              <div className="text-start">
                <AppInputField
                  field={field}
                  label="Full Name"
                  placeholder="John Doe"
                  className="h-14 bg-background/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all"
                  append={
                    <User className="size-4 text-muted-foreground/50 mr-3" />
                  }
                />
              </div>
            )}
          </form.Field>
          
          <form.Field name="email">
            {(field) => (
              <div className="text-start">
                <AppInputField
                  field={field}
                  label="Email Address"
                  type="email"
                  placeholder="name@example.com"
                  className="h-14 bg-background/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all"
                  append={
                    <Mail className="size-4 text-muted-foreground/50 mr-3" />
                  }
                />
              </div>
            )}
          </form.Field>

          <form.Field name="password">
            {(field) => (
              <div className="text-start">
                <AppInputField
                  field={field}
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-14 bg-background/20 border-white/10 focus:border-primary/50 focus:ring-primary/20 rounded-2xl transition-all"
                  append={
                    <div className="flex items-center">
                      <Button
                        size="icon"
                        type="button"
                        variant="ghost"
                        className="hover:bg-transparent"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? (
                          <EyeOff className="size-4 text-muted-foreground/50" />
                        ) : (
                          <Eye className="size-4 text-muted-foreground/50" />
                        )}
                      </Button>
                      <Lock className="size-4 text-muted-foreground/50 mr-3 ml-1" />
                    </div>
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
