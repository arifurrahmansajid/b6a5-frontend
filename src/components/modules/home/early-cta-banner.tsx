import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake } from "lucide-react";
import Link from "next/link";

export function EarlyCtaBanner() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-6xl mx-auto relative group overflow-hidden rounded-[2.5rem] border border-border/50 bg-card p-1">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-emerald-500/10 -z-10" />
        <div className="absolute -top-24 -left-24 size-64 bg-primary/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="absolute -bottom-24 -right-24 size-64 bg-emerald-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        <div className="relative z-10 px-8 py-12 md:px-16 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <HeartHandshake className="size-4" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Join the movement</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
              Ready to make a <br />
              <span className="text-primary">Global Impact?</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Whether you provide support as a <span className="text-foreground font-bold">donor</span> or offer your skills as a <span className="text-foreground font-bold">volunteer</span>, your contribution helps HopeLink thrive and save lives worldwide.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
             <Button asChild size="lg" variant="outline" className="h-16 px-8 rounded-2xl border-primary/20 hover:bg-primary/5 font-bold transition-all hover:scale-105">
                <Link href="/sign-up">Become a Volunteer</Link>
             </Button>
             <Button asChild size="lg" className="h-16 px-10 rounded-2xl bg-primary text-primary-foreground font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                <Link href="/sign-up" className="flex items-center gap-2">
                  Get Started Now
                  <ArrowRight className="size-5" />
                </Link>
             </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
