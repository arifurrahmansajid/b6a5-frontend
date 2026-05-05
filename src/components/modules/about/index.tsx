import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
} from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Heart, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* About Hero Section */}
      <section className="relative min-h-[65vh] flex items-center pb-16 px-6 max-w-7xl mx-auto">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--border) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        <div className="absolute top-0 right-0 size-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Left Side: Content */}
          <div className="lg:col-span-8 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary mb-8 animate-in fade-in slide-in-from-left-4 duration-500">
              <span className="size-1.5 rounded-full bg-primary animate-ping" />
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Global Impact Platform</span>
            </div>

            <div className="w-16 h-1 bg-primary mb-10 rounded-full" />

            <h1 className="text-6xl md:text-8xl font-black tracking-tight leading-[0.9] mb-10 
                           animate-in fade-in slide-in-from-left-8 duration-700">
              About <br />
              <span className="text-primary">HopeLink</span>
            </h1>

            <TypographyLead className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed animate-in fade-in slide-in-from-left-12 duration-1000 delay-200">
              Empowering humanity to support each other — anytime, anywhere. Our mission is to make help <span className="text-foreground font-bold underline decoration-primary/30">accessible</span>, <span className="text-foreground font-bold underline decoration-primary/30">transparent</span>, and <span className="text-foreground font-bold underline decoration-primary/30">impactful</span> for everyone in need across the globe.
            </TypographyLead>

            <div className="flex flex-wrap gap-6 mb-16 animate-in fade-in slide-in-from-left-16 duration-1000 delay-300">
              <Button size="lg" className="h-14 px-8 rounded-full font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-xl shadow-primary/20" asChild>
                <Link href="/sign-up">
                  <Zap className="mr-2 size-5 fill-current" />
                  Start Making a Difference
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="h-14 px-8 rounded-full font-bold border-border bg-transparent hover:bg-white/5 transition-all" asChild>
                <Link href="#how-it-works">Learn how it works</Link>
              </Button>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-3 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 animate-in fade-in duration-1000 delay-500">
              {["Verified Network", "Secure Messaging", "Real-time Aid", "Transparent Impact"].map(tag => (
                <span key={tag} className="px-3 py-1 rounded-full border border-border text-[10px] font-bold uppercase tracking-wider">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Side: Impact Cards */}
          <div className="lg:col-span-4 flex flex-col gap-4 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            {[
              { val: "120+", label: "Countries Reached", icon: Globe },
              { val: "50K+", label: "Lives Impacted", icon: Heart },
              { val: "98%", label: "Aid Delivered", icon: ShieldCheck }
            ].map((stat, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-card border border-border/50 shadow-lg hover:border-primary/30 transition-all hover:bg-primary/5">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-4xl font-black text-primary group-hover:scale-110 transition-transform origin-left">{stat.val}</span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-1">{stat.label}</span>
                  </div>
                  <stat.icon className="size-8 text-primary opacity-20 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Detailed Content Restructured */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-border/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
          <div className="group p-8 md:p-12 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl transition-all hover:border-primary/30 hover:shadow-primary/5">
            <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Heart className="size-8 text-primary" />
            </div>
            <TypographyH2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision
            </TypographyH2>
            <TypographyP className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where every human being can easily request help, offer support, and build trust—no matter their location or background. By leveraging cutting-edge technology, we connect donors, volunteers, and organizations to those in need on a single, secure, and borderless platform.
            </TypographyP>
          </div>

          <div className="group p-8 md:p-12 rounded-[2.5rem] bg-secondary/30 backdrop-blur-sm border border-border/50 shadow-2xl transition-all hover:border-primary/30 hover:shadow-primary/5">
            <div className="size-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <Zap className="size-8 text-emerald-500" />
            </div>
            <TypographyH2 className="text-3xl md:text-4xl font-bold mb-6">
              What Makes Us Unique?
            </TypographyH2>
            <ul className="space-y-4">
              {[
                "Verified global network with transparent impact tracking",
                "Real-time secure messaging and coordination",
                "Advanced role-based ecosystem for specialized support",
                "Structured response management for efficient aid delivery"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-lg text-muted-foreground">
                  <ShieldCheck className="size-6 text-primary shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative rounded-[3rem] p-8 md:p-20 overflow-hidden mb-32 border border-primary/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-emerald-500/10 -z-10" />
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <TypographyH2 className="text-3xl md:text-5xl font-black mb-6">
                How We Operate
              </TypographyH2>
              <TypographyP className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                HopeLink is built on universal values of trust, transparency, and empathy. Every request is carefully reviewed, and every contribution is tracked for absolute accountability. We ensure that your kindness reaches those who need it most, efficiently and securely.
              </TypographyP>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center gap-6">
              <TypographyMuted className="text-lg font-medium text-primary uppercase tracking-widest">
                Join the Global Movement
              </TypographyMuted>
              <Button asChild size="lg" className="h-16 px-10 text-lg font-bold rounded-2xl shadow-xl shadow-primary/30 w-full max-w-sm">
                <Link href="/sign-up">Start Making a Difference</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-12 px-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="relative group overflow-hidden rounded-[2.5rem] border border-border/50 bg-card p-10 md:p-16 transition-all hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5">

            {/* Subtle decorative glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] group-hover:bg-primary/10 transition-colors" />

            <div className="flex flex-col md:flex-row items-center gap-12 text-left">

              {/* Content Section */}
              <div className="flex-1 space-y-5">
                <div className="inline-flex items-center gap-2 text-primary font-bold text-xs tracking-[0.2em] uppercase">
                  <span className="size-2 rounded-full bg-primary animate-pulse" />
                  Global Partnerships
                </div>

                <h3 className="text-4xl md:text-5xl font-black tracking-tight text-foreground leading-tight">
                  Global <span className="text-primary">Collaboration</span>
                </h3>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  We are open for strategic partnerships with international organizations, community centers, and global leaders. Let's connect and build a legacy of impact together.
                </p>
              </div>

              {/* Action Section */}
              <div className="shrink-0 flex flex-col items-center gap-4">
                <a
                  href="mailto:support@hopelink.com"
                  className="flex items-center gap-4 px-10 py-5 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group/link shadow-xl shadow-primary/20 hover:scale-105"
                >
                  <MessageSquare className="size-6" />
                  <span className="text-lg font-black tracking-tight">Email Us</span>
                  <ArrowRight className="size-5 -rotate-45 group-hover/link:rotate-0 transition-transform" />
                </a>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold opacity-60">
                  Response within 24h
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
