import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export function EarlyCtaBanner() {
  return (
    <div className="py-32 px-6 relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-12 relative z-10 animate-in fade-in slide-in-from-bottom-12 duration-1000">
        
        {/* Trust Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md">
          <ShieldCheck className="size-4 text-primary" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary/80">Trusted Humanitarian Network</span>
        </div>

        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
          Your Kindness <br />
          <span className="bg-gradient-to-r from-primary via-emerald-400 to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            Knows No Borders
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Join a global community dedicated to transforming lives. Whether you give time or resources, your impact starts here.
        </p>

        {/* Primary Action */}
        <div className="pt-4">
          <Button asChild size="lg" className="group relative h-14 px-8 rounded-2xl bg-primary text-primary-foreground text-base md:text-lg font-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] overflow-hidden">
            <Link href="/sign-up" className="flex items-center gap-3">
              <Sparkles className="size-4 md:size-5 group-hover:rotate-12 transition-transform" />
              Join HopeLink Today
              <ArrowRight className="size-4 md:size-5 group-hover:translate-x-2 transition-transform" />
              
              {/* Button Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shine" />
            </Link>
          </Button>
          
          <div className="mt-8 flex items-center justify-center gap-8 opacity-40 grayscale">
             {["100% Transparent", "Global Reach", "Secure Platform"].map((feat, i) => (
               <span key={i} className="text-[10px] font-bold uppercase tracking-widest">{feat}</span>
             ))}
          </div>
        </div>
      </div>

      {/* Decorative Floating Dots */}
      <div className="absolute top-1/4 left-10 size-2 bg-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 right-10 size-3 bg-emerald-500/20 rounded-full animate-pulse delay-500" />
    </div>
  );
}
