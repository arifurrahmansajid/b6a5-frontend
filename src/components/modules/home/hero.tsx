import { TypographyH1, TypographyMuted } from "@/components/shared/typography";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartHandshake, Sparkles, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="HopeLink Community"
          fill
          className="object-cover"
          priority
        />
        {/* Deep Green Gradient Overlay (as seen in the image) */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#022C22] via-[#022C22]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 pt-20">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          {/* Avatar Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-8 
                          animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="size-6 rounded-full border border-white/50 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span className="text-xs font-medium">Driving Positive Change Worldwide</span>
          </div>

          <TypographyH1
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 text-white
                       animate-in fade-in slide-in-from-left-12 duration-1000 fill-mode-backwards"
          >
            Request Help, <br />
            <span className="text-white">
              Donate & Volunteer
            </span>
          </TypographyH1>

          <TypographyMuted
            className="text-lg md:text-xl max-w-xl mb-10 text-white/80
                       animate-in fade-in slide-in-from-left-16 duration-1000 delay-200 fill-mode-backwards"
          >
            Empowering the global community through seamless support. Post help requests, contribute your wealth, or gift your time to make a real-world impact.
          </TypographyMuted>

          <div
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto
                       animate-in fade-in slide-in-from-left-20 duration-1000 delay-300 fill-mode-backwards"
          >
            {/* Primary Button styled like "Become A Volunteer" in the image */}
            <Button 
              size="lg" 
              className="h-14 px-8 text-base font-bold group rounded-lg bg-[#F9D362] hover:bg-[#eec13c] text-black border-none shadow-xl" 
              asChild
            >
              <Link href="/dashboard/my-requests">
                Post a Help Request
                <ArrowRight className="ml-2 size-5 transition-transform group-hover:rotate-[-45deg]" />
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="h-14 px-8 text-base font-bold rounded-lg border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all" 
              asChild
            >
              <Link href="/volunteer/dashboard" className="flex items-center gap-2">
                <HeartHandshake className="size-5" />
                Volunteer Now
              </Link>
            </Button>
          </div>
        </div>

        {/* Right Content - Floating Card */}
        <div className="relative z-10 hidden lg:flex justify-end animate-in fade-in zoom-in-95 duration-1000 delay-300">
          <div className="w-full max-w-sm p-8 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-6">
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-[#F9D362]">12.5k+</span>
                <TrendingUp className="size-6 text-[#F9D362]" />
              </div>
              <p className="text-white font-bold text-lg">Active Volunteers</p>
            </div>
            
            <p className="text-white/70 text-sm leading-relaxed">
              A passionate network of volunteers working on the ground to provide support and inspiration where it's needed most.
            </p>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#F9D362]/20 flex items-center justify-center">
                  <Users className="size-5 text-[#F9D362]" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">$1.8M Total Donated</p>
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">Across the platform</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons Sidebar (as seen in image) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:flex flex-col gap-4 p-4 bg-white/10 backdrop-blur-md rounded-l-2xl border-l border-y border-white/20">
        <button className="text-white/70 hover:text-white transition-colors">
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        </button>
        <button className="text-white/70 hover:text-white transition-colors">
          <svg className="size-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </button>
      </div>
    </div>
  );
}
