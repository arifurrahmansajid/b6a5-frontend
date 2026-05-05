import { TypographyH1, TypographyMuted } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-[90vh] flex items-center pb-8 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 -z-10 w-full h-full">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 
                          animate-in fade-in slide-in-from-left-8 duration-700">
            <Sparkles className="size-4 animate-spin-slow" />
            <span className="text-xs font-bold tracking-widest uppercase">HopeLink Community</span>
          </div>

          <TypographyH1
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6
                       animate-in fade-in slide-in-from-left-12 duration-1000 fill-mode-backwards"
          >
            Request Help, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-500">
              Donate & Volunteer
            </span>
          </TypographyH1>

          <TypographyMuted
            className="text-lg md:text-xl max-w-xl mb-10 text-pretty
                       animate-in fade-in slide-in-from-left-16 duration-1000 delay-200 fill-mode-backwards"
          >
            Empowering the global community through seamless support. Post help requests, contribute your wealth, or gift your time to make a real-world impact.
          </TypographyMuted>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto
                       animate-in fade-in slide-in-from-left-20 duration-1000 delay-300 fill-mode-backwards"
          >
            <Button size="lg" className="h-14 px-8 text-base font-bold group rounded-2xl shadow-xl shadow-primary/20" asChild>
              <Link href="/dashboard/my-requests">
                Post a Help Request
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-14 px-8 text-base font-bold rounded-2xl backdrop-blur-md bg-background/30 hover:bg-primary/5 transition-all" asChild>
              <Link href="/volunteer/dashboard" className="flex items-center gap-2">
                <HeartHandshake className="size-5 text-primary" />
                Volunteer Now
              </Link>
            </Button>
          </div>

          {/* Social Proof / Stats */}
          <div className="mt-12 flex items-center gap-8 border-t pt-8 w-full border-border/50 animate-in fade-in duration-1000 delay-500">
            <div>
              <p className="text-2xl font-black text-foreground">12.5k+</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Lives Impacted</p>
            </div>
            <div className="h-8 w-px bg-border/50" />
            <div>
              <p className="text-2xl font-black text-foreground">$1.8M</p>
              <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground">Total Donated</p>
            </div>
            <div className="h-8 w-px bg-border/50" />
            <div className="flex -space-x-3 overflow-hidden">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="inline-block size-10 rounded-full ring-2 ring-background bg-muted overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" width={40} height={40} className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="flex items-center justify-center size-10 rounded-full ring-2 ring-background bg-primary text-[10px] font-bold">
                +5k
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - The Image Hero */}
        <div className="relative z-10 hidden lg:block animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto group">
            {/* Glass Frame Decorative */}
            <div className="absolute inset-0 -m-4 rounded-[2rem] border border-primary/20 bg-primary/5 backdrop-blur-3xl -rotate-3 transition-transform group-hover:rotate-0 duration-500" />
            <div className="absolute inset-0 -m-4 rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-3xl rotate-3 transition-transform group-hover:rotate-0 duration-500 delay-75" />

            {/* Main Image */}
            <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden border-2 border-background shadow-2xl">
              <Image
                src="/hero-bg.png"
                alt="HopeLink Community"
                fill
                className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-background/80 backdrop-blur-md border border-white/10 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <HeartHandshake className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-bold">New Help Request</p>
                    <p className="text-[10px] text-muted-foreground italic">"I need urgent medical support for my..."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
