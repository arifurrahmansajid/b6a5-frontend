import { TypographyMuted } from "@/components/shared/typography";
import { ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import ForgotPasswordForm from "./forgot-password-form";

export default function ForgotPassword() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-12 px-6 overflow-hidden">
      {/* Cinematic Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url('/hope_link_auth_bg_1777964018455.png')` }}
      />
      <div className="absolute inset-0 z-0 bg-black/80 backdrop-blur-md" />
      
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/10 blur-[100px] rounded-full z-0" />

      <div className="relative z-10 w-full max-w-lg">
        <div className="group relative p-px rounded-[2rem] bg-gradient-to-b from-white/20 to-transparent backdrop-blur-3xl shadow-2xl overflow-hidden">
          {/* Inner Content Card */}
          <div className="bg-card/90 rounded-[1.95rem] px-8 py-10 md:px-12 md:py-14 border border-white/10 flex flex-col items-center text-center">
            
            <div className="space-y-4 mb-8">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <Sparkles className="size-3" />
                <span className="text-[9px] font-bold tracking-[0.2em] uppercase">Recovery Hub</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
                Reset your <span className="text-primary underline underline-offset-4 decoration-primary/20">Password</span>
              </h1>
              
              <TypographyMuted className="text-sm md:text-base leading-relaxed opacity-80">
                Enter your email to receive a secure password reset code.
              </TypographyMuted>
            </div>

            <div className="w-full space-y-6">
              <ForgotPasswordForm />
              
              <div className="pt-6 border-t border-border/50">
                <TypographyMuted className="text-xs">
                  Suddenly remembered?{" "}
                  <Link
                    className="font-bold text-foreground hover:text-primary transition-colors underline underline-offset-4"
                    href="/sign-in"
                  >
                    Back to sign in
                  </Link>
                </TypographyMuted>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-muted-foreground opacity-50">
              <ShieldCheck className="size-3" />
              <span>Secure Recovery Protocol</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
