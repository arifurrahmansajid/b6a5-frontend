import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
  TypographyList,
  TypographyMuted,
  TypographyP,
} from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { GlobeIcon, HeartIcon, ShieldCheckIcon, ZapIcon } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 blur-[150px] rounded-full" />
      </div>

      <div className="text-center mb-24 animate-in fade-in slide-in-from-bottom-8 duration-700">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
          <GlobeIcon className="size-4" />
          <span className="text-xs font-bold tracking-widest uppercase">Global Impact</span>
        </div>
        <TypographyH1 className="text-5xl md:text-7xl font-black tracking-tight text-balance">
          About <span className="text-primary">HopeLink</span>
        </TypographyH1>
        <TypographyLead className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground leading-relaxed">
          Empowering humanity to support each other—anytime, anywhere. Our mission is to make help accessible, transparent, and impactful for **everyone in need** across the globe.
        </TypographyLead>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">
        <div className="group p-8 md:p-12 rounded-[2.5rem] bg-card border border-border/50 shadow-2xl transition-all hover:border-primary/30 hover:shadow-primary/5">
          <div className="size-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
            <HeartIcon className="size-8 text-primary" />
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
            <ZapIcon className="size-8 text-emerald-500" />
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
                 <ShieldCheckIcon className="size-6 text-primary shrink-0 mt-0.5" />
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

      <div className="max-w-4xl mx-auto text-center border-t border-border/50 pt-20">
        <TypographyH2 className="text-3xl md:text-5xl font-bold mb-8">
          Global Collaboration
        </TypographyH2>
        <TypographyP className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
          We welcome partnerships with international organizations, community centers, and global leaders. For collaboration, feedback, or support, please connect with us at:
        </TypographyP>
        <Link
          href="mailto:support@hopelink.com"
          className="text-2xl md:text-4xl font-black text-primary hover:underline transition-all"
        >
          support@hopelink.com
        </Link>
      </div>
    </section>
  );
}
