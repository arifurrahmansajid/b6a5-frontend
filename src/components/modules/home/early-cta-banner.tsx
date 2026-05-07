import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Heart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function EarlyCtaBanner() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Top Marquee-style Bar */}
      <div className="w-full bg-[#F9D362] py-4 border-y border-black/5 relative z-20 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap w-max">
          {[1, 2].map((group) => (
            <div key={group} className="flex items-center">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center">
                  <span className="flex items-center gap-6 text-sm font-black uppercase tracking-wider text-black px-6">
                    Health Support <span className="text-xl">✱</span>
                  </span>
                  <span className="flex items-center gap-6 text-sm font-black uppercase tracking-wider text-black px-6">
                    Volunteer Impact <span className="text-xl">✱</span>
                  </span>
                  <span className="flex items-center gap-6 text-sm font-black uppercase tracking-wider text-black px-6">
                    Future Ready <span className="text-xl">✱</span>
                  </span>
                  <span className="flex items-center gap-6 text-sm font-black uppercase tracking-wider text-black px-6">
                    Community Support <span className="text-xl">✱</span>
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Side: Overlapping Images */}
        <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-[480px] aspect-[4/5] lg:aspect-square">
            {/* Main Circle Image */}
            <div className="absolute top-0 left-0 w-[85%] h-[85%] rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-10">
              <Image 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop" 
                alt="Humanitarian Aid" 
                fill
                className="object-cover"
              />
            </div>
            {/* Overlapping Circle Image */}
            <div className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-full overflow-hidden border-[12px] border-white shadow-2xl z-20">
              <Image 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop" 
                alt="Community Support" 
                fill
                className="object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute bottom-[25%] left-0 bg-[#F9D362] p-6 lg:p-8 rounded-2xl shadow-2xl z-30 animate-bounce-slow">
              <p className="text-4xl lg:text-5xl font-black text-black leading-none">25+</p>
              <p className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-black/80 mt-1">Years Of<br/>Experience</p>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start space-y-8 order-1 lg:order-2">
          <div className="flex items-center gap-3 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700">
            <div className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em]">Trusted Humanitarian Network</span>
          </div>

          <h2 className="text-[48px] font-black tracking-tight leading-[1.05] text-[#022C22]">
            Your Kindness <br />
            Knows No Borders
          </h2>

          <p className="text-[18px] text-muted-foreground leading-relaxed max-w-xl">
            Join a global community dedicated to transforming lives. Whether you give time or resources, your impact starts here. We believe in the power of collective compassion through dedicated efforts and inclusive programs.
          </p>

          {/* Feature Card */}
          <div className="flex gap-6 p-8 rounded-[40px] bg-white border border-emerald-50 shadow-lg shadow-emerald-500/5 w-full max-w-lg group hover:border-emerald-200 transition-all">
            <div className="size-16 rounded-3xl bg-[#F9D362] flex items-center justify-center shrink-0 shadow-xl group-hover:rotate-6 transition-transform">
              <Heart className="size-8 text-black fill-black/10" />
            </div>
            <div className="space-y-3">
              <h4 className="text-xl font-black text-[#022C22]">Empowering Communities</h4>
              <p className="text-base text-muted-foreground leading-relaxed">
                We work closely with community to identify real needs and drive meaningful change for a better future.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6 pt-4 w-full">
            <Button asChild size="lg" className="h-16 px-10 rounded-xl bg-[#F9D362] hover:bg-[#eec13c] text-black font-black text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group">
              <Link href="/sign-up" className="flex items-center gap-3">
                Join HopeLink Today
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <button className="flex items-center gap-4 group px-4 py-2 rounded-xl hover:bg-emerald-50 transition-all">
              <div className="size-14 rounded-full bg-[#F9D362] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="size-5 text-black fill-black ml-1" />
              </div>
              <span className="text-lg font-black text-[#022C22]">Watch Our Video</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
