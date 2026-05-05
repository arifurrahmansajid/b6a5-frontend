import { TypographyMuted } from "@/components/shared/typography";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Heart,
  MapPin,
  MessageSquare,
  ShieldCheck,
  TrendingUp,
  Users2,
} from "lucide-react";
import Link from "next/link";

const featureHighlights = [
  {
    icon: MapPin,
    title: "Smart Requests",
    description: "Post and track requests by urgency and location with precision.",
  },
  {
    icon: Users2,
    title: "Global Network",
    description: "Connect with donors and volunteers across a unified platform.",
  },
  {
    icon: Heart,
    title: "Impact Tracking",
    description: "Monitor real-time progress and visual impact of every contribution.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Trust",
    description: "Advanced verification systems ensuring secure and honest help.",
  },
  {
    icon: MessageSquare,
    title: "Secure Chat",
    description: "Instant, encrypted communication between all parties involved.",
  },
  {
    icon: TrendingUp,
    title: "Real-time Stats",
    description: "Live data visualization of global humanitarian progress.",
  },
];

export function FeatureHighlights() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 size-[600px] bg-primary/5 blur-[120px] rounded-full -z-10 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
             <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Core Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Empower the <span className="text-primary">HopeLink</span> <br />
            Help Anytime, Anywhere
          </h2>
          <TypographyMuted className="text-lg md:text-xl max-w-2xl mx-auto">
            A comprehensive suite of tools designed to make humanitarian aid more accessible, transparent, and impactful.
          </TypographyMuted>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureHighlights.map((feature, i) => (
            <div
              key={feature.title}
              className={cn(
                "group relative p-8 rounded-[2rem] bg-card border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
                "animate-in fade-in slide-in-from-bottom-12 duration-700",
                `delay-${(i % 4) * 100}`
              )}
            >
              {/* Subtle Icon Background Glow */}
              <div className="absolute top-0 right-0 p-8 text-primary/5 transition-colors group-hover:text-primary/10">
                 <feature.icon className="size-24 -rotate-12 translate-x-8 -translate-y-8" />
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="size-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground shadow-lg shadow-primary/5">
                  <feature.icon className="size-7 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-black tracking-tight mb-3 transition-colors group-hover:text-primary">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base flex-1">
                  {feature.description}
                </p>

                <Link href="#" className="inline-flex items-center gap-2 mt-6 text-xs font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group/link">
                   View Details
                   <ArrowRight className="size-3 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-[2rem] bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
