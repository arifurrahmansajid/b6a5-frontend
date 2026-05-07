import { Button } from "@/components/ui/button";
import { ArrowUpRight, Heart, Users, Globe, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function FinalCtaBanner({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={cn("relative py-24 px-6 overflow-hidden bg-[#022C22]", className)} {...props}>
      {/* Background Pattern (Zigzag/Herringbone effect) */}
      <div className="absolute inset-0 opacity-[0.03] z-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        backgroundSize: '30px 30px'
      }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        {/* Left Side: Image & Stats Grid */}
        <div className="relative flex justify-center lg:justify-start min-h-[500px]">
          <div className="relative w-full max-w-[500px]">
            {/* Main Center Image */}
            <div className="absolute top-[15%] left-[10%] w-[60%] aspect-[3/4] rounded-2xl overflow-hidden border-4 border-[#022C22] shadow-2xl z-10">
              <Image
                src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
                alt="Community Work"
                fill
                className="object-cover"
              />
            </div>

            {/* Top Right Image */}
            <div className="absolute top-0 right-0 w-[50%] aspect-square rounded-2xl overflow-hidden border-4 border-[#022C22] shadow-2xl z-0">
              <Image
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2070&auto=format&fit=crop"
                alt="Volunteers"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom Right Image */}
            <div className="absolute bottom-0 right-[5%] w-[45%] aspect-square rounded-2xl overflow-hidden border-4 border-[#022C22] shadow-2xl z-20">
              <Image
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                alt="Helping Hands"
                fill
                className="object-cover"
              />
            </div>

            {/* Stats Card 1 (Top Left) */}
            <div className="absolute top-[5%] left-0 bg-white p-4 rounded-xl shadow-2xl z-30 animate-bounce-slow">
              <p className="text-xl font-black text-[#022C22]">3,500+</p>
              <p className="text-[10px] font-bold text-muted-foreground uppercase">Active Volunteers</p>
              <div className="flex -space-x-2 mt-2">
                {[1, 2, 3].map(i => (
                  <div key={i} className="size-6 rounded-full border-2 border-white overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Card 2 (Bottom Left) */}
            <div className="absolute bottom-[5%] left-0 bg-white p-4 rounded-xl shadow-2xl z-30">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-[#F9D362] flex items-center justify-center">
                  <Globe className="size-5 text-black" />
                </div>
                <div>
                  <p className="text-xl font-black text-[#022C22]">250+</p>
                  <p className="text-[10px] font-bold text-muted-foreground uppercase">Projects Completed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col items-start space-y-8">
          <div className="flex items-center gap-2 text-[#F9D362]">
            <div className="size-1 bg-[#F9D362] rounded-full" />
            <span className="text-xs font-black uppercase tracking-widest">Start Your Journey</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white leading-tight">
            Grow Your <span className="text-[#F9D362]">Legacy</span> <br />
            by Serving with HopeLink
          </h2>

          <p className="text-lg text-white/70 leading-relaxed max-w-xl">
            Join as a donor or volunteer and make a lasting impact. Every act of giving—whether your time or contributions—brightens lives and brings eternal rewards.
          </p>

          {/* Action Tabs/Buttons */}
          <div className="flex flex-wrap gap-3 pt-2">
            <Button className="h-12 px-8 rounded-full !bg-[#F9D362] !text-black font-bold hover:!bg-[#eec13c] border-none">
              Join as Volunteer
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 !text-white hover:!bg-white/10 bg-transparent">
              Join as Donor
            </Button>
            <Button variant="outline" className="h-12 px-8 rounded-full border-white/20 !text-white hover:!bg-white/10 bg-transparent">
              Collaboration
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-6">
            <div className="size-14 rounded-2xl bg-[#F9D362]/10 border border-[#F9D362]/20 flex items-center justify-center">
              <Heart className="size-7 text-[#F9D362]" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Empowering Communities</h4>
              <p className="text-sm text-white/50">
                We design and implement programs that address real community needs.
              </p>
            </div>
          </div>

          <Button asChild size="lg" className="h-14 px-10 rounded-xl !bg-[#F9D362] hover:!bg-[#eec13c] !text-black font-black mt-4 group border-none">
            <Link href="/contact" className="flex items-center gap-2">
              Contact Us
              <ArrowUpRight className="size-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom Bar Accent */}
      {/* <div className="mt-20 border-t border-white/10 pt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center">
          <div className="size-10 rounded-full !bg-[#F9D362] flex items-center justify-center shadow-lg shadow-[#F9D362]/20">
            <Phone className="size-5 !text-black" />
          </div>
          <p className="text-white/80 font-medium">
            Let's make something great work together. <Link href="/quote" className="text-[#F9D362] underline underline-offset-4 font-black">Get Free Quote</Link>
          </p>
        </div>
      </div> */}
    </section>
  );
}
