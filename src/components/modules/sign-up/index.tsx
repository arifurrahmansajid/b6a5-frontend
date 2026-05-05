import { TypographyMuted } from "@/components/shared/typography";
import { Badge } from "@/components/ui/badge";
import { Heart, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";
import SignUpForm from "./sign-up-form";

export default function SignUp() {
  return (
    <div className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Cinematic Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url('/hope_link_auth_bg_1777964018455.png')` }}
      />
      <div className="absolute inset-0 z-0 bg-black/60 backdrop-blur-sm" />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/20 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="group relative p-1 rounded-[3rem] bg-gradient-to-b from-white/20 to-transparent backdrop-blur-2xl shadow-2xl overflow-hidden">
          {/* Inner Content Card */}
          <div className="bg-card/80 rounded-[2.9rem] px-8 py-12 md:px-16 md:py-20 border border-white/10 flex flex-col items-center text-center">
            
            <div className="space-y-6 mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
                <Sparkles className="size-3" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Join the Movement</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
                Create your <span className="text-primary underline underline-offset-8 decoration-primary/20">Impact</span>
              </h1>
              
              <TypographyMuted className="text-lg md:text-xl max-w-md mx-auto leading-relaxed">
                Start your journey with HopeLink today and become part of a global ecosystem of care.
              </TypographyMuted>
            </div>

            <div className="w-full space-y-8">
              <SignUpForm />
              
              <div className="pt-6 border-t border-border/50">
                <TypographyMuted className="text-sm">
                  Already part of the community?{" "}
                  <Link
                    className="font-bold text-foreground hover:text-primary transition-colors underline underline-offset-4"
                    href="/sign-in"
                  >
                    Sign in here
                  </Link>
                </TypographyMuted>
              </div>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-60">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="size-3" />
                <span>Secure Data</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="size-3" />
                <span>Community Verified</span>
              </div>
            </div>
            
            <div className="mt-8 text-[10px] text-muted-foreground leading-relaxed max-w-xs opacity-50">
              By joining, you agree to our{" "}
              <Link className="underline hover:text-primary" href="/terms-of-service">Terms</Link>
              {" "}and{" "}
              <Link className="underline hover:text-primary" href="/privacy-policy">Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
