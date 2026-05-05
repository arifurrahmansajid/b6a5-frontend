import { TypographyMuted } from "@/components/shared/typography";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  FileText,
  MessageSquare,
  Users2,
  ArrowRight
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Post Request",
    desc: "Submit your need quickly with a simple, secure form.",
    number: "01"
  },
  {
    icon: Users2,
    title: "Get Support",
    desc: "Donors, volunteers & organizations respond instantly.",
    number: "02"
  },
  {
    icon: MessageSquare,
    title: "Coordinate",
    desc: "Chat and organize help efficiently through our system.",
    number: "03"
  },
  {
    icon: CheckCircle2,
    title: "Complete",
    desc: "Help is delivered and impact is marked complete.",
    number: "04"
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-32 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">The Process</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            How it <span className="text-primary">Works</span>
          </h2>
          <TypographyMuted className="text-lg md:text-xl max-w-2xl mx-auto">
            From initial request to real-world impact in four simple, transparent steps.
          </TypographyMuted>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent -translate-y-1/2 hidden lg:block -z-10" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative p-8 rounded-[2rem] bg-card border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10",
                "animate-in fade-in slide-in-from-bottom-12 duration-700",
                idx === 0 ? "delay-100" : idx === 1 ? "delay-200" : idx === 2 ? "delay-300" : "delay-500"
              )}
            >
              {/* Background Step Number */}
              <div className="absolute top-4 right-8 text-7xl font-black text-foreground/5 transition-colors group-hover:text-primary/10 select-none">
                {step.number}
              </div>

              <div className="relative z-10 flex flex-col items-center text-center gap-6">
                <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-lg shadow-primary/5">
                  <step.icon className="size-8 transition-transform duration-500 group-hover:scale-110" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-xl font-black tracking-tight">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile/Tablet Arrow */}
                {idx !== steps.length - 1 && (
                  <div className="lg:hidden">
                     <ArrowRight className="size-6 text-muted-foreground/30 rotate-90 md:rotate-0" />
                  </div>
                )}
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
