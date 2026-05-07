import { TypographyMuted } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Bell } from "lucide-react";
import Image from "next/image";

export function NewsletterSignup() {
  return (
    <section className="relative w-full h-[500px] md:h-[650px] flex items-center overflow-hidden mx-auto">
      {/* Background with Theme-consistent Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imgi_63_hero-bg-image.jpg"
          alt="Impact background"
          fill
          className="object-cover"
        />
        {/* Obsidian Emerald Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022C22]/95 via-[#022C22]/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl space-y-10 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F9D362]/10 border border-[#F9D362]/20 text-[#F9D362]">
              <Bell className="size-3.5" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Don't Miss Out</span>
            </div>

            <h2 className="text-5xl md:text-8xl font-black tracking-tight text-white leading-[1.05]">
              Stay in the <br />
              <span className="text-[#F9D362]">Loop</span>
            </h2>

            <p className="text-lg md:text-2xl text-white/80 max-w-2xl leading-relaxed font-medium">
              Join our global community of changemakers. Get the latest humanitarian insights and impact stories delivered to your inbox.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 max-w-xl">
            <div className="flex-1 relative group">
              <div className="absolute inset-y-0 left-5 flex items-center text-white/30 group-focus-within:text-[#F9D362] transition-colors">
                <Mail className="size-5" />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl pl-14 pr-6 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F9D362]/50 transition-all shadow-inner"
              />
            </div>

            <Button size="lg" className="h-16 px-10 rounded-2xl !bg-[#F9D362] hover:!bg-[#eec13c] !text-black font-black text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-[#F9D362]/10 flex items-center gap-3 group border-none">
              SUBSCRIBE
              <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Side Navigation Accent */}
      {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-3 p-4 bg-white/5 backdrop-blur-2xl rounded-l-3xl border-l border-y border-white/10 shadow-2xl">
        <div className="size-12 rounded-xl bg-[#F9D362] flex items-center justify-center text-black shadow-lg shadow-[#F9D362]/20"><Mail className="size-5" /></div>
        <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer"><div className="size-2 rounded-full bg-white/40" /></div>
        <div className="size-12 rounded-xl bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer"><div className="size-2 rounded-full bg-white/40" /></div>
      </div> */}
    </section>
  );
}
