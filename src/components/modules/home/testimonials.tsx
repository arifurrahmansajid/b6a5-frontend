import { TypographyMuted } from "@/components/shared/typography";
import { cn } from "@/lib/utils";
import { BadgeCheck, Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Fatima Noor",
    role: "Donor",
    avatar: "https://mockmind-api.uifaces.co/content/human/45.jpg",
    testimonial:
      "What I love most is the transparency. I can see exactly where my donation goes and how it helps someone in real life.",
    verified: true,
  },
  {
    name: "Omar Hassan",
    role: "Volunteer",
    avatar: "https://mockmind-api.uifaces.co/content/human/33.jpg",
    testimonial:
      "Being able to physically help people in my area and track progress through the platform is an amazing experience.",
    verified: true,
  },
  {
    name: "Mahmudul Hasan",
    role: "Community Member",
    avatar: "https://mockmind-api.uifaces.co/content/human/77.jpg",
    testimonial:
      "This platform builds trust. You know the requests are real, and the system keeps everything transparent.",
    verified: true,
  },
  {
    name: "Zainab Ali",
    role: "Donor",
    avatar: "https://mockmind-api.uifaces.co/content/human/91.jpg",
    testimonial:
      "Even small contributions feel meaningful because you can see the real impact. That’s what makes HopeLink special.",
    verified: true,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Cinematic Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Sparkles className="size-3" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Community Trust</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">
            Trusted by the <span className="text-primary">Community</span>
          </h2>
          <TypographyMuted className="text-lg md:text-xl max-w-2xl mx-auto">
            Real stories from people who gave help, received support, and made a difference globally.
          </TypographyMuted>

          <div className="pt-6 flex flex-wrap justify-center gap-6 opacity-60">
            {["🤝 Community Driven", "🔐 Verified Users", "📊 Transparent Impact"].map((badge, i) => (
              <span key={i} className="text-xs font-bold uppercase tracking-widest">{badge}</span>
            ))}
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative break-inside-avoid p-8 rounded-[2rem] bg-card border border-border/50 transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5",
                "animate-in fade-in slide-in-from-bottom-12 duration-700",
                `delay-${(idx % 4) * 100}`
              )}
            >
              {/* Large Stylized Quote Mark */}
              <Quote className="absolute top-6 right-8 size-12 text-primary/5 transition-colors group-hover:text-primary/10" />

              <div className="relative z-10 space-y-6">
                <p className="text-muted-foreground leading-relaxed italic text-lg">
                  "{item.testimonial}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="relative size-12 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary transition-all duration-500">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-black tracking-tight truncate">{item.name}</h4>
                      {item.verified && (
                        <BadgeCheck className="size-4 text-primary shrink-0" />
                      )}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-primary/70">{item.role}</p>
                  </div>
                </div>
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
