import { TypographyMuted } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ArrowUpRight,
  Building2,
  CircleDollarSign,
  HeartHandshake,
  Users2,
} from "lucide-react";
import Link from "next/link";

const roles = [
  {
    icon: HeartHandshake,
    title: "User",
    subtitle: "Start your journey",
    desc: "Request help, connect with supporters, and explore the global community.",
    color: "primary"
  },
  {
    icon: CircleDollarSign,
    title: "Donor",
    subtitle: "Empower through giving",
    desc: "Provide financial aid and track your contributions with total transparency.",
    color: "emerald"
  },
  {
    icon: Users2,
    title: "Volunteer",
    subtitle: "Hands-on support",
    desc: "Offer your skills and time to support urgent requests in your local area.",
    color: "primary"
  },
  {
    icon: Building2,
    title: "Organization",
    subtitle: "Lead and scale",
    desc: "Manage campaigns and coordinate large-scale efforts effectively.",
    color: "emerald"
  },
];

export function RoleSystem() {
  return (
    <section className="relative py-32 overflow-hidden bg-background">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Impact Roles</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Everyone plays a <span className="text-primary underline decoration-primary/20 underline-offset-8">role</span>
          </h2>
          <TypographyMuted className="text-lg md:text-xl max-w-2xl mx-auto">
            Together we create real impact. Start as a User and unlock your potential.
          </TypographyMuted>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roles.map((role, i) => (
            <div
              key={role.title}
              className={cn(
                "group relative p-1 rounded-[2.5rem] bg-gradient-to-b from-border/50 to-transparent transition-all duration-500 hover:-translate-y-2",
                "animate-in fade-in slide-in-from-bottom-12 duration-700",
                i === 0 ? "delay-100" : i === 1 ? "delay-200" : i === 2 ? "delay-300" : "delay-500"
              )}
            >
              <div className="relative h-full px-8 py-12 bg-card rounded-[2.4rem] border border-border/50 overflow-hidden flex flex-col items-center text-center">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: `radial-gradient(circle at 2px 2px, var(--foreground) 1px, transparent 0)`, backgroundSize: '24px 24px' }} 
                />

                <div className={cn(
                  "size-20 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 shadow-2xl",
                  "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-primary/40",
                  role.color === "emerald" && "bg-emerald-500/10 text-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-emerald-500/40"
                )}>
                  <role.icon className="size-10 transition-transform duration-500 group-hover:scale-110" />
                </div>

                <div className="space-y-4 mb-8 flex-1">
                  <h3 className="text-2xl font-black tracking-tight">{role.title}</h3>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary/80">{role.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                    {role.desc}
                  </p>
                </div>

                <Button asChild className="w-full h-14 rounded-2xl font-bold group/btn relative overflow-hidden" variant={role.color === "emerald" ? "default" : "default"}>
                  <Link href="/sign-up" className="flex items-center justify-center gap-2">
                    {role.title === "User" ? "Sign Up" : "Join Now"}
                    <ArrowUpRight className="size-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Link>
                </Button>

                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
